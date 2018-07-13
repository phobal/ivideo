// @flow
import React from 'react';

import Channel from './Channel';
import ToolBar from './ToolBar';

export const Frame = ({
  onComeback,
  onSourceSelected,
  onSwitchSource,
  handleSwitchChannel,
  channel,
  url,
  freeUrl,
  title,
  isFullScreen,
  children
}) => {
  const isHiddenStyle = isFullScreen ? { display: 'none'} : { display: 'flex'};
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: '150px', ...isHiddenStyle }}>
        <Channel
          channel={channel}
          handleSwitchChannel={handleSwitchChannel}
        />
      </div>
      <div style={{ height: '100vh', width: isFullScreen ? '100vw' : 'calc(100vw - 150px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '60px', ...isHiddenStyle }}>
          <ToolBar
            onComeback={onComeback}
            onSourceSelected={onSourceSelected}
            onSwitchSource={onSwitchSource}       
            freeUrl={freeUrl}       
            title={title}
          />
        </div>
        { children }
      </div>
    </div>
  )
}

export default Frame;