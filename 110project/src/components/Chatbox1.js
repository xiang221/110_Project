import React, { useState, useEffect, memo } from 'react'
import { Scripts } from './Scripts'
import '../styles/chatbox.css'
import $ from 'jquery'

// var pastScripts = [];//加上顯示過的劇本的紀錄
//把isWho放在這邊應該就可可了


const Chatbox1 = () => {

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(1);//用useState設定目前在進行中的劇本ID
  const [inputPopup, setInputPopup] = useState("display:none");//控制第一關釣魚網站介面Popup
  const [ansBtnDisabled, setAnsBtnDisabled] = useState(true); //Answer按鈕disable
  const [currIndex, setCurrIndex] = useState(0);//showMsg的訊息跳出Index
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
      <button className={btnClass} onClick={(event) => { props.setTrigger(false); record(sub.record); setCurrScriptState(Number(sub.nextScriptId)); setCurrIndex(0); AddPassScript(props.currScript); test(sub.test) }}>{sub.text}</button>
      //按下option-button介面中的其中一個選項按鈕，會關閉option-button介面、記錄玩家選擇的按鈕的文字、將CurrScriptState更新成劇本中按下按鈕後要接續的下個劇本ID
    )

    function record(record) {//記錄玩家選擇的option按鈕的文字
      if (!record) {
        return;
      }
      localStorage.setItem('Security', record);//用localStorage存起來
    };

    function test(something){
      localStorage.setItem('帳號',something[0])
      localStorage.setItem('密碼',something[0])
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

  const InputPopup = (props) => {//第一關的帳號密碼輸入介面 //待改成跳轉視窗

    if (props.currScript === 2) {
      props.setStyle("display:block");
    }
    else { props.setStyle("display:none"); }

    const [accField, setAccField] = useState("");
    const [pwdField, setPwdField] = useState("");
    const [savedAcc, setSavedAcc] = useState("");
    const [savedPwd, setSavedPwd] = useState("");
    // const [accResult, checkAcc] = useState("");
    // const [pwdResult, checkPwd] = useState("");

    const Save = (e) => {
      e.preventDefault();
      setSavedAcc(accField);
      setSavedPwd(pwdField);
    };

    useEffect(() => {
      // console.log("儲存的帳號" + savedAcc)
      if (savedAcc === localStorage.getItem('account')) {//已改成本地儲存的玩家帳號
        return localStorage.setItem('FishAcc',true)
        // return checkAcc(true)
      }
      if (savedAcc !== localStorage.getItem('account') && savedAcc !== "") {//已改成本地儲存的玩家帳號
        return localStorage.setItem('FishAcc',false)
        // return checkAcc(false)
      }
    }, [savedAcc])

    useEffect(() => {
      // console.log("儲存的密碼" + savedPwd)
      if (savedPwd === localStorage.getItem('password')) {//已改成本地儲存的玩家帳號
        return localStorage.setItem('FishPwd',true)
        // return checkPwd(true)
      }
      if (savedPwd !== localStorage.getItem('password') && savedPwd !== "") {//已改成本地儲存的玩家帳號
        return localStorage.setItem('FishPwd',false)
        // return checkPwd(false)
      }
    }, [savedPwd])

    useEffect(() => {//判斷下一個要跳轉的劇本ID、關掉inputPopup介面
      let FishAcc = localStorage.getItem('FishAcc')
      let FishPwd = localStorage.getItem('FishPwd')

      if (FishAcc !== null && FishPwd !== null) {//確認不是預設狀態
        //如果帳密都輸對，跳劇本5，關掉介面
        if (FishAcc && FishPwd) {setCurrScriptState(5); props.setStyle("display:none"); props.setStyle("display:none"); }
        //如果帳號對密碼錯，跳劇本5，關掉介面
        else if (FishAcc && !FishPwd) { setCurrScriptState(5); props.setStyle("display:none"); }
        //如果帳號錯密碼對or帳號錯密碼錯，跳劇本4，關掉介面
        else if ((!FishAcc && FishPwd) || (!FishAcc && !FishPwd)) { setCurrScriptState(4); props.setStyle("display:none"); console.log("狀況三"); }
        else console.log("狀況四"); props.setStyle("display:none");
      }
      // if (accResult !== "" && pwdResult !== "") {//確認不是預設狀態
      //   //如果帳密都輸對，跳劇本5，關掉介面
      //   if (accResult && pwdResult) { setCurrScriptState(5); props.setStyle("display:none"); props.setStyle("display:none"); console.log("狀況一") }
      //   //如果帳號對密碼錯，跳劇本5，關掉介面
      //   else if (accResult && !pwdResult) { setCurrScriptState(5); props.setStyle("display:none"); console.log("狀況二"); }
      //   //如果帳號錯密碼對or帳號錯密碼錯，跳劇本4，關掉介面
      //   else if ((!accResult && pwdResult) || (!accResult && !pwdResult)) { setCurrScriptState(4); props.setStyle("display:none"); console.log("狀況三"); }
      //   else console.log("狀況四"); props.setStyle("display:none");
      //}
      // else(console.log("InputPopup還在預設狀態"))
    })


    if (props.style === "display:none") {
      return "";
    }

    if (props.style === "display:block") {
      return <>
        <div id="input-popup">
          <div className="input-popup-container">
            <div>恭喜您!您是今日的第187位訪客!填入基本資料已獲得抽取iphone大獎的機會!<br />請依序填入您的</div>
            <form onSubmit={Save} >
              <div>東方哈拉帳號:</div>
              <input type="text" value={accField} placeholder="請輸入您的帳號" onChange={(e) => { setAccField(e.target.value) }} />
              <div>東方哈拉帳號:</div>
              <input type="text" value={pwdField} placeholder="請輸入您的密碼" onChange={(e) => { setPwdField(e.target.value) }} />
              <button type="submit">提交</button>
            </form>
          </div>
        </div>
      </>
    }
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
          <InputPopup style={inputPopup} setStyle={setInputPopup} currScript={currScriptState} />
        </div>

      </div>
    </>
  );
}

export default Chatbox1