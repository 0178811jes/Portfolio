import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../../../src/image/model.png';



const Home = () => {
    return (
        <div className="container mt-5 gr">

            <h1 className="text-primary">WELCOME TO JESMIN's PORTFOLIO</h1>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>
                    <Navbar.Brand href="/">Jesmin Ara</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/header">Home</Nav.Link>
                            <Nav.Link href="https://drive.google.com/file/d/1VCoxYts00XOoXlvucPyy25sfHkdw7Umm/view?usp=sharing">Download Resume</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link eventKey={2} href="/contruct">
                                Contuct Me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="d-flex justify-content-center align-items-center">
                <div className="me-5 pe-5">
                    <h1 className='text-danger'>I am Jesmin Ara</h1>
                    <h3 className='text-success'>Web Developer</h3>
                    <h5>ADDRESS:</h5>
                    <p>Location: Dhaka-Bangladesh.</p>
                    <p>Permanent Address:Rajshahi-Bangladesh</p>
                    <p>Phone: +8801788118653</p> 
                    <p>Email: jesminara8653@gmail.com</p>
                    
                </div>
                <div className="ms-5 pt-5 ps-5">
                    <img src={img} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Home;