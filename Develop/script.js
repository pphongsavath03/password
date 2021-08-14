// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "%", "&", ",", "*", "+", "-"];
let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// setting values
let length = "";
let confirmSpecial;
let confirmAlpha;
let confirmCaps;
let confirmNums;

// creating prompts for password lenght
function generatePassword() {
    let passLength = (prompt("How many characters would you like the password to contain?"));

    while (passLength <= 7 || passLength >= 24) {
        alert("Password length must be between 8-24 characters.");
        let passLength = (prompt("How many characters would you like your password to contain?"));
    }

    // series of questions for special chars, numbers, letters, and caps
    let confirmSpecial = confirm("Click OK to confirm your password will include special characters.");
    let confirmAlpha = confirm("Click OK to confirm your password will include letters.");
    let confirmCaps = confirm("Click OK to confirm your password will include capital letters.");
    let confirmNums = confirm("Click OK to confirm your password will include numbers.");

    //combining arrays
    let pass = []

    if (confirmSpecial, confirmAlpha, confirmCaps, confirmNums) {
        pass = pass.concat(special, alpha, caps, numbers)
    }

    console.log(pass)


    let newPassword = ""
        // password generator loop  
    for (let i = 1; i < passLength.length; i++) {
        newPassword = newPassword + pass[Math.floor(Math.random() * pass.length)];
        console.log(newPassword)
    }
    return newPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);