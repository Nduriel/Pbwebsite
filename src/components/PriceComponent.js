import React from "react";
import { Table, Col, Jumbotron, Row, Container } from "reactstrap";
import { Fade } from "react-animation-components";
import Image from "react-bootstrap/Image";
import * as service from "./priceList";

function PriceComponent() {
  return (
    <>
      <Jumbotron fluid>
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
        <Fade in>
          <service.Manicure />
          <service.Pedicure />
          <service.NailEnhancements />
          <service.Addons />
          {/* {service.manicure.map((item) => {
                return (
                  <tr key={price.id}>
                    <td id="rowTitle">{item.name}</td>
                    <td id="tableD">{item.price}</td>
                 <td id="rowTitle">{item.name}</td>
                    <td id="tableD">{item.price}</td>
                  </tr>
                );
              })} */}
        </Fade>
      </Jumbotron>
    </>
  );
}

export default PriceComponent;
