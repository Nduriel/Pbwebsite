import React, { useState } from 'react';
import {
    Button, Navbar, Nav, NavbarToggler,
    UncontrolledDropdown, DropdownToggle, Collapse,
    NavLink, NavbarBrand, NavItem, DropdownItem, DropdownMenu,
} from 'reactstrap';
import ModalComponent from './ModalComponent';


function NavBarComponent() {

    //Modal Toggler
    const [isModalOpen, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setModal(!isModalOpen);
    };

    //Navbar Toggler
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <ModalComponent toggleModal={toggleModal} isModalOpen={isModalOpen} />
            <Navbar light collapseOnSelect expand="md" sticky="top">
                <NavbarBrand style={{
                    color: "#9df5cc",
                    background: "black",
                    padding: "11px",
                    border: "2px solid #f1069f",
                    borderRadius: "50%"
                }} href="#home">PBM</NavbarBrand>
                <NavbarToggler onClick={toggle} aria-controls="responsive-navbar-nav" />
                <Collapse isOpen={isOpen} navbar id="responsive-navbar-nav">
                    <Nav className="mr-auto" navbar>
                        <NavItem className="glow">
                            <NavLink className="nav-link" href="/home" style={{ color: "#9df5cc" }}>Home</NavLink>
                        </NavItem>
                        <NavItem className="glow">
                            <NavLink className="nav-link" href="/prices" style={{ color: "#9df5cc" }}>Prices</NavLink>
                        </NavItem>
                        <UncontrolledDropdown className="glow">
                            <DropdownToggle nav caret style={{ color: "#9df5cc" }}>
                                Social
                            </DropdownToggle>
                            <DropdownMenu right style={{ background: "#9df5cc", color: "white" }}>
                                <DropdownItem href="http://instagram.com/polished.bymia/"
                                    target="_blank" rel="noreferrer noopener" aria-hidden="true">
                                    <i id="socialIcon" className="fa fa-instagram fa-md" />{' '}
                                #Instagram
                            </DropdownItem>
                                <DropdownItem href="http://facebook.com/polishedbymia/"
                                    target="_blank" rel="noreferrer noopener" aria-hidden="true">
                                    <i id="socialIcon" className="fa fa-facebook fa-lg" />{' '}
                                @Facebook
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Button color="primary" onClick={toggleModal}
                            size="lg"
                            style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                boxShadow: "2px 2px 2px #f1069f",
                                textShadow: "2px 2px 2px #f1069f",
                                margin: "10px",
                                borderRadius: "5%",
                            }}>
                            Appointments
                        </Button>
                    </Nav>
                    <Nav>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default NavBarComponent;