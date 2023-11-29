let inputTemp = document.querySelector("#inputTemp");
let fromTemp = document.querySelector("#fromTemp");
let toTemp = document.querySelector("#toTemp");
let result = document.querySelector("#result");
let btn = document.querySelector(".btn");

window.addEventListener("load", () => {
  inputTemp.value = "";
  result.value = "";
});

inputTemp.addEventListener("input", (e) => {
  e.preventDefault();
  calculate();
});

toTemp.addEventListener("change", (e) => {
  e.preventDefault();
  calculate();
});

fromTemp.addEventListener("change", (e) => {
  e.preventDefault();
  calculate();
});

const reset = () => {
  inputTemp.value = "";
  result.value = "";
  fromTemp.value = "celsius";
  toTemp.value = "farenheit";
};

const calculate = () => {
  if (fromTemp.value === "celsius" && toTemp.value === "farenheit") {
    result.value = (inputTemp.value * (9 / 5) + 32).toFixed(2);
  } else if (fromTemp.value === "farenheit" && toTemp.value === "celsius") {
    result.value = ((5 / 9) * (inputTemp.value - 32)).toFixed(2);
  } else if (fromTemp.value === "celsius" && toTemp.value === "kelvin") {
    result.value = (+inputTemp.value + 273.15).toFixed(2);
  } else if (fromTemp.value === "farenheit" && toTemp.value === "kelvin") {
    result.value = ((inputTemp.value - 32) / 1.79 + 273.15).toFixed(2);
  } else if (fromTemp.value === "kelvin" && toTemp.value === "celsius") {
    result.value = (inputTemp.value - 273.15).toFixed(2);
  } else if (fromTemp.value === "kelvin" && toTemp.value === "farenheit") {
    result.value = ((9 / 5) * (inputTemp.value - 273.15) + 32).toFixed(2);
  } else {
    result.value = inputTemp.value;
  }
};
