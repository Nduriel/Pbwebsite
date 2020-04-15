import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import GalleryComponent from "./GalleryComponent";
import Tabs from 'react-bootstrap/Tabs'

const mappic = require('../images/mappic.png');
const bodypic1 = require('../images/BodCollage1.jpg');
const bodypic2 = require('../images/BodCollage2.jpg');
const bookappt = require('../images/bookappt.jpg');


class BodyComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12" style={{ height: "100%" }}>
                        <img src={bodypic1} fluid className="heightpic" alt="" />
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
                        <img src={bookappt} fluid style={{ width: "100%", height: "91%", paddingTop: "10px" }} alt="" />
                    </div>
                    <div className="row">
                        {/* <div className="col-lg-4 col-sm-12">
                            <Card className="cardnmap text-center">
                                <Card.Header style={{ backgroundColor: "#f1069f" }}>
                                    Polished by Mia is exclusively catering to clients in the 757 area! Call or book you appointment today!
                            </Card.Header>
                                <Card.Body>
                                    "I love doing nails! - Mia"
                            </Card.Body>
                                <Card.Img variant="bottom" src={mappic} />
                            </Card>
                        </div> */}
                
                        <div className="col-5 order-5">
                        <img src={bodypic2} fluid style={{width:"auto", height:"500px"}} />
                        </div>
                 
                    </div>
                </div>
            </div>
        );
    }
    
}
export default BodyComponent;