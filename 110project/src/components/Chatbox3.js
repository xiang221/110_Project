import React, { useState, useEffect, memo } from 'react'
import { Scripts } from './Scripts'
import { Accuse3List, HintList } from './Character'
import '../styles/chatbox.css'
import $ from 'jquery'

// var pastScripts = [];//加上顯示過的劇本的紀錄
//把isWho放在這邊應該就可可了


const Chatbox3 = () => {

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(16);//用useState設定目前在進行中的劇本ID
  const [ansBtnDisabled, setAnsBtnDisabled] = useState(true); //Answer按鈕disable
  const [hintPopup, setHintPopup] = useState(false);//控制第三關選項提示介面Popup
  const [accuse3Popup, setAccuse3Popup] = useState(false);//控制第三關指認介面Popup
  const [currIndex, setCurrIndex] = useState(0);//showMsg的訊息跳出Index
  const [selected, setSelected] = useState(null);//第三關提示中 選人的按鈕disable
  const [selected2, setSelected2] = useState(null);//第三關提示中 選帶風向的按鈕disable
  const [pastScripts, setPastScripts] = useState([]);

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

      console.log("Hi = "+ CurrScript[0].text)

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
      <button className={btnClass} onClick={(event) => { props.setTrigger(false); record(sub.record); setCurrScriptState(Number(sub.nextScriptId)); setCurrIndex(0); AddPassScript(props.currScript) }}>{sub.text}</button>
      //按下option-button介面中的其中一個選項按鈕，會關閉option-button介面、記錄玩家選擇的按鈕的文字、將CurrScriptState更新成劇本中按下按鈕後要接續的下個劇本ID
    )

    function record(record) {//記錄玩家選擇的option按鈕的文字
      if (!record) {
        return;
      }
      localStorage.setItem('第一關選項紀錄', record);//用localStorage存起來
    };

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

  const Accuse3 = (props) => {//如果currScriptState是-2，直接自動開啟第二關指認

    if (currScriptState === -2) {
      props.setTrigger(true)
    }

    function whoisHack(nickNamepicked) {
      let pickedCharacter = Accuse3List.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來要用陣列
      if (pickedCharacter[0].realName === 'Hack') {
        localStorage.setItem('FindHack', true)//用localstorage來記錄
      }
      else {
        localStorage.setItem('FindHack', false)//用localstorage來記錄
      }
    }

    function goToEnd() {//選完直接前往結局 //待補結局邏輯
      // if(localStorage.getItem('FindYoung')){
      //   setCurrScriptState(-1)
      // }
      // else{

      // }
      // if(localStorage.getItem('FindHack')){
      //   setCurrScriptState(8)
      // }
      // else{
      //   setCurrScriptState(6)
      // }
    }

    return (props.trigger) ? (//指認後直接跳轉結局
      <>
        <div id="accuse2-popup">
          <div id="accuse2-btn" className="accuse2-btn-grid">
            <div className="accuse2-title">你覺得誰是駭客？</div>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("A"); goToEnd(); props.setTrigger(false); setCurrIndex(0); }}>{"A"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("B"); goToEnd(); props.setTrigger(false); setCurrIndex(0); }}>{"B"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("C"); goToEnd(); props.setTrigger(false); setCurrIndex(0); }}>{"C"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("D"); goToEnd(); props.setTrigger(false); setCurrIndex(0); }}>{"D"}</button>
          </div>
        </div>
      </>
    ) : "";
  }

  const Hint = (props) => {//第三關的選擇提示部分

    if (props.currScript === -3) {
      props.setTrigger(true);
    }

    let isWho = localStorage.getItem("isWho");
    let isHow = localStorage.getItem("isHow")

    function Who(nickNamepicked) {//是誰
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if (pickedCharacter[0].realName === 'God') {
        // HintState.push("e1");
        // console.log("Hint1 = " + HintState);
        // isWho = "e1"
        // console.log("isHow = " + isHow +"isWho = "+ isWho);
        localStorage.setItem("isWho", "e1")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (pickedCharacter[0].realName === 'Hack') {
        // HintState.push("e2");
        // console.log("Hint1 = " + HintState);
        // isWho = "e2"
        // console.log("isHow = " + isHow +"isWho = "+ isWho);
        localStorage.setItem("isWho", "e2")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (pickedCharacter[0].realName === 'Young') {
        // HintState.push("e3");
        // console.log("Hint1 = " + HintState);
        // isWho = "e3"
        // console.log("isHow = " + isHow +"isWho = "+ isWho);
        localStorage.setItem("isWho", "e3")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (pickedCharacter[0].realName === 'Robot') {
        // HintState.push("e4")
        // console.log("Hint1 = " + HintState);
        // isWho = "e4"
        // console.log("isHow = " + isHow +"isWho = "+ isWho);
        localStorage.setItem("isWho", "e4")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else console.log("Hint1 有問題")
    }

    function How(selected) {//不謹慎(f1)帶風向(f2)
      if (selected === '1') {
        // HintState.push("f1");
        // console.log("Hint2 = " + HintState);
        // isHow = "f1"
        // console.log("isHow = " + isHow +"isWho = "+ isWho);
        localStorage.setItem("isHow", "f1")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (selected === '2') {
        // HintState.push("f2");
        // console.log("Hint2 = " + HintState);
        // isHow = "f2"
        // console.log("isHow = " + isHow
        //             +"isWho = "+ isWho);
        localStorage.setItem("isHow", "f2")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else console.log("Hint2 有問題")
    }

    function Judge() {
      if (isWho === "e1" && isHow === "f1"/*HintState.includes("e1") && HintState.includes("f1")*/) {
        console.log("e1-f1")
        console.log(17)
        setHintPopup(false)
        setCurrScriptState(17)
        setCurrIndex(0)
      }

      else if (isWho === "e1" && isHow === "f2"/*HintState.includes("e1") && HintState.includes("f2")*/) {
        console.log("e1-f2")
        console.log(18)
        setHintPopup(false)
        setCurrScriptState(18)
        setCurrIndex(0)
      }
      else if (isWho === "e2" && isHow === "f1"/*HintState.includes("e2") && HintState.includes("f1")*/) {
        console.log("e2-f1")
        console.log(19)
        setHintPopup(false)
        setCurrScriptState(19)
        setCurrIndex(0)
      }

      else if (isWho === "e2" && isHow === "f2"/*HintState.includes("e2") && HintState.includes("f2")*/) {
        console.log("e2-f2")
        console.log(20)
        setHintPopup(false)
        setCurrScriptState(20)
        setCurrIndex(0)
      }
      else if (isWho === "e3" && isHow === "f1"/*HintState.includes("e3") && HintState.includes("f1")*/) {
        console.log("e3-f1")
        console.log(21)
        setHintPopup(false)
        setCurrScriptState(21)
        setCurrIndex(0)
      }
      else if (isWho === "e3" && isHow === "f2"/*HintState.includes("e3") && HintState.includes("f2")*/) {
        console.log("e3-f2")
        console.log(22)
        setHintPopup(false)
        setCurrScriptState(22)
        setCurrIndex(0)
      }
      else if (isWho === "e4" && isHow === "f1"/*HintState.includes("e4") && HintState.includes("f1")*/) {
        console.log("e4-f1")
        console.log(23)
        setHintPopup(false)
        setCurrScriptState(23)
        setCurrIndex(0)
      }
      else if (isWho === "e4" && isHow === "f2"/*HintState.includes("e4") && HintState.includes("f2")*/) {
        console.log("e4-f2")
        console.log(24)
        setHintPopup(false)
        setCurrScriptState(24)
        setCurrIndex(0)
      }
    }

    //選項Disable機制
    let A = false;
    let B = false;
    let C = false;
    let D = false;

    if (selected === "A") {
      B = true
      C = true
      D = true
    }
    if (selected === "B") {
      A = true
      C = true
      D = true
    }
    if (selected === "C") {
      A = true
      B = true
      D = true
    }
    if (selected === "D") {
      A = true
      B = true
      C = true
    }

    let E = false;
    let F = false;
    if (selected2 === "E") {
      F = true
    }
    if (selected2 === "F") {
      E = true
    }


    return (props.trigger) ? (
      <>
        <div id="hint-popup">
          <div className="hint-title">你覺得</div>
          <div className="hint-btn-grid">
            <button className="hint-btn" onClick={(event) => { Who("A"); Judge(); setSelected("A") }} disabled={A}>{"A"}</button>
            <button className="hint-btn" onClick={(event) => { Who("B"); Judge(); setSelected("B") }} disabled={B}>{"B"}</button>
            <button className="hint-btn" onClick={(event) => { Who("C"); Judge(); setSelected("C") }} disabled={C}>{"C"}</button>
            <button className="hint-btn" onClick={(event) => { Who("D"); Judge(); setSelected("D") }} disabled={D}>{"D"}</button>
          </div>

          <div className="hint-btn-grid">
            <button className="hint-btn" onClick={(event) => { How("1"); Judge(); setSelected2("E") }} disabled={E}>{"不謹慎"}</button>
            <button className="hint-btn" onClick={(event) => { How("2"); Judge(); setSelected2("F") }} disabled={F}>{"在帶風向"}</button>
          </div>
        </div>
      </>
    ) : ""
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
          <Accuse3 trigger={accuse3Popup} setTrigger={setAccuse3Popup} currScript={currScriptState} setCurrScriptState={setCurrScriptState} />
          <Hint trigger={hintPopup} setTrigger={setHintPopup} currScript={currScriptState} />
        </div>

      </div>
    </>
  );
}

export default Chatbox3