import React from 'react';
import './styles/Navbar.css';

const navLinks = [
    { title: 'About', href: '/', },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Contact', href: '/contact' },
    { title: 'Resume', href: '/resume' }
]

function Navbar() {
    const links = navLinks.map((navLink) => {
        let active;

        if(window.location.pathname === navLink.href) {
            active = 'active' 
        } else {
            active = '' 
        }

        return (
            <li className="nav-item">
                {/* //map is building a signle navbar link */}
                <a className={`nav-link ${active}`} href={navLink.href}>{navLink.title}</a>
            </li>
        )
    })

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