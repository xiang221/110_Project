import React, {useState} from 'react'
import Chatbox from '../components/Chatbox'
import Header from '../components/Header'
import Mail from '../components/Mail'
import Mailbox from '../components/Mailbox'
import Mission from '../components/Mission'
import Online from '../components/Online'
import Player from '../components/Player'
import '../styles/game.css'


const Game = ({user, setUser}) => {

  const [mailbox,mailhandler] = useState(false);

  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='left'>
          <Online/>
          <Mail trigger={mailbox} mailhandler={mailhandler}/>
        </div>
        <div className='middle'>
          <Mailbox trigger={mailbox} mailhandler={mailhandler}/>
          <Player/>
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