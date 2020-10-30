import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../../pages/Home';
import Details from '../../pages/Details';

const App = (): ReactElement => {
  
  return (
    <Router>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
