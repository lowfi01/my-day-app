import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory  } from 'history';

export const history = createBrowserHistory();

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


// const Index = () =>  <h2>Home</h2>;

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
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;


