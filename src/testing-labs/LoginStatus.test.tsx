import {
  render,
  screen
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import LoginStatus from "./LoginStatus";

test("shows welcome message after login", async () => {
  const user = userEvent.setup();

  render(<LoginStatus />);

  expect(
    screen.queryByText("Welcome back!")
  ).not.toBeInTheDocument();

  await user.click(
    screen.getByRole("button", {
      name: "Login"
    })
  );

  expect(
    screen.getByText("Welcome back!")
  ).toBeInTheDocument();
});