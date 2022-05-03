import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/index.css'
import firstVideo from '../picture/gameOpening.mp4';


const Firstpage = () => {
  const navigate = useNavigate();


  return (
    <div className='indexContainer'>
    <video autoPlay muted loop style={{ verticalAlign:'bottom'}}>
    <source src={firstVideo} type='video/mp4'/>
    </video>
    </div>
  )
}

export default Firstpage