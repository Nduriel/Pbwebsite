import React, { Component } from 'react';
import Header from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
;

class Directory extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BodyComponent/>
                <FooterComponent/>
            </React.Fragment>
        );
    }
}


export default Directory;