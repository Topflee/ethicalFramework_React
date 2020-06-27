// Question Format is a component designed to populate the screen as needed

import React, {Component} from 'react'
import { Link } from "gatsby";
// import xmlData from '../data/questions.xml'
// import XMLParser from 'react-xml-parser'

import LikertScale from "./LikertScale"

const qtracker = [false, false, false, false, false, false, false];
let count = 0;

export default class Survey extends Component {
        // TODO: Render different options/question based on props
        state = {
        quote: "",
        }
        handleClick = () => {
        if (count < 7) {
            count++
            this.readData()
            console.log("count", count)
        } else {
            console.log("here")
            document.getElementById("questionbox").style.display =
            "none"
            document.getElementById("thankyoubox").style.display =
            "block"
        }
        }

        readData = () => {
            // var data = require('xml-loader!../data/questions.xml');
            var data = require("xml-loader!../data/dilemmas.xml")

            var rando = 0
            do {
                rando = Math.floor(Math.random() * 7)
            } while (qtracker[rando] == true)

            console.log(rando)
            console.log(qtracker[rando])
            qtracker[rando] = true
            console.log(qtracker[rando])

            console.log(data.QuestionBank.Question[rando].$["id"])
            console.log(
                data.QuestionBank.Question[rando].QuestionContent[0]
            )
            this.setState({
                quote:
                data.QuestionBank.Question[rando].QuestionContent[0],
            })
            
        }

        // likert = () => {


        // }
        render() {
        return (
            <div className="QuestionFormat">
            <div id="questionbox">
                <p>{this.state.quote}</p>
                <button id="clickme" onClick={this.handleClick}>
                Next Questions?
                </button>
                {/* <LikertScale /> */}
            </div>
            <div id="thankyoubox" style={{ display: "none" }}>
                Thank you for participating!!
                <Link to="/Debrief">End Session</Link>
            </div>
            </div>
        )
        }
    }
