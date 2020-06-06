import React from 'react';
import JumbotronModal from './JumbotronModal';
import BodyComponent from './BodyComponent';
import PriceComponent from './PriceComponent';
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function MainComponent() {
    const HomePage = () => {
        return (
            <BodyComponent/>
        );
    }

    const Prices = () => {
        return (
            <PriceComponent />
        );
    }

    return (

        <div>
            <JumbotronModal />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/prices' component={Prices} />
                <Redirect to='/home' />
            </Switch>
            <FooterComponent />
        </div>
    );
}



export default MainComponent;