import React from 'react';
import WelcomePage from './components/WelcomePage.js';
import HomePage from './components/HomePage.js';
import ProjectsPage from './components/ProjectsPage.js';
import ContactPage from './components/ContactPage.js';
import Resume from './components/Resume.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/welcome' exact component={WelcomePage} />
                    <Route path='/' exact component={HomePage} />
                    <Route path='/projects' exact component={ProjectsPage} />
                    <Route path='/contact' exact component={ContactPage} />
                    <Route path='/resume' exact component={Resume} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
