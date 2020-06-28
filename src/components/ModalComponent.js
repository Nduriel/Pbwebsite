import React, { useState } from 'react';
import {
    Col, Row, Button, Label, Modal,
    ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';


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

function ModalComponent(props) {
    const [state, setState] = useState({
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
    });

    const dateChange = (date) => {
        setState({
            reserveDate: date
        })
    };
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (values) => {

        const yo = JSON.stringify(values);

        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is:' + JSON.stringify(values));
        props.toggleModal();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "reserveForm", yo })
        })
            .then(() => alert(`Success! ${yo}`))
            .catch(error => alert(error));
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.value]: value
            //name of the input: value of the input
        });
    }
    return (
        <>
            <Modal
                isOpen={props.isModalOpen}
                toggle={props.toggleModal}
                fade
                autoFocus>
                <ModalHeader
                    toggle={props.toggleModal}
                    style={modalFont.top}>
                    Send me your info and I'll contact you asap!<br />
                </ModalHeader>
                <ModalBody id="modalbody">

                    <form name="Contact Form" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="Contact Form" />
                        <div>
                            <label>Your Email:</label>
                            <input type="email" name="email" />
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea name="message" />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </ModalBody>
                <ModalFooter style={modalFont.bottom}>
                    <Col>**Dates and time submitted are not guaranteed**<br />
                                    **Allow 2 hours per appointment** </Col>
                </ModalFooter>
            </Modal>
        </>
    );

}

export default ModalComponent;