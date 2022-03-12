import React from 'react'
import '../styles/game.css'

const Main = () => {
  return (
    <div>
      <div className='header'>
        <div className='circle circle1'></div>
        <div className='circle circle2'></div>
        <div className='circle circle3'></div>
      </div>
        <div class="left">
          <p style="color:#ffffff;">上線玩家</p>
          <div class="onlinePlayer"></div>
          <div class="onlinePlayer"></div>
          <div class="onlinePlayer"></div>
          <div class="onlinePlayer"></div>
          <div class="mail"></div>
        </div>
        <div class="player_image"></div>
        

    </div>
  )
}

export default Main