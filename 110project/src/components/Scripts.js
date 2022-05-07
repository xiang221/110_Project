import React from 'react'
import { Young, God, Robot, Hack, GodOrHack, HackOrGod, Player, System } from './Character'

export const Scripts = [
  {
    scriptId: 103,//第二關最後
    options: [{ text: "<此回合已結束，請進入下回合>", disable: true }],
    messages: [{ text: null }]
  },
  {
    scriptId: 102,//劇本三稿新增內容 //帳號對密碼對的狀態，點進連結/不點連結 都到劇本編號5(Fail)
    options: [
      { text: "點進連結", nextScriptId: 5, },
      { text: "不點連結", nextScriptId: 5, },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "http://fuckyourphonetwice.com/gift", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "???", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "???", time: "上午12:36" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "為什麼要fxxk my phone?", time: "上午12:36" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "诶，不會被盜了吧?", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "滿有趣的，我點點看", time: "上午12:36" }
    ]
  },
  {
    scriptId: 101,//劇本三稿新增內容 //帳號對密碼錯的狀態，點進連結到劇本編號5(Fail)  不點連結到劇本編號4(Pass)
    options: [
      { text: "點進連結", nextScriptId: 5, record: false },
      { text: "不點連結", nextScriptId: 4, record: true },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "http://fuckyourphonetwice.com/gift", time: "上午12:15" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "???", time: "上午12:15" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "???", time: "上午12:15" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "為什麼要fxxk my phone?", time: "上午12:15" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "诶，不會被盜了吧?", time: "上午12:15" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "滿有趣的，我點點看", time: "上午12:15" }
    ]
  },
  {
    scriptId: -3,
    options: [{ text: "正在進行第三關提示選項", nextScriptId: -2 }],
    messages: [{ align: "正在進行第三關提示選項" }]
  },
  {
    scriptId: -2,
    options: [{ text: "正在進行第三關指認" }],
    messages: [{ align: "正在進行第三關指認" }]
  },
  {
    scriptId: -1,
    options: [{ text: "正在進行第二關指認" }],
    messages: [{ align: "正在進行第二關指認" }]
  },
  {
    scriptId: 0,//開場對話
    options: [
      { text: "<此回合已結束，請進入下回合>", disable: true  },//按下answer按鈕後跳出的選項文字，與按下選項之後要跳轉的下一個劇本ID
    ],
    messages: [//這一個劇本ID下的具體聊天室內容
      { align: "message-center", text: Young.nickName + "已將您加入群組(人數:7人)" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "嗨嗨，歡迎加入", time: "下午04:53" },
      { align: "message-right", text: "安安", time: "下午04:53" },
      { align: "message-left-first", sender: "噁男", chatPicSrc: "https://img.onl/BKTCxz", text: "妹子ㄇ?", time: "下午04:53" },//噁男照片待補
      { align: "message-center", text: Robot.nickName + "已將噁男移出群組(人數:6人)" },
      { align: "message-right", text: "欸不是，6個人是要怎麼多數決?", time: "下午04:54" },
      { align: "message-center", text: Robot.nickName + "已將潛水艇移出群組(人數:5人)" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "嗨嗨，跟你說明一下，從今天起，你就是管理團隊的一員囉。我們的管理權限召集人每周會輪值，一共有三個管理權限:群組拉人、群組踢人、管理權限管理。因此下周開始你要負責拉人進群組的權限喔。", time: "下午04:54" },
      { align: "message-right", text: "OK，了解了!", time: "下午04:55" },
    ]
  },
  {
    scriptId: 1,//第一關_資安小尖兵_第一段
    options: [
      { text: "點進連結", nextScriptId: 2, },//進入輸入帳號密碼介面
      { text: "不點連結", nextScriptId: 3, record: true },//進入Pass後劇本
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-normal"><span className="message-bluetext">@{Robot.nickName}</span>，嗨我有事要私訊你喔。</span>, time: "下午04:59" },
      { align: "message-center", text: "(兩小時後)" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-normal"><span className="message-bluetext">@{Robot.nickName}</span>請問有看到嗎？</span>, time: "下午07:00" },
      { align: "message-center", text: "(五小時後)" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "抱歉現在才看到，最近手機都會莫名其妙噴電==", time: "上午12:01" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "該換一支了吧", time: "上午12:02" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-bluetext">http://fuckyourphone.com/login</span>, time: "上午12:02" },
      { align: "message-left", text: "這個啦~填一些基本資料就可以抽iphone欸", time: "上午12:02" },
      { align: "message-left", text: "現在才100多人抽欸，我還不抽爆", time: "上午12:02" }
    ]
  },
  {
    scriptId: 2,//第一關_資安小尖兵_第二段(點進連結) //已補input帳號密碼介面//待改成
    options: [
      { text: "釣魚頁面" },
    ],
    messages: [
      { align: "message-left-first", sender: "Chen", chatPicSrc: "https://img.onl/1MG2S1", text: "待改成釣魚頁面跳轉", time: "上午12:06" }
    ]
  },
  {
    scriptId: 3,//第一關_資安小尖兵_第二段(不點進連結)
    options: [
      { text: "<此回合已結束，請進入下回合>", disable: true }
    ],
    messages: [
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "已抽，我是第187個", time: "上午12:06" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "诶!?我也是第187個欸", time: "上午12:06" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "白癡喔，不要亂傳這種釣魚連結啦", time: "上午12:07" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "歐不，我好像帳號被盜了，大家不要點那個連結!", time: "上午12:07" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "原來現在還有人會中這種低級的招喔(笑", time: "上午12:07" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "看來我們剛見證了史前人類使用手機的過程呢", time: "上午12:07" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "抱歉啦我就蠢咩，有點連結的趕快去換密碼喔", time: "上午12:07" }
    ]
  },
  {
    scriptId: 4,//第一關_資安小尖兵_第三段(Pass)
    options: [
      { text: "<此回合已結束，請進入下回合>", disable: true },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "歐不，我好像帳號被盜了，大家不要點那個連結!", time: "上午12:30" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "原來現在還有人會中這種低級的招喔(笑", time: "上午12:30" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "看來我們剛見證了史前人類使用手機的過程呢", time: "上午12:31" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "抱歉啦我就蠢咩，有點連結的趕快去換密碼喔", time: "上午12:31" }
    ]
  },
  {
    scriptId: 5,//第一關_資安小尖兵_第三段(Fail)
    options: [
      { text: "<此回合已結束，請進入下回合>", disable: true },
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "歐不，我好像帳號被盜了，大家不要點那個連結!", time: "上午12:30" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "白癡喔，不要亂傳這種釣魚連結啦", time: "上午12:30" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "看來我們剛見證了史前人類使用手機的過程呢", time: "上午12:31" }
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
        align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: <span className="message-normal"><span className="message-bluetext">@{Young.nickName}</span>，麻煩你小心一點欸，如果有心人士盜你帳號把病毒傳進來怎麼辦?
        </span>, time: "上午07:40"
      },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "我覺得還好欸，除非有心人士就在群組裡面。", time: "上午07:40" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "我也覺得還好，難道群組有那麼容易潛入嗎? ", time: "上午07:40" }
    ]
  },
  {
    scriptId: 7,//第二關_誰中毒了_第二段(我覺得有內鬼)
    options: [
      { text: <span>但我也覺得{Young.nickName}很可疑</span>, nextScriptId: 8 },
      { text: "我也覺得壞人不會那麼明顯", nextScriptId: 9 },
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: "我覺得有內鬼", time: "上午08:00" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span className="message-normal">阿就{Young.nickName}一直在雷阿，如果有內鬼應該很明顯吧(笑</span>, time: "上午08:01" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "嘿阿，你一直幹蠢事很難讓人不懷疑你", time: "上午08:02" },
      { align: "message-left-first", sender: HackOrGod.nickName, chatPicSrc: HackOrGod.chatPicSrc, text: "不過壞人這樣做也蠢得太明顯了吧?", time: "上午08:02" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "嘿咩，你以為壞人會大搖大擺秀給你看「我是壞人」喔?", time: "上午08:03" }
    ]
  },
  {
    scriptId: 8,//第二關_誰中毒了_第三段(我覺得資深鄉民很可疑)
    options: [
      { text: "有人…中毒了？", nextScriptId: -1 },//第二關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>但我也覺得{Young.nickName}很可疑</span>, time: "上午08:12" },
      { align: "message-left-first", sender: HackOrGod.nickName, chatPicSrc: HackOrGod.chatPicSrc, text: "也是，搞不好就是故意做得很明顯掩護自己。", time: "上午08:12" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span className="message-normal">這麼一說，{Young.nickName}真的有點像被盜帳號一直亂傳連結的那種朋友呢</span>, time: "上午08:13" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "喂，我真的不是啦，我只是平常對資安比較沒放在心上而已", time: "上午08:16" }

    ]
  },
  {
    scriptId: 9,//第二關_誰中毒了_第三段(我也覺得壞人不會那麼明顯)
    options: [
      { text: <span>我也覺得{Robot.nickName}一直在帶風向很奇怪</span>, nextScriptId: 10 },
      { text: <span>我覺得{Robot.nickName}只是比較謹慎而已</span>, nextScriptId: 11 },
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: "我也覺得壞人不會那麼明顯", time: "上午08:12" },
      { align: "message-left-first", sender: HackOrGod.nickName, chatPicSrc: HackOrGod.chatPicSrc, text: "是嗎?可是你又說有內鬼，不然你覺得會是誰?", time: "上午08:13" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "可能壞人不只一個呢(笑", time: "上午08:13" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "那種一直在帶風向滿可疑的", time: "上午08:14" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "你們現在不就在帶風向嗎?", time: "上午08:16" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: <spna>從剛剛{Robot.nickName}就一直在帶風向阿，看起來有點心虛呢</spna>, time: "上午08:16" }
    ]
  },
  {
    scriptId: 10,//第二關_誰中毒了_第四段(我也覺得機器人一直在帶風向很奇怪)
    options: [
      { text: "有人…中毒了？", nextScriptId: -1 },//第二關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我也覺得{Robot.nickName}一直在帶風向很奇怪</span>, time: "上午08:25" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "你才是一直在帶風向吧，說有內鬼的是你，說別人在帶風向也是你，作賊喊抓賊zzz", time: "上午08:25" },
    ]
  },
  {
    scriptId: 11,//第二關_誰中毒了_第四段(我覺得機器人只是比較謹慎而已)
    options: [
      { text: "有人…中毒了？", nextScriptId: -1 },//第二關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Robot.nickName}只是比較謹慎而已</span>, time: "上午08:25" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "抱歉啦各位，我是真的很怕群組被入侵，口氣激動了點", time: "上午08:25" },
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
      { align: "message-right", sender: Player.nickName, text: "我覺得沒內鬼", time: "上午08:00" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "內鬼當然會說沒有內鬼囉", time: "上午08:00" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "那你覺得內鬼是誰?", time: "上午08:00" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span className="message-normal">{Young.nickName}或{Player.nickName}吧。{Young.nickName}感覺就是被盜了阿，然後{Player.nickName}一直在帶風向</span>, time: "上午08:01" }
    ]
  },
  {
    scriptId: 13,//第二關_誰中毒了_第三段(我覺得創世神 or 駭客才在帶風向)
    options: [
      { text: "有人…中毒了？", nextScriptId: -1 },//第二關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{GodOrHack.nickName}才在帶風向</span>, time: "上午08:12" },
      { align: "message-left-first", sender: GodOrHack.nickName, chatPicSrc: GodOrHack.chatPicSrc, text: "你要這樣想也沒辦法囉", time: "上午08:12" }
    ]
  },
  {
    scriptId: 14,//第二關_誰中毒了_第三段(我覺得機器人你才是在帶風向)
    options: [
      { text: "有人…中毒了？", nextScriptId: -1 },//第二關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Robot.nickName}你才是在帶風向</span>, time: "上午08:12" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "說沒有內鬼的是你，說別人在帶風向也是你，到底???", time: "上午08:12" }
    ]
  },
  {
    scriptId: 15,//第二關_誰中毒了_第三段(我覺得資深鄉民可能被盜了)
    options: [
      { text: "有人…中毒了？", nextScriptId: -1 },//第二關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Young.nickName}可能被盜了</span>, time: "上午08:12" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "真的沒有被盜啦，我下次會更注意安全的", time: "上午08:12" }
    ]
  },
  {
    scriptId: 16,//第三關_揪出駭客_第一段
    options: [
      { text: "有人不對勁", nextScriptId: -3 },//第三關提示介面
    ],
    messages: [
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: <span>必須說，管理群的篩選標準應該要嚴格一點吧，像{Young.nickName}這種天兵是不是應該被淘汰?</span>, time: "上午10:10" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "天兵再怎麼耍蠢也只是害慘自己，我覺得一直帶風向的人才是其心可誅。", time: "上午10:10" }
    ]
  },
  {
    scriptId: 17,//第三關_揪出駭客_第二段(e1-f1)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 },//第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{God.nickName}太不謹慎了</span>, time: "上午10:39" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>我承認，我的確有點進去剛剛{Young.nickName}傳的釣魚連結，但我是為了提醒大家才點進去確認的。</span>, time: "上午10:39" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "聽你在屁，帶風向就算了，耍蠢還想要洗白?", time: "上午10:40" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "我才說篩選標準要嚴格一點吧，蠢蛋和帶風向的應該都被淘汰!", time: "上午10:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "恩，你們兩個在自導自演吧?一下衝突一下炮口一致，你以為大家看不出來?", time: "上午10:40" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "原來喔，難怪我一直覺得他們兩個很可疑。", time: "上午10:41" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "很明顯吧。", time: "上午10:41" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "你又知道了?透露這麼多資訊，不怕真實身分曝光嗎(笑", time: "上午10:42" }
    ]
  },
  {
    scriptId: 18,//第三關_揪出駭客_第二段(e1-f2)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 }, //第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{God.nickName}一直在帶風向</span>, time: "上午10:39" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "是囉，畢竟要讓大家看清楚局勢，也只能這樣了", time: "上午10:39" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "哦?直接暗示自己的身分了?這種要嘛是在掩護真正的創世神，要嘛就是有心人士在擾亂風向，大家自己判斷囉。", time: "上午10:40" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span>咦，我反而覺得{Robot.nickName}你很像創世神欸。</span>, time: "上午10:40" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "真正的創世神才不會這麼明顯地提示好嘛==", time: "上午10:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "呵呵，難道我是創世神還要特別跟你說嗎?", time: "上午10:41" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，少假鬼假怪了。清者自清，不需要你特別跳出來刷存在。", time: "上午10:41" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span className="message-normal">誰在假鬼假怪其實很明顯吧，{Player.nickName}，你覺得呢?</span>, time: "上午10:42" }
    ]
  },
  {
    scriptId: 19,//第三關_揪出駭客_第二段(e2-f1)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 }, //第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Hack.nickName}太不謹慎了</span>, time: "上午10:39" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，你要帶風向也有點邏輯吧，剛剛我就看你們一群蠢蛋點進釣魚連結，我可是點都沒有點開呢!", time: "上午10:39" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span className="message-bluetext">@{Player.nickName}<span className="message-normal">，你還是洗洗睡啦，這種胡亂指責只會顯得你很像被操控的機器人帳號而已。</span></span>, time: "上午10:39" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>阿不就是{Young.nickName}你把連結傳進來的，你其實就是被操控的帳號吧?"</span>, time: "上午10:39" }
    ]
  },
  {
    scriptId: 20,//第三關_揪出駭客_第二段(e2-f2)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 }, //第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Hack.nickName}一直在帶風向</span>, time: "上午10:39" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "是囉，畢竟要讓大家看清楚局勢，也只能這樣了", time: "上午10:39" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "哦?直接暗示自己的身分了?這種要嘛是在掩護真正的創世神，要嘛就是有心人士在擾亂風向，大家自己判斷囉。", time: "上午10:40" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "我如果是創世神難道會特別跟你們說嗎?", time: "上午10:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "好了啦，你們兩個別再自導自演了，看了就想笑。", time: "上午10:40" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，你少假鬼假怪了。清者自清，不需要特別跳出來刷存在。", time: "上午10:41" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span className="message-normal">誰在假鬼假怪其實很明顯吧，{Player.nickName}，你說呢?</span>, time: "上午10:41" }
    ]
  },
  {
    scriptId: 21,//第三關_揪出駭客_第二段(e3-f1)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 }, //第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Young.nickName}太不謹慎了</span>, time: "上午10:39" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "的確是，怎麼會在這麼重要的群組亂傳釣魚連結呢?", time: "上午10:39" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "呵呵，看來終究被發現了呢。這些釣魚連結的確是用來釣創世神上鉤的，想不到這傢伙那麼謹慎，沒有上鉤呢。", time: "上午10:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "其實是你上鉤了對吧?釣到自己ㄌ", time: "上午10:40" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "看吧，這傢伙露出馬腳了，看來該把不適任的人踢掉了呢", time: "上午10:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span className="message-normal">且慢，我覺得事情沒那麼簡單，{Player.nickName}，你怎麼看?</span>, time: "上午10:41" }
    ]
  },
  {
    scriptId: 22,//第三關_揪出駭客_第二段(e3-f2)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 }, //第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Young.nickName}一直在帶風向</span>, time: "上午10:39" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "笑死，你才在帶風向吧。帶風向也要有點邏輯，你哪時看到我在帶風向了?", time: "上午10:39" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "是沒有帶風向啦，不過你亂傳連結倒是真的滿欠踢的。", time: "上午10:39" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "笑你不敢啦。俗辣", time: "上午10:39" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "喂喂，不要這樣亂嗆人吧", time: "上午10:40" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "呵呵，平常講話都唯唯諾諾的，現在惱羞露出真面目了吧。", time: "上午12:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "不過就是這樣才反常吧，也許他帳號被盜了?", time: "上午12:40" }
    ]
  },
  {
    scriptId: 23,//第三關_揪出駭客_第二段(e4-f1)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 }, //第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Robot.nickName}太不謹慎了</span>, time: "上午10:39" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "笑死，你要帶風向也有點邏輯吧，剛剛我就看你們一群蠢蛋點進釣魚連結，我可是點都沒有點開呢!", time: "上午10:39" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: <span className="message-bluetext">@{Player.nickName}<span className="message-normal">，你還是洗洗睡啦，這種胡亂指責只會顯得你很像被操控的機器人帳號而已。</span></span>, time: "上午10:40" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span className="message-normal">其實我也覺得是我比較不謹慎欸，{Player.nickName}你是不是搞錯什麼了?</span>, time: "上午10:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span className="message-normal">這麼說起來，我也不覺得{Robot.nickName}有很不謹慎就是了。</span>, time: "上午10:40" }
    ]
  },
  {
    scriptId: 24,//第三關_揪出駭客_第二段(e4-f2)
    options: [
      { text: "立刻揪出壞分子", nextScriptId: -2 }, //第三關指認
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>我覺得{Robot.nickName}一直在帶風向</span>, time: "上午10:39" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "笑死，那我幹嘛說帶風向的人其心可誅，作賊喊抓賊?", time: "上午10:39" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "就是一種混淆的策略吧。讓人相信你沒有在帶風向。", time: "上午10:39" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "有道理欸，雖然我聽得不是很懂。", time: "上午10:40" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "你們就別再自導自演了，看了就想笑。", time: "上午10:40" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "你也不用裝得好像自己是什麼智者似的混淆視聽好嗎?", time: "上午10:40" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "笑死，難道我是創世神還要特別跟大家說嗎?", time: "上午10:41" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "真正的創世神才不會這麼明顯地提示大家好嘛==", time: "上午10:41" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span className="message-normal">好啦你們別吵了，{Player.nickName}你怎麼看呢?</span>, time: "上午10:41" }
    ]
  },
  {
    scriptId: 25,//結局_創世神殞落
    options: [
      { text: "前往結局動畫", nextScriptId: -4 },//結局動畫暫定-4
    ],
    messages: [
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "其實，群組早就被有心人士入侵了…", time: "下午12:07" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "那麼會是誰呢?", time: "下午12:07" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "(此帳號疑似異常)", time: "下午12:07" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "難道他的帳號也被控制了?", time: "下午12:08" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "所以你也被控制過囉?", time: "下午12:08" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "到底是誰在搞鬼!?", time: "下午12:08" },
      { align: "message-center", text: <span>{Robot.nickName}已將{Young.nickName}移出群組</span>},
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "哼哼，很好。現在群組內有三個魁儡，剩下一個愛莫能助了吧。", time: "下午12:09" },
      { align: "message-right", sender: Player.nickName, text: "原來一直都是你在搞鬼!", time: "下午12:09" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "虧大家還特別找你來清查內鬼，表現還真讓人失望呢~", time: "下午12:10" },//與下兩個同時
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "虧大家還特別找你來清查內鬼，表現還真讓人失望呢~", time: "下午12:10" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "虧大家還特別找你來清查內鬼，表現還真讓人失望呢~", time: "下午12:10" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "跟你們這群笨蛋玩，真是浪費時間，我還以為會再有趣一點呢", time: "下午12:10" },//與下兩個同時
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "跟你們這群笨蛋玩，真是浪費時間，我還以為會再有趣一點呢", time: "下午12:10" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "跟你們這群笨蛋玩，真是浪費時間，我還以為會再有趣一點呢", time: "下午12:10" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "現在，這個論壇是我的了，你就乖乖認命吧，要不要為我服務呢?", time: "下午12:11" },//與下兩個同時
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "現在，這個論壇是我的了，你就乖乖認命吧，要不要為我服務呢?", time: "下午12:11" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "現在，這個論壇是我的了，你就乖乖認命吧，要不要為我服務呢?", time: "下午12:11" },
      { align: "message-right", sender: Player.nickName, text: "別鬧了，就是有你這種人，論壇的人都跑去用低咔了", time: "下午12:12" },
      { align: "message-center", text: <span>{Hack.nickName}已將XXX噤聲</span> },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "那你就閉嘴乖乖看我怎麼統治這個論壇吧", time: "下午12:12" },//與下兩個同時
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "那你就閉嘴乖乖看我怎麼統治這個論壇吧", time: "下午12:12" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "那你就閉嘴乖乖看我怎麼統治這個論壇吧", time: "下午12:12" },
    ]
  },
  {
    scriptId: 26,//結局_自身難保(初始選項)
    options: [
      { text: <span>原來一直都是{Hack.nickName}在搞鬼!</span>, nextScriptId: 27 },
      { text: <span>原來一直都是{Robot.nickName}在搞鬼!</span>, nextScriptId: 27 }
    ],
    messages: [{ text: null }]
  },
  {
    scriptId: 27,//結局_自身難保(選項後內容)
    options: [
      { text: "前往結局動畫", nextScriptId: -4 },//結局動畫暫定-4
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>原來一直都是{God.nickName}在搞鬼!</span>, time: "下午12:07" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "這樣啊，我也懷疑他很久了", time: "下午12:08" },
      { align: "message-center", text: <span>{Robot.nickName}已將{God.nickName}移出群組</span> },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "原來就是他!", time: "下午12:08" },
      { align: "message-right", sender: Player.nickName, text: <span>感謝{Robot.nickName}將內鬼移除，以後論壇就和平了!</span>, time: "下午12:08" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "耶呼~", time: "下午12:09" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "我看我們來重新組織論壇的管理吧", time: "下午12:09" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "咦，可是我覺得既然內鬼已經找出來了，應該不用再特別調整吧?", time: "下午12:09" },
      { align: "message-right", sender: Player.nickName, text: "我覺得被入侵代表現行制度有問題，因此贊成重組", time: "下午12:10" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "我也贊成重組", time: "下午12:10" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "好的，既然大多數人都同意，我們重組的第一步就把異議者掃地出門吧", time: "下午12:10" },
      { align: "message-center", text: <span>{Robot.nickName}已將{Young.nickName}移出群組</span>},
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "哼哼，很好。現在群組內有三個魁儡，剩下一個愛莫能助了吧。", time: "下午12:11" },
      { align: "message-right", sender: Player.nickName, text: "原來一直都是你在搞鬼!", time: "下午12:11" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "現在，這個論壇是我的了，你就乖乖認命吧，要不要為我服務呢?", time: "下午12:12" },//與下兩個同時
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "現在，這個論壇是我的了，你就乖乖認命吧，要不要為我服務呢?", time: "下午12:12" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "現在，這個論壇是我的了，你就乖乖認命吧，要不要為我服務呢?", time: "下午12:12" },
      { align: "message-right", sender: Player.nickName, text: "別鬧了，就是有你這種人，論壇的人都跑去用低咔了", time: "下午12:12" },
      { align: "message-center", text: <span>{Hack.nickName}已將{Player.nickName}噤聲</span> },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "那你就閉嘴乖乖看我怎麼統治這個論壇吧", time: "下午12:13" },//與下兩個同時
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "那你就閉嘴乖乖看我怎麼統治這個論壇吧", time: "下午12:13" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "那你就閉嘴乖乖看我怎麼統治這個論壇吧", time: "下午12:13" },
    ]
  },
  {
    scriptId: 28,//結局_特洛伊木馬
    options: [
      { text: "前往結局動畫", nextScriptId: -4 },//結局動畫暫定-4
    ],
    messages: [
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>原來就是你一直在搞鬼!{Hack.nickName}</span>, time: "下午12:07" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "你搞錯了吧，少含血噴人", time: "下午12:07" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: <span>我懂了，原來一直有帳號被{Hack.nickName}操控著!難怪我之前常常發現我的帳號會自己講話</span>, time: "下午12:08" },
      { align: "message-center", text: <span>{Robot.nickName}已將{Young.nickName}移出群組</span>},
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "喂，搞什麼。誰准你亂踢人的?", time: "下午12:08" },
      { align: "message-center", text: <span>{God.nickName}已將{Robot.nickName}的管理權限移除</span>},
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "嘻嘻，你們還沒搞清楚狀況吧?", time: "下午12:09" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "你們帶進來清查內鬼的英雄，正好造就了論壇的毀滅", time: "下午12:09" },//與下一個同時
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "你們帶進來清查內鬼的英雄，正好造就了論壇的毀滅", time: "下午12:09" },
      { align: "message-right", sender: Player.nickName, text: "什麼意思?", time: "上午12:36" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: "自以為正義的英雄阿，正因為你的疏失，把病毒帶進了群組，現在論壇要崩潰了", time: "下午12:10" },//與下一個同時
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "自以為正義的英雄阿，正因為你的疏失，把病毒帶進了群組，現在論壇要崩潰了", time: "下午12:10" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "不!!!!我辛苦創建的論壇!", time: "下午12:36" },
    ]
  },
  {
    scriptId: 29,//結局_縱虎歸山
    options: [
      { text: "前往結局動畫", nextScriptId: -4 },//結局動畫暫定-4
    ],
    messages: [
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "群組內一直有一隻機器人帳號被操控著!難怪有時候對話裡好像有人在自導自演。", time: "下午12:07" },
      { align: "message-right", sender: Player.nickName, text: <span>那麼<span className="message-bluetext">@{Robot.nickName}</span>那隻帳號就是被操控著的吧?</span>, time: "下午12:07" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "沒有錯!幸虧你有發現。", time: "下午12:08" },
      { align: "message-center", text: <span>{God.nickName}已將{Robot.nickName}的管理權限移除</span>},
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "原來如此!難怪我之前常常發現我的帳號會自己講話。", time: "下午12:08" },
      { align: "message-right", sender: Player.nickName, text: "可惜雖然找出被控制的帳號，但是還是找不出誰在搞鬼呢!", time: "下午12:08" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "對阿，要是找出來我一定不讓他好過!害我帳號常常自言自語，像白癡一樣。", time: "下午12:09" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "呵呵，你不是只是「像」白癡吧!把那種釣魚連結傳進來，要麼是白癡要麼就是其實是你在搞鬼。", time: "下午12:09" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "閉嘴!你講話總是在攻擊別人，你才是在搞鬼吧!", time: "下午12:09" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "你們別吵了!目前沒有證據顯示主謀就在群組內。如果群組內有人在搞鬼，也有可能是帳號被操控了。", time: "下午12:10" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "那麼這次內部調查就先告一段落了?", time: "下午12:10" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "也只能先這樣了。", time: "下午12:10" }
    ]
  },
  {
    scriptId: 30,//結局_驅逐內鬼
    options: [
      { text: "前往結局動畫", nextScriptId: -4 },//結局動畫暫定-4
    ],
    messages: [
      { align: "message-right", sender: Player.nickName, text: <span>原來一直都是<span className="message-bluetext">@{Hack.nickName}</span>在搞鬼!</span>, time: "下午12:07" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "真假!原來真的有內鬼喔?", time: "下午12:07" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "!??????????????你有證據嗎?", time: "下午12:07" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "必須說，多數的時候你隱藏的滿好的。但是後來惱羞的時候就露出馬腳了。", time: "下午12:08" },
      { align: "message-center", text: <span><span className="message-bluetext">@{God.nickName}</span>已將<span className="message-bluetext">@{Hack.nickName}</span>的管理權限移除</span> },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "原來你之前撿到槍其實是因為惱羞喔?哈哈哈哈哈哈哈", time: "下午12:08" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "閉嘴!你們以為自己很厲害嗎?", time: "下午12:08" },
      { align: "message-center", text: <span><span className="message-bluetext">@{Robot.nickName}</span>已將<span className="message-bluetext">@{Young.nickName}</span>移出群組</span> },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "!!!原來你還控制了一隻帳號!不過，你因為惱羞下錯棋了!", time: "下午12:09" },
      { align: "message-center", text: <span><span className="message-bluetext">@{God.nickName}</span>已將<span className="message-bluetext">@{Robot.nickName}</span>的管理權限移除</span> },
      { align: "message-center", text: <span><span className="message-bluetext">@{God.nickName}</span>已將<span className="message-bluetext">@{Player.nickName}</span>設為成員管理員</span>, },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>{Player.nickName}，那就麻煩你了!</span>, time: "下午12:09" },
      { align: "message-right", sender: Player.nickName, text: "OK!", time: "下午12:10" },
      { align: "message-center", text: <span><span className="message-bluetext">@{Player.nickName}</span>已將<span className="message-bluetext">@{Hack.nickName}</span>移出群組</span> },
      { align: "message-center", text: <span><span className="message-bluetext">@{Player.nickName}</span>已將<span className="message-bluetext">@{Robot.nickName}</span>移出群組</span> },
      { align: "message-right", sender: Player.nickName, text: "Job done!", time: "下午12:10" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "诶你好像還忘了甚麼。", time: "下午12:10" },
      { align: "message-right", sender: Player.nickName, text: "阿對齁，差點忘了他了。不過你真的要把他加回來嗎?他有點雷雷的欸，哈哈哈哈哈", time: "下午12:11" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "還是先加回來啦，在我找到更適合的人選前", time: "下午12:11" },
      { align: "message-right", sender: Player.nickName, text: "OK!", time: "下午12:11" },
      { align: "message-center", text: <span><span className="message-bluetext">@{Player.nickName}</span>已將<span className="message-bluetext">@{Young.nickName}</span>加入群組</span> },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "剛剛發生了什麼事?????我怎麼突然被踢掉了?", time: "下午12:12" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "說來話長，總之現在群組跟論壇都安全了!", time: "下午12:12" },
    ]
  },
  {
    scriptId: 31,//結局_以牙還牙
    options: [
      { text: "前往結局動畫", nextScriptId: -4 },//結局動畫暫定-4
    ],
    messages: [
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "好煩喔喔喔喔喔喔喔喔~到底是誰在搞鬼啦!為甚麼我帳號常常自己講話?", time: "下午12:07" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "就你在搞鬼阿呵呵~不要以為裝成受害者大家就看不出來。", time: "下午12:07" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "這可說不準喔嘻嘻~", time: "下午12:08" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "什麼意思!?", time: "下午12:08" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span>我其實是機器人啦哈哈~我一直都是被<span className="message-bluetext">@{Hack.nickName}</span>當魁儡帳號</span>, time: "下午12:08" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "???????????????????????", time: "下午12:09" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "對啦我其實就是駭客，只是現在被控制帳號了咩噗", time: "下午12:09" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "被發現了好害羞嘿嘿嘿嘿嘿嘿嘿", time: "下午12:09" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "笑死，現在知道我的感受了吧!", time: "下午12:10" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: <span>多謝<span className="message-bluetext">@{Player.nickName}</span>協助我找出駭客和機器人帳號，我才能找到漏洞駭入這兩隻帳號。</span>, time: "下午12:10" },
      { align: "message-left-first", sender: Hack.nickName, chatPicSrc: Hack.chatPicSrc, text: "討厭啦，不要亂玩人家", time: "下午12:10" },
      { align: "message-right", sender: Player.nickName, text: "小事哈哈，看到惡有惡報也是滿爽的~", time: "下午12:11" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "對阿，超爽的啦", time: "下午12:11" },
      { align: "message-left-first", sender: God.nickName, chatPicSrc: God.chatPicSrc, text: "好啦，該來剷除內鬼了。至於這隻機器人帳號，我看我就自己收下來吧", time: "下午12:11" },
      { align: "message-left-first", sender: Robot.nickName, chatPicSrc: Robot.chatPicSrc, text: <span>我現在是<span className="message-bluetext">@{God.nickName}</span>的小狗勾了，汪汪~</span>, time: "下午12:12" },
      { align: "message-left-first", sender: Young.nickName, chatPicSrc: Young.chatPicSrc, text: "大神遵命!", time: "下午12:12" },
      { align: "message-center", text: <span><span className="message-bluetext">@{Young.nickName}</span>已將<span className="message-bluetext">@{Hack.nickName}</span>移出群組</span> },
    ]
  },
]