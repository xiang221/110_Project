import React from 'react'
import Chatbox from '../components/Chatbox'
import Header from '../components/Header'
import Mail from '../components/Mail'
import Mission from '../components/Mission'
import Online from '../components/Online'
import Player from '../components/Player'
import '../styles/game.css'


const Game = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='left'>
          <Online/>
          <Mail/>
        </div>
        <div className='middle'>
          <Player/>
          <Mission/>
        </div>
        <div className='right'>
          <Chatbox/>
        </div>
      </div>
    </div>
  )
}

export default Game