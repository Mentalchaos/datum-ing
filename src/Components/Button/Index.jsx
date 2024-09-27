import './button.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>{ text }</button>
  )
};

Button.displayName = "Button";

export default Button;
