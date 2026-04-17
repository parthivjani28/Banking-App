import React from 'react';

function MainPageLeftSidebar() {
    return (
        <div className="container text-left m-5">
        <div className="Section-1_leftSidebar m-5">
            <a className="LeftSideBar-Tab" href="/">Home</a> <br />
            <a className="LeftSideBar-Tab" href="/">Account Detail</a> <br />
            <a claaName="LeftSideBar-Tab" href="/">My Documents</a>
        </div>

        <div className="Section-2_leftSidebar">
            <h3 className="sidebar-h3">Move Money</h3>
            <ul>
                <li>
                    <a className="links-sidebar" href="/">Bill Payments</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Transfer Funds</a>
                </li>
                 <li>
                    <a className="links-sidebar"  href="/">Interac e-Transfer</a>
                </li>
            </ul>
        </div>

        <div className="Section-3_leftSidebar">
            <h3 className="sidebar-h3">Advice</h3>
            <ul>
                <li>
                    <a className="links-sidebar"  href="/">Net Worth</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Help Centre</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Customer Services</a>
                </li>
            </ul>
        </div>

         <div className="Section-4_leftSidebar">
            <h3 className="sidebar-h3">More</h3>
            <ul>
                <li>
                    <a className="links-sidebar" href="/">Global Money Transfer</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">CIBC by Expedia</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Order Foreign Cash</a>
                </li>
                <li>
                    <a className="links-sidebar" href="/">Buy Gold and Silver</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Check Credit Score</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Download Transactions</a>
                </li>
                <li>
                    <a className="links-sidebar" href="/">Manage Upcoming Transactions</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Document Delivery Preference</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Request Center</a>
                </li>
            </ul>
        </div>

        <div className="Section-5_leftSidebar">
            <h3 className="sidebar-h3">Settings</h3>
            <ul>
                <li>
                    <a className="links-sidebar" href="/">Manage My Card </a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Manage My Alert</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Preference Centre</a>
                </li>
                 <li>
                    <a className="links-sidebar" href="/">Account Security</a>
                </li>
                <li>
                    <a className="links-sidebar" href="/">Statement Preference</a>
                </li>
            </ul>
        </div>


        </div>
    )
}

export default MainPageLeftSidebar;