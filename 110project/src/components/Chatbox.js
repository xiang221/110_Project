import React, {useState} from 'react'
import '../styles/chatbox.css'
import './OptionBtn.js'
import OptionBtn from './OptionBtn.js'
import ShowMessage from './ShowMessage'

const Chatbox = ({message}) => {
  
  const[buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div id="wrapper">
        <div className="chat">
          <div className="chat-background">
            <div className="answer-botton-container"></div>
            <div className="time-limit-container"></div>
          </div>
          <div className="time-limit">14:00</div>
          <button className="answer-button" id="answer-button"  onClick={() => setButtonPopup(true)}>Answer</button>
          <div className="chat-container">
            <ul className="chat-message-list" id="chat-list">
              <ShowMessage/>
            </ul>
          </div>
          <OptionBtn trigger={buttonPopup}/>
        </div>

      </div>
    </>
  );
}

export default Chatbox