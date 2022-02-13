import React, { useState } from "react";
import swal from "sweetalert";
import { Modal, Button } from "react-bootstrap";

function ConfirmationModal(props) {
  const { title, text, callBackHandleClose, callBackHandleContinue } = props;
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {text}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {callBackHandleClose()}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {callBackHandleContinue()}}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
