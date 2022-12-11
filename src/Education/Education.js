import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <div className=" mt-5">
            <h1 className="text-dark justify-content-center">My Educational Qualification....</h1>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                    <h3>Secondary School Certificate</h3> <br />
                    <h3>Belghoria High School</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                    <h3>Art's Group, SSC batch of 2009 . <br />
                    I always want to learn and emliment newer thing. <br />
                    I was a very quick learner.
                    </h3>    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h3>Higher Secondary School Certificate</h3>
                        <h3>Durgapur Women's College, <br />
                        Durgapur, Rajshahi
                        </h3>

                    </Accordion.Header>
                    <Accordion.Body>
                        <h2>Art's Group, HSC batch of 2011.</h2>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h3>Graduation And Post Graduation</h3> <br />
                        <h3>RajShahi College, Rajshahi</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                    <h3>In this time I am interested codding. <br />
                     I wish, I am a frontend-based full-stact developer from Bangladesh. <br />
                     
                      </h3>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
            <Link to='/' className='btn btn-primary mt-5 mb-5 border border-2 ps-5 text-white'>Back to Home <HiArrowRight></HiArrowRight></Link>
        </div>
    );
};

export default Education;