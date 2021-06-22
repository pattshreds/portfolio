import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import '../styles/resumeStyles.css';

const Resume = () => {
    return (
        <>
            <Header />
            <Nav />
            <div id='resumeContainer'>
                <h1>Resume</h1>
                <div id='resume'>
                    <iframe src='./Resume.pdf'></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Resume;
