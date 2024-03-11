import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import About from './components/About';
import Light from './components/Light';
import Shine from './components/Shine';
import Home from './components/Home';
import Permsuser from './components/Permsuser';
import Filter from './components/Filter';
// import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/light" element={<Light />} />
          <Route path="/shine" element={<Shine />} />
          {/* <Route path="/*" element={<Pagenotfound />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/Permsuser/:name" element={<Permsuser />} />
          <Route path="/Filter" element={<Filter />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
