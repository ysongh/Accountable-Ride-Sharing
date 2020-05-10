import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import './App.css';

import Questionnaire from './components/questionnaire/Questionnaire';

function App() {
  return (
    <Router>
      <Questionnaire />
    </Router>
  );
}

export default App;
