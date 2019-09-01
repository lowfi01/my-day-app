// TODO LIST
// ADD PROPTYPES
// CREATE BRANCH CALLED GUI-Basic-CRUD
// Then start Authentication
// Then start graphing data


import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/ConfigureStrong';
import { startGetActivities } from './actions/Activity';

const store = configureStore();

const loadingScreen = (
  <h1>Loading.....</h1>
);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDom.render(
    loadingScreen,
    document.getElementById('root')
  );

store.dispatch(startGetActivities()).then(() => {
  ReactDom.render(
    app,
    document.getElementById('root')
  );
});

