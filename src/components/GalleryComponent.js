import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'


const miaPic1 = require('../images/miaPic5.jpg');
const miaPic2 = require('../images/miaPic2.jpg');
const miaPic3 = require('../images/miaPic3.jpg');
const miaPic4 = require('../images/miaPic7.jpg');
const miaPic5 = require('../images/miaPic8.jpg');
const apic = require('../images/bookappt.jpg');

class GalleryComponent extends Component {
    render() {
        return (
            <div className="container mt-1" fluid style={{ padding: 25, verticalAlign: 'top' }}>
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm={{offest:2}} ">
                        <Carousel className="carouselborder">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={miaPic1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={miaPic2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={miaPic3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={miaPic4}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={miaPic5}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-lg-7 col-md-4 col-sm-12" style={{ padding: 16 }}>
                        <Image src={apic} rounded style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        );
    }
}




export default GalleryComponent;