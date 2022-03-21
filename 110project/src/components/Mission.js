import React from 'react'
import '../styles/middle.css'

const Mission = () => {
  return (
    <div className='missioncontainer'>
      <div className='mission'>
        <div className='boxcircle'></div>
        <h3>第一回合對話</h3><br/>
        <p>駭客傳送了貼圖</p>
      </div>
      <div className='mission'>
        <div className='boxcircle'></div>
        <h3>第二回合對話</h3><br/>
        <p>機器人傳送了貼圖</p>
      </div>
      <div className='mission'>
        <div className='boxcircle'></div>
        <h3>第三回合對話</h3><br/>
        <p>創世神傳送了貼圖</p>
      </div>
    </div>
  )
}

export default Mission