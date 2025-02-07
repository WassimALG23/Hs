import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Reasons from "./Reasons";
import FinalPage from "./FinalPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/reasons" element={<Reasons />} />
      <Route path="/final" element={<FinalPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
