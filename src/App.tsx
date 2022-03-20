import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/FooterComponent/Footer";
import Navigation from "./components/NavigationComponent/Navigation";
import CreateSessionPage from "./pages/CreateSessionPage";
import DetailSessionPage from "./pages/DetailSessionPage";
import UpdateSession from "./pages/UpdateSessionPage";
import HomePage from "./pages/HomePage";
import MySessionPage from "./pages/MySessionsPage";
import TheSessions from "./pages/TheSessions";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allsessions" element={<TheSessions />} />
        <Route path="/create" element={<CreateSessionPage />} />
        <Route path="/my-sessions" element={<MySessionPage />} />
        <Route path="/edit/session/:id" element={<UpdateSession />} />
        <Route
          path="/allsessions/session/:id"
          element={<DetailSessionPage />}
        />
        <Route path="/users/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
