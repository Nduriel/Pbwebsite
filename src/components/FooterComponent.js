import React, { Component } from 'react';

const footerStye = {
    textShadow: "2px 2px 2px #f1069f",
    color: "#9df5cc",
    fontSize: "16px",
    alignContent: "flex-end"
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer" style={footerStye}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-left" >
                            <span >
                                <sub>&copy;</sub> Polished By Mia<br />
                            </span>
                        </div>
                        <div className="col-6 text-right" style={footerStye}>
                            <span id="goneText" >
                                Questions? Send an email to:
                            </span>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                                <i id="socialIcon" className="fa fa-envelope-o" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default FooterComponent;

