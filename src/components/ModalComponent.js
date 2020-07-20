import React from "react";
import { Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalForm from "./Form";

const modalFont = {
  top: {
    backgroundColor: "black",
    color: "#9df5cc",
    borderBottomColor: "purple",
    fontStyle: "italic",
    textAlign: "center",
    textShadow: "2px 2px 2px #f1069f",
  },
  bottom: {
    backgroundColor: "black",
    color: "#9df5cc",
    borderTopColor: "purple",
    fontStyle: "italic",
    textAlign: "center",
    textShadow: "2px 2px 2px #f1069f",
  },
  errorText: {
    color: "white",
  },
};

function ModalComponent(props) {
  return (
    <>
      <Modal
        isOpen={props.isModalOpen}
        toggle={props.toggleModal}
        fade
        autoFocus
      >
        <ModalHeader toggle={props.toggleModal} style={modalFont.top}>
          Send me your info and I'll contact you asap!
          <br />
        </ModalHeader>
        <ModalBody id="modalbody">
          <ModalForm toggleModal={props.toggleModal} />
        </ModalBody>
        <ModalFooter style={modalFont.bottom}>
          <Col>
            **Dates and time submitted are not guaranteed**
            <br />
            **Allow 2 hours per appointment**{" "}
          </Col>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalComponent;
