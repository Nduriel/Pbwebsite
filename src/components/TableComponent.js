import React, {Component} from 'react';

import Table from 'react-bootstrap/Table';                
                
              export default TableComponent = () => {
                    return(
                        <Table style={{fontFamily: 'Manrope'}} size='md'
                         responsive striped bordered hover
                          variant="dark">
                            <thead style={{ color: "pink", fontWeight: "bold" }}>
                                <tr style={{ textAlign: "center" }}>
                                    <th><Image id="thumbnailPic" src={galpics.tpic} thumbnail fluid/>
                                    <br />Type of Set</th>
                                    <th><Image id="thumbnailPic" src={galpics.shortNails} thumbnail fluid />
                                    <br />Short Nails</th>
                                    <th><Image id="thumbnailPic" src={galpics.medNails} thumbnail fluid />
                                    <br />Med Nails </th>
                                    <th><Image id="thumbnailPic" src={galpics.longNails} thumbnail fluid />
                                    <br />Longs Nails</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Acrylic Full Set:</td>
                                    <td style={textCenter}>$ 35</td>
                                    <td style={textCenter}>$ 45</td>
                                    <td style={textCenter}>$ 50</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Acrylic Fill:</td>
                                    <td style={textCenter}>$ 30</td>
                                    <td style={textCenter}>$ 35</td>
                                    <td style={textCenter}>$ 40</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Ombre Full Set:</td>
                                    <td style={textCenter}>$ 40</td>
                                    <td style={textCenter}>$ 55</td>
                                    <td style={textCenter}>$ 55</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Ombre Fill:</td>
                                    <td style={textCenter}>$ 35</td>
                                    <td style={textCenter}>$ 40</td>
                                    <td style={textCenter}>$ 40</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "#9df5cc", fontWeight: "bold" }}>Color Acrylic Full Set:</td>
                                    <td colSpan="3" style={{ textAlign: "center" }}>
                                    **Nails need to be soaked off for an additional $ 5 (Full Set: $7)**
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold" }}>Add-Ons:</td>
                                    <td style={{ textAlign: "center" }}>* Jewel on 2 Fingers: $4 *</td>
                                    <td style={{ textAlign: "center" }}>* Full Blinged out nail: $7 *</td>
                                    <td style={{ textAlign: "center" }}>* Encapsulated Design: $3 (2 Fingers)  *</td>
                                </tr>
                                <tr>
                                    <td style={{ color: "violet", fontWeight: "bold" }}>Toe Color Change:</td>
                                    <td colSpan="3" style={{ textAlign: "center" }}>$10 for Gel; $7 for regular</td>
                                </tr>
                            </tbody>
                        </Table>
                
                    );
                }

            