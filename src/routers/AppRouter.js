import React from 'react';
import { createBrowserHistory  } from 'history';
import { Router, Route, Switch, Link } from 'react-router-dom';

import AddActivity from '../components/activity/AddActivity'

export const history = createBrowserHistory();

// const Index = () => {
//   return <h2>Home</h2>;
// }

const About = () => {
  return <h2>About</h2>;
}

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
        <Route path="/" exact component={AddActivity} />
        <Route path="/about/" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;


