import React, {useState} from 'react'
import Chatbox from '../components/Chatbox'
import Header from '../components/Header'
import {Mail} from '../components/Mail'
import {Mailbox} from '../components/Mail'
import Mission from '../components/Mission'
import Online from '../components/Online'
import '../styles/game.css'
import video from '../picture/backgoundVideo.mp4';


const Game = ({user, setUser}) => {

  const [mailbox,mailhandler] = useState(false);

  return (
    <div>
      <video autoPlay muted loop style={{zIndex:-100, position:'fixed', objectFit:'fill'}} >
        <source src={video} type='video/mp4'/>
      </video> 
        <div className='container'>
          <div className='left'>
            <Online/>
            <Mail trigger={mailbox} mailhandler={mailhandler}/>
          </div>
          <div className='middle'>
            <Mailbox trigger={mailbox} mailhandler={mailhandler}/>
            <Mission/>
          </div>
          <div className='right'>
            <Chatbox/>
          </div>
        </div>
    </div>
  )
}

export default Game