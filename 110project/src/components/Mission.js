import React, {useState, useEffect} from 'react'
import '../styles/middle.css'
import playerImg from '../picture/player.png';
import logo from '../picture/missionlogo.png'


const Mission = (props) => {


  let Mission1 = JSON.parse(localStorage.getItem("mission1"));
  let Mission2 = JSON.parse(localStorage.getItem("mission2"));


  return (
    <div className='missioncontainer'>
      <div className='playercontainer'>
        <img src={playerImg} className='playercard' /> 
      </div>
      <div className='mission mission1' onClick={() => props.setChatbox(1)} >
        <img src={logo} className='boxcircle'/>
        <div className='boxtext' >
        <h3>第一回合對話</h3>
        <p>駭客傳送了貼圖</p>
        </div>
      </div>
      <div className='mission mission2' onClick={() => props.setChatbox(2)} style={{display: Mission1!==null?'':'none'}}>
      <img src={logo} className='boxcircle'/>
        <div className='boxtext'>
        <h3>第二回合對話</h3>
        <p>機器人傳送了貼圖</p>
        </div>
      </div>
      <div className='mission mission3' onClick={() => props.setChatbox(3)} style={{display: Mission2!==null?'':'none'}}>
      <img src={logo} className='boxcircle'/>
        <div className='boxtext'>
        <h3>第三回合對話</h3>
        <p>創世神傳送了貼圖</p>
        </div>
      </div>
</div>
)
}

export default Mission