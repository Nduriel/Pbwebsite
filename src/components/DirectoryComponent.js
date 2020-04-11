import React, { Component } from 'react';
import Header from './HeaderComponent';
import  GalleryComponent  from'./GalleryComponent';
import BodyComponent from './BodyComponent';


class Directory extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <GalleryComponent/>
                <BodyComponent/>
            </React.Fragment>
        );
    }
}


export default Directory;