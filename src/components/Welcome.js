import React from 'react';
import { Parallax } from 'react-parallax';
import '../styles/welcomeStyles.css';
import HomePage from './HomePage.js';
import ProjectsPage from './ProjectsPage.js';

const Welcome = () => {
    return (
        <>
            <Parallax bgImage='parallax5.jpg' strength='800'>
                <div id='parallax1'>
                    <p id='name'>Patrick McGuigan</p>
                    <p id='subhead'>Software Engineer</p>
                    {/* <img id='arrow' src='arrow.png' alt='arrow'></img> */}
                    <div id='btns'>
                        <a href='#homeContainer' id='letsGoLink'>
                            Let's go!
                        </a>
                    </div>
                </div>
                <HomePage />
                <ProjectsPage />
            </Parallax>
        </>
    );
};

export default Welcome;
