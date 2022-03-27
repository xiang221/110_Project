import React, { useState, useEffect }  from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import Account from "./pages/Account";
import Game from "./pages/Game";
import Test from "./pages/Test"

function App() {

  let [user,setUser] = useState({});


  return (
    <div>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="secondpage" element={<Secondpage />} />
        <Route path="account" element={<Account user={user} setUser={setUser}/>} />
        <Route path="game" element={<Game user={user} setUser={setUser}/>} />
        <Route path="test" element={<Test user={user} setUser={setUser}/>} />        
      </Routes>
    </div>
  );
}


export default App;

