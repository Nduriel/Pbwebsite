import React, { Component } from 'react';
import BodyComponent from './BodyComponent';
import JumboComponent from './JumboComponent';
import ModalComponent from './ModalComponent';


class Directory extends Component {
    render() {
        return (
            <React.Fragment>
                <JumboComponent />
                <BodyComponent />
                <ModalComponent />
            </React.Fragment>
        );
    }
}

//Move the modal
export default Directory;