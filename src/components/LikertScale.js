import React from 'react'
import Likert from "react-likert-scale";

export default () => {
  // TODO: Render different options/question based on props
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     option_uno: props.option_uno,
  //     option_dos: props.option_dos
  //   };
  // }
  
  const likertOptions = {
    question: "What is your opinion of the President’s performance?",
    responses: [
      { value: 1, text: this.state.option_uno },
      { value: 2, text: "Poor" },
      { value: 3, text: "Indifferent" },
      { value: 4, text: "Good" },
      { value: 5, text: this.state.option_dos },
    ],
    picked: val => {
      console.log(val)
    },
  }
  return <Likert {...likertOptions} />
}
