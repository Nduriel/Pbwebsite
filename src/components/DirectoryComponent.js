import React from 'react';
import BodyComponent from './BodyComponent';
import JumboComponent from './JumboComponent';
import ModalFooterComponent from './ModalFooterComponent';

function Directory()  {
        return (
            <>
                <JumboComponent />
                <BodyComponent />
                <ModalFooterComponent/>
            </>
        );
    }


//Move the modal
export default Directory;