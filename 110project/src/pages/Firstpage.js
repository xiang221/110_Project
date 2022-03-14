import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css'

const Firstpage = () => {
  return (
<<<<<<< Updated upstream
    <div className='backImage'>
       
        <Link to='Secondpage' ><button className='start'></button>
        </Link>
        
    </div>
=======
    <section className='backImage'>
      <Link to="account"><button className='startBtn'>START GAME</button></Link>
    </section>
>>>>>>> Stashed changes
  )
}

export default Firstpage