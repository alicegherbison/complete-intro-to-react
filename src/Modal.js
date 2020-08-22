import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const elementReference = useRef(null);

  if (!elementReference.current) {
    const div = document.createElement('div');

    elementReference.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');

    modalRoot.appendChild(elementReference.current);

    return () => modalRoot.removeChild(elementReference.current);
  }, []);

  return createPortal(
    <div className="modal">{children}</div>,
    elementReference.current
  );
};

export default Modal;
