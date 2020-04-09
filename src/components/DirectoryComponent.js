import React, { Component } from 'react';
import Header from './HeaderComponent';
import  GalleryComponent  from'./GalleryComponent';



class Directory extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <GalleryComponent/>
            </React.Fragment>
        );
    }
}


export default Directory;