import React from 'react'
import '../styles/popup.css'


const Mail = (props) => {
  return (
    <div>
    <div className='mail' onClick={()=>props.mailhandler(true)}></div>

    </div>
  )
}

const Mailbox = (props) => {

  return (props.trigger)?(
      <div className="openmail">
          <div className="mailheader">
          <h2 className="mailfont">信夾匣</h2>
          </div>
          <div className='mailline'>
              <div className='mailcircle'></div>
              <div className='mailtext'>
              <h3 style={{display:'inline'}}>東方哈拉行銷團隊</h3>
              <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午5:40</p> 
              <p>恭喜中獎！特別為您準備的驚喜，<br/>讓我們迎接這榮耀的時刻</p>
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



export {Mail, Mailbox, Mailtext}