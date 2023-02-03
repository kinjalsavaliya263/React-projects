import React from 'react'
import Header from './Header'


export default function LogIn() {
    return (
        <>
            <Header />
            <div className="container my-5 justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <form className="modal-content animate" action="" method="post" style={{ borderRadius: '10px' }}>
                            <h1 style={{ textAlign: 'center' }}>Log In</h1>
                            {/* <div className="imgcontainer">
                                <img src="1.jpg" alt="Avatar" className="avatar" />
                            </div> */}
                            <div className="box">
                                <label htmlFor="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required />
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />

                                <button type="submit" className='button'>Login</button>
                                <label>
                                    <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                                </label>
                            </div>
                            <div className="box" style={{ backgroundColor: '#f1f1f1' }}>
                                <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                                <span className="psw">Forgot <a href="#">password?</a></span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
