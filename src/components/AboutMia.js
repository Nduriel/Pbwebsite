import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import { jumbotronPic } from "./photos";

function AboutMia() {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Image
                src={jumbotronPic.aboutmia}
                style={{ height: "500px", width: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default AboutMia;
