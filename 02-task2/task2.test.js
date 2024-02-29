const customSort = require("./task2.js");

test.each`
    input                                  | output
    ${[4, 2, 5, 7, 1, 6]}                  | ${[1, 5, 7, 2, 4, 6]}
    ${[25, 40, 14, 91, 31, 22, 49, 13, 6]} | ${[13, 25, 31, 49, 91, 6, 14, 22, 40]}
`("Input: $input; Output: $output", (input, output) => {
    expect(customSort(input)).toBe(output);
});
