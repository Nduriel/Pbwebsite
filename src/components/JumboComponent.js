import React from 'react';
import { Jumbotron, Col, Row, Container } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { jumbotronPic } from './photos';
import Image from 'react-bootstrap/Image';


function JumboComponent() {
    return (
        <React.Fragment>
            <Jumbotron fluid>
                <Container fluid>
                    <Row style={{ textAlign: 'center', flexDirection: "row" }}>
                        <Col xs={0} md={4} lg={4} style={{ paddingTop: "30px" }}>
                            <Image id="jpic" style={{ height: "200px" }}
                                src={jumbotronPic.miaPic12} alt="jpic1" roundedCircle />
                        </Col>
                        <Col xs={12} md={4} lg={4}>
                            <Image id="jpic1" style={{ width: "250px", height: "270px" }}
                                src={jumbotronPic.logo} alt="logopic" roundedCircle />
                        </Col>
                        <Col xs={0} md={4} lg={4} style={{ paddingTop: "30px" }}>
                            <Image id="jpic" style={{ height: "200px" }}
                                src={jumbotronPic.miaPic11} alt="jpic2" roundedCircle />
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
                        <Nav.Item className="glow">
                            <Nav.Link href="#prices" style={{ color: "#9df5cc" }}>Pricing</Nav.Link>
                        </Nav.Item>
                        <NavDropdown className="glow" title={<span style={{ color: "#9df5cc" }}>Social Media</span>} id="collasible-nav-dropdown">
                            <Nav.Item className="text-center">
                                Follow Me:
                            </Nav.Item>
                            <NavDropdown.Item href="http://instagram.com/polished.bymia/"
                                target="_blank" rel="noreferrer noopener" aria-hidden="true">
                                {/* <i id="socialIcon" className="fa fa-instagram fa-md" />{' '} */}
                                #Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="http://facebook.com/polishedbymia/"
                                target="_blank" rel="noreferrer noopener" aria-hidden="true">
                                {/* <i id="socialIcon" className="fa fa-facebook fa-md" />{' '} */}
                                @Facebook
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