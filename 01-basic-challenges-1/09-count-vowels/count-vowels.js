function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', "u"];
    const strClean = str.toLowerCase().replace(/[^a-z]/g, "");

    let counter = 0;
    for (let i = 0; i <= strClean.length - 1; i++) {
        vowels.forEach((char) => {
            if (strClean[i] === char) {
                counter++;
            }
        })
    }
    return counter;
    // console.log(counter);
}

// countVowels("helloman");

module.exports = countVowels;
