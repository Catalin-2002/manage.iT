import React from 'react';

import './App.css';

import Navbar from './Components/NavBar/NavBar';
import Home   from './Pages/Home';
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
