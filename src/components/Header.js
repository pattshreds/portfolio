import React from 'react';
import '../styles/headerStyles.css';

const Header = () => {
    const noUnderline = {
        textDecoration: 'none',
    };
    return (
        <>
            <h2 id='header'>Patrick McGuigan</h2>
            <h5 id='subhead'>Full Stack Software Engineer</h5>
        </>
    );
};

export default Header;
