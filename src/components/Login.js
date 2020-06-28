import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"

import "../components/Login.css"

const Login = () => {
    return (
        <div className="login-component">
            <SEO title="Login" />
            <label id="pidlabel">Participant ID:</label>
            <input type="text" id="pid" name="pid"></input>
            {/* <br /> */}
            <Link to="/Survey" className="LoginButton">Login</Link>
        </div>
    )
}

export default Login;
