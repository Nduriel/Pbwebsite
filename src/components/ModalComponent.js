import React, { Component } from 'react';
import {
    Label, Button, Modal, ModalHeader,
    ModalBody, ModalFooter, Col, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';
import FooterComponent from './FooterComponent';
// import * as emailjs from 'emailjs-com';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


const modalFont = {
    top: {
        backgroundColor: "black", color: "#9df5cc",
        borderBottomColor: "purple",
        fontStyle: "italic",
        textAlign: "center",
        textShadow: "2px 2px 2px #f1069f"
    },
    bottom: {
        backgroundColor: "black", color: "#9df5cc",
        borderTopColor: "purple",
        fontStyle: "italic",
        textAlign: "center",
        textShadow: "2px 2px 2px #f1069f"
    },
    errorText: {
        color: "white"
    }
}

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            time: '',
            contactType: '',
            reserveDate: new Date(),
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
            }
        };
    }

    handleSubmit = (values) => {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is:' + JSON.stringify(values));
        this.toggleModal();
        // const { firstName, email, time, reserveDate, phoneNum } = this.state;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    dateChange = (date) => {
        this.setState({
            reserveDate: date
        })
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {

        return (
            <React.Fragment>
                <FooterComponent call={this.toggleModal} />
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}
                    className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal} style={modalFont.top}>
                        Send me your info and I'll contact you asap!<br />
                    </ModalHeader>
                    {/* onSubmit={values => this.handleSubmit(values)} */}
                    <ModalBody id="modalbody">
                        <LocalForm id="reserveForm" onSubmit={values => this.handleSubmit(values)}>
                            <Row className="formgroup">
                                <Col md={12}>
                                    <Label htmlFor="firstName"
                                        style={{ fontWeight: "bold" }}>First Name</Label>
                                    <Control.text model=".firstName"
                                        name="firstName"
                                        id="firstName"
                                        onChange={this.handleChange}
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
                                            required: <span style={modalFont.errorText}>'Required'</span>,
                                            minLength: <span style={modalFont.errorText}>'Must be at least 2 characters'</span>,
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                    <Label htmlFor="lastName"
                                        style={{ fontWeight: "bold" }}>Last Name</Label>
                                    <Control.text model=".lastName"
                                        name="lastName"
                                        onChange={this.handleChange}
                                        id="lastName"
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
                                            required: <span style={modalFont.errorText}>'Required'</span>,
                                            minLength: <span style={modalFont.errorText}>'Must be at least 2 characters'</span>,
                                            maxLength: <span style={modalFont.errorText}>'Must be 15 characters or less'</span>
                                        }}
                                    />
                                </Col>
                            </Row><br />
                            <Row className="formgroup">
                                <Col md={12}>
                                    <Label htmlFor="email" style={{ fontWeight: "bold" }}>Email Address</Label>
                                    <Control.text model=".email"
                                        name="email"
                                        id="emailaddress"
                                        onChange={this.handleChange}
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
                                            required: <span style={modalFont.errorText}>'Required'</span>,
                                            validEmail: <span style={modalFont.errorText}>'Invalid email address'</span>
                                        }}
                                    />
                                    <Label htmlFor="phoneNum" style={{ fontWeight: "bold" }}>Phone</Label>
                                    <Control.text model=".phoneNum"
                                        name="phoneNum"
                                        id="phoneNum"
                                        onChange={this.handleChange}
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
                                            required: <span style={modalFont.errorText}>'Required'</span>,
                                            minLength: <span style={modalFont.errorText}>'Must be at least 10 numbers'</span>,
                                            maxLength: <span style={modalFont.errorText}>'Must be 15 numbers or less'</span>,
                                            isNumber: <span style={modalFont.errorText}>'Must be a number'</span>
                                        }}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row className="formgroup">
                                <Col md={12}>
                                    <div className="row">
                                        <div className="col-6">
                                            <Label htmlFor="reserveDate" style={{ fontWeight: "bold" }}>Date Requested</Label> <br />
                                            <Control
                                                className="form-control"
                                                model=".reserveDate"
                                                selected={this.state.reserveDate}
                                                onDateChange={date => { this.setState({ reserveDate: date }) }}
                                                onChange={this.dateChange}
                                                component={DatePicker}
                                                name="reserveDate"
                                                id="reserveDate"
                                                dateFormat="MM/dd/yyyy"
                                                mapProps={({ reserveDate, dateChange }) => {
                                                    return {
                                                        date: reserveDate,
                                                        onDateChange: dateChange,
                                                    };
                                                }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <Label htmlFor="reserveDate" style={{ fontWeight: "bold" }}>Time Requested</Label><br />
                                            <Control.select model=".time"
                                                id="time"
                                                name="time"
                                                onChange={this.handleChange}
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
                                                    required: <span style={modalFont.errorText}>'Required'</span>,
                                                    isNumber: <span style={modalFont.errorText}>'Select an appointment timeframe'</span>,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Row className="formgroup">
                                <Col md={6} sm={6} xs={6}>
                                    <Button type="submit" color="info">Reserve</Button>{' '}
                                    <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control">
                                            <option>By Email</option>
                                        <option>By Phone</option>
                            </Control.select>
                                    <strong>Best way to reach you?</strong>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                    <ModalFooter style={modalFont.bottom}>
                        <Col>**Dates and time submitted are not guaranteed**<br />
                                    **Allow 2 hours per appointment** </Col>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}
export default ModalComponent;