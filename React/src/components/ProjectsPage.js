import React from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import '../styles/projectsStyles.css';
// Learn CSS Modules

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className='projectContainer'>
                <div className='project'>
                    <h1>Pokesearch</h1>
                </div>
            </div>
            <div className='projectContainer'>
                <div className='project'>
                    <h1>Moodset</h1>
                </div>
            </div>
            <div className='projectContainer'>
                <div className='project'>
                    <h1>Infinite Savannah</h1>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
