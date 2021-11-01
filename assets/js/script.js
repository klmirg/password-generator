// This provides the default answers if nothing is chosen.
var generatePassword = function() {
  var password = "";
  var passwordLength = "";
  var specialCharactersEnabled = false;
  var numericCharactersEnabled = false;
  var lowerCaseEnabled = false;
  var upperCaseEnabled = false;
  
  
  // Setting up the variables here.
  var passwordLengthAnswer = getPasswordLength()
  var specialCharactersAnswer = getSpecialCharacters()
  var numericCharactersAnswer = getNumericCharacters()
  var lowerCaseAnswer = getLowerCase()
  var upperCaseAnswer = getUpperCase() 
  if (passwordLengthAnswer && specialCharactersAnswer && numericCharactersAnswer && lowerCaseAnswer && upperCaseAnswer){
     var password = writePassword(passwordLengthAnswer, specialCharactersAnswer, numericCharactersAnswer, lowerCaseAnswer, upperCaseAnswer)
  }
};
// This is the function that creates the password.
  var writePassword = function(passwordLengthAnswer, specialCharactersAnswer, numericCharactersAnswer, lowerCaseAnswer, upperCaseAnswer) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    numericCharacters = '0123456789';
    specialCharacters = '!@#$%^&*()-_+=[]{}\\|:;"\'<>?,.';

    var password = ''
    let length = passwordLengthAnswer
    for (let i = 0; i < length; i++) {
      if (specialCharactersAnswer) {
        password += specialCharacters[Math.floor(Math.random() * 28)]  
        i++;
      }
      if (numericCharactersAnswer) {
        password += numericCharacters[Math.floor(Math.random() * 9)]
        i++;
      }
      if (lowerCaseAnswer) {
        password += lowerCase[Math.floor(Math.random() * 25)]
        i++;
      }
      if (upperCaseAnswer) {
        password += upperCase[Math.floor(Math.random() * 25)]
        i++;
      }
    }
    alert(password);
  };

  // This function prompts the user for how long they want their password to be, between 8 and 128 characters.
  var getPasswordLength = function() {
    var passwordLengthAnswer = prompt("How many characters would you like your password to contain?");
    if ( passwordLengthAnswer >= 8 && passwordLengthAnswer <= 128) {
      console.log(passwordLengthAnswer);
       return passwordLengthAnswer;
    } 
      if ( passwordLengthAnswer < 8 || passwordLengthAnswer > 128) {
        alert("You must choose between 8 and 128 characters.");
        return getPasswordLength();
    }
  };

  // This function prompts the user to decide if they want special characters in their password.
  var getSpecialCharacters = function() {
    var specialCharacters = window.confirm("Click OK to confirm including special characters.");
    if (specialCharacters);
    console.log(specialCharacters);
      return specialCharacters;
  };

  // This function prompts the user to decide if they want any numeric characters in their password.
  var getNumericCharacters = function() {
    var numericCharacters = window.confirm("Click OK to confirm including numeric characters.");
    if (numericCharacters);
    console.log(numericCharacters);
    return numericCharacters;
  };

  // This function prompts the user if they want any lower case letters in their password.
  var getLowerCase = function() {
    var lowerCase = window.confirm("Click OK to confirm including lower case letters.");
    if (lowerCase);
    console.log(lowerCase);
    return lowerCase;
  };

  // This function prompts the user if they want to use any upper case letters in their password.
  var getUpperCase = function() {
    var upperCase = window.confirm("Click OK to confirm including upper case letters.");
    if (upperCase);
    console.log(upperCase);
    return upperCase;
  };



var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);



// this is calling the generatePassword function.
generatePassword();