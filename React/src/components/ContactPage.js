import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import '../styles/contactStyles.css';

const ContactPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div id='contactContainer'>
                <div id='formContainer'>
                    <form
                        id='contactForm'
                        action='https://getform.io/f/62c1d054-f280-40d1-8480-ac107f812dcb'
                        method='POST'
                    >
                        <input type='text' name='name' />
                        <input type='email' name='email' />
                        <input type='text' name='message' />
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
