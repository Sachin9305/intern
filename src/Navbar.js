import React from 'react';
import Analytics from './Analytics';
import Usermangement from './Usermangement';
import Dashboard from './Dashboard';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav-list">
                <li><Dashboard /></li>
                <li><Usermangement /></li>
                <li><Analytics /></li>


            </ul>
        </div>
    );
}

export default Navbar;
