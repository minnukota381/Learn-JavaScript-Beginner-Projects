function convertCurrency() {
    const amountInput = document.getElementById("amountInput").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)

      .then(response => response.json())
      .then(data => {
          const exchangerate=data.rates[toCurrency];
          const result=amountInput*exchangerate;
          document.getElementById("result").value=result.toFixed(2);
      })
      .catch(err =>{
          console.log(error);
      })
  }