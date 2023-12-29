function findMissingNumber(arr) {

    // sort the array
    // find the min and max
    // create a new array from looping min to max
    // subtract the diff and thats the missing number
    const minNum = Math.min(...arr);
    const maxNum = Math.max(...arr);
    const arrSorted = arr.sort((a, b) => a - b);

    const myArr = [];
    for (let i = minNum; i <= maxNum; i++) {
        myArr.push(i);
    }

    return missingNum = myArr.reduce((a, b) => a + b) - arrSorted.reduce((a, b) => a + b);

}
module.exports = findMissingNumber;
