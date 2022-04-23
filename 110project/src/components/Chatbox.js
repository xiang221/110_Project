import React, { useState, Component, useEffect } from 'react'
import '../styles/chatbox.css'


var optionState = [];

//角色分配(Random)
class Character extends React.Component {
  constructor(realName, nickName, chatPicSrc) {
    super(realName, nickName, chatPicSrc);
    this.realName = realName;
    this.nickName = nickName;
    this.chatPicSrc = chatPicSrc;
  };
}

const nickNameRandomList = [["A", "B", "D", "B", "D"], ["B", "A", "D", "A", "D"], ["D", "A", "B", "A", "B"], ["A", "D", "B", "D", "B"], ["B", "D", "A", "D", "A"], ["D", "B", "A", "B", "A"],
["A", "B", "D", "D", "B"], ["B", "A", "D", "D", "A"], ["D", "A", "B", "B", "A"], ["A", "D", "B", "B", "D"], ["B", "A", "D", "A", "D"], ["D", "B", "A", "A", "B"]]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const nickNameRandomIndex = getRandomInt(11)
const nickNameList = nickNameRandomList[nickNameRandomIndex]

//console.log("nickNameRandomList = " + nickNameRandomList);
console.log("nickNameRandomIndex = " + nickNameRandomIndex);
console.log("nickNameRandomList" + nickNameList);

function assignChatPic(nickName) {//圖片待UI補
  if(nickName === "A"){
    return "https://img.onl/zxNUe"
  }
  else if(nickName === "B"){
    return "https://img.onl/zpL9RB"
  }
  else if(nickName === "C"){
    return "https://img.onl/XERRDA"
  } 
  else if(nickName === "D"){
    return "https://img.onl/V9HtiR"
  }
}

const Young = new Character("Young", "C", assignChatPic("C")) //對應劇本 資深鄉民
const Robot = new Character("Robot", nickNameList[0], assignChatPic(nickNameList[0])) //對應劇本 機器人
const God = new Character("God", nickNameList[1], assignChatPic(nickNameList[1])) //對應劇本 創世神
const Hack = new Character("Hack", nickNameList[2], assignChatPic(nickNameList[2])) //對應劇本 駭客
const GodOrHack = new Character("GodOrHack", nickNameList[3], assignChatPic(nickNameList[3])) //對應劇本 創世神或駭客
const HackOrGod = new Character("HackOrGod", nickNameList[4], assignChatPic(nickNameList[4])) //對應劇本 駭客或創世神
const Player = new Character("Player", "Player", "") //待補玩家名字
const System = new Character("System", "System", "") //備用

const Accuse2List = [Young, Robot, GodOrHack, HackOrGod]//第二關玩家指認中毒者的選項
const HintList = [Young, Robot, God, Hack]//第三關提示選項中的選項
const Accuse3List = [Young, Robot, God, Hack]//第三關玩家指認駭客的選項

