import React from 'react';
import JumbotronModal from './JumbotronModal';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function MainComponent() {
    const HomePage = () => {
        return (
            <BodyComponent/>
        );
    }
    return (

        <div>
            <JumbotronModal />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Redirect to='/home' />
            </Switch>
            <FooterComponent />
        </div>
    );
}



export default MainComponent;