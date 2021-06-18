import React from 'react';
import '../styles/navStyles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const noUnderline = {
        textDecoration: 'none',
    };
    return (
        <>
            <nav>
                <img src='https://i.ibb.co/g6GkZRZ/logo.png' alt='logo' />
                <ul className='nav-links'>
                    <Link style={noUnderline} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={noUnderline} to='/projects'>
                        <li>Projects</li>
                    </Link>
                    <Link style={noUnderline} to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link style={noUnderline} to='/resume'>
                        <li>Resume</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
