import React, { useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavbarToggler,
  DropdownToggle,
  Collapse,
  NavbarBrand,
  NavItem,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import ModalComponent from "./ModalComponent";

function NavBarComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //Modal Toggler
  const [isModalOpen, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!isModalOpen);
  };
  const droptoggle = () => setDropdownOpen((prevState) => !prevState);

  //Navbar Toggler
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navbarIcon = {
    color: "#9df5cc",
    background: "black",
    padding: "11px",
    border: "3px solid #f1069f",
    borderRadius: "50% / 50%",
  };

  const activeStyle = {
    color: "#9df5cc",
    textShadow: "1px 1px white",
  };

  return (
    <>
      <ModalComponent toggleModal={toggleModal} isModalOpen={isModalOpen} />
      <Navbar light collapseOnSelect expand="md" classticky="top">
        <Container fluid>
          <NavbarBrand style={navbarIcon} id="goneText" href="#home">
            PBM
          </NavbarBrand>
          <NavbarToggler
            onClick={toggle}
            aria-controls="responsive-navbar-nav"
          />
          <Collapse isOpen={isOpen} navbar id="responsive-navbar-nav">
            <Nav className="mr-auto" navbar>
              <NavItem className="glow">
                <NavLink
                  exact
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/"
                  style={{
                    color: "white",
                  }}
                >
                  {/* <i
                    className="fa fa-home fa-sm"
                    style={{ color: "rgb(3, 235, 243)" }}
                  /> */}
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="glow">
                <NavLink
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/prices"
                  style={{
                    color: "white",
                  }}
                >
                  Prices
                </NavLink>
              </NavItem>
              <Dropdown
                // className="glow"
                isOpen={dropdownOpen}
                toggle={droptoggle}
                size="sm"
              >
                <DropdownToggle nav style={{ color: "white" }}>
                  <i
                    className="fa fa-comments fa-sm"
                    style={{ color: "rgb(3, 235, 243)" }}
                  />
                  &nbsp;Social
                </DropdownToggle>
                <DropdownMenu id="dropDown">
                  <DropdownItem
                    className="DropDownItem"
                    href="http://instagram.com/polished.bymia/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-hidden="true"
                    style={{
                      color: "white",
                      textShadow: "2px 2px 2px red",
                      fontWeight: "bold",
                    }}
                  >
                    <i className="fa fa-instagram fa-lg" id="dropIg" />
                    &nbsp;Instagram
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    className="DropDownItem1"
                    href="http://facebook.com/polishedbymia/"
                    style={{
                      color: "white",
                      textShadow: "2px 2px 2px blue",
                      fontWeight: "bold",
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-hidden="true"
                  >
                    <i className="fa fa-facebook fa-lg" id="dropFb" />
                    &nbsp; Facebook
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
          <Button
            color="primary"
            onClick={toggleModal}
            size="lg"
            id="appButton"
          >
            Appointments
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
