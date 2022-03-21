import React from "react";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import Account from "./pages/Account";
import Game from "./pages/Game";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="secondpage" element={<Secondpage />} />
        <Route path="account" element={<Account />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}


export default App;

