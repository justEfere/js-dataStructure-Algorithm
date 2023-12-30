function generateHashtag(strings) {
    if (strings.length > 140 || strings == "") {
        return false;
    } else {
        return strings.trim().split(" ").join("").padStart(strings.split(" ").join("").length + 1, "#");
    }
}

module.exports = generateHashtag;

