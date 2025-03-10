// src/pages/SignUp.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
];

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    setUsernameError("")
    setPasswordError("")
    const user = users.find((u) => u.username === username);
    e.preventDefault();
    if(username===""){
      setUsernameError("ユーザ名を入力して下さい")
    }
    if(password===""){
      setPasswordError("パスワードを入力して下さい")
    }
    if(!user && username !=="" && password !==""){
      await signUp(username, password);
      navigate("/mypage");
    }else if(user){
      setError("すでに存在するユーザー名です");
    }
  }

  return (
    <div>
      <h1>サインアップ</h1>
      <p>{error}</p>
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
