import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { FadeTransform } from "react-animation-components";
import { Col, Row, Container, Jumbotron } from "reactstrap";
import { carouselPic, jumbotronPic } from "./photos";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carouselPic.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselPic.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carouselPic.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className="capText" captionText={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <Jumbotron fluid id="homepage">
      <Container fluid>
        <Row>
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={12}
            style={{
              textAlign: "center",
            }}
          >
            <FadeTransform
              in
              transformProps={{
                enterTransform: "translateX(0px)",
                exitTransform: "translateX(150px)",
              }}
            >
              <div id="bodyBox" className="infoBox">
                <Image
                  id="bodydivpic"
                  src={jumbotronPic.logo}
                  alt="Polished By Mia logo"
                  fluid
                  roundedCircle
                />
                <br />
                <p>
                  <span style={{ textShadow: "2px 2px 2px redorange" }}>
                    Polished By Mia&nbsp;
                  </span>
                  <sub>
                    <i
                      className="fa fa-copyright"
                      aria-hidden="true"
                      style={{ fontSize: "13px", color: "skyblue" }}
                    />
                  </sub>{" "}
                  is an Acrylic service that caters to clients, exclusively, in
                  the Newport News and surrounding Hampton Roads area (757).
                  Check out the gallery here, or Facebook and Instagram for my
                  work!
                </p>
              </div>
            </FadeTransform>
            <FadeTransform
              in
              transformProps={{
                enterTransform: "translateX(0px)",
                exitTransform: "translateX(-150px)",
              }}
            >
              <br />
              <div id="bodyBox2" className="infoBox">
                <p style={{ margin: "10px" }}>
                  * By Appointment Only *
                  <br />
                  <span style={{ textShadow: "2px 2px 2px green" }}>
                    Due to the Coronavirus Pandemic, masks are *required* every
                    visit.
                  </span>
                  <br /> No Exceptions! <br />
                </p>
              </div>
              <br />
            </FadeTransform>
          </Col>
          <Col
            lg={{ size: 5, offset: 1 }}
            md={{ offset: 1 }}
            sm={{ size: 10, offset: 1 }}
            xs={12}
          >
            <FadeTransform
              in
              transformProps={{
                enterTransform: "translateY(0px)",
                exitTransform: "translateY(150px)",
              }}
            >
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={carouselPic}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </FadeTransform>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default HomePage;
