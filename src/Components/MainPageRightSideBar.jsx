import React from "react";

function MainPageRightSideBar(){
    return (
    <>
    <div className="rightsidebar-content container">
        <div className="section1_RightSideBar">
            <div className="row">
                <div className="col-md-6">
                    <h5>PJ</h5>
                    <a className="" link href="/" >Profile</a>
                </div>
                <div className="col-md-6">
                    <img src="" alt="" srcset="" width={30} />
                    <a href="/" className="link"> Account Security</a>
                </div>
            </div>
            </div>
              <div className="section2_RightSideBar">
                <h4> Products and Services</h4>
                  <div className="row">
                <div className="col-md-6">
                    <img src="" alt="" srcset="" width={30} />
                    <a className="links" link href="/" >Explore Products</a>
                </div>
                <div className="col-md-6">
                    <img src="" alt="name" srcset="" width={30} />
                    <a href="/" className="link"> Activate Card</a>
                </div>

            </div>

            <div class="refer-card">
                <a href="/" className="link">Refer and Earn</a>
            </div>
              </div>
              <div className="section3_RightSideBar">
                <h4>Help and Support</h4>
                <div className="helplinks">
                    <a href="/" className="link">Book a meeting</a>
                </div>
                <div className="helplinks">
                    <a href="/" className="link">Find a CIBC Banking Centre</a>
                </div>
                <div className="helplinks">
                    <a href="/" className="link">Help Centre</a>
                </div>
              </div>
              <div className="section4_RightSideBar">
                <div className="ad-sidebar">
                    <img src="" alt="name-icxon" width={100} height={60} />
                    <h5>Lets work towards yourambitions, together</h5>
                    <p className="ad-content">A CIBC advisor can provideexpert advice and apersonalized plan to helpyou make them happen.</p>
                </div>
              </div>

              <div className="bookmeeting">
                <a className="bookmeeting_link" href="/">
                    Book a Meeting
                </a>
              </div>
       
    </div>
    </>);
}

export default MainPageRightSideBar;