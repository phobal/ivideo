// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { webview, ipcRenderer } from 'electron';

import Channel from './Channel';
import ToolBar from './ToolBar';
import Frame from './Frame';
import * as sourceActions from '../actions/source';

class VideoPlay extends PureComponent < Props > {
  constructor(props) {
    super(props);
    this.handleSwitchChannel = this.handleSwitchChannel.bind(this);
    this.onComeback = this.onComeback.bind(this);
    this.onSourceSelected = this.onSourceSelected.bind(this);
    this.onSwitchSource = this.onSwitchSource.bind(this);
  }
  state = {
    channel: [],
    url: 'https://v.qq.com',
    freeUrl: [],
    selectedUrl: 'http://vip.jlsprh.com/index.php?url=',
    isFullScreen: false,
  }
  componentDidMount() {
    this.props.actions.getAllVideoSource();
    const webview = this.webview;
    webview.addEventListener('dom-ready', () => {
      this.setTitle();
    });
    webview.addEventListener('new-window', (obj) => {
      const { freeUrl } = this.state;
      this.setState({
        url: `${obj.url}`
      });
    });
    webview.addEventListener('will-navigate', (obj) => {
      this.setState({
        url: `${obj.url}`
      });
    });
    ipcRenderer.on('enter-full-screen', (e, msg) => {
      this.setState({
        isFullScreen: msg
      });
    });
  }
  componentWillReceiveProps(nextProps) {
    const { source } = nextProps;
    if(source) {
      this.setState({
        channel: source.platformlist,
        freeUrl: source.list
      });
    }
  }
  handleSwitchChannel(value) {
    this.setState({
      url: value.key
    });
  }
  setTitle() {
    const title = this.webview.getTitle();   
    this.setState({
      title,
    }); 
  }
  onComeback() {
    this.webview.goBack();
  }
  onSourceSelected(value) {
    const selectedUrl = this.state.freeUrl.find(d => {
      if (d.name === value) {
        return d.url;
      }
    })
    this.setState({
      selectedUrl,
    });
  }
  onSwitchSource() {
    const { selectedUrl } = this.state;
    const currentVideoUrl = this.webview.getURL();
    this.setState({
      url: `${selectedUrl.url}${currentVideoUrl}`
    });
  }
  render() {
    const { channel, url, freeUrl, title, isFullScreen } = this.state;
    return (
      <Frame
        onComeback = { this.onComeback }
        onSourceSelected = { this.onSourceSelected }
        onSwitchSource = { this.onSwitchSource }
        handleSwitchChannel = { this.handleSwitchChannel }
        {...{ channel, url, freeUrl, title, isFullScreen }}
      >
          <webview
            ref={ (webview) => {this.webview = webview} }
            title="腾讯视频"
            style={{ height: isFullScreen ? '100vh' : 'calc(100vh - 60px)', width: '100%' }}
            src={url}
            allowpopups="true"
          >
          </webview>
      </Frame>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ...bindActionCreators(sourceActions, dispatch),
    },
  }
}
function mapStateToProps(state) {
  return {
    source: state.source    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlay);
