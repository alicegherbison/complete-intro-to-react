import React, { FunctionComponent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  const elementReference = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }

    modalRoot.appendChild(elementReference.current);

    return () => {
      modalRoot.removeChild(elementReference.current);
    };
  }, []);

  return createPortal(
    <div className="modal">{children}</div>,
    elementReference.current
  );
};

export default Modal;
