//Elementleri Seçelim

const amountElement = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners(){
    amountElement.addEventListener("input",exchange);
}

function exchange(){
    const amount = Number(amountElement.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount,firstOptionValue,secondOptionValue)
    .then((result) => {
        resultInput.value = result.toFixed(3);
    })

    
}