import React from 'react';

import './App.css';

import Navbar from './Components/NavBar/NavBar';
import Home   from './Pages/Home';

import Register from './Pages/Register';
import SignUp from './Pages/SignUp';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'        exact component  = {Home}   />
          <Route path='/sign-up' component        = {SignUp} />
          <Route path='/register' component = {Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
