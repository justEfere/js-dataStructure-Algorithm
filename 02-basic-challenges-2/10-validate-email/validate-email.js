function validateEmail(email) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}
// console.log(validateEmail('john@gmail')); // true
module.exports = validateEmail;
