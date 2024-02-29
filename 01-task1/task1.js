/*
assumptions:
 - 'array' is an array of N integers
 - 0 <= N < 1e9
 - 'target' is an integer
*/

/*
straight-forward version
*/
function isSumOfTwoExist(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
}

/*
time-optimized version
*/
function isSumOfTwoExistOptimized(array, target) {
    const positiveNumbers = [];
    const negativeNumbers = [];
    let result = false;

    // counting integers in 'array'
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positiveNumbers[array[i]] = positiveNumbers[array[i]]
                ? positiveNumbers[array[i]] + 1
                : 1;
        } else {
            negativeNumbers[-array[i]] = negativeNumbers[-array[i]]
                ? negativeNumbers[-array[i]] + 1
                : 1;
        }
    }

    for (let i = 0; i < array.length; i++) {
        const pair = target - array[i];
        result = checkPair(pair, array[i], positiveNumbers, negativeNumbers);
        if (result) {
            return true;
        }
    }

    return false;
}

function checkPair(pair, opposite, positiveNumbers, negativeNumbers) {
    let result = false;
    if (pair === opposite) {
        if (pair >= 0) {
            if (positiveNumbers[pair] > 1) {
                result = true;
            }
        } else {
            if (negativeNumbers[-pair] > 1) {
                result = true;
            }
        }
    } else {
        if (pair >= 0) {
            if (positiveNumbers[pair]) {
                result = true;
            }
        } else {
            if (negativeNumbers[-pair]) {
                result = true;
            }
        }
    }
    return result;
}

module.exports = isSumOfTwoExistOptimized;
