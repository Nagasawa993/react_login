// src/Router.jsx
import React from "react";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import TestPage from "./pages/TestPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<RequireAuth><MyPage /></RequireAuth>} />
      {/* 必要があれば他のルートも追加 */}
      <Route path="/testpage" element={<TestPage />} />
    </Routes>
  );
};

function RequireAuth({ children }) {
  const isLoggedIn = localStorage.getItem("authToken");
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default AppRouter;
