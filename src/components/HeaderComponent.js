import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';




const logo = require('../images/pbmimg13.png');
const logo2 = require('../images/pbmlogo.jpg');


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
                <div className="container">
                    <Navbar color="light" light expand="md" rounded>
                        <NavbarBrand>
                            <img src={logo2} height="45" width="auto" alt="logo2"/>
                        </NavbarBrand>
                    </Navbar>
                </div>
               </React.Fragment>
        );
    }
}


export default Header;