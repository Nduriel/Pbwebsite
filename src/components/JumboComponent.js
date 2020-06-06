import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'reactstrap';


function JumboComponent(props) {
    return (
        <>
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
                            <Nav.Link href="/home" style={{ color: "#9df5cc" }}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="glow">
                            <Nav.Link href="/prices" style={{ color: "#9df5cc" }}>Prices</Nav.Link>
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
                    <Nav className="ml-auto">
                        <Button color="primary" onClick={props.call}
                            size="lg"
                            style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textShadow: "2px 2px 2px #f1069f",
                                margin: "10px"
                            }}>
                            Appointments
                        </Button>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default JumboComponent;