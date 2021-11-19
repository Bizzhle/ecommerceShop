import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings} from '@mui/icons-material';

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <span className="logo">
                        Webshopper
                    </span>
                </div>

                <div className="right">
                    <div className="iconContainer">
                        <NotificationsNone />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="iconContainer">
                        <Language />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="iconContainer">
                        <Settings />
            
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
