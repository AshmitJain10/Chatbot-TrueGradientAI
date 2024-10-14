import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import AdminPanel from "./components/AdminPanel";
import HistoryTab from "./components/HistoryTab";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chatbot />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/history" element={<HistoryTab />} />
      </Routes>
    </Router>
  );
};

export default App;
