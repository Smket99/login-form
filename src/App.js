import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Registration'
import Dashboard from './components/Dashboard'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
        <Router basename='/login-form'>
        <Switch>
        <div>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
          </div>
        </Switch>

        </Router>
  );
}

export default App;
