import React from 'react';
import '../styles/footerStyles.css';

const Footer = () => {
    const noUnderline = {
        textDecoration: 'none',
    };
    return (
        <>
            <div id='footer'>
                <ul id='footerLinks'>
                    <a href='https://github.com/pattshreds' target='_blank'>
                        <li className='footerLi'>GitHub</li>
                    </a>
                    <a href='#' target='_blank'>
                        <li>Resume</li>
                    </a>
                    <a
                        href='https://www.codewars.com/users/Pattshreds'
                        target='_blank'
                    >
                        <li>CodeWars</li>
                    </a>
                </ul>
            </div>
        </>
    );
};

export default Footer;
