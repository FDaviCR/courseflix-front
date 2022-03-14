import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
          <Route path="/" element={<Home/>}></Route>
          <Route path="/modules" element={<Modules/>}/>
          <Route path="/classes" element={<Classes/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
