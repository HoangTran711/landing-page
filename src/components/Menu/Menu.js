import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'


export const Menu = ({setIsMenuOpen}) => {
    return (
        <div className="menu-list" id="navbarNav">
            <div className="bg-1">
                <div className="bg-2">
                <ul className="menu-nav">
                    <li onClick={() => setIsMenuOpen(false)} className="menu-item active">
                        <Link className="menu-link" to="/">Products</Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)} className="menu-item">
                        <a className="menu-link" href="https://lightshadowbox.medium.com/">Blog</a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)} className="menu-item">
                        <a className="menu-link" href="https://t.me/lightshadowbox">Community</a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)} className="menu-item">
                        <Link className="menu-link" to="/roadmap" >Roadmap</Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)} className="menu-item">
                        <Link className="menu-link" to="term-of-use"><p>Terms of use</p></Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)} className="menu-item">
                        <Link className="menu-link" to="/privacy" ><p>Privacy policy</p></Link>
                    </li>
                </ul> 
                </div>
            </div>
        </div>
    )
}