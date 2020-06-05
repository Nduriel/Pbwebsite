import React from 'react';
import { Col, Row, Container, Jumbotron, Button } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { carouselPic } from './photos';
import { jumbotronPic } from './photos';
// import TableComponent from './TableComponent';

const capstyle = {
    fontWeight: "bold",
    color: "#9df5cc",
    fontSize: "23px",
    textShadow: "2px 2px 2px #f1069f",
    fontFamily: "Courgette"
}

function BodyComponent(props) {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <Row >
                    <Col lg={6} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                        <div id="bodyBox">
                            <Image id="jpic1" style={{ width: "300px", height: "300px", margin: "10px" }}
                                src={jumbotronPic.logo2} alt="logopic" fluid roundedCircle /><br />
                            <p>Polished By Mia <sub><i className="fa fa-copyright" aria-hidden="true"
                                style={{ fontSize: "15px" }} /></sub>{' '}
                         is an Acrylic service that caters to clients, exclusively,
                        in the Newport News and surrounding Hampton Roads area (757).  Check out
                        the gallery here, or Facebook and Instagram for my work!</p>
                        </div>
                        <br />
                        <div id="bodyBox">
                            <p style={{ margin: "10px" }}>
                                * By Appointment Only *. <br />
                        Due to the Coronavirus Pandemic,
                        masks are *required* every visit. <br /> No Exceptions! <br />
                                <Button color="primary" onClick={props.call}
                                    size="lg"
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        textShadow: "2px 2px 2px #f1069f",
                                        margin: "10px"
                                    }}>
                                    Appointments
                        </Button>
                            </p>
                        </div>
                        <br />
                    </Col>
                    <Col lg={{ size: 5, offset: 1 }} md={{ size: 12, offset: 1 }} sm={12} xs={12} >
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
                {/* <Row>
                <Col lg={12} md={12} sm={12} style={{ paddingTop: "19px" }}>
                    <TableComponent />
                </Col>
            </Row> */}
            </Container>
        </Jumbotron>
    );
}
export default BodyComponent;