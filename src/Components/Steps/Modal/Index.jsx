import './modal.css';

const Modal = ({ children }) => {
  return (
    <div className="square-container">
      <div className="square-content">
        {children}
      </div>
    </div>
  )
}

Modal.displayName = "Modal";

export default Modal;