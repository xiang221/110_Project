import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/index.css'

const Firstpage = () => {
  const navigate = useNavigate();

  const navEventHandler = () => {
      navigate('/secondpage');
      localStorage.clear(); 
      window.location.reload();
  } 

  return (
    <section className='backImage'>
      <button className='startBtn' onClick={navEventHandler}>START GAME</button>
    </section>
  )
}

export default Firstpage