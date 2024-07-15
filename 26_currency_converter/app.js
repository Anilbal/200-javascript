const apiKey = "b6428a6019d796abb060e231";
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const currencies = [
    'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 
    'SGD', 'NZD', 'HKD', 'SEK', 'KRW', 'ZAR', 'BRL', 'RUB', 'TRY', 
    'MXN', 'IDR'
];
    
function currency() {
    let fromCurrencySelect = document.getElementById('from-cur');
    let toCurrencySelect = document.getElementById('to-cur');
    
    // Add currency options to select elements
    currencies.forEach(currency => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        fromCurrencySelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        toCurrencySelect.appendChild(option2);
    });
    
    fromCurrencySelect.value = "USD";
    toCurrencySelect.value = "INR";

    let currencyConverter = () => {
        let amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (data.result === "success") {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate

                
                document.querySelector(".result").innerHTML = `${amount} ${fromCurrency} =${convertedAmount.toFixed(2)} ${toCurrency}`
            } else {
                console.error("Failed to fetch exchange rates:", data.error);
            }
        })
        .catch(error => console.error("Error fetching exchange rates:", error));
    };

    document.getElementById("convert").addEventListener("click", currencyConverter);
}

currency();
