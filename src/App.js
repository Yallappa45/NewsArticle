import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <h1 align="left" ><u>News Aricles</u></h1>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
