import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Questionnaire from './components/questionnaire/Questionnaire';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/questionnaire" component={Questionnaire} />
    </Router>
  );
}

export default App;
