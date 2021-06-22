import React from 'react';
import '../styles/footerStyles.css';

const Footer = () => {
    return (
        <>
            <div id='footer'>
                <ul id='footerLinks'>
                    <li className='footerLi'>GitHub</li>
                    <li>Resume</li>
                    <li>CodeWars</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    );
};

export default Footer;
