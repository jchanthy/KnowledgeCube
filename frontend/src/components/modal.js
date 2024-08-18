import React from 'react';

const Modal = ({isOpen, onClose, children, title, className = ''}) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${className}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">{title}</h2>
                <button className="btn btn-primary" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;