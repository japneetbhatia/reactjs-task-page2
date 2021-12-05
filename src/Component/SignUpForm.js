import React from 'react'
import "./SignUpForm.css"
import vector from "../images/Vector.png"

function SignUpForm() {

    // const [values, setValues] = useState({
    //     name:"",
    //     email:"",
    //     password:"",
    //     confirmPassword:""
    // })

    const handleFormReloading = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
                <div className="app-wrapper">
                <div>
                    <h2 className="title"> Create an Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">
                            Enter Mobile
                        </label>
                        <input className="input" type="tel" />
                    </div>
                    <div className="name">
                        <label className="label">
                            Enter Email
                        </label>
                        <input className="input" type="email" />
                    </div>
                    <div className="name">
                        <label className="label">
                            Enter Password
                            <img className="vector1" src={vector} alt="show" />
                        </label>
                        <input className="input" type="password" />
                    </div>
                    <div className="name">
                        <label className="label">
                            Confirm Password
                            <img class="vector2" src={vector} alt="show" />
                        </label>
                        <input className="input" type="password" />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" /> 
                        <span className="checkbox-text"> I hearby confirm that I am above 18 years old. </span>
                    </div>
                    <div>
                        <button className="verify" onClick={handleFormReloading}> <span className="verifyWritten">Verify OTP </span></button>
                    </div>
                    <div className="policy">
                        <p>By creating this account, you agree to our 
                            <span className="mark"> Privacy Policy </span> 
                            and <br />
                            <span className="mark edit" > Terms of Use </span> 
                        </p>
                    </div>
                </form>
            </div>        
        </div>
    )
}

export default SignUpForm
