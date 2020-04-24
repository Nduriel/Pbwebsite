import React, { Component } from 'react';


class FooterComponent extends Component {
    render() {
        return (
            <footer className="site-footer" style={{ textAlign: "center" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" style={{ color: "#9df5cc", fontSize: "20px" }}> <span style={{ textShadow: "2px 2px 2px #aaa" }}>Feel free to email me directly :</span>
                            <a role="button" className="btn btn-link" href="mailto:Mmnuoz214@gmail.com"><i className="fa fa-envelope-o" /> Mmnuoz214@gmail.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default FooterComponent;

