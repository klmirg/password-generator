// Assignment code here
var generatePassword = ["password length", "special characters", "numeric characters", "lower case", "upper case"];
  


// Do you want special characters?
// Do you want lower case or upper case?
// How long do you want the password to be? between 8 and 128 characters



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
    var password = writePassword()
    // use jquery to place password in html input
  };

  /*var specialCharacters = window.confirm("Click OK to confirm including special characters.");
    if (specialCharacters);
    console.log(specialCharacters);

  var numericCharacters = window.confirm("Click OK to confirm including numeric characters.");
    if (numericCharacters);
    console.log(numericCharacters);

  var lowerCase = window.confirm("Click OK to confirm including lower case letters.");
    if (lowerCase);
    console.log(lowerCase);

  var upperCase = window.confirm("Click OK to confirm including upper case letters.");
    if (upperCase);
    console.log(upperCase); */
 
  }; 
  var writePassword = function() {
 // should pass answers into this function
 // and create password given by answers by user and return the function
  }

  var getPasswordLength = function() {
    var passwordLengthAnswer = prompt("How many characters would you like your password to contain?");
    if ( passwordLengthAnswer > 8 && passwordLengthAnswer < 128) {
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