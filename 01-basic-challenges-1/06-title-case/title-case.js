function titleCase(words) {
    wordArr = words.split(" ");
    const uppArr = wordArr.map((word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    return uppArr.join(" ");
}

// console.log(titleCase("this is the beginning"));



module.exports = titleCase;
