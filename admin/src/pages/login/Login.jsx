import React, {useState, useEffect} from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../context/action-creators";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";



export const Login = (props) => {
    const { currentUser} = useSelector((state) => state.login)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();



    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
       
    }

    useEffect(() => {
        if (currentUser) {
            history.push("/")
            window.location.reload()
        }
        
    }, [history, currentUser, location.pathname]);

    return (
        <div className="login">
            <div className="wrapper">
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleClick} className="loginButton">
                    Login
                </button>
            </div>
            

        </div>
    )
}
