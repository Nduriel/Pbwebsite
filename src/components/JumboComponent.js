import React, { Component } from 'react';
import {
    Jumbotron, Col, Row, Container,
    Navbar, Nav, NavItem, Button
} from 'reactstrap';


import Image from 'react-bootstrap/Image';

const pics = {
    logo: require('../images/pbmlogo.jpg'),
    miaPic11: require('../images/miaPic11.jpg'),
    miaPic12: require('../images/miaPic12.jpg')
};

class JumboComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row style={{ textAlign: 'center', flexDirection: "row" }}>
                            {/* <Col style={{fontWeight: "bolder"}}>Polished By Mia</Col> */}
                            <Col xs={0} md={4} lg={4}>
                                <Image id="jpic" style={{ height: "200px" }}
                                    src={pics.miaPic12} alt="jpic1" roundedCircle />
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <Image id="jpic1" style={{ width: "250px", height: "270px" }}
                                    src={pics.logo} alt="logopic" roundedCircle />
                            </Col>
                            <Col xs={0} md={4} lg={4}>
                                <Image id="jpic" style={{ height: "200px" }}
                                    src={pics.miaPic11} alt="jpic2" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Navbar light expand="sm" sticky="top" style={{ textAlign: 'center'}}>
                            <Col lg={12} style={{
                                fontFamily: 'Courgette',
                                fontSize: "20px",
                                color: "#9df5cc",
                                textShadow: "2px 2px 2px #f1069f",
                            }}>
                                Polished By Mia offers quality Acryilics. Check out more social media for more work!
                            </Col>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default JumboComponent;