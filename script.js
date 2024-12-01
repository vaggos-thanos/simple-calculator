// Συμπληρώστε τις παρακάτω εντολές επιλογής
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")
const dataPlusMinus = document.querySelector("[data-plus-minus]")
let currentOperand, previousOperand, operation;
clear();
 
//Αρχικοποιεί τις global μεταβλητές. ΟΙ 3 ΜΕΤΑΒΛΗΤΕΣ ΕΧΟΥΝ ΤΥΠΟ String
function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = '';
}

//Ενημερώνει το περιεχόμενο στις 2 γραμμές του display
function updateDisplay() {
  const hasData = previousOperandTextElement.innerHTML !== "";
  currentOperandTextElement.innerHTML = currentOperand;
  previousOperandTextElement.innerHTML = previousOperand + operation;
  return hasData;
}

//Επισυνάπτει ένα ακόμη ψηφίο στο τέλος του currentOperant
// Προσοχή στην περίπτωση που το ψηφίο είναι .
function appendDigit(digit) {
  if (digit === '.' && currentOperand.includes('.')) return
  currentOperand = currentOperand + digit;

}



/*Όταν πατηθεί ένα πλήκτρο πράξης:
  - Αν και οι δύο αριθμοί είναι κενοί, δεν γίνεται τίποτα
  - Αν και οι δύο αριθμοί ΔΕΝ είναι κενοί γίνεται υπολογισμός καλώντας τη συνάρτηση compute()
  - Αποδίδεται η νέα τιμή στη μεταβλητή operation
  - Η τιμή του currentOperant περνάει πλέον στο previusOperant
  - "Αδειάζει" το περιεχόμενο του current operant
*/
function chooseOperation(operButton) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute()
  }
  operation = operButton;
  previousOperand = currentOperand;
  currentOperand = ''; 
}


/* Εκτελεί αριθμητική πράξη με τα previousOperand και currentOperant
   Η πράξη που θα γίνει καθορίζεται από την τιμή του operant
   Το αποτέλεσμα της πράξης αποθηκεύεται στο current operant
   Οι μεταβλητές previousOperand και το operation αρχικοποιούνται σε κενή τιμή
*/
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
    case '%':
      computation = prev % current
      break
    case '±':
      computation = prev * -1
      break
    default:
      return
  }
  currentOperand = computation;
  operation = '';
  previousOperand = '';
  
}

function setDisplayZero(setZero, hasData) {
  if (setZero && !hasData) {
    currentOperand = "";
    currentOperandTextElement.innerHTML = 0;
  }

  if (currentOperandTextElement.innerHTML === "") currentOperandTextElement.innerHTML = 0
    

}

async function hoverEffect(button) {
  if (!button) return
  button.style.backgroundColor = 'rgba(24, 26, 27, .9)';
  setTimeout(() => {
    button.style.backgroundColor = 'rgba(24, 26, 27, .75)';
  }, 100);
}

function resolveButton(buttons, key) {
  buttons.forEach(button => {
    if (button.innerHTML === key) {
      hoverEffect(button)
    }
  })
}

// Προσθέστε τους eventListeners για τα κουμπιά με τα αριθμητικά ψηφία
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendDigit(button.innerHTML);
    updateDisplay();
  })
})

// Προσθέστε τους eventListeners για τα κουμπιά με τα σύμβολα των πράξεων
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerHTML);
    updateDisplay();
  })
})

// Προσθέστε τους eventListeners για κάθε ένα από τα κουμπιά =, AC, DEL 
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

dataPlusMinus.addEventListener('click', () => {
  currentOperand = currentOperand * -1;
  updateDisplay();
})



// Προσθέστε τους eventListeners για τα κουμπιά με τα αριθμητικά ψηφία

// Προσθέστε τους eventListeners για τα κουμπιά με τα σύμβολα των πράξεων

// Προσθέστε τους eventListeners για κάθε ένα από τα κουμπιά =, AC, DEL

addEventListener('keydown',async (e) => {  
  switch (e.key) {
    case '+':
    case '-':
    case '*':
    case '/':
      chooseOperation(e.key === "/" ? "÷" : e.key);
      updateDisplay();
      setDisplayZero()
      await resolveButton(operationButtons, e.key)
      break;
    case 'Enter':
      compute();
      const hasData = updateDisplay();
      setDisplayZero(true, hasData)

      hoverEffect(equalsButton);
      break;
    case 'Backspace':
      currentOperand = currentOperand.toString().slice(0, -1);
      updateDisplay();
      if (currentOperand === '') setDisplayZero()
      hoverEffect(deleteButton);
      break;
    case 'Escape':
      clear();
      updateDisplay();
      setDisplayZero()
      hoverEffect(allClearButton);
      break;
    case '.':
      appendDigit(e.key);
      updateDisplay();
      await resolveButton(numberButtons, e.key)
      break;
    case 'Shift':
      currentOperand = currentOperand * -1;
      updateDisplay();
      hoverEffect(dataPlusMinus);
      break;
    default:
      if (e.key >= 0 && e.key <= 9) {
        appendDigit(e.key);
        updateDisplay();
      }
      await resolveButton(numberButtons, e.key)
      break;

  }
})
