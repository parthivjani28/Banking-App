import React from 'react'
import Creditcard from './Creditcard'
function MainPageCenter() {

    return(
        <div className="m-5 text-left">
            <div className="alertbox p-3">
                <div className="row">
                    <div className='col-md-2'>

                    </div>
                    <div className='col-md-6'>
                    <p>Make tax season easier. Use our newsearch to quickly add and pay billers.</p>
                    </div>
                    <div className='col-md-4 m-auto'>
                        <a href="/" className='alert-link'>Get Started</a>
                    </div>
                </div>
            </div>

            <div className="accounts-funds">
                    <h4>Deposit Accounts    
                    </h4>
            <div className="balance-card">
                <h4> Chequing</h4>
                <h5>0000-1111-2222-333</h5>
                <p>$5500</p>
                <div className="card-btn-account d-flex justify-content-end m-1">
                    <button className="btn card-main-btn bg-light"> Send Money</button>
                    <button className="btn card-main-btn bg-light"> Transfer Funds</button>
                    <button className="btn card-main-btn bg-light"> ... </button>

                </div>
            </div>
             <div className="balance-card">
                <h4> Saving</h4>
                <h5>0000-1111-2222-333</h5>
                <p>$5500</p>
            </div>

            <div className='total-balance'> 
                Total account balance $555.53
            </div>

            <div className='offer-alert'>
                <div className="row">
                    <div className="col-md-2">
                        +
                    </div>
                    <div className="col-md-10">
                        Get a special interest rate on your CIBC eAdvantage
Savings Account.Deposit now
                    </div>

                </div>
            </div>

            <Creditcard />

            </div>
        </div>
    )
}

export default MainPageCenter