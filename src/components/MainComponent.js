import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavbarComponent from "./NavBarComponent";
import HomePage from "./HomeComponent";
import PriceComponent from "./PriceComponent";
import FooterComponent from "./FooterComponent";
import NotFoundPage from "./NotFoundPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainComponent() {
  const Home = () => <HomePage />;

  const Prices = () => <PriceComponent />;

  return (
    <div>
      <NavbarComponent />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/prices" component={Prices} />
        <Redirect to="/" />
        <Route component={NotFoundPage} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
