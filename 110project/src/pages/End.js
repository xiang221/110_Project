import React from 'react'
import { useNavigate } from "react-router-dom";
import end25 from '../picture/end25.png'
import end27 from '../picture/end27.png'
import end28 from '../picture/end28.png'
import end29 from '../picture/end29.png'
import end30 from '../picture/end30.png'
import end31 from '../picture/end31.png'

const End = () => {

    const end = Number(localStorage.getItem('End'));
    const navigate = useNavigate();

    //'../picture/end'+end+'.png'
    if(end===25){var background = end25}
    else if(end===27){var background = end27}
    else if(end===28){var background = end28}
    else if(end===29){var background = end29}
    else if(end===30){var background = end30}
    else if(end===31){var background = end31}

    const toindex = () =>{
        navigate('/');
    }

    window.setTimeout(toindex, 15000);//原為10000


  return (
    <div className='end' style={{backgroundImage: `url(${background})`}} ></div>
  )
}

export default End