import React from 'react'
import '../styles/chatbox.css'

const Chatbox =()=> {
  
  function showOptions(){
  console.log("clicked")
  }
  
    return( 
<>
  <div id="wrapper">
    <div className="chat">
      <div className="chat-background">
     <div className="answer-botton-container"></div>
      <div className="time-limit"></div>
     </div>
     <button className="answer-button" id="answer-button" onClick={showOptions}>Answer</button>
      
      <div className="chat-container"> 
          <ul className="chat-message-list" id="chat-list">
            <li>
              <div className="message-left-first">
                <div className="message-sender">匿名蘋果</div>
                <span>
                  <img className="chat-pic" src="https://img.onl/1MG2S1"></img>
                </span>
              <span>
                <span className="message-text">React 好難</span>
              </span>
              
              <span className="message-time">上午12:36</span>
              </div>
            </li>
            
            <li>
              <div className="message-left">
              <span>
                <span className="message-text">React 好難</span>
              </span>
              </div>
            </li>
            
                        <li>
              <div className="message-left-first">
                <div className="message-sender">匿名蘋果</div>
                <span>
                  <img className="chat-pic" src="https://img.onl/1MG2S1"></img>
                </span>
              <span>
                <span className="message-text">React 好難</span>
              </span>
              
              <span className="message-time">上午12:36</span>
              </div>
            </li>
          </ul>
        </div>

       <div id="option-popup">
         <div id="option-buttons" className="option-btn-grid">
            <button className="option-btn">選項1</button>
            <button className="option-btn">選項2</button>
         </div>
       </div>
       <div id="overlay"></div>
      
    </div>

  </div>
</>
    );
}

export default Chatbox