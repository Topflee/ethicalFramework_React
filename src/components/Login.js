import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"

const Login = () => {
    return (
        <div>
            <SEO title="Login" />
            <label id="pidlabel">Participant ID:</label>
            <input type="text" id="pid" name="pid"></input>
            <Link to="/Survey">Login</Link>
        </div>
    )
}

export default Login;
