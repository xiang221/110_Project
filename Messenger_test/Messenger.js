/*--------------------------------劇本-----------------------------------*/

const Msg1 = [{//開場對話
  sender: "系統",
  msg: "A已將您加入群組(人數:7人)",
  delay: 1000,
  align: "center",
  showTime: true,
  time: "19:58",
  sysMsg: true
  },
  {
  sender: "A",
  msg: "嗨嗨，歡迎加入",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false,
  blueWords: false
},
{
  sender: "玩家",
  msg: "安安",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "噁男",
  msg: "妹子ㄇ",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "系統",
  msg: "B已將噁男移出群組(人數:6人)",
  delay: 1000,
  align: "center",
  showTime: true,
  time: "19:58",
  sysMsg: true
},  
{
  sender: "玩家",
  msg: "欸不是，6個人是要怎麼多數決?",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "系統",
  msg: "B已將潛水艇移出群組(人數:5人)",
  delay: 1000,
  align: "center",
  showTime: true,
  time: "19:58",
  sysMsg: true
},  
{
  sender: "C",
  msg: "嗨嗨，跟你說明一下，從今天起，你就是管理團隊的一員囉。我們的管理權限召集人每周會輪值，一共有三個管理權限:論壇拉人、論壇踢人、管理群管理。因此下周開始你要負責召集拉人進論壇的權限喔。",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "玩家",
  msg: "OK，了解了!",
  delay: 1000,
  align: "right",
  showTime: true,
  time: "19:58",
  sysMsg: false
}              
             ];

const Msg2 = [//關卡一第一段
  {
  sender: "C",
  msg: "<span class='message-text'><span class='message-bluetext'>@D</span>，嗨我有事要私訊你喔。</span>",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false,
  blueWords: true
  },
  {
  sender: "系統",
  msg: "2小時後",
  delay: 1000,
  align: "center",
  showTime: true,
  time: "19:58",
  sysMsg: true
},
{
  sender: "C",
  msg: "<span class='message-text'><span class='message-bluetext'>@D</span>，請問有看到嗎？</span>",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false,
  blueWords: true
},
{
  sender: "系統",
  msg: "5小時後",
  delay: 1000,
  align: "center",
  showTime: true,
  time: "19:58",
  sysMsg: true
},
{
  sender: "D",
  msg: "抱歉現在才看到，最近手機都會莫名其妙噴電==",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "A",
  msg: "該換一支了吧",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "D",
  msg: "沒錢QQ",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "C",
  msg: "<span class='message-text'><span class='message-bluetext'>http://fuckyourphone.com/login</span></span>",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false,
  blueWords: true
},
{
  sender: "C",
  msg: "這個啦~填一些基本資料就可以抽iphone欸",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
},
{
  sender: "C",
  msg: "現在才100多人抽欸，我還不抽爆",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
}
];
const Msg3 = [//關卡一第二段
  {
  sender: "A",
  msg: "已抽，我是第187個",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false,
  },
{
  sender: "C",
  msg: "诶!?我也是第187個欸",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false,
  blueWords:true
},
{
  sender: "D",
  msg: "白癡喔，不要亂傳這種釣魚連結啦",
  delay: 1000,
  align: "left",
  showTime: true,
  time: "19:58",
  sysMsg: false
}
];


const Buttons = [{
    id: 1,
    quesHeader: "選項說明的標題",
    quesBody: "選項說明的內文",
    options: [
          {
            text: '點進連結',
            nextMsgName: null,
            optState: "點進連結"
          },
          {
            text: '不點連結',
            nextMsgName: Msg3,
            optState: "不點連結"
          }
      ]
}];
/*------------------------------依選擇跳轉-------------------------------------*/

const chatList = document.getElementById('chat-list')
const optionButtonsElement = document.getElementById('option-buttons') //抓取HTML中的Button
const answerButton = document.getElementById('answer-button')
const buttonsModal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const closeButton = document.getElementById('close-button')
closeButton.addEventListener('click', () => hideOption())

let delaySum;//加上Delay時間計算 去算answer按鈕什麼時候要跑出來
let optState = []; //記錄玩家的每一次選擇
let LevState;//紀錄玩家這一關是成功或失敗

function showMsg(msgName) {//顯示一連串的聊天動畫
  //刪除上一回合的btn (如果optionButtonsElement.firstChild === true,重覆刪除子節點，直至變false)
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  answerButton.disabled = true;//禁用answerButton
  //buttonsModal.style.display = "none";//把Button選項頁面藏起來
  msgJQ(msgName);//套入訊息的格式
}

