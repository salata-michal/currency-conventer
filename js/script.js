let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6886;
let rateGBP = 5.3926;
let rateUSD = 4.4153;
let rateCHF = 4.7453;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "USD":
            result = amount / rateUSD;

        case "CHF":
            result = amount / rateCHF;
    }

    resultElement.innerText = `${amount.toFixed(2)} PLN =${result.toFixed(2)} ${currency}`;
});