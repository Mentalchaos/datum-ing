// CSS
import './App.css';

// Components
import Logo from './Components/Logo/Index';
import Header from './Components/Header/Index';
import Quotation from './Components/Quotation/Index';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Quotation />
      <Logo />
    </div>
  );
}

App.displayName = "App";

export default App;
