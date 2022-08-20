import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // define future value as well as initial value in our case it's null
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "rajat",
      email: "rajat@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>logout</button>
      <div>user name is {user?.name}</div>
      <div>user email is {user?.email}</div>
    </div>
  );
};

export default User;
