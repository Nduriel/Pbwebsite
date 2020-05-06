import React, { Component } from 'react';
import {
    Jumbotron, Col, Row, Container
} from 'reactstrap';
import Image from 'react-bootstrap/Image';

const pics = {
    logo: require('../images/pbmimg13.png'),
    miaPic11: require('../images/miaPic11.jpg'),
    miaPic12: require('../images/miaPic12.jpg')
};

class JumboComponent extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container fluid>
                    <Row style={{ textAlign: 'center', fontSize: "22px" }}>
                        <Col xs={4} md={4} lg={4}>
                            <Image id="jpic" style={{ height: "200px" }}
                                src={pics.miaPic12} alt="jpic1" roundedCircle />
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <Image style={{ height: "200px", textAlign: "center" }}
                                src={pics.logo} alt="logopic" />
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <Image id="jpic" style={{ height: "200px" }}
                                src={pics.miaPic11} alt="jpic2" roundedCircle />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}


export default JumboComponent;