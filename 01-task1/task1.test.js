const isSumOfTwoExist = require("./task1");

test('Array: [1, 3, 5, 7, 16, 4]; Target: 8; Return: true', () => {
    expect(isSumOfTwoExist([1, 3, 5, 7, 16, 4], 8)).toBe(true);
});