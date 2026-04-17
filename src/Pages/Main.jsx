import React from 'react';
import MainPageTabs from './../Components/MainPageTabs';
import MainPageLeftSidebar from './../Components/MainPageLeftSidebar'
function Main() {
    return (
      <>
       
        <MainPageTabs />
        <div className="row">
          <div className="col-md-3">
            <MainPageLeftSidebar />
          </div>
          <div className="col-md-6">
            
          </div>
          <div className="com-md-3">
            
          </div>
        </div>
       </>
    
    )
}

export default Main;