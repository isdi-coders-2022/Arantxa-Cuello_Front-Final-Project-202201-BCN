import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyProfilePage from "./pages/MyProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allsessions" element={<MyProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
