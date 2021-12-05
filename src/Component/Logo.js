import React from 'react';
import "./Logo.css";
import S from "../images/s.png";
import U from "../images/u.png";
import B from "../images/b.png";
import ss from "../images/ss.png";
import P from "../images/p.png";
import A from "../images/a.png";
import C from "../images/c.png";
import E from "../images/e.png";
import pt from "../images/pt.png";

function Logo() {
    return (
        <div className="logo-container">
            {/* <div className="logo-name"> */}
                <img className="logo-name1" src={S} alt="S"/>
                <img className="logo-name" src={U} alt="u"/>
                <img className="logo-name1" src={B} alt="b"/>
                <img className="logo-name" src={ss} alt="s"/>
                <img className="logo-namep" src={P} alt="p"/>
                <img className="logo-name" src={A} alt="a"/>
                <img className="logo-name" src={C} alt="c"/>
                <img className="logo-name" src={E} alt="e"/>
                <img className="logo-namelast" src={pt} alt="."/> 
            {/* </div>                       */}
        </div>
    )
}

export default Logo
