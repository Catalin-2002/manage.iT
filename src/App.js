import React from 'react';

import './App.css';

import Navbar from './Components/NavBar/NavBar';
import Home   from './Pages/Home';

import Register from './Pages/Register';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'        exact component  = {Home}   />
          <Route path='/sign-up' component        = {SignUp} />
          <Route path='/register' component = {Register} />
          <Route path='/profile' component = {Profile} />
          <Route path='/dashboard' component = {Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
