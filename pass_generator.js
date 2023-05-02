"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]:;<>,.?/|\\";
function generatePassword(passwordLength) {
    if (passwordLength < 12) {
        throw new Error("Password length must be at least 12 characters.");
    }
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        var index = Math.floor(Math.random() * characters.length);
        password += characters.charAt(index);
    }
    return password;
}
rl.question("Enter password length (min 12 marks): ", function (passwordLength) {
    try {
        var password = generatePassword(parseInt(passwordLength, 10));
        console.log("Your password is: " + password);
    }
    catch (error) {
        console.log(error.message);
    }
    finally {
        rl.close();
    }
});
