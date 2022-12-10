import React from 'react';

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
                <button className="btn btn-primary">Details</button>
            </div>
            <div className="m-5 border border-5 text-success">
                <h2>Name:Resell Waching TV</h2>
                <p>Technology: React.js, tailwind css, DaisyUl, mongoDB, Express.js, Node.js ..........</p>
                <p>Features-
                    Depl  oy Firebase Authentication System
                    Implement Private Route
                    Node.js and Express.js used for server side and client side used as
                    MongoDB Database.</p>
                <button className="btn btn-primary">Details</button>
            </div>
            <div className="m-5 border border-5 text-success">
                <h2>Name: Genious Car</h2>
                <p>Technology: React.js, tailwind css, DaisyUl, mongoDB, Express.js, Node.js ..........</p>
                <p>Features-
                    Depl  oy Firebase Authentication System
                    Implement Private Route
                    Node.js and Express.js used for server side and client side used as
                    MongoDB Database.</p>
                <button className="btn btn-primary">Details</button>
            </div>
        </div>
    );
};

export default Header;