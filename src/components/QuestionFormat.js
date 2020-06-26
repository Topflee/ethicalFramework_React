// Question Format is a component designed to populate the screen as needed

import React, {Component} from 'react'
// import xmlData from '../data/questions.xml'
// import XMLParser from 'react-xml-parser'

const qtracker = [false, false, false, false, false, false, false, false];
let count = 0;

export default class QuestionFormat extends Component {

    handleClick = () => {
        if(count < 8)
        {
            count++;
            this.readData();
            console.log(count);
        }
        else
        {
            console.log('here');
            document.getElementById('questionbox').style.display = "none";
            document.getElementById('thankyoubox').style.display = "block";
        }
    }

    readData = () => {
        var data = require('xml-loader!../data/questions.xml');
        
        var rando = 0;
        do
        {
            rando = Math.ceil(Math.random() * 8);
            
        }while((qtracker[rando - 1] == true));

        console.log(rando);
        console.log(qtracker[rando - 1]);
        qtracker[rando - 1] = true;
        console.log(qtracker[rando - 1]);

        console.log(data.QuestionBank.Question[rando - 1].$['id']);
        console.log(data.QuestionBank.Question[rando - 1].QuestionContent[0]);
    }
    
    render () {

            return (
                <div>
                    <div id="questionbox">
                        <button id="clickme" onClick={this.handleClick}>Click Me</button>
                    </div>
                    <div id="thankyoubox" style={{display:"none"}}>
                        Thank you for participating!!
                    </div>
                </div>
            )
    }
}
