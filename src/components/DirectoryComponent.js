import React from 'react';
import BodyComponent from './BodyComponent';
import JumboComponent from './JumboComponent';
import ModalBodyComponent from './ModalBodyComponent';
import FooterComponent from './FooterComponent';

function Directory()  {
        return (
            <>
                <JumboComponent />
                <ModalBodyComponent/>
                <FooterComponent/>
            </>
        );
    }


//Move the modal
export default Directory;