import React from 'react'
import Header from '../components/Header'
import Mail from '../components/Mail'
import Online from '../components/Online'



const Game = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
      <Online/>
      <Mail/>
      </div>
    </div>
  )
}

export default Game