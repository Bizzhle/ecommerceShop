import React from 'react';
import "./user.css";
import { Link } from "react-router-dom";
import {CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,} from '@mui/icons-material';


export default function User() {
    return (
        <div className="user">
            <div className="userTitleWrapper">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userCreateButton">Create</button>
                </Link>
            </div>
            <div className="userWrapper">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Detail</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="usershowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="usershowInfoTitle">10.12.1989</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="usershowInfoTitle">+1 123 45678</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="usershowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="usershowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form  className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" placeholder="annabeck" className="userUpdateInput" />
                                </div>
                                <div className="userUpdateItem">
                                    <label htmlFor="username">Full Name</label>
                                    <input type="text" placeholder="anna beck" className="userUpdateInput" />
                                </div>

                                <div className="userUpdateItem">
                                    <label htmlFor="username">Email</label>
                                    <input type="text" placeholder="annabeck@gmail.com" className="userUpdateInput" />
                                </div>
                            
                           
                                <div className="userUpdateItem">
                                    <label htmlFor="username">Phone</label>
                                    <input type="text" placeholder="+1 123 456" className="userUpdateInput" />
                                </div>
                            
                           
                                <div className="userUpdateItem">
                                    <label htmlFor="username">Address</label>
                                    <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img 
                                        className="userUpdateImg"
                                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                        alt="" 
                                    />
                                    <label htmlFor="file">
                                        <Publish className="userUpdateIcon" />

                                    </label>
                                    <input type="file" id="file" style={{ display: "none"}} />
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                
            </div>
        </div>
    )
}
