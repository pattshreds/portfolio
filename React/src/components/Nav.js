import React from 'react';
import './navStyles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav>
                <h3>Logo</h3>
                <ul className='nav-links'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/projects'>
                        <li>Projects</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
