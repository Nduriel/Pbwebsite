import React from 'react';
import { Jumbotron, Col, Row, Container } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Image from 'react-bootstrap/Image';

const pics = {
    logo: require('../images/pbmlogo.jpg'),
    miaPic11: require('../images/miaPic11.jpg'),
    miaPic12: require('../images/miaPic12.jpg')
};

function JumboComponent() {
    return (
        <React.Fragment>
            <Jumbotron fluid>
                <Container fluid>
                    <Row style={{ textAlign: 'center', flexDirection: "row" }}>
                        <Col xs={0} md={4} lg={4}>
                            <Image id="jpic" style={{ height: "200px" }}
                                src={pics.miaPic12} alt="jpic1" roundedCircle />
                        </Col>
                        <Col xs={12} md={4} lg={4}>
                            <Image id="jpic1" style={{ width: "250px", height: "270px" }}
                                src={pics.logo} alt="logopic" roundedCircle />
                        </Col>
                        <Col xs={0} md={4} lg={4}>
                            <Image id="jpic" style={{ height: "200px" }}
                                src={pics.miaPic11} alt="jpic2" roundedCircle />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Navbar light collapseOnSelect expand="md" sticky="top">
                <Navbar.Brand style={{
                    color: "#9df5cc",
                    background: "black",
                    padding: "11px",
                    border: "2px solid #f1069f",
                    borderRadius: "50%"
                }} href="#home">PBM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link href="#prices" style={{ color: "#9df5cc" }}>Pricing</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title={<span style={{ color: "#9df5cc" }}>Social Media</span>} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="tel:+17579127833"
                                target="_blank" rel="noreferrer noopener">
                                {/* <a role="button" className="btn btn-link" target="_blank"
                                    rel="noreferrer noopener" href="tel:+17579127833">
                                    </a>  */}
                                <i id="socialIcon" className="fa fa-phone fa-lg" />{' '} Questions?
                                </NavDropdown.Item>
                            <NavDropdown.Item href="http://instagram.com/polished.bymia/"
                                rel="noreferrer noopener" aria-hidden="true"
                                target="_blank">
                                {/* <a role="button" className="btn btn-link btn-instagram" target="_blank"
                                    rel="noreferrer noopener" aria-hidden="true"
                                    href="http://instagram.com/polished.bymia/"></a>  */}
                                <i id="socialIcon" className="fa fa-instagram fa-lg" />{' '}
                                #polishbymia
                            </NavDropdown.Item>
                            <NavDropdown.Item href="http://facebook.com/polishedbymia/"
                                target="_blank" rel="noreferrer noopener" aria-hidden="true">
                                {/* <a role="button" className="btn btn-link btn-facebook" target="_blank"
                                    rel="noreferrer noopener" aria-hidden="true"
                                    href="http://facebook.com/polishedbymia/"></a> */}
                                <i id="socialIcon" className="fa fa-facebook fa-lg" />{' '}
                                 facebook
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Item>
                        Acrilic Designs: Full Sets and Cleanings
                    </Nav.Item>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default JumboComponent;