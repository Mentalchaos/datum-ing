import './button.css';

const Button = ({ text }) => {
  return (
    <button className="button">{ text }</button>
  )
}

Button.displayName = "Button";

export default Button;
