import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // localStorageにトークンがあるかチェック
    if (localStorage.getItem("authToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("authToken", "dummy-token"); // ダミートークンを保存
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // トークン削除
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>ログイン済み</h2>
          <button onClick={handleLogout}>ログアウト</button>
        </>
      ) : (
        <>
          <h2>ログインしていません</h2>
          <button onClick={handleLogin}>ログイン</button>
        </>
      )}
    </div>
  );
}

export default App;
