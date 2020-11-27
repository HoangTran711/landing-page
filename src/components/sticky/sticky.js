import React from 'react'
import './sticky.css'
import { Link } from 'react-router-dom'

export const Sticky = () => {
    return (
        <div className="sticky">
            <div className="bottom-right">
                <Link to="/privacy" ><p>Privacy policy</p></Link>
                <Link to="term-of-use"><p>Terms of use</p></Link>
            </div>
            <div className="bottom-left">
                <a href="https://lightshadowbox.medium.com/about-light-shadow-box-509b3b999564" target="_blank" rel="noreferrer"><p>What's LightShadowbox?</p></a>
            </div>
        </div>
    )
}