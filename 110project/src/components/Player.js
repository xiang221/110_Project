import React from 'react';
import playerImg from '../picture/player.png';
import '../styles/middle.css';



const Player = () => {
  return (
    <div>
      <div className='playercontainer'>
        <img src={playerImg} className='playercard' /> 
      </div>
    </div>
  )
}

export default Player