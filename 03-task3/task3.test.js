const stringifyLargestNumber = require("./task3.js");

test.each`
    input | output
    ${[10, 2, 13, 7]} | ${"721310"}
    ${[21, 36, 8, 45]} | ${"8453621"}
    ${[]} | ${""}
    ${[0]} | ${"0"}
    ${[100000, 90, 8, 356, 350]} | ${"890356350100000"}
`("Input: $input; Output: $output", ({ input, output }) => {
    expect(stringifyLargestNumber(input)).toBe(output);
});
