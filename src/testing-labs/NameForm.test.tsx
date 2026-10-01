import {
  render,
  screen
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import NameForm from "./NameForm";

test("updates greeting when user types name", async () => {
  const user = userEvent.setup();

  render(<NameForm />);

  const input = screen.getByLabelText("Name");

  await user.type(input, "Anita");

  expect(input).toHaveValue("Anita");

  expect(
    screen.getByText("Hello Anita")
  ).toBeInTheDocument();
});