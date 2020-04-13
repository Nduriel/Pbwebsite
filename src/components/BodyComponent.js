import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const mappic = require('../images/mappic.png');


const miaPic1 = require('../images/miaPic5.jpg');
const miaPic2 = require('../images/miaPic2.jpg');
const miaPic3 = require('../images/miaPic3.jpg');
const miaPic4 = require('../images/miaPic7.jpg');
const miaPic5 = require('../images/miaPic8.jpg');
const apic = require('../images/bookappt.jpg');

class BodyComponent extends Component {
    render() {
        return (
            <div className="container-fluid mt-1" style={{ paddingTop: "25px" }}>
                <div className="row">
                    <div className="col-lg-5 col-md-10  col-sm-12" style={{ paddingTop: "20px" }}>
                        <Carousel fade="true" pause="hover" interval="5000" className="carouselborder">
                            <Carousel.Item>
                                <img
                                    src={miaPic1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={miaPic2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={miaPic3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={miaPic4}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={miaPic5}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-lg-5 offset-lg-2 col-md-10 offset-md-1 col-sm-12 offset-sm-1" style={{ paddingTop: "29px" }}>
                        <Image src={apic} rounded style={{ width: "83%", height: "auto" }} />
                    </div>
                    <div className="col  col-sm-12" style={{ paddingTop: "100px" }}>
                        <Card className="cardnmap text-center">
                            <Card.Header style={{ backgroundColor: "#f1069f" }}>
                                Polished by Mia is exclusively catering to clients in the 757 area! Call or book you appointment today!
                            </Card.Header>
                            <Card.Body>
                                "I love doing nails! - Mia"
                            </Card.Body>
                            <Card.Img variant="bottom" src={mappic} />
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}




export default BodyComponent;