import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Modal from './Modal.js';
import '../styles/projectsStyles.css';

const ProjectsPage = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            {/* <Parallax bgImage='parallax5.jpg' strength='500'> */}
            <div id='pageCont'>
                <h1 id='projHead'>Projects</h1>
                {/* PokéSearch project */}
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
                            PokéSearch is a front-end application built using
                            HTML, CSS, Javascript, JQuery, and a third-party
                            API.
                        </p>
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='pokesearch1.png'
                            alt='Pokesearch'
                            onClick={() => setSelectedImg('pokesearch1.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='pokesearch2.png'
                            alt='Pokesearch'
                            onClick={() => setSelectedImg('pokesearch2.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='pokesearch3.png'
                            alt='Pokesearch'
                            onClick={() => setSelectedImg('pokesearch3.png')}
                        />
                        <div id='projBtns'>
                            <a
                                href='https://github.com/pattshreds/pokedex_app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn'>GitHub</button>
                            </a>
                            <a
                                href='https://pattshreds.github.io/pokedex_app/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn'>App</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Moodset project */}
                <div className='projectContainer'>
                    <div className='project'>
                        <h1>Moodset</h1>
                        <p>
                            Moodset is a playlist creation app built using
                            Node.js, Mongoose, Express, and EJS.
                        </p>
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='moodset1.png'
                            alt='Moodset'
                            onClick={() => setSelectedImg('moodset1.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='moodset2.png'
                            alt='Moodset'
                            onClick={() => setSelectedImg('moodset2.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='moodset3.png'
                            alt='Moodset'
                            onClick={() => setSelectedImg('moodset3.png')}
                        />
                        <div id='projBtns'>
                            <a
                                href='https://github.com/pattshreds/music-app'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn'>GitHub</button>
                            </a>
                            <a
                                href='https://seir-music-app.herokuapp.com/landing/landing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn'>App</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Infinite Savannah Project */}
                <div className='projectContainer'>
                    <div className='project'>
                        <h1>Infinite Savannah</h1>
                        <p>
                            Infinite Savannah is a "vaporwave" styled skateshop
                            which was built with a MERN stack (MongoDB,
                            Express.JS, React, Node.JS).
                        </p>
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='IF3.png'
                            alt='Infinite Savannah'
                            onClick={() => setSelectedImg('IF3.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='IF1.png'
                            alt='Infinite Savannah'
                            onClick={() => setSelectedImg('IF1.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='IF2.png'
                            alt='Infinite Savannah'
                            onClick={() => setSelectedImg('IF2.png')}
                        />
                        <div id='projBtns'>
                            <a
                                href='https://github.com/ryanklintworth/infinite-savannah'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn'>GitHub</button>
                            </a>
                            <a
                                href='https://infinite-savannah-23628.herokuapp.com/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn'>App</button>
                            </a>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>

                {/* PERN To-Do List */}
                <div className='projectContainer'>
                    {selectedImg && (
                        <Modal
                            selectedImg={selectedImg}
                            setSelectedImg={setSelectedImg}
                        />
                    )}
                    <div className='project'>
                        <h1>PERN To-Do</h1>
                        <p>
                            This full-stack application was built with a PERN
                            stack (PostgreSQL, Express.JS, React, Node.JS).
                        </p>
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='PERNtodo1.png'
                            alt='PERN To-Do'
                            onClick={() => setSelectedImg('PERNtodo1.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='PERNtodo2.png'
                            alt='PERN To-Do'
                            onClick={() => setSelectedImg('PERNtodo2.png')}
                        />
                        <motion.img
                            whileHover={{ opacity: 1 }}
                            src='PERNtodo3.png'
                            alt='PERN To-Do'
                            onClick={() => setSelectedImg('PERNtodo3.png')}
                        />
                        <div id='projBtns'>
                            <a
                                href='https://github.com/pattshreds/PERN-todo'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Parallax> */}
        </>
    );
};

export default ProjectsPage;
