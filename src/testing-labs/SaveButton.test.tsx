import {
  render,
  screen
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import SaveButton from "./SaveButton";

test("calls onSave when button is clicked", async () => {
  const user = userEvent.setup();

  const mockSave = jest.fn();

  render(
    <SaveButton onSave={mockSave} />
  );

  await user.click(
    screen.getByRole("button", {
      name: "Save"
    })
  );

  expect(mockSave)
    .toHaveBeenCalled();

  expect(mockSave)
    .toHaveBeenCalledTimes(1);
});