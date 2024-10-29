// CSS
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Index';
import MarketAnalysis from './Components/MarketAnalysis';

// Components
import Steps from './Components/Steps/Index';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Steps />} />
          <Route path="/market" element={<MarketAnalysis />} />
        </Routes>
      </Router>
    </div>
  );
}

App.displayName = "App";

export default App;
