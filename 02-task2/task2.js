/*
Assumptions:
- array[k] is always an integer
*/

function customSort(array) {
    const positiveEvenNumbers = [];
    const positiveOddNumbers = [];
    const negativeEvenNumbers = [];
    const negativeOddNumbers = [];

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        switch (true) {
            case (number >= 0 && number % 2 === 0):
                positiveEvenNumbers[number / 2] = (positiveEvenNumbers[number / 2])
                    ? positiveEvenNumbers[number / 2] + 1
                    : 1;
                break;
            case (number >= 0 && number % 2 === 1):
                positiveOddNumbers[Math.floor(number / 2)] = (positiveOddNumbers[Math.floor(number / 2)])
                    ? positiveOddNumbers[Math.floor(number / 2)] + 1
                    : 1;
                break;
            case (number < 0 && number % 2 === 0):
                negativeEvenNumbers[-number / 2] = (negativeEvenNumbers[-number / 2])
                    ? negativeEvenNumbers[-number / 2] + 1
                    : 1;
                break;
            case (number < 0 && number % 2 === -1):
                negativeOddNumbers[Math.floor(-number / 2)] = (negativeOddNumbers[Math.floor(-number / 2)])
                    ? negativeOddNumbers[Math.floor(-number / 2)] + 1
                    : 1;
                break;
            default:
                throw new Error("Unexpected Error");
                break;
        }
    }

    const result = [];

    for (let i = negativeOddNumbers.length - 1; i >= 0; i--) {
        while (negativeOddNumbers[i]) {
            result.push(-(i * 2 + 1));
            negativeOddNumbers[i]--;
        }
    }
    for (let i = 0; i < positiveOddNumbers.length; i++) {
        while (positiveOddNumbers[i]) {
            result.push(i * 2 + 1);
            positiveOddNumbers[i]--;
        }
    }
    for (let i = negativeEvenNumbers.length - 1; i >= 0; i--) {
        while (negativeEvenNumbers[i]) {
            result.push(-(i * 2));
            negativeEvenNumbers[i]--;
        }
    }
    for (let i = 0; i < positiveEvenNumbers.length; i++) {
        while (positiveEvenNumbers[i]) {
            result.push(i * 2);
            positiveEvenNumbers[i]--;
        }
    }

    return result;
}

module.exports = customSort;
