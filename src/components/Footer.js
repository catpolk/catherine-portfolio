import React from 'react';
import './styles/Footer.css';

//links for each of the element in the footer with bootstrap icons 
function Footer () {
    const links = [
        { icon: "github", href: "https://github.com/catpolk" },
        { icon: "linkedin", href: "https://www.linkedin.com/in/catherine-polk-860614178/" },
        { icon: "stack-overflow", href: "https://stackoverflow.com/users/19369839/catherine" }
    ]
//shows icons in the footer and adds a links to each 
    const footerLinks = links.map((link) => {
        return <li><a href={link.href} target="_blank" ><i className={`bi bi-${link.icon}`} /></a></li>
    })
//rendering footer component 
    return (
        <section className="footer">
            <ul>{footerLinks}</ul>
        </section>
    )
}

export default Footer;  