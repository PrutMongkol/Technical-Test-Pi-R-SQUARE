const isSumOfTwoExist = require("./task1.js");

test.each`
    array                      | target | expected | type
    ${[1, 3, 5, 7, 16, 4]}     | ${8}   | ${true}  | ${"standard"}
    ${[1, 3, 5, 7, 16, 4]}     | ${12}  | ${true}  | ${"standard"}
    ${[1, 3, 5, 7, 16, 4]}     | ${18}  | ${false} | ${"standard"}
    ${[12, 17, 14, 11, 19, 8]} | ${20}  | ${true}  | ${"standard"}
    ${[1, 3, 5, -10, 15]}      | ${5}   | ${true}  | ${"standard"}
    ${[]}                      | ${1}   | ${false} | ${"empty array"}
    ${[1]}                     | ${1}   | ${false} | ${"single-element"}
    ${[1, 1]}                  | ${1}   | ${false} | ${"no pair"}
    ${[1, 1]}                  | ${2}   | ${true}  | ${"identical pair"}
`(
    "Type: $type - array: $array; target: $target; expected return: $expected",
    ({ array, target, expected }) => {
        expect(isSumOfTwoExist(array, target)).toBe(expected);
    }
);

const length = 100000;
const bigArray = new Array(length).fill(0);
bigArray[length - 1] = 9;
bigArray[length - 2] = 1;
const bigArrayTarget = 10;

test("Type: big array - array: [ 0, ..., 0, 1, 9]; target: 10; expected return: true", () => {
    expect(isSumOfTwoExist(bigArray, bigArrayTarget)).toBe(true);
});
