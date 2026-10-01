import {
  render,
  screen
} from "@testing-library/react";

import UserCard from "./UserCard";

test("displays user details from props", () => {
  render(
    <UserCard
      name="Anita"
      role="Tester"
    />
  );

  expect(
    screen.getByText("Anita")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Tester")
  ).toBeInTheDocument();
});