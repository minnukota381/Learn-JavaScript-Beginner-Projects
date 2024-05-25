let expression = '';

function inputNum(b){
    let a=document.getElementById("number")
    a.value+=b;
}

function clearscr(){
    document.getElementById("number").value="";
}

function operator1(x){
    var expression=document.getElementById("number");
    expression.value+=x
}

function calc(){
    let result = eval(document.getElementById("number").value);
    document.getElementById("number").value = result;
}