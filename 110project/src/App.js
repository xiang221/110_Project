import React, { useState, useEffect }  from "react";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import Account from "./pages/Account";
import Game from "./pages/Game";
import Test from "./pages/Test";
import Fish from "./pages/Fish";
import Second from "./pages/Second";
import Signup from "./pages/Signup";

function App() {

  let [user,setUser] = useState({});


  return (
    <div>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="secondpage" element={<Secondpage />} />
        <Route path="second" element={<Second />} />
        <Route path="signup" element={<Signup user={user} setUser={setUser}/>} />
        <Route path="game" element={<Game user={user} setUser={setUser}/>} />
        <Route path="test" element={<Test user={user} setUser={setUser}/>} /> 
        <Route path="fish" element={<Fish />}/>        
      </Routes>
    </div>
  );
}


export default App;

