import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Project from './component/Project';
import ProjectDetails from './component/ProjectDetails';
import './App.css';
import Skills from './component/Skills';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <div id="hero"><Hero/></div>
              <div id="about"><About/></div>
                  <div id="services"><Project/></div>
              <div id="portfolio"><Skills/></div>
          
              <div id="contact"><Contact/></div>
            </>
          }/>
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;