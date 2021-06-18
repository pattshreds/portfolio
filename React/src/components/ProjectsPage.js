import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import '../styles/projectsStyles.css';

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div id='projPageContainer'>
                <div className='projectContainer'>
                    <h1>Projekt</h1>
                </div>
                <div className='projectContainer'>
                    <h1>Projekt</h1>
                </div>
                <div className='projectContainer'>
                    <h1>Projekt</h1>
                </div>
                <div className='projectContainer'>
                    <h1>Projekt</h1>
                </div>
                <div className='projectContainer'>
                    <h1>Projekt</h1>
                </div>
                <div className='projectContainer'>
                    <h1>Projekt</h1>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
