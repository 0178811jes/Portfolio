import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorsharp from '../../assest/img/color-sharp-img.png'
import projImg1 from '../../assest/img/project-img2.jfif';
import projImg2 from '../../assest/img/project-img2.jfif';
import projImg3 from '../../assest/img/project-img2.jfif'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Project.css'

const Projects = () => {

    const projects = [

        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
    ]


    return (
        <section className="project" id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>

                                </div>}
                        </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    ></ProjectCard>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey='third'>Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp} alt="" />
        </section >
    )
};

export default Projects;