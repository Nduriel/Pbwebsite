import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
} from "reactstrap";
import { FadeTransform } from "react-animation-components";
import Image from "react-bootstrap/Image";
import { aboutMia } from "./photos";
import { barbicide } from "./photos";
import { bio1, bio2, policies } from "./policies";

function AboutMia() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal1(!modal1);

  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggle}
        style={{ justifyContent: "center" }}
        id="certs"
        className="text-center"
      >
        <ModalBody toggle={toggle}>
          <Image fluid src={barbicide} />
        </ModalBody>
      </Modal>
      <Modal
        isOpen={modal1}
        toggle={toggle2}
        style={{ justifyContent: "center" }}
        className="text-center"
      >
        <ModalBody id="policyCert">{policies}</ModalBody>
        <Button onClick={toggle2} color="danger">
          X
        </Button>
      </Modal>
      <Jumbotron fluid style={{ color: "white" }}>
        <Container fluid>
          <Row style={{ justifyContent: "space-evenly" }}>
            <Col
              style={{ marginTop: "35px" }}
              className="text-center"
              lg={4}
              md={12}
              sm={12}
            >
              <FadeTransform
                in
                transformProps={{
                  enterTransform: "translateX(0px)",
                  exitTransform: "translateX(150px)",
                }}
              >
                <Image id="aboutPic" fluid src={aboutMia} />
              </FadeTransform>
              <br />
            </Col>
            <Col className="text-center" lg={6} md={12} sm={12}>
              <h2
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  textShadow: "2px 2px 2px #f1069f",
                }}
              >
                Maria Munoz
              </h2>
              <FadeTransform
                in
                transformProps={{
                  enterTransform: "translateX(0px)",
                  exitTransform: "translateX(-150px)",
                }}
              >
                {bio1}
                &nbsp; &nbsp;
                {bio2}
              </FadeTransform>
              <br />
              <Button id='policyButton1' size='sm' onClick={toggle}>
                Barbicide Certification
              </Button>
              &nbsp;&nbsp;{" "}
              <Button id='policyButton' size='sm' onClick={toggle2}>
                Mia Policies
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default AboutMia;
