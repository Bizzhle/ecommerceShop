import React, {useState} from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings, Menu} from '@mui/icons-material';

export default function TopBar({openSidemenu}) {
   

    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="left">
                    <span className="leftMenu">
                        <Menu className="menu-icon" onClick={openSidemenu} />

                    </span>
                    <span className="logo">
                        Webshopper
                    </span>
                </div>

                <div className="right">
                    {/* <div className="iconContainer">
                        <NotificationsNone />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="iconContainer">
                        <Language />
                        <span className="iconBadge">2</span>
                    </div> */}
                    <div className="iconContainer">
                        <Settings />
            
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
