import './button.css';

const Button = ({ text, onClick, disabled, className = ''}) => {
  return (
    <button className={`button ${className}`} disabled={disabled} onClick={onClick}>{ text }</button>
  )
};

Button.displayName = "Button";

export default Button;
