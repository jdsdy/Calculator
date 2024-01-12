let inputString = '0';
let result = '';
const stringHolder = document.querySelector('.js-string-holder');
stringHolder.innerHTML = inputString;

function addStringElement(input) {
  if (inputString == 0 && typeof(input) == 'number') {
    inputString = input;
  } else if (input == 'AC') {
    inputString = '0';
  } else if (input == 'CE') {
    if (inputString == '0') {
      inputString = 'Err';
    } else if (inputString.length == 1) {
      inputString = '0';
    } else if (inputString == 'Err') {
      inputString = '0';
    } else {
      inputString = inputString.slice(0, -1);
    }
  } else {
    if (typeof(input) == 'number') {
      input = input.toString();
    }
    inputString += input;
  }
  stringHolder.innerHTML = inputString;
}

function evaluateString() {
  result = eval(inputString);
  stringHolder.innerHTML = result;
  inputString = '0';
}