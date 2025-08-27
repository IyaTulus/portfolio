import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import IndexPage from './pages/indexPage';

function App() {
  return (
    <Router>
      <IndexPage/>
    </Router>
  );
}

export default App;
