// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import source from './source';

const rootReducer = combineReducers({
  counter,
  router,
  source,
});

export default rootReducer;
