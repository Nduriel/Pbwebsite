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

    const buttonStyle = {
        fontWeight: "bold",
        fontSize: "18px",
        boxShadow: "2px 2px 2px #f1069f",
        textShadow: "2px 2px 2px #f1069f",
        margin: "10px",
        borderRadius: "5%",
    }

    const navbarIcon = {
        color: "#9df5cc",
        background: "black",
        padding: "11px",
        border: "3px solid #f1069f",
        borderRadius: "50% / 50%",
    }

    return (
        <>
            <ModalComponent
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
            />
            <Navbar light
                collapseOnSelect
                expand="md"
                classticky="top"
            >
                <NavbarToggler
                    onClick={toggle}
                    aria-controls="responsive-navbar-nav"
                />
                <Collapse
                    isOpen={isOpen}
                    navbar id="responsive-navbar-nav"
                >
                    <Nav className="mr-auto" navbar>
                        <NavItem className="glow">
                            <NavLink
                                className="nav-link"
                                href="/home"
                                style={{
                                    color: "#9df5cc"
                                }}>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="glow">
                            <NavLink
                                className="nav-link"
                                href="/prices"
                                style={{
                                    color: "#9df5cc"
                                }}>
                                Prices
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown className="glow">
                            <DropdownToggle
                                nav caret
                                style={{ color: "#9df5cc" }}>
                                Social
                            </DropdownToggle>
                            <DropdownMenu right
                                style={{
                                    border: "3px solid purple",
                                    background: "black",
                                    color: "white"
                                }}>
                                <DropdownItem
                                    // {  color: "white", background: "#bc2a8d" }
                                    href="http://instagram.com/polished.bymia/"
                                    id="dropIG"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-hidden="true">
                                    <i className="fa fa-instagram fa-lg" />{' '}
                                #Instagram
                            </DropdownItem>
                            <DropdownItem href="http://facebook.com/polishedbymia/"
                                style={{
                                    color: "white",
                                    background: "#007aff"
                                }}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-hidden="true">
                                <i className="fa fa-facebook fa-lg" />{' '}
                                @Facebook
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                <Nav>
                    <NavbarBrand className="mr-5" style={navbarIcon} href="#home">
                        PBM
                        </NavbarBrand></Nav>
                <Nav className="ml-auto">
                    <Button color="primary" onClick={toggleModal}
                        size="lg"
                        style={buttonStyle}>
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