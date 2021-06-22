import React, { useState } from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Modal from './Modal.js';
import '../styles/projectsStyles.css';
// Learn CSS Modules

const ProjectsPage = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <Header />
            <Nav />
            <div className='projectContainer'>
                {selectedImg && (
                    <Modal
                        selectedImg={selectedImg}
                        setSelectedImg={setSelectedImg}
                    />
                )}
                <div className='project'>
                    <h1>Pokesearch</h1>
                    <p>
                        PokéSearch is a front-end application allowing users to
                        search from the implemented Pokémon API and recieve
                        information about the chosen Pokémon as well as a photo.
                        This was built using HTML, CSS, Javascript, and JQuery.
                    </p>
                    <img
                        src='pokesearch1.png'
                        alt='Pokesearch'
                        onClick={() => setSelectedImg('pokesearch1.png')}
                    />
                    <img
                        src='pokesearch2.png'
                        alt='Pokesearch'
                        onClick={() => setSelectedImg('pokesearch2.png')}
                    />
                    <img
                        src='pokesearch3.png'
                        alt='Pokesearch'
                        onClick={() => setSelectedImg('pokesearch3.png')}
                    />
                    <div id='projBtns'>
                        <button id='projLinks'>GitHub</button>
                        <button id='projLinks'>App</button>
                    </div>
                </div>
            </div>
            <div className='projectContainer'>
                <div className='project'>
                    <h1>Moodset</h1>
                    <p>
                        Moodset is a playlist creation app built using Node.js,
                        Mongoose, Express, and EJS. With this app, users can
                        create an account, log-in to their account, create a
                        playist by uploading mp3 files, edit the playlist, and
                        delete a playlist.
                    </p>
                    <img
                        src='moodset1.png'
                        alt='Moodset'
                        onClick={() => setSelectedImg('moodset1.png')}
                    />
                    <img
                        src='moodset2.png'
                        alt='Moodset'
                        onClick={() => setSelectedImg('moodset2.png')}
                    />
                    <img
                        src='moodset3.png'
                        alt='Moodset'
                        onClick={() => setSelectedImg('moodset3.png')}
                    />
                    <div id='projBtns'>
                        <button id='projLinks'>GitHub</button>
                        <button id='projLinks'>App</button>
                    </div>
                </div>
            </div>
            <div className='projectContainer'>
                <div className='project'>
                    <h1>Infinite Savannah</h1>
                    <h1>Moodset</h1>
                    <p>
                        Moodset is a playlist creation app built using Node.js,
                        Mongoose, Express, and EJS. With this app, users can
                        create an account, log-in to their account, create a
                        playist by uploading mp3 files, edit the playlist, and
                        delete a playlist.
                    </p>
                    <img
                        src='IF3.png'
                        alt='Infinite Savannah'
                        onClick={() => setSelectedImg('IF3.png')}
                    />
                    <img
                        src='IF1.png'
                        alt='Infinite Savannah'
                        onClick={() => setSelectedImg('IF1.png')}
                    />
                    <img
                        src='IF2.png'
                        alt='Infinite Savannah'
                        onClick={() => setSelectedImg('IF2.png')}
                    />
                    <div id='projBtns'>
                        <button id='projLinks'>GitHub</button>
                        <button id='projLinks'>App</button>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
