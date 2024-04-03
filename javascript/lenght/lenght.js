function length() {
  var num1 = document.getElementById("spn1").value;
  var counter = 0;
  for (i in num1) {
    counter += 1;
  }
  alert("length of the type: " + counter);
}
function sum() {
  var num1 = document.getElementById("spn1").value;
  var ans = 0;
  var counter2 = 0;
  while (counter2 < num1.length) {
    ans += +num1[counter2];
    counter2 += 1;
  }
  alert('sum: ' + ans);
}
