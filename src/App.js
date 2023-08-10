import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Timeline from './components/pages/Timeline'
import Projects from './components/pages/Projects'


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/timeline" element={<Timeline />} />

          <Route path="/contact" element={<Contact />} />


          <Route path="/projects" element={<Projects />} />


        </Routes>

        <Footer />

      </Router>
    </React.Fragment>
  );
}

export default App;
