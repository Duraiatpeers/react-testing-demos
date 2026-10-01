import { calculatePrice } from "./calculator";

describe("Discount Service", () => {

  test("uses mocked discount value", () => {
    const mockGetDiscount = jest.fn();

    mockGetDiscount.mockReturnValue(100);

    const result =
      calculatePrice(1000, mockGetDiscount);

    expect(result).toBe(900);
  });

});