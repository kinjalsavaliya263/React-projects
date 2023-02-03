import React from 'react'
import NavBar from './NavBar'
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'


export default function Home() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [status, setStatus] = useState("")
    // let navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault()

        const data = { firstname, lastname, email, password }
        console.log(data);
        fetch("https://myapireact.000webhostapp.com/Signup.php", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(res => res.json()).then(json => console.log(json))
    }
    return (
        <>
            <NavBar />
            {/* Section: Design Block */}
            <div className="container">
                <section className="text-center text-lg-start">
                    <style dangerouslySetInnerHTML={{ __html: "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  " }} />
                    {/* Jumbotron */}
                    <div className="container ">
                        <div className="row g-0 align-items-center mt-5 pt-4 justify-content-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 " style={{ height: '600px', width: '500px' }}>
                                <div className="card cascading-right" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                                    <div className="card-body p-3 shadow-5 text-center">
                                        <h2 className="fw-bold mb-4">Sign up now</h2>
                                        <form method='POST' onSubmit={handleSignup}>
                                            {/* 2 column grid layout with text inputs for the first and last names */}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" onChange={(e) => setFirstname(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" onChange={(e) => setLastname(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Email input */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                            </div>
                                            {/* Password input */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>
                                            {/* Checkbox */}
                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example33" defaultChecked />
                                                <label className="form-check-label" htmlFor="form2Example33">
                                                    I accept the Terms of Use & Privacy Policy
                                                </label>
                                            </div>
                                            <p>Already have an account?
                                                <Link to="/Login" className="link-info mx-2">Log in</Link>
                                            </p>
                                            {/* Submit button */}
                                            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={() => handleSignup()}>
                                                Sign up
                                            </button>
                                            {/* Register buttons */}
                                            <div className="text-center">
                                                <p>or sign up with:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f" />
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google" />
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter" />
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2 mb-lg-0" style={{ width: '500px' }}>
                                <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4" style={{ height: '650px' }} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Jumbotron */}
                </section>
                {/* Section: Design Block */}
            </div>

        </>
    )
}
