// src/pages/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const { login } = useContext(UserContext); // Contextからlogin関数を取得
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async (e) => {
    setUsernameError("")
    setPasswordError("")
    e.preventDefault();
    if(username===""){
      setUsernameError("ユーザ名を入力して下さい")
    }
    if(password===""){
      setPasswordError("パスワードを入力して下さい")
    }
    if(username!=="" && password!==""){
      try {
        await login(username, password); // UserContextのloginを呼ぶ
        navigate("/mypage"); // 成功時にマイページへ遷移
      } catch (error) {
        alert("ログインに失敗しました");
      }
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>ユーザー名：</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <p>{usernameError}</p>
        <div>
          <label>パスワード：</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>{passwordError}</p>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
