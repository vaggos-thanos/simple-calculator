// Συμπληρώστε τις παρακάτω εντολές επιλογής
const numberButtons = document.
const operationButtons = document.
const equalsButton = document.
const deleteButton = document.
const allClearButton = document.
const previousOperandTextElement = document.
const currentOperandTextElement = document.
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
  currentOperandTextElement.innerHTML = currentOperand;
  previousOperandTextElement.innerHTML = previousOperand + operation;
}

//Επισυνάπτει ένα ακόμη ψηφίο στο τέλος του currentOperant
// Προσοχή στην περίπτωση που το ψηφίο είναι .
function appendDigit(digit) {
  
  
  
  
  
  }



/*Όταν πατηθεί ένα πλήκτρο πράξης:
  - Αν και οι δύο αριθμοί είναι κενοί, δεν γίνεται τίποτα
  - Αν και οι δύο αριθμοί ΔΕΝ είναι κενοί γίνεται υπολογισμός καλώντας τη συνάρτηση compute()
  - Αποδίδεται η νέα τιμή στη μεταβλητή operation
  - Η τιμή του currentOperant περνάει πλέον στο previusOperant
  - "Αδειάζει" το περιεχόμενο του current operant
*/
function chooseOperation(operButton) {
  
  
  
}


/* Εκτελεί αριθμητική πράξη με τα previousOperand και currentOperant
   Η πράξη που θα γίνει καθορίζεται από την τιμή του operant
   Το αποτέλεσμα της πράξης αποθηκεύεται στο current operant
   Οι μεταβλητές previousOperand και το operation αρχικοποιούνται σε κενή τιμή
*/
function compute() {
  
  }


// ΣΕ ΚΑΘΕ eventListener ΜΗΝ ΞΕΧΝΑΤΕ ΌΤΙ ΠΡΈΠΕΙ ΝΑ ΚΑΛΕΊΤΕ ΚΑΙ ΤΗΝ ΣΥΝΑΡΤΗΣΗ updateDisplay()
// Αξιοποιήστε τις συναρτήσεις που δημιουργησατε παραπάνω


// Προσθέστε τους eventListeners για τα κουμπιά με τα αριθμητικά ψηφία





// Προσθέστε τους eventListeners για τα κουμπιά με τα σύμβολα των πράξεων


// Προσθέστε τους eventListeners για κάθε ένα από τα κουμπιά =, AC, DEL 
// Για το κουμπί DEL αναζητήστε την κατάλληλη μέθοδο για να σβήσετε το τελευταίο ψηφίο του currentOperant

