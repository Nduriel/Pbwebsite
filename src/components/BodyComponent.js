import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

const capstyle = {
    fontStyle: "oblique",
    fontWeight: "bold",
    color: "whitesmoke",
    fontSize: "20px"
}


const longNails = require('../images/miaPic5.jpg');
const medNails = require('../images/miaPic14.jpg');
const shortNails = require('../images/miaPic10.jpg');
const tpic = require('../images/noticepic.jpg');
const bookappt = require('../images/bookappt2.jpg');
const pic1 = require('../images/miaPic1.jpg');
const pic2 = require('../images/miaPic6.jpg');
const pic3 = require('../images/miaPic3.jpg');
const pic4 = require('../images/miaPic4.jpg');
const pic5 = require('../images/miaPic5.jpg');
const pic6 = require('../images/miaPic6.jpg');
const pic7 = require('../images/miaPic7.jpg');

class BodyComponent extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={6} sm={12}>
                        <Image src={bookappt} fluid id="heightpic" alt="booking" style={{ borderradius: "50%" }} />
                    </Col>
                    <Col lg={6} sm={12} style={{ paddingTop: "15px" }}>
                        <Carousel id="carouselborder">
                            <Carousel.Item>
                                <Image src={pic1} alt="First slide" fluid />
                                <Carousel.Caption style={capstyle}>Chelley - "She is outstanding! Has patience and does a wonderful job!!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic2} alt="Second slide" fluid />
                                <Carousel.Caption style={capstyle}>Patti - "maria does a awesome nails"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic3} alt="Third slide" fluid />
                                <Carousel.Caption style={capstyle}>Katrina - "she is awesome!!! do not hesitate to hit her up!!"</Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic4} alt="Fourth slide" fluid />
                                <Carousel.Caption style={capstyle}> Dianne - "She is absolutely amazing takes her time and makes
                                     sure you love it before you leave she’s definitely my nail tech from here on out!"</Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: "10px" }}>
                        <Table id="tablestyle" striped bordered hover variant="dark">
                            <thead style={{ color: "pink", fontWeight: "bold" }}>
                                <tr>
                                    <th><u>Type of Set</u></th>
                                    <th style={{ textAlign: "center" }}>Short Nails</th>
                                    <th style={{ textAlign: "center" }}>Med Nails</th>
                                    <th style={{ textAlign: "center" }}>Longs Nails</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Acrylic Full Set</td>
                                    <td>$ 35</td>
                                    <td>$ 45</td>
                                    <td>$ 50</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold" }}>Acrylic Fill</td>
                                    <td>$ 30</td>
                                    <td>$ 35</td>
                                    <td>$ 40</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Ombre Full Set</td>
                                    <td>$ 40</td>
                                    <td colSpan="2">$ 55</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold" }}>Ombre Fill</td>
                                    <td>$ 35</td>
                                    <td colSpan="2">$ 40</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Color Acrylic<br /> Full Set</td>
                                    <td colSpan="4" style={{ textAlign: "center" }}><u>Will not</u> fill color Acrylic.
                                    Nails need to be soaked off for an additional $ 5<br />
                                    SOAK OFF WITH FULL SET: + $7
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold" }}>Toe Color Change</td>
                                    <td colSpan="4" style={{ textAlign: "center" }}>$10 for Gel; $7 for regular</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>* Jewel on 2 Fingers: $4 *</td>
                                    <td style={{ textAlign: "center" }}>* Full Blinged out nail: $7 *</td>
                                    <td colSpan="2" style={{ textAlign: "center" }}>* Encapsulated Design: $3 (2 Fingers)  *</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: "center" }}>
                                        <Image src={tpic} width="200px" thumbnail />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <Image src={shortNails} width="180px" thumbnail fluid />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <Image src={medNails} width="180px" thumbnail fluid />
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <Image src={longNails} width="147px" thumbnail fluid />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <footer className="site-footer" style={{textAlign: "center"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center" style={{color: "#9df5cc", fontSize:"20px"}}> <span style={{textShadow: "2px 2px 2px #aaa"}}>Feel free to email me directly :</span>
                            <a role="button" className="btn btn-link" href="mailto:Mmnuoz214@gmail.com"><i className="fa fa-envelope-o" /> Mmnuoz214@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        );
    }
}
export default BodyComponent;