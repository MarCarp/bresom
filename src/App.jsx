import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Play from './pages/Play';
import Persos from './pages/Persos';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/persos" element={<Persos />} />
      </Routes>
    </Router>
  );
};

export default App
