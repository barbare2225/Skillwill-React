var validator = require('validator');

console.log("test@test.com is mail - "+validator.isEmail('test@test.com'));
console.log("abcDE123 is mail - "+validator.isEmail('abcDE123'));