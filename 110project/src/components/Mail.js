import React from 'react'
import '../styles/popup.css'
import mail from '../picture/mail.png'


const Mail = (props) => {
  return (
    <div>
    <img src={mail} className='mail' onClick={()=>props.mailhandler(true)}/>
    </div>
  )
}

const Mailbox = (props) => {

  return (props.trigger)?(
      <div className="openmail">
          <div className="mailheader">
          <h2 className="mailfont">信夾匣</h2>
          </div>
          <div style={{overflowY:'scroll'}}>
          <MailLine mission={props.mission} setMission={props.setMission}/>
          </div>
          <div className='mailClose'>
          <button className="mailBtn" onClick={()=>props.mailhandler(false)}>關閉信件</button>
          </div>
      </div>   
  ):'';

}


const Mailtext = (props) => {
  return (
    <div className="openmail">
    <div className='mailOne'>
    <button type='button' className='mailTextBtn' onClick={()=>props.mailhandler(false)}>關閉通知</button>
    </div>
    </div>
  )
}

const MailLine = (props) =>{

  return(
    <>
    <div className='mailline' style={{display:props.mission>=3?'':'none'}}>
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午5:40</p> 
      <p>真相即將水落石出<br/>揪出壞分子的最後一步</p>
      </div>
    </div>
    <div className='mailline' style={{display:props.mission>=2?'':'none'}}>
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午5:40</p> 
      <p>案情尚未明朗<br/>被控制的是你、妳，還是他？</p>
      </div>
    </div>
    <div className='mailline'>
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午5:40</p> 
      <p>歡迎加入伊莉特管理團隊<br/> 請閱讀相關說明文件</p>
      </div>
    </div>

    </>
  )
}




export {Mail, Mailbox, Mailtext, MailLine}