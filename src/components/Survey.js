// Question Format is a component designed to populate the screen as needed

import React, {Component} from 'react'
import { Link } from "gatsby";
import Likert from "react-likert-scale";
// import xmlData from '../data/questions.xml'
// import XMLParser from 'react-xml-parser'

import LikertScale from "./LikertScale"
import './Survey.css'

const qtracker = [false, false, false, false, false, false, false];
let count = 0;

export default class Survey extends Component {
        // TODO: Render different options/question based on props
        state = {
            quote: "Welcome to the TRACE Lab Ethical Frameworks Study! \n \
                    In this study you will be presented with a Ethical Dilemma and asked to choose an option on the likert scale that you most agree with.\
                    At the end of the study, you will see a button labeled 'End Session' please click that and read the debriefing form to finish particiating in this study.",
            likertOptions: {
                question: "Choose your preferred option",
                responses: [
                    { value: 1, text: "Strongly agree with Option 1" },
                    { value: 2, text: "Leaning toward Option 1" },
                    { value: 3, text: "Indifferent" },
                    { value: 4, text: "Leaning toward Option 2" },
                    { value: 5, text: "Strongly agree with Option 2" },
                ],
                picked: val => {
                    console.log(val)
                },
            }
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

            qtracker[rando] = true

            this.setState({
                quote:
                data.QuestionBank.Question[rando].QuestionContent[0],
                // option_uno: data.QuestionBank.Question[rando].OptionContent[0]._,
                // option_dos: data.QuestionBank.Question[rando].OptionContent[1]._

                likertOptions: {
                    question: "Choose your preferred option",
                    responses: [
                        { value: 1, text: data.QuestionBank.Question[rando].OptionContent[0]._ },
                        { value: 2, text: "Lean Left" },
                        { value: 3, text: "Indifferent" },
                        { value: 4, text: "Lean Right" },
                        { value: 5, text: data.QuestionBank.Question[rando].OptionContent[1]._ },
                    ],
                    picked: val => {
                        console.log(val)
                    },
                }
            })
        }
        

        render() {
            return (
                <div className="QuestionFormat">
                <div id="questionbox">
                    <p>{this.state.quote}</p>
                    <br />
                    <Likert {...this.state.likertOptions} />
                    <br />
                    <button id="clickme" onClick={this.handleClick}>
                    Submit
                    </button>
                </div>
                <div id="thankyoubox" style={{ display: "none" }}>
                    Thank you for participating!!
                    <br />
                    <br />
                    <Link to="/Debrief" className="debrief-button">End Session</Link>
                </div>
                </div>
            )
        }
    }
