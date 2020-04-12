import React, { Component } from 'react';
import { Jumbotron, Navbar, Nav, NavItem, NavLink } from 'reactstrap';





const logo = require('../images/pbmimg13.png');


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row' style={{ textAlign: 'center' }}>
                            <div className='col'>
                                Basic Fills <span className="fontdes1">30$</span>
                                <img src={logo} height="225" width="auto" alt="logo" />
                                Full Sets <span className="fontdes">40$</span>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar color="#9df5cc" light expand="sm" sticky="top">
                    <div className="container-fluid">
                        <div className="row row-cols-1">      
                                <Nav navbar>
                                    <NavItem className="col-4">
                                        <NavLink href="#"  style={{color: "purple",  fontWeight:"bold"}}> Home </NavLink>
                                    </NavItem>
                                    <NavItem className="col-4">
                                        <NavLink href="#" style={{color: "#f1069f",  fontWeight:"bold"}}> Gallery </NavLink>
                                    </NavItem>
                                    <NavItem className="col-4">
                                        <NavLink href="#" style={{color: "purple",  fontWeight:"bold"}}> Appointments </NavLink>
                                    </NavItem>
                                </Nav>                    
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <Nav navbar>
                                    <NavItem>
                                        <a role="button" className="btn btn-link" href="tel:+17579127833"><i className="fa fa-phone fa-lg" /></a>
                                    </NavItem>
                                    <NavItem>
                                        <a role="button" className="btn btn-link btn-instagram" aria-hidden="true" href="http://instagram.com/polished.bymia/">
                                            <i className="fa fa-instagram fa-lg" />
                                        </a>
                                    </NavItem>
                                    <NavItem>
                                        <a role="button" className="btn btn-link btn-facebook" aria-hidden="true" href="http://facebook.com/polishedbymia/">
                                            <i className="fa fa-facebook fa-lg" />
                                        </a>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>

                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}


export default Header;