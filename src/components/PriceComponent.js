import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { tablePic } from './photos';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
               
const textCenter = {
    textAlign: "center",
}

const tableBody = {
    color: "#9df5cc",
    fontWeight: "bold",
    textShadow: "2px 2px 2px #f1069f",
}

     function PriceComponent (props) {
        const Breads = (props) => {
            return (
              <div >
                <Breadcrumb id="breadsdiv" tag="nav" listTag="div">
                  <BreadcrumbItem tag="a" href="/home">Home</BreadcrumbItem>
                  <BreadcrumbItem active >Bootstrap</BreadcrumbItem>
                </Breadcrumb>
              </div>
            );
          };
         return(
             <>
             <Breads/>
            <Table id="prices" style={{fontFamily: 'Manrope',  marginTop: "50px", marginBottom: "50px"}} size='md'
            responsive striped bordered hover
            variant="dark">
            <thead style={{ color: "pink", fontWeight: "bold" }}>
                <tr style={{ textAlign: "center" }}>
                    <th><Image id="thumbnailPic" src={tablePic.tpic} thumbnail fluid/>
                    <br />Type of Set</th>
                    <th><Image id="thumbnailPic" src={tablePic.shortNails} thumbnail fluid />
                    <br />Short Nails</th>
                    <th><Image id="thumbnailPic" src={tablePic.medNails} thumbnail fluid />
                    <br />Med Nails </th>
                    <th><Image id="thumbnailPic" src={tablePic.longNails} thumbnail fluid />
                    <br />Longs Nails</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={tableBody}>Acrylic Full Set:</td>
                    <td style={textCenter}>$ 35</td>
                    <td style={textCenter}>$ 45</td>
                    <td style={textCenter}>$ 50</td>
                </tr>
                <tr>
                    <td style={tableBody}>Acrylic Fill:</td>
                    <td style={textCenter}>$ 30</td>
                    <td style={textCenter}>$ 35</td>
                    <td style={textCenter}>$ 40</td>
                </tr>
                <tr>
                    <td style={tableBody}>Ombre Full Set:</td>
                    <td style={textCenter}>$ 40</td>
                    <td style={textCenter}>$ 55</td>
                    <td style={textCenter}>$ 55</td>
                </tr>
                <tr>
                    <td style={tableBody}>Ombre Fill:</td>
                    <td style={textCenter}>$ 35</td>
                    <td style={textCenter}>$ 40</td>
                    <td style={textCenter}>$ 40</td>
                </tr>
                <tr>
                    <td style={tableBody}>Color Acrylic Full Set:</td>
                    <td colSpan="3" style={{ textAlign: "center" }}>
                    **Nails need to be soaked off for an additional $ 5 (Full Set: $7)**
                    
                    </td>
                </tr>
                <tr>
                    <td style={{ color: "violet", fontWeight: "bold", 
                    textShadow: "2px 2px 2px #f1069f" }}>Add-Ons:</td>
                    <td style={{ textAlign: "center" }}>* Jewel on 2 Fingers: $4 *</td>
                    <td style={{ textAlign: "center" }}>* Full Blinged out nail: $7 *</td>
                    <td style={{ textAlign: "center" }}>* Encapsulated Design: $3 (2 Fingers)  *</td>
                </tr>
                <tr>
                    <td style={{ color: "violet", fontWeight: "bold",
                        textShadow: "2px 2px 2px #f1069f" }}>Toe Color Change:</td>
                    <td colSpan="3" style={{ textAlign: "center" }}>$10 for Gel; $7 for regular</td>
                </tr>
            </tbody>
            </Table>
            </>
            );
         }
                
export default PriceComponent;

            