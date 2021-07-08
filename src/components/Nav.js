import React from 'react';
import '../styles/navStyles.css';

const Nav = () => {
    return (
        <>
            <nav>
                <img src='https://i.ibb.co/g6GkZRZ/logo.png' alt='logo' />
                <ul className='nav-links'>
                    <li className='link'>Home</li>
                    <li className='link'>Projects</li>
                    <li className='link'>Contact</li>
                    <li className='link'>Resume</li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
