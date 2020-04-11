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
            <div className="container-fluid mt-1" style={{ padding: 25}}>
                <div className="row">
                    <div className="col-lg-5 col-md-10  col-sm-12" style={{paddingTop: "20px"}}>
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
                    <div className="col-lg-5 offset-lg-2 col-md-10 offset-md-1 col-sm-12 offset-sm-1" style={{ padding: 16 }}>
                        <Image src={apic} rounded style={{ width: "83%"}} />
                    </div>
                </div>
            </div>
        );
    }
}




export default GalleryComponent;