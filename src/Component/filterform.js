import React from 'react'
import "./filterform.css"

function filterform() {
    const handleFormReloading = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <form className="form-wrapper">
                <div className="name">
                    <label className="label">
                        Refund Id
                    </label>
                    <input className="input" type="text" />
                </div>
                <div className="name">
                    <label className="label">
                        Payment Id
                    </label>
                    <input className="input" type="text" />
                </div>
                <div className="name">
                    <label className="label">
                        Status
                    </label>
                    <input className="input" type="combobox" placeholder="All" />
                </div>
                <div>
                    <button className="verify" onClick={handleFormReloading}> <span className="search">Search </span></button>
                </div>
            </form>            
        </div>
    )
}

export default filterform
