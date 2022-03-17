import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css'

const Firstpage = () => {
  const navigate = useNavigate();

  const navEventHandler = () => {
      navigate('/secondpage');
      window.location.reload();
  } 

  return (
    <section className='backImage'>
      <button className='startBtn' onClick={navEventHandler}>START GAME</button>
    </section>
  )
}

export default Firstpage