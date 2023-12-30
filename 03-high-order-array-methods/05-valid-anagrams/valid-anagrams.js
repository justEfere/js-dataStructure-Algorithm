function validAnagrams(word1, word2) {

    const word1Arr = word1.split("");
    const word2Arr = word2.split("");

    word1Arr.forEach(char => {
        word2Arr.forEach(char2 => {
            if (char == char2) {
                word2Arr.splice(word2Arr.indexOf(char2), 1)
            }
        })
    });

    if (word2Arr.length < 1) {
        return true;
    } else {
        return false
    }
}

// validAnagrams("astronomer", "moonstarer");
module.exports = validAnagrams;
