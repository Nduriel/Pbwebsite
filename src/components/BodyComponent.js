import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const mappic= require('../images/mappic.png');

class BodyComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 offset-lg-6 offset-sm-0" style={{textAlign: "center"}}>
                        <Card>
                            <Card.Header>Polished By Mia</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Each service takes around 2 hours to complete.  Services include Basic Fills $30 and Full sets $40.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Check out my 
                            <a role="button" className="btn btn-link btn-facebook" aria-hidden="true" href="http://facebook.com/polishedbymia/">Facebook</a> and 
                                <a role="button" className="btn btn-link btn-instagram" aria-hidden="true" href="http://instagram.com/polished.bymia/">Instagram</a>
                                 for more photos!</Card.Footer>
                        </Card>
                    </div>
                    <div style={{padding: "25px"}} className="col-lg-6 col-sm-12 offset-1 align-self-start">
                        <img src={mappic} height="auto" alt="map" width="65%"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyComponent;