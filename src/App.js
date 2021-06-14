import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/layouts/Dashboard';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => {
    return (
      <div>
        <Navbar/>
          <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact login path="/about" component={About} />
              <Route path="/about/:login" component={User} />
          </Switch>
      </div>
    )
}
export default App;