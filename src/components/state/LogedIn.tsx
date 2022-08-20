import { useState } from "react";

const LogedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogOut}>logout</button>
      <div>User is {isLoggedIn ? " logged in" : "logged out"}</div>
    </div>
  );
};

export default LogedIn;
