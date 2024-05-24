import React from "react";
import './Hero.css'
import hand_icon from '../Assets/first.jpg'

const Hero = () => {
    return (
    <div className="hero">
        <div className="hero-left">
        <h2>Maximum Match</h2>
        </div>
            <div>
                <div className="hand-hand-icon"></div>
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
        <div className="hero-right">

        </div>
    </div>
    )
}

export default Hero