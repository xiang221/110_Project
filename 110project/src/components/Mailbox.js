import React from 'react'
import '../styles/popup.css'

const Mailbox = (props) => {

    return (props.trigger)?(
        <div className="openmail">
            <div class="mailheader">
            <a className="close-modal" onClick={()=>props.mailhandler(false)}>✖</a>
            <h3>信夾匣</h3>
            </div>
        </div>   
    ):'';

}

export default Mailbox