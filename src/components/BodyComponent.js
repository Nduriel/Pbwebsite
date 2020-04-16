import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const step1 = require('../images/step1mia.jpg');
const step2 = require('../images/step2mia.jpg');
const step3 = require('../images/step3mia.jpg');
const step4 = require('../images/step4mia.jpg');
const step5 = require('../images/step5mia.jpg');
const bodypic1 = require('../images/BodCollage1.jpg');
const bookappt = require('../images/bookappt.jpg');
const logo = require('../images/pbmlogo.jpg');

function Location() {
    return (
        <div>Polished by Mia is local to the Hampton Roads,
        specifically Newport News area.  Most of the appointments
            will take place in home.</div>
    )
}

class BodyComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12" style={{ height: "100%" }}>
                        <img src={bodypic1} fluid className="heightpic" alt="" />
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
                        <img src={bookappt} fluid style={{ width: "100%", height: "91%", paddingTop: "10px" }} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 offset-1 col-md-6 col-sm-12">
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
                    <div className="col-lg-4 offset-2" style={{ textAlign: "center" }}>
                        <Card style={{ height: "450px", width: "600px" }}>
                            <Card.Title> Location and Prices</Card.Title>
                          Polished by Mia offers quality Acryllic Nail Design
                           in the Hampton Roads (mainly Newport News), in home. The price
                           for a Basic Fill is $30.  The price for a Full Set is $40.
                           <Card.Footer><img id="cardpic" src={logo} fluid /></Card.Footer>
                        </Card>
                    </div>
                </div>

            </div>
        );
    }

}
export default BodyComponent;