import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css'

const Firstpage = () => {
  return (
    <section className='backImage'>
      <Link to="./Secondpage"><button className='startBtn'>START GAME</button></Link>
    </section>
  )
}

export default Firstpage