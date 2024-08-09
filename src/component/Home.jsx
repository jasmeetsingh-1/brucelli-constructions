import React from 'react';
import "./css/Home.css";
import Sidebar from './sidebar';
import Dashboard from './page/dashboard';
import HeaderSearchBar from './reusable/headerSearchBar';

const Home = () => {
  return (
    <div className='parentHome-pageHolder'>
        <section className='parentHome-Sidebar'>
            <Sidebar/>
        </section>
      <div className='parentHome-content'>
        <HeaderSearchBar/>
        <div className='dashboardHolder-home'>
          {/* here component will change based on the selected one  */}
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default Home
