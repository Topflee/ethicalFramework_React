// Meant to be the name and date to start the program

import React from 'react'
import SEO from "../components/seo"

const ParticipantID = () => {
    return (
        <div>
            <SEO title="Login" />
            <label id="pidlabel">Participant ID:</label>
            <input type="text" id="pid" name="pid"></input>

            <button id="login">Login</button>
            
        </div>
    )
}


export default ParticipantID;
