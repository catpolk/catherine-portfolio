import React from 'react';
import '../components/styles/Navbar.css';

function Navbar() {
    return (
        <nav className='nav'>
            <h2>Catherine Polk</h2>
            <ul> 
                <li><a href="/">About me</a> </li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/resume">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;