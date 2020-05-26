import React, { Component } from 'react';
import BodyComponent from './BodyComponent';
import JumboComponent from './JumboComponent';
import FooterComponent from './FooterComponent';

class Directory extends Component {
    render() {
        return (
            <React.Fragment>
                <JumboComponent />
                <BodyComponent />
                <FooterComponent />
            </React.Fragment>
        );
    }
}

//Move the modal
export default Directory;