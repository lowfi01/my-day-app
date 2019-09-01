import React from 'react';
import { createBrowserHistory  } from 'history';
import { Router, Route, Switch, Link } from 'react-router-dom';

import Dashboard from '../components/dashboard/Dashboard'
import EditActivity from '../components/activity/EditActivity'

export const history = createBrowserHistory();

// const Index = () => {
//   return <h2>Home</h2>;
// }

// const About = () => {
//   return <h2>About</h2>;
// }

function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/edit/:id" component={EditActivity} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;


