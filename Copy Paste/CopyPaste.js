const copyButton = document.getElementById("copyButton");
const pasteButton = document.getElementById("pasteButton");
const textArea = document.getElementById("textArea");

copyButton.addEventListener("click", function() {
  textArea.select();
  document.execCommand("copy");

  if (copyButton.textContent === "Copy Text") {
    copyButton.innerText = "Copied";
    setTimeout(() => {
      if (copyButton.textContent === "Copied") {
        copyButton.innerText = "Copy Text";
      }
    }, 3000);
  }
});

pasteButton.addEventListener("click", function() {
  textArea.focus();
  
  if (navigator.clipboard) {
    navigator.clipboard.readText()
      .then(clipboardText => {
        textArea.value += clipboardText;
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
      });
  } else {
    alert('Clipboard API not available');
  }
});
