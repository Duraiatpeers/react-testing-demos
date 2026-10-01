import { logger } from "./logger";
import { generateReport } from "./reportService";

describe("Report Service", () => {

  test("calls logger with correct message", () => {
    const spy = jest.spyOn(
      logger,
      "log"
    );

    generateReport();

    expect(spy)
      .toHaveBeenCalledWith(
        "Report generated"
      );

    spy.mockRestore();
  });

});