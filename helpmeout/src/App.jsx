import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recorded from './Recorded/recorded';
import Home from './Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recorded' element={<Recorded />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
