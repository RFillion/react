import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import ProfilePic from '../images/me.jpg';
import '../styles/_Info.scss';

export default function Info() {
    const IconStyling = {
        marginRight: '8px',
        fontSize: '0.9rem'
    };
    return (
        <div className="Information"> 
            <img className="Information--image" src={ProfilePic} alt="Profile" />
            <div className="Information--title">
                <h2 className="Name">Raphaël Fillion</h2>
                <p className="Title">Frontend Developer</p>
                <p className="Website">rfillion.com</p>
            </div>
            <div className="Information--btns">
                <a className="Email" href="mailto:info@rfillion.com">
                    <FontAwesomeIcon 
                    style={IconStyling}
                    icon={solid('Envelope')} 
                    />
                    Email
                </a>
                <a className="LinkedIn" href="https://www.linkedin.com/in/raphael-fillion/" target="_blank">
                    <FontAwesomeIcon
                    style={IconStyling}
                    icon={brands('LinkedIn')} 
                    />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}