const find = require("./index");

const testArray1 = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
    { id: 4, name: "four" },
  ];


  describe("find", () => {
    test("find is correctly in test array1", () => {
        expect(find(testArray1, (item) => item.id === 3)).toBe( { id: 3, name: "three" });
    });
});