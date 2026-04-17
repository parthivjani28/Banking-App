import React from 'react'

var credit = {
    balance: 1000,
    cardnumber : "4444 5555 1111 0000"
}

function Creditcard() {
    return (
        <>
        <div className="balance-card">
              <h4>Credit Card    
                    </h4>
                <h4> CIBC VISA</h4>
                <h5>{credit.cardnumber}</h5>
                <p>{credit.balance}</p>
                <div className="card-btn-account d-flex justify-content-end m-1">
                    <button className="btn card-main-btn bg-light"> Pay Card</button>
                    <button className="btn card-main-btn bg-light"> ... </button>

                </div>
            </div>
        </>
    );


}

export default Creditcard;