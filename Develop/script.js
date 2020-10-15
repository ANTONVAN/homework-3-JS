// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
	var lowerCase = "abcdefghijklmnopqrstuvwxyz";
	var upperCase = lowerCase.toUpperCase();
	var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
	


//input from user to define the characters the password should contain
	passwordLengthConfirm = prompt("Select a password length of at least 8 and no more than 128 characters");
	lowerCaseConfirm = confirm("Lowercase?");
	upperCaseConfirm = confirm("Uppercase?");
	numericConfirm = confirm("Numeric?");
	specialCharactersConfirm = confirm("Special Characters?");

	conditions = [passwordLengthConfirm,lowerCaseConfirm,upperCaseConfirm,specialCharactersConfirm,numericConfirm];
	if(conditions.includes(!true)){
		confirm("plase select at least one condition");
	}

	var password = "";


	for(var i=0; i<passwordLengthConfirm; i++){
	/*
	Generating a random number to select a character from the strings of
	uppercase, lowercase and special characters.
	*/
	var lowerCaseVal = Math.floor(Math.random() * lowerCase.length+1);
	var upperCaseVal = Math.floor(Math.random() * upperCase.length+1);
	var specialCharactersVal = Math.floor(Math.random() * specialCharacters.length+1);
	var numbersVal = Math.floor(Math.random() * 9);

	//selecting a random character from the strings
	var passLowerCase = lowerCase.charAt(lowerCaseVal);
	var passUpperCase = upperCase.charAt(upperCaseVal);
	var passSpecialChars = specialCharacters.charAt(specialCharactersVal);


	
	//Add the characters to the string if they were confirmed in the input
			if(lowerCaseConfirm){
				password += passLowerCase;
			}
			if(upperCaseConfirm){
				password += passUpperCase;
			}
			if(specialCharactersConfirm){
				password += passSpecialChars;
			}
			if(numericConfirm){
				password+= numbersVal;
			}
		

		}

		/*
		When more than one condition is selected, the length of the password
		increases. Then the slice method is called to adjust the number of characters
		*/
		finalPassword = password.slice(0,passwordLengthConfirm);
		return finalPassword;
	}

	writePassword();