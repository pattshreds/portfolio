import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import '../styles/welcomeStyles.css';
import HomePage from './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import { useSpring, animated, config } from 'react-spring';

const Welcome = () => {
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
        to: { top: '-29rem' },
        from: { top: '-500rem' },
        delay: 1000,
    });

    const titleTwoProps = useSpring({
        to: { bottom: '29rem' },
        from: { bottom: '-500rem' },
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

    return (
        <>
            <Parallax bgImage='parallax5.jpg' strength='800'>
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
                <HomePage />
                <ProjectsPage />
            </Parallax>
        </>
    );
};

export default Welcome;
