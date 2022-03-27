import React, {useState} from 'react'
import Popup from './Popup';

const Online = () => {

  const [player1,show1handler] = useState(false);

  return (
    <div className='onlinecontainer'>
    <div className='text'>上線玩家</div>
    <div className='player'>
    <div className='player1' onClick={ ()=> show1handler(true)} data-toggle="modal" data-target="#exampleModalCenter"></div>
    <Popup trigger={player1} show1handler={show1handler}/>
    </div>
    <div className='player'>
    <div className='player2'></div>
    </div>
    <div className='player'>
    <div className='player3'></div>
    </div>
    <div className='player'>
    <div className='player4'></div>
    </div>
    </div>
  )
}

export default Online