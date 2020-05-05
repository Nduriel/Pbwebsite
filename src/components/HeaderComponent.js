import React, { Component } from 'react';
import {
    Jumbotron, Navbar, Nav, NavItem,
    Label, Button, Modal, ModalHeader,
    ModalBody, ModalFooter, Col, Row, Container
} from 'reactstrap';
// import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Control, LocalForm, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';

//CHECK OUT HOW TO MAKE MY NAVBAR RESPONSIVE TO VIEWPORT REACT-BOOTSTRAP DOC

const logo = require('../images/pbmimg13.png');
const miaPic11 = require('../images/miaPic11.jpg');
const miaPic12 = require('../images/miaPic12.jpg');
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



const spancolor = {
    color: "white"
}
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            time: '',
            reserveDate: new Date(),
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is:' + JSON.stringify(values));
    }

    handleChange(date) {
        this.setState({
            reserveDate: date
        })
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
                    <Container fluid>
                        <Row style={{ textAlign: 'center', fontSize: "22px" }}>
                            <Col xs={4} md={4} lg={4}>
                                <Image id="jpic" style={{ height: "200px" }}
                                    src={miaPic12} alt="jpic1" roundedCircle />
                            </Col>
                            <Col xs={4}md={4} lg={4}>
                                <Image style={{ height: "200px" }}
                                    src={logo} alt="logopic" />
                            </Col>
                            <Col xs={4} md={4} lg={4}>
                                <Image id="jpic" style={{ height: "200px" }}
                                    src={miaPic11} alt="jpic2" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Navbar collapeOnSelect light expand="sm" sticky="top">
                    <Container fluid>
                        <Row lg={12}>
                            <Nav navbar>
                                <span style={{ color: "pink", textShadow: "1px 1px 2px black, 0 0 25px white, 0 0 5px white" }}>
                                    Hampton Roads Only!
                                </span>
                                <NavItem className="col-4">
                                    <Button color="primary" onClick={this.toggleModal}
                                        style={{ fontWeight: "bold", fontSize: "22px" }}>Appointments</Button>
                                </NavItem>
                            </Nav>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <Nav navbar>
                                    <NavItem>
                                        <a role="button" className="btn btn-link" target="_blank"
                                            rel="noreferrer noopener" href="tel:+17579127833">
                                            <i className="fa fa-phone fa-lg" />
                                        </a>
                                    </NavItem>
                                    <NavItem>
                                        <a role="button" className="btn btn-link btn-instagram" target="_blank"
                                            rel="noreferrer noopener" aria-hidden="true"
                                            href="http://instagram.com/polished.bymia/">
                                            <i className="fa fa-instagram fa-lg" />
                                        </a>
                                    </NavItem>
                                    <NavItem>
                                        <a role="button" className="btn btn-link btn-facebook" target="_blank"
                                            rel="noreferrer noopener" aria-hidden="true"
                                            href="http://facebook.com/polishedbymia/">
                                            <i className="fa fa-facebook fa-lg" />
                                        </a>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}
                    className={this.props.className}>
                    <ModalHeader style={{
                        backgroundColor: "black", color: "#9df5cc",
                        borderBottomColor: "purple"
                    }}>
                        Send me your info and I'll contact you asap!
                    </ModalHeader>
                    <ModalBody id="modalbody">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="formgroup">
                                <Col md={10}>
                                    <Label htmlFor="firstName" style={{ fontWeight: "bold" }}>First Name</Label>
                                    <Control.text model=".firstName" name="firstName" id="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: <span style={spancolor}>'Required'</span>,
                                            minLength: <span style={spancolor}>'Must be at least 2 characters'</span>,
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                    <Label htmlFor="lastName" style={{ fontWeight: "bold" }}>Last Name</Label>
                                    <Control.text model=".lastName" name="lastName" id="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: <span style={spancolor}>'Required'</span>,
                                            minLength: <span style={spancolor}>'Must be at least 2 characters'</span>,
                                            maxLength: <span style={spancolor}>'Must be 15 characters or less'</span>
                                        }}
                                    />
                                </Col>
                            </Row><br />
                            <Row className="formgroup">
                                <Col md={10}>
                                    <Label htmlFor="email" style={{ fontWeight: "bold" }}>Email Address</Label>
                                    <Control.text model=".email" name="email" id="emailaddress"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: <span style={spancolor}>'Required'</span>,
                                            validEmail: <span style={spancolor}>'Invalid email address'</span>
                                        }}
                                    />
                                    <Label htmlFor="phoneNum" style={{ fontWeight: "bold" }}>Phone</Label>
                                    <Control.text model=".phoneNum" name="phoneNum" id="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: <span style={spancolor}>'Required'</span>,
                                            minLength: <span style={spancolor}>'Must be at least 10 numbers'</span>,
                                            maxLength: <span style={spancolor}>'Must be 15 numbers or less'</span>,
                                            isNumber: <span style={spancolor}>'Must be a number'</span>
                                        }}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row className="formgroup">
                                <Col md={11}>
                                    <div className="row">
                                        <div className="col-6">
                                            <Label htmlFor="reserveDate" style={{ fontWeight: "bold" }}>Date Requested</Label> <br />
                                            <Control
                                                className="form-control"
                                                model=".reserveDate"
                                                selected={this.state.reserveDate}
                                                onDateChange={date => { this.setState({ reserveDate: date }) }}
                                                onChange={this.handleChange}
                                                component={DatePicker}
                                                name="reserveDate"
                                                id="reserveDate"
                                                dateFormat="MM/dd/yyyy"
                                                mapProps={({ reserveDate, handleChange }) => {
                                                    return {
                                                        date: reserveDate,
                                                        onDateChange: handleChange,
                                                    };
                                                }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Label htmlFor="reserveDate" style={{ fontWeight: "bold" }}>Time Requested</Label><br />
                                            <Control.select model=".time"
                                                id="time"
                                                name="time"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    isNumber
                                                }}>
                                                <option value="select">Select Time</option>
                                                <option value="3">3PM</option>
                                                <option value="4">4PM</option>
                                                <option value="5">5PM</option>
                                                <option value="6">6PM</option>
                                                <option value="7">7PM</option>
                                                <option value="8">8PM</option>
                                            </Control.select>
                                            <Errors
                                                className="text-danger"
                                                model=".time"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: <span style={spancolor}>'Required'</span>,
                                                    isNumber: <span style={spancolor}>'Select an appointment timeframe'</span>,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Col md={10}>
                                <Row className="formgroup">
                                    <Button type="submit" color="info" onSubmit={this.handleSubmit}>Reserve</Button>{' '}
                                    <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                                </Row>
                            </Col>
                        </LocalForm>
                    </ModalBody>
                    <ModalFooter style={{ backgroundColor: "black", borderTopColor: "purple", color: "#9df5cc" }}>
                        <Col>**Dates and time submitted are not guaranteed**<br />
                                    **Allow 2 hours per appointment**</Col>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}


export default Header;