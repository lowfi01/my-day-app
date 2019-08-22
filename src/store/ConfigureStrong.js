import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import activity from '../reducers/Activity';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default () => {
  const store = createStore(
    combineReducers({
      activity: activity
    }),
    composeEnchancers(applyMiddleware(thunk))
  );

  return store;
};