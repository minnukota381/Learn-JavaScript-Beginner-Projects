function add() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let addition = parseFloat(firstNumber) + parseFloat(secondNumber);
    document.getElementById("result").innerHTML = addition;
}

function sub() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let subtraction = parseFloat(firstNumber) - parseFloat(secondNumber);
    document.getElementById("result").innerHTML = subtraction;
}

function mul() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let multiplication = parseFloat(firstNumber) * parseFloat(secondNumber);
    document.getElementById("result").innerHTML = multiplication;
}

function div() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    if (parseFloat(secondNumber) === 0) {
        document.getElementById("result").innerHTML = "Error: Division by zero";
    } else {
        let division = parseFloat(firstNumber) / parseFloat(secondNumber);
        document.getElementById("result").innerHTML = division;
    }
}

function mod() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let modulus = parseFloat(firstNumber) % parseFloat(secondNumber);
    document.getElementById("result").innerHTML = modulus;
}

function exp() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let exponentiation = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
    document.getElementById("result").innerHTML = exponentiation;
}
