// import counterReducer, {
//   increment,
//   decrement,
//   reset
// } from "./counterSlice";

// describe("counter reducer", () => {

//   test("increments count", () => {
//     const initialState = {
//       count: 0
//     };

//     const newState = counterReducer(
//       initialState,
//       increment()
//     );

//     expect(newState.count).toBe(1);
//   });

// });


import counterReducer, {
  increment,
  decrement,
  reset,
  selectCount
} from "./counterSlice";

describe("counter reducer", () => {

  test("returns initial state", () => {
    const newState = counterReducer(
      undefined,
      { type: "unknown" }
    );

    expect(newState).toEqual({
      count: 0
    });
  });

  test("increments count", () => {
    const initialState = {
      count: 0
    };

    const newState = counterReducer(
      initialState,
      increment()
    );

    expect(newState.count).toBe(1);
  });

  test("decrements count", () => {
    const initialState = {
      count: 5
    };

    const newState = counterReducer(
      initialState,
      decrement()
    );

    expect(newState.count).toBe(4);
  });

  test("resets count", () => {
    const initialState = {
      count: 10
    };

    const newState = counterReducer(
      initialState,
      reset()
    );



    expect(newState.count).toBe(0);
  });


      test("selects count from state", () => {
  const state = {
    counter: {
      count: 25
    }
  };

  const result = selectCount(state);

  expect(result).toBe(25);
});
});