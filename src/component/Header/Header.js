import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";

const Header = () => {
    return (
        <div>
            <h2>My Projects</h2>
            <div className="m-5 border border-5 text-success">
                <h2>Name: Softwer Service Center</h2>
                <p>Technology: React.js, tailwind css, DaisyUl, mongoDB, Express.js, Node.js ..........</p>
                <p>Features-
                    Depl  oy Firebase Authentication System
                    Implement Private Route
                    Node.js and Express.js used for server side and client side used as
                    MongoDB Database.</p>
                <Link to='/detail'><button className="btn btn-primary">Details</button></Link>
            </div>
            <div className="m-5 border border-5 text-success">
                <h2>Name:Resell Waching TV</h2>
                <p>Technology: React.js, tailwind css, DaisyUl, mongoDB, Express.js, Node.js ..........</p>
                <p>Features-
                    Depl  oy Firebase Authentication System
                    Implement Private Route
                    Node.js and Express.js used for server side and client side used as
                    MongoDB Database.</p>
                    <Link to='/detail'><button className="btn btn-primary">Details</button></Link>
            </div>
            <div className="m-5 border border-5 text-success">
                <h2>Name: Genious Car</h2>
                <p>Technology: React.js, tailwind css, DaisyUl, mongoDB, Express.js, Node.js ..........</p>
                <p>Features-
                    Depl  oy Firebase Authentication System
                    Implement Private Route
                    Node.js and Express.js used for server side and client side used as
                    MongoDB Database.</p>
                    <Link to='/detail'><button className="btn btn-primary">Details</button></Link>
            </div>
            <hr className=''/>
            <Link to='/' className='btn btn-primary mt-5 mb-5 border border-2 ps-5 text-white'>Back to Home <HiArrowRight></HiArrowRight></Link>

        </div>
        
    );
};

export default Header;