import React from 'react';
import JumbotronModal from './JumbotronModal';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function MainComponent() {
    return (
        
        <div>
            <JumbotronModal />
            <Switch>
            <BodyComponent />
            </Switch>
            <FooterComponent />
        </div>
    );
}



export default MainComponent;