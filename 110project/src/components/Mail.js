import React, {useEffect, useState} from 'react'
import '../styles/popup.css'
import mail from '../picture/mail.png'
import mail1 from '../picture/mail1.png'
import mail2 from '../picture/mail2.png'
import mail3 from '../picture/mail3.png'
import mail25 from '../picture/mail25.png'
import mail27 from '../picture/mail27.png'
import mail28 from '../picture/mail28.png'
import mail29 from '../picture/mail29.png'
import mail30 from '../picture/mail30.png'
import mail31 from '../picture/mail31.png'


const EndList = {
  25: "創世神殞落",
  27: "自身難保",
  28: "特洛伊木馬",
  29: "縱虎歸山",
  30: "驅逐內鬼",
  31: "以牙還牙"
}

console.log(EndList[1]);

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

  const [mailText, openMailText] = useState(0);
  const [url,setUrl] = useState('');

  useEffect(() => {
    console.log("狀態改變")
    if(mailText===1){ setUrl(mail1);}
    else if(mailText===2){ setUrl(mail2);}
    else if(mailText===3){ setUrl(mail3);}
    else if(mailText===25){ setUrl(mail25);}
    else if(mailText===27){ setUrl(mail27);}
    else if(mailText===28){ setUrl(mail28);}
    else if(mailText===29){ setUrl(mail29);}
    else if(mailText===30){ setUrl(mail30);}
    else if(mailText===31){ setUrl(mail31);}
  },[mailText])

  return (props.trigger)?(
      <div className="openmail">
        {mailText===0?(
          <>
          <div className="mailheader">
          <h2 className="mailfont">信夾匣</h2>
          </div>
          <div style={{overflowY:'scroll', height: '300px'}}>
          <MailLine mission={props.mission} setMission={props.setMission} mailText={mailText} openMailText={openMailText}/>
          </div>
          <div className='mailClose'>
          <button className="mailBtn" onClick={()=>props.mailhandler(false)}>關閉信件</button>
          </div>
          </>
        ):(
          <div className='mailOne' style={{ backgroundImage: `url(${url})`}}>
          <button type='button' className='mailTextBtn' onClick={()=>openMailText(0)}>關閉通知</button>
          </div>
        )}
      </div>   
  ):'';

}


//信件瀏覽
const MailLine = (props) =>{


  let END = Number(localStorage.getItem('End'));
  let Mission1 = JSON.parse(localStorage.getItem("mission1"));
  let Mission2 = JSON.parse(localStorage.getItem("mission2"));

  
  useEffect(() => {
    console.log("記錄到mission1")
    props.openMailText(2);
  }, [Mission1]);

  useEffect(() => {
    console.log("記錄到mission2")
    props.openMailText(3);
  }, [Mission2]);

  useEffect(() => {
    console.log("結局為",END);
    props.openMailText(END);
  }, [END]);


  return(
    <>
    <div className='mailline' style={{display:localStorage.getItem('End') === null?'none':''}} onClick={()=>props.openMailText(END)} >
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午5:40</p> 
      <p>嫌犯揭曉</p>
      </div>
    </div>
    <div className='mailline' style={{display:Mission2!==null?'':'none'}} onClick={()=>props.openMailText(3)}>
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>上午10:00</p> 
      <p>真相即將水落石出<br/>揪出壞分子的最後一步</p>
      </div>
    </div>
    <div className='mailline' style={{display:Mission1!==null?'':'none'}} onClick={()=>props.openMailText(2)} >
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}} >上午7:00</p> 
      <p>案情尚未明朗<br/>被控制的是你、妳，還是他？</p>
      </div>
    </div>
    <div className='mailline' onClick={()=>props.openMailText(1)} >
      <div className='mailcircle'></div>
      <div className='mailtext'>
      <h3 style={{display:'inline'}}>創世神</h3>
      <p style={{display:'inline', float:'right', marginRight:'1rem'}}>下午4:30</p> 
      <p>歡迎加入伊莉特管理團隊<br/> 請閱讀相關說明文件</p>
      </div>
    </div>

    </>
  )
}


export {Mail, Mailbox, MailLine}