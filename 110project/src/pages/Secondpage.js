import React from 'react'
import '../styles/secondpage.css'


const Secondpage = () => {

    const TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        //字消失或增加
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        const that = this;
        var delta = 130 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        //判斷是否需刪除字
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
        },delta);
    };

    window.onload = function() {
        setTimeout("location.href='account'",11500);
        var elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) { //是否還有剩餘字串
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

    };

  return (
    <body>
    <div className='secondpage' >
    <h1>
    <div class="typewrite" data-period="1500" data-type='[ "......有人在那裡嗎？", "我需要你的幫忙", "我接下來會邀請你加入一個論壇", "請你幫助我揪出內鬼" ]'>
    <span class="wrap"></span>
    </div>
    </h1>
    </div>
    </body>
  )
}

export default Secondpage