import React from 'react';
import "./css/sidebar.css";
import Home from "../assets/sidebar/Home.svg";
import Inventory from "../assets/sidebar/Inventory.svg";
import Contractors from "../assets/sidebar/Contractors.svg";
import orders from "../assets/sidebar/Order.svg";
import reports from "../assets/sidebar/Report.svg";
import store from "../assets/sidebar/Manage Store.svg";
import settings from "../assets/Settings.svg";
import logout from "../assets/Log Out.svg";

const Sidebar = () => {
    const sidebarContent = [
        { label: "Dashboards", imageSRC: Home },
        { label: "Inventory", imageSRC: Inventory },
        { label: "Contractors", imageSRC: Contractors },
        { label: "Purchase Orders", imageSRC: orders },
        { label: "Manage Store", imageSRC: store },
        { label: "Reports", imageSRC: reports }
    ];
  return (
    <div className="sidebar-mainHolder">
        <div>
            <section className="sidebar-logo-holder">
                Logo
            </section>
            <section className="sidebar-content-holder">
                <ul>
                    {sidebarContent.map((item)=>{
                        return <li><img src={item.imageSRC} alt={item.label}/>{item.label}</li>
                    })}
                </ul>
            </section>
        </div>
        <div className='sidebar-footer'>
            <button><img src={settings} alt="setting"/>Settings</button>
            <button><img src={logout} alt="logout"/> Log Out</button>
        </div>
    </div>
  )
}

export default Sidebar;
