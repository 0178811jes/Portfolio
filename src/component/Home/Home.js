import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../../../src/image/model.png';
import { HiOutlineAcademicCap, HiUserCircle, HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className=" mt-5 gr">

            <h1 className="text-dark mb-3">WELCOME TO My PORTFOLIO</h1>
            

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>
                    <Navbar.Brand href="/">Jesmin Ara</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand className='ps-5 text-white' href="/header">Home</Navbar.Brand>
                            <Navbar.Brand className='ps-5 text-white' href="https://drive.google.com/file/d/1VCoxYts00XOoXlvucPyy25sfHkdw7Umm/view?usp=sharing">Download Resume</Navbar.Brand>
                            <Navbar.Brand className='ps-5 text-white' href="/blog">Blog</Navbar.Brand>
                            <Navbar.Brand href="/education"></Navbar.Brand>
                        </Nav>

                        <Nav>
                            <Navbar.Brand className='btn btn-outline border border-2 pe-5 text-white' href="/about">About Me  <HiUserCircle></HiUserCircle></Navbar.Brand>
                            <Navbar.Brand className='btn btn-outline border border-2 pe-3 text-white' eventKey={2} href="/contruct">
                                Contuct Me  <HiArrowRight></HiArrowRight>
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <div className="d-flex justify-content-center align-items-center bg-dark mt-3">
                <div className="me-5 pe-5">
                    <h1 className='text-white'>I am Jesmin Ara</h1>
                    <h3 className='text-info'>Web Developer</h3>
                    <div className='text-info'>
                        <h5>ADDRESS:</h5>
                        <h5>Location: Dhaka-Bangladesh.</h5>
                        <h6>Permanent Address:Rajshahi-Bangladesh</h6>
                        <p>Phone: +8801788118653</p>
                        <p>Email: jesminara8653@gmail.com</p>
                        <Link to='/education' className='btn btn-outline border border-2 ps-5 text-white'>Educational <HiArrowRight></HiArrowRight><HiOutlineAcademicCap></HiOutlineAcademicCap></Link>
                    </div>
                </div>
                <div className="ms-5 pt-5 ps-5">
                    <img src={img} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Home;