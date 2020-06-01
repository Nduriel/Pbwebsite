import React from 'react';
import {
    Col, Row, Button
} from 'reactstrap';


const footerFont = {
    textShadow: "2px 2px 2px #f1069f",
    color: "#9df5cc",
    fontSize: "18px",
    flexDirection: "row",
    whiteSpace: "nowrap"
}


function FooterComponent(props) {
    return (
        <React.Fragment>
            {/* Footer */}
            <footer className="site-footer" style={footerFont}>
                <Row>
                    <Col lg={4} md={3} sm={3} id="goneText" className="text-center" style={{ paddingTop: "15px", borderRight: "3px double #9df5cc", }}>
                        <span><i className="fa fa-copyright" aria-hidden="true" />PolishedByMia</span>
                    </Col>
                    <Col lg={4} md={5} sm={5} id="centerText">
                        <span id="goneText" >Questions?</span>
                        <a role="button" className="btn btn-link" target="_blank"
                            rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                            <i id="socialIcon" className="fa fa-envelope-o" />
                        </a>
                        <Button color="primary" onClick={props.call}
                            size="lg"
                            style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textShadow: "2px 2px 2px #f1069f",
                            }}>
                            Appointments
                        </Button>&nbsp;
                            <a role="button" className="btn btn-link" target="_blank"
                            rel="noopener noreferrer" href="tel:+17579127833">
                            <i role="button" id="socialIcon" className="fa fa-phone fa-lg" />
                        </a>
                        <span id="goneText">
                            Book Today!
                        </span>
                    </Col>
                    <Col lg={4} md={4} sm={2} id="goneText" className="text-center" style={{ paddingTop: "15px", borderLeft: "3px double #9df5cc" }}>
                        "Modern touch, Beautiful feel"
                    </Col>
                </Row>
            </footer>
            {/* Footer */}
            {/* Modal */}

        </React.Fragment>
    );
}

export default FooterComponent;

