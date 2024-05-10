let displayValue = '0';
let memory = 0;
let lastOperation = '';
let lastNumber = '';
let isNewCalculation = true;

const display = document.getElementById('display');

function updateDisplay() {
    display.value = displayValue;
}

function appendNumber(num) {
    if (isNewCalculation || displayValue === '0' || displayValue === 'Error') {
        displayValue = num.toString();
        isNewCalculation = false;
    } else {
        displayValue += num;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function appendOperator(op) {
    if (lastOperation && lastNumber && !isNewCalculation) {
        calculate();
    }
    lastOperation = op;
    lastNumber = displayValue;
    isNewCalculation = true;
}

function clearDisplay() {
    displayValue = '0';
    lastOperation = '';
    lastNumber = '';
    isNewCalculation = true;
    updateDisplay();
}

function backspace() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function changeSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}

function calculate() {
    if (lastOperation && lastNumber) {
        let result;
        const num1 = parseFloat(lastNumber);
        const num2 = parseFloat(displayValue);
        
        switch (lastOperation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error';
                }
                break;
            case '%':
                result = num1 % num2;
                break;
        }
        
        displayValue = result.toString();
        lastOperation = '';
        lastNumber = '';
        isNewCalculation = true;
        updateDisplay();
    }
}

function memoryAdd() {
    memory += parseFloat(displayValue);
    isNewCalculation = true;
}

function memorySubtract() {
    memory -= parseFloat(displayValue);
    isNewCalculation = true;
}

function memoryRecall() {
    displayValue = memory.toString();
    updateDisplay();
    isNewCalculation = true;
}

function memoryClear() {
    memory = 0;
    isNewCalculation = true;
}

updateDisplay();

// Event Listeners
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        
        if (!isNaN(buttonText) || buttonText === '.') {
            if (buttonText === '.') {
                appendDecimal();
            } else {
                appendNumber(buttonText);
            }
        } else {
            switch (buttonText) {
                case 'C':
                    clearDisplay();
                    break;
                case '⌫':
                    backspace();
                    break;
                case '+/-':
                    changeSign();
                    break;
                case '=':
                    calculate();
                    break;
                case 'MC':
                    memoryClear();
                    break;
                case 'MR':
                    memoryRecall();
                    break;
                case 'M+':
                    memoryAdd();
                    break;
                case 'M-':
                    memorySubtract();
                    break;
                default:
                    appendOperator(buttonText);
            }
        }
    });
});