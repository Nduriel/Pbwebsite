import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';

const footerFont = {
    textShadow: "2px 2px 2px #f1069f",
    color: "#9df5cc",
    fontSize: "18px",
    flexDirection: "row",
    whiteSpace: "nowrap"
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer" style={footerFont}>
          
                    <Row>
                        <Col lg={4} sm={4} xs={5} style={{ paddingTop: '9px' }}
                            className="text-center">
                            <Button color="primary" onClick={this.props.call}
                                size="md"
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    textShadow: "2px 2px 2px #f1069f"
                                }}>
                                Appointments</Button>&nbsp;
                                <span id="goneText">Book Today!</span>{' '}
                        </Col>
                        <Col lg={4} sm={4} xs='auto'
                            style={{
                                borderRight: "solid 3px",
                                borderLeft: "solid 3px"
                            }} className="text-center">
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                                <i id="socialIcon" className="fa fa-envelope-o" />
                            </a>
                            <span id="goneText" >Questions?</span>
                        </Col>
                        <Col lg={4} sm={4} xs='auto' className="text-center">
                            <span id="goneText">Acrylic Facts:</span>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.harpersbazaar.com/beauty/nails/a31123254/acrylic-nails-what-to-know/">
                                <i id="socialIcon" className="fa fa-book fa-lg" />
                            </a>
                        </Col>
                    </Row>
        
            </footer>
        );
    }
};

export default FooterComponent;

