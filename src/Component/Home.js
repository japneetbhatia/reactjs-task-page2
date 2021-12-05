import React from 'react'
import "./Home.css";
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import Dashboard from './Dashboard';

function Home() {
    return (
        <div className="container">
            
            <SideBar />
            <NavBar />
            <Dashboard />
        </div>
    )
}

export default Home
