import React from 'react';
import './styles/Footer.css';

function Footer () {
    return (
        <section className="footer">
            <ul> 
                <li>
                    <a href="https://github.com/catpolk" target="_blank">
                    </a><i className="bi bi-github"></i>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/catherine-polk-860614178/" target="_blank"></a>
                    <i className="bi bi-linkedin"></i>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/19369839/catherine" target="_blank"></a>
                    <i className="bi bi-stack-overflow"></i>
                </li>
            </ul>
        </section>
    )
}

export default Footer;