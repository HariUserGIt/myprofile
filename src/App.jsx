import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyProfile from './MyProfile';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Project from './Projects';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/project">Project</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
