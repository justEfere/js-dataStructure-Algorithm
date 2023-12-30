function sumOfEvenSquares(array) {
    let sum = array.filter(num => Math.abs(num) % 2 == 0)
        .map(value => value ** 2)
        .reduce((acc, le) => acc + le, 0);
    return sum;


}
// console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4]))

module.exports = sumOfEvenSquares;
