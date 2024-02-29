const isSumOfTwoExist = require("./task1");

// test('Array: [1, 3, 5, 7, 16, 4]; Target: 8; Return: true', () => {
//     expect(isSumOfTwoExist([1, 3, 5, 7, 16, 4], 8)).toBe(true);
// });

test.each`
    array | target | expected | type
    ${[1, 3, 5, 7, 16, 4]} | ${8} | ${true} | ${'standard'}
    ${[1, 3, 5, 7, 16, 4]} | ${12} | ${true} | ${'standard'}
    ${[1, 3, 5, 7, 16, 4]} | ${18} | ${false} | ${'standard'}
    ${[12, 17, 14, 11, 19, 8]} | ${20} | ${true} | ${'standard'}
    ${[]} | ${1} | ${false} | ${'empty array'}
    ${[1]} | ${1} | ${false} | ${'single-element'}
    ${[1,1]} | ${1} | ${false} | ${'no pair'}
`("Type: $type - array: $array; target: $target; expected return: $expected", ({array, target, expected}) => {
    expect(isSumOfTwoExist(array, target)).toBe(expected);
})