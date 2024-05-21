import React, { useState } from 'react'
import { rate_career } from '../assests/data'
import { MdOutlineStar } from "react-icons/md";
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CareerRating = () => {
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(rate_career[index])
    let [rating, setRating] = useState([])
    const url = "http://127.0.0.1:8000/rateing"

    const navigate = useNavigate()

    let set_rating = (e, ans) => {
        if (index === rate_career.length - 1) {
            return 0
        }
        const data = {question: question.career, rating: ans,type: "CareerRating"}
        console.log(data)
        axios.post(url, data).then((res) => { console.log(res.data) });
        setIndex(++index)
        setQuestion(rate_career[index])
    }

  return (
    <>
    <div className='container'>
        <h1>quiz app</h1>
        <hr/>
        <h2>{index+1}. {question.career}</h2>
        <h3>{question.discription}</h3>
        <ul className='stars'>
            <li onClick={(e) => {set_rating(e, 1)}}>{<MdOutlineStar />}</li>
            <li onClick={(e) => {set_rating(e, 2)}}>{<MdOutlineStar />}</li>
            <li onClick={(e) => {set_rating(e, 3)}}>{<MdOutlineStar />}</li>
            <li onClick={(e) => {set_rating(e, 4)}}>{<MdOutlineStar />}</li>
            <li onClick={(e) => {set_rating(e, 5)}}>{<MdOutlineStar />}</li>
        </ul>
    </div>
    </>
  )
}

export default CareerRating