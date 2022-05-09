import React, {useState} from 'react'
import Popup from './Popup';
import player1 from '../picture/player1.png'
import player2 from '../picture/player2.png'
import player3 from '../picture/player3.png'
import player4 from '../picture/player4.png'



const Online = () => {

  const [player1intro,show1handler] = useState(false);
  const [player2intro,show2handler] = useState(false);
  const [player3intro,show3handler] = useState(false);
  const [player4intro,show4handler] = useState(false);

  return (
    <div className='onlinecontainer'>
    <div className='text'>管理團隊</div>
    <div className='player'>
    <img src={player1} className='playerCircle' onClick={ ()=> show1handler(true)} />
    <Popup trigger={player1intro} showhandler={show1handler} pic="player1intro" video="player1"/>
    </div>
    <div className='player'>
    <img src={player2} className='playerCircle' onClick={ ()=> show2handler(true)} />
    <Popup trigger={player2intro} showhandler={show2handler} pic="player2intro" video="player2"/>
    </div>
    <div className='player'>
    <img src={player3} className='playerCircle' onClick={ ()=> show3handler(true)} />
    <Popup trigger={player3intro} showhandler={show3handler} pic="player3intro" video="player3"/>
    </div>
    <div className='player'>
    <img src={player4} className='playerCircle' onClick={ ()=> show4handler(true)} />
    <Popup trigger={player4intro} showhandler={show4handler} pic="player4intro" video="player4"/> 
    </div>
    </div>
  )
}

export default Online