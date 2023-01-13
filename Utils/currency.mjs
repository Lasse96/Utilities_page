import { round } from "./utils.mjs";
export async function currencyConverter(amount, from, to, out) {
  const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;

  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      let result = round(amount * data.result);
      out.innerText = `${from} ${amount} = ${to} ${result}`;
    });
}

export async function getAllCurrencies(fromList, toList) {
  var requestURL = "https://api.exchangerate.host/symbols";
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      let currencyList = "";
      for (let symbol in data.symbols) {
        let code = data.symbols[symbol].code;
        let desc = data.symbols[symbol].description;
        currencyList += `<option value"${code}">${desc}(${code})</option>\n`;
      }
      if (currencyList) {
        fromList.innerHTML = currencyList;
        toList.innerHTML = currencyList;
      }
    });
}
