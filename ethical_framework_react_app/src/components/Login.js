import React, { Component } from 'react';
import '../styles/Login.css';
import trace from '../images/TRACE_overview.png';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.loginChange = this.loginChange.bind(this);
    }

    loginChange() {
        console.log('login change')
        this.props.onLoginChange(document.getElementById('pid').value);
    }

    render() {
        return (
            <React.Fragment>
                <div className="loginContainer">
                    <img className="traceImage" src={trace} alt='Trace information image'></img>
                    <div className="loginInputContainer">
                        <label id="pidlabel">Participant ID: </label>
                        <input type="text" id="pid" name="pid"></input>
                        <br />
                        <br />
                        <button className="loginButton" onClick={this.loginChange}>Login</button>
                    </div>
                    <br />
                </div>
            </React.Fragment>
        );
    }
}

export default Login;