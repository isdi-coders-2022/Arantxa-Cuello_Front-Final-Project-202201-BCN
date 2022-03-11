import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyProfilePage from "./pages/MyProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/allsessions" element={<MyProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
