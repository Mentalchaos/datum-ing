// CSS
import './App.css';

// Components
import Button from './Components/Button/Index';
import Logo from './Components/Logo/Index';
import Header from './Components/Header/Index';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="button-cont">
        <Button />
      </div>
      <Logo />
    </div>
  );
}

App.displayName = "App";

export default App;
