import React from 'react'
import '../styles/secondpage.css'
import video from '../picture/backgoundVideo.mp4';

const Secondpage = () => {

    

    const Text = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    Text.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        //刪除文字特效
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        const that = this;
        var delta = 140 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
          that.tick();
          }, delta);
        
    }

    window.onload = function() {
        setTimeout("location.href='signup'",14000);
        let elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new Text(elements[i], JSON.parse(toRotate), period);
            }
            
        }

    };

  return (
    <>
    <video autoPlay muted loop style={{zIndex:-100, position:'fixed', objectFit:'fill'}} >
    <source src={video} type='video/mp4'/>
    </video> 
    <div className='secondpage'>
      <h1>
      <a class="typewrite" data-period="2000" data-type='[ "......有人在那裡嗎？", "我需要你的幫忙", "我接下來會邀請你加入一個論壇", "請你幫助我揪出內鬼" ]'>
      <span class="wrap"></span>
      </a>
      </h1>
    </div>
  </>
  )
}

export default Secondpage