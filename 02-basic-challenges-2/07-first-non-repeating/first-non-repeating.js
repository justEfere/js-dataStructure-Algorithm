function findFirstNonRepeatingCharacter(chars) {
    const groupPairArr = [];

    for (let i = 0; i < chars.length; i += 2) {
        groupPairArr.push(chars.slice(i, i + 2))
    }

    let answer;
    for (let i = 0; i < groupPairArr.length; i++) {
        if (groupPairArr[i][0] != groupPairArr[i][1]) {
            answer = groupPairArr[i][0];
            break;
        } else {
            answer = null;
        }
    }
    return answer;
}
// console.log(findFirstNonRepeatingCharacter('abcdef')); // should return 'b'
module.exports = findFirstNonRepeatingCharacter;
