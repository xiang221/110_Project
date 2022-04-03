import React from 'react'

const Scripts = [{
    scriptId: 1,
    nextScriptId: 2,
    optionContext: ["選項A", "選項B"],
    messages: [
        { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "React好難", time: "上午12:36" },
        { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "測試", time: "上午12:36" },
        { align: "message-left", text: "React好難", time: "上午12:36" }

    ]
}]

const ShowMessage = () => {
    
    const messageList =Scripts.map((Script) =>
            Script.messages.map((sub) =>
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
    {/* <OptionBtn content = {content}/> */}
    </>
    )


}

export default ShowMessage