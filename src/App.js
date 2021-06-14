import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/layouts/Dashboard';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';

const App = () => {
    return (
      <div>
        <Navbar/>
          <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/about" component={About} />
          </Switch>
      </div>
    )
}
export default App;