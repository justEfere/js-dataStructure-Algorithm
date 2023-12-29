function isPalindrome(str) {
    // remove non-alphanumeric and space
    const workWith = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // reverse str
    let strRev = "";
    for (let i = workWith.length - 1; i >= 0; i--) {
        strRev += workWith[i]
    }
    if (workWith === strRev) {
        return true;
    } else {
        return false;
    }
}
// console.log(isPalindrome("racecar"));
module.exports = isPalindrome;
