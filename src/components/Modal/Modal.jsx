import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalPortal = document.getElementById("modal");

const Modal = ({ children, open, onClose }) => {
  return ReactDOM.createPortal(
    <>
      {open && (
        <div className="modal" onClick={() => onClose(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>,
    modalPortal
  );
}
export default Modal;