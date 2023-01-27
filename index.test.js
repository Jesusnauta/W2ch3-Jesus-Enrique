import { aLength, aMap, arrayIncludes, arrayIndexOf } from ".";
import * as m from "."; //para importar varias funciones sin tener que poner comas arriba.

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
    describe("Given an array o length  [1, 4, 9, 16];", () => {
      test("Should be length [2, 8, 18, 32", () => {
        const a = [1, 4, 9, 16];
        const b = 2;
        const Symbol = "*";
        const r = aMap(a, b, Symbol);
        const expected = [2, 8, 18, 32];
        expect(r).toEqual();
      });
    });
  });
});

describe("Given an arrayIndexOf", () => {
  describe("When we give a value", () => {
    test("then return index of firts element equal to de value", () => {
      const a = ["ant", "bison", "camel", "duck", "bison"];
      const b = arrayIndexOf(a, "bison");
      expect(b).toBe(1);
      const c = arrayIndexOf(a, "Jirafa");
      expect(c).toBe(-1);
    });
  });
});

describe("Given an arrayInclude", () => {
  describe("When we give a value", () => {
    test("Then return true if the element is include", () => {
      const a = ["cat", "dog", "bat"];
      const b = arrayIncludes(a, "dog");
      expect(b).toBe(true);
      const c = arrayIncludes(a, "at");
      expect(c).toBe(false);
    });
  });
});
