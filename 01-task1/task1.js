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

module.exports = { isSumOfTwoExist };
