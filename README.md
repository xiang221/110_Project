# NCCU DCT 第13屆畢業製作 論壇風雲


###### 劇本：白耕竹
###### 美術：林宥丞
###### 程式：陳湘宜、陳品臻
###### UI/UX：葉婉宜
###### 行銷：應羽雯

## DEMO
https://cyberwarfare-2427e.web.app/  

目前在載入影片和圖片時會有延遲情況，將來考慮部屬至其他地方或使用CDN等服務存放影片。
若要在local運行，下載檔案後cd 110project，npm install安裝完套件後即可使用npm start開始遊戲

## 成果報告書：
https://drive.google.com/file/d/1T2EXPwHfCV1JJQ1lVhQVJ6Ul_OJ4WOBT/view?usp=sharing



## 作品理念：
「論壇風雲」是款取材自網路留言區各式資訊戰爭的解謎網頁遊戲。釣人上鉤的惡意連結、被操控的假帳號、操縱風向並愚弄他人的網軍首領，都是我們平常再熟悉不過的網路亂象，如今成為「論壇風雲」中的不同關卡。身為數位時代的我們，留言板上的爾虞我詐，早已成為日常，不斷發生在你我手上、那麼狹隘卻又無遠弗屆的小方框中。字裡行間透露的立場愈是鮮明，背後的玄機愈難參透，當反串成為眾所皆知的常識，反反串、反反反串…便成了聰明人可行的套利策略，而置身其中的你，又能猜到第幾層？

## 遊戲畫面

![示意1](https://user-images.githubusercontent.com/41126704/172052496-77efa3db-55f0-424a-8c1e-494de96b1bb2.png)
![示意2](https://user-images.githubusercontent.com/41126704/172052266-7e66fa1e-3025-4c2d-8d1b-a9931f6ed6c9.png)
![示意3](https://user-images.githubusercontent.com/41126704/172052493-90c78d48-9910-459d-91c6-322c6dcbe1c5.png)
![示意4](https://user-images.githubusercontent.com/41126704/172052495-b2b5b1d1-5742-4bc0-a0d0-f9d3bb368969.png)



## 技術原理
作品使用技術：HTML、CSS、JavaScript（使用React.js框架撰寫）
撰寫過程：
- 將頁面拆分成不同component，透過傳遞和接收props，使遊戲主頁的郵件、任務、聊天室能根據遊戲的進展而有不同呈現。
- 使用一些Hooks來實現動態互動的效果：useState及useEffect控制頁面元件的渲染，並搭配Router控制頁面之間的跳轉。
- 呈現方式：作品於展期間使用本地端運行，減少網路斷線風險以及圖檔、影片檔載入較慢的問題，展後則部屬至Firebase。
- 未來改善：未來或許可改用Redux來管理狀態(state)。





