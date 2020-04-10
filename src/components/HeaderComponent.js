import React, { Component } from 'react';
import { Jumbotron, Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';





const logo = require('../images/pbmimg13.png');


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row' style={{ textAlign: 'center' }}>
                            <div className='col'>
                                <img src={logo} height="225" width="auto" alt="logo" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar color="#9df5cc" light expand="sm" sticky="top">
                    {/* <NavbarBrand><img src={logo2} height="65" width="auto"/></NavbarBrand> */}
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#"> Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"> Appointments </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-4" navbar>
                        <NavItem>
                            <a role="button" className="btn btn-link" href="tel:+17579127833"><i className="fa fa-phone fa-lg" /></a>
                        </NavItem>
                        <NavItem>
                            <a role="button" className="btn btn-link btn-instagram" aria-hidden="true" href="http://instagram.com/polished.bymia/"><i className="fa fa-instagram fa-lg" /></a>
                        </NavItem>
                        <NavItem>
                            <a role="button" className="btn btn-link btn-facebook" aria-hidden="true" href="http://facebook.com/polishedbymia/"><i className="fa fa-facebook fa-lg" /></a>
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default Header;