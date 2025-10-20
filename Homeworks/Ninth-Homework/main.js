var validator = require('validator');

function checkEmail(email) {
    if(validator.isEmail(email)) {
        return email + " is a valid email.";
    } else {
        return email + " is not a valid email.";
    }
}

console.log(checkEmail("test@test.com"));
console.log(checkEmail("abcDE123"));
