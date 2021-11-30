import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navigationbar = () => {
    
    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <Link to="/">Story Time</Link>
            </div>
            <div className="navbar-space">
                {/* in between space */}
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="new" className="navbar-item">Create</Link>
                <Link to="" className="navbar-item">Play</Link>
            </div>
        </div>
    )
}

export default Navigationbar