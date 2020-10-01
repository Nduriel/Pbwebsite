import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavbarComponent from "./NavBarComponent";
import HomePage from "./HomeComponent";
import PriceComponent from "./PriceComponent";
import AboutMia from './AboutMia';
import FooterComponent from "./FooterComponent";
import Specials from "./Specials";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainComponent() {
  const Home = () => <HomePage />;

  const Prices = () => <PriceComponent />;

  const About = () => <AboutMia />;

  return (
    <div>
      <NavbarComponent />
      <ToastContainer autoClose={3000} hideProgressBar />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/prices" component={Prices} />
            <Route path="/about" component={About} />
            <Route path="/specials" component={Specials} />
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
