import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginSignUp from './reactcomponents/LoginSignUp.js';
import Home from './reactcomponents/Home.js';
import Portfolio from './reactcomponents/Portfolio.js';
import Contact from './reactcomponents/Contact.js';
import Register from './reactcomponents/Register.js';
import './css/generalstyles.css';
import './css/customOne.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LoginSignUp} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
