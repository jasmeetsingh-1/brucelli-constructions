import React from 'react';
import "./css/headerSection.css";
import searchIcon from "../../assets/header/searchIcon.svg";
import notificationIcon from "../../assets/header/Notification.svg";
import avatar from "../../assets/header/Avatar.svg";

const HeaderSearchBar = () => {
  return (
    <div className='header-sectionHolder'>
        <section className="headerLeft-section">
            <img src={searchIcon} alt="search"/> 
            <input type="text" placeholder='Search product, supplier ,order'/>
        </section>
        <section className="headerRight-section">
            <img src={notificationIcon} alt="notificationIcon" />
            <img src={avatar} alt="Your profile"/>
        </section>
    </div>
  )
}

export default HeaderSearchBar;
