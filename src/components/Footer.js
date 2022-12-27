import React from 'react';
import './styles/Footer.css';

function Footer () {
    const links = [
        { icon: "github", href: "https://github.com/catpolk" },
        { icon: "linkedin", href: "https://www.linkedin.com/in/catherine-polk-860614178/" },
        { icon: "stack-overflow", href: "https://stackoverflow.com/users/19369839/catherine" }
    ]

    const footerLinks = links.map((link) => {
        return <li><a href={link.href} target="_blank" ><i className={`bi bi-${link.icon}`} /></a></li>
    })

    return (
        <section className="footer">
            <ul>{footerLinks}</ul>
        </section>
    )
}

export default Footer;  