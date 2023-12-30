function highestScoringWord(string) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const letterArray = letters.split("");
    const strArr = string.split(" ");

    // sum each word
    let sum = []
    strArr.forEach(word => {
        const wordArr = word.split("");
        sum.push(wordArr.reduce((start, adder) => start + letterArray.indexOf(adder) + 1, 0));
    })

    // get the highest number
    let highest = 0;
    for (let i = 0; i <= sum.length; i++) {
        if (sum[i] > highest) {
            highest = sum[i]
        }
    }


    return strArr[sum.indexOf(sum.find(value => value == highest))];


}
// highestScoringWord('take me to semynak'); // 'semynak'

module.exports = highestScoringWord;
