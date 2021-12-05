import React from 'react';
import "./SignUp.css"
import Logo from "./Logo";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
import Info from "./Info";

function SignUp() {
    return (
        <div className="container">
            <div className="infobar">
                <Logo />
                <Login />
            </div>
            <div className="modal">
                <SignUpForm />
                <Info />
            </div>
        </div>
    )
}

export default SignUp
