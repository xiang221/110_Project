import React from "react";
import ReactDOM from "react-dom";
import Firstpage from "./pages/Firstpage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Firstpage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
