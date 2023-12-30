function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}
// console.log(validatePassword('Abc12345')); // should return true
module.exports = validatePassword;
