import React from 'react'
import '../styles/middle.css'
import playerImg from '../picture/player.png';

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
      <div className='playercontainer'>
        <img src={playerImg} className='playercard' /> 
      </div>
      <div className='mission mission1'>
        <div className='boxcircle'></div>
        <div className='boxtext'>
        <h3>第一回合對話</h3>
        <p>駭客傳送了貼圖</p>
        </div>
        <div className='bubble' ></div>
      </div>
      <div className='mission mission2' >
        <div className='boxcircle'></div>
        <div className='boxtext'>
        <h3>第二回合對話</h3>
        <p>機器人傳送了貼圖</p>
        </div>
      </div>
      <div className='mission mission3'>
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