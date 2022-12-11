import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Blog = () => {
    return (
        <div>
            <h1 className="text-dark justify-content-center mt-5">Comming Soon ........</h1>
            <Link to='/' className='btn btn-primary mt-5 mb-5 border border-2 ps-5 text-white'>Back to Home <HiArrowRight></HiArrowRight></Link>
        </div>
    );
};

export default Blog;