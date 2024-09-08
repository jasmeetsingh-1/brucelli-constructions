import React, { useState } from 'react';
import "./css/sidebar.css";

import settings from "../assets/Settings.svg";
import logout from "../assets/Log Out.svg";
import { ContractorsSvg, DashboardSvg, InventorySvg, OrdersSvg, ReportsSvg } from '../assets/sidebar/sidebarSvg';

const Sidebar = ({sidebarSelected,setSidebarSelected, setIsLoggedIn}) => {
    const sidebarItems = [
        { id: 1, label: "Dashboard", icon: <DashboardSvg /> },
        { id: 2, label: "Inventory", icon: <InventorySvg/> },
        { id: 3, label: "Contractors", icon: <ContractorsSvg/> },
        { id: 4, label: "Purchase Orders", icon: <OrdersSvg/> },
        { id: 5, label: "Reports", icon: <ReportsSvg/> },
      ];
  return (
    <div className="sidebar-mainHolder">
        <div>
            {/* <section className="sidebar-logo-holder">
                Logo
            </section> */}
            <section className="sidebar-content-holder">
        <ul>
          {sidebarItems.map(({ id, label, icon }) => (
            <li
              key={id}
              className={sidebarSelected === id ? "selectedli-sidebar" : ""}
              onClick={() => setSidebarSelected(id)}
            >
              {icon}
              {label}
            </li>
          ))}
        </ul>
      </section>
        </div>
        <div className='sidebar-footer'>
            <button><img src={settings} alt="setting"/>Settings</button>
            <button onClick={()=>{setIsLoggedIn(false)}}><img src={logout} alt="logout"/> Log Out</button>
        </div>
    </div>
  )
}

export default Sidebar;
