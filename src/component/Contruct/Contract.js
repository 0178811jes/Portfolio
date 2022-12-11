import React from 'react';
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Contract = () => {
    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault()
        

        emailjs
            .sendForm('service_jex286g', 'template_z6ou9ef', form.current, '-lDPQNuG6eujOlVZC')
            .then((result) => {
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                });
    
    e.target.reset();

}
return (
    <div className=''>
        <h2>Contruct Me</h2>
        <form ref={form} onSubmit={sendEmail} className=''>
            <label>Name</label>
            <br />
            <input type="text" name='name' />
            <br />
            <label>Email</label>
            <br />
            <input type="email" name='email' />
            <br />
            <label>Subject</label>
            <br />
            <input type="text" name='subject' />
            <br />
            <label>message</label>
            <br />
            <textarea name='message' rows='4' />
            <br />

            <input type="submit" value="Send" className='btn btn-primary' />
        </form>
        <hr className=''/>
            <Link to='/' className='btn btn-primary mt-5 mb-5 border border-2 ps-5 text-white'>Back to Home <HiArrowRight></HiArrowRight></Link>

    </div>

);
};

export default Contract;