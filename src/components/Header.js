import React from 'react';
import '../styles/headerStyles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const noUnderline = {
        textDecoration: 'none',
    };
    return (
        <>
            <div id='headerTxt'>
                <Link style={noUnderline} to='/'>
                    <h2 id='header'>Patrick McGuigan</h2>
                </Link>
                <h5 id='subhead'>Full Stack Software Engineer</h5>
            </div>
        </>
    );
};

export default Header;
