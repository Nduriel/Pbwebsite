import React from "react";
import { Col, Container, Row, Jumbotron } from "reactstrap";
import { comingsoonpic } from "./photos";
import { Image } from "react-bootstrap";

function Specials() {
  return (
    <Jumbotron id="specials">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Image
            fluid
            src={comingsoonpic}
            style={{ height: "auto", width: "600px" }}
          />
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Specials;
