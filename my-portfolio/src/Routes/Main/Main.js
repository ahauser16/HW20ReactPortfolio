import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import AboutMe from '../../Pages/AboutMe/AboutMe';
import Contact from '../../Pages/Contact/Contact';
import Projects from '../../Pages/Projects/Projects';
import Resume from '../../Pages/Resume/Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
    </Switch>
);

export default Main;