import React from 'react';
import '../styles/footerStyles.css';

const Footer = () => {
    return (
        <>
            <div id='footer'>
                <ul id='footerLinks'>
                    <a
                        href='https://github.com/pattshreds'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <li className='footerLi'>GitHub</li>
                    </a>
                    <a
                        href='https://www.codewars.com/users/Pattshreds'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <li>CodeWars</li>
                    </a>
                </ul>
            </div>
        </>
    );
};

export default Footer;
