function reverseString(str) {
    let fArray = '';
    for (let i = str.length - 1; i >= 0; --i) {
        fArray += str[i];
    }
    return fArray;
}

// const rev = reverseString("hello");
// console.log(rev)

module.exports = reverseString;
