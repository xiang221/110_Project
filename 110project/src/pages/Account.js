import React,{ useEffect }  from 'react'
import '../styles/account.css'



const Account = ({user, setUser}) => {

  const addAccount = (e) =>{
    const newAccount ={
    account : e.target.account.value,
    password : e.target.password.value,
    mission : [0, 0, 0]
  }
    setUser(newAccount);
    localStorage.setItem( 'account', e.target.account.value);
    localStorage.setItem( 'password', e.target.password.value );
    localStorage.setItem( 'mission', [0,0,0] );
  }
  
  return (
      <div className='form'>

      <h2>註冊東方哈拉論壇</h2>
      <form action="game" onSubmit={addAccount}>
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