function setOption(btnId){//把Button有的選項都在HTML先做出來
  const Button = Buttons.find(Button => Button.id === btnId)
  const button = document.createElement('button')//在HTML新創一個button物件
  
  Button.options.forEach(option => {//對每個丟進來的option陣列中的元素做迴圈
    if (option !== null) {//如果showOption的State == null或是他有state
      const button = document.createElement('button')//在HTML新創一個button物件
      button.innerText = option.text//指定裡面的文字是option裡面的文字
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
  
  const quesHeader = document.getElementById('question-header');
  const quesBody = document.getElementById('question-body');
  
  if (Button.quesHeader !== null) {
    quesHeader.innerText = Button.quesHeader;
    quesHeader.style.display = "block";
  }
  else{
    quesHeader.style.display = "none";
  }
    //如果選擇有標題或內文說明就顯示，沒有的話就隱藏

  if (Button.quesBody !== null) {
      quesBody.innerText = Button.quesBody;
      quesBody.style.display = "block";
    }
  else{
    quesBody.style.display = "none";
  }
  
  btnJQ();//顯示玩家輸入中的動畫
  answerButton.disabled = false;//把answerButton變成可用
  answerButton.addEventListener("click", showOption);
}

function showOption(){//讓Button選項跳出頁面
  buttonsModal.classList.add("active");
  overlay.classList.add("active");
}

function hideOption(){
  buttonsModal.classList.remove("active");
  overlay.classList.remove("active");
}

function selectOption(option) {//玩家按下他選擇的選項後發生的事
  hideOption();//把Button選項跳出頁面收回去
  chatList.removeChild(chatList.lastChild)//把玩家輸入中的動畫刪掉
  answerButton.disabled = true;//禁用answerButton
  optState.push(option.optState)
  console.log(optState)
  
  const nextMsgName = option.nextMsgName
  //state = Object.assign(state, option.setState) //記錄玩家的選擇
  if (nextMsgName === null) {
    console.log("mission completed")//判斷玩家這一關是否成功
    //return ;
  }
  else{
    showMsg(nextMsgName)
    //在這邊要加上用delay去連接第二個要跑的MsgName，讓他可以單純Msg接Msg
  }
}


/*----------------------------------格式--------------------------------------*/
//設定滾動條
function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};

function msgJQ(MsgName){
  let chatDelay = 0;
  delaySum = 0;
  $.each(MsgName, function(index, obj) {
    chatDelay = chatDelay + 2500;//預設每個對話的間隔時間(原4000，覺得有點多，改2500)
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = " ";
    senderString = " ";//++
    msgname = "." + obj.name;//把訊息內容套進去CSS裡面的
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
      chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    }
    //加上sender的格式
    senderString = "<span class='message-sender'>" + obj.sender + "</span>"

    if (obj.sysMsg) {//是系統訊息的話用這一個JQuery
        $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span></div></li>");
        chatDelay =  chatDelay - 2500 + obj.delay //抵銷為了輸入中動畫 每次都會待機的4000ms
        $(msgname).delay(chatDelay).fadeIn();//顯示背景
        $(msginner).delay(chatDelay).fadeIn();//顯示內文
        delaySum += obj.delay;//如果上面chatDelay沒有剛好抵銷預設值的話 這邊要再加上去 不然按鈕快冒出來
        setTimeout(onRowAdded, delaySum);
      }
 
    if (obj.blueWords){//如果裡面有連結或標註的藍字
    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden>" + senderString +  obj.msg  + chatTimeString + "</div></li>");
    $(msgname).delay(chatDelay).fadeIn();//被隱藏的
    $(spinner).delay(chatDelay2).hide(1);//等待中的...
    $(msginner).delay(chatDelay3).fadeIn();//一開始藏起來，後來浮現的
    delaySum += obj.delay+ 2510;//把它加上上面的chatDelay3
    //console.log(delaySum)//Debug先印出來試試看
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
    }
    
    if (!obj.sysMsg && !obj.blueWords){//一般訊息的話用這個JQuery
    /*這邊是把HTML的chat-message-list(ul)的內容(li)具體寫出來(左右方向跟訊息內容)*/
    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div></div><div class='messageinner-" + obj.name + "' hidden>" + senderString + "<span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
    $(msgname).delay(chatDelay).fadeIn();//被隱藏的
    $(spinner).delay(chatDelay2).hide(1);//等待中的...
    $(msginner).delay(chatDelay3).fadeIn();//一開始藏起來，後來浮現的
    delaySum += obj.delay+ 2510;//把它加上上面的chatDelay3
    //console.log(delaySum)//Debug先印出來試試看
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
    }
    });
}

function btnJQ(){//玩家輸入中的動畫
    $(".chat-message-list").append("<li class='message-right' id='spin-animate'><span class='spinme-right'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></li>");
  onRowAdded()
}


/*----------------------------呼叫函式----------------------------*/

showMsg(Msg1);
//setTimeout("showMsg(Msg2)",delaySum);
//setTimeout("setOption(1)", delaySum);
