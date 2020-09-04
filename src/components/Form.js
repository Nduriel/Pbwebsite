// import React, { useState } from "react";
// import { Col, Row, Button, Label } from "reactstrap";
// import { Control, LocalForm, Errors } from "react-redux-form";
// import DatePicker from "react-datepicker";
// import { toast } from "react-toastify";
// import * as emailjs from "emailjs-com";

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !val || val.length <= len;
// const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(+val);
// const validEmail = (val) =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

// const modalFont = {
//   top: {
//     backgroundColor: "black",
//     color: "#9df5cc",
//     borderBottomColor: "purple",
//     fontStyle: "italic",
//     textAlign: "center",
//     textShadow: "2px 2px 2px #f1069f",
//   },
//   bottom: {
//     backgroundColor: "black",
//     color: "#9df5cc",
//     borderTopColor: "purple",
//     fontStyle: "italic",
//     textAlign: "center",
//     textShadow: "2px 2px 2px #f1069f",
//   },
//   errorText: {
//     color: "white",
//   },
// };
// function ModalForm(props) {
//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNum: "",
//     email: "",
//     time: "",
//     contactType: "",
//     reserveDate: new Date(),
//     touched: {
//       firstName: false,
//       lastName: false,
//       phoneNum: false,
//       email: false,
//     },
//   });

//   const handleSubmit = (values) => {
//     console.log("Current state is: " + JSON.stringify(values));

//     let templateParams = {
//       from_name: values.email,
//       to_name: "Polished By Mia",
//       subject: "Test Reservation",
//       message_html: JSON.stringify(values),
//       name: `${values.firstName} ${values.lastName}`,
//       firstName: values.firstName,
//       lastName: values.lastName,
//       time: values.time,
//       date: values.reserveDate,
//       phoneNum: values.phoneNum,
//       email: values.email,
//       contactType: values.contactType,
//     };

//     emailjs.send(
//       "smtp_server", //Service ID
//       "contact_form",
//       templateParams,
//       "user_9GjxpWZZ0F6izgIeY4tSQ" //User Id
//     );

//     toast.success(
//       `Thankyou ${values.firstName}! I will get back to you as soon as possible!`
//     );
//     props.toggleModal();
//   };

//   const handleChange = ({ target }) => {
//     setState({ ...state, [target.value]: target.value });
//   };

