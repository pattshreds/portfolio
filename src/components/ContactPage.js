import React, { useState } from 'react';
import '../styles/contactStyles.css';
import axios from 'axios';

const ContactPage = () => {
    const [thanks, setThanks] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const { name, email, message } = formData;
    const post = async (formData) => {
        const res = await axios.post(
            'https://getform.io/f/62c1d054-f280-40d1-8480-ac107f812dcb',
            formData
        );
        return res.data;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSend = (formData) => {
        post(formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        setThanks(true);
    };
    return (
        <>
            <div id='contactContainer'>
                <div id='formContainer'>
                    <p className='contactTitle'>
                        Reach me at Patrick.McGuigan5@gmail.com
                    </p>
                    <p className='contactTitle'>
                        or submit the form below and I will get back to you
                        ASAP!
                    </p>
                    <form
                        id='contactForm'
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend(formData);
                        }}
                    >
                        <input
                            required
                            onChange={handleChange}
                            name='name'
                            placeholder='Name'
                            type='text'
                            value={name}
                        />
                        <br />
                        <input
                            required
                            onChange={handleChange}
                            name='email'
                            placeholder='Email'
                            type='text'
                            value={email}
                        />
                        <br />
                        <textarea
                            required
                            id='message'
                            onChange={handleChange}
                            name='message'
                            cols='68'
                            rows='20'
                            value={message}
                            placeholder="What's up"
                        ></textarea>{' '}
                        <br />
                        <button id='send'>Send</button>
                    </form>
                    {thanks && (
                        <p>
                            Thank you for reaching out! I will get back to you
                            soon
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ContactPage;
