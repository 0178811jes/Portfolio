import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1 className=" text-dark m-5 pe-5">About Me</h1>
            <hr />
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

                <div className='align-items-center'>
                    <h2>I wish....</h2>
                    <h3>I'm a frontend-based full-stack developer from Bangladesh. <br />
                    I love wev development because I can showcase my creativity <br />
                    in this work. I want to see myself as a skild web developer <br /> with my hard work. <br />

                    </h3>
                </div>

            </div>
            <hr className=''/>
            <Link to='/' className='btn btn-primary mt-5 mb-5 border border-2 ps-5 text-white'>Back to Home <HiArrowRight></HiArrowRight></Link>

        </div>
    );
};

export default About;