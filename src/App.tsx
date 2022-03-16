import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/FooterComponent/Footer";
import Navigation from "./components/NavigationComponent/Navigation";
import CreateSessionPage from "./pages/CreateSessionPage";
import HomePage from "./pages/HomePage";
import TheSessions from "./pages/TheSessions";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allsessions" element={<TheSessions />} />
        <Route path="/createsession" element={<CreateSessionPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
