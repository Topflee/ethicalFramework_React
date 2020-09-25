import React, { Component } from 'react';
import '../styles/Survey.css';
import Likert from './LikertScale.js';

export class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likertOptions: {
        question: "Choose your preferred option",
        responses: [
            { value: 1, text: "Far Left"},
            { value: 2, text: "Lean Left" },
            { value: 3, text: "Indifferent" },
            { value: 4, text: "Lean Right" },
            { value: 5, text: "Far Right"},
        ],
        picked: val => {
            console.log(val)
        },
    }
    }
  }

  render() {
    return (
      <React.Fragment>
            <div className="surveyContainer">
              <div className="surveyDescription">
              Welcome to the TRACE Lab Ethical Frameworks Study!
              In this study you will be presented with an Ethical Dilemma and asked to choose an option on the likert scale that you most agree with.
              At the end of the study, you will see a button labeled 'End Session' please click that and read the debriefing form to finish particiating in this study.
              </div>
              <Likert {...this.state.likertOptions} />
            </div>
      </React.Fragment>
    );
  }
}

export default Survey;