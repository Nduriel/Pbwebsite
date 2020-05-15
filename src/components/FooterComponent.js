import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';

const footerFont = {
    textShadow: "2px 2px 2px #f1069f",
    color: "#9df5cc",
    fontSize: "16px",
    alignContent: "flex-end",
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer" style={footerFont}>
                <Container fluid>
                    <Row>
                        <Col lg={4} sm={2} style={{ paddingTop: '6px' }} className="text-left" >
                            Book an Appointment: {'  '}
                            <Button color="primary" onClick={this.props.call}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    fontStyle: "italic",
                                    textShadow: "2px 2px 2px #f1069f"
                                }}>
                                Appointments</Button>
                        </Col>
                        <Col lg={4} sm={2} style={{ borderLeft: "solid 2px", borderRight: "solid 2px", textAlign: 'center', flexDirection: "row" }}>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noreferrer noopener" href="tel:+17579127833">
                                <i id="socialIcon" className="fa fa-phone fa-lg" />
                            </a>

                            <a role="button" className="btn btn-link btn-instagram" target="_blank"
                                rel="noreferrer noopener" aria-hidden="true"
                                href="http://instagram.com/polished.bymia/">
                                <i id="socialIcon" className="fa fa-instagram fa-lg" />
                            </a>

                            <a role="button" className="btn btn-link btn-facebook" target="_blank"
                                rel="noreferrer noopener" aria-hidden="true"
                                href="http://facebook.com/polishedbymia/">
                                <i id="socialIcon" className="fa fa-facebook fa-lg" />
                            </a>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                                <i id="socialIcon" className="fa fa-envelope-o" />
                            </a>
                        </Col>
                        <Col lg={4} sm={2} className="text-right" >
                            <span id="goneText" >
                                Questions? Send an email to:
                            </span>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                                <i id="socialIcon" className="fa fa-envelope-o" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
};

export default FooterComponent;

