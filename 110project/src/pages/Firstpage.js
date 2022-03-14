import React from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css'

const Firstpage = () => {
  return (
    <div className='backImage'>
       
        <Link to='Secondpage' ><button className='start'></button>
        </Link>
        
    </div>
  )
}

export default Firstpage