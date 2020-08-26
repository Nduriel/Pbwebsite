import React from "react";
import { Col, Row, Badge } from "reactstrap";

function FooterComponent() {
  return (
    <footer className="site-footer">
      <Row>
        <Col
          className="text-center"
          // id="goneText"
          xs={6}
          lg={4}
          style={{
            borderRight: "3px outset pink",
          }}
        >
          <span
            style={{
              borderBottom: "2px #f1069f",
              borderBottomStyle: "outset",
              textShadow: "2px 2px 2px #f1069f",
            }}
          >
            Directory
          </span>
          <div style={{ margin: "5px" }}>
            <ul className="list-unstyled">
              <li>
                <Badge href="/home" color="info">
                  Home
                </Badge>
              </li>
              <li>
                <Badge href="/prices" color="primary">
                  Prices
                </Badge>
              </li>
              <li>
                <Badge href="/about" style={{ background: "purple" }}>
                  About Mia
                </Badge>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="text-center" xs={6} lg={4} md={6} sm={6}>
          <span
            style={{
              borderBottom: "2px #f1069f",
              borderBottomStyle: "outset",
            }}
          >
            Questions?
          </span>
          <br />
          <div style={{ margin: "5px" }}>
            <a
              role="button"
              className="btn btn-link"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:Mmnuoz214@gmail.com"
            >
              <i id="socialIcon" className="fa fa-envelope" />
            </a>
            <a
              role="button"
              className="btn btn-link"
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+17579127833"
            >
              <i role="button" id="socialIcon" className="fa fa-phone fa-lg" />
            </a>
          </div>
        </Col>
        <Col
          lg={4}
          id="goneText"
          className="text-center"
          style={{
            borderLeft: "3px outset pink",
          }}
        >
          <span>
            <ul className="list-unstyled" style={{ marginTop: "5px" }}>
              <li>
                <i
                  style={{
                    borderBottom: "2px #f1069f",
                    borderBottomStyle: "outset",
                  }}
                >
                  Maria Munoz
                </i>
                <br />
                <sub>Liscensed Nail Technician</sub>
              </li>
              <li>
                <i>
                  <sub>
                    PolishedByMia{" "}
                    <i className="fa fa-copyright" aria-hidden="true" />
                  </sub>
                </i>
              </li>
            </ul>
          </span>
        </Col>
      </Row>
    </footer>
  );
}

export default FooterComponent;
