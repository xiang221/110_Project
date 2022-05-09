import React from 'react'
import { useNavigate } from "react-router-dom";

const Intro = () => {

  const navigate = useNavigate();

  const toNext = () =>{
    navigate('/signup');
  }

window.setTimeout(toNext, 22000);


  return (
    <>
    <div className="slider">  
      <div className="animate"></div>  
    </div>  
    </>
  )
}

export default Intro