// CSS
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Index';
import MarketAnalysis from './Components/MarketAnalysis';
import PerformanceAnalytics from './Components/PerformanceAnalytics';

// Components
import Steps from './Components/Steps/Index';
import Tracking from './Components/Tracking';
import LicitationMetrics from './Components/LicitationMetrics';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Steps />} />
          <Route path="/market" element={<MarketAnalysis />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/metrics" element={<PerformanceAnalytics />} />
          <Route path="/licitation" element={<LicitationMetrics />} />
        </Routes>
      </Router>
    </div>
  );
}

App.displayName = "App";

export default App;
