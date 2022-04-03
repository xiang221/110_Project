import React, { useState } from 'react'
import '../styles/chatbox.css'
import './OptionBtn.js'
//import OptionBtn from './OptionBtn.js'
//import ShowMessage from './ShowMessage'

const Scripts = [
{
  scriptId: 1,
  nextScriptId: 2,
  optionContext: ["選項A", "選項B"],
  messages: [
    { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "React好難", time: "上午12:36" },
    { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "測試", time: "上午12:36" },
    { align: "message-left", text: "React好難", time: "上午12:36" }
  ]
}

]

  const ShowMessage = () => {
    const messageList = Scripts.map((Script) =>
      Script.messages.map((sub) =>
        <div className={sub.align}>
          <div className="message-sender">{sub.sender}</div>
          <span>
            <img className="chat-pic" src={sub.chatPicSrc}></img>
          </span>
          <span>
            <span className="message-text">{sub.text}</span>
          </span>
          <span className="message-time">{sub.time}</span>
        </div>
      )
    );

    return (
        <li>{messageList}</li>
    )
  }

const Chatbox = () => {

  let optionState = [];
  const [buttonPopup, setButtonPopup] = useState(false);
  
  function record(optionContext){
    optionState.push(optionContext);
    console.log("optionContext = "+optionContext)
  };

  const OptionBtn = (props) => {

  const optionContext1 = Scripts.map(Script => Script.optionContext[0]);
  const optionContext2 = Scripts.map(Script => Script.optionContext[1]);

    return (props.trigger) ? (
      <>
        <div id="option-popup">
          <div id="option-buttons" className="option-btn-grid">
            <button className="option-btn" onClick={(event) => {props.setTrigger(false); record(optionContext1);}}>{optionContext1}</button>
            <button className="option-btn" onClick={(event) => {props.setTrigger(false); record(optionContext2);}}>{optionContext2}</button>
          </div>
        </div>
        <div id="overlay"></div>
      </>
    ) : "";
  }

  return (
    <>
      <div id="wrapper">
        <div className="chat">
          <div className="chat-background">
            <div className="answer-botton-container"></div>
            <div className="time-limit-container"></div>
          </div>
          <div className="time-limit">14:00</div>
          <button className="answer-button" id="answer-button" onClick={() => setButtonPopup(true)}>Answer</button>
          <div className="chat-container">
            <ul className="chat-message-list" id="chat-list">
              <ShowMessage />
            </ul>
          </div>
          <OptionBtn trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>

      </div>
    </>
  );
}

export default Chatbox