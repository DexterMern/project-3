function first_number() {
  var num1 = +document.getElementById("inp1").value;
  if (num1 == 1) {
    displayValue = "";
    document.getElementById("inp1").value = displayValue;
    alert("enter else 1");
  } else {
    if (num1 > 1) {
      for (i = 2; i < num1 + 1; i++) {
        if (num1 == 2) {
          alert("Prime");
        } else {
          if (num1 % i == 0) {
            alert("Not A Prime");
            break;
          } else {
            alert("Prime");
            break;
          }
        }
      }
    }
  }
}
