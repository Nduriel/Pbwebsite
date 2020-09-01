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
              style={{ color: "white",fontWeight: "bold",fontStyle: "italic", textShadow: "2px 2px 2px #f1069f" }}
            >
              Maria Munoz
            </h2>
            <div id="bioText">
              <p style={{ margin: "8px" }}>
                <i style={{ textShadow: "2px 2px 2px #f1069f" }}>
                  Polished By Mia&nbsp;
                </i>{" "}
                was started in 2018. Maria has been in the nail industry for 2
                years now. She loves getting to know her clients and everyone
                has a different story, wants a different look and she gets to
                help them accomplish it. When it comes to nail art her creative
                mind can get you ready for any occasion from your wedding day to
                every holiday. Maria is extremely passionate about the services
                she provides and strives to educate each client about them.{" "}
                <span style={{ textShadow: "2px 2px 2px #f1069f" }}>
                  {" "}
                  Sanitation and quality are her main priorities when it comes
                  to her work.
                </span>{" "}
                Her honesty and reliability allow her to build trusting
                relationships with her clients.
              </p>
            </div>
            &nbsp; &nbsp;
            <div id="bioText">
              <p style={{ margin: "8px" }}>
                Maria graduated in September 2020 from{" "}
                <span style={{ textShadow: "2px 2px 2px #f1069f" }}>
                  Nail Boss Academy&nbsp;
                </span>{" "}
                in Newport News, Virginia. She is looking forward to continuing
                her education with the latest trends and ways to expand her nail
                business. Currently, she is working full time doing Medical
                Billing with hopes soon she can make the Nail Industry her Full
                Time Career.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default AboutMia;
