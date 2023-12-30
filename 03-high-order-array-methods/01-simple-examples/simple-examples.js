const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubleNumbers = numbers.map((num, index, arr) => {
    // console.log(arr);
    if (index == 2) {
        return num * 3;
    }
    return num * 2

});
// console.log(doubleNumbers);


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNums = numbers.filter(num => num % 2 == 0);
// console.log(evenNums);



/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((start, adder) => start + adder, 0);
// console.log(sum);



/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach(num => {
    // console.log(num + Math.round(Math.random() * 100))
})


/**
* find: Returns the first array element that satisfies a specified condition.
*/
const foundNumber = numbers.find(num => num % 2 == 0);
// console.log(foundNumber); //=> 2

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const check = numbers.some(num => num > 4);
// console.log(check); // => true or false



/**
 * every: Checks if all array elements satisfy a condition.
 */
const checker = numbers.every(num => num > 0);
console.log(checker);


