import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    Portfolio
                    <ul>
                        <li><Link to="/portfolio/process">Process</Link></li>
                        <li><Link to="/portfolio/mechanical">Mechanical</Link></li>
                        <li><Link to="/portfolio/hvac">HVAC</Link></li>
                        <li><Link to="/portfolio/electronics">Electronics</Link></li>
                        <li><Link to="/portfolio/3d">3D</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;