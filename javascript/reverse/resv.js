function reverse() {
  var num1 = "";
  var num1 = document.getElementById("inp1").value;
  let num2 = "";
  for (let i = num1.length -1; i >= 0; i--) {
    num2 += num1[i];
  }

  Alert('reverse',num2,'question')
  
}

