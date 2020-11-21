import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Menu.css'


export const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
        <div className="menu-list" id="navbarNav">
            {isOpen ? 
                <ul className="menu-nav">
                    <FontAwesomeIcon icon={faBars} className="icon" />
                    <li className="menu-item active">
                        <a className="menu-link" href="/">Products</a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-link" href="/">Blog</a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-link" href="/">Community</a>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-link" to="/roadmap" >Roadmap</Link>
                    </li>
                </ul> : 
            null}
        </div>
    )
}