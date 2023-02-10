const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")
let currentOperand, previousOperand, operation;
clear();
 
function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = '';
}

function updateDisplay() {
  currentOperandTextElement.innerHTML = currentOperand;
  previousOperandTextElement.innerHTML = previousOperand + operation;
}

function appendDigit(digit) {
  if (digit === '.' && currentOperand.includes('.')) return
  currentOperand = currentOperand + digit;

}

function chooseOperation(operButton) {
  if (currentOperand === '') return
  if (previousOperand !== '') {
    compute()
  }
  operation = operButton;
  previousOperand = currentOperand;
  currentOperand = ''; 
}

function compute() {
  let computation
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
    default:
      return
  }
  currentOperand = computation;
  operation = '';
  previousOperand = '';
  
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendDigit(button.innerHTML);
    updateDisplay();
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerHTML);
    updateDisplay();
  })
})

equalsButton.addEventListener('click', () => {
  compute();
  updateDisplay();
})

allClearButton.addEventListener('click', () => {
  clear();
  updateDisplay();
})

deleteButton.addEventListener('click', () => {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
})

addEventListener('keydown', (e) => {
  if (e.key >= 0 && e.key <= 9) {
    appendDigit(e.key);
    updateDisplay();
  } else if (e.key === '.') {
    appendDigit(e.key);
    updateDisplay();
  } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    chooseOperation(e.key === "/" ? "÷" : e.key);
    updateDisplay();
  } else if (e.key === 'Enter') {
    compute();
    updateDisplay();
  } else if (e.key === 'Backspace') {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
  } else if (e.key === 'Escape') {
    clear();
    updateDisplay();
  }
})
