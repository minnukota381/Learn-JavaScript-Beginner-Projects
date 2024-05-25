function UpperCase(){
    var TextInput=document.getElementById("text").value;
    var UpperCaseText=TextInput.toUpperCase();
    document.getElementById("output").innerHTML=UpperCaseText;
  }
  function LowerCase(){
    var TextInput=document.getElementById("text").value;
    var LowerCaseText=TextInput.toLowerCase();
    document.getElementById("output").innerHTML=LowerCaseText;
  }
</script