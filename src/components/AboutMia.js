import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

function AboutMia() {
  const aboutPic = require("../images/aboutmiapic.jpg");

  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col lg={5}>
              <Image
                fluid
                roundedCircle
                src={aboutPic}
                style={{ height: "500px", width: "auto" }}
              />
            </Col>
            <Col >
              <div style={{alignContent: "flex-end"}}>
                <p style={{ color: "white" }}>
                  Polished By Mia was start in 2005 by Maria Munoz. Maria is a
                  liscensed nail technician who services <br /> clients
                  exclusively in the Hampton Roads (Newport News) area.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default AboutMia;
