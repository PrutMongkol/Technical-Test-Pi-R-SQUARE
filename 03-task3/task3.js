function stringifyLargestNumber(integers) {
    const numberBucket = [];

    for (let i = 0; i < integers.length; i++) {
        const number = integers[i];
        const bucketIndex = number.toString().length;
        if (!numberBucket[bucketIndex]) {
            numberBucket[bucketIndex] = [];
        }
        numberBucket[bucketIndex].push(number);
    }
    
    let result = "";

    for (let i = 1; i < numberBucket.length; i++) {
        if (numberBucket[i]) {
            numberBucket[i].sort();
            while (numberBucket[i].length > 0) {
                const number = numberBucket[i].pop();
                result = result.concat(number);
            }
        }
    }

    return result;
}

module.exports = stringifyLargestNumber;