import React from 'react';
import './Modal.css'

const Modal = ({ children, mobileModal, right }) => {

    return (
        <div className="modal">
            <div className={`modal-content ${ right ? 'appear-right' :''} ${mobileModal && 'mobile-modalContent' } `} onClick={(e)=>e.stopPropagation()} >
              {children}
            </div>
        </div>
    );

};

export default Modal;