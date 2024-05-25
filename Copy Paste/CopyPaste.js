let a=document.getElementById("copyButton")
a.addEventListener("click", function() {
  var textArea = document.getElementById("textArea");
  textArea.select();
  document.execCommand("copy");
  if(a.textContent==="Copy Text"){
    a.innerText="Copied"
    setTimeout(()=>{
      if(a.textContent==="Copied"){
        a.innerText="Copy Text"
      }
    },3000)
  }
  
});

document.getElementById("pasteButton").addEventListener("click", function() {
  var textArea = document.getElementById("textArea");
  textArea.focus();
  navigator.clipboard.readText().then(function(clipboardText) {
    textArea.value += clipboardText;
    
  });
});