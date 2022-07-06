// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // Get the values for the password options
    var lowercase = document.querySelector("#lowercase").value;
    var uppercase = document.querySelector("#uppercase").value;
    var numerical = document.querySelector("#numerical").value;
    var special = document.querySelector("#special").value;



    // Set the password value into the DOM
    passwordText.value = password;

}

function generatePassword() {

    /// Just for testing
    //lowercase = false;

    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numerical = document.getElementById("numerical").checked;
    var special = document.getElementById("special").checked;


    var chars = "";
    if (lowercase) {
        chars = chars + ("abcedfghijklmnopqrstuvwxyz")
    }

    if (uppercase) {
        chars = chars + ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (numerical) {
        chars = chars + ("0123456789")
    }

    if (special) {
        chars = chars + ("!@#$%^&*()")
    }

    // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Get the value for the password length
    var passwordLength = document.getElementById("passwordlength").value;

    // Check for the minimum length
    if (passwordLength < 8) {
        alert("Password must be 8 characters or more")

    }

    // Check for the maximum length
    if (passwordLength > 128) {
        alert("Password must be less than 128 characters")
    }

    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("password").value = password;

    return password;
}