import './button.css';

const Button = ({ text, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>{ text }</button>
  )
};

Button.displayName = "Button";

export default Button;
