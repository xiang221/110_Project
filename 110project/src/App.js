import React from "react";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Secondpage from "./pages/Secondpage";
import Account from "./pages/Account";
import Main from "./pages/Main";
<<<<<<< Updated upstream
import Game from "./pages/Game";
=======
import Test from "./pages/Test";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="secondpage" element={<Secondpage />} />
        <Route path="account" element={<Account />} />
        <Route path="main" element={<Main />} />
<<<<<<< Updated upstream
        <Route path="game" element={<Game />} />
=======
        <Route path="test" element={<Test />} />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
}


export default App;

