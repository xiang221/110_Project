import React from 'react'
import { useNavigate } from "react-router-dom";
import end25 from '../picture/end25.png'

const End = () => {

    const end = Number(localStorage.getItem('End'));
    const navigate = useNavigate();
    console.log('end'+end);
    let background = end25;

    const toindex = () =>{
        navigate('/');
    }

    window.setTimeout(toindex, 10000);


  return (
    <div className='end' style={{backgroundImage: `url('${background}')` }} ></div>
  )
}

export default End