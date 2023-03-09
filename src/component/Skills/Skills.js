import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from 'react-on-screen';
import colorSharp from '../../assest/img/color-sharp-img.png';
import './Skills.css'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <h2>Skills</h2>

                                </div>}
                        </TrackVisibility>
                        <div className="skill-bx">
                           
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <h3>98%</h3>
                                    
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    
                                    <h3>95%</h3>
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <h3>86%</h3>
                                    
                                    <h5>Web Design</h5>
                                </div>
                                <div className="item">
                                    <h3>90%</h3>
                                    
                                    <h5>Logo Design</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
      )

};

export default Skills;