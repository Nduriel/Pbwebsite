import React from "react";
import { Table, Col, Container, Row } from "reactstrap";
import Image from "react-bootstrap/Image";
import { tablePic } from "./photos";

const textCenter = {
  textAlign: "center",
};

const rowTitle = {
  color: "#9df5cc",
  fontWeight: "bold",
  textShadow: "2px 2px 2px #f1069f",
};

function PriceComponent() {
  return (
    <>
      <Table
        dark
        id="prices"
        style={{
          fontFamily: "Manrope",
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
        <thead style={{ color: "pink", fontWeight: "bold" }}>
          <tr style={{ textAlign: "center" }}>
            <th>
              <Image id="thumbnailPic" src={tablePic.tpic} thumbnail fluid />
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
          <tr>
            <td style={rowTitle}>Acrylic Full Set:</td>
            <td style={textCenter}>$ 35</td>
            <td style={textCenter}>$ 45</td>
            <td style={textCenter}>$ 50</td>
          </tr>
          <tr>
            <td style={rowTitle}>Acrylic Fill:</td>
            <td style={textCenter}>$ 30</td>
            <td style={textCenter}>$ 35</td>
            <td style={textCenter}>$ 40</td>
          </tr>
          <tr>
            <td style={rowTitle}>Ombre Full Set:</td>
            <td style={textCenter}>$ 40</td>
            <td style={textCenter}>$ 55</td>
            <td style={textCenter}>$ 55</td>
          </tr>
          <tr>
            <td style={rowTitle}>Ombre Fill:</td>
            <td style={textCenter}>$ 35</td>
            <td style={textCenter}>$ 40</td>
            <td style={textCenter}>$ 45</td>
          </tr>
          <tr>
            <td style={rowTitle}>Color Acrylic Full Set:</td>
            <td style={textCenter}>$ 45</td>
            <td style={textCenter}>$ 55</td>
            <td style={textCenter}>$ 60</td>
          </tr>
          <tr>
            <td colSpan="4" style={textCenter}>
              ** While a Color Acrylic Fill Set is possible, a Full Set Color
              Acrylic is recommened for, best look.**
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "violet",
                fontWeight: "bold",
                textShadow: "2px 2px 2px #f1069f",
              }}
            >
              Add-Ons:
            </td>
            <td style={textCenter}>
              Jeweled: $4 (2 Fingers)
              <br />
              Encapsulated Design: $3 (2 Fingers)
            </td>
            <td style={textCenter}>Full 'Blinged' out nail: $7</td>
            <td style={textCenter}>Nail Soak $10</td>
          </tr>
          <tr>
            <td
              style={{
                color: "violet",
                fontWeight: "bold",
                textShadow: "2px 2px 2px #f1069f",
              }}
            >
              Toe Color Change:
            </td>
            <td colSpan="3" style={textCenter}>
              $10 for Gel
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "violet",
                fontWeight: "bold",
                textShadow: "2px 2px 2px #f1069f",
              }}
            >
              Extra Drilling:
            </td>
            <td colSpan="3" style={textCenter}>
              $5 for each hand
            </td>
          </tr>
        </tbody>
      </Table>
      <Container fluid className='text-center' style={{marginBottom: '20px'}}>
        <Row style={{ justifyContent: "center" }}>
          <Col lg={4} md={4} sm={4} id="bodyBox3" className='infoBox'>
            *Prices are subject to change*
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PriceComponent;
