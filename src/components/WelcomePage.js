import React from 'react';
import '../styles/welcomeStyles.css';

const WelcomePage = () => {
    return (
        <>
            <h1 className='welcome'> Please Type "Hello World" to enter. </h1>
            <form id='welcomeForm' action>
                <input
                    className='welcomeText'
                    type='text'
                    placeholder='Hello World'
                />
                <input className='welcomeSubmit' type='submit' value='Enter' />
            </form>
        </>
    );
};

export default WelcomePage;
