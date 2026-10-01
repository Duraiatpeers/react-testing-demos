import { useState } from "react";

type LoginFormProps = {
  onLogin: (username: string) => void;
};

function LoginForm({
  onLogin
}: LoginFormProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username
      </label>

      <input
        id="username"
        value={username}
        onChange={(event) =>
          setUsername(event.target.value)
        }
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;