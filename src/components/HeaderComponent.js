import React, { Component } from 'react';
import {
    Label, Button, Modal, ModalHeader,
    ModalBody, ModalFooter, Col, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';
import JumboComponent from './JumboComponent';
import * as emailjs from 'emailjs-com';


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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is:' + JSON.stringify(values));
        const { firstName, email, time, reserveDate, phoneNum } = this.state;
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value     
        });
    }
    
dateChange(date) {
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
            <JumboComponent call={this.toggleModal} />
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}
                className={this.props.className}>
                <ModalHeader style={{
                    backgroundColor: "black", color: "#9df5cc",
                    borderBottomColor: "purple",
                    fontStyle: "italic",
                    textAlign: "center",
                    textShadow: "2px 2px 2px #f1069f"
                }}>
                    Send me your info and I'll contact you asap!<br />
                    <span >{''}**Serving the Hampton <span style={{ color: "red" }}>757</span> Roads**</span>
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
                                        required: <span style={spancolor}>'Required'</span>,
                                        minLength: <span style={spancolor}>'Must be at least 2 characters'</span>,
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                                <Label htmlFor="lastName" style={{ fontWeight: "bold" }}>Last Name</Label>
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
                                        required: <span style={spancolor}>'Required'</span>,
                                        minLength: <span style={spancolor}>'Must be at least 2 characters'</span>,
                                        maxLength: <span style={spancolor}>'Must be 15 characters or less'</span>
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
                                        required: <span style={spancolor}>'Required'</span>,
                                        validEmail: <span style={spancolor}>'Invalid email address'</span>
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
                                                required: <span style={spancolor}>'Required'</span>,
                                                isNumber: <span style={spancolor}>'Select an appointment timeframe'</span>,
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Col md={{ size: 12, offset: 4 }} >
                            <Row className="formgroup" style={{ position: "relative", textAlign: "center" }}>
                                <Button type="submit" color="info">Reserve</Button>
                                <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                            </Row>
                        </Col>
                    </LocalForm>
                </ModalBody>
                <ModalFooter style={{
                    backgroundColor: "black",
                    borderTopColor: "purple",
                    color: "#9df5cc",
                    fontStyle: "italic",
                    textAlign: "center",
                    textShadow: "2px 2px 2px #f1069f"
                }}>
                    <Col>**Dates and time submitted are not guaranteed**<br />
                                    **Allow 2 hours per appointment** </Col>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
}
}


export default Header;