// HTML ELEMENTS
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

// AMALGAMATION OF RANDOMLY GENERATED VARIABLES
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// CLICK LISTENER FOR PASSWORD ELEMENTS BOX
generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	
// DETERMINES WHICH SYMBOLS WILL BE USED TO GENERATE THE PASSWORD
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// GENERATES THE PASSWORD WITH THE SELECTED SYMBOLS
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
// IF NONE OF THE FEATURE CHECK BOXES ARE SELECTED, THIS MESSAGE WILL APPEAR
	if(typesCount === 0) {
		return 'Select A Value';
	}
	
// THE FOR LOOP THAT GENERATES THE PASSWORD UNTIL ITS SELECTED TYPE COUNT
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}
// GET RANDOM VALUES FOR EACH USING THEIR CHARACTER CODE
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// PERSONALLY CHOSEN CHARACTERS
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


// GETS THE "GENERATE PASSWORD" WINDOW
var modal = document.getElementById("passwordBox");

// GETS THE BUTTON THAT OPENS THE POP OUT WINDOW
var btn = document.getElementById("generateButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// CLICKING ON THE (X) CLOSES THE WINDOW
span.onclick = function() {
  modal.style.display = "none";
}
// GENERATING THE PASSWORD CLOSES THE WINDOW
generate.onclick = function() {
	modal.style.display = "none";
  }
// WHEN OUTSIDE OF THE WINDOW IS CLICKED, THE WINDOW IS CLOSED
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


//REFERENCES THE HTML GENERATE BUTTON
var generateBtn = document.querySelector("#generate");



//PASSWORD INPUT FUNCTION
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}



// GENERATE BUTTON EVENT LISTENER
generateBtn.addEventListener("click", writePassword);