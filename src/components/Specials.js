import React from "react";
import { Container, Row, Jumbotron } from "reactstrap";
import { grandopening } from "./photos";
import { Image } from "react-bootstrap";

function Specials() {
  return (
    <Jumbotron id="specials">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Image
            fluid
            src={grandopening}
            style={{ height: "auto", width: "600px" }}
          />
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Specials;
