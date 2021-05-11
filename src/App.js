import React from 'react';

import './App.css';

import Navbar from './Components/NavBar/NavBar';
import Home   from './Pages/Home';

import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer/Footer';
import NewProject from './Pages/NewProject';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'        exact component  = {Home}   />
          <Route path='/sign-in' component        = {SignIn} />
          <Route path='/register' component = {Register} />
          <Route path='/profile' component = {Profile} />
          <Route path='/dashboard' component = {Dashboard} />
          <Route path="/newproject" component = {NewProject} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
