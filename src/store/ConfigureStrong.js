import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import activity from '../reducers/Activity';


// setup thunk to work with our developer tools
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line


// This is how you export the store!!
export default () => {
  const store = createStore(
    combineReducers({
      activity: activity
    }),
    composeEnchancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};