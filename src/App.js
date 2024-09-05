import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/Hero';
import Menu from './components/Menu';
import AboutUs from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
