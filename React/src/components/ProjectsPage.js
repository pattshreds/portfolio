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
            <div id='projPageContainer'>
                <div className='projectContainer'>
                    <div id='projImgs'>
                        <div className='image'>
                            <img src='' alt='pokésearch 1' />
                        </div>
                        <div className='image'>
                            <img src='' alt='pokésearch 2' />
                        </div>
                        <div className='image'>
                            <img src='' alt='pokésearch 3' />
                        </div>
                    </div>
                    <div id='lrgeImgContainer'>
                        <span
                            onClick="this.parentElement.style.display='none'"
                            id='closeLrgImg'
                        >
                            &times;
                        </span>
                        <img id='lrgImg' />
                        <div id='lrgImgTxt'></div>
                    </div>
                </div>
                <div className='projectContainer'>
                    <h1>Moodset</h1>
                </div>
                <div className='projectContainer'>
                    <h1>Infinite Savannah</h1>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
