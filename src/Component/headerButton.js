import React from 'react'
import "./headerButton.css"

function headerButton({title, selected}) {
    return (
        <div className={`headerOption ${selected && "headerOption--active"}`}>
            <h3>{title}</h3>
        </div>
    )
}

export default headerButton
