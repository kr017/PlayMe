
import React from 'react'
import  logo  from "../assets/img/spotify_logo_black.png";
function LoginContainer() {
    return (
        <div className="login">

        <img src={logo} alt="spotify_logo"/>
        <div className="btn">
        <a href="www.google.com" >LOGIN</a>
        </div>
        
        </div>
    )
}

export default LoginContainer
