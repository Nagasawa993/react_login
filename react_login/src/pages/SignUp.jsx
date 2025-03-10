// src/pages/SignUp.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = async (e) => {
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
        await signUp(username, password);
        navigate("/mypage");
      } catch (error) {
        alert("サインアップに失敗しました");
      }
    }
  };

  return (
    <div>
      <h1>サインアップ</h1>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">アカウント作成</button>
      </form>
    </div>
  );
};

export default SignUp;
