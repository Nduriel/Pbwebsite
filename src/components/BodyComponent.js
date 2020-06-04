import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import TableComponent from './TableComponent';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { carouselPic } from './photos';

const infoBox = {
    outline: "3px solid #f1069f",
    fontSize: "22px",
    color: "#9df5cc",
    border: "3px solid #9df5cc",
    textShadow: "2px 2px 2px #f1069f",
    fontFamily: "Courgette",
    borderRadius: "2%",
    background: "black"
}
const capstyle = {
    fontWeight: "bold",
    color: "#9df5cc",
    fontSize: "25px",
    textShadow: "2px 2px 2px #f1069f",
    fontFamily: "Courgette"
}

function BodyComponent() {
    return (
        <Container fluid>
            <Row style={{ display: "flex" }}>
                <Col lg={7} md={12} sm={12} xs={12} style={{ paddingTop: "15px", textAlign: "center", alignContent: "flex-end" }}>
                    <div style={infoBox}>
                        Polished By Mia <sub><i className="fa fa-copyright" aria-hidden="true"
                            style={{ fontSize: "15px" }} /></sub>{' '}
                         is an Acrylic service that caters to clients, exclusively,
                        in the Newport News and surrounding Hampton Roads area (757).
                    </div> <br />
                    <div style={infoBox}>
                        * By Appointment Only *. <br />
                        Due to the Coronavirus Pandemic,
                        masks are *required* every visit. No Exceptions!
                    </div> <br />
                    {/* <div style={infoBox}>
                   Due to the  Coronvirus Pandemic,
                         masks are *required* every visit. No Exceptions!
                    </div>  */}
                </Col>
                <Col lg={5} md='auto' sm={12} xs={12} style={{ paddingTop: "15px", justifyContent: "flex-end" }}>
                    <Carousel fade slide interval={4500}>
                        <Carousel.Item>
                            <Image src={carouselPic.pic12} alt="First slide" fluid />
                            <Carousel.Caption style={capstyle}>Chelley - "She is outstanding! Has patience and does a wonderful job!!"</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={carouselPic.pic6} alt="Second slide" fluid />
                            <Carousel.Caption style={capstyle}>Patti - "Maria does awesome nails"</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={carouselPic.pic28} alt="Third slide" fluid />
                            <Carousel.Caption style={capstyle}>Katrina - "She is awesome!!! Do not hesitate to hit her up!!"</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={carouselPic.pic4} alt="Fourth slide" fluid />
                            <Carousel.Caption style={capstyle}> Dianne - "She is absolutely amazing, takes her time and makes
                                     sure you love it before you leave! She’s definitely my nail tech from here on out!"</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={carouselPic.pic22} alt="Fifth slide" fluid />
                            <Carousel.Caption style={capstyle}> Karen - "She does a wonderful job"</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={carouselPic.bookAppt} alt="Sixth slide" fluid />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} sm={12} style={{ paddingTop: "19px" }}>
                    <TableComponent />
                </Col>
            </Row>
        </Container>
    );
}
export default BodyComponent;