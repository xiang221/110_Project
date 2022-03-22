import React, { useState } from 'react'
import '../styles/middle.css'

const Mission = (props) => {

  /*
  const missionhandler = () =>{
     const [mission, setMission] = useState([null,null,null]);

  }

  //mission 3
  if (props[0]!==null && props[1]!==null){  
    
  }
*/

  return (
    <div className='missioncontainer'>
      <div className='mission mission1'>
        <div className='boxcircle'></div>
        <h3>第一回合對話</h3><br/>
        <p>駭客傳送了貼圖</p>
        <div className='bubble' ></div>
      </div>
      <div className='mission mission2' >
        <div className='boxcircle'></div>
        <h3>第二回合對話</h3><br/>
        <p>機器人傳送了貼圖</p>
      </div>
      <div className='mission mission3'>
        <div className='boxcircle'></div>
        <h3>第三回合對話</h3><br/>
        <p>創世神傳送了貼圖</p>
      </div>
    </div>
  )
}

export default Mission