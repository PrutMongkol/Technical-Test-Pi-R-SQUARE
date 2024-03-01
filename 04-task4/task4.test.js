const sumOfAllPrimes = require("./task4.js");

test.each`
    input | output
    ${10} | ${17}
    ${59} | ${440}
`("Input: $input; Output; $output", ({ input, output }) => {
    expect(sumOfAllPrimes(input)).toBe(output);
});
