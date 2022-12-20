import React from 'react';
import About from './About';
import Portfolio from './Portfolio';

function PagesContainer () {
    let Component 
    switch (window.location.pathname) {
        case "/":
            Component = About
            break
        case "/portfolio":
            Component = Portfolio
            break
        default:
            Component = About
            break;
    }

    return (<Component />);
}

export default PagesContainer;