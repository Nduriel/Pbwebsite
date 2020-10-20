import React, { useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  NavItem,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function NavBarComponent() {
  //Navbar Toggler
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);

  const navbarIcon = {
    color: "black",
    background: "white",
    padding: "10px",
    border: "5px solid #c64b7b",
    borderRadius: "55% / 55%",
    fontStyle: 'italic',
    textShadow: '2px 2px 4px #c64b7b',
    fontFamily: 'Allura',
    fontWeight: 'bolder'
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

  // const activeStyle3 = {
  //   color: "yellow",
  //   textShadow: "1px 1px 1px white",
  // };

  return (
    <>
      <Navbar light collapseOnSelect expand="md" classticky="top">
        <Container fluid>
          <NavbarBrand style={navbarIcon} id="goneText1" href="#home">
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
              {/* <NavItem className="glow">
                <NavLink
                  onClick={toggle}
                  className="nav-link"
                  activeStyle={activeStyle3}
                  to="/specials"
                  style={{
                    color: "white",
                  }}
                >
                  Specials
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
          <a
            href="https://square.site/book/L65T6T8DQHNTT/polished-by-mia"
            role="button"
            className="btn btn-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary" size="lg" id="appButton">
              Appointments
            </Button>
          </a>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
