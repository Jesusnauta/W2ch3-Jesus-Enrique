import { aLength } from "./main";

describe("Given an array of length 10", () => {
  test("Should be length of 10", () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const r = aLength(a);
    expect(r).toBe(10);
  });
  describe("Given an array of length 0", () => {
    test("Should be length of 0", () => {
      const a = [];
      const r = aLength(a);
      expect(r).toBe(0);
    });
  });
});
