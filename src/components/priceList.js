import React from "react";
import { Table } from "reactstrap";

export const fullSets = [
  {
    id: 0,
    name: "Short Nails",
    price: "$ 35",
  },
  {
    id: 1,
    name: "Medium Short Nails",
    price: "$ 40",
  },
  {
    id: 2,
    name: "Medium Long Nails",
    price: "$ 45",
  },
  {
    id: 3,
    name: "Long Nails",
    price: "$ 50",
  },
  {
    id: 4,
    name: "XL Nails",
    price: "$ 55",
  },
  {
    id: 5,
    name: "Color Acrylic",
    price: "+$ 10 to length",
  },
  {
    id: 6,
    name: "Ombre Acrylic",
    price: "+$ 10 to length",
  },
];

export const fills = [
  {
    id: 0,
    name: "Short Nails",
    price: "$ 30",
  },
  {
    id: 1,
    name: "Medium Short Nails",
    price: "$ 35",
  },
  {
    id: 2,
    name: "Medium Long Nails",
    price: "$ 40",
  },
  {
    id: 3,
    name: "Long Nails",
    price: "$ 45",
  },
  {
    id: 4,
    name: "XL Nails",
    price: "$ 50",
  },
  {
    id: 5,
    name: "Color Acrylic Fill",
    price: "+$ 5 to length",
  },
  {
    id: 6,
    name: "Ombre Acrylic Fill",
    price: "+$ 5 to length",
  },
  {
    id: 7,
    name: "Color Acrylic Change (Extra Drilling)",
    price: "+$ 10",
  },
];

// export const addOns = [
//   {
//     id: 0,
//     name: "Soak-Off Gel Polish",
//     price: "$ 5",
//   },
//   {
//     id: 1,
//     name: "Soak-Off Nails (60 minutes with Full Set)",
//     price: "$ 10",
//   },
//   {
//     id: 2,
//     name: "Soak Off (60 minutes)",
//     price: "$ 20",
//   },
//   {
//     id: 3,
//     name: "French Tips/Half Gel Nail Design",
//     price: "$ 5",
//   },
//   {
//     id: 4,
//     name: "Total 2/4 Designs",
//     price: "$ 5/10",
//   },
//   {
//     id: 5,
//     name: "All Nail Designs(10)",
//     price: "$ 15",
//   },
//   {
//     id: 6,
//     name: "Jewel Designs 2/4",
//     price: "$ 4/8",
//   },
//   {
//     id: 7,
//     name: "Full Blinged Out Nail",
//     price: "$ 6",
//   },
//   {
//     id: 8,
//     name: "All-Blinged-Out Nails",
//     price: "$ 75",
//   },
//   {
//     id: 9,
//     name: "Acrylic on 2 Big Toes",
//     price: "$ 10",
//   },
//   {
//     id: 9,
//     name: "Encapsulated Nail (2/4)",
//     price: "$ 3/6",
//   },
//   {
//     id: 10,
//     name: "Encapsulated Nails (10)",
//     price: "$ 15",
//   },
//   {
//     id: 11,
//     name: "Acrylic Fill-In 2 Big Toes",
//     price: "$ 6",
//   },
//   {
//     id: 12,
//     name: "Paraffin Wax H/F",
//     price: "$ 5/8",
//   },
//   {
//     id: 13,
//     name: "Jelly Feet Softener",
//     price: "$ 5",
//   },
//   {
//     id: 14,
//     name: "Almond/Ballerina/Stiletto Shape Nails",
//     price: "$ 5",
//   },
// ];

export const manicure = [
  {
    id: 0,
    name: "Regular Mani No Polish",
    price: "$ 12",
  },
  {
    id: 1,
    name: "French Manicure",
    price: "$ 20",
  },
  {
    id: 2,
    name: "Gel Polish Manicure",
    price: "$ 25",
  },
  {
    id: 3,
    name: "Gel Polish Manicure + Removal",
    price: "$ 30",
  },
  {
    id: 4,
    name: "Gel Polish Manicure + Design",
    price: "$ 35",
  },
  {
    id: 5,
    name: "Kids Manicure",
    price: "$ 10",
  },
];

export const pedicure = [
  {
    id: 0,
    name: "Regular Pedicure No Polish",
    price: "$ 20",
  },
  {
    id: 1,
    name: "Regular Polish Pedicure",
    price: "$ 25",
  },
  {
    id: 2,
    name: "French Pedicure",
    price: "$ 30",
  },
  {
    id: 3,
    name: "Gel Polish Pedicure",
    price: "$ 35",
  },
  {
    id: 4,
    name: "Gel Polish Pedicure + Removal",
    price: "$ 40",
  },
  {
    id: 5,
    name: "Gel Polish Pedicure + Design",
    price: "$ 45",
  },
  {
    id: 6,
    name: "Spa Pedicure + Gel Polish",
    price: "$ 50",
  },
  {
    id: 7,
    name: "Kids Pedicure",
    price: "$ 15",
  },
];

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
        <td colSpan="1" id="rowTitle">Soak off Gel Polish</td>
        <td colSpan="1">$ 5</td>
        <td colSpan="1" id="rowTitle">Soak off Nail (60 minutes w/ Full Set)</td>
        <td colSpan="1">$ 10</td>
      </tr>
      <tr>
        <td colSpan="1" id="rowTitle">Soak Off (60 minutes)</td>
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
