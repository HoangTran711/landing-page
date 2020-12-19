import React from 'react'
import cube from '../assets/cube.png'
import './home-page.css'
import classNames from 'classnames'


export const HomePage = () => {
    return (
        <div className="hero-banner home-page">
            <div className="hero-banner-2">
                <div className={classNames("banner-info container")}>
                    <div className="banner-info__intro">
                        <h1 className="title">Because <span className="privacy-text">privacy</span> matters</h1>
                        <h4 className="subtitle">Store, send, receive, swap anonymously.</h4>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className={classNames("btn btn-primary")}><a href="https://chrome.google.com/webstore/detail/lsb-wallet/bmoeljkahcfgehdkfkeafinpnfmkabda" target="_blank" rel="noopener noreferrer" download>Get Extension</a></button>
                            <button type="button" className={classNames("btn btn-link")}><a href="https://lightshadowbox.medium.com/lsb-wallet-extension-the-first-gateway-to-crypto-privacy-f38bf82bc89c" target="_blank" rel="noreferrer" >Read docs</a></button>
                        </div>
                    </div>
                    <div className="banner-info__cube">
                        <img src={cube} className="img" alt="cube" />
                    </div>
                </div>
            </div>
        </div>
    )
}