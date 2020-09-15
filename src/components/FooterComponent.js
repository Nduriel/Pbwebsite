import React, { useState } from "react";
import { Col, Row, Badge, Modal, ModalBody } from "reactstrap";
import { Image } from "react-bootstrap";
import { barbicide } from "./photos";

function FooterComponent() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggle}
        style={{ justifyContent: "center" }}
        id="certs"
        className="text-center"
      >
        <ModalBody>
          <Image fluid src={barbicide} />
        </ModalBody>
      </Modal>
      <footer className="site-footer">
        <Row>
          <Col
            className="text-center"
            // id="goneText"
            xs={4}
            sm={4}
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
                  <Badge href="/about" style={{ background: "#f1069f" }}>
                    About Mia
                  </Badge>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="text-center" xs={4} lg={4} md={4} sm={4}>
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
                <i
                  role="button"
                  id="socialIcon"
                  className="fa fa-phone fa-lg"
                />
              </a>
            </div>
          </Col>
          <Col
            xs={4}
            sm={4}
            lg={4}
            // id="goneText"
            className="text-center"
            style={{
              borderLeft: "3px outset pink",
            }}
          >
            <span>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <i
                      style={{
                        borderBottom: "2px #f1069f",
                        borderBottomStyle: "outset",
                      }}
                    >
                      Maria Munoz
                    </i>
                  </li>
                  <li style={{ marginTop: "5px" }}>
                    <a
                      data-toggle="modal"
                      href="#certs"
                      role="button"
                      onClick={toggle}
                      style={{
                        fontSize: "14px",
                        color: "rgb(3, 235, 243)",
                      }}
                    >
                      Certified Nail
                      <br />
                      Technician
                    </a>
                    <br />
                    <i style={{ fontSize: "12px" }}>
                      PolishedByMia{" "}
                      <sub>
                        <i className="fa fa-copyright" aria-hidden="true" />
                      </sub>
                    </i>
                  </li>
                </ul>
              </div>
            </span>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default FooterComponent;
