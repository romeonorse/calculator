const calcButtons = document.querySelectorAll('.calc-button');
const displayText = document.querySelector('.display-text');

// BASIC MATH
const add = (a, b) => a + b;
const substr = (a, b) => a - b;
const mult = (a, b) => a * b;
const divide = (a, b) => a / b;

let result;

// CLEAR DISPLAY
const numBtns = document.querySelectorAll('.num-btn');
function clearDisplay() {
  displayText.innerText = '';
}

// BUTTON AND DISPLAY EVENTS
calcButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    if (displayText.innerText.length < 10 && e.target.innerText !== '=') {
      displayText.innerText += e.target.innerText;
    } else {
      displayText.innerText = 'SUPERERROR';
    }
    
    let displayString = displayText.innerText;
    let pressedSymbols;
    
    if (displayString.includes('/')) {
      pressedSymbols = displayString.split('/');
      result = divide(pressedSymbols[0],pressedSymbols[1]);
    } else if (displayString.includes('*')) {
      pressedSymbols = displayString.split('*');
      result = mult(pressedSymbols[0],pressedSymbols[1]);
    } else if (displayString.includes('-')) {
      pressedSymbols = displayString.split('-');
      result = substr(pressedSymbols[0],pressedSymbols[1]);
    } else if (displayString.includes('+')) {
      pressedSymbols = displayString.split('+');
      result = add(+pressedSymbols[0],+pressedSymbols[1]);
    }
    
    return result;
  })
})

// RESULT =
const resultButton = document.querySelector('#result');
resultButton.addEventListener('click', function() {
  displayText.innerText = result.toFixed(1);
})

// CLEAR PREVIOUS
const clearbutton = document.querySelector('#reset');
clearbutton.addEventListener('click', function() {
  displayText.innerText = '';
});