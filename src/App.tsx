import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './features/home/home';
import About from './features/about/about';
import Experience from './features/experience/experience';
import Project from './features/project/project';
import Skils from './features/sklis/skil';
import Gallery from './features/gallery/gallery';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skils />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Project />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
