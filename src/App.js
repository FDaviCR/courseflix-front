import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Classes from './pages/Classes';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import { Context } from './context/AuthContext';

function CustomRoute({ isPrivate, ...rest }){
  const { authenticated } = useContext(Context);

  if(isPrivate && !authenticated){
    return <Redirect to='/login' />;
  }

  return <Route {...rest} />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <CustomRoute path="/modules" element={<Modules/>}/>
          <CustomRoute path="/classes" element={<Classes/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
