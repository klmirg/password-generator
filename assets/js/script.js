// Assignment code here
var generatePassword = ["password length", "special characters", "numeric characters", "lower case", "upper case"];
  
var buttonEl = document.querySelector("#generate");

var passwordLength = ""
var specialCharacters = ""
var numericCharacters = ""
var lowerCase = ""
var upperCase = ""


// var specialCharacters =  prompt("Do you want special characters?");
// var lowerCase = prompt("Do you want any lower case letters?");
// var upperCase = prompt("Do you want any upper case letters?"); 

// Do you want special characters?
// Do you want lower case or upper case?
// How long do you want the password to be? between 8 and 128 characters

var generatePassword = function() {

  var passwordLength = prompt("How many characters would you like your password to contain?");
    if ( passwordLength > 8 && passwordLength < 128) {
      console.log(passwordLength);
    } else  {
      alert("You must choose between 8 and 128 characters.");
      
      while ( passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("How many characters would you like your password to contain>");
     }
    }

  var specialCharacters = window.confirm("Click OK to comfirm including special characters.");
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
    console.log(upperCase);

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