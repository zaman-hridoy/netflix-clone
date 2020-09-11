import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [show, handleNavShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleNavShow(true);
            }else {
                handleNavShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <Link to="/">
                <img 
                    className="nav__logo"
                    src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" 
                    alt="Netflix Logo"
                />
            </Link>
        </div>
    );
}

export default Nav;
