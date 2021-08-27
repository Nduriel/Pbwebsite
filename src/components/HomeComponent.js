import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { FadeTransform } from "react-animation-components";
import { carouselPic, jumbotronPic } from "./photos";
import {
  Col,
  Row,
  Container,
  Jumbotron,
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
    <Jumbotron fluid>
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
                exitTransform: "translateX(-150px)",
              }}
            >
              <Image
                id="bodydivpic"
                className="text-center"
                rounded
                src={jumbotronPic.logo}
                alt="PolishedCosmetics logo"
                fluid
              />
            </FadeTransform>
            <FadeTransform
              in
              transformProps={{
                enterTransform: "translateX(0px)",
                exitTransform: "translateX(150px)",
              }}
            >
              <div id="bodyBox">
                <p style={{ margin: "10px", fontStyle: "italic" }}>
                  {/* <span
                    style={{
                      textShadow: "2px 2px 2px #c64b7b",
                      color: "white",
                    }}
                  >
                    PolishedCosmetics&nbsp;
                  </span>
                  <sub>
                    <i
                      className="fa fa-copyright"
                      aria-hidden="true"
                      style={{ fontSize: "13px", color: "purple" }}
                    />
                  </sub>{" "} */}
                  We are located in the Executive Offices. Our Suite is located
                  3 minutes away from City Center in Newport News. <br />
                  739 Thimble Shoals Blvd, STE 1004 <br />
                  Newport News, VA 233606 <br />
                </p>
                <p style={{ margin: "10px" }}>
                  <span
                    style={{
                      textShadow: "2px 2px 2px #c64b7b",
                      color: "white",
                    }}
                  >
                    * By Appointment Only *
                    <br />
                    <i>
                      Due to the Coronavirus Pandemic, masks are *required*
                      every
                    </i>
                    visit.
                    <br /> No Exceptions! <br />
                  </span>
                </p>
              </div>
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
