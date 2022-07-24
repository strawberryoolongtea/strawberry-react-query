import React from "react";
import IndexPage from "./pages/IndexPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/:id" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
