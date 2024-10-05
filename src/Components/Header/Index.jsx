import './header.css';
import Logo from '../Logo/Index';

const Header = () => {
  return (
    <div className="header-cont">
      <Logo />
    </div>
  )
}

Header.displayName = "Header";

export default Header;