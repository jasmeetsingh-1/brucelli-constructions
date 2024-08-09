import React, { useState } from 'react';
import "./css/sidebar.css";

import settings from "../assets/Settings.svg";
import logout from "../assets/Log Out.svg";

const Sidebar = ({sidebarSelected,setSidebarSelected}) => {
    // { label: "Dashboards", value: 1 },
    // { label: "Inventory", value: 2 },
    // { label: "Contractors", value: 3 },
    // { label: "Purchase Orders", value: 4 },
    // { label: "Manage Store", value: 5 },
    // { label: "Reports", value: 6 }

  return (
    <div className="sidebar-mainHolder">
        <div>
            <section className="sidebar-logo-holder">
                Logo
            </section>
            <section className="sidebar-content-holder">
                <ul>
                    <li className={sidebarSelected === 1 ? "selectedli-sidebar":""} onClick={()=>{setSidebarSelected(1)}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 21H5C3.89543 21 3 20.1046 3 19V12.2969C3 11.7852 3.19615 11.2929 3.54809 10.9215L10.5481 3.53257C11.3369 2.69989 12.663 2.69989 13.4519 3.53257L20.4519 10.9215C20.8038 11.2929 21 11.7852 21 12.2969V19C21 20.1046 20.1046 21 19 21H14M10 21V15.5C10 15.2239 10.2239 15 10.5 15H13.5C13.7761 15 14 15.2239 14 15.5V21M10 21H14" stroke="#5D6679" stroke-width="1.5"/>
                        </svg>
                        Dashboard
                    </li>
                    <li className={sidebarSelected === 2 ? "selectedli-sidebar":""} onClick={()=>{setSidebarSelected(2)}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0107 15.5663L22.0099 15.5633L2.68092 3.78044C2.19418 3.91946 1.89305 4.40618 2.03205 4.89275L1.98397 4.90648C1.98397 4.90648 1.98397 4.90649 1.98397 4.90649C2.13052 5.41957 2.66731 5.71244 3.15649 5.59013L5.05553 5.11528L9.05149 19.8289C9.05154 19.829 9.05158 19.8292 9.05162 19.8294C9.10596 20.0454 9.32165 20.1488 9.52916 20.0971L9.5302 20.0968L10.5096 19.8297C11.0178 20.8703 12.2319 21.4433 13.4001 21.1165C14.5687 20.8124 15.3213 19.7232 15.2475 18.5568L21.1847 16.992C21.8181 16.8696 22.1771 16.1911 22.0107 15.5663L22.0107 15.5663ZM5.69517 4.57863L5.69525 4.57861L5.69435 4.57593C5.64251 4.42057 5.48703 4.28683 5.3225 4.28683H5.25299V4.28535L5.24109 4.28827L2.97008 4.84449L2.97007 4.84445L2.96825 4.84497C2.90005 4.86444 2.84719 4.85279 2.80848 4.82734C2.76862 4.80114 2.7395 4.75741 2.72618 4.70655C2.69936 4.60417 2.73871 4.49141 2.85649 4.45447L6.21414 3.60938L9.86253 17.0483C9.86257 17.0485 9.86261 17.0487 9.86265 17.0488C9.91699 17.2648 10.1327 17.3683 10.3402 17.3165L10.3406 17.3164L10.8069 17.1955C10.3549 17.7407 10.1769 18.4624 10.2718 19.1303L9.69165 19.2704L5.69517 4.57863ZM11.0945 19.2925L11.0944 19.2924C10.8015 18.3462 11.3419 17.3784 12.2876 17.1308L12.2881 17.1306C13.2795 16.8603 14.2476 17.5142 14.4274 18.4132L14.4274 18.4132L14.4276 18.4141C14.6297 19.3354 14.0464 20.1691 13.1883 20.4177C12.2867 20.6655 11.3643 20.1695 11.0945 19.2925ZM13.6321 16.4619C14.2558 16.2964 14.9235 16.1196 15.6116 15.9374C17.3833 15.4682 19.2902 14.9631 20.9298 14.5249L21.2644 15.7743L21.2645 15.7745C21.327 16.004 21.2024 16.2305 20.9755 16.2926L13.6321 16.4619ZM18.7252 14.3126L10.5024 16.4885L8.74419 10.0267L16.967 7.85081L18.7252 14.3126ZM7.65505 6.01763L11.915 4.88463L12.7928 8.14825L8.53271 9.28125L7.65505 6.01763Z" fill="#5D6679" stroke="#5D6679" stroke-width="0.1"/>
                        </svg>
                        Inventory
                    </li>
                    <li className={sidebarSelected === 3 ? "selectedli-sidebar":""} onClick={()=>{setSidebarSelected(3)}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 2C6.48613 2 2 6.48613 2 11.9999C2 14.4652 2.89843 16.7231 4.38279 18.4682C4.4018 18.4975 4.4236 18.5252 4.44906 18.5507C4.45482 18.5564 4.46127 18.5601 4.46702 18.5655C6.30174 20.6677 8.99734 21.9997 12 21.9997C15.0027 21.9997 17.6982 20.6677 19.533 18.5655C19.5387 18.5603 19.5455 18.5562 19.5509 18.5507C19.5764 18.5252 19.5984 18.4971 19.6172 18.4682C21.1016 16.7229 22 14.465 22 11.9999C22 6.48613 17.5139 2 12.0001 2H11.9999ZM11.9999 20.9999C9.44414 20.9999 7.13567 19.9274 5.49595 18.2109L6.18095 17.5259C6.84273 16.8643 7.72232 16.4998 8.65758 16.4998H15.3424C16.2776 16.4998 17.1572 16.8643 17.8188 17.5257L18.5038 18.2107C16.8642 19.9272 14.5557 20.9999 11.9998 20.9999H11.9999ZM19.1561 17.449L18.5259 16.8188C17.6754 15.9683 16.5449 15.4998 15.3424 15.4998H8.65758C7.455 15.4998 6.32465 15.9683 5.47417 16.8188L4.84395 17.449C3.68829 15.9354 2.99999 14.0468 2.99999 12C2.99999 7.03751 7.03719 3.00004 11.9999 3.00004C16.9624 3.00004 20.9999 7.03724 20.9999 12C20.9999 14.0469 20.3116 15.9355 19.1561 17.449H19.1561ZM11.9999 6.50001C9.79449 6.50001 7.99986 8.29441 7.99986 10.5001C7.99986 12.7055 9.79427 14.5001 11.9999 14.5001C14.2054 14.5001 16 12.7057 16 10.5001C16 8.29441 14.2054 6.50001 11.9999 6.50001ZM11.9999 13.5C10.3457 13.5 8.99999 12.1542 8.99999 10.5C8.99999 8.84579 10.3457 7.50009 11.9999 7.50009C13.6541 7.50009 14.9999 8.84584 14.9999 10.5C14.9999 12.1543 13.6541 13.5 11.9999 13.5Z" fill="#5D6679"/>
                        </svg>
                        Contractors
                    </li>
                    <li className={sidebarSelected === 4 ? "selectedli-sidebar":""} onClick={()=>{setSidebarSelected(4)}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.187 21.3774L7.18698 21.3774L7.18863 21.379C7.21922 21.4096 7.25378 21.4366 7.2959 21.4553C7.33846 21.4742 7.38353 21.4824 7.43226 21.4824H21.753C21.8498 21.4824 21.9382 21.4497 22.0028 21.3852C22.0673 21.3207 22.1 21.2323 22.1 21.1354L22.0998 6.81464C22.0998 6.68688 22.0357 6.57067 21.9191 6.52621L15.2813 2.59261C15.2551 2.55755 15.2202 2.53728 15.1847 2.52717C15.1493 2.51707 15.1121 2.51714 15.0901 2.51718L15.0863 2.51719H2.24698C2.15022 2.51719 2.06177 2.54986 1.99725 2.61434C1.93273 2.67883 1.9 2.76729 1.9 2.86417V15.7035C1.9 15.7521 1.90821 15.7972 1.92709 15.8397C1.94561 15.8815 1.97221 15.9158 2.0025 15.9463C2.00279 15.9465 2.00307 15.9468 2.00335 15.9471L7.187 21.3774ZM21.406 20.7884H7.77908V7.16148H12.5173V10.7651C12.5173 10.8619 12.5499 10.9503 12.6144 11.0149C12.6789 11.0794 12.7674 11.1121 12.8643 11.1121H16.0741C16.1709 11.1121 16.2593 11.0794 16.3239 11.015C16.3884 10.9505 16.4211 10.862 16.4211 10.7651L16.4209 7.16148H21.406L21.406 20.7884ZM13.2111 10.4182V7.16157H15.7272V10.4182H13.2111ZM11.5402 3.21093H14.9849L20.4748 6.46758H16.4253L11.5402 3.21093ZM12.9685 6.46775L8.08336 3.21108L10.2908 3.21093L15.1759 6.4676L12.9685 6.46775ZM7.54007 6.46775L3.28304 3.21092L6.83396 3.21093L11.7191 6.46759L7.54007 6.46775ZM2.59407 15.5645V3.56002L7.08535 6.98753V20.2685L2.59407 15.5645Z" fill="#5D6679" stroke="#5D6679" stroke-width="0.2"/>
                        </svg>       
                        Purchase Orders
                    </li>
                    <li className={sidebarSelected === 5 ? "selectedli-sidebar":""} onClick={()=>{setSidebarSelected(5)}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0238 17.855H9.64976C9.55821 17.855 9.49707 17.9161 9.49707 18.0077C9.49707 18.0992 9.55821 18.1604 9.64976 18.1604H11.0238C11.1154 18.1604 11.1765 18.0992 11.1765 18.0077C11.1765 17.9313 11.1003 17.855 11.0238 17.855Z" fill="#5D6679"/>
                        <path d="M19.6778 2.84641C19.228 2.39664 18.6305 2.1492 17.9939 2.1492L6.56664 2.14893C5.93011 2.14893 5.33285 2.39636 4.88276 2.84613C4.43298 3.29591 4.18555 3.89346 4.18555 4.53002V19.7678C4.18555 20.4044 4.43298 21.0016 4.88276 21.4517C5.33253 21.9015 5.93008 22.1489 6.56664 22.1489H17.9954C18.6319 22.1489 19.2291 21.9015 19.6792 21.4517C20.129 21.0019 20.3764 20.4044 20.3764 19.7678V4.53002C20.3753 3.89376 20.1279 3.29623 19.6781 2.84642L19.6778 2.84641ZM19.4234 19.7686C19.4234 20.5566 18.783 21.197 17.9951 21.197H6.56633C5.77836 21.197 5.13796 20.5566 5.13796 19.7686V4.53008C5.13796 3.74211 5.77839 3.10171 6.56633 3.10171H17.9951C18.783 3.10171 19.4234 3.74214 19.4234 4.53008V19.7686Z" fill="#5D6679"/>
                        <path d="M10.0389 10.86L8.47085 12.4284L7.85547 11.813C7.66982 11.6274 7.36756 11.6274 7.1822 11.813C6.99656 11.9987 6.99656 12.301 7.1822 12.4863L8.1349 13.439C8.2248 13.5289 8.34532 13.5787 8.47196 13.5787C8.59859 13.5787 8.71939 13.5289 8.80901 13.439L10.7141 11.5339C10.8998 11.3483 10.8998 11.046 10.7141 10.8606C10.5285 10.6747 10.2243 10.6736 10.0389 10.8601L10.0389 10.86Z" fill="#5D6679"/>
                        <path d="M10.0389 15.6211L8.47085 17.1892L7.85547 16.5738C7.66982 16.3882 7.36756 16.3882 7.1822 16.5738C6.99656 16.7595 6.99656 17.0617 7.1822 17.2471L8.1349 18.1998C8.2248 18.2897 8.34532 18.3395 8.47196 18.3395C8.59859 18.3395 8.71939 18.2897 8.80901 18.1998L10.7141 16.2947C10.8998 16.109 10.8998 15.8068 10.7141 15.6214C10.5285 15.4355 10.2243 15.4355 10.0389 15.6211L10.0389 15.6211Z" fill="#5D6679"/>
                        <path d="M10.0389 6.09746L8.47085 7.66556L7.85547 7.05018C7.66982 6.86454 7.36756 6.86454 7.1822 7.05018C6.99656 7.23583 6.99656 7.53809 7.1822 7.72345L8.1349 8.67615C8.2248 8.76605 8.34532 8.81587 8.47196 8.81587C8.59859 8.81587 8.71939 8.76605 8.80901 8.67615L10.7141 6.77103C10.8998 6.58539 10.8998 6.28313 10.7141 6.09776C10.5285 5.91212 10.2243 5.91212 10.0389 6.09749L10.0389 6.09746Z" fill="#5D6679"/>
                        <path d="M17.0428 11.6729H12.2806C12.0173 11.6729 11.8047 11.8863 11.8047 12.1488C11.8047 12.4112 12.0182 12.6247 12.2806 12.6247H17.0428C17.3061 12.6247 17.5187 12.4112 17.5187 12.1488C17.5187 11.8855 17.3052 11.6729 17.0428 11.6729Z" fill="#5D6679"/>
                        <path d="M17.0428 17.3872H12.2806C12.0173 17.3872 11.8047 17.6007 11.8047 17.8631C11.8047 18.1256 12.0182 18.3391 12.2806 18.3391H17.0428C17.3061 18.3391 17.5187 18.1256 17.5187 17.8631C17.5187 17.6007 17.3052 17.3872 17.0428 17.3872Z" fill="#5D6679"/>
                        <path d="M17.0428 6.91064H12.2806C12.0173 6.91064 11.8047 7.12412 11.8047 7.38658C11.8047 7.64904 12.0182 7.86252 12.2806 7.86252H17.0428C17.3061 7.86252 17.5187 7.64904 17.5187 7.38658C17.5187 7.12412 17.3052 6.91064 17.0428 6.91064Z" fill="#5D6679"/>
                        <path d="M11.0238 18.9233H9.64976C9.55821 18.9233 9.49707 18.9845 9.49707 19.076C9.49707 19.1676 9.55821 19.2287 9.64976 19.2287H11.0238C11.1154 19.2287 11.1765 19.1676 11.1765 19.076C11.1765 18.9845 11.1003 18.9233 11.0238 18.9233Z" fill="#5D6679"/>
                        </svg>
                        Manage Store
                    </li>
                    <li className={sidebarSelected === 6 ? "selectedli-sidebar":""} onClick={()=>{setSidebarSelected(6)}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4445 20.8889V12.8039C16.4445 12.5008 16.7022 12.2551 17.0001 12.2551C17.3068 12.2551 17.5556 12.4946 17.5556 12.8039V20.8889H18.675C19.889 20.8889 20.889 19.8918 20.889 18.6749V5.32498C20.889 4.11098 19.8919 3.11099 18.675 3.11099H5.32512C4.11113 3.11099 3.11113 4.10806 3.11113 5.32498V18.6749C3.11113 19.8889 4.1082 20.8889 5.32512 20.8889H6.44454V15.5903C6.44454 15.2776 6.70221 15.0239 7.00007 15.0239C7.30685 15.0239 7.5556 15.2703 7.5556 15.5903V20.8889H9.77784V10.0379C9.77784 9.73333 10.0355 9.48652 10.3334 9.48652C10.6403 9.48652 10.889 9.72424 10.889 10.0379V20.8889H13.1111V5.88611C13.1111 5.58087 13.3689 5.33337 13.6668 5.33337C13.9736 5.33337 14.2223 5.58114 14.2223 5.88611V20.8889H16.4445ZM2 5.32505C2 3.4887 3.5032 2 5.32505 2H18.675C20.5113 2 22 3.5032 22 5.32505V18.675C22 20.5113 20.4968 22 18.675 22H5.32505C3.4887 22 2 20.4968 2 18.675V5.32505Z" fill="#5D6679"/>
                        </svg>
                        Reports
                    </li>
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
