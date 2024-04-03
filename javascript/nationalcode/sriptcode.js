function clearDisplay() {
  var clearnumber = "";
  document.getElementById("number").value = clearnumber;
}

function country() {
  var national = document.getElementById("number").value;
  var countryside = national.slice(0, 3);
  if (national.length == 10) {
    if (countryside == "127" || countryside == "128" || countryside == "129") {
      var name = "اصفهان";
      document.getElementById("number").value = name;
    } else if (
      countryside == "001" ||
      countryside == "002" ||
      countryside == "003" ||
      countryside == "004" ||
      countryside == "005" ||
      countryside == "006"
    ) {
      var name = "تهران";
      document.getElementById("number").value = name;
    } else if (countryside == "620") {
      var name = "باغ بهادران";
      document.getElementById("number").value = name;
    } else if (countryside == "621") {
      var name = "بوِیین و میاندشت";
      document.getElementById("number").value = name;
    } else if (countryside == "549") {
      var name = "تیران و کروان";
      document.getElementById("number").value = name;
    } else if (countryside == "564") {
      var name = "جرقویه";
      document.getElementById("number").value = name;
    } else if (countryside == "119") {
      var name = "شهر رضا";
      document.getElementById("number").value = name;
    } else if (countryside == "113") {
      var name = "خمینی شهر";
      document.getElementById("number").value = name;
    }
  } else {
    document.getElementById("number").value = "لطفا کد ملی را صحیح وارد نمایید";
  }
}
function national_code() {
  var national = document.getElementById("number").value;
  var num1 = national.slice(0, 1);
  var num2 = national.slice(1, 2);
  var num3 = national.slice(2, 3);
  var num4 = national.slice(3, 4);
  var num5 = national.slice(4, 5);
  var num6 = national.slice(5, 6);
  var num7 = national.slice(6, 7);
  var num8 = national.slice(7, 8);
  var num9 = national.slice(8, 9);
  var num10 = national.slice(9, 10);
  if (national.length == 10) {
    var num11 = num1 * 10;
    var num22 = num2 * 9;
    var num33 = num3 * 8;
    var num44 = num4 * 7;
    var num55 = num5 * 6;
    var num66 = num6 * 5;
    var num77 = num7 * 4;
    var num88 = num8 * 3;
    var num99 = num9 * 2;
    var sum = num11 + num22 + num33 + num44 + num55 + num66 + num77 + num88 + num99;
    ans = sum % 11;
    if (ans < 2 && num10 == ans) {
      document.getElementById("number").value = "کد ملی صحیح است";
    } else if (ans >= 2 && 11 - ans == num10) {
      document.getElementById("number").value = "کد ملی صحیح است";
    } else {
      document.getElementById("number").value = "کد ملی غلط است";
    }
  } else {
    document.getElementById("number").value = "لطفا کد ملی را صحیح وارد نمایید";
  }
}
function send() {
  if (national_code()) {
    alert("کد ملی شما ارسال شد");
  } else {
    alert("دوباره وارد کنید");
  }
}
alert(num10)