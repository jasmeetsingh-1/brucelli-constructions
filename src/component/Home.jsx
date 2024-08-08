import React from 'react';
import "./css/Home.css";
import Sidebar from './sidebar';
import Dashboard from './page/dashboard';

const Home = () => {
  return (
    <div className='parentHome-pageHolder'>
        <section className='parentHome-Sidebar'>
            <Sidebar/>
        </section>
      <div className='parentHome-content'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Home
