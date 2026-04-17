import React from 'react';
import logo from '../logo.svg';
function Home() {
    return (
        <div className="home-card container py-5">
            <div className="card shadow-sm mx-auto" style={{ maxWidth: 560 }}>
                <div className="card-body">
                    <div className="text-center mb-4">
                        <img src={logo} className="home-logo mb-3" alt="logo" width={100} />
                        <h2 className="h4">Sign on to CIBC Online Banking®</h2>
                    </div>

                    <div className="alert alert-info text-center" role="alert">
                        Important notice: The way Personal and Business Banking clients sign on to online banking is changing.
                        <a href="/" className="alert-link"> Learn more</a>
                    </div>

                    <form className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="card-number" className="form-label">
                                Card Number
                            </label>
                            <input
                                type="number"
                                id="card-number"
                                className="form-control"
                                placeholder="0000 1111 2222 3333"
                            />
                        </div>
                    </form>

                    <div className="d-grid gap-2 mb-3">
                        <button type="button" className="btn btn-outline-secondary">
                            Sign in with a different card
                        </button>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <button type="button" className="btn btn-light">
                            Back
                        </button>
                        <a href="/main" className="btn btn-primary">
                            Continue
                        </a>
                    </div>

                    <div className="text-center small text-muted">
                        Not registered for online banking? <a href="/">Register Now</a>
                        <br />
                        Trouble signing on? <a href="/">Reset your password</a>
                    </div>
                </div>
            </div>
        </div>

     
    );
}

export default Home;

