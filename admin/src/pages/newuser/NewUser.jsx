import React from 'react'
import "./newuser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">NewUser</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="name" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="name surname" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="name@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="+1 123 4567" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="New yourk" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>
                    
                </div>
                <button className="newUserButton">Create</button>
            </form>
            
        </div>
    )
}
