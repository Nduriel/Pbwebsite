import React from "react";
import { Col, Row } from "reactstrap";

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
      <Row>
        <Col
          className="text-center"
          id="goneText"
          lg={4}
          style={{
            paddingTop: "15px",
            borderRight: "3px double #9df5cc",
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
            <i id="socialIcon" className="fa fa-envelope-o" />
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
            borderLeft: "3px double #9df5cc",
          }}
        >
          <span>
            <i className="fa fa-copyright" aria-hidden="true" />
            PolishedByMia
          </span>
        </Col>
      </Row>
    </footer>
  );
}

export default FooterComponent;
