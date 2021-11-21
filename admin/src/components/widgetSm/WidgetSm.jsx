import React, { useEffect, useState}  from 'react'
import "./widgetsm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <h3 className="widgetSmTitle">New join members</h3>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src={
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
                <div className="widgetSmuser">
                    <span className="widgetSmUsername">user</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
                </li>
                
            </ul>
        </div>
    )
}