//劇本的物件陣列
const Scripts = [
  {
    scriptId: 0,//開場對話
    options: [
      { text: "了解A", nextScriptId: 1 },//按下answer按鈕後跳出的選項文字，與按下選項之後要跳轉的下一個劇本ID
      { text: "了解B", nextScriptId: 1 },
    ],
    messages: [//這一個劇本ID下的具體聊天室內容
      { align: "message-center", text: Young.nickName + "已將您加入群組(人數:7人)" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "嗨嗨，歡迎加入", time: "上午12:36" },
      { align: "message-right", text: "安安", time: "上午12:36" },
      { align: "message-left-first", sender: "噁男", chatPicSrc: God.chatPicSrc, text: "React好難", time: "上午12:36" },//噁男照片待補
      { align: "message-center", text: Robot.nickName + "已將噁男移出群組(人數:6人)" },
      { align: "message-right", text: "欸不是，6個人是要怎麼多數決?", time: "上午12:36" },
      { align: "message-center", text: Robot.nickName + "已將潛水艇移出群組(人數:5人)" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "嗨嗨，跟你說明一下，從今天起，你就是管理團隊的一員囉。我們的管理權限召集人每周會輪值，一共有三個管理權限:群組拉人、群組踢人、管理權限管理。因此下周開始你要負責拉人進群組的權限喔。", time: "上午12:36" },
      { align: "message-right", text: "OK，了解了!", time: "上午12:36" },
    ]
  },
  {
    scriptId: 1,//第一關_資安小尖兵_第一段
    options: [
      { text: "點進連結", nextScriptId: 2 },//進入輸入帳號密碼介面
      { text: "不點連結", nextScriptId: 3 },//進入Pass後劇本
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-normal"><span className="message-bluetext">@{Robot.nickName}</span>，嗨我有事要私訊你喔。</span>, time: "上午12:36" },
      { align: "message-center", text: "(兩小時後)" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-normal"><span className="message-bluetext">@{Robot.nickName}</span>請問有看到嗎？</span>, time: "上午12:36" },
      { align: "message-center", text: "(五小時後)" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "抱歉現在才看到，最近手機都會莫名其妙噴電==", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "該換一支了吧", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-bluetext">http://fuckyourphone.com/login</span>, time: "上午12:36" },
      { align: "message-left", text: "這個啦~填一些基本資料就可以抽iphone欸", time: "上午12:36" },
      { align: "message-left", text: "現在才100多人抽欸，我還不抽爆", time: "上午12:36" }
    ]
  },
  {
    scriptId: 2,//第一關_資安小尖兵_第二段(點進連結) //已補input帳號密碼介面
    options: [
      { text: "選項C", nextScriptId: null },
      { text: "選項D", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: "匿名梨子", chatPicSrc: "https://img.onl/1MG2S1", text: "這是第二個訊息", time: "上午12:36" },
      { align: "message-left-first", sender: "匿名蘋果", chatPicSrc: "https://img.onl/1MG2S1", text: "第二個測試", time: "上午12:36" },
      { align: "message-left", text: "React好難", time: "上午12:36" }
    ]
  },
  {
    scriptId: 3,//第一關_資安小尖兵_第二段(不點進連結)
    options: [
      { text: "點進連結", nextScriptId: 4 },
      { text: "不點連結", nextScriptId: 5 },
    ],
    messages: [
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "已抽，我是第187個", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "诶!?我也是第187個欸", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "白癡喔，不要亂傳這種釣魚連結啦", time: "上午12:36" },
    ]
  },
  {
    scriptId: 4,//第一關_資安小尖兵_第三段(Pass)
    options: [
      { text: "進入第二關", nextScriptId: 6 },
      { text: "進入第二關", nextScriptId: 6 },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "歐不，我好像帳號被盜了，大家不要點那個連結!", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "原來現在還有人會中這種低級的招喔(笑", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "看來我們剛見證了史前人類使用手機的過程呢", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "抱歉啦我就蠢咩，有點連結的趕快去換密碼喔", time: "上午12:36" }
    ]
  },
  {
    scriptId: 5,//第一關_資安小尖兵_第三段(Fail)
    options: [
      { text: "進入第二關", nextScriptId: 6 },
      { text: "進入第二關", nextScriptId: 6 },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "歐不，我好像帳號被盜了，大家不要點那個連結!", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "白癡喔，不要亂傳這種釣魚連結啦", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "看來我們剛見證了史前人類使用手機的過程呢", time: "上午12:36" }
    ]
  },
  {
    scriptId: 6,//第二關_誰中毒了_第一段
    options: [
      { text: "我覺得有內鬼", nextScriptId: 7 },
      { text: "我覺得沒內鬼", nextScriptId: 12 },
    ],
    messages: [
      {
        align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-normal"><span className="message-bluetext">@{Young.nickName}</span>，麻煩你小心一點欸，如果有心人士盜你帳號把病毒傳進來怎麼辦?
        </span>, time: "上午12:36"
      },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "我覺得還好欸，除非有心人士就在群組裡面。", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "我也覺得還好，難道群組有那麼容易潛入嗎? ", time: "上午12:36" }
    ]
  },
  {
    scriptId: 7,//第二關_誰中毒了_第二段(我覺得有內鬼)
    options: [
      { text: <span>但我也覺得{Young.nickName}很可疑</span>, nextScriptId: 8 },
      { text: "我也覺得壞人不會那麼明顯", nextScriptId: 9 },
    ],
    messages: [
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span>阿就{Young.nickName}一直在雷阿，如果有內鬼應該很明顯吧(笑</span>, time: "上午12:36" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "嘿阿，你一直幹蠢事很難讓人不懷疑你", time: "上午12:36" },
      { align: "message-left-first", sender: HackOrGod.nickName, chatPicSrc: HackOrGod.chatPicSrc, text: "不過壞人這樣做也蠢得太明顯了吧?", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "嘿咩，你以為壞人會大搖大擺秀給你看「我是壞人」喔?", time: "上午12:36" }
    ]
  },
  {
    scriptId: 8,//第二關_誰中毒了_第三段(我覺得資深鄉民很可疑)
    options: [
      { text: "第二關指認(待補)", nextScriptId: 16 },
      { text: "第二關指認(待補)", nextScriptId: 16 },
    ],
    messages: [
      { align: "message-left-first", sender: HackOrGod.nickName, chatPicSrc: HackOrGod.chatPicSrc, text: "也是，搞不好就是故意做得很明顯掩護自己。", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span>這麼一說，{Young.nickName}真的有點像被盜帳號一直亂傳連結的那種朋友呢</span>, time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "喂，我真的不是啦，我只是平常對資安比較沒放在心上而已", time: "上午12:36" }

    ]
  },
  {
    scriptId: 9,//第二關_誰中毒了_第三段(我也覺得壞人不會那麼明顯)
    options: [
      { text: <span>我也覺得{Robot.nickName}一直在帶風向很奇怪</span>, nextScriptId: 10 },
      { text: <span>我覺得{Robot.nickName}只是比較謹慎而已</span>, nextScriptId: 11 },
    ],
    messages: [
      { align: "message-left-first", sender: HackOrGod.nickName, chatPicSrc: HackOrGod.chatPicSrc, text: "是嗎?可是你又說有內鬼，不然你覺得會是誰?", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "可能壞人不只一個呢(笑", time: "上午12:36" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "那種一直在帶風向滿可疑的", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "你們現在不就在帶風向嗎?", time: "上午12:36" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "從剛剛機器人就一直在帶風向阿，看起來有點心虛呢", time: "上午12:36" }
    ]
  },
  {
    scriptId: 10,//第二關_誰中毒了_第四段(我也覺得機器人一直在帶風向很奇怪)
    options: [
      { text: "第二關指認(待補)", nextScriptId: 16 },
      { text: "第二關指認(待補)", nextScriptId: 16 },
    ],
    messages: [
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "你才是一直在帶風向吧，說有內鬼的是你，說別人在帶風向也是你，作賊喊抓賊zzz", time: "上午12:36" },
    ]
  },
  {
    scriptId: 11,//第二關_誰中毒了_第四段(我覺得機器人只是比較謹慎而已)
    options: [
      { text: "第二關指認(待補)", nextScriptId: 16 },
      { text: "第二關指認(待補)", nextScriptId: 16 },
    ],
    messages: [
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "抱歉啦各位，我是真的很怕群組被入侵，口氣激動了點", time: "上午12:36" },
    ]
  },
  {
    scriptId: 12,//第二關_誰中毒了_第二段(我覺得沒內鬼)
    options: [
      { text: <span>我覺得{GodOrHack.nickName}才在帶風向</span>, nextScriptId: 13 },
      { text: <span>我覺得{Robot.nickName}你才是在帶風向</span>, nextScriptId: 14 },
      { text: <span>我覺得{Young.nickName}可能被盜了</span>, nextScriptId: 15 }
    ],
    messages: [
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "內鬼當然會說沒有內鬼囉", time: "上午12:36" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "那你覺得內鬼是誰?", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span>{Young.nickName}或{Player.nickName}吧。{Young.nickName}感覺就是被盜了阿，然後{Player.nickName}一直在帶風向</span>, time: "上午12:36" }
    ]
  },
  {
    scriptId: 13,//第二關_誰中毒了_第三段(我覺得創世神 or 駭客才在帶風向)
    options: [
      { text: "第二關指認(待補)", nextScriptId: 16 },
      { text: "第二關指認(待補)", nextScriptId: 16 },
    ],
    messages: [
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "你要這樣想也沒辦法囉", time: "上午12:36" }
    ]
  },
  {
    scriptId: 14,//第二關_誰中毒了_第三段(我覺得機器人你才是在帶風向)
    options: [
      { text: "第二關指認(待補)", nextScriptId: 16 },
      { text: "第二關指認(待補)", nextScriptId: 16 },
    ],
    messages: [
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "說沒有內鬼的是你，說別人在帶風向也是你，到底???", time: "上午12:36" }
    ]
  },
  {
    scriptId: 15,//第二關_誰中毒了_第三段(我覺得資深鄉民可能被盜了)
    options: [
      { text: "第二關指認(待補)", nextScriptId: 16 },
      { text: "第二關指認(待補)", nextScriptId: 16 },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "真的沒有被盜啦，我下次會更注意安全的", time: "上午12:36" }
    ]
  },
  {
    scriptId: 16,//第三關_揪出駭客_第一段 //待補指認介面
    options: [
      { text: "第二關指認(待補)", nextScriptId: 16 },
      { text: "第二關指認(待補)", nextScriptId: 16 },
    ],
    messages: [
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "必須說，管理群的篩選標準應該要嚴格一點吧，像資深鄉民這種天兵是不是應該被淘汰?", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "天兵再怎麼耍蠢也只是害慘自己，我覺得一直帶風向的人才是其心可誅。", time: "上午12:36" }
    ]
  },
  {
    scriptId: 17,//第三關_揪出駭客_第二段(e1-f1)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "我承認，我的確有點進去剛剛資深鄉民傳的釣魚連結，但我是為了提醒大家才點進去確認的。", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "聽你在屁，帶風向就算了，耍蠢還想要洗白?", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "我才說篩選標準要嚴格一點吧，蠢蛋和帶風向的應該都被淘汰!", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "恩，你們兩個在自導自演吧?一下衝突一下炮口一致，你以為大家看不出來?", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "原來喔，難怪我一直覺得他們兩個很可疑。", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "很明顯吧。", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "你又知道了?透露這麼多資訊，不怕真實身分曝光嗎(笑", time: "上午12:36" }
    ]
  },
  {
    scriptId: 18,//第三關_揪出駭客_第二段(e1-f2)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "是囉，畢竟要讓大家看清楚局勢，也只能這樣了", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "哦?直接暗示自己的身分了?這種要嘛是在掩護真正的創世神，要嘛就是有心人士在擾亂風向，大家自己判斷囉。", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "咦，我反而覺得機器人你很像創世神欸。", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "真正的創世神才不會這麼明顯地提示好嘛==", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "呵呵，難道我是創世神還要特別跟你說嗎?", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，少假鬼假怪了。清者自清，不需要你特別跳出來刷存在。", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>誰在假鬼假怪其實很明顯吧，{Player.nickName}，你覺得呢?</span>, time: "上午12:36" }
    ]
  },
  {
    scriptId: 19,//第三關_揪出駭客_第二段(e2-f1)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，你要帶風向也有點邏輯吧，剛剛我就看你們一群蠢蛋點進釣魚連結，我可是點都沒有點開呢!", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span className="message-bluetext">@{Player.nickName}<span className="message-normal">，你還是洗洗睡啦，這種胡亂指責只會顯得你很像被操控的機器人帳號而已。</span></span>, time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "阿不就是資深鄉民你把連結傳進來的，你其實就是被操控的帳號吧?", time: "上午12:36" }
    ]
  },
  {
    scriptId: 20,//第三關_揪出駭客_第二段(e2-f2)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "是囉，畢竟要讓大家看清楚局勢，也只能這樣了", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "哦?直接暗示自己的身分了?這種要嘛是在掩護真正的創世神，要嘛就是有心人士在擾亂風向，大家自己判斷囉。", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "我如果是創世神難道會特別跟你們說嗎?", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "好了啦，你們兩個別再自導自演了，看了就想笑。", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，你少假鬼假怪了。清者自清，不需要特別跳出來刷存在。", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>誰在假鬼假怪其實很明顯吧，{Player.nickName}，你說呢?</span>, time: "上午12:36" }
    ]
  },
  {
    scriptId: 21,//第三關_揪出駭客_第二段(e3-f1)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "的確是，怎麼會在這麼重要的群組亂傳釣魚連結呢?", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "呵呵，看來終究被發現了呢。這些釣魚連結的確是用來釣創世神上鉤的，想不到這傢伙那麼謹慎，沒有上鉤呢。", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "其實是你上鉤了對吧?釣到自己ㄌ", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "看吧，這傢伙露出馬腳了，看來該把不適任的人踢掉了呢", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>且慢，我覺得事情沒那麼簡單，{Player.nickName}，你怎麼看?</span>, time: "上午12:36" }
    ]
  },
  {
    scriptId: 22,//第三關_揪出駭客_第二段(e3-f2)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "笑死，你才在帶風向吧。帶風向也要有點邏輯，你哪時看到我在帶風向了?", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "是沒有帶風向啦，不過你亂傳連結倒是真的滿欠踢的。", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "笑你不敢啦。俗辣", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "喂喂，不要這樣亂嗆人吧", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "呵呵，平常講話都唯唯諾諾的，現在惱羞露出真面目了吧。", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "不過就是這樣才反常吧，也許他帳號被盜了?", time: "上午12:36" }
    ]
  },
  {
    scriptId: 23,//第三關_揪出駭客_第二段(e4-f1)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "笑死，你要帶風向也有點邏輯吧，剛剛我就看你們一群蠢蛋點進釣魚連結，我可是點都沒有點開呢!", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: <span className="message-bluetext">@{Player.nickName}<span className="message-normal">，你還是洗洗睡啦，這種胡亂指責只會顯得你很像被操控的機器人帳號而已。</span></span>, time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span>其實我也覺得是我比較不謹慎欸，{Player.nickName}你是不是搞錯什麼了?</span>, time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>這麼說起來，我也不覺得{Robot.nickName}有很不謹慎就是了。</span>, time: "上午12:36" }
    ]
  },
  {
    scriptId: 24,//第三關_揪出駭客_第二段(e4-f2)
    options: [
      { text: "第三關指認(待補)", nextScriptId: null },
      { text: "第三關指認(待補)", nextScriptId: null },
    ],
    messages: [
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: ":笑死，那我幹嘛說帶風向的人其心可誅，作賊喊抓賊?", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "就是一種混淆的策略吧。讓人相信你沒有在帶風向。", time: "上午12:36" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "有道理欸，雖然我聽得不是很懂。", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "你們就別再自導自演了，看了就想笑。", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "你也不用裝得好像自己是什麼智者似的混淆視聽好嗎?", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，難道我是創世神還要特別跟大家說嗎?", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "真正的創世神才不會這麼明顯地提示大家好嘛==", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span>好啦你們別吵了，{Player.nickName}你怎麼看呢?</span>, time: "上午12:36" }
    ]
  },
]

