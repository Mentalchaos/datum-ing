// CSS
import './App.css';

// Components
import Logo from './Components/Logo/Index';
import Header from './Components/Header/Index';
import Quotation from './Components/Quotation/Index';
import Footer from './Components/Footer/Index.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Quotation />
      <Logo />
      <Footer />
    </div>
  );
}

App.displayName = "App";

export default App;
