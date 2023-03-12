import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

function Toaster(props) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        onClose={() => props.closeToast(false)}
        show={props.show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{props.id}</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;
