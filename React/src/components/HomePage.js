import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Header from './Header.js';
import '../styles/homeStyles.css';

const HomePage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div id='container'>
                <div id='me'>
                    <img src='/mylove.jpg' alt='me' />
                </div>
                <div id='bio'>
                    <p id='bioText'>
                        <i id='introLine'>Nice to meet you, I'm Patrick.</i>{' '}
                        <br /> <br />
                        <strong>Since I was a young child</strong> I have had a
                        strong passion for technology. More specifically,
                        technology that is user-friendly, runs smoothly, and is
                        pleasing to look at. <br /> <br />
                        I am activley looking for a role within a company having
                        strong values that align with my own, and a company
                        culture that's productive and fun. Education is not only
                        very important to me, but I really enjoy learning, and
                        look forward to becoming a part of a team that embraces
                        learning!. <br /> <br />
                        My background includes a B.A. in Graphic design with a
                        focus on layout and web design. With that comes an
                        incredible attention to detail, responsiveness, and
                        creative solutions to complicated problems. <br />
                        <br />
                        Please look around, enjoy. (:
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
