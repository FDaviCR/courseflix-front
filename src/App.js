import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Company from './pages/Company';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/company'>Company</Link>
      </ul>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
