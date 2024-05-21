import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TestData, TestMan } from '../assests/data'
import { type } from '@testing-library/user-event/dist/type'

const Connect = () => {
  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(TestMan[index])
  let [result, setResult] = useState(false)
  const url = "http://127.0.0.1:8000/"
  
  const get_answer = async (e, ans) => {
    if (index === TestMan.length - 1) {
      setResult(true)
      return 0
    }
    if (question.type === "management") {
      const data = {question: question.question, answer: ans , type: question.type , email: "nigga@email.com"}
      
      await axios.post(url, data)
    }
    setIndex(prevIndex => prevIndex + 1)
    setQuestion(TestMan[index + 1])
  }

  return (
    <div className='container'>
      <h1>quiz app</h1>
      <hr />
      {result ? (
        <>
          <button>Next</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li onClick={(e) => get_answer(e, question.opt1)}>{question.opt1}</li>
            <li onClick={(e) => get_answer(e, question.opt2)}>{question.opt2}</li>
            <li onClick={(e) => get_answer(e, question.opt3)}>{question.opt3}</li>
            <li onClick={(e) => get_answer(e, question.opt4)}>{question.opt4}</li>
            <li onClick={(e) => get_answer(e, question.opt5)}>{question.opt5}</li>
          </ul>
        </>
      )}
    </div>
  )
}

export default Connect
