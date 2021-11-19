import React from 'react';
import "./sidemenu.css";
import {  LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,} from '@mui/icons-material';
import { Link } from 'react-router-dom';



export default function Sidemenu() {
    return (
        <div className="sidemenu">
            <div className="sidemenuWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyle className="siderbarIcon " />
                            Home 
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="siderbarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp  className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="siderbarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem ">
                            <PermIdentity  className="siderbarIcon" />
                            Users 
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Storefront  className="siderbarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney   className="siderbarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline  className="sidebarIcon" />
                            Mail 
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed  className="sidrbarIcon" />
                            Feedback 
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline   className="sidebarIcon" />
                            Messages
                        </li>
                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline   className="sidebarIcon" />
                            Manage 
                        </li>
                        <li className="sidebarListItem">
                            <Timeline   className="sidebarIcon" />
                            Analytics 
                        </li>
                        <li className="sidebarListItem">
                            <Report   className="sidebarIcon" />
                            Reports
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
