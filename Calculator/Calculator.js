let expression = '';

function inputNum(num) {
  let display = document.getElementById("number");
  display.value += num;
}

function clearscr() {
  document.getElementById("number").value = "";
  expression = '';
}

function operator1(op) {
  let display = document.getElementById("number");
  expression += display.value + op;
  display.value = '';
}

function calc() {
  let display = document.getElementById("number");
  expression += display.value;
  let result = eval(expression);
  display.value = result;
  expression = '';
}

function inputDecimal() {
  let display = document.getElementById("number");
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function percentCalc() {
  let display = document.getElementById("number");
  let value = parseFloat(display.value);
  let result = value / 100;
  display.value = result;
}

function sqrt() {
  let display = document.getElementById("number");
  let value = parseFloat(display.value);
  let result = Math.sqrt(value);
  display.value = result;
}

function changeSign() {
  let display = document.getElementById("number");
  let value = parseFloat(display.value);
  let result = -value;
  display.value = result;
}

function backspace() {
  let display = document.getElementById("number");
  let value = display.value;
  display.value = value.slice(0, -1);
}

let memory = 0;

function memoryAdd() {
  let display = document.getElementById("number");
  let value = parseFloat(display.value);
  memory += value;
}

function memorySubtract() {
  let display = document.getElementById("number");
  let value = parseFloat(display.value);
  memory -= value;
}

function memoryRecall() {
  let display = document.getElementById("number");
  display.value = memory;
}

function memoryClear() {
  memory = 0;
}