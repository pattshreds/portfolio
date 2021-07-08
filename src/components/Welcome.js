import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/welcomeStyles.css';

const Welcome = () => {
    return (
        <>
            <Parallax bgImage='parallax2.jpeg' strength='500'>
                <div id='parallax1'>
                    <p id='name'>Patrick McGuigan</p>
                    <p id='subhead'>Software Engineer</p>
                    <img id='arrow' src='arrow.png' alt='arrow'></img>
                </div>
            </Parallax>
        </>
    );
};

export default Welcome;
