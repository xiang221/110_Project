import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css'

const Firstpage = () => {
  return (
    <section class="backImage">
      <Link to="./Firstpage.js"><button class="start">START GAME</button></Link>
    </section>
  )
}

export default Firstpage