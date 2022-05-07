import React, { useState, useEffect, memo } from 'react'
import { Scripts } from './Scripts'
import { Accuse3List, God, Hack, HintList, Robot, Young } from './Character'
import '../styles/chatbox_RWD.css'
import Timer from './Timer'
import $ from 'jquery'

const Chatbox3 = () => {

  let pastScripts = [];

  let currScript_3 = Number(JSON.parse(localStorage.getItem('currScript_3')))//用localStorage控制目前狀態
  let pastScripts_3 = JSON.parse(localStorage.getItem('pastScripts_3'))
  if(!pastScripts_3){localStorage.setItem('pastScripts_3',JSON.stringify([]))}

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(currScript_3 ? (currScript_3) : 16);//用useState設定目前在進行中的劇本ID
  const [ansBtnDisabled, setAnsBtnDisabled] = useState(true); //Answer按鈕disable
  const [hintPopup, setHintPopup] = useState(false);//控制第三關選項提示介面Popup
  const [accuse3Popup, setAccuse3Popup] = useState(false);//控制第三關指認介面Popup
  const [currIndex, setCurrIndex] = useState(0);//showMsg的訊息跳出Index
  const [selected, setSelected] = useState(null);//第三關提示中 選人的按鈕disable
  const [selected2, setSelected2] = useState(null);//第三關提示中 選帶風向的按鈕disable

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

    for (let i = 0; i <= JSON.parse(localStorage.getItem('pastScripts_3')).length; i++) {
      const PastScript = Scripts.filter(Script => Script.scriptId === JSON.parse(localStorage.getItem('pastScripts_3'))[i])
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
      <button className={btnClass} disabled={disable(sub.disable)} onClick={(event) => { props.setTrigger(false); record(sub.record); toNextScript(sub.nextScriptId); setCurrIndex(0); AddPassScript(props.currScript) }}>{sub.text}</button>
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

    function toNextScript(nextScriptId) {
      localStorage.setItem('currScript_3', JSON.stringify(nextScriptId))
      setCurrScriptState(Number(JSON.parse(localStorage.getItem('currScript_3'))))
    }

    function AddPassScript(currScript) {
      if(currScript === 2  || currScript <= 0){return}
      // let pastScripts = [];
      pastScripts.push(currScript)
      localStorage.setItem('pastScripts_3', JSON.stringify(pastScripts))
    }

    return (props.trigger) ? (//Answer按鈕是否被按下，按下的話option-button的介面就會跳出來
      <>
        <div id="option-popup">
          <div /*id="option-buttons"*/ className={gridClass}>
            <div>{BtnList}</div>
          </div>
        </div>
        <div id="overlay"></div>
      </>
    ) : "";
  }

  const Accuse3 = (props) => {//如果currScriptState是-2，直接自動開啟第三關指認

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

    function goToEnd() {//選完直接前往結局 //結局邏輯
      let Lv1 = localStorage.getItem('Security')
      let Lv2 = localStorage.getItem('FindYoung')
      let Lv3 = localStorage.getItem('FindHack')

      if (Lv1 === 'true' && Lv2 === 'true' && Lv3 === 'true') { //OOO以牙還牙
        setCurrScriptState(31)
        setAccuse3Popup(false);
        localStorage.setItem('End',31)
      }
      if (Lv1 === 'true' && Lv2 === 'false' && Lv3 === 'true') { //OXO驅逐內鬼
        setCurrScriptState(30)
        setAccuse3Popup(false);
        localStorage.setItem('End',30)
      }
      if (Lv1 === 'true' && Lv2 === 'true' && Lv3 === 'false') { //OOX縱虎歸山
        setCurrScriptState(29)
        setAccuse3Popup(false);
        localStorage.setItem('End',29)
      }
      if (Lv1 === 'false' && Lv2 === 'true' && Lv3 === 'true') { //XOO特洛伊木馬
        setCurrScriptState(28)
        setAccuse3Popup(false);
        localStorage.setItem('End',28)
      }
      if ((Lv1 === 'false' && Lv2 === 'false' && Lv3 === 'false') || (Lv1 === 'false' && Lv2 === 'true' && Lv3 === 'false')) { //XXX或XOX自身難保
        setCurrScriptState(26)
        setAccuse3Popup(false);
        localStorage.setItem('End',26)
      }
      if ((Lv1 === 'false' && Lv2 === 'false' && Lv3 === 'true') || (Lv1 === 'true' && Lv2 === 'false' && Lv3 === 'false')) { //XXO或OXX創世神殞落
        setCurrScriptState(25)
        setAccuse3Popup(false);
        localStorage.setItem('End',25)
      }
    }

    return (props.trigger) ? (//指認後直接跳轉結局
      <>
      <div className="accuse2-container">
        <div id="accuse2-popup">
          <div id="accuse2-btn" className="accuse2-btn-grid">
            <div className="accuse2-title">揪出駭客！</div>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("匿名火龍蕉"); goToEnd(); setCurrIndex(0); }}><img src="https://img.onl/T3V7p" className='accuse2-btn-pic'/></button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("匿名凸頂橙"); goToEnd(); setCurrIndex(0); }}><img src="https://img.onl/uHe5oT" className='accuse2-btn-pic'/></button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("匿名麝香葡萄"); goToEnd(); setCurrIndex(0); }}><img src="https://img.onl/waqDg6" className='accuse2-btn-pic'/></button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("匿名白桃"); goToEnd(); setCurrIndex(0); }}><img src="https://img.onl/llKIo0" className='accuse2-btn-pic'/></button>
          </div>
        </div>
      </div>
      </>
    ) : "";
  }

  const Hint = (props) => {//第三關的選擇提示部分

    if (props.currScript === -3) {
      props.setTrigger(true);
    }

    console.log("God = " + God.nickName)
    console.log("Hack = " + Hack.nickName)
    console.log("Young = " + Young.nickName)
    console.log("Robot = " + Robot.nickName)

    function Who(nickNamepicked) {//是誰(e1, e2, e3, e4)
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if (pickedCharacter[0].realName === 'God') {
        localStorage.setItem("isWho", "e1")
        // console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (pickedCharacter[0].realName === 'Hack') {
        localStorage.setItem("isWho", "e2")
        // console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (pickedCharacter[0].realName === 'Young') {
        localStorage.setItem("isWho", "e3")
        // console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (pickedCharacter[0].realName === 'Robot') {
        localStorage.setItem("isWho", "e4")
        // console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else console.log("Hint1 有問題")
    }

    function How(selected) {//不謹慎(f1)帶風向(f2)
      if (selected === '1') {
        localStorage.setItem("isHow", "f1")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else if (selected === '2') {
        localStorage.setItem("isHow", "f2")
        console.log("isWho = " + localStorage.getItem("isWho") + "isHow = " + localStorage.getItem("isHow"))
      }
      else console.log("Hint2 有問題")
    }

    function Judge() {
      let isWho = localStorage.getItem("isWho");
      let isHow = localStorage.getItem("isHow");
      if (isWho === "e1" && isHow === "f1") {
        console.log("e1-f1")
        console.log(17)
        setHintPopup(false)
        setCurrScriptState(17)
        setCurrIndex(0)
      }

      else if (isWho === "e1" && isHow === "f2") {
        console.log("e1-f2")
        console.log(18)
        setHintPopup(false)
        setCurrScriptState(18)
        setCurrIndex(0)
      }
      else if (isWho === "e2" && isHow === "f1") {
        console.log("e2-f1")
        console.log(19)
        setHintPopup(false)
        setCurrScriptState(19)
        setCurrIndex(0)
      }

      else if (isWho === "e2" && isHow === "f2") {
        console.log("e2-f2")
        console.log(20)
        setHintPopup(false)
        setCurrScriptState(20)
        setCurrIndex(0)
      }
      else if (isWho === "e3" && isHow === "f1") {
        console.log("e3-f1")
        console.log(21)
        setHintPopup(false)
        setCurrScriptState(21)
        setCurrIndex(0)
      }
      else if (isWho === "e3" && isHow === "f2") {
        console.log("e3-f2")
        console.log(22)
        setHintPopup(false)
        setCurrScriptState(22)
        setCurrIndex(0)
      }
      else if (isWho === "e4" && isHow === "f1") {
        console.log("e4-f1")
        console.log(23)
        setHintPopup(false)
        setCurrScriptState(23)
        setCurrIndex(0)
      }
      else if (isWho === "e4" && isHow === "f2") {
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
                <div className='hint-background'>
          <div className="hint-title-pink">
            <div className="hint-title">我覺得</div>
          </div>
          <div className="hint-btn-grid-1">
            <button className="hint-btn-1"  onClick={(event) => { Who("匿名火龍蕉"); Judge(); setSelected("A"); event.preventDefault() }} disabled={A}><img src="https://img.onl/SJmyju" className='hint-pic'/>{/*"A"*/}</button>
            <button className="hint-btn-1"  onClick={(event) => { Who("匿名凸頂橙"); Judge(); setSelected("B"); event.preventDefault() }} disabled={B}><img src="https://img.onl/yMAK4Y" className='hint-pic'/>{/*"B"*/}</button>
            <button className="hint-btn-1"  onClick={(event) => { Who("匿名麝香葡萄"); Judge(); setSelected("C"); event.preventDefault() }} disabled={C}><img src="https://img.onl/Pyy8K4" className='hint-pic'/>{/*"C"*/}</button>
            <button className="hint-btn-1"  onClick={(event) => { Who("匿名白桃"); Judge(); setSelected("D"); event.preventDefault() }} disabled={D}><img src="https://img.onl/opoFX" className='hint-pic'/>{/*"D"*/}</button>
          </div>
          <div className="hint-title-blue">
          <div className="hint-title">的確</div>
          </div>
          <div className="hint-btn-grid-2">
            <button className="hint-btn-2" onClick={(event) => { How("1"); Judge(); setSelected2("E"); event.preventDefault() }} disabled={E}>{"太不謹慎了"}</button>
            <button className="hint-btn-2" onClick={(event) => { How("2"); Judge(); setSelected2("F"); event.preventDefault() }} disabled={F}>{"一直在帶風向"}</button>
          </div>
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
          <div className="time-limit"><Timer/></div>
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