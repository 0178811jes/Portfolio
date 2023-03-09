import React, { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import {HiOutlineAcademicCap, HiArrowRight } from "react-icons/hi";

import nav from '../../assest/img/nav-icon3.webp';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Bannes.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    const [loopNam, setLoopNam] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNam % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNam(loopNam + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcometo my Portfolio</span>
                                    <h1>{`Hi I'm webdecoded `}<span className='wrap'>{text}</span></h1>

                                    <div className='text-info'>
                                        <h5>ADDRESS:</h5>
                                        <h5>Location: Dhaka-Bangladesh.</h5>
                                        <h6>Permanent Address:Rajshahi-Bangladesh</h6>
                                        <p>Phone: +8801788118653</p>
                                        <p>Email: jesminara8653@gmail.com</p>

                                        <Navbar.Brand className='btn btn-outline border border-2 p-1 ps-5 text-white me-3' eventKey={2} href="/contruct">
                                            Contuct Me  <HiArrowRight></HiArrowRight>
                                        </Navbar.Brand>
                                        
                                        <Link to='/education' className='btn btn-outline border border-2 ps-5 text-white'>Educational <HiArrowRight></HiArrowRight> <HiOutlineAcademicCap/></Link>
                                    </div>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={nav} alt="Header Img" />

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;