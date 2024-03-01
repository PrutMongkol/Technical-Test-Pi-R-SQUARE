function sumOfAllPrimes(n) {
    if (n < 2) {
        return 0;
    }

    const primes = new Array(n + 1).fill(true);
    primes[0] = false;
    primes[1] = false;

    let result = 0;

    for (let i = 2; i * i < n; i++) {
        if (primes[i]) {
            j = i * i;
            while (j <= n) {
                primes[j] = false;
                j += i;
            }
        }
    }

    for (let i = 2; i < primes.length; i++) {
        if (primes[i]) {
            result += i;
        }
    }

    return result;
}

module.exports = sumOfAllPrimes;
