import React from 'react';
import MainPageTabs from './../Components/MainPageTabs';
import MainPageLeftSidebar from './../Components/MainPageLeftSidebar'
import MainPageCenter from '../Components/MainPageCenter';
import MainPageRightSideBar from '../Components/MainPageRightSideBar';
function Main() {
    return (
      <>
       
        <MainPageTabs />
        <div className="row">
          <div className="col-md-3">
            <MainPageLeftSidebar />
          </div>
          <div className="col-md-6">
            <MainPageCenter />
          </div>
          <div className="col-md-3">
            <MainPageRightSideBar />
          </div>
        </div>
       </>
    
    )
}

export default Main;