import React, { useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  NavItem,
  // DropdownToggle,
  // DropdownItem,
  // DropdownMenu,
  // Dropdown,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import ModalComponent from "./ModalComponent";

function NavBarComponent() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  //Modal Toggler
  // const [isModalOpen, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal((isModalOpen) => !isModalOpen);
  // };

  // const droptoggle = () => setDropdownOpen((prevState) => !prevState);

  //Navbar Toggler
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  const navbarIcon = {
    color: "#9df5cc",
    background: "black",
    padding: "11px",
    border: "3px solid #f1069f",
    borderRadius: "50% / 50%",
  };

  const activeStyle = {
    color: "#9df5cc",
    textShadow: "1px 1px 1px white",
  };

  const activeStyle1 = {
    color: "#f1069f",
    textShadow: "1px 1px 1px white",
  };

  const activeStyle2 = {
    color: "skyblue",
    textShadow: "1px 1px 1px white",
  };

  return (
    <>
      {/* <ModalComponent toggleModal={toggleModal} isModalOpen={isModalOpen} /> */}
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
                  onClick={toggle}
                  className="nav-link"
                  activeStyle={activeStyle}
                  to="/"
                  style={{
                    color: "white",
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="glow">
                <NavLink
                  onClick={toggle}
                  className="nav-link"
                  activeStyle={activeStyle2}
                  to="/prices"
                  style={{
                    color: "white",
                  }}
                >
                  Prices
                </NavLink>
              </NavItem>
              <NavItem className="glow">
                <NavLink
                  onClick={toggle}
                  className="nav-link"
                  activeStyle={activeStyle1}
                  to="/about"
                  style={{
                    color: "white",
                  }}
                >
                  About Mia
                </NavLink>
              </NavItem>
              {/* <Dropdown
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
                    style={{
                      color: "white",
                      textShadow: "2px 2px 2px blue",
                      fontWeight: "bold",
                    }}
                    href="http://facebook.com/polishedbymia/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-hidden="true"
                  >
                    <i className="fa fa-facebook-square" id="dropFb" />
                    &nbsp; Facebook
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
            </Nav>
          </Collapse>
          <a href="https://square.site/book/L65T6T8DQHNTT/polished-by-mia"
           role="button"
           className="btn btn-link"
           target="_blank"
           rel="noopener noreferrer"
          >
            <Button
              color="primary"
              // onClick={toggleModal}
              size="lg"
              id="appButton"
            >
              Appointments
            </Button>
          </a>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
