// Question Format is a component designed to populate the screen as needed

import React, {Component} from 'react'
import { Link } from "gatsby";
import Likert from "react-likert-scale";
// import xmlData from '../data/questions.xml'
// import XMLParser from 'react-xml-parser'

import LikertScale from "./LikertScale"

const qtracker = [false, false, false, false, false, false, false];
let count = 0;

export default class Survey extends Component {
        // TODO: Render different options/question based on props
        state = {
            quote: "",
            option_uno: "",
            option_dos: "",
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

            // console.log(rando)
            // console.log(qtracker[rando])
            qtracker[rando] = true
            // console.log(qtracker[rando])

            // console.log(data.QuestionBank.Question[rando].$["id"])
            // console.log(
            //     data.QuestionBank.Question[rando].QuestionContent[0]
            // )
            this.setState({
                quote:
                data.QuestionBank.Question[rando].QuestionContent[0],
                option_uno: data.QuestionBank.Question[rando].OptionContent[0]._,
                option_dos: data.QuestionBank.Question[rando].OptionContent[1]._
            })
            console.log(this.state.option_uno)
            console.log(this.state.option_dos)
        }

        // Creates Likert Scale
        likertOptions = {
            // question: "What is your opinion of the President’s performance?",
            responses: [
                { value: 1, text: this.state.option_uno },
                { value: 2, text: "" },
                { value: 3, text: "Indifferent" },
                { value: 4, text: "" },
                { value: 5, text: this.state.option_dos },
            ],
            picked: val => {
                console.log(val)
            },
        }

        render() {
            return (
                <div className="QuestionFormat">
                <div id="questionbox">
                    <p>{this.state.quote}</p>
                    <br />
                    {/* <Likert {...this.likertOptions} /> */}
                    <button id="clickme" onClick={this.handleClick}>
                    Next Questions?
                    </button>
                    <Likert {...this.likertOptions} />
                </div>
                <div id="thankyoubox" style={{ display: "none" }}>
                    Thank you for participating!!
                    <Link to="/Debrief">End Session</Link>
                </div>
                </div>
            )
        }
    }
