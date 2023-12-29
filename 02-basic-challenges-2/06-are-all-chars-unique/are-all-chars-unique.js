function areAllCharactersUnique(char) {
    return Array.from(new Set(char)).length == char.length ?? false;
}
// console.log(areAllCharactersUnique('programming')); // true
module.exports = areAllCharactersUnique;