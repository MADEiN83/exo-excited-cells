import ExcitedCells from "../";

describe("ExcitedCells tests", () => {
  const service = new ExcitedCells();

  it("should return array when proceed method is called", () => {
    const output = service.proceed(0, [1, 0, 1, 1]);
    expect(output).toBeDefined();
    expect(Array.isArray(output)).toBeTruthy();
  });

  it("should return initial state when steps equals zero", () => {
    const output = service.proceed(0, [1, 0, 1, 1]);
    expect(output).toBeDefined();
    expect(output).toEqual([1, 0, 1, 1]);
  });

  it("should not throw any exceptions when passed arguments was undefined", () => {
    const output = service.proceed();
    expect(output).toBeDefined();
    expect(output).toEqual([]);
  });

  it("should return `[1, 0, 1, 0]` when steps=1 and state=[1, 0, 1, 1]", () => {
    const output = service.proceed(1, [1, 0, 1, 1]);
    expect(output).toBeDefined();
    expect(output).toEqual([1, 0, 1, 0]);
  });
});
