import './Modal.css';
import React from 'react';


function Modal({closeModal, message}){

    return(
        <div className="modal_background">
            <div className="modal_content">
                <button className="modal_closeButton" onClick={closeModal}>✖</button>
                <p className="modal_body">{message}</p>
            </div>
        </div>
    )
}

export default Modal;
