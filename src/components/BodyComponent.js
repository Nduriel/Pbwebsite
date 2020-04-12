import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const mappic = require('../images/mappic.png');
const step1 = require('../images/step1mia.jpg');
const step2 = require('../images/step2mia.jpg');
const step3 = require('../images/step3mia.jpg');
const step4 = require('../images/step4mia.jpg');
const step5 = require('../images/step5mia.jpg');


class BodyComponent extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ paddingTop: 25, paddingLeft:"65px" }}>
                <div className="row">
                    <div className="col-lg-4">
                        <Card className="cardnmap text-center" style={{ borderWidth: "10px", outline: "10px solid #9df5cc", width: '25rem' }}>
                            <Card.Header style={{ backgroundColor: "#f1069f" }}>
                                Polished by Mia is exclusively catering to clients in the 757 area! Call or book you appointment today!
                            </Card.Header>
                            <Card.Body>
                                "I love doing nails! - Mia"
                            </Card.Body>
                            <Card.Img variant="bottom" src={mappic} />
                        </Card>
                    </div>
                    <div className="row">
                        <div className="col-lg col-md-12 col-sm-12" style={{textAlign: "center", width:"500px"}}>
                            <Accordion defaultActiveKey="0">
                                <Card className="accordiancard">
                                <Card.Title>How It Works</Card.Title>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Step 1
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Card.Img style={{ height: "250px", width: "auto" }} src={step1} />{'    '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Step 2
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Card.Img style={{ height: "250px", width: "auto" }} src={step2} />{'    '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            Step 3
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Card.Img style={{ height: "250px", width: "auto" }} src={step3} />{'    '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            Step 4
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Card.Img style={{ height: "250px", width: "auto" }} src={step4} />{'    '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                            Step 5
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <Card.Img style={{ height: "250px", width: "auto" }} src={step5} />{'    '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyComponent;