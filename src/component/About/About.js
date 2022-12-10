import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1 className="m-5 pe-5">About Me</h1>
            <div className="d-flex justify-content-center align-items-center">
                <div className="me-5 pe-5">
                    <h1 className='text-danger'>I am Jesmin Ara</h1>
                    <h3 className='text-success'>Web Developer</h3>
                    <h5>ADDRESS:</h5>
                    <p>Location: Dhaka-Bangladesh.</p>
                    <p>Permanent Address:Rajshahi-Bangladesh</p>
                    <p>Phone: +8801788118653</p>
                    <p>Email: <Link to='/contruct'>jesminara8653@gmail.com</Link></p>

                </div>



            </div>
        </div>
    );
};

export default About;