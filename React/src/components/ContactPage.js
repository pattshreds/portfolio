import React, { useState } from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import '../styles/contactStyles.css';
import axios from 'axios';

const ContactPage = () => {
    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = () => (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios
            .post(
                'https://getform.io/f/62c1d054-f280-40d1-8480-ac107f812dcb',
                formData,
                { headers: { Accept: 'application/json' } }
            )
            .then(function (response) {
                setFormStatus(true);
                setQuery({
                    name: '',
                    email: '',
                    message: '',
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <Header />
            <Nav />
            <div id='contactContainer'>
                <div id='formContainer'>
                    <form id='contactForm' onSubmit={handleSubmit}>
                        <label htmlFor='name' required>
                            Name
                        </label>
                        <input
                            id='name'
                            type='text'
                            name='name'
                            placeholder="What's your name?"
                            required='required'
                            value={query.name}
                            onChange={handleChange()}
                        />
                        <label htmlFor='email' required>
                            Email
                        </label>
                        <input
                            id='email'
                            type='text'
                            name='email'
                            placeholder='Enter your email address'
                            required='required'
                            value={query.email}
                            onChange={handleChange()}
                        />
                        <label htmlFor='message' required>
                            Message
                        </label>
                        <input
                            id='message'
                            type='text'
                            name='message'
                            placeholder='What can I do for you?'
                            value={query.message}
                            onChange={handleChange()}
                        />
                        <div className='form-group mt-3'>
                            {formStatus ? (
                                <div className='alert alert-success'>
                                    Your message has been sent.
                                </div>
                            ) : (
                                ''
                            )}
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
