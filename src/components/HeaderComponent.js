import React, { Component } from 'react';
import {
    Jumbotron, Navbar, Nav, NavItem,
    Form, FormGroup, Label, Input,
} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';




const logo = require('../images/pbmimg13.png');


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row' style={{ textAlign: 'center', fontSize: "22px" }}>
                            <div className='col'>
                                <div className="col-sm-12">
                                    Acryllic Designs for an affordable price"<br />
                                </div>
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
                                    <Link to='/' style={{ color: "purple", fontWeight: "bold" }}> Home </Link>
                                </NavItem>
                                <NavItem className="col-4">
                                    <Link to='/gallery' style={{ color: "#f1069f", fontWeight: "bold" }}> Gallery </Link>
                                </NavItem>
                                <NavItem className="col-4">
                                    <Button onClick={this.toggleModal} color="white" style={{ color: "purple", fontWeight: "bold", fontSize: "22px" }}>Appointments</Button>
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
                <div className="container-fluid">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className={this.props.className}>
                        <ModalHeader style={{ backgroundColor: "#680146", color: "#9df5cc", borderBottomColor: "purple" }} toggle={this.toggleModal}>Send me your info and I'll contact you asap!</ModalHeader>
                        <ModalBody className="modalbody">
                            <Form>
                                <FormGroup>
                                    <Label for="firstname">Name</Label>
                                    <Input type="text" name="firstname" id="firstname" placeholder="First Name" /> <br />
                                    <Input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Contact Information</Label>
                                    <Input type="email" name="email" id="emailaddress" placeholder="Email Address" />  <br />
                                    <Input type="tel" name="phonenumber" id="phonenumber" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="booking">Preferred day and time</Label><br />
                                    <div className="row">
                                        <div className="col-6">
                                            <Input type="date" name="date" id="date" /><br />
                                        </div>
                                        <div className="col">
                                            <Input type="time" name="time" id="time" />
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "center" }}> **Date and time submitted are not guaranteed**</div>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter style={{ backgroundColor: "#680146", borderTopColor: "purple" }}>
                            <Button color="info" onClick={this.toggleModal}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }
}


export default Header;