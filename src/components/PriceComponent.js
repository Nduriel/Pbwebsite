import React from 'react';
import { Table } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { tablePic } from './photos';

const textCenter = {
    textAlign: "center",
}

const tableBody = {
    color: "#9df5cc",
    fontWeight: "bold",
    textShadow: "2px 2px 2px #f1069f",
}

function PriceComponent(props) {
    return (
        <>
            <div id='bodyBox' style={{ marginTop: "30px" }} className="text-center">*Prices are subject to change*</div>
            <Table dark id="prices" style={{ fontFamily: 'Manrope', marginTop: "50px", marginBottom: "50px" }} size='md'
                responsive striped bordered hover
                variant="dark">
                <thead style={{ color: "pink", fontWeight: "bold" }}>
                    <tr style={{ textAlign: "center" }}>
                        <th><Image id="thumbnailPic" src={tablePic.tpic} thumbnail fluid />
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
                        <td style={textCenter}>$ 45</td>
                    </tr>
                    <tr>
                        <td style={tableBody}>Color Acrylic Full Set:</td>
                        <td style={textCenter}>$ 45</td>
                        <td style={textCenter}>$ 55</td>
                        <td style={textCenter}>$ 60</td>
                    </tr>
                    <tr>
                        <td colSpan="4" style={textCenter}>**For the best look, a Full Set is recommened. A Fill Set drilling is possible, but not recommened.**
                   </td>
                    </tr>
                    <tr>
                        <td style={{
                            color: "violet", fontWeight: "bold",
                            textShadow: "2px 2px 2px #f1069f"
                        }}>Add-Ons:</td>
                        <td style={{ textAlign: "center" }}>Jeweled: $4 (2 Fingers)<br />  Encapsulated Design: $3 (2 Fingers)</td>
                        <td style={{ textAlign: "center" }}>Full 'Blinged' out nail: $7</td>
                        <td style={{ textAlign: "center" }}>Nail Soak $10</td>
                    </tr>
                    <tr>
                        <td style={{
                            color: "violet", fontWeight: "bold",
                            textShadow: "2px 2px 2px #f1069f"
                        }}>Toe Color Change:</td>
                        <td colSpan="3" style={{ textAlign: "center" }}>$10 for Gel</td>
                    </tr>
                    <tr>
                        <td style={{
                            color: "violet", fontWeight: "bold",
                            textShadow: "2px 2px 2px #f1069f"
                        }}>Extra Drilling:</td>
                        <td colSpan="3" style={{ textAlign: "center" }}>$5 for each hand</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default PriceComponent;

