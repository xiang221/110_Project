import React, { useState, useEffect } from 'react'

const Fish = (props) => {

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
      return localStorage.setItem('FishAcc', true)
      // return checkAcc(true)
    }
    if (savedAcc !== localStorage.getItem('account') && savedAcc !== "") {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishAcc', false)
      // return checkAcc(false)
    }
  }, [savedAcc])

  useEffect(() => {
    // console.log("儲存的密碼" + savedPwd)
    if (savedPwd === localStorage.getItem('password')) {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishPwd', true)
      // return checkPwd(true)
    }
    if (savedPwd !== localStorage.getItem('password') && savedPwd !== "") {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishPwd', false)
      // return checkPwd(false)
    }
  }, [savedPwd])

  useEffect(() => {//判斷下一個要跳轉的劇本ID、關掉inputPopup介面
    let FishAcc = localStorage.getItem('FishAcc')
    let FishPwd = localStorage.getItem('FishPwd')

    if (FishAcc !== null && FishPwd !== null) {//確認不是預設狀態
      //如果帳密都輸對，跳劇本102，關掉介面
      if (FishAcc && FishPwd) {/*setCurrScriptState(102);*/localStorage.setItem('CurrScript_1', 102); props.setStyle("display:none"); props.setStyle("display:none"); }
      //如果帳號對密碼錯，跳劇本101，關掉介面
      else if (FishAcc && !FishPwd) { /*setCurrScriptState(101);*/localStorage.setItem('CurrScript_1', 101); props.setStyle("display:none"); }
      //如果帳號錯密碼對or帳號錯密碼錯，跳劇本4，關掉介面
      else if ((!FishAcc && FishPwd) || (!FishAcc && !FishPwd)) { /*setCurrScriptState(4);*/localStorage.setItem('CurrScript_1', 4); localStorage.setItem('Security', true); props.setStyle("display:none"); }
      else props.setStyle("display:none");
    }
  })

  return (
    <>
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
  )
}

export default Fish