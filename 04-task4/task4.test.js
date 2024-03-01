const sumOfAllPrimes = require("./task4.js");

test.each`
    input | output
    ${10} | ${17}
    ${59} | ${440}
    ${1}  | ${0}   // Edge case: input is 1
    ${2}  | ${2}   // Edge case: input is 2
    ${0}  | ${0}   // Edge case: input is 0
    ${-5} | ${0}   // Edge case: input is negative
    ${100} | ${1060}
    ${999} | ${76127}
`("Input: $input; Output; $output", ({ input, output }) => {
    expect(sumOfAllPrimes(input)).toBe(output);
});
