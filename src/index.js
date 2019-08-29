// TODO LIST
// ADD Dashboard to view all activities as list of cards
// ADD onclick to card to edit
// ADD delete list card button for dashboard view (pass param of id)
// ADD delete list card button for edit view (pass param of id)


import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter'

import configureStore from './store/ConfigureStrong';

const store = configureStore();


const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDom.render(
      app,
      document.getElementById('root')
    );