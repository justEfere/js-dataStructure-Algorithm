function findMaxNumber(num) {
    let currMax = 0;

    num.forEach(num => {
        if (num >= currMax) {
            currMax = num;
        }

    });
    return currMax;
}

// const max = findMaxNumber([1, 2, 4, 4, 5, 6, 77, 8, 98, 89, 9, 9, 0]);
// console.log(max);

module.exports = findMaxNumber;
