import React from 'react';
import './App.css';
import Navbar from './frontend/components/Navbar';
import RepositoriosCard from './frontend/components/Repositorios';
import "./frontend/styles/Navbar.css";
import Header from './frontend/components/Header';
import About from './frontend/components/About';
import Projects from './frontend/components/Projects';
import Contact from './frontend/components/Contact';
import Hero from './frontend/components/Hero';
import Skills from './frontend/components/Skills';




function App() {
  return (
    <div className="App">
        
        <Hero />
            <About />
            <Projects />
            
            <Skills />
    </div>
  );
}

export default App;
