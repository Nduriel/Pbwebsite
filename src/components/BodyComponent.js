import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';


const tableBody = {
    color: "#9df5cc",
    fontWeight: "bold",
    textShadow: "2px 2px 2px #f1069f",
}

const textCenter = {
    textAlign: "center",
}

const capstyle = {
    fontWeight: "bold",
    color: "#9df5cc",
    fontSize: "25px",
    textShadow: "2px 2px 2px #f1069f",
    fontFamily: "Courgette"
}
const galpics = {
    longNails: require('../images/miaPic26.jpg'),
    medNails: require('../images/miaPic18.jpg'),
    shortNails: require('../images/miaPic10.jpg'),
    tpic: require('../images/noticepic.jpg'),
    serveArea: require('../images/BodCollage1.jpg'),
    pic4: require('../images/miaPic4.jpg'),
    pic5: require('../images/miaPic5.jpg'),
    pic6: require('../images/miaPic6.jpg'),
    pic7: require('../images/miaPic7.jpg'),
    pic12: require('../images/miaPic11.jpg'),
    pic22: require('../images/miaPic22.jpg'),
    pic28: require('../images/miaPic28.jpg'),    
    bookAppt: require('../images/bookappt.jpg')
};

function BodyComponent() {
        return (
            <Container fluid>
                <Row style={{justifyContent: "center"}}>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <Image src={galpics.serveArea}  id="heightpic" alt="bookingpic" />
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} style={{ paddingTop: "15px" }}>
                        <Carousel fade id="carouselborder" slide interval={4500}>
                            <Carousel.Item>
                                <Image src={galpics.pic12} alt="First slide" fluid />
                                <Carousel.Caption style={capstyle}>Chelley - "She is outstanding! Has patience and does a wonderful job!!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic6} alt="Second slide" fluid />
                                <Carousel.Caption style={capstyle}>Patti - "Maria does awesome nails"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic28} alt="Third slide" fluid />
                                <Carousel.Caption style={capstyle}>Katrina - "She is awesome!!! Do not hesitate to hit her up!!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic4} alt="Fourth slide" fluid />
                                <Carousel.Caption style={capstyle}> Dianne - "She is absolutely amazing, takes her time and makes
                                     sure you love it before you leave! She’s definitely my nail tech from here on out!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.pic22} alt="Fifth slide" fluid />
                                <Carousel.Caption style={capstyle}> Karen - "She does a wonderful job"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={galpics.bookAppt} alt="Sixth slide" fluid />
                              </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} style={{ paddingTop: "19px"}}>
                    <Table id="prices" style={{fontFamily: 'Manrope'}} size='md'
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
                                    <td style={tableBody}>Acrylic Full Set:</td>
                                    <td style={textCenter}>$ 35</td>
                                    <td style={textCenter}>$ 45</td>
                                    <td style={textCenter}>$ 50</td>
                                </tr>
                                <tr>
                                    <td style={tableBody}>Acrylic Fill:</td>
                                    <td style={textCenter}>$ 30</td>
                                    <td style={textCenter}>$ 35</td>
                                    <td style={textCenter}>$ 40</td>
                                </tr>
                                <tr>
                                    <td style={tableBody}>Ombre Full Set:</td>
                                    <td style={textCenter}>$ 40</td>
                                    <td style={textCenter}>$ 55</td>
                                    <td style={textCenter}>$ 55</td>
                                </tr>
                                <tr>
                                    <td style={tableBody}>Ombre Fill:</td>
                                    <td style={textCenter}>$ 35</td>
                                    <td style={textCenter}>$ 40</td>
                                    <td style={textCenter}>$ 40</td>
                                </tr>
                                <tr>
                                    <td style={tableBody}>Color Acrylic Full Set:</td>
                                    <td colSpan="3" style={{ textAlign: "center" }}>
                                    **Nails need to be soaked off for an additional $ 5 (Full Set: $7)**
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold", 
                                    textShadow: "2px 2px 2px #f1069f" }}>Add-Ons:</td>
                                    <td style={{ textAlign: "center" }}>* Jewel on 2 Fingers: $4 *</td>
                                    <td style={{ textAlign: "center" }}>* Full Blinged out nail: $7 *</td>
                                    <td style={{ textAlign: "center" }}>* Encapsulated Design: $3 (2 Fingers)  *</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold",
                                     textShadow: "2px 2px 2px #f1069f" }}>Toe Color Change:</td>
                                    <td colSpan="3" style={{ textAlign: "center" }}>$10 for Gel; $7 for regular</td>
                                </tr>
                            </tbody>
                        </Table>
                     </Col>
                </Row>
            </Container>
        );
    }
export default BodyComponent;