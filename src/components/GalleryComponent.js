import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const miaPic1=require('../images/miaPic1.jpg');

function GalleryComponent() {
    return (
        <div className="container">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={miaPic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}





export default GalleryComponent;