import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CounterButton from "./CounterButton";

test("increments count when button is clicked", async () => {
  const user = userEvent.setup();

  render(<CounterButton />);

  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  await user.click(
    screen.getByRole("button", {
      name: "Increment"
    })
  );

  expect(
    screen.getByText("Count: 1")
  ).toBeInTheDocument();
});