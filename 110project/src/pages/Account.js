import React from 'react'
import '../styles/account.css'



const Account = () => {


  return (
      <div className='form'>
      <h2>註冊東方哈拉論壇</h2>
      <form action="game" method="get">
      <div className='input'>
      帳號  <input type="text" name="account"/>
      </div>
      <div className='input'>
      密碼  <input type="password" name="password"/> 
      </div>
      <div className='input'>
      <input type="submit" value="確認"  />
      </div>
      </form>
      </div>
  )
}

export default Account