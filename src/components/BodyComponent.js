import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';


// const step1 = require('../images/step1mia.jpg');
// const step2 = require('../images/step2mia.jpg');
// const step3 = require('../images/step3mia.jpg');
// const step4 = require('../images/step4mia.jpg');
// const step5 = require('../images/step5mia.jpg');
// const bodypic1 = require('../images/BodCollage1.jpg');
const bookappt = require('../images/bookappt2.jpg');
const prices = require('../images/prices2.jpg');

class BodyComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img src={bookappt} fluid id="heightpic" alt="booking" style={{borderradius: "50%"}}/>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img id="heightpic1" src={prices} alt="pricepic" />
                    </div>
                </div>
                {/* <div className="row">
                    
                    <div className="col-lg-4 offset-lg-1 col-md-6 col-sm-12">
                        <Carousel id="carouselborder">
                            <Carousel.Item>
                                <img className="d-block w-100" src={step1} alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={step2} alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={step3} alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={step4} alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={step5} alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div> */}
            </div>
        );
    }

}
export default BodyComponent;