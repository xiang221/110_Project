import React, { useState, useEffect } from 'react'
import '../styles/chatbox.css'

var optionState = [];

//劇本的物件陣列
const Scripts = [
  {
    scriptId: 1,//劇本ID
    options: [
      { text: "選項A", nextScriptId: 2 },//按下answer按鈕後跳出的選項文字，與按下選項之後要跳轉的下一個劇本ID
      { text: "選項B", nextScriptId: 1 },
    ],
    messages: [//這一個劇本ID下的具體聊天室內容
      { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "React好難", time: "上午12:36" },
      { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "測試", time: "上午12:36" },
      { align: "message-left", text: "React好難", time: "上午12:36" }
    ]
  },
  {
    scriptId: 2,
    options: [
      { text: "選項C", nextScriptId: 2 },
      { text: "選項D", nextScriptId: 1 },
    ],
    messages: [
      { align: "message-left-first", sender: "匿名梨子", chatPicSrc: "https://img.onl/1MG2S1", text: "這是第二個訊息", time: "上午12:36" },
      { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "第二個測試", time: "上午12:36" },
      { align: "message-left", text: "React好難", time: "上午12:36" }
    ]
  }
]

const Chatbox = () => {

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(1);//用useState設定目前在進行中的劇本ID

  const ShowMessage = () => {
    //用filter從上面的Script物件陣列中，抓取和currScriptState的ID相同的劇本顯示出來
    //如果currScriptState改變了，showMessage顯示的內容應該要相應改變，console.log(currScriptState)有相應改變，但showMessage整體顯示的畫面卻變成空白
    const CurrScript = Scripts.filter(Script => Script.scriptId === currScriptState)
    console.log("currscriptState = " + currScriptState);//顯示目前的進行中的劇本ID

    const messageList = CurrScript.map((CurrScript) =>
      CurrScript.messages.map((sub) =>
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
      <>
        <li>{messageList}</li>
      </>
    )
  }

  const OptionBtn = (props) => {//設定option-button的選項介面

    const CurrScript = Scripts.filter(Script => Script.scriptId === currScriptState)
    const option1 = CurrScript.map(Script => Script.options[0]);
    const option2 = CurrScript.map(Script => Script.options[1]);
    const option1Text = option1.map(sub => sub.text)
    const option2Text = option2.map(sub => sub.text)
    const nextScriptId1 = option1.map(sub => sub.nextScriptId);
    const nextScriptId2 = option2.map(sub => sub.nextScriptId);
    console.log("optionbutton scriptState = " + currScriptState)

    function record(optionText) {//記錄玩家選擇的option按鈕的文字
      optionState.push(optionText);
      console.log("optionText record = " + optionState)
    };

    return (props.trigger) ? (//Answer按鈕是否被按下，按下的話option-button的介面就會跳出來
    //按下option-button介面中的其中一個選項按鈕，會關閉option-button介面、記錄玩家選擇的按鈕的文字、將CurrScriptState更新成劇本中按下按鈕後要接續的下個劇本ID
    //但是發現儘管CurrScriptState更改了，再次按下AnswerButton，跳出的選項內容卻沒有更新，反而變成空白的
      <>
        <div id="option-popup">
          <div id="option-buttons" className="option-btn-grid">
            <button className="option-btn" onClick={(event) => { props.setTrigger(false); record(option1Text); setCurrScriptState(nextScriptId1);}}>{option1Text}</button>
            <button className="option-btn" onClick={(event) => { props.setTrigger(false); record(option2Text); setCurrScriptState(nextScriptId2);}}>{option2Text}</button>
          </div>
        </div>
        <div id="overlay"></div>
      </>
    ) : "";
  }

  return (//顯示整個ChatBox的內容
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