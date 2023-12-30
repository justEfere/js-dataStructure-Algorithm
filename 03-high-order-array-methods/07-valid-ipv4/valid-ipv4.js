const isValidIPv4 = (ip) => {
    const ipArr = ip.split(".");
    if (ipArr.length !== 4) {
        return false;
    }
    if (ipArr.some(value => value > 255)) {
        return false;
    } else {
        if (ipArr.some(octet => octet[0] == 0)) {
            return false;
        } else {
            return true;
        }
    }
};

// isValidIPv4('123.045.067.089'); // false

module.exports = isValidIPv4;
