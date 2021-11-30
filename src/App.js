import React from 'react';
import { Parallax } from 'react-parallax';
import Welcome from './components/Welcome.js';
// import Resume from './components/Resume.js';

function App() {
    return (
        <Parallax
            bgImage='parallax5.jpg'
            strength={1000}
            bgImageStyle={{ height: '70%', width: '100vw' }}
            // blur={3}
        >
            <div className='App'>
                <Welcome />
                {/* <HomePage />
                <ProjectsPage />
                <ContactPage /> */}
                {/* <Resume /> */}
            </div>
        </Parallax>
    );
}

export default App;
