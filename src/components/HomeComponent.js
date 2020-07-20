import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Col, Row, Container, Jumbotron } from "reactstrap";
import { carouselPic, jumbotronPic } from "./photos";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
//   const imageRef = useRef(null);

//   return (
//     <img
//       id="bodydivpic"
//       onMouseOver={() => {
//         imageRef.current.src = secondaryImg;
//       }}
//       onMouseOut={() => {
//         imageRef.current.src = primaryImg;
//       }}
//       src={primaryImg}
//       alt=""
//       ref={imageRef}
//     />
//   );
// };

// const ImageChangeOnMouseOver = () => {
//   return (
//     <div style={{ marginTop: "10px" }}>
//       <ImageToggleOnMouseOver
//         primaryImg={jumbotronPic.logo}
//         secondaryImg={jumbotronPic.logo2}
//         alt="MainLogo"
//       />
//     </div>
//   );
// };

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
            <div id="bodyBox" className="infoBox">
              <Image
                id="bodydivpic"
                style={{
                  width: "300px",
                  height: "300px",
                  margin: "10px",
                }}
                src={jumbotronPic.logo}
                alt="logopic"
                fluid
                roundedCircle
              />
              <br />
              <p>
                Polished By Mia
                <sub>
                  <i
                    className="fa fa-copyright"
                    aria-hidden="true"
                    style={{ fontSize: "13px" }}
                  />
                </sub>{" "}
                is an Acrylic service that caters to clients, exclusively, in
                the Newport News and surrounding Hampton Roads area (757). Check
                out the gallery here, or Facebook and Instagram for my work!
              </p>
            </div>
            <br />
            <div id="bodyBox2" className="infoBox">
              <p style={{ margin: "10px" }}>
                * By Appointment Only *.
                <br />
                Due to the Coronavirus Pandemic, masks are *required* every
                visit.
                <br /> No Exceptions! <br />
              </p>
            </div>
            <br />
          </Col>
          <Col
            lg={{ size: 5, offset: 1 }}
            md={{ offset: 1 }}
            sm={{ size: 10, offset: 1 }}
            xs={12}
          >
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default HomePage;
