import React, {useState} from 'react'
import Popup from './Popup';

const Online = () => {

  const [player1intro,show1handler] = useState(false);
  const [player2intro,show2handler] = useState(false);
  const [player3intro,show3handler] = useState(false);
  const [player4intro,show4handler] = useState(false);




  return (
    <div className='onlinecontainer'>
    <div className='text'>上線玩家</div>
    <div className='player'>
    <div className='player1' onClick={ ()=> show1handler(true)} ></div>
    <Popup trigger={player1intro} showhandler={show1handler} pic="player1intro"/>
    </div>
    <div className='player'>
    <div className='player2' onClick={ ()=> show2handler(true)} ></div>
    <Popup trigger={player2intro} showhandler={show2handler} pic="player2intro"/>
    </div>
    <div className='player'>
    <div className='player3' onClick={ ()=> show3handler(true)}></div>
    <Popup trigger={player3intro} showhandler={show3handler} pic="player3intro"/>
    </div>
    <div className='player'>
    <div className='player4' onClick={ ()=> show4handler(true)}></div>
    <Popup trigger={player4intro} showhandler={show4handler} pic="player4intro"/> 
    </div>
    </div>
  )
}

export default Online