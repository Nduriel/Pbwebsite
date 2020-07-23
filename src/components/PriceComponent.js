import React from "react";
import { Table, Col, Jumbotron, Row, Container } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";
import Image from "react-bootstrap/Image";
import { tablePic, priceList } from "./photos";

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
          <Table
            dark
            id="prices"
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
            <thead style={{ color: "lightgreen", fontWeight: "bold" }}>
              <tr style={{ textAlign: "center" }}>
                <th>
                  <Image
                    id="thumbnailPic"
                    src={tablePic.tpic}
                    thumbnail
                    fluid
                  />
                  <br />
                  Type of Set
                </th>
                <th>
                  <Image
                    id="thumbnailPic"
                    src={tablePic.shortNails}
                    thumbnail
                    fluid
                  />
                  <br />
                  Short Nails
                </th>
                <th>
                  <Image
                    id="thumbnailPic"
                    src={tablePic.medNails}
                    thumbnail
                    fluid
                  />
                  <br />
                  Med Nails{" "}
                </th>
                <th>
                  <Image
                    id="thumbnailPic"
                    src={tablePic.longNails}
                    thumbnail
                    fluid
                  />
                  <br />
                  Longs Nails
                </th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((price) => {
                return (
                  <tr key={price.id}>
                    <td id="rowTitle">{price.name}</td>
                    <td id="tableD">{price.short}</td>
                    <td id="tableD">{price.med}</td>
                    <td id="tableD">{price.long}</td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan="4" id="tableD">
                  ** While a&nbsp;
                  <span id="rowTitle">Color Acrylic Fill Set</span> is possible,
                  a &nbsp;
                  <span id="rowTitle">Full Set Color Acrylic</span> is
                  recommened for, best look.**
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "violet",
                    fontWeight: "bold",
                    textShadow: "1px 1px 1px #f1069f",
                  }}
                >
                  Add-Ons:
                </td>
                <td id="tableD">
                  Jeweled: $4 (2 Fingers)
                  <br />
                  Encapsulated Design: $3 (2 Fingers)
                </td>
                <td id="tableD">Full 'Blinged' out nail: $7</td>
                <td id="tableD">Nail Soak $10</td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "violet",
                    fontWeight: "bold",
                    textShadow: "1px 1px 1px #f1069f",
                  }}
                >
                  Toe Color Change:
                </td>
                <td colSpan="3" id="tableD">
                  $10 for Gel
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "violet",
                    fontWeight: "bold",
                    textShadow: "1px 1px 1px #f1069f",
                  }}
                >
                  Extra Drilling:
                </td>
                <td colSpan="3" id="tableD">
                  $5 for each hand
                </td>
              </tr>
            </tbody>
          </Table>
        </Fade>
      </Jumbotron>
    </>
  );
}

export default PriceComponent;
