import React, { useEffect, useRef } from "react";
function Modal({ open, children, onClose }) {
    const dialog = useRef();
  
    useEffect(() => {
      if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
        
      }
    }, [open]);
  
    return (
      <dialog className="modal" ref={dialog} onClose={onClose}>
        {open ? children : null}
      
      </dialog>
    );
  }
  
  export default Modal;
  