import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";

test("displays welcome message", () => {
  render(<Greeting />);

  expect(screen.getByText("Welcome to React Testing")).toBeInTheDocument();
});