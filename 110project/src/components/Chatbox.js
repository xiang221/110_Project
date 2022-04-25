import React, { useState, useEffect } from 'react'
import {Scripts} from './Scripts'
import {Accuse2List, Accuse3List, HintList} from './Character'
import '../styles/chatbox.css'

var pastScripts = [];//加上顯示過的劇本的紀錄


const Chatbox = () => {

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(0);//用useState設定目前在進行中的劇本ID
  const [inputPopup, setInputPopup] = useState("display:none");//用useState設定目前在進行中的劇本ID
  const [ansBtnDisabled, setAnsBtnDisabled] = useState(false); //Answer按鈕disable
  const [accuse2Popup, setAccuse2Popup] = useState(false)//控制第二關指認介面Popup
  const [hintPopup, setHintPopup] = useState(false)//控制第三關選項提示介面Popup
  const [currHint, setCurrHint] = useState(1)//第三關選項提示介面跳轉
  const [accuse3Popup, setAccuse3Popup] = useState(false)//控制第二關指認介面Popup
  /*
    const ShowMessage = (props) => {
      //用filter從上面的Script物件陣列中，抓取和currScriptState的ID相同的劇本顯示出來
      const CurrScript = Scripts.filter(Script => Script.scriptId === props.currScript)
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
  */


  const ShowMessage = (props) => {
    //用filter從上面的Script物件陣列中，抓取和currScriptState的ID相同的劇本顯示出來
    const CurrScript = Scripts.filter(Script => Script.scriptId === props.currScript)[0].messages
    //console.log("currscriptState = " + currScriptState);//顯示目前的進行中的劇本ID

    const [currIndex, setCurrIndex] = useState(0); //建立Index管理

    useEffect(() => {//當索引發生變化
      if (currIndex > CurrScript.length - 1) {//如果目前Index大於目標陣列長度則返回
        return
      }
      //設定一定的時間後，改變當前的Index
      setTimeout(() => { setCurrIndex(currIndex + 1) }, 1000)
      console.log(currIndex)
    }, [currIndex])

    useEffect(() => {
      setCurrIndex(0)
    }, [currScriptState])


    //顯示當前索引指涉的陣列值
    return (
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
  }

  /**/
  // const ShowPastMessage = (props) => {//顯示已經過去的聊天室內容

  //   useEffect(()=>{
  //     pastScripts.push(props.currScript);//新增過去的劇本ID
  //   },[optionState])

  //   let PastScriptOut;

  //   // useEffect(()=>{
  //     for(let i=1; i < pastScripts.length; i=i+2){
  //       const PastScript = Scripts.filter(Script => Script.scriptId === pastScripts[i])//待修正為什麼會跑兩次的問題(可能是answerButton)
  //       const PastScriptList = PastScript.map((PastScript) =>
  //         PastScript.messages.map((sub) =>
  //           <div className={sub.align}>
  //             <div className="message-sender">{sub.sender}</div>
  //             <span>
  //               <img className="chat-pic" src={sub.chatPicSrc}></img>
  //             </span>
  //             <span>
  //               <span className="message-text">{sub.text}</span>
  //             </span>
  //             <span className="message-time">{sub.time}</span>
  //           </div>
  //         )
  //       );
  //       PastScriptOut = PastScriptList
  //       console.log("pastScripts = " + pastScripts);//顯示目前的進行中的劇本ID
  //     }
  //   //},[pastScripts]) //<li>{PastScriptList}</li>

  //   return (
  //     <>
  //       <li>{PastScriptOut}</li>
  //     </>
  //   )
  // }


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

    const BtnList = CurrScript.map((sub) =>
      <button className={btnClass} onClick={(event) => { props.setTrigger(false); record(sub.record); setCurrScriptState(Number(sub.nextScriptId)); }}>{sub.text}</button>
    )

    function record(record) {//記錄玩家選擇的option按鈕的文字
      if (!record) {
        return;
      }
      localStorage.setItem('第一關選項紀錄',record);//用localStorage存起來
    };

    return (props.trigger) ? (//Answer按鈕是否被按下，按下的話option-button的介面就會跳出來

      //按下option-button介面中的其中一個選項按鈕，會關閉option-button介面、記錄玩家選擇的按鈕的文字、將CurrScriptState更新成劇本中按下按鈕後要接續的下個劇本ID
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

  const InputPopup = (props) => {//第一關的帳號密碼輸入介面

    if (props.currScript === 2) {
      props.setStyle("display:block");
    }
    else { props.setStyle("display:none"); }

    const [accField, setAccField] = useState("");
    const [pwdField, setPwdField] = useState("");
    const [savedAcc, setSavedAcc] = useState("");
    const [savedPwd, setSavedPwd] = useState("");
    const [accResult, checkAcc] = useState("");
    const [pwdResult, checkPwd] = useState("");

    const Save = (e) => {
      e.preventDefault();
      setSavedAcc(accField);
      setSavedPwd(pwdField);
    };

    useEffect(() => {
      // console.log("儲存的帳號" + savedAcc)
      if (savedAcc === localStorage.getItem('account')) {//已改成本地儲存的玩家帳號
        return checkAcc(true)
      }
      if (savedAcc !== localStorage.getItem('account') && savedAcc !== "") {//已改成本地儲存的玩家帳號
        return checkAcc(false)
      }
    }, [savedAcc])

    useEffect(() => {
      // console.log("儲存的密碼" + savedPwd)
      if (savedPwd === localStorage.getItem('password')) {//已改成本地儲存的玩家帳號
        return checkPwd(true)
      }
      if (savedPwd !== localStorage.getItem('password') && savedPwd !== "") {//已改成本地儲存的玩家帳號
        return checkPwd(false)
      }
    }, [savedPwd])

    useEffect(() => {//判斷下一個要跳轉的劇本ID、關掉inputPopup介面
      if (accResult !== "" && pwdResult !== "") {//確認不是預設狀態
        //如果帳密都輸對，跳劇本5，關掉介面
        if (accResult && pwdResult) { setCurrScriptState(5); props.setStyle("display:none"); props.setStyle("display:none"); console.log("狀況一") }
        //如果帳號對密碼錯，跳劇本5，關掉介面
        else if (accResult && !pwdResult) { setCurrScriptState(5); props.setStyle("display:none"); console.log("狀況二"); }
        //如果帳號錯密碼對or帳號錯密碼錯，跳劇本4，關掉介面
        else if ((!accResult && pwdResult) || (!accResult && !pwdResult)) { setCurrScriptState(4); props.setStyle("display:none"); console.log("狀況三"); }
        else console.log("狀況四"); props.setStyle("display:none");
      }
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

  const Accuse2 = (props) => {//第二關，指認中毒者(青年)的介面

    if(currScriptState === -1){//如果currScriptState是-1，直接自動開啟第二關指認
      props.setTrigger(true)
    }

    function whoisControlled(nickNamepicked) {
      let pickedCharacter = Accuse2List.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來要用陣列

      if (pickedCharacter[0].realName === 'Young') {//劇本的第二關的中毒者是青年
        localStorage.setItem('FindYoung', true)//用localstorage來記錄
      }
      else {
        localStorage.setItem('FindYoung', false)//用localstorage來記錄
      }
    }

    return (props.trigger) ? (//指認後直接跳轉到第三關
      <>
        <div id="accuse2-popup">
          <div id="accuse2-btn" className="accuse2-btn-grid">
            <div className="accuse2-title">你覺得誰中毒了？</div>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("A"); setCurrScriptState(Number(16)); props.setTrigger(false); }}>{"A"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("B"); setCurrScriptState(Number(16)); props.setTrigger(false); }}>{"B"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("C"); setCurrScriptState(Number(16)); props.setTrigger(false); }}>{"C"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("D"); setCurrScriptState(Number(16)); props.setTrigger(false); }}>{"D"}</button>
          </div>
        </div>
      </>
    ) : "";
  }

  const Accuse3 = (props) => {//如果currScriptState是-2，直接自動開啟第二關指認

    if(currScriptState === -2){
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

    function goToEnd() {//直接前往結局 //待補結局邏輯
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
            <button className="accuse2-btn" onClick={(event) => { whoisHack("A"); goToEnd(); props.setTrigger(false); }}>{"A"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("B"); goToEnd(); props.setTrigger(false); }}>{"B"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("C"); goToEnd(); props.setTrigger(false); }}>{"C"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("D"); goToEnd(); props.setTrigger(false); }}>{"D"}</button>
          </div>
        </div>
      </>
    ) : "";
  }

  const Hint = (props) => {//第三關，選擇提示部分

    let HintState = [];

    function changeCurrHint(nextHint) {
      setCurrHint(nextHint)
    }

    function changeScript(nextScriptId) {
      let nextScriptIdNumber = Number(nextScriptId)
      setCurrScriptState(nextScriptIdNumber)
    }

    function Hint1(nickNamepicked) {//是誰不謹慎(f1)
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if (pickedCharacter[0].realName === 'God') {
        HintState.push("e1-f1");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Hack') {
        HintState.push("e2-f1");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Young') {
        HintState.push("e3-f1");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Robot') {
        HintState.push("e4-f1")
        console.log("Hint1 = " + HintState);
      }
      else console.log("Hint1 有問題")
    }

    function Hint2(nickNamepicked) {//是誰在帶風向(f2)
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if (pickedCharacter[0].realName === 'God') {
        HintState.push("e1-f2");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Hack') {
        HintState.push("e2-f2");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Young') {
        HintState.push("e3-f2");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Robot') {
        HintState.push("e4-f2")
        console.log("Hint1 = " + HintState);
      }
      else console.log("Hint2 有問題")
    }

    function Hint3(nickNamepicked) {//直接連到最後
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if (pickedCharacter[0].realName === 'God') {
        HintState.push("e1-f2");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Hack') {
        HintState.push("e2-f2");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Young') {
        HintState.push("e3-f2");
        console.log("Hint1 = " + HintState);
      }
      else if (pickedCharacter[0].realName === 'Robot') {
        HintState.push("e4-f2")
        console.log("Hint1 = " + HintState);
      }
      else console.log("Hint2 有問題")
    }

    function Disable(nickNamepicked) {
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列

      if (pickedCharacter[0].realName === 'God' && (HintState.includes("God"))) {
        return true;
      }
      else if (pickedCharacter[0].realName === 'Hack' && (HintState.includes("Hack"))) {
        return true;
      }
      else if (pickedCharacter[0].realName === 'Young' && (HintState.includes("Young"))) {
        return true;
      }
      else if (pickedCharacter[0].realName === 'Robot' && (HintState.includes("Robot"))) {
        return true;
      }
      else return false
    }

    return (props.trigger && currHint === 1) ? (
      <>
        <div id="hint-popup">
          <div className="hint-title">你覺得誰不謹慎？</div>
          <div className="hint-btn-grid">
            <button className="hint-btn" onClick={(event) => { Hint1("A"); changeCurrHint(2) }}>{"A"}</button>
            <button className="hint-btn" onClick={(event) => { Hint1("B"); changeCurrHint(2) }}>{"B"}</button>
            <button className="hint-btn" onClick={(event) => { Hint1("C"); changeCurrHint(2) }}>{"C"}</button>
            <button className="hint-btn" onClick={(event) => { Hint1("D"); changeCurrHint(2) }}>{"D"}</button>
          </div>
        </div>
      </>
    ) :
      (props.trigger && currHint === 2) ?
        (<>
          <div id="hint-popup">
            <div className="hint-title">你覺得誰在帶風向？</div>
            <div className="hint-btn-grid">
              <button className="hint-btn" disabled={Disable("A")} onClick={(event) => { Hint2("A"); changeCurrHint(3) }}>{"A"}</button>
              <button className="hint-btn" disabled={Disable("B")} onClick={(event) => { Hint2("B"); changeCurrHint(3) }}>{"B"}</button>
              <button className="hint-btn" disabled={Disable("C")} onClick={(event) => { Hint2("C"); changeCurrHint(3) }}>{"C"}</button>
              <button className="hint-btn" disabled={Disable("D")} onClick={(event) => { Hint2("D"); changeCurrHint(3) }}>{"D"}</button>
            </div>
          </div>
        </>) :
        (props.trigger && currHint === 3) ?
          (<>
            <div id="hint-popup">
              <div className="hint-title">再一次，你覺得誰在帶風向？</div>
              <div className="hint-btn-grid">
                <button className="hint-btn" onClick={(event) => { Hint3("A"); changeCurrHint(3) }}>{"A"}</button>
                <button className="hint-btn" onClick={(event) => { Hint3("B"); changeCurrHint(3) }}>{"B"}</button>
                <button className="hint-btn" onClick={(event) => { Hint3("C"); changeCurrHint(3) }}>{"C"}</button>
                <button className="hint-btn" onClick={(event) => { Hint3("D"); changeCurrHint(3) }}>{"D"}</button>
              </div>
            </div>
          </>) : "";
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
          <button className="answer-button" id="answer-button" onClick={() => setButtonPopup(true)} disabled={ansBtnDisabled}>Answer</button>
          <div className="chat-container">
            <ul className="chat-message-list" id="chat-list">
              <ShowMessage currScript={currScriptState} />
            </ul>
            <button onClick={() => setHintPopup(true)}>Hint</button>
          </div>
          <OptionBtn trigger={buttonPopup} setTrigger={setButtonPopup} currScript={currScriptState} />
          <InputPopup style={inputPopup} setStyle={setInputPopup} currScript={currScriptState} />
          <Accuse2 trigger={accuse2Popup} setTrigger={setAccuse2Popup} currScript={currScriptState} />
          <Accuse3 trigger={accuse3Popup} setTrigger={setAccuse3Popup} currScript={currScriptState} />
          <Hint trigger={hintPopup} setTrigger={setHintPopup} currScript={currScriptState} currHint={currHint} />
        </div>

      </div>
    </>
  );
}

export default Chatbox
//              <ShowPastMessage currScript={currScriptState} />