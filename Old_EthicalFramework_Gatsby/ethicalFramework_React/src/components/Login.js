import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"

import "../components/Login.css"
import TRACEimg from '../images/TRACE_overview.png'

const Login = () => {
    return (
        <div>
            <img src={TRACEimg} className="traceimg"/>
            <div className="login-component">
                {/* <SEO title="Login" /> */}
                <label id="pidlabel">Participant ID: </label>
                <input type="text" id="pid" name="pid"></input>
                <br />
                <br />
                <Link to="/Survey" className="button">Login</Link>
            </div>
        </div>
    )
}

export default Login;
