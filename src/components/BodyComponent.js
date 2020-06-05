import React, { useState } from 'react';
import { Col, Row, Container, Jumbotron } from 'reactstrap';
import Image from 'react-bootstrap/Image';
// import Carousel from 'react-bootstrap/Carousel';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { carouselPic } from './photos';
import { jumbotronPic } from './photos';

function BodyComponent(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === carouselPic.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? carouselPic.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = carouselPic.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption className='capText' captionText={item.caption} />
            </CarouselItem>
        );
    });
    return (
        <Jumbotron fluid>
            <Container fluid>
                <Row >
                    <Col lg={6} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                        <div id="bodyBox">
                            <Image id="bodydivpic" style={{ width: "300px", height: "300px", margin: "10px" }}
                                src={jumbotronPic.logo2} alt="logopic" fluid roundedCircle /><br />
                            <p>Polished By Mia <sub><i className="fa fa-copyright" aria-hidden="true"
                                style={{ fontSize: "15px" }} /></sub>{' '}
                         is an Acrylic service that caters to clients, exclusively,
                        in the Newport News and surrounding Hampton Roads area (757).  Check out
                        the gallery here, or Facebook and Instagram for my work!</p>
                        </div>
                        <br />
                        <div id="bodyBox">
                            <p style={{ margin: "10px" }}>
                                * By Appointment Only *. <br />
                        Due to the Coronavirus Pandemic,
                        masks are *required* every visit. <br /> No Exceptions! <br />
                            </p>
                        </div>
                        <br />
                    </Col>
                    <Col lg={{ size: 5, offset: 1 }} md={{ offset: 1 }} sm={{ size: 10, offset: 1 }} xs={12} >
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                            <CarouselIndicators items={carouselPic} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </Col>
                </Row>
                {/* <Row>
                <Col lg={12} md={12} sm={12} style={{ paddingTop: "19px" }}>
                    <TableComponent />
                </Col>
            </Row> */}
            </Container>
        </Jumbotron>
    );
}
export default BodyComponent;