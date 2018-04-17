/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Video from './containers/Video';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={Video} />
    </Switch>
  </App>
);
// http://jx.vgoodapi.com/jx.php?url=https://v.qq.com/x/cover/ejtoj98r02phutz.html

// https://v.qq.com/x/cover/ejtoj98r02phutz.html
