import React from 'react';
import '../styles/resumeStyles.css';

const Resume = () => {
    return (
        <>
            <div id='resumeContainer'>
                <h1>Resume</h1>
                <div id='resume'>
                    <iframe src='./Resume.pdf' title='resume'></iframe>
                </div>
            </div>
        </>
    );
};

export default Resume;
