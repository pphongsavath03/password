// Assignment Code
let generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener
generateBtn.addEventListener("click", writePassword);

// arrays 
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

// confirm password length
function generatePassword() {
    var passLength = (prompt("How many characters would you like your password to contain?"));


    while (passLength <= 7 || passLength >= 25) {
        alert("Password length must be between 8-24 characters.");
        var passLength = (prompt("How many characters would you like your password to contain?"));
    }

    // confirm letters, numbers, special chars
    let confirmSpecial = confirm("Click OK to confirm if you like to add special characters.");
    let confirmNums = confirm("Click OK to confirm if you like to add numbers.");
    let confirmAlpha = confirm("Click OK to confirm if you like to add lowercase letters.");
    let confirmCaps = confirm("Click OK to confirm if you like to add uppercase letters.");

    let pass = []

    // comfirmation of chars selected
    if (confirmSpecial) {
        pass = pass.concat(special)
    }

    if (confirmNums) {
        pass = pass.concat(numbers)
    }

    if (confirmAlpha) {
        pass = pass.concat(alpha)
    }

    if (confirmCaps) {
        pass = pass.concat(caps)
    }

    console.log(pass)


    let newPassword = ""
        // password generator loop  
    for (let i = 0; i < passLength; i++) {
        newPassword = newPassword + pass[Math.floor(Math.random() * pass.length)];
        console.log(newPassword);
    }
    return newPassword;
}