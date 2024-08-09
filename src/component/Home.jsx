import React, { useEffect, useState } from 'react';
import "./css/Home.css";
import Sidebar from './sidebar';
import Dashboard from './page/dashboard';
import HeaderSearchBar from './reusable/headerSearchBar';
import Inventory from './page/inventory';

const Home = () => {
  const [sidebarSelected,setSidebarSelected]=useState(2);

  const renderComponent = () => {
    {/* here component will change based on the selected one  */}
    switch (sidebarSelected) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Inventory />;
      default:
        return <Dashboard />; // Default component
    }
  };

  return (
    <div className='parentHome-pageHolder'>
        <section className='parentHome-Sidebar'>
            <Sidebar sidebarSelected={sidebarSelected} setSidebarSelected={setSidebarSelected}/>
        </section>
      <div className='parentHome-content'>
        <HeaderSearchBar/>
        <div className='dashboardHolder-home'>
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}

export default Home
