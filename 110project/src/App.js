import React, { useState, useEffect }  from "react";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Game from "./pages/Game";
import Fish from "./pages/Fish";
import Signup from "./pages/Signup";
import End from "./pages/End";

function App() {

  let [user,setUser] = useState({});


  return (
    <div>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="signup" element={<Signup user={user} setUser={setUser}/>} />
        <Route path="game" element={<Game user={user} setUser={setUser}/>} />
        <Route path="fish" element={<Fish />}/> 
        <Route path="end" element={<End />} />       
      </Routes>
    </div>
  );
}


export default App;

