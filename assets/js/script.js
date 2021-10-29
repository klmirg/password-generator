// Assignment code here
var passwordLength = 8 > 128;

var specialCharacters =  window.prompt("Do you want special characters?");
var lowerCase = window.prompt("Do you want lower case letters?");
var upperCase = window.prompt("Do you want upper case letters?");


var generatePassword = function() {

  if (specialCharacters === true)

}


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