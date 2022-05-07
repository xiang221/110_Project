import React from 'react'
import end25 from '../picture/end25.png'

const End = () => {

    const end = Number(localStorage.getItem('End'));
    let background = end25;


  return (
    <div className='end' style={{backgroundImage: `url('${background}')` }} ></div>
  )
}

export default End