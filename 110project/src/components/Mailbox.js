import React from 'react'
import '../styles/popup.css'

const Mailbox = (props) => {

    return (props.trigger)?(
        <div className="openmail">
            <div class="mailheader">
            <h2 className="mailfont">信夾匣</h2>
            </div>

            <button className="mailBtn" onClick={()=>props.mailhandler(false)}></button>
        </div>   
    ):'';

}

export default Mailbox