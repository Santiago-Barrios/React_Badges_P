import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

export default function Modal (porps){

    if(!porps.isOpen){
      return null;
    }
    return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={porps.onClose} className="Modal__close-button">
          x
        </button>

        {porps.children}
      </div>
    </div>, 
    document.getElementById('modal')
    );
  }