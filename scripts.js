const convertButton = document.querySelector(".convert-button")
const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")
function convertValues () {
    const inputValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const bitcoinToday = 8.2
    
    
    if(currencySelect2.value == "dolar"){
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }
    
    if(currencySelect2.value == "euro"){
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }
    
    if(currencySelect2.value == "real"){
        currencyValueToConvert.innerHTML =  new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
    if(currencySelect2.value == "libra"){
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBT"
        }).format(inputValue / libraToday)
    }
    if(currencySelect2.value == "bitcoin"){
        currencyValueConverted.innerHTML =  new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)
    }
}

function changeCurrency () {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const inputValue = document.querySelector(".input-currency").value
    if(currencySelect2.value == "dolar"){
        currencyValueToConvert.innerHTML = inputValue
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "Assets/estados-unidos (1).png"
    }
    if(currencySelect2.value == "euro"){
        currencyValueToConvert.innerHTML = inputValue
        currencyName.innerHTML = "Euro"
        currencyImage.src = "Assets/euro.png"
    }
    if(currencySelect2.value == "real"){
        currencyValueToConvert.innerHTML = inputValue
        currencyName.innerHTML = "Real"
        currencyImage.src = "Assets/brasil.png"
    }
    if(currencySelect2.value == "libra"){
        currencyValueToConvert.innerHTML = inputValue
        currencyName.innerHTML = "Libra"
        currencyImage.src = "Assets/libra.png"
    }
    if(currencySelect2.value == "bitcoin"){
        currencyValueToConvert.innerHTML = inputValue
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "Assets/bitcoin.png"
    }

    convertValues()
}

currencySelect2.addEventListener("change", changeCurrency)
convertButton.addEventListener("click",convertValues)








    