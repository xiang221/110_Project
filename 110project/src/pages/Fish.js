import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const Fish = (props) => {

  const [accField, setAccField] = useState("");
  const [pwdField, setPwdField] = useState("");
  const [savedAcc, setSavedAcc] = useState("");
  const [savedPwd, setSavedPwd] = useState("");
  const [flag, setFlag] = useState(false);

  const Save = (e) => {
    e.preventDefault();
    setSavedAcc(accField);
    setSavedPwd(pwdField);
    setFlag(true);
  };

  useEffect(() => {
    console.log("目前輸入的帳號："+accField)
  }, [accField])

  useEffect(() => {
    console.log("目前輸入的密碼："+pwdField)
  }, [pwdField])

  useEffect(() => {
    if (savedAcc === localStorage.getItem('account')) {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishAcc', true)
    }
    if (savedAcc !== localStorage.getItem('account') && savedAcc !== "") {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishAcc', false)
    }
  }, [savedAcc])

  useEffect(() => {
    if (savedAcc === localStorage.getItem('account')) {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishAcc', true)
    }
    if (savedAcc !== localStorage.getItem('account') && savedAcc !== "") {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishAcc', false)
    }
  }, [savedAcc])

  useEffect(() => {
    if (savedPwd === localStorage.getItem('password')) {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishPwd', true)
    }
    if (savedPwd !== localStorage.getItem('password') && savedPwd !== "") {//已改成本地儲存的玩家帳號
      return localStorage.setItem('FishPwd', false)
    }
  }, [savedPwd])

  useEffect(() => {//判斷下一個要跳轉的劇本ID、關掉inputPopup介面
    let FishAcc = localStorage.getItem('FishAcc')
    let FishPwd = localStorage.getItem('FishPwd')
    let JumpFish = localStorage.setItem('JumpFish',true)
    if (FishAcc !== null && FishPwd !== null) {//確認不是預設狀態

      //如果帳密都輸對，跳劇本102
      if (FishAcc && FishPwd) { localStorage.setItem('currScript_1', 102); }
      //如果帳號對密碼錯，跳劇本101
      else if (FishAcc && !FishPwd) { localStorage.setItem('currScript_1', 101); }
      //如果帳號錯密碼對or帳號錯密碼錯，跳劇本4
      else if ((!FishAcc && FishPwd) || (!FishAcc && !FishPwd)) { localStorage.setItem('currScript_1', 4); localStorage.setItem('Security', true); }
      else props.setStyle("display:none");
    }
  })

  if(flag === true){return<Navigate to="/game"/>}

  return (
    <>
      <div id="input-popup">
        <div className="input-popup-container">
          <div>恭喜您!您是今日的第187位訪客!填入基本資料已獲得抽取iphone大獎的機會!<br />請依序填入您的</div>
          <form onSubmit={Save} >
            <div>東方哈拉帳號:</div>
            <input required="required" type="text" value={accField} placeholder="請輸入您的帳號" onChange={(e) => { setAccField(e.target.value) }} />
            <div>東方哈拉帳號:</div>
            <input required="required" type="text" value={pwdField} placeholder="請輸入您的密碼" onChange={(e) => { setPwdField(e.target.value) }} />
            <button>提交</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Fish