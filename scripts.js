// cotação de moedas
const USD = 5.23
const EUR = 6.19
const GBP = 7.23

// obtendo os elementos
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//manipulando o inpur amount para receber somentes numeros
amount.addEventListener("input", ()=> {
  const HasCaractersRegex = /\D+/g
  amount.value = amount.value.replace(HasCaractersRegex, '')
})

// capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value){
    case 'USD':
      convertCurrency(amount.value, USD, '$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break
  }
}

//função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // exibindo a cotação da moeda
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calculando o total
    let total = amount * price
    result.textContent = `${formatCurrencyBRL(total)} Reais`

    // aplicando classe para exibir o footer
    footer.classList.add("show-result")
    
  } catch (error) {
    console.log(Error)
    footer.classList.remove("show-result")
    alert('Ocorreu um erro ao converter a moeda')
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}