import React from "react";
import { Col, Row, Container } from "reactstrap";

const footerFont = {
  textShadow: "2px 2px 2px #f1069f",
  color: "#9df5cc",
  fontSize: "18px",
  flexDirection: "row",
  whiteSpace: "nowrap",
};

function FooterComponent() {
  return (
    <footer className="site-footer" style={footerFont}>
      <Container fluid>
        <Row>
          <Col
            className="text-center"
            id="goneText"
            lg={4}
            style={{
              paddingTop: "15px",
              borderRight: "3px outset pink",
            }}
          >
            "Modern touch, Beautiful feel"
          </Col>
          <Col className="text-center" lg={4} md={12} sm={12}>
            <a
              role="button"
              className="btn btn-link"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:Mmnuoz214@gmail.com"
            >
              <i id="socialIcon" className="fa fa-envelope" />
            </a>
            <span id="goneText">Questions? Comments?</span>
            <a
              role="button"
              className="btn btn-link"
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+17579127833"
            >
              <i role="button" id="socialIcon" className="fa fa-phone fa-lg" />
            </a>
          </Col>

          <Col
            lg={4}
            id="goneText"
            className="text-center"
            style={{
              paddingTop: "15px",
              borderLeft: "3px outset pink",
            }}
          >
            <span>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-copyright" aria-hidden="true" />
                  <i>PolishedByMia</i>
                </li>
                <li>
                  <i>Liscensed Nail Technician</i>
                </li>
              </ul>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
