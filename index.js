import fibonacci from "./Utils/fibonacci.mjs";

document.getElementById("submit-id").addEventListener("click", () => {
  let n = document.getElementById("fib").value;
  let fn = fibonacci(n);
  document.getElementById("fib-result").innerHTML = `F<sub>${n} = ${fn}`;
});

import { celciusToFarenheit, farenheitToCelcius } from "./Utils/temp.mjs";

document.getElementById("sumbit-temp").addEventListener("click", () => {
  const out = document.getElementById("temp-result");
  const temp = document.getElementById("temp").value;
  const radioButtons = document.querySelectorAll('input[name="temp-type"]');
  let fromType;
  for (let btn of radioButtons) {
    if (btn.checked) {
      fromType = btn.id;
      break;
    }
  }
  if (fromType === "celcius") {
    out.innerHTML = `${temp}°C = ${celciusToFarenheit(temp)}°F`;
  } else if (fromType === "farenheit") {
    out.innerHTML = `${temp}°F = ${farenheitToCelcius(temp)}°C`;
  } else {
    out.innerText = "Something wrong";
  }
});

import { currencyConverter, getAllCurrencies } from "./Utils/currency.mjs";
document.getElementById("submit-currency").addEventListener("click", () => {
  const out = document.getElementById("currency-result");
  let amount = document.getElementById("amount").value;
  const from = document.getElementById("convertFrom").value;
  const to = document.getElementById("convertTo").value;
  if (amount === "") amount = 100;
  currencyConverter(amount, from, to, out);
});

const fromCurrencyList = document.getElementById("convertFromSymbols");
const toCurrencyList = document.getElementById("convertToSymbols");

getAllCurrencies(fromCurrencyList, toCurrencyList);

import { getAllAmiibos, filterAmiibos } from "./Utils/amiibo.mjs";
const outputElement = document.getElementById("amiibos");
getAllAmiibos(outputElement);

let searchBox = document.getElementById("search-amiibos");
searchBox.addEventListener("input", updateSearch);

let nameCheckBox = document.getElementById("amiibo-name");
nameCheckBox.addEventListener("input", updateSearch);

let gameSeriesCheckBox = document.getElementById("amiibo-game");
gameSeriesCheckBox.addEventListener("input", updateSearch);

let amiiboSeriesCheckBox = document.getElementById("amiibo-series");
amiiboSeriesCheckBox.addEventListener("input", updateSearch);

function updateSearch() {
  let searchString = searchBox.value;
  let nameOpt = nameCheckBox.checked;
  let gameSeriesOpt = gameSeriesCheckBox.checked;
  let amiiboSeriesOpt = amiiboSeriesCheckBox.checked;

  let options = { nameOpt, gameSeriesOpt, amiiboSeriesOpt };

  console.log(`Search for ${searchString}`, options);

  filterAmiibos(searchString, outputElement, options);
}

document.getElementById("openAll").addEventListener("click", () => {
  toggleDetails("open");
});

document.getElementById("closeAll").addEventListener("click", () => {
  toggleDetails("close");
});

function toggleDetails(mode) {
  let detailsElements = document.querySelectorAll("details");
  for (let element of detailsElements) {
    if (mode === "open") element.setAttribute("open", true);
    if (mode === "close") element.removeAttribute("open");
  }
}
