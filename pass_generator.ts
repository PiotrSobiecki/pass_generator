import * as readline from 'readline';
import { randomInt } from 'crypto';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]:;<>,.?/|\\";

function generatePassword(passwordLength: number): string {
    if (passwordLength < 12) {
        throw new Error("Password length must be at least 12 characters.");
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        // Math.random nie jest kryptograficznie bezpieczny; randomInt losuje
        // z CSPRNG bez modulo bias.
        const index = randomInt(characters.length);
        password += characters.charAt(index);
    }

    return password;
}

rl.question("Enter password length (min 12 marks): ", (passwordLength: string) => {
    try {
        const password = generatePassword(parseInt(passwordLength, 10));
        console.log("Your password is: " + password);
    } catch (error) {
        console.log(error.message);
    } finally {
        rl.close();
    }
});
