import React from "react";
import { Table } from "reactstrap";



export const Manicure = () => (
  <Table
    dark
    id="prices"
    style={{
      marginTop: "50px",
      marginBottom: "20px",
    }}
    size="md"
    responsive
    striped
    bordered
    hover
    variant="dark"
  >
    <thead style={{ color: "lightgreen", fontWeight: "bold" }}>
      <tr style={{ textAlign: "center" }}>
        <th colSpan="4">Manicure (30 mins)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="1">Regular Mani No Polish</td>
        <td colSpan="1">$ 12</td>
        <td colSpan="1">French Manicure</td>
        <td colSpan="1">$ 20</td>
      </tr>
      <tr>
        <td colSpan="1">Gel Polish Manicure</td>
        <td colSpan="1">$ 25</td>
        <td colSpan="1">Gel Polish Manicure (Removal)</td>
        <td colSpan="1">$ 30</td>
      </tr>
      <tr>
        <td colSpan="1">Gel Polish Manicure (Design)</td>
        <td colSpan="1">$ 35</td>
        <td colSpan="1">Kids Manicure</td>
        <td colSpan="1">$ 10</td>
      </tr>
    </tbody>
  </Table>
);

export const Pedicure = () => (
  <Table
    dark
    id="prices"
    style={{
      marginTop: "50px",
      marginBottom: "20px",
    }}
    size="sm"
    responsive
    striped
    bordered
    hover
    variant="dark"
  >
    <thead style={{ color: "lightgreen", fontWeight: "bold" }}>
      <tr style={{ textAlign: "center" }}>
        <th colSpan="4">Pedicure (45 mins)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="1">Regular Pedicure No Polish</td>
        <td colSpan="1">$ 20</td>
        <td colSpan="1">Regular Polish Pedicure</td>
        <td colSpan="1">$ 25</td>
      </tr>
      <tr>
        <td colSpan="1">French Pedicure</td>
        <td colSpan="1">$ 30</td>
        <td colSpan="1">Gel Polish Pedicure</td>
        <td colSpan="1">$ 35</td>
      </tr>
      <tr>
        <td colSpan="1">Gel Polish Pedicure + Removal</td>
        <td colSpan="1">$ 40</td>
        <td colSpan="1">Gel Polish Pedicure + Design</td>
        <td colSpan="1">$ 45</td>
      </tr>
      <tr>
        <td colSpan="1">Spa Pedicure + Gel Polish</td>
        <td colSpan="1">$ 50</td>
        <td colSpan="1">Kids Pedicure</td>
        <td colSpan="1">$ 15</td>
      </tr>
    </tbody>
  </Table>
);

export const NailEnhancements = () => (
  <Table
    dark
    id="prices"
    style={{
      marginTop: "50px",
      marginBottom: "20px",
    }}
    size="md"
    responsive
    striped
    bordered
    hover
    variant="dark"
  >
    <thead style={{ color: "lightgreen", fontWeight: "bold" }}>
      <tr style={{ textAlign: "center" }}>
        <th colSpan="4">
          <u>Nail Enhancements</u>
        </th>
      </tr>
    </thead>
    <tr style={{ textAlign: "center" }}>
      <th colSpan="4" style={{ color: "lightskyblue" }}>
        Acrylic Full Sets
      </th>
    </tr>
    <tbody>
      <tr>
        <td colSpan="1">Short Nails</td>
        <td colSpan="1">$ 35</td>
        <td colSpan="1">Medium Short Nails</td>
        <td colSpan="1">$ 40</td>
      </tr>
      <tr>
        <td colSpan="1">Medium Long Nails</td>
        <td colSpan="1">$ 45</td>
        <td colSpan="1">Long Nails</td>
        <td colSpan="1">$ 50</td>
      </tr>
      <tr>
        <td colSpan="1">XL Nails</td>
        <td colSpan="1">$ 55</td>
        <td colSpan="1">Color Acrylic</td>
        <td colSpan="1">$10 to length</td>
      </tr>
      <tr>
        <td colSpan="2">Ombre Acrylic</td>
        <td colSpan="2">$10 to length</td>
      </tr>
      <tr style={{ textAlign: "center" }}>
        <th colSpan="4" style={{ color: "lightskyblue" }}>
          Acrylic Fills
        </th>
      </tr>
      <tr>
        <td colSpan="1">Short Nails</td>
        <td colSpan="1">$ 30</td>
        <td colSpan="1">Medium Short Nails</td>
        <td colSpan="1">$ 35</td>
      </tr>
      <tr>
        <td colSpan="1">Medium Long Nails</td>
        <td colSpan="1">$ 40</td>
        <td colSpan="1">Long Nails</td>
        <td colSpan="1">$ 45</td>
      </tr>
      <tr>
        <td colSpan="1">50 Nails</td>
        <td colSpan="1">$ 55</td>
        <td colSpan="1">Color Acrylic</td>
        <td colSpan="1">$5 to length</td>
      </tr>
      <tr>
        <td colSpan="1">Ombre Acrylic Fill</td>
        <td colSpan="1">$5 to length</td>
        <td colSpan="1">Color Acrylic Change (Extra Drilling)</td>
        <td colSpan="1">$10 to length</td>
      </tr>
    </tbody>
  </Table>
);

