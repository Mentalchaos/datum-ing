// CSS
import './App.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Index';
import Quotation from './Components/Quotation/Index';
import MarketAnalysis from './Components/MarketAnalysis';
import Footer from './Components/Footer/Index';
/* import Home from './Components/Home/Index'; */

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Quotation />} />
          <Route path="/market" element={<MarketAnalysis />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

App.displayName = "App";

export default App;
