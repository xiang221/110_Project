import React, {useState, useEffect} from 'react'
import Chatbox0 from '../components/Chatbox0'
import Chatbox1 from '../components/Chatbox1'
import Chatbox2 from '../components/Chatbox2'
import Chatbox3 from '../components/Chatbox3'
import Header from '../components/Header'
import {Mail} from '../components/Mail'
import {Mailbox} from '../components/Mail'
import Mission from '../components/Mission'
import Online from '../components/Online'
import '../styles/game.css'
import video from '../picture/backgoundVideo.mp4';
import {Mailtext} from '../components/Mail'

const Game = ({user, setUser}) => {

  const [mailbox,mailhandler] = useState(false);
  const [chosenChatbox,setChatbox] = useState(0);
  let [mission, setMission] = useState(0);
  


  let mission1 = localStorage.getItem('mission');
  let mission2 = localStorage.getItem('mission2');
  let JumpFish = localStorage.getItem('JumpFish');

  useEffect(()=>{
    //console.log('chatbox',chosenChatbox)
    //console.log(localStorage.getItem('mission1'))
    if(JumpFish!==null){
    setChatbox(1)
    }
  },[JumpFish])




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
            <Mailbox trigger={mailbox} mailhandler={mailhandler} mission={mission} setMission={setMission}/>
            <Mission chosen={chosenChatbox} setChatbox={setChatbox} mission={mission} setMission={setMission}/>
          </div>
          <div className='right'>
            {chosenChatbox===0 && <Chatbox0 mission={mission} setMission={setMission}/>}
            {chosenChatbox===1 && <Chatbox1 mission={mission} setMission={setMission}/>}
            {chosenChatbox===2 && <Chatbox2 mission={mission} setMission={setMission}/>}
            {chosenChatbox===3 && <Chatbox3/>}
          </div>
      </div>
    </div>
  )
}

export default Game