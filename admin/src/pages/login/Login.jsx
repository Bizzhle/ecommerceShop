import React, {useState} from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../context/action-creators";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }

    return (
        <div className="login">
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick} className="loginButton">
                Login
            </button>

        </div>
    )
}
