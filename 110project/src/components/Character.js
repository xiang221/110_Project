import React from "react";

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

console.log("nickNameRandomIndex = " + nickNameRandomIndex);
console.log("nickNameRandomList" + nickNameList);

function assignChatPic(nickName) {//圖片待UI補
    if (nickName === "A") {
        return "https://img.onl/zxNUe"
    }
    else if (nickName === "B") {
        return "https://img.onl/zpL9RB"
    }
    else if (nickName === "C") {
        return "https://img.onl/XERRDA"
    }
    else if (nickName === "D") {
        return "https://img.onl/V9HtiR"
    }
}

export const Young = new Character("Young", "C", assignChatPic("C")) //對應劇本 資深鄉民
export const Robot = new Character("Robot", nickNameList[0], assignChatPic(nickNameList[0])) //對應劇本 機器人
export const God = new Character("God", nickNameList[1], assignChatPic(nickNameList[1])) //對應劇本 創世神
export const Hack = new Character("Hack", nickNameList[2], assignChatPic(nickNameList[2])) //對應劇本 駭客
export const GodOrHack = new Character("GodOrHack", nickNameList[3], assignChatPic(nickNameList[3])) //對應劇本 創世神或駭客
export const HackOrGod = new Character("HackOrGod", nickNameList[4], assignChatPic(nickNameList[4])) //對應劇本 駭客或創世神
export const Player = new Character(localStorage.getItem('account'), localStorage.getItem('account'), "") //已補玩家名字 
export const System = new Character("System", "System", "") //備用

export const Accuse2List = [Young, Robot, GodOrHack, HackOrGod]//第二關玩家指認中毒者的選項
export const HintList = [Young, Robot, God, Hack]//第三關提示選項中的選項
export const Accuse3List = [Young, Robot, God, Hack]//第三關玩家指認駭客的選項