import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyBuilder from './components/SurveyBuilder';
import SurveyView from './components/SurveyView';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Survey Builder</h1>
        <Routes>
          <Route path="/" element={<SurveyBuilder />} />
          <Route path="/new" element={<SurveyView />} />

          {/* You can add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
