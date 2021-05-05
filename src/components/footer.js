import React from 'react';

export const Footer=()=>{
    return(
        <footer>
        <section>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </section>
        <div className="subscribe">
            <section>
                <input type="text"/>
                <button type="button">SUBMIT</button>
            </section>
        </div>
    </footer>
    )
}