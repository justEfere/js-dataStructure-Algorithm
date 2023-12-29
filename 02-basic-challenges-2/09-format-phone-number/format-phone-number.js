function formatPhoneNumber(numArr) {
    if (numArr < 10 || numArr > 10) {
        return "invalid number";
    }
    return `(${numArr.slice(0, 3).join("")}) ${numArr.slice(3, 6).join("")}-${numArr.slice(6).join("")}`;
}
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
module.exports = formatPhoneNumber;
