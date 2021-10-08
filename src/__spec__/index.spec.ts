import ExcitedCells from "../";

describe("ExcitedCells tests", () => {
  const service = new ExcitedCells();

  it("should return array when proceed method is called", () => {
    const output = service.proceed(1, [1, 0, 1, 1]);
    expect(output).toBeDefined();
    expect(Array.isArray(output)).toBeTruthy();
  });
});
