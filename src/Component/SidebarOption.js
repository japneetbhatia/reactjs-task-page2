import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon, title, color}) {
    return (
        <div className= "sidebarOption">
            <Icon style={{color: color}}/>
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarOption