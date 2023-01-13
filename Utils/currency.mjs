import { round } from "./utils.mjs";

export async function currencyConverter(amount, from, to, out) {
  //console.log(`Convert ${from} ${amount} into ${to} and put in ${out}`);

  const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
  /*
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var response = request.response;
        console.log(response);
    }
*/
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      let result = round(amount * data.result, 2);
      out.innerText = `${from} ${amount} = ${to} ${result}`;
    });
}

export async function getAllCurrencies(fromList, toList) {
  var requestURL = "https://api.exchangerate.host/symbols";
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.symbols);
      let currencyList = "";
      for (let symbol in data.symbols) {
        // Using Datalist for options: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
        // Template: <option value="NOK">Norwegian Krone (NOK)</option>
        //console.log (data.symbols[symbol].description, data.symbols[symbol].code);
        let code = data.symbols[symbol].code; // Is this always the same as symbol?
        let desc = data.symbols[symbol].description;
        currencyList += `<option value="${code}">${desc} (${code})</option>\n`;
        //console.log(currencyList);
      }
      if (currencyList) {
        fromList.innerHTML = currencyList;
        toList.innerHTML = currencyList;
      }
    });
}
