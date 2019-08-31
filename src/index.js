// TODO LIST
// Connect get activitity to database API ACtions
// make number inputs - select box options
// add pain level - form inputs
// add mental clarity fields - form inputs
// fix - input feilds @activityForms
// fix - input feilds @activitylistitem
// fix - input feilds @reduxDefaultState
// ADD Get method to pull all state at load
// ADD onclick to card to edit
// ADD delete list card button for dashboard view (pass param of id)
// ADD delete list card button for edit view (pass param of id)
// CREATE BRANCH CALLED GUI-Basic-CRUD
// Then start Authentication
// Then start graphing data


import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter'
import configureStore from './store/ConfigureStrong';
import { startGetActivities } from './actions/Activity'

const store = configureStore();


const loadingScreen = (
  <h1>Loading.....</h1>
)

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

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

