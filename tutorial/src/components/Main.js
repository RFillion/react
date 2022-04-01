import React from "react";
import ReactLogo from "../images/logo192.png";
import '../styles/_Main.scss';

export default function Main () {
    return (
        <main>
            <div className="container"> 
                <h1 className="main--title">Fun facts about React</h1>
                <ul className="list">
                    <li className="list--items">Was first released in 2013</li>
                    <li className="list--items">Was originally created by Jordan Walke</li>
                    <li className="list--items">Has well over 100K stars on GitHub</li>
                    <li className="list--items">Is maintained by Facebook</li>
                    <li className="list--items">Powers thousands of entreprise apps, including mobile apps</li>
                </ul>
                <img className="backgroundLogo" src={ReactLogo} alt="Background Logo"/>
            </div>
        </main>
    );
}