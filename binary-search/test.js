const binarySearch = require("./index");

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [16, "4t", "hhr", "34", "4555"];
const testArray3 = [25, 89, 27, 56, 556];

describe("binary-search", () => {
    test("search 2 in test array1", () => {
        expect(binarySearch(testArray1, 2)).toBe(2);
    });

    test("search '34' in test array2", () => {
        expect(binarySearch(testArray2, 2)).toBe("34");
    });

    test("search 25 in test array1", () => {
        expect(binarySearch(testArray3, 25)).toBe(25);
    });
});
