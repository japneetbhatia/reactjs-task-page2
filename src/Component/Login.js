import React from 'react'
import "./Login.css"

function Login() {
    const handleFormReloading = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className="right-part">
            <div className="text">
                <p>
                    Already a user?
                </p>
            </div>
            <div className="button">
                <button className="submit" onClick={handleFormReloading}> <span className="written">Log In </span></button>
            </div>
        </div>
    )
}

export default Login
