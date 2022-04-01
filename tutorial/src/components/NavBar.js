import React from "react";
import '../styles/_NavBar.scss';
import Logo from "../images/logo192.png";

export default function NavBar () {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                <a className="logo" href="/"> 
                    <img className="logo__img" src={Logo } alt="Logo"/>
                    <p className="logo__text">ReactFacts</p>
                </a>
            </div>
            <div className="navigation__description">
                <p className="description">React Course - Project 1</p>
            </div>
        </nav>
    );
}