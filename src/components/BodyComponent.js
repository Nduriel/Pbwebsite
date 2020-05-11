import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';


const capstyle = {
    fontStyle: "oblique",
    fontWeight: "bold",
    color: "#9df5cc",
    fontSize: "20px",
    textShadow: "2px 2px 2px #f1069f"
}
const galpics = {
    longNails: require('../images/miaPic15.jpg'),
    medNails: require('../images/miaPic18.jpg'),
    shortNails: require('../images/miaPic10.jpg'),
    tpic: require('../images/noticepic.jpg'),
    bookappt: require('../images/BodCollage1.jpg'),
    pic1: require('../images/miaPic5.jpg'),
    pic2: require('../images/miaPic6.jpg'),
    pic3: require('../images/miaPic3.jpg'),
    pic4: require('../images/miaPic4.jpg'),
    pic5: require('../images/miaPic5.jpg'),
    pic22: require('../images/miaPic22.jpg'),
    pic7: require('../images/miaPic7.jpg'),
};

class BodyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextIcon: <span aria-hidden="true" className="carousel-control-next-icon" />,
            prevIcon: <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
    }
    render() {
        const { nextIcon, prevIcon } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col lg={6} sm={12}>
                        <Image src={galpics.bookappt} fluid id="heightpic" alt="bookingpic" />
                    </Col>
                    <Col lg={6} sm={12} style={{ paddingTop: "15px" }}>
                        <Carousel id="carouselborder" nextIcon={nextIcon} prevIcon={prevIcon} slide interval={4500}>
                            <Carousel.Item>
                                <Image src={galpics.pic1} alt="First slide" fluid />
                                <Carousel.Caption style={capstyle}>Chelley - "She is outstanding! Has patience and does a wonderful job!!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic2} alt="Second slide" fluid />
                                <Carousel.Caption style={capstyle}>Patti - "Maria does awesome nails"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic3} alt="Third slide" fluid />
                                <Carousel.Caption style={capstyle}>Katrina - "She is awesome!!! Do not hesitate to hit her up!!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic4} alt="Fourth slide" fluid />
                                <Carousel.Caption style={capstyle}> Dianne - "She is absolutely amazing, takes her time and makes
                                     sure you love it before you leave! She’s definitely my nail tech from here on out!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic22} alt="Fourth slide" fluid />
                                <Carousel.Caption style={capstyle}> Karen - "She does a wonderful job"</Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: "19px" }}>
                        <Table style={{fontFamily: 'Manrope'}} size='sm'
                         responsive striped bordered hover
                          variant="dark">
                            <thead style={{ color: "pink", fontWeight: "bold" }}>
                                <tr style={{ textAlign: "center" }}>
                                    <th><Image id="thumbnailPic" src={galpics.tpic} thumbnail fluid/>
                                    <br />Type of Set</th>
                                    <th><Image id="thumbnailPic" src={galpics.shortNails} thumbnail fluid />
                                    <br />Short Nails</th>
                                    <th><Image id="thumbnailPic" src={galpics.medNails} thumbnail fluid />
                                    <br />Med Nails </th>
                                    <th><Image id="thumbnailPic" src={galpics.longNails} thumbnail fluid />
                                    <br />Longs Nails</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Acrylic Full Set:</td>
                                    <td>$ 35</td>
                                    <td>$ 45</td>
                                    <td>$ 50</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Acrylic Fill:</td>
                                    <td>$ 30</td>
                                    <td>$ 35</td>
                                    <td>$ 40</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Ombre Full Set:</td>
                                    <td>$ 40</td>
                                    <td>$ 55</td>
                                    <td>$ 55</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Ombre Fill:</td>
                                    <td>$ 35</td>
                                    <td>$ 40</td>
                                    <td>$ 40</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Color Acrylic Full Set:</td>
                                    <td colSpan="3" style={{ textAlign: "center" }}>
                                    **Nails need to be soaked off for an additional $ 5 (Full Set: $7)**
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Add-Ons:</td>
                                    <td style={{ textAlign: "center" }}>* Jewel on 2 Fingers: $4 *</td>
                                    <td style={{ textAlign: "center" }}>* Full Blinged out nail: $7 *</td>
                                    <td style={{ textAlign: "center" }}>* Encapsulated Design: $3 (2 Fingers)  *</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold" }}>Toe Color Change:</td>
                                    <td colSpan="3" style={{ textAlign: "center" }}>$10 for Gel; $7 for regular</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default BodyComponent;