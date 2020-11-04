import React, { useState } from "react";
import {
  Table,
  Col,
  Jumbotron,
  Row,
  Container,
  Modal,
  ModalBody,
  Button,
} from "reactstrap";
import { Fade, Random } from "react-animation-components";
import * as service from "./priceList";
import { policies } from "./policies";

function PriceComponent() {
  const [modal1, setModal1] = useState(false);
  const toggle2 = () => setModal1(!modal1);
  return (
    <>
      <Modal
        isOpen={modal1}
        toggle={toggle2}
        style={{ justifyContent: "center" }}
        className="text-left"
      >
        <ModalBody id="policyCert">{policies}</ModalBody>
        <Button onClick={toggle2} color="danger">
          <i>Close</i>
        </Button>
      </Modal>
      <Jumbotron fluid id="prices">
        <Container fluid>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={4} md={4} sm={4} className="text-center">
              <Button id="policyButton" size="sm" onClick={toggle2}>
                Mia's Policies
              </Button>
              <br /> <br />
              <div id="bodyBox" style={{ margin: "14px" }}>
                *Prices are subject to change*
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Table
                dark
                style={{
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                size="md"
                responsive
                striped
                bordered
                hover
              >
                <thead id="fullSets">
                  <tr>
                    <th colSpan="2">Acrylic Full Sets</th>
                  </tr>
                </thead>
                <tbody>
                  {service.fullSets.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td id={item.id % 2 ? "rowTitle2" : "rowTitle"}>
                          <Random minDelay={500} maxDelay={1000} in>
                            <Fade>{item.name}</Fade>
                          </Random>
                        </td>
                        <td id="cost">
                          <Random minDelay={500} maxDelay={1500} in>
                            <Fade>{item.price}</Fade>
                          </Random>
                        </td>
                      </tr>
                    );
                  })}
                  <tr id="rowTitle" style={{ textAlign: "center" }}>
                    <td colSpan="4">
                      *&nbsp;<span id="rowTitle2">includes gel polish</span>
                      &nbsp;*
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Table
                dark
                style={{
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                size="md"
                responsive
                striped
                bordered
                hover
              >
                <thead id="acrylicFills">
                  <tr>
                    <th colSpan="2">Acryilc Fills</th>
                  </tr>
                </thead>
                <tbody>
                  {service.fills.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td id={item.id % 2 ? "rowTitle1" : "rowTitle"}>
                          <Random minDelay={500} maxDelay={1000} in>
                            <Fade>{item.name}</Fade>
                          </Random>
                        </td>
                        <td id="cost">
                          <Random minDelay={500} maxDelay={1500} in>
                            <Fade>{item.price}</Fade>
                          </Random>
                        </td>
                      </tr>
                    );
                  })}
                  <tr id="rowTitle" style={{ textAlign: "center" }}>
                    <td colSpan="4">
                      *&nbsp;<span id="rowTitle1">includes gel polish</span>
                      &nbsp;*
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Table
                dark
                style={{
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                size="md"
                responsive
                striped
                bordered
                hover
              >
                <thead id="manicure">
                  <tr>
                    <th colSpan="2">Manicure (30 mins)</th>
                  </tr>
                </thead>
                <tbody>
                  {service.manicure.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td id={item.id % 2 ? "rowTitle3" : "rowTitle"}>
                          <Random minDelay={500} maxDelay={1000} in>
                            <Fade>{item.name}</Fade>
                          </Random>
                        </td>
                        <td colSpan="1" id="cost">
                          <Random minDelay={500} maxDelay={1500} in>
                            <Fade>{item.price}</Fade>
                          </Random>
                        </td>
                      </tr>
                    );
                  })}
                  <tr id="rowTitle" style={{ textAlign: "center" }}>
                    <td colSpan="4">
                      <span id="rowTitle3">Manicure</span> includes: Trim &
                      Shape (nails and cuticles), lotion massage, and polish.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Table
                dark
                style={{
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                size="md"
                responsive
                striped
                bordered
                hover
              >
                <thead id="pedicure">
                  <tr>
                    <th colSpan="2">Pedicure (45 mins)</th>
                  </tr>
                </thead>
                <tbody>
                  {service.pedicure.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td id={item.id % 2 ? "rowTitle6" : "rowTitle"}>
                          <Random minDelay={750} maxDelay={1000} in>
                            <Fade>{item.name}</Fade>
                          </Random>
                        </td>
                        <td colSpan="1" id="cost">
                          <Random minDelay={750} maxDelay={1500} in>
                            <Fade>{item.price}</Fade>
                          </Random>
                        </td>
                      </tr>
                    );
                  })}
                  <tr id="rowTitle" style={{ textAlign: "center" }}>
                    <td colSpan="4">
                      <span id="rowTitle6">Pedicure</span> includes: Trim &
                      Shape (nails and cuticles), sugar scrub, callus work,
                      lotion massage and polish.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col lg={6}>
              <Table
                dark
                style={{
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                size="md"
                responsive
                striped
                bordered
                hover
              >
                <thead id="sculpted">
                  <tr>
                    <th colSpan="2">Sculpted Nails</th>
                  </tr>
                </thead>
                <tbody>
                  {service.sculpted.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td id={item.id % 2 ? "rowTitle6" : "rowTitle"}>
                          <Random minDelay={750} maxDelay={1000} in>
                            <Fade>{item.name}</Fade>
                          </Random>
                        </td>
                        <td colSpan="1" id="cost">
                          <Random minDelay={750} maxDelay={1500} in>
                            <Fade>{item.price}</Fade>
                          </Random>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={6}>
              <Table
                dark
                style={{
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                size="md"
                responsive
                striped
                bordered
                hover
              >
                <thead id="kids">
                  <tr>
                    <th colSpan="2">
                      Kids <i style={{ fontSize: "15px" }}>13 and under</i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.kids.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td id={item.id % 2 ? "rowTitle5" : "rowTitle"}>
                          <Random minDelay={750} maxDelay={1000} in>
                            <Fade>{item.name}</Fade>
                          </Random>
                        </td>
                        <td colSpan="1" id="cost">
                          <Random minDelay={750} maxDelay={1500} in>
                            <Fade>{item.price}</Fade>
                          </Random>
                        </td>
                      </tr>
                    );
                  })}
                  <tr id="rowTitle" style={{ textAlign: "center" }}>
                    <td colSpan="4">
                      <span id="rowTitle5">Manicure & Pedicure</span> includes:
                      Trim & Shape (nails and cuticles), lotion massage, and
                      polish.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row style={{justifyContent: "center"}}>
            <Col lg={8}>
              <Table
                dark
                style={{
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
                size="md"
                responsive
                striped
                bordered
                hover
              >
                <thead id="addOns">
                  <tr>
                    <th colSpan="2">Add Ons</th>
                  </tr>
                </thead>
                <tbody>
                  {service.addOns.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td id={item.id % 2 ? "rowTitle4" : "rowTitle"}>
                          <Random minDelay={750} maxDelay={1000} in>
                            <Fade>{item.name}</Fade>
                          </Random>
                        </td>
                        <td colSpan="1" id="cost">
                          <Random minDelay={750} maxDelay={1500} in>
                            <Fade>{item.price}</Fade>
                          </Random>
                        </td>
                      </tr>
                    );
                  })}
                  <tr id="rowTitle" style={{ textAlign: "center" }}>
                    <td colSpan="4">
                      <span id="rowTitle4">Includes: </span>
                      Marble, Foil, Lines, Additional colors, Abstract Art,
                      French, Select Ombre
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default PriceComponent;
