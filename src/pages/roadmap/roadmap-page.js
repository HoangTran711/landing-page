import React from 'react'
import wallet from '../assets/wallet.png'
import swap from '../assets/swap.png'
import extension from '../assets/extension.png'
import hardwareWallet from '../assets/hardware_wallet.png'
import poor from '../assets/poor.png'
import './roadmap-page.css'


export const RoadmapPage = () => {
    return (
        <div class="hero-banner">
            <div class="hero-banner-2 flex__center">
                <div class="process-container  mt-118">
                    <div class="process__item">
                        <p class="date">11.2020</p>
                        <h3 class="title">Wallet Extensions</h3>
                        <p class="subtitle">Like metamasks, with privacy.</p>
                        <div class="process-img flex__center">
                            <img src={wallet} alt="process-img"/>
                        </div>
                    </div>
                    <div class="process__item">
                        <p class="date">12.2020</p>
                        <h3 class="title">Swap</h3>
                        <p class="subtitle">Web swap token.</p>

                        <div class="process-img flex__center">
                            <img src={swap} alt="process-img"/>
                        </div>
                    </div>
                    <div class="process__item">
                        <p class="date">03.2021</p>
                        <h3 class="title">Wallet Extensions - ERC20</h3>
                        <p class="subtitle">Support log-in & deposit with metamasks account.</p>

                        <div class="process-img flex__center">
                            <img src={extension} alt="process-img"/>
                        </div>
                    </div>
                    <div class="process__item">
                        <p class="date">05.2021</p>
                        <h3 class="title">Hardware Wallet</h3>
                        <p class="subtitle">We all want a privacy hard wallet!</p>

                        <div class="process-img flex__center">
                            <img src={hardwareWallet} alt="process-img" />
                        </div>
                    </div>
                    <div class="process__item">
                        <p class="date">05.2021</p>
                        <h3 class="title">Pool Together</h3>
                        <p class="subtitle">Disclosure soon</p>

                        <div class="process-img flex__center">
                            <img src={poor} alt="process-img" />
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}