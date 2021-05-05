import React, { useState } from 'react';
import logo from '../Img/doodle.png'


const Menu = () => {
    const [state, setState] = useState(true);

    function toggle() {
        setState(!state);
    }
    return (
        <nav>
            <div className="navbar container">
                <section className="nav-logo">
                    <img src={logo} alt="logo" />
                </section>
                <section className="navitem">
                    <ul className={state ? "nav-links hide" : "nav-links show"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <i className="fa fa-search"></i>
                </section>
                <i className="fa fa-bars" onClick={toggle}></i>
            </div>
        </nav>
    )
}

export default Menu;