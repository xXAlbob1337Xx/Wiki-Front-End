import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function login(props){
    const { state } = useLocation();
    let error = "";
    if(state != null){
        error = state.error;
    }
    let navigate = useNavigate();
    const [user, setUser ] = useState();
    const [password, setPassword ] = useState();

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const sendData = () => {
        const API_URL ="https://takeee.ntigskovde.se/login.php?username="+user+"&password="+password;
        sendit(API_URL);
    }
    {/*}
    return(
        <div className="loginForm">
            <div className="error">{error}</div>
            <h1 className="header"> Login </h1>
            <div><label>Username: <input type="text" value={user} onChange={handleChangeUser}></input></label></div>
            <div><label>Password: <input type="password" value={password} onChange={handleChangePassword}></input></label></div>
            <button onClick={() => sendData()}>Logga in</button>
        </div>
    )*/}
}