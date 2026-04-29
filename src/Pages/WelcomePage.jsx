import React from "react";
import logo from '../logo.svg';

function Welcome() {
    return (
        <> 
        <div className="container d-flex wlcm-pg-div">
            <div className="wlcm-pg-card text-center">
                <div className="welcome-content">
                    <img src={logo} className="react-logo" alt="react-logo" />
                    <h1>Welcome to the Banking Applications</h1>
                    <a href="/home" className="btn r-btn"> Already an Exisiting Customer</a>
                    <button className="btn bg-light"><a href="/register"> New Member? Join us today!</a></button>

                </div>
            </div>
        </div>
        </>
    )
}

export default Welcome;