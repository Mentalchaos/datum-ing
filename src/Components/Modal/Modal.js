import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './modal.css';

const Modal = ({ isOpen, onClose, children, width }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div style={{ width }} className="m-modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
