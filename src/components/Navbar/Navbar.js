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
                        <a className={classNames("nav-link")} href="/">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Community</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/roadmap" >Roadmap</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}