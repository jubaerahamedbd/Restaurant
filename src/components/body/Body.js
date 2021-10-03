import React from 'react'
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Redirect } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Redirect from="/" to="/home" />
        </div>
    );
}

export default Body;