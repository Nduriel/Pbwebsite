import React from "react";
import NavbarComponent from "./NavBarComponent";
import BodyComponent from "./BodyComponent";
import PriceComponent from "./PriceComponent";
import FooterComponent from "./FooterComponent";
// import NotFoundPage from "./NotFoundPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainComponent() {
  const HomePage = () => {
    return <BodyComponent />;
  };

  const Prices = () => {
    return <PriceComponent />;
  };

  return (
    <div>
      <NavbarComponent />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/prices" component={Prices} />
        <Redirect to="home" />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
