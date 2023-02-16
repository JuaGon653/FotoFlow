import React from 'react';
import '../css/main.css';

export default function Nav() {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu" data-dropdown-menu>
                    <li className="menu-text app-name">FotoFlow</li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><a href="/">Feed</a></li>
                    <li><a href="#">My Profile</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    )
}