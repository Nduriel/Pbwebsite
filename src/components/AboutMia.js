import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import { aboutMia } from "./photos";

function AboutMia() {
  return (
    <Jumbotron fluid style={{ color: "white" }}>
      <Container fluid>
        <Row>
          <Col
            className="text-center"
            lg={{ offset: 1, size: 4 }}
            md={12}
            sm={12}
          >
            <Image id="aboutPic" fluid src={aboutMia} />
          </Col>
          <Col lg={5} md={12} sm={12}>
            <h2
              className="text-center"
              style={{
                color: "white",
                fontWeight: "bold",
                fontStyle: "italic",
                textShadow: "2px 2px 2px #f1069f",
              }}
            >
              Maria Munoz
            </h2>
            <div id="bioText">
              <p style={{ margin: "10px" }}>
                <i style={{ textShadow: "2px 2px 2px blue" }}>
                  Polished By Mia&nbsp;
                </i>{" "}
                was started in 2018. Mia “Maria” has been in the nail industry
                for two years now but many more if you count her obsession from
                childhood. She started by watching YouTube videos painting her
                friend’s and family’s nails. Later, she leaped and enrolled in
                Nail Boss Academy in Newport News. Mia graduated in September,
                licensed, and educated in proper nail techniques and care.
              </p>
            </div>
            &nbsp; &nbsp;
            <div id="bioText">
              <p style={{ margin: "10px" }}>
                <i style={{ textShadow: "2px 2px 2px blue" }}>
                  Polished By Mia
                </i>
                's mission is to know each client and help achieve their goal
                with the latest and new nail trends. Her honesty and reliability
                allow her to build trusting relationships with her clients. When
                it comes to nail art her creative mind can get you ready for any
                occasion from your wedding day to every holiday. Mia is
                extremely passionate about the services she provides and strives
                to educate each client about them.
                <span style={{ textShadow: "2px 2px 2px #f1069f" }}>
                  {" "}
                  Sanitation and quality are her main priorities when it comes
                  to her work.
                </span>{" "}
              </p>
              <p style={{ margin: "12px" }}>
                {" "}
                Currently, she is working full time in Medical Billing with
                hopes soon she can make the Nail Industry her Full-Time Career.
              </p>
            </div>
            &nbsp; &nbsp;
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default AboutMia;
