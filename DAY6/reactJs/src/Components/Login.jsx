import React from "react";
import { useNavigate } from "react-router";

function Login()
{   
    let Navigate = useNavigate();

    function handleButton(){
        Navigate('/home');
    }
    return(
        <div>
            <button onClick={handleButton}>Login</button>
        </div>
    )
}

export default Login;
