import React from "react";
import { Table, Col, Jumbotron, Row, Container } from "reactstrap";
import { Fade } from "react-animation-components";
import * as service from "./priceList";

function PriceComponent() {
  // let half = Math.ceil(service.addOns.length/2);
  // let firstHalf = service.addOns.splice(0,half);
  return (
    <>
      <Jumbotron fluid id="prices">
        <Container fluid>
          <Row style={{ justifyContent: "center" }}>
            <Col
              lg={4}
              md={4}
              sm={4}
              id="bodyBox3"
              className="infoBox text-center"
            >
              *Prices are subject to change*
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Fade in>
            <Row>
              
              <Col>
                <Table
                  dark
                  // id="prices"
                  style={{
                    marginTop: "50px",
                    marginBottom: "20px",
                  }}
                  size="md"
                  responsive
                  striped
                  bordered
                  hover
                  variant="dark"
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th colSpan="2">Acryilc Fills</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.fills.map((item) => {
                      return (
                        <tr>
                          <td key={item.id} id="rowTitle">
                            {item.name}
                          </td>
                          <td key={item.id} id="cost">
                            {item.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <Table
                  dark
                  // id="prices"
                  style={{
                    marginTop: "50px",
                    marginBottom: "20px",
                  }}
                  size="md"
                  responsive
                  striped
                  bordered
                  hover
                  variant="dark"
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th colSpan="2">Acrylic Full Sets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.fullSets.map((item) => {
                      return (
                        <tr>
                          <td key={item.id} id="rowTitle">
                            {item.name}
                          </td>
                          <td key={item.id} id="cost">
                            {item.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table
                  dark
                  // id="prices"
                  style={{
                    marginTop: "50px",
                    marginBottom: "20px",
                  }}
                  size="md"
                  responsive
                  striped
                  bordered
                  hover
                  variant="dark"
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th colSpan="2">Manicure (30 mins)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.manicure.map((item) => {
                      return (
                        <tr>
                          <td colSpan="1" key={item.id} id="rowTitle">
                            {item.name}
                          </td>
                          <td colSpan="1" key={item.id} id="cost">
                            {item.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <Table
                  dark
                  // id="prices"
                  style={{
                    marginTop: "50px",
                    marginBottom: "20px",
                  }}
                  size="md"
                  responsive
                  striped
                  bordered
                  hover
                  variant="dark"
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th colSpan="2">Pedicure (45 mins)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.pedicure.map((item) => {
                      return (
                        <tr>
                          <td colSpan="1" key={item.id} id="rowTitle">
                            {item.name}
                          </td>
                          <td colSpan="1" key={item.id} id="cost">
                            {item.price}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <service.Addons />
          </Fade>
        </Container>
      </Jumbotron>
    </>
  );
}

export default PriceComponent;
