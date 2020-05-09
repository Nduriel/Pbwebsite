import React, { Component } from 'react';


class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-left" style={{
                            textShadow: "2px 2px 2px #aaa",
                            color: "#9df5cc", fontSize: "16px",
                            flexDirection: "row",
                            textAlign: "left"
                        }}>
                            <span >
                                <sub>&copy;</sub> Polished By Mia<br />Hampton Roads(757) only!
                            </span>
                        </div>
                        <div className="col-6 text-right"
                            style={{
                                color: "#9df5cc", fontSize: "16px",
                                textShadow: "2px 2px 2px #aaa",
                                flexDirection: "row-reverse"
                            }}>
                            <span id="goneText" >
                                Questions? Send an email to:
                            </span>
                            <a role="button" className="btn btn-link" target="_blank"
                                rel="noopener noreferrer" href="mailto:Mmnuoz214@gmail.com">
                                <i className="fa fa-envelope-o" />
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
};

export default FooterComponent;

