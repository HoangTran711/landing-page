import React from 'react'
import logo from '../../pages/assets/logo.png'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
export const Navbar = () => {
    return (
        <div className={classNames("navbar fixed-top  navbar-expand-lg")}>
            <Link className="navbar-brand" to="/">
                <img src={logo} width="100%" className="d-inline-block align-top" alt="logo"/>
            </Link>
            <div className={classNames("collapse navbar-collapse justify-content-end")} id="navbarNav">
                <ul className="navbar-nav">
                    <li className={classNames("nav-item active")}>
                        <Link className="nav-link" to="/">Products</Link>
                    </li>
                    <li className="nav-item">
                        <a target="_blank" rel="noreferrer" className="nav-link" href="https://lightshadowbox.medium.com/">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="noreferrer" target="_blank" href="https://t.me/lightshadowbox">Community</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/roadmap" >Roadmap</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}