export const Addons = () => (
  <Table
    dark
    id="prices"
    style={{
      marginTop: "50px",
      marginBottom: "20px",
    }}
    size="md"
    responsive
    striped
    bordered
    hover
    variant="dark"
  >
    <thead style={{ color: "lightgreen", fontWeight: "bold" }}>
      <tr style={{ textAlign: "center" }}>
        <th colSpan="4">Add On Services</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="1">Soak off Gel Polish</td>
        <td colSpan="1">$ 5</td>
        <td colSpan="1">Soak off Nail (60 minutes w/ Full Set)</td>
        <td colSpan="1">$ 10</td>
      </tr>
      <tr>
        <td colSpan="1">Soak Off (60 minutes)</td>
        <td colSpan="1">$ 20</td>
        <td colSpan="1">French Tips/Half Gel Nail Design</td>
        <td colSpan="1">$ 5</td>
      </tr>
      <tr>
        <td colSpan="1">Total 2/4 Designs</td>
        <td colSpan="1">$ 5/10</td>
        <td colSpan="1">All Nail Designs (10)</td>
        <td colSpan="1">$ 15</td>
      </tr>
      <tr>
        <td colSpan="1">Jewel Designs (2/4)</td>
        <td colSpan="1">$ 4/8</td>
        <td colSpan="1">Full Blinged Out Nails</td>
        <td colSpan="1">$ 6</td>
      </tr>
      <tr>
        <td colSpan="1">All Blinged Out Nail</td>
        <td colSpan="1">$ 75</td>
        <td colSpan="1">Acrylic on 2 Big Toes</td>
        <td colSpan="1">$ 10</td>
      </tr>
      <tr>
        <td colSpan="1">Encapsulated Nail (2/4)</td>
        <td colSpan="1">$ 3/6</td>
        <td colSpan="1">Encapsulated Nails (10)</td>
        <td colSpan="1">$ 15</td>
      </tr>
      <tr>
        <td colSpan="1">Acrylic Fill-In on 2 Big Toes</td>
        <td colSpan="1">$ 6</td>
        <td colSpan="1">Paraffin Wax H/F</td>
        <td colSpan="1">$ 5/8</td>
      </tr>
      <tr>
        <td colSpan="1">Jelly Feet Softener</td>
        <td colSpan="1">$ 5</td>
        <td colSpan="1">Almond/Ballerina/Stiletto Shape Nails</td>
        <td colSpan="1">$ 5</td>
      </tr>
    </tbody>
  </Table>
);


// export const manicure = [
//     {
//       id: 0,
//       name: "Regular Mani No Polish",
//       price: "$ 12",
//     },
//     {
//       id: 1,
//       name: "French Manicure",
//       price: "$ 20",
//     },
//     {
//       id: 2,
//       name: "Gel Polish Manicure",
//       price: "$ 25",
//     },
//     {
//       id: 3,
//       name: "Gel Polish Manicure + Removal",
//       price: "$ 30",
//     },
//     {
//       id: 4,
//       name: "Gel Polish Manicure + Design",
//       price: "$ 35",
//     },
//     {
//       id: 5,
//       name: "Kids Manicure",
//       price: "$ 10",
//     },
//   ];