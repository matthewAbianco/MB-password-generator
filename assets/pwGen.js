// DOM elements
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


// THIS REFERENCES THE CHARACTER CODES OF NUMBER, SYMBOL, UPPERCASE AND LOWERCASE 
const number =[48, 57];
const upper = [65,90];
const lower = [97,122];
const symbol = [33,47];

// CLICK LISTENER FOR PASSWORD ELEMENTS BOX
generateEl.addEventListener('click', () => {
	const length = lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;


// EMPTY ARRAY TAKING THE "CHECKED" VALUES OF UPPER, LOWER, NUMBER AND SYMBOL TO THEN BE RANDOMLY SELECTED LATER
const randomSelector = [];

// EMPTY ARRAY THAT WILL HOLD THE PASSWORD AFTER THE CRITERIA HAVE BEEN CHOSEN AND HAVE GONE THROUGH TTHE RNG "FOR LOOP"
const password = [];


  // FOR LOOP THAT LETS US RANDOMLY SELECT WHICH VALUE OF THE ARRAY TO GET. THE [0] (FIRST) AND [1] (SECOND) ARE THE INDEX STARTING AND END POINTS WITHIN THE CHARACTER CODE  
  if(hasUpper === true){
    for(let i=upper[0]; i<= upper[1]; i++){
      randomSelector.unshift(i);
    }
  }
  if(hasNumber === true){
    for(let i=number[0]; i<= number[1]; i++){
      randomSelector.unshift(i);
    }
  }
  if(hasSymbol === true){
    for(let i=symbol[0]; i<= symbol[1]; i++){
      randomSelector.unshift(i);
    }
  }
  if(hasLower === true){
    for(let i=lower[0]; i<= lower[1]; i++){
      randomSelector.unshift(i);
    }
  }
  

// THIS WILL CHECK THE PASSWORD LENGTH AND ENSURE IT ONLY DISPLAYS WITHIN THE VALUE MIN/MAX PARAMATERS
  if (lengthEl.value < 8 || lengthEl.value > 128) {
    window.alert(" your password must be between 8 - 128 characters");
    lengthEl.value = 8
    generateEl();
  }
// THIS WILL GRAB THE PASSWORD LENGTH VALUE AND 
  for(let i = 0; i< length; i++){
    password.unshift(String.fromCharCode(randomSelector[Math.floor(Math.random()*randomSelector.length)])
    )}
  result.textContent = password.join("");
})

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
