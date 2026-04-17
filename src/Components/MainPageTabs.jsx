import React from 'react';
import logo from '../logo.svg';
function MainPageTabs() {
    return (
        <>
          <div className="container">
             <img src={logo} alt="Logo" width={100} />
             <div className="row">
                <div className="col-lg-6">
                     <div className="tabs text-left">
                        <a href="/" className="MainPage-Tabs"> Banking</a>
                        <a href="/" className="MainPage-Tabs"> Investment</a>
                        <a href="/" className="MainPage-Tabs"> Offers and Products</a>
    
                    </div>
                </div>
                <div className="col-lg-6">
                    
      <input  type="search" placeholder="Search" aria-label="Search" />
      
     
                </div>
                </div>
     
        </div>
        </>
        )
}

export default MainPageTabs;