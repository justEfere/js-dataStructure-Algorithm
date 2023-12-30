function findMissingLetter(charArr) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const apARr = alphabets.split("");

    // find first char position in alphabets
    const firstchar = alphabets.indexOf(alphabets.split("").find(char => char == charArr[0].toLowerCase()));

    // first char alphabet
    const f = alphabets.split("").find(char => char == charArr[0].toLowerCase());

    const pack = apARr.splice(firstchar, charArr.length + 1);

    const missing = pack.find((char, index) => char != charArr[index].toLowerCase());

    // console.log(alphabets.split(""))
    // console.log(charArr)
    // console.log(firstchar)

    if (f != charArr[0]) {

        return missing.toUpperCase();
    } else {
        return missing;
    }
}
// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// console.log(findMissingLetter(['X', 'Z'])); // 
module.exports = findMissingLetter;
