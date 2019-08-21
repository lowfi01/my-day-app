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