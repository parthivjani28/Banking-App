import React from "react";
import logo from '../logo.svg';

function Welcome() {
    return (
        <> 
        <div className="container d-flex wlcm-pg-div">
            <div className="wlcm-pg-card text-center">
                <div className="welcome-content">
                    <img src={logo} className="react-logo" alt="react-logo" />
                    <h1 className="wlcm-heading">Welcome to the Banking Applications</h1>
                    <a href="/home" className="btn wlcm-btn"> Already an Exisiting Customer</a>
                    <a href="/register" className="btn wlcm-btn"> New Member? Join us today!</a>

                </div>
            </div>
        </div>
        </>
    )
}

export default Welcome;