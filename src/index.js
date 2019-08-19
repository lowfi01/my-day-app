import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import AppRouter from './routers/AppRouter'


ReactDom.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
  );