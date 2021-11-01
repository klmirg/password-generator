// Assignment code here


var generatePassword = function() {
var password = "";
var passwordLength = "";
var specialCharactersEnabled = false;
var numericCharactersEnabled = false;
var lowerCaseEnabled = false;
var upperCaseEnabled = false;


  var passwordLengthAnswer = getPasswordLength()
  var specialCharactersAnswer = getSpecialCharacters()
  var numericCharactersAnswer = getNumericCharacters()
  var lowerCaseAnswer = getLowerCase()
  var upperCaseAnswer = getUpperCase() 
  if (passwordLengthAnswer && specialCharactersAnswer && numericCharactersAnswer && lowerCaseAnswer && upperCaseAnswer){
     var password = writePassword(passwordLengthAnswer, specialCharactersAnswer, numericCharactersAnswer, lowerCaseAnswer, upperCaseAnswer)
    // use jquery to place password in html input
  }
};

  var writePassword = function(passwordLengthAnswer, specialCharactersAnswer, numericCharactersAnswer, lowerCaseAnswer, upperCaseAnswer) {
 // should pass answers into this function
 // and create password given by answers by user and return the function
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

  var getSpecialCharacters = function() {
    var specialCharacters = window.confirm("Click OK to confirm including special characters.");
    if (specialCharacters);
    console.log(specialCharacters);
      return specialCharacters;
  };

  var getNumericCharacters = function() {
    var numericCharacters = window.confirm("Click OK to confirm including numeric characters.");
    if (numericCharacters);
    console.log(numericCharacters);
    return numericCharacters;
  };

  var getLowerCase = function() {
    var lowerCase = window.confirm("Click OK to confirm including lower case letters.");
    if (lowerCase);
    console.log(lowerCase);
    return lowerCase;
  };

  var getUpperCase = function() {
    var upperCase = window.confirm("Click OK to confirm including upper case letters.");
    if (upperCase);
    console.log(upperCase);
    return upperCase;
  };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




generatePassword();