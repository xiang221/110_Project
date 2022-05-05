import React, {useState} from 'react'
import '../styles/middle.css'
import playerImg from '../picture/player.png';

const Mission = (props) => {

  console.log('missionprops',props.mission);


  
  return (
    <div className='missioncontainer'>
      <div className='playercontainer'>
        <img src={playerImg} className='playercard' /> 
      </div>
      <div className='mission mission1' onClick={() => props.setChatbox(1)}>
        <div className='boxcircle'></div>
        <div className='boxtext' >
        <h3>第一回合對話</h3>
        <p>駭客傳送了貼圖</p>
        </div>
      </div>
      <div className='mission mission2' onClick={() => props.setChatbox(2)} style={{display:props.mission>=2?'':'none'}}>
        <div className='boxcircle'></div>
        <div className='boxtext'>
        <h3>第二回合對話</h3>
        <p>機器人傳送了貼圖</p>
        </div>
      </div>
      <div className='mission mission3' onClick={() => props.setChatbox(3)} style={{display:props.mission>=3?'':'none'}}>
        <div className='boxcircle'></div>
        <div className='boxtext'>
        <h3>第三回合對話</h3>
        <p>創世神傳送了貼圖</p>
        </div>
      </div>
</div>
)
}

export default Mission