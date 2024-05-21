import React, { useState } from 'react'
import { Data, TestData } from '../assests/data'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewAssessment = () => {
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(Data[index])
    let [answer, setAnswer] = useState('')
    let [management, setManagement] = useState([])
    let [public_service, setPublic_service] = useState([])
    let [science, setScience] = useState([])
    let [adventure, setAdventure] = useState([])
    let [engineering, setEngineering] = useState([])
    let [medicine, setMedicine] = useState([])
    let [sports, setSports] = useState([])
    let [farming, setFarming] = useState([])
    let [result, setResult] = useState(false)
    const url = "http://127.0.0.1:8000/"

    const navigate = useNavigate()

    let get_answer = async (e, ans) => {
        if (index === Data.length - 1) {
            setResult(true)
            return 0
        }
        const data = {question: question.question, answer: ans, type: question.type}
        axios.post(url, data).then((res) => { 
            console.log(res.data)
        });
        setIndex(++index)
        setQuestion(Data[index])
    }

    const to_rating_page = () => {
        navigate("/rate")
    }

  return (
    <>
    <div className='container'>
        <h1>quiz app</h1>
        <hr/>
        {result?<>
        <button onClick={to_rating_page}>Next</button>
        </>:
        <>
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li onClick={(e) => get_answer(e, question.opt1)}>{question.opt1}</li>
            <li onClick={(e) => get_answer(e, question.opt2)}>{question.opt2}</li>
            <li onClick={(e) => get_answer(e, question.opt3)}>{question.opt3}</li>
            <li onClick={(e) => get_answer(e, question.opt4)}>{question.opt4}</li>
            <li onClick={(e) => get_answer(e, question.opt5)}>{question.opt5}</li>
        </ul>
        </>}
        
    </div>
    </>
  )
}

export default NewAssessment