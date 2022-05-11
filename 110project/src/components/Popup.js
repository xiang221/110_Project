import React from 'react'
import '../styles/popup.css'
import player1 from '../picture/player1.mp4';
import player2 from '../picture/player2.mp4';
import player3 from '../picture/player3.mp4';
import player4 from '../picture/player4.mp4';



const Popup = (props) =>  {

    if(props.video==='player1'){
        var video = player1;
    }else if(props.video==='player2'){
        var video = player2;
    }else if(props.video==='player3'){
        var video = player3;
    }else{
        var video = player4;
    }

    return (props.trigger)?(
            <div className="modal-overlay">
                <div className={props.pic}>
                    <video autoPlay muted loop style={{width: '624px', height: '500px', float:'left'}}>
                    <source src={video} type='video/mp4'/>
                    </video>
                    <a className="close-modal" onClick={()=>props.showhandler(false)}>✖</a>
                </div>
            </div>   
    ):'';
    
}


export default Popup