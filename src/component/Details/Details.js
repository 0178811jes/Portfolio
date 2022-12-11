import React from 'react';
import { Card } from 'react-bootstrap';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

import img1 from '../../assest/Saved Pictures/Screenshot_1.png'
import img2 from '../../assest/Saved Pictures/Screenshot_2.png'
import img3 from '../../assest/Saved Pictures/Screenshot_3.png'
import img4 from '../../assest/Saved Pictures/Screenshot_4.png'

const Details = () => {
    return (
        <div>
            <h1>Project Details is here</h1>
            <div>
                <Card>
                    <img src={img1} alt="" />
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <img src={img2} alt="" />
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <img src={img3} alt="" />
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <img src={img4} alt="" />
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
            <hr />
            <Link to='/' className='btn btn-primary mt-5 mb-5 border border-2 ps-5 text-white'>Back to Home <HiArrowRight></HiArrowRight></Link>
        
        </div>
    );
};

export default Details;