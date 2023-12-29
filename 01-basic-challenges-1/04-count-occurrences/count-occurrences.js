function countOccurrences(word, char) {
    const wordArr = word.split("");
    let counter = 0;
    wordArr.forEach(wChar => {
        if (wChar == char) {
            counter++;
        }
    });
    return counter;
}

module.exports = countOccurrences;
