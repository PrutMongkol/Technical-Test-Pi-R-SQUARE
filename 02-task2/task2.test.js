const customSort = require("./task2.js");

test.each`
    input                                     | output
    ${[4, 2, 5, 7, 1, 6]}                     | ${[1, 5, 7, 2, 4, 6]}
    ${[25, 40, 14, 91, 31, 22, 49, 13, 6]}    | ${[13, 25, 31, 49, 91, 6, 14, 22, 40]}
    ${[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]} | ${[-5, -3, -1, 1, 3, 5, -4, -2, 0, 2, 4]}
    ${[]}                                     | ${[]}
    ${[-2]}                                   | ${[-2]}
    ${[-1]}                                   | ${[-1]}
    ${[1]}                                    | ${[1]}
    ${[2]}                                    | ${[2]}
`("Input: $input; Output: $output", ({ input, output }) => {
    expect(customSort(input)).toEqual(output);
});

const length = 25000;
const array1 = new Array(length).fill(-2);
const array2 = new Array(length).fill(-1);
const array3 = new Array(length).fill(1);
const array4 = new Array(length).fill(2);
const bigArray = [...array1, ...array2, ...array3, ...array4];
const expectedBigArray = [...array2, ...array3, ...array1, ...array4];
test("Big Array - Input: [-2(x2500), -1(x2500), 1(x2500), 2(x2500)]; Output: [-1(x2500), 1(x2500), -2(x2500), 2(x2500)]", () => {
    expect(customSort(bigArray)).toEqual(expectedBigArray);
})

