import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

//an array of the object for href pages component to see the active state of the navbar links 
const navLinks = [
    { title: 'About', href: '/', },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Contact', href: '/contact' },
    { title: 'Resume', href: '/resume' }
]

function Navbar() {
    const links = navLinks.map((navLink) => {
        let active;
        //statement that checks if link in the nav is eaqual to the current page
        if(window.location.pathname === navLink.href) {
            active = 'active' 
        } else {
        //if not true, returns an empty string 
            active = '' 
        }

        return (
            <li className="nav-item">
                <Link to={process.env.PUBLIC_URL + navLink.href} className={`nav-link ${active}`}>
                    {/* //map is building a single navbar link */}
                    {navLink.title}
                </Link>
            </li>
        )
    })
//rendering navbar HTML and passing links to it where we check active/non active state 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Catherine Polk</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;