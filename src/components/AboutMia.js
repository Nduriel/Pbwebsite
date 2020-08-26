import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

function AboutMia() {
  const aboutPic = require("../images/aboutmiapic.JPG");

  return (
    <Jumbotron fluid style={{ color: "white" }}>
      <Container fluid>
        <Row>
          <Col lg={5} md={12} sm={12}>
            <Image
              fluid
              roundedCircle
              src={aboutPic}
              style={{
                height: "500px",
                width: "auto",
                // marginLeft: "30px",
                border: "6px solid ",
                borderStyle: "groove",
                marginBottom: "10px",
              }}
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <h2
              className="text-center"
              style={{ color: "#9df5cc", textShadow: "2px 2px 2px #f1069f" }}
            >
              Maria Munoz
            </h2>
            <div
              style={{
                border: "2px solid white",
                background: "black",
              }}
            >
              <p id="bioText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                nibh mauris cursus mattis molestie a iaculis at. Est ultricies
                integer quis auctor elit sed. Mauris rhoncus aenean vel elit
                scelerisque mauris. Enim neque volutpat ac tincidunt. Dolor
                magna eget est lorem ipsum dolor. Orci dapibus ultrices in
                iaculis. Sed risus pretium quam vulputate. Duis ut diam quam
                nulla porttitor massa id neque. Ut pharetra sit amet aliquam.
                Nunc sed augue lacus viverra vitae..
              </p>
            </div>
            &nbsp; &nbsp;
            <div
              style={{
                border: "2px solid white",
                background: "black",
              }}
            >
              <p id="bioText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                nibh mauris cursus mattis molestie a iaculis at. Est ultricies
                integer quis auctor elit sed. Mauris rhoncus aenean vel elit
                scelerisque mauris. Enim neque volutpat ac tincidunt. Dolor
                magna eget est lorem ipsum dolor. Orci dapibus ultrices in
                iaculis. Sed risus pretium quam vulputate. Duis ut diam quam
                nulla porttitor massa id neque. Ut pharetra sit amet aliquam.
                Nunc sed augue lacus viverra vitae..
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default AboutMia;
