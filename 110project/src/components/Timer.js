import React, { useState, useEffect } from 'react'

let Time = Number(JSON.parse(localStorage.getItem('Timer')))
// localStorage.setItem('Timer', 0) //Debug用

const Timer = () => {

    const [allSeconds, setAllSeconds] = useState(Time? Time: 0)
    const [minutes, setMinutes] = useState(Math.trunc(allSeconds / 60)>=10? Math.trunc(allSeconds / 60): "0"+ Math.trunc(allSeconds / 60))
    const [seconds, setSeconds] = useState((allSeconds % 60)>=10? (allSeconds%60): "0"+(allSeconds%60) )

    useEffect(() => {//當索引發生變化

        // if (allSeconds <= 0) {//如果目前Index大於目標陣列長度則返回
        //     return
        // }
        setTimeout(() => { setAllSeconds(allSeconds + 1); Time = allSeconds+1; setMinutes(Math.trunc(allSeconds / 60)>=10? Math.trunc(allSeconds / 60): "0"+ Math.trunc(allSeconds / 60)); setSeconds((allSeconds % 60)>=10? (allSeconds%60): "0"+(allSeconds%60)) }, 1000)//設定一定的時間後，改變當前的Index
    }, [allSeconds])

    return <div>{minutes}:{seconds}</div>
}

export default Timer
