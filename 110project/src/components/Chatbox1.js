import React, { useState, useEffect, memo } from 'react'
import { Navigate } from 'react-router-dom'
import { Scripts } from './Scripts'
import '../styles/chatbox_RWD.css'
import Timer from './Timer'
import $ from 'jquery'

let pastScripts = [];

const Chatbox1 = (props) => {

  let currScript_1 = Number(JSON.parse(localStorage.getItem('currScript_1')))//用localStorage控制目前狀態
  let pastScripts_1 = JSON.parse(localStorage.getItem('pastScripts_1'))
  if(!pastScripts_1){localStorage.setItem('pastScripts_1',JSON.stringify([]))}

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(currScript_1 ? (currScript_1) : 1);//用useState設定目前在進行中的劇本ID //原本是1
  const [ansBtnDisabled, setAnsBtnDisabled] = useState(true); //Answer按鈕disable
  const [currIndex, setCurrIndex] = useState(0);//showMsg的訊息跳出Index

  if(currScript_1 === 3 && currIndex === 6){
    props.setMission(2);
    localStorage.setItem('Security', true)
  }
  if(currScript_1 === 4 && currIndex === 3){
    props.setMission(2);
    localStorage.setItem('Security', true)
  }
  if(currScript_1 === 5 && currIndex === 2){
    props.setMission(2);
    localStorage.setItem('Security', false)
  }

  const ShowMessage = memo((props) => {
    //用filter從上面的Script物件陣列中，抓取和currScriptState的ID相同的劇本，將裡面messages拿出來
    const CurrScript = Scripts.filter(Script => Script.scriptId === props.currScript)[0].messages
    //console.log("currscriptState = " + currScriptState);//顯示目前的進行中的劇本ID

    function onRowAdded() {
      $('.chat-container').animate({
        scrollTop: $('.chat-container').prop('scrollHeight')
      });
    };

    useEffect(() => {//當索引發生變化

      if (currIndex > CurrScript.length - 1 || CurrScript[0].text === null) {//如果目前Index大於目標陣列長度則返回
        setAnsBtnDisabled(false)
        return
      }
      else { setAnsBtnDisabled(true); onRowAdded() }
      setTimeout(() => { setCurrIndex(currIndex + 1) }, 1000)//設定一定的時間後，改變當前的Index
      console.log(currIndex)

    }, [currIndex])

    return CurrScript[0].text === null ? ("") : (
      <>
        <div>{CurrScript.slice(0, currIndex + 1).map((sub) =>
          <div className={sub.align}>
            <div className="message-sender">{sub.sender}</div>
            <span>
              <img className="chat-pic" src={sub.chatPicSrc}></img>
            </span>
            <span>
              <span className="message-text">{sub.text}</span>
            </span>
            <span className="message-time">{sub.time}</span>
          </div>)}</div>
      </>
    )
  }, currScriptState)


  const ShowPastMessage = (props) => {//顯示已經過去的聊天室內容

    let PastScriptList = [];

    for (let i = 0; i <= JSON.parse(localStorage.getItem('pastScripts_1')).length; i++) {
      const PastScript = Scripts.filter(Script => Script.scriptId === JSON.parse(localStorage.getItem('pastScripts_1'))[i])
      let Item = PastScript.map((PastScript) =>
        PastScript.messages.map((sub) =>
          <div className={sub.align}>
            <div className="message-sender">{sub.sender}</div>
            <span>
              <img className="chat-pic" src={sub.chatPicSrc}></img>
            </span>
            <span>
              <span className="message-text">{sub.text}</span>
            </span>
            <span className="message-time">{sub.time}</span>
          </div>))
      PastScriptList.push(Item)
    }

    return (<><div>{PastScriptList}</div></>)

  }

  const OptionBtn = (props) => {

    let btnClass;
    let gridClass;

    let CurrScript = Scripts.filter(Script => Script.scriptId === props.currScript)[0].options
    if (CurrScript.length === 1) {
      btnClass = "option-btn-1"
      gridClass = "option-btn-grid-1"
    }
    else if (CurrScript.length === 2) {
      btnClass = "option-btn-2"
      gridClass = "option-btn-grid-2"
    }
    else if (CurrScript.length === 3) {
      btnClass = "option-btn-3"
      gridClass = "option-btn-grid-3"
    }
    else return;

    const BtnList = CurrScript.map((sub) =>
      <button className={btnClass} disabled={disable(sub.disable)} onClick={(event) => { props.setTrigger(false); record(sub.record); toNextScript(sub.nextScriptId); console.log('curr = '+props.currScript); setCurrIndex(0); AddPassScript(props.currScript); }}>{sub.text}</button>
      //按下option-button介面中的其中一個選項按鈕，會關閉option-button介面、記錄玩家選擇的按鈕的文字、將CurrScriptState更新成劇本中按下按鈕後要接續的下個劇本ID
    )

    function toNextScript(nextScriptId) {
      localStorage.setItem('currScript_1', JSON.stringify(nextScriptId))
      setCurrScriptState(Number(JSON.parse(localStorage.getItem('currScript_1'))))
    }

    function record(record) {//記錄玩家選擇的option按鈕的文字
      if (!record) {
        return;
      }
      localStorage.setItem('Security', record);//用localStorage存起來
    };

    function disable(disable) {
      if (disable === true) { return true }
      else return false;
    }

    function AddPassScript(currScript) {
      if(currScript === 2  || currScript <= 0){return}
      pastScripts.push(currScript)
      localStorage.setItem('pastScripts_1', JSON.stringify(pastScripts))
    }


    return (props.trigger) ? (//Answer按鈕是否被按下，按下的話option-button的介面就會跳出來
      <>
        <div /*id="option-popup"*/ className={gridClass}>
          <div id="option-buttons">
            <div>{BtnList}</div>
          </div>
        </div>
        <div id="overlay"></div>
      </>
    ) : "";
  }

  function FishNav() {
    return (currScriptState === 2) ? <Navigate to="/fish" /> : ""
  }

  return (//顯示整個ChatBox的內容
    <>
      <div id="wrapper">
        <div className="chat">
          <div className="chat-background">
            <div className="answer-botton-container"></div>
            <div className="time-limit-container"></div>
          </div>
          <div className="time-limit"><Timer/></div>
          <button className="answer-button" id="answer-button" setButtonPopup={setButtonPopup} buttonPopup={buttonPopup} onClick={() => setButtonPopup(true)} disabled={ansBtnDisabled}>Answer</button>
          <div className="chat-container">
            <ul className="chat-message-list" id="chat-list">
              <ShowPastMessage currScript={currScriptState} />
              <ShowMessage currScript={currScriptState} />
            </ul>
          </div>
          <OptionBtn trigger={buttonPopup} setTrigger={setButtonPopup} currScript={currScriptState} setCurrScriptState={setCurrScriptState} />
        </div>
        <FishNav></FishNav>
      </div>
    </>
  );
}

export default Chatbox1