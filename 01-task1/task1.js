/*
assumptions:
 - 'array' is an array of N integers
 - 0 <= N < 1e9
 - 'target' is an integer
*/

/*
straight-forward version (unoptimized)
*/
function isSumOfTwoExist(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i === j) {
                // no-op
            } else {
                if (array[i] + array[j] === target) {
                    return true;
                }
            }
        }
    }
    return false;
}

module.exports = isSumOfTwoExist;
