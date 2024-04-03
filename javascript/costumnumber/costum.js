function que() {
  var number1 = Number(document.getElementById("num1").value);
  var number2 = Number(document.getElementById("num2").value);
  var number3 = Number(document.getElementById("num3").value);
  var number4 = Number(document.getElementById("num4").value);
  var sum = number1 + number2 + number3 + number4;
  var guse = Number(prompt('لطفا یک عدد دلخواه از 1 تا 10 وارد نمایید: '));
  var random = Math.floor(Math.random() * 10) + 1;
  var price = sum - ((sum/100)*10); 
  if (guse == random) {
    alert('شما تخفیف 10% مارا به کد 124 دریافت کردید و به جای پرداخت مبلغ:'+sum+'باید مبلغ:'+ price);

  } else {
    alert("random: " + random  + "__عدد حدسی شما درست نبود و مبلغ قابل پرداخت شما " + sum);
  }
}