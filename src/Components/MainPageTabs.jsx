import React from 'react';
import logo from '../logo.svg';
function MainPageTabs() {
    return (
          <>
            <div className="container">
                <img src={logo} alt="Logo" width={100} />
                    <div className="tabs text-left d-flex">
                        <a href="/" className="MainPage-Tabs"> Banking</a>
                        <a href="/" className="MainPage-Tabs"> Investment</a>
                        <a href="/" className="MainPage-Tabs"> Offers and Products</a>
    
                    </div>
            </div>
           </>
        
        )
}

export default MainPageTabs;