import { useState } from "react";

function LoginStatus() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setLoggedIn(true)}>
        Login
      </button>

      {loggedIn && (
        <p>Welcome back!</p>
      )}
    </div>
  );
}

export default LoginStatus;