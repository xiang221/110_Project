import React from 'react'
import GlitchedWriter, { wait } from "https://cdn.skypack.dev/glitched-writer@2.0.29";
import '../styles/test.css'  
  
  const Test = () => {
    
  
  const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, logString);
  
  (async  ()=> {
    await wait(1000);
    await Writer.write("my old friend.");
    
    await wait(1200);
    await Writer.write("This is only the beginning.");
    
    await wait(1500);
    await Writer.write("Please, say something...");
    
    input.removeAttribute("disabled");
  })();
  
  function logString(string) {
    logs.innerHTML += `<p>${string}</p>`;
  }
  
  input.addEventListener(
    "input",
    _.debounce(() => 
      Writer.write(input.value)
    , 500)
  );
  
  return (
    
    <div>
        <div class="links">
            <a href="https://www.npmjs.com/package/glitched-writer" target="_blank">
            <svg id="npm" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 780 250" style="enable-background:new 0 0 780 250;" xml:space="preserve">
            <path class="st0" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480zM0,200h100V50h50v150h50V0H0V200z"></path>
            </svg>
            </a>
        </div>
        <div class="log" id="logs">
            <p>Welcome</p>
        </div>
        <div class="text" id="glitch_this">Welcome</div>
        <input class="input" id="input" placeholder="$" autocomplete="off" disabled=""/>
        <div class="input--shadow"></div>
    </div>

  )
}