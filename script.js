// Tip Calculator UNIT 2 MODULE PROJECT

// Webpage Theme Styles
//LightMode
document.getElementById("webStyle1").addEventListener("click", lightMode);
function lightMode() {
  document.getElementById("html").style.background = "white";
  document.getElementById("body").style.background = "lightgray";
  document.getElementById("div").style.background = "gray";
  document.getElementById("div2").style.background = "gray";
  document.getElementById("calculate").style.background = "darkgray";
  document.getElementById("webStyle1").style.background = "darkgray";
  document.getElementById("webStyle2").style.background = "darkgray";
  document.getElementById("webStyle3").style.background = "darkgray";
  document.getElementById("html").style.color = "black";
  document.getElementById("div").style.color = "black";
  document.getElementById("div2").style.color = "black";
  document.getElementById("webStyle1").style.color = "black";
  document.getElementById("webStyle2").style.color = "black";
  document.getElementById("webStyle3").style.color = "black";
  document.getElementById("calculate").style.color = "black";
}

//DarkMode
document.getElementById("webStyle3").addEventListener("click", darkMode);
function darkMode() {
  document.getElementById("html").style.background = "#000000";
  document.getElementById("body").style.background = "#141414";
  document.getElementById("div").style.background = "#222222";
  document.getElementById("div2").style.background = "#222222";
  document.getElementById("calculate").style.background = "#3b3b3b";
  document.getElementById("webStyle1").style.background = "#3b3b3b";
  document.getElementById("webStyle2").style.background = "#3b3b3b";
  document.getElementById("webStyle3").style.background = "#3b3b3b";
  document.getElementById("html").style.color = "white";
  document.getElementById("div").style.color = "white";
  document.getElementById("div2").style.color = "white";
  document.getElementById("webStyle1").style.color = "white";
  document.getElementById("webStyle2").style.color = "white";
  document.getElementById("webStyle3").style.color = "white";
  document.getElementById("calculate").style.color = "white";
}

//NormalMode
document.getElementById("webStyle2").addEventListener("click", normalMode);
function normalMode() {
  document.getElementById("html").style.background = "#18230f";
  document.getElementById("body").style.background = "#27391c";
  document.getElementById("div").style.background = "#255f38";
  document.getElementById("div2").style.background = "#255f38";
  document.getElementById("calculate").style.background = "#1f7d53";
  document.getElementById("webStyle1").style.background = "#1f7d53";
  document.getElementById("webStyle2").style.background = "#1f7d53";
  document.getElementById("webStyle3").style.background = "#1f7d53";
  document.getElementById("html").style.color = "black";
  document.getElementById("div").style.color = "black";
  document.getElementById("div2").style.color = "black";
  document.getElementById("webStyle1").style.color = "black";
  document.getElementById("webStyle2").style.color = "black";
  document.getElementById("webStyle3").style.color = "black";
  document.getElementById("calculate").style.color = "lightgray";
}

//Tip Calculator
document.getElementById("calculate").addEventListener("click", tipCalc);

function tipCalc() {
  var bill = +document.getElementById("bill").value;
  var tipPercent = +document.getElementById("tip").value;
  var numOfPeople = +document.getElementById("people").value;
  var calcu1 = tipPercent / 100;
  var calcu2 = bill * calcu1;
  var calcu3 = bill + calcu2;
  var calcu4 = calcu2 / numOfPeople;
  var calcu5 = bill / numOfPeople + calcu4;
  document.getElementById("outputTip").innerHTML = "$" + calcu2;
  document.getElementById("outputTipPerPerson").innerHTML = "$" + calcu5;
  document.getElementById("outputTotalBill").innerHTML = "$" + calcu3;
}
