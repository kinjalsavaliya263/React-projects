import React from 'react'
import Header from './Header'

export default function SignUp() {
    return (

        <div>
            <Header />
            <div className="container justify-content-center my-5">
                <div className="row justify-content-center ">
                    <div className="col-md-8">
                        <form className="modal-content animate" action="" style={{ borderRadius: '10px' }}>
                            <div className="box">
                                <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
                                <p>Please fill in this form to create an account.</p>
                                <hr />
                                <label htmlFor="email"><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" name="email" required />
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />
                                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                                <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                                <label>
                                    <input type="checkbox" defaultChecked="checked" name="remember" style={{ marginBottom: 15 }} /> Remember me
                                </label>
                                <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
                                <div className="clearfix">
                                    <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                                    <button type="submit" className="signupbtn">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
