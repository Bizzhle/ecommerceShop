import React, { useEffect, useState}  from 'react'
import "./widgetsm.css";
import { Visibility } from "@mui/icons-material";
import { userRequest } from '../../requestMethods';

export default function WidgetSm() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
            try {const res = await userRequest.get("users/?new=true")
                setUsers(res.data)
            } catch (err) {}
        }
        getUsers();
    }, []);
    return (
        <div className="widgetSm">
            <h3 className="widgetSmTitle">New join members</h3>
            <ul className="widgetSmList">
                {users.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                    <img className="widgetSmImg" src={user.img || 
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
                    <div className="widgetSmuser">
                    <span className="widgetSmUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                    </button>
                    </li>
                ))}
               
                
            </ul>
        </div>
    )
}
