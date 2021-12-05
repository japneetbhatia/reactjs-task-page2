import React from 'react'
// import Logo from './Logo'
import "./SideBar.css"

import S from "../images/s.png";
import U from "../images/u.png";
import B from "../images/b.png";
import ss from "../images/ss.png";
import P from "../images/p.png";
import A from "../images/a.png";
import C from "../images/c.png";
import E from "../images/e.png";
import pt from "../images/pt.png";
import SidebarOption from './SidebarOption';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import NearMeIcon from '@mui/icons-material/NearMe';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ErrorIcon from '@mui/icons-material/Error';
import PeopleIcon from '@mui/icons-material/People';
// import ic from "../images/ic.png"
import RedeemIcon from '@mui/icons-material/Redeem';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="logo">
            <img className="logo-name1" src={S} alt="S"/>
                <img className="logo-name" src={U} alt="u"/>
                <img className="logo-name1" src={B} alt="b"/>
                <img className="logo-name" src={ss} alt="s"/>
                <img className="logo-namep" src={P} alt="p"/>
                <img className="logo-name" src={A} alt="a"/>
                <img className="logo-name" src={C} alt="c"/>
                <img className="logo-name" src={E} alt="e"/>
                <img className="logo-namelast" src={pt} alt="."/> 
            </div>
            <div className="button">
                <SidebarOption Icon={DashboardIcon} title="Home" color="#53B9EA"/>
                <SidebarOption Icon={CompareArrowsIcon} title="Transactions" color="#F05050"/>
                <SidebarOption Icon={NearMeIcon} title="Subcription Plans" color="#DADADA"/>
                <SidebarOption Icon={DoneAllIcon} title="Settlement" color="#F05050"/>
                <SidebarOption Icon={ErrorIcon} title="Disputes" color="#F05050" />
                <SidebarOption Icon={AssignmentReturnIcon} title="Refunds" color="#27C24B"/>
                <SidebarOption Icon={PeopleIcon} title="Customers" color="#F05050"/>
                <SidebarOption Icon={LocalOfferIcon} title="Offers" color="#27C24B"/>
                <SidebarOption Icon={RedeemIcon} title="Reward Points" color="#F05050"/>
                <SidebarOption Icon={AccountCircleIcon} title="My Account" color="#53B9EA" />
                <SidebarOption Icon={SettingsIcon} title="Settings" color="#F05050"/>
            </div>
        </div>
    )
}

export default SideBar
