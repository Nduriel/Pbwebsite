import React, { Component } from 'react';


class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-5 text-left">
                            <span style={{
                                textShadow: "2px 2px 2px #aaa",
                                color: "#9df5cc", fontSize: "16px"
                            }}>
                                <sub>&copy;</sub> Polished By Mia<br />Hampton Roads(757) only!
                            </span>
                        </div>
                        <div className="col-7 text-right"
                            style={{ color: "#9df5cc", fontSize: "16px" }}>
                            <span style={{ textShadow: "2px 2px 2px #aaa" }}>
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

