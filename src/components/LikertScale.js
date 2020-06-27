import React from 'react'
import Likert from "react-likert-scale";

export default () => {
  // TODO: Render different options/question based on props
  const likertOptions = {
    question: "What is your opinion of the President’s performance?",
    responses: [
      { value: 1, text: "Abysmal" },
      { value: 2, text: "Poor" },
      { value: 3, text: "Average" },
      { value: 4, text: "Good" },
      { value: 5, text: "Most Excellent, Ted" },
    ],
    picked: val => {
      console.log(val)
    },
  }
  return <Likert {...likertOptions} />
}
