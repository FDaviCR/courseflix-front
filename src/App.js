import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Classes from './pages/Classes';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import { Context } from './context/AuthContext';


function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/modules" element={<Modules/>}/>
          <Route path="/classes" element={<Classes/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
