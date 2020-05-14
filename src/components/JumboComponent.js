import React, { Component } from 'react';
import {
    Jumbotron, Col, Row, Container,
    Navbar, Nav, NavItem, Button
} from 'reactstrap';


import Image from 'react-bootstrap/Image';

const pics = {
    logo: require('../images/pbmlogo.jpg'),
    miaPic11: require('../images/miaPic11.jpg'),
    miaPic12: require('../images/miaPic12.jpg')
};

class JumboComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row style={{ textAlign: 'center', flexDirection: "row" }}>
                            {/* <Col style={{fontWeight: "bolder"}}>Polished By Mia</Col> */}
                            <Col xs={0} md={4} lg={4}>
                                <Image id="jpic" style={{ height: "200px"  }}
                                    src={pics.miaPic12} alt="jpic1" roundedCircle />
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <Image id="jpic" style={{ width: "200px", height: "250px" }}
                                    src={pics.logo} alt="logopic" roundedCircle />
                            </Col>
                            <Col xs={0} md={4} lg={4}>
                                <Image id="jpic" style={{ height: "200px" }}
                                    src={pics.miaPic11} alt="jpic2" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Navbar collapeOnSelect light expand="sm" sticky="top">
                    <Container fluid>
                        <Row>
                            <Col lg={4}>

                                <Nav navbar >
                                    <NavItem>
                                        <Button color="primary" onClick={this.props.call}
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "20px",
                                                fontStyle: "italic",
                                                textShadow: "2px 2px 2px #f1069f"
                                            }}>
                                            Appointments</Button>
                                    </NavItem>
                                    <NavItem id="goneText">
                                        <a role="button" className="btn btn-link" target="_blank"
                                            rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                                            <i id="socialIcon" className="fa fa-envelope-o" />
                                        </a>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <span id="goneText"
                                    style={{
                                        fontFamily: 'Courgette',
                                        fontSize: "20px",
                                        color: "#9df5cc",
                                        textShadow: "2px 2px 2px #f1069f",
                                    }}>
                                    Quality and Affordable Acryilics</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} sm={2}>
                                <Nav navbar style={{ flexDirection: "row" }}>
                                    <NavItem>
                                        <a role="button" className="btn btn-link" target="_blank"
                                            rel="noreferrer noopener" href="tel:+17579127833">
                                            <i id="socialIcon" className="fa fa-phone fa-lg" />
                                        </a>
                                    </NavItem>
                                    <NavItem>
                                        <a role="button" className="btn btn-link btn-instagram" target="_blank"
                                            rel="noreferrer noopener" aria-hidden="true"
                                            href="http://instagram.com/polished.bymia/">
                                            <i id="socialIcon" className="fa fa-instagram fa-lg" />
                                        </a>
                                    </NavItem>
                                    <NavItem>
                                        <a role="button" className="btn btn-link btn-facebook" target="_blank"
                                            rel="noreferrer noopener" aria-hidden="true"
                                            href="http://facebook.com/polishedbymia/">
                                            <i id="socialIcon" className="fa fa-facebook fa-lg" />
                                        </a>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default JumboComponent;