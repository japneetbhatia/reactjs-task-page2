import React from 'react'
import "./Info.css"
import netflix from "../images/netflix.png";
import primevideo from "../images/prime.png";
import hotstar from "../images/hotstar.png";
import sonyliv from "../images/sony.png";
import zee from "../images/zee.png";
import voot from "../images/voot.png";
import sun from "../images/sun.png";
import aha from "../images/aha.png";
import mb from "../images/mb.png";
import toi from "../images/toi.png";
import byjus from "../images/byjus.png";
import last from "../images/last.png";

function Info() {
    return (
        <div className="label-container">
            <div className="heading">
                <p>Why choose SubSpace?</p>
            </div>
            <div className="ad-line">
                <p>2000+ businesses trust their payments with SubSpace</p>
            </div>
            <div className="photo-grid">
                <img src={netflix} alt="netflix" />
                <img src={primevideo} alt="primevideo" />
                <img src={hotstar} alt="hotstar" />
                <img src={sonyliv} alt="sonyliv" />
                <img src={zee} alt="zee" />
                <img src={voot} alt="voot" />
                <img src={sun} alt="sun" />
                <img src={aha} alt="aha" />
                <img src={mb} alt="mb" />
                <img src={toi} alt="toi" />
                <img src={byjus} alt="byjus" />
                <img src={last} alt="last" />
            </div>
            <div className="footer">
                <p>Need help? We are just a click away. <span className="main">Contact Us</span> </p>
            </div>
        </div>
    )
}

export default Info
