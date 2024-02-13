import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Page404 } from "./page404";
import V1 from "./v1/v1";

function App() {
  return (
    <div className="w-full h-full flex justify-center items-center mx-auto">
      <Routes>
        <Route path="/" element={<Page404></Page404>}></Route>
        <Route path="/v1" element={<V1></V1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
