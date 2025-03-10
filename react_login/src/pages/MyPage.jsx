// src/pages/MyPage.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const MyPage = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>マイページ</h1>
      {user && <p>ユーザー名: {user.username}</p>}
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default MyPage;
