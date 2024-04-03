var number1;
function factorial() {
  number1 = Math.floor(Number(document.getElementById("text1").value));
  var number2 = Number(1);
  for (var counter = 1; counter <= number1; counter++) {
    number2 *= counter;
  }
  document.getElementById("spn1").innerHTML = "= " + number2;
}
