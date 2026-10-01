import {
  render,
  screen
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import LoginForm from "./LoginForm";

test("submits entered username", async () => {
  const user = userEvent.setup();

  const mockLogin = jest.fn();

  render(
    <LoginForm onLogin={mockLogin} />
  );

  const usernameInput =
    screen.getByLabelText("Username");

  await user.type(
    usernameInput,
    "Anita"
  );

  await user.click(
    screen.getByRole("button", {
      name: "Login"
    })
  );

  expect(mockLogin)
    .toHaveBeenCalledWith("Anita");

  expect(mockLogin)
    .toHaveBeenCalledTimes(1);
});