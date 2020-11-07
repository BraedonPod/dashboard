import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Earthquake from './components/earthquake/Index';
import Covid from './components/covid/Index';
import About from './components/about/Index';
import Contact from './components/contact/Index';
import Testapp from './Testapp';
import Navbar from './components/layout/Navbar';

ReactDOM.render(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/earthquake">
          <Earthquake />
        </Route>
        <Route path="/covid">
          <Covid />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/test">
          <Testapp />
        </Route>
      </Switch>
    </Router>,
  document.getElementById('root')
);