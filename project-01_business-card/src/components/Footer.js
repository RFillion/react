import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../styles/_Footer.scss';

export default function Footer() {
    const socials = {
        fontSize: '1.3rem',
        color: '#285aff',
        margin: '0.75rem'
    }
    const Facebook = {link: 'https://www.facebook.com/raph.fillion'}
    const Instagram = {link: 'https://www.instagram.com/r.aph.f/'}
    const Twitter = {link: 'https://twitter.com/Fillion_Raph'}
    const Github = {link: 'https://github.com/RFillion'}
    return (
        <footer className="Footer">
            <a href={Facebook.link} target="_blank">
                <FontAwesomeIcon 
                style={socials}  icon={brands('Facebook')} className="socials"
                />
            </a>
            <a href={Instagram.link} target="_blank">
                <FontAwesomeIcon 
                style={socials} icon={brands('Instagram')} className="socials"
                />
            </a>
            <a href={Twitter.link} target="_blank">
                <FontAwesomeIcon 
                style={socials} icon={brands('Twitter')} className="socials"
                />
            </a>
            <a href={Github.link} target="_blank">
                <FontAwesomeIcon 
                style={socials} icon={brands('Github')} className="socials"
                />
            </a>
        </footer>
    )
}