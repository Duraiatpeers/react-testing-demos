import {
  render,
  screen
} from "@testing-library/react";

import axios from "axios";

import UserList from "./UserList";

jest.mock("axios");

const mockedAxios =
  axios as jest.Mocked<typeof axios>;

// test("displays users returned by API", async () => {
//   mockedAxios.get.mockResolvedValue({
//     data: [
//       {
//         id: 1,
//         name: "Anita"
//       },
//       {
//         id: 2,
//         name: "Rahul"
//       }
//     ]
//   });

//   render(<UserList />);

//   expect(
//     screen.getByText("Loading...")
//   ).toBeInTheDocument();

//   expect(
//     await screen.findByText("Anita")
//   ).toBeInTheDocument();

//   expect(
//     screen.getByText("Rahul")
//   ).toBeInTheDocument();
// });


test("displays error when API call fails", async () => {
  mockedAxios.get.mockRejectedValue(
    new Error("Network error")
  );

  render(<UserList />);

  expect(
    screen.getByText("Loading...")
  ).toBeInTheDocument();

  expect(
    await screen.findByText(
      "Unable to load users"
    )
  ).toBeInTheDocument();
});