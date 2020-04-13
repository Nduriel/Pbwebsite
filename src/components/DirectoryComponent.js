import React, { Component } from 'react';
import Header from './HeaderComponent';
import BodyComponent from './BodyComponent';


class Directory extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BodyComponent/>
            </React.Fragment>
        );
    }
}


export default Directory;