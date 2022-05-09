import React from 'react'
import logo from '../picture/logo.ico'
import video from '../picture/backgoundVideo.mp4';
import '../styles/account.css'

const Signup = ({user, setUser}) => {

    const addAccount = (e) =>{
        const newAccount ={
        account : e.target.account.value,
        password : e.target.password.value,
        mission : 1
      }
        setUser(newAccount);
        localStorage.setItem( 'account', e.target.account.value);
        localStorage.setItem( 'password', e.target.password.value );
        localStorage.setItem( 'mission', 1 );
      }




  return (
    <div>
      <video autoPlay muted loop style={{zIndex:-100, position:'fixed', objectFit:'fill'}} >
        <source src={video} type='video/mp4'/>
      </video> 
        <div className='signLeft'>
            <h3 className='signupText' style={{lineHeight:'13rem'}}>歡迎加入論壇風雲！</h3>
            <img src={logo} id='logo'/>
            <div style={{ textAlign:'center',marginTop:'16rem', color: '#FFF', fontSize: '1rem'}}>
            <span>請先註冊帳號，</span><br></br>
            <span>帳號是重要資料，</span><br></br>
            <span>務必妥善保存。</span>
            </div>        
        </div>
        <div className='signRight'>
            <h3 className='signupText'>建立帳號</h3>
            <form action="game" onSubmit={addAccount} className='signupForm'>
            <div className='input'>
            <input type="text" name="account" placeholder='   暱稱 :'/>
            </div>
            <div className='input'>
            <input type="password" name="password" placeholder='   密碼 :'/> 
            </div>
            <div className='input'>
            <input type="submit" value="註冊帳號" />
            </div>
            </form>

        </div>
    </div>
  )
}

export default Signup