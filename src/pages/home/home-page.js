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
                            <div className="flex-column-center">
                                <button type="button" disabled className={classNames("btn btn-primary")}>Get extension</button>
                                <span>Coming soon</span>
                            </div>
                            <button type="button" className={classNames("btn btn-link")}>Read docs</button>
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