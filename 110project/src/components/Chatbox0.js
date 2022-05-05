import React, { useState, useEffect, memo } from 'react'
import { Scripts } from './Scripts'
import '../styles/chatbox.css'
import $ from 'jquery'

// var pastScripts = [];//加上顯示過的劇本的紀錄
//把isWho放在這邊應該就可可了


const Chatbox0 = () => {

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(0);//用useState設定目前在進行中的劇本ID
  const [ansBtnDisabled, setAnsBtnDisabled] = useState(true); //Answer按鈕disable
  const [currIndex, setCurrIndex] = useState(0);//showMsg的訊息跳出Index
  const [pastScripts, setPastScripts] = useState([]);//過去訊息呈現的ScriptId紀錄

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

        if (currIndex > CurrScript.length - 1 || CurrScript[0].text===null) {//如果目前Index大於目標陣列長度則返回
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

    for (let i = 0; i <= pastScripts.length; i++) {
      const PastScript = Scripts.filter(Script => Script.scriptId === pastScripts[i])
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

    let CurrScript = Scripts.filter(Script => Script.scriptId === props.currScript)[0].options
    if (CurrScript.length === 1) {
      btnClass = "option-btn"
    }
    else if (CurrScript.length === 2) {
      btnClass = "option-btn"
    }
    else if (CurrScript.length === 3) {
      btnClass = "option-btn"
    }
    else return;

    function AddPassScript(currScript) {
      if (currScript !== pastScripts[pastScripts.length] && currScript !== 2 && currScript >= 0) {
        //  pastScripts.push(currScript)
        setPastScripts(oldArray => [...oldArray, currScript])
        console.log(pastScripts)
      }
    }

    const BtnList = CurrScript.map((sub) =>
      <button className={btnClass} disabled={disable(sub.disable)} onClick={(event) => { props.setTrigger(false); record(sub.record); AddPassScript(props.currScript) }}>{sub.text}</button>
      //按下option-button介面中的其中一個選項按鈕，會關閉option-button介面、記錄玩家選擇的按鈕的文字、將CurrScriptState更新成劇本中按下按鈕後要接續的下個劇本ID
    )

    function record(record) {//記錄玩家選擇的option按鈕的文字
      if (!record) {
        return;
      }
      localStorage.setItem('第一關選項紀錄', record);//用localStorage存起來
    };

    function disable(disable) {
      if(disable === true){return true}
      else return false;
    }

    return (props.trigger) ? (//Answer按鈕是否被按下，按下的話option-button的介面就會跳出來
      <>
        <div id="option-popup">
          <div id="option-buttons" className="option-btn-grid">
            <div>{BtnList}</div>
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
          <button className="answer-button" id="answer-button" setButtonPopup={setButtonPopup} buttonPopup={buttonPopup} onClick={() => setButtonPopup(true)} disabled={ansBtnDisabled}>Answer</button>
          <div className="chat-container">
            <ul className="chat-message-list" id="chat-list">
              <ShowPastMessage currScript={currScriptState} />
              <ShowMessage currScript={currScriptState} />
            </ul>
          </div>
          <OptionBtn trigger={buttonPopup} setTrigger={setButtonPopup} currScript={currScriptState} setCurrScriptState={setCurrScriptState} />
        </div>

      </div>
    </>
  );
}

export default Chatbox0