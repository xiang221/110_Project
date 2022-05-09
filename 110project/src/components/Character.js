import React from "react";

import ChatPic_God from '../picture/ChatPic_God.png'  
import ChatPic_Hack from '../picture/ChatPic_Hack.png' 
import ChatPic_Young from '../picture/ChatPic_Young.png' 
import ChatPic_Robot from '../picture/ChatPic_Robot.png' 


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

// console.log("nickNameRandomIndex = " + nickNameRandomIndex);
// console.log("nickNameRandomList" + nickNameList);

function assignChatPic(nickName) {//圖片待UI補
    if (nickName === "A") {
        return ChatPic_God //火龍蕉 "https://img.onl/waSEor" 
    }
    else if (nickName === "B") {
        return ChatPic_Hack //凸頂橙 "https://img.onl/j9TIUF"
    }
    else if (nickName === "C") {
        return ChatPic_Young //麝香葡萄 "https://img.onl/fQva9Z"
    }
    else if (nickName === "D") {
        return ChatPic_Robot //白桃 "https://img.onl/g1CxXX"
    }
}

function assignNickName(nickName) {
    if (nickName === "A") {
        return "匿名火龍蕉"  //A=匿名火龍蕉
    }
    else if (nickName === "B") {
        return "匿名凸頂橙" //B=匿名凸頂橙
    }
    else if (nickName === "C") {
        return "匿名麝香葡萄" //C=匿名麝香葡萄(鄉民)
    }
    else if (nickName === "D") {
        return "匿名白桃" //D=匿名白桃
    }
}

export const Young = new Character("Young", assignNickName("C"), assignChatPic("C")) //對應劇本 資深鄉民
export const Robot = new Character("Robot", assignNickName(nickNameList[0]), assignChatPic(nickNameList[0])) //對應劇本 機器人
export const God = new Character("God", assignNickName(nickNameList[1]), assignChatPic(nickNameList[1])) //對應劇本 創世神
export const Hack = new Character("Hack", assignNickName(nickNameList[2]), assignChatPic(nickNameList[2])) //對應劇本 駭客
export const GodOrHack = new Character("GodOrHack", assignNickName(nickNameList[3]), assignChatPic(nickNameList[3])) //對應劇本 創世神或駭客
export const HackOrGod = new Character("HackOrGod", assignNickName(nickNameList[4]), assignChatPic(nickNameList[4])) //對應劇本 駭客或創世神
export const Player = new Character(localStorage.getItem('account'), localStorage.getItem('account'), "") //已補玩家名字 
export const System = new Character("System", "System", "") //備用

export const Accuse2List = [Young, Robot, GodOrHack, HackOrGod]//第二關玩家指認中毒者的選項
export const HintList = [Young, Robot, God, Hack]//第三關提示選項中的選項
export const Accuse3List = [Young, Robot, God, Hack]//第三關玩家指認駭客的選項