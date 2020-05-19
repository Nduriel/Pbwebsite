import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';

const footerFont = {
    textShadow: "2px 2px 2px #f1069f",
    color: "#9df5cc",
    fontSize: "16px",
    alignContent: "flex-end"
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer" style={footerFont}>
                <Container fluid>
                    <Row>
                        <Col lg={4} sm={4} xs={6} style={{ alignItems: "center", paddingTop: '6px' }} className="text-left" >
                       
                            <Button color="primary" onClick={this.props.call}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                              
                                    textShadow: "2px 2px 2px #f1069f"
                                }}>
                                Appointments</Button>
                        </Col>
                        <Col lg={4} sm={4}  xs={3}style={{ borderLeft: "solid 2px", borderRight: "solid 2px", textAlign: 'center', flexDirection: "row" }}>
                            <span id="goneText">Questions? Send an Email: </span>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                                <i id="socialIcon" className="fa fa-envelope-o" />
                            </a>
                        </Col>
                        <Col lg={4} sm={4}  xs={3} className="text-right" >
                            <span id="goneText">Acrylic Facts:</span>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.harpersbazaar.com/beauty/nails/a31123254/acrylic-nails-what-to-know/">
                                <i id="socialIcon" className="fa fa-book fa-lg" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
};

export default FooterComponent;

