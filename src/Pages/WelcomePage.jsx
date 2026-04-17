import React from "react";

function Welcome() {
    return (
        <>
        <div className="container m-auto">
            <div className="card">
                <div className="welcome-content">
                    <h1>Welcome to the Banking Applications</h1>
                    <button className="btn bg-light"><a href="/home"> Already an Exisiting Customer</a></button>
                    <button className="btn bg-light"><a href="/register"> New Member? Join us today!</a></button>

                </div>
            </div>
        </div>
        </>
    )
}

export default Welcome;