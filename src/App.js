import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RequireAuth from './components/util/RequireAuth';

import Login from './pages/Login';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Classes from './pages/Classes';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/modules" element={<RequireAuth><Modules/></RequireAuth>}/>
          <Route path="/classes" element={<RequireAuth><Classes/></RequireAuth>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
