function fizzBuzzArray(num) {
    let fixBuzzArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            fixBuzzArr.push("FizzBuzz")
        } else if (i % 3 == 0) {
            fixBuzzArr.push("Fizz")
        } else if (i % 5 == 0) {
            fixBuzzArr.push("Buzz")
        } else {
            fixBuzzArr.push(i)
        }
    }
    return fixBuzzArr;
}
// fizzBuzzArray(15);
module.exports = fizzBuzzArray;
