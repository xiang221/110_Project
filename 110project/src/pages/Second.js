import React from 'react'
import GlitchedWriter, { wait }  from 'glitched-writer'


const Second = () => {

    
    const Writer = new GlitchedWriter('#glitch_this', { letterize: true });

    (async  ()=> {
      await wait(1000);
      await Writer.write("你好");
      
      await wait(1200);
      await Writer.write("有人在那裡嗎");
      
      await wait(1500);
      await Writer.write("拜託，我需要你的幫忙......");
      
      await wait(1500);
      await Writer.write("請幫助我揪出內鬼");

    })();
    
      

  return (
    <div>Second</div>
  )
}

export default Second