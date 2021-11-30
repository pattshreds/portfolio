import React, { useState } from 'react';
import '../styles/welcomeStyles.css';
import { useSpring, animated } from 'react-spring';
import HomePage from './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import ContactPage from './ContactPage.js';

const Welcome = () => {
    const scrollPosition = window.scrollY;

    const [flip, set] = useState(false);

    const firstProps = useSpring({
        to: { marginLeft: '7rem' },
        from: { marginLeft: '-500rem' },
    });

    const lastProps = useSpring({
        to: { marginLeft: '16rem' },
        from: { marginLeft: '-500rem' },
    });

    const titleOneProps = useSpring({
        to: { top: '-29rem', opacity: 1 },
        from: { top: '-500rem', opacity: 0 },
        delay: 1000,
    });

    const titleTwoProps = useSpring({
        to: { bottom: '29rem', opacity: 1 },
        from: { bottom: '-500rem', opacity: 0 },
        delay: 1500,
    });

    const scroll = useSpring({
        to: { opacity: 0.8 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        config: { duration: 1000 },
        onRest: () => set(!flip),
    });

    console.log(window.scrollY);

    return (
        <>
            <div id='welcomeContainer'>
                <p className='name'>P</p>
                <p className='name'>M</p>
                <div id='nameAnimations'>
                    <animated.p style={firstProps} id='nameExtFirst'>
                        atrick
                    </animated.p>
                    <animated.p style={lastProps} id='nameExtLast'>
                        cGuigan
                    </animated.p>
                </div>
                <animated.span id='titleOne' style={titleOneProps}>
                    Software
                </animated.span>
                <animated.span id='titleTwo' style={titleTwoProps}>
                    Engineer
                </animated.span>
                <animated.div id='scroll' style={scroll}>
                    Scroll
                </animated.div>
            </div>
            {scrollPosition > 50 && <HomePage />}
            <ProjectsPage />
            <ContactPage />
        </>
    );
};

export default Welcome;
