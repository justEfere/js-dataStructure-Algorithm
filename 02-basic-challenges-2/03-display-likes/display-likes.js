function displayLikes(likeArr) {
    if (likeArr.length <= 0) {
        return "no one likes this"
    } else if (likeArr.length == 1) {
        return `${likeArr[0]} likes this`;
    } else if (likeArr.length == 2) {
        return `${likeArr[0]} and ${likeArr[1]} like this`
    } else if (likeArr.length == 3) {
        let [a, b, c] = likeArr;
        return `${a}, ${b} and ${c} like this`;
    } else if (likeArr.length > 3) {
        let [a, b] = likeArr;
        return `${a}, ${b} and ${likeArr.length - 2} others like this`;
    }
}

module.exports = displayLikes;
