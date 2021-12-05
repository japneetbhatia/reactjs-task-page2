import React from 'react'
import "./NavBar.css"
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import notification from "../images/noti.png"
import icon from "../images/icon.png"

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <p className="sidelogo">
                    Dashboard
                </p>
            </div>
            <div className="navbar-right">
                <div className="right">
                    <SearchIcon />
                </div>
                <div className="right">
                    <AppsIcon />
                </div>
                <div className="right ">
                    <img src={notification} alt="notification"/>
                </div>
                <div className="right" id="last">
                    <img src={icon} alt="icon" />
                    <p>Groww90</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
