import React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { comingsoonpic } from "./photos";
import { Image } from "react-bootstrap";

function Specials() {
  return (
    <Jumbotron id='specials' fluid>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <Image
              src={comingsoonpic}
              style={{ height: "auto", width: "500px" }}
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Specials;