//   const dateChange = (date) => {
//     setState({
//       reserveDate: date,
//     });
//   };
//   return (
//     <LocalForm
//       type="file"
//       data-netlify="true"
//       method="POST"
//       name="Contact-Form"
//       id="Contact-Form"
//       onSubmit={(values) => handleSubmit(values)}
//     >
//       <input type="hidden" name="Contact-Form" value="Contact-Form" />
//       <Row className="formgroup">
//         <Col md={12}>
//           <Label htmlFor="firstName" style={{ fontWeight: "bold" }}>
//             First Name
//           </Label>
//           <Control.text
//             model=".firstName"
//             name="firstName"
//             id="firstName"
//             onChange={handleChange}
//             placeholder="First Name"
//             className="form-control"
//             validators={{
//               required,
//               minLength: minLength(2),
//               maxLength: maxLength(15),
//             }}
//           />
//           <Errors
//             className="text-danger"
//             model=".firstName"
//             show="touched"
//             component="div"
//             messages={{
//               required: <span style={modalFont.errorText}>'Required'</span>,
//               minLength: (
//                 <span style={modalFont.errorText}>
//                   'Must be at least 2 characters'
//                 </span>
//               ),
//               maxLength: "Must be 15 characters or less",
//             }}
//           />
//           <Label htmlFor="lastName" style={{ fontWeight: "bold" }}>
//             Last Name
//           </Label>
//           <Control.text
//             model=".lastName"
//             name="lastName"
//             onChange={handleChange}
//             id="lastName"
//             placeholder="Last Name"
//             className="form-control"
//             validators={{
//               required,
//               minLength: minLength(2),
//               maxLength: maxLength(15),
//             }}
//           />
//           <Errors
//             className="text-danger"
//             model=".lastName"
//             show="touched"
//             component="div"
//             messages={{
//               required: <span style={modalFont.errorText}>'Required'</span>,
//               minLength: (
//                 <span style={modalFont.errorText}>
//                   'Must be at least 2 characters'
//                 </span>
//               ),
//               maxLength: (
//                 <span style={modalFont.errorText}>
//                   'Must be 15 characters or less'
//                 </span>
//               ),
//             }}
//           />
//         </Col>
//       </Row>
//       <br />
//       <Row className="formgroup">
//         <Col md={12}>
//           <Label htmlFor="email" style={{ fontWeight: "bold" }}>
//             Email Address
//           </Label>
//           <Control.text
//             model=".email"
//             name="email"
//             id="emailaddress"
//             onChange={handleChange}
//             placeholder="Email"
//             className="form-control"
//             validators={{
//               required,
//               validEmail,
//             }}
//           />
//           <Errors
//             className="text-danger"
//             model=".email"
//             show="touched"
//             component="div"
//             messages={{
//               required: <span style={modalFont.errorText}>'Required'</span>,
//               validEmail: (
//                 <span style={modalFont.errorText}>'Invalid email address'</span>
//               ),
//             }}
//           />
//           <Label htmlFor="phoneNum" style={{ fontWeight: "bold" }}>
//             Phone
//           </Label>
//           <Control.text
//             model=".phoneNum"
//             name="phoneNum"
//             id="phoneNum"
//             onChange={handleChange}
//             placeholder="Phone number"
//             className="form-control"
//             validators={{
//               required,
//               minLength: minLength(10),
//               maxLength: maxLength(15),
//               isNumber,
//             }}
//           />
//           <Errors
//             className="text-danger"
//             model=".phoneNum"
//             show="touched"
//             component="div"
//             messages={{
//               required: <span style={modalFont.errorText}>'Required'</span>,
//               minLength: (
//                 <span style={modalFont.errorText}>
//                   'Must be at least 10 numbers'
//                 </span>
//               ),
//               maxLength: (
//                 <span style={modalFont.errorText}>
//                   'Must be 15 numbers or less'
//                 </span>
//               ),
//               isNumber: (
//                 <span style={modalFont.errorText}>'Must be a number'</span>
//               ),
//             }}
//           />
//         </Col>
//       </Row>
//       <br />
//       <Row className="formgroup">
//         <Col md={12}>
//           <div className="row">
//             <div className="col-6">
//               <Label htmlFor="reserveDate" style={{ fontWeight: "bold" }}>
//                 Date Requested
//               </Label>
//               <br />
//               <Control
//                 className="form-control"
//                 model=".reserveDate"
//                 selected={state.reserveDate}
//                 onChange={dateChange}
//                 minDate={new Date()}
//                 component={DatePicker}
//                 name="reserveDate"
//                 id="reserveDate"
//                 dateFormat="MM/dd/yyyy"
//                 mapProps={({ reserveDate, dateChange }) => {
//                   return {
//                     date: reserveDate,
//                     onDateChange: dateChange,
//                   };
//                 }}
//               />
//             </div>
//             <div className="col-6">
//               <Label htmlFor="reserveDate" style={{ fontWeight: "bold" }}>
//                 Time Requested
//               </Label>
//               <br />
//               <Control.select
//                 model=".time"
//                 id="time"
//                 name="time"
//                 onChange={handleChange}
//                 className="form-control"
//                 validators={{
//                   required,
//                   isNumber,
//                 }}
//               >
//                 <option value="select">Select Time</option>
//                 <option value="3">3PM</option>
//                 <option value="4">4PM</option>
//                 <option value="5">5PM</option>
//                 <option value="6">6PM</option>
//                 <option value="7">7PM</option>
//                 <option value="8">8PM</option>
//               </Control.select>
//               <Errors
//                 className="text-danger"
//                 model=".time"
//                 show="touched"
//                 component="div"
//                 messages={{
//                   required: <span style={modalFont.errorText}>'Required'</span>,
//                   isNumber: (
//                     <span style={modalFont.errorText}>
//                       'Select an appointment timeframe'
//                     </span>
//                   ),
//                 }}
//               />
//             </div>
//           </div>
//         </Col>
//       </Row>
//       <br />
//       <Row className="formgroup">
//         <Col md={6} sm={6} xs={6}>
//           <Button type="submit" color="info">
//             Reserve
//           </Button>{" "}
//           <Button color="danger" onClick={props.toggleModal}>
//             Cancel
//           </Button>
//         </Col>
//         <Col md={6} sm={6} xs={6}>
//           <Control.select
//             model=".contactType"
//             name="contactType"
//             className="form-control"
//             id="contactType"
//             onChange={handleChange}
//           >
//             <option>By Email</option>
//             <option>By Phone</option>
//           </Control.select>
//           <strong>Best way to reach you?</strong>
//         </Col>
//       </Row>
//     </LocalForm>
//   );
// }

// export default ModalForm;