const Chatbox = () => {

  const [buttonPopup, setButtonPopup] = useState(false); //用useState設定目前Optionbuttons的Popup狀態
  const [currScriptState, setCurrScriptState] = useState(0);//用useState設定目前在進行中的劇本ID
  const [inputPopup, setInputPopup] = useState("display:none");//用useState設定目前在進行中的劇本ID
  const [accuse2Popup,setAccuse2Popup] = useState(false)//控制第二關指認介面Popup
  const [hintPopup,setHintPopup] = useState(false)//控制第三關選項提示介面Popup
  const [currHint,setCurrHint] = useState(1)//第三關選項提示介面跳轉
  const [accuse3Popup,setAccuse3Popup] = useState(false)//控制第二關指認介面Popup

  const ShowMessage = (props) => {
    //用filter從上面的Script物件陣列中，抓取和currScriptState的ID相同的劇本顯示出來
    const CurrScript = Scripts.filter(Script => Script.scriptId === props.currScript)
    console.log("currscriptState = " + currScriptState);//顯示目前的進行中的劇本ID

    const messageList = CurrScript.map((CurrScript) =>
      CurrScript.messages.map((sub) =>
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
      </>
    )
  }

  const OptionBtn = (props) => {//設定option-button的選項介面

    let CurrScript = Scripts.filter(Script => Script.scriptId === props.currScript)
    let option1 = CurrScript.map(Script => Script.options[0]);
    let option2 = CurrScript.map(Script => Script.options[1]);
    let option1Text = option1.map(sub => sub.text)
    let option2Text = option2.map(sub => sub.text)
    let nextScriptId1 = option1.map(sub => sub.nextScriptId);
    let nextScriptId2 = option2.map(sub => sub.nextScriptId);
    console.log("optionbutton scriptState = " + props.currScript);


    function record(optionText) {//記錄玩家選擇的option按鈕的文字
      optionState.push(optionText);
      console.log("optionText record = " + optionState)
    };

    function changeScript(nextScriptId) {
      let nextScriptIdNumber = Number(nextScriptId)
      setCurrScriptState(nextScriptIdNumber)
    }

    return (props.trigger) ? (//Answer按鈕是否被按下，按下的話option-button的介面就會跳出來
      //按下option-button介面中的其中一個選項按鈕，會關閉option-button介面、記錄玩家選擇的按鈕的文字、將CurrScriptState更新成劇本中按下按鈕後要接續的下個劇本ID
      <>
        <div id="option-popup">
          <div id="option-buttons" className="option-btn-grid">
            <button className="option-btn" onClick={(event) => { props.setTrigger(false); record(option1Text); changeScript(nextScriptId1); }}>{option1Text}</button>
            <button className="option-btn" onClick={(event) => { props.setTrigger(false); record(option2Text); changeScript(nextScriptId2); }}>{option2Text}</button>
          </div>
        </div>
        <div id="overlay"></div>
      </>
    ) : "";
  }

  const InputPopup = (props) => {//第一關的帳號密碼輸入介面

    if(props.currScript === 2){
      props.setStyle("display:block");
    }
    else{props.setStyle("display:none");}

    const [accField, setAccField] = useState("");
    const [pwdField, setPwdField] = useState("");
    const [savedAcc, setSavedAcc] = useState("");
    const [savedPwd, setSavedPwd] = useState("");
    const [accResult, checkAcc] = useState("");
    const [pwdResult, checkPwd] = useState("");

    const Save =(e) => {
      e.preventDefault();
      setSavedAcc(accField);
      setSavedPwd(pwdField);
    };

    useEffect(()=>{
      // console.log("儲存的帳號" + savedAcc)
      if(savedAcc === "123" ){//待改成本地儲存的玩家帳號
        return checkAcc(true)
      }
      if(savedAcc !== "123" && savedAcc!==""){//待改成本地儲存的玩家帳號
        return checkAcc(false)
      }
    },[savedAcc])

    useEffect(()=>{
      // console.log("儲存的密碼" + savedPwd)
      if(savedPwd === "456" ){//待改成本地儲存的玩家帳號
        return checkPwd(true)
      }
      if(savedPwd !== "456" && savedPwd!=="" ){//待改成本地儲存的玩家帳號
        return checkPwd(false)
      }
    },[savedPwd])

    useEffect(()=>{//判斷下一個要跳轉的劇本ID、關掉inputPopup介面
      if( accResult !=="" && pwdResult !==""){//確認不是預設狀態
        //如果帳密都輸對，跳劇本5，關掉介面
        if( accResult && pwdResult){setCurrScriptState(5); props.setStyle("display:none"); props.setStyle("display:none"); console.log("狀況一")}
        //如果帳號對密碼錯，跳劇本5，關掉介面
        else if( accResult  && !pwdResult){setCurrScriptState(5); props.setStyle("display:none"); console.log("狀況二");}
        //如果帳號錯密碼對or帳號錯密碼錯，跳劇本4，關掉介面
        else if( (!accResult && pwdResult) || (!accResult && !pwdResult) ){setCurrScriptState(4); props.setStyle("display:none"); console.log("狀況三");}
        else console.log("狀況四"); props.setStyle("display:none");
      }
      // else(console.log("InputPopup還在預設狀態"))
    })


    if(props.style==="display:none"){
      return "";
    }

    if(props.style==="display:block"){
      return <>
        <div id="input-popup">
          <div className="input-popup-container">
            <div>恭喜您!您是今日的第187位訪客!填入基本資料已獲得抽取iphone大獎的機會!<br />請依序填入您的</div>
            <form onSubmit={Save} >
              <div>東方哈拉帳號:</div>
              <input type="text" value={accField} placeholder="請輸入您的帳號" onChange={(e) => { setAccField(e.target.value) }} />
              <div>東方哈拉帳號:</div>
              <input type="text" value={pwdField} placeholder="請輸入您的密碼" onChange={(e) => { setPwdField(e.target.value) }} />
              <button type="submit">提交</button>
          </form>
          </div>
        </div>
      </>
    }
  }

  const Accuse2= (props) => {//第二關，指認中毒者的介面

    function whoisControlled(nickNamepicked){
      let pickedCharacter = Accuse2List.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來要用陣列
      // console.log("玩家選的選項文字 = " + nickNamepicked);
      // console.log(pickedCharacter);
      // console.log(pickedCharacter[0].realName)
      if(pickedCharacter[0].realName === 'HackOrGod'){//待順過劇本的第二關中毒者的身分
        optionState.push('第二關指認成功');
        console.log("optionState = "+optionState)
      }
      else{
        optionState.push('第二關指認失敗');
        console.log("optionState = "+optionState)
      }
    }

    function changeScript(nextScriptId) {
      let nextScriptIdNumber = Number(nextScriptId)
      setCurrScriptState(nextScriptIdNumber)
    }

    return (props.trigger) ? (//指認後直接跳轉到第三關
      <>
        <div id="accuse2-popup">
          <div id="accuse2-btn" className="accuse2-btn-grid">
            <div className="accuse2-title">你覺得誰中毒了？</div>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("A"); changeScript(16); props.setTrigger(false); }}>{"A"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("B"); changeScript(16); props.setTrigger(false); }}>{"B"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("C"); changeScript(16); props.setTrigger(false); }}>{"C"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisControlled("D"); changeScript(16); props.setTrigger(false); }}>{"D"}</button>
          </div>
        </div>
      </>
    ) : "";
  }

  const Accuse3= (props) => {//第三關，指認駭客的介面

    function whoisHack(nickNamepicked){
      let pickedCharacter = Accuse3List.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來要用陣列
      if(pickedCharacter[0].realName === 'Hack'){
        optionState.push('第三關指認成功');
        console.log("optionState = "+optionState)
      }
      else{
        optionState.push('第三關指認失敗');
        console.log("optionState = "+optionState)
      }
    }

    function changeScript(nextScriptId) {
      let nextScriptIdNumber = Number(nextScriptId)
      setCurrScriptState(nextScriptIdNumber)
    }

    return (props.trigger) ? (//指認後直接跳轉到第三關
      <>
        <div id="accuse2-popup">
          <div id="accuse2-btn" className="accuse2-btn-grid">
            <div className="accuse2-title">你覺得誰中毒了？</div>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("A"); changeScript(16); props.setTrigger(false); }}>{"A"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("B"); changeScript(16); props.setTrigger(false); }}>{"B"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("C"); changeScript(16); props.setTrigger(false); }}>{"C"}</button>
            <button className="accuse2-btn" onClick={(event) => { whoisHack("D"); changeScript(16); props.setTrigger(false); }}>{"D"}</button>
          </div>
        </div>
      </>
    ) : "";
  }

  const Hint = (props) => {//第三關，選擇提示部分

    let HintState = [];

    function changeCurrHint(nextHint){
        setCurrHint(nextHint)
    }

    function changeScript(nextScriptId) {
      let nextScriptIdNumber = Number(nextScriptId)
      setCurrScriptState(nextScriptIdNumber)
    }

    function Hint1(nickNamepicked){//是誰不謹慎(f1)
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if(pickedCharacter[0].realName === 'God'){
        HintState.push("e1-f1");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Hack'){
        HintState.push("e2-f1");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Young'){
        HintState.push("e3-f1");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Robot'){
        HintState.push("e4-f1")
        console.log("Hint1 = "+HintState);
      }
      else console.log("Hint1 有問題")
    }
    
    function Hint2(nickNamepicked){//是誰在帶風向(f2)
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if(pickedCharacter[0].realName === 'God'){
        HintState.push("e1-f2");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Hack'){
        HintState.push("e2-f2");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Young'){
        HintState.push("e3-f2");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Robot'){
        HintState.push("e4-f2")
        console.log("Hint1 = "+HintState);
      }
      else console.log("Hint2 有問題")
    }

    function Hint3(nickNamepicked){//直接連到最後
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列
      if(pickedCharacter[0].realName === 'God'){
        HintState.push("e1-f2");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Hack'){
        HintState.push("e2-f2");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Young'){
        HintState.push("e3-f2");
        console.log("Hint1 = "+HintState);
      }
      else if (pickedCharacter[0].realName === 'Robot'){
        HintState.push("e4-f2")
        console.log("Hint1 = "+HintState);
      }
      else console.log("Hint2 有問題")
    }

    function Disable(nickNamepicked){
      let pickedCharacter = HintList.filter(Character => Character.nickName === nickNamepicked)//因為filter回傳的是陣列 所以要找出來之後要用陣列

      if(pickedCharacter[0].realName === 'God' && (HintState.includes("God"))){
        return true;
      }
      else if (pickedCharacter[0].realName === 'Hack' && (HintState.includes("Hack"))){
        return true;
      }
      else if (pickedCharacter[0].realName === 'Young' && (HintState.includes("Young"))){
        return true;
      }
      else if (pickedCharacter[0].realName === 'Robot' && (HintState.includes("Robot"))){
        return true;
      }
      else return false
    }

    return (props.trigger && currHint === 1) ? (
      <>
        <div id="hint-popup">
          <div className="hint-title">你覺得誰不謹慎？</div>
          <div className="hint-btn-grid">
            <button className="hint-btn"  onClick={(event) => { Hint1("A"); changeCurrHint(2)}}>{"A"}</button>
            <button className="hint-btn"  onClick={(event) => { Hint1("B"); changeCurrHint(2)}}>{"B"}</button>
            <button className="hint-btn"  onClick={(event) => { Hint1("C"); changeCurrHint(2)}}>{"C"}</button>
            <button className="hint-btn"  onClick={(event) => { Hint1("D"); changeCurrHint(2)}}>{"D"}</button>
          </div>
        </div>
      </>
      ):
      (props.trigger && currHint === 2) ?
      (      <>
        <div id="hint-popup">
          <div className="hint-title">你覺得誰在帶風向？</div>
          <div className="hint-btn-grid">
            <button className="hint-btn" disabled={Disable("A")} onClick={(event) => { Hint2("A"); changeCurrHint(3)}}>{"A"}</button>
            <button className="hint-btn" disabled={Disable("B")} onClick={(event) => { Hint2("B"); changeCurrHint(3)}}>{"B"}</button>
            <button className="hint-btn" disabled={Disable("C")} onClick={(event) => { Hint2("C"); changeCurrHint(3)}}>{"C"}</button>
            <button className="hint-btn" disabled={Disable("D")} onClick={(event) => { Hint2("D"); changeCurrHint(3)}}>{"D"}</button>
          </div>
        </div>
      </>):
      (props.trigger && currHint === 3) ?
      (      <>
        <div id="hint-popup">
          <div className="hint-title">再一次，你覺得誰在帶風向？</div>
          <div className="hint-btn-grid">
            <button className="hint-btn"  onClick={(event) => { Hint3("A"); changeCurrHint(3)}}>{"A"}</button>
            <button className="hint-btn"  onClick={(event) => { Hint3("B"); changeCurrHint(3)}}>{"B"}</button>
            <button className="hint-btn"  onClick={(event) => { Hint3("C"); changeCurrHint(3)}}>{"C"}</button>
            <button className="hint-btn"  onClick={(event) => { Hint3("D"); changeCurrHint(3)}}>{"D"}</button>
          </div>
        </div>
      </>):"";
     }

  return (//顯示整個ChatBox的內容
    <>
      <div id="wrapper">
        <div className="chat">
          <div className="chat-background">
            <div className="answer-botton-container"></div>
            <div className="time-limit-container"></div>
          </div>
          <div className="time-limit">14:00</div>
          <button className="answer-button" id="answer-button" onClick={() => setButtonPopup(true)}>Answer</button>
          <div className="chat-container">
            <ul className="chat-message-list" id="chat-list">
              <ShowMessage currScript={currScriptState} />
            </ul>
            <button onClick={()=>setAccuse2Popup(true)}>Accuse2</button>
            <button onClick={()=>setAccuse3Popup(true)}>Accuse3</button>
            <button onClick={()=>setHintPopup(true)}>Hint</button>
          </div>
          <OptionBtn trigger={buttonPopup} setTrigger={setButtonPopup} currScript={currScriptState} />
          <InputPopup style={inputPopup} setStyle={setInputPopup} currScript={currScriptState}/>
          <Accuse2 trigger={accuse2Popup} setTrigger={setAccuse2Popup} currScript={currScriptState}/>
          <Accuse3 trigger={accuse3Popup} setTrigger={setAccuse3Popup} currScript={currScriptState}/>
          <Hint trigger={hintPopup} setTrigger={setHintPopup} currScript={currScriptState} currHint={currHint}/>
        </div>

      </div>
    </>
  );
}

export default Chatbox