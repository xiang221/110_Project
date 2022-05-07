import React, {useEffect, useState} from 'react'
import '../styles/popup.css'
import mail from '../picture/mail.png'
/*
const imageMap = {
  1: ''

}
*/
//const image = imageMap[]
const EndList = [
  {
    25: "創世神殞落",
    title:"驚！！！原來，被盜的其實是他....?",
    pic:"./"
  },
  {
    27: "自身難保",
    title:"驚！！！原來，被盜的其實是他....?",
    pic:"./"
  },
  {
    28:"特洛伊木馬",
    title:"驚！！！原來，被盜的其實是他....?",
    pic:"./"
  },
  {
    29:"縱虎歸山",
    title:"感謝您這段時間的參與，我們還想邀請你......",
    pic:"./"
  },
  {
    30:"驅逐內鬼",
    title:"臨時加開的決策會議，需要你的親身相挺",
    pic:"./"
  },
  {
    31:"以牙還牙",
    title:"謝謝你的幫忙，祝你有個美好的一天。",
    pic:"./"
  }
]


//信箱
const Mail = (props) => {
  return (
    <div>
    <img src={mail} className='mail' onClick={()=>props.mailhandler(true)}/>
    </div>
  )
}

//打開後的信箱
const Mailbox = (props) => {

  return (props.trigger)?(
      <div className="openmail">
          <div className="mailheader">
          <h2 className="mailfont">信夾匣</h2>
          </div>
          <div style={{overflowY:'scroll', height: '300px'}}>
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
    <div className='openmail'>
    <div className='mailOne'>
    <button type='button' className='mailTextBtn' onClick={()=>props.mailhandler(false)}>關閉通知</button>
    </div>
    </div>
  )
}

//信件瀏覽
const MailLine = (props) =>{

  const [mailText, openMailText] = useState(0);

  let END = localStorage.getItem('END');

  useEffect(() => {
    console.log("結局為",END);
  }, [END]);


  /*
  
  if(mailText===1){
    <div className="openmail">
    <div className='mailOne'>
    <button type='button' className='mailTextBtn' onClick={()=>props.openMailText(0)}>關閉通知</button>
    </div>
    </div>
  }

*/

  return(
    <>
    <div className='mailline' style={{display:localStorage.getItem('END') === null?'none':''}} >
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午5:40</p> 
      <p>嫌犯揭曉</p>
      </div>
    </div>
    <div className='mailline' style={{display:props.mission>=3?'':'none'}} onClick={()=>openMailText(3)}>
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午5:40</p> 
      <p>真相即將水落石出<br/>揪出壞分子的最後一步</p>
      </div>
    </div>
    <div className='mailline' style={{display:props.mission>=2?'':'none'}} onClick={()=>openMailText(2)} >
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}} >下午5:40</p> 
      <p>案情尚未明朗<br/>被控制的是你、妳，還是他？</p>
      </div>
    </div>
    <div className='mailline' onClick={()=>openMailText(1)} >
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