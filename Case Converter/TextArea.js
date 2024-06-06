function UpperCase(){
    let TextInput=document.getElementById("text").value;
    let UpperCaseText=TextInput.toUpperCase();
    document.getElementById("output").innerHTML=UpperCaseText;
  }
  function LowerCase(){
    let TextInput=document.getElementById("text").value;
    let LowerCaseText=TextInput.toLowerCase();
    document.getElementById("output").innerHTML=LowerCaseText;
  }