function findMissingLetter(letters) {
    if (letters == [] || letters == "") {
        return [];
    } else {
        const alphabets = "abcdefghijklmnopqrstuvwxyz";
        const alphArr = alphabets.split("");

        const startingChar = alphArr.find(char => char == letters[0].toLowerCase());

        // find index of the starting letter
        const startIndex = alphArr.indexOf(startingChar);

        let inputLooper = 0;

        for (let i = Number(startIndex); i <= startIndex + Number(letters.length); i++) {
            if (alphArr[i] == letters[inputLooper].toLowerCase()) {
                inputLooper++;
            } else {
                if (startingChar == letters[0]) {
                    return alphArr[i];
                } else {
                    return alphArr[i].toUpperCase();
                }
            };
        };
    }
}

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // => "e"
module.exports = findMissingLetter;
