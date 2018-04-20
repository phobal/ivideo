// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import source from './source';

const rootReducer = combineReducers({
  router,
  source,
});

export default rootReducer;
