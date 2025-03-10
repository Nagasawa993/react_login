// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";
import AppRouter from "./Router";  // ルーティング設定

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
