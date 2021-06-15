import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/layouts/Dashboard';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import User from './components/users/User';
import AlertContextProvider from './context/alert/AlertContext';
import GithubContextProvider from './context/gitHub/GithubContext';



const App = () => {
    return (
      <div>
        <Navbar/>
          <GithubContextProvider>
            <AlertContextProvider>
              <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact login path="/about" component={About} />
                  <Route path="/profile/:login" component={User} />
              </Switch>
            </AlertContextProvider>
          </GithubContextProvider>
      </div>
    )
}
export default App;