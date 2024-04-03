function bet() {
  var first = document.getElementById("inp1").value;
  var end = document.getElementById("inp2").value;
  var list = [];
  for (i = first; i < end; i++) {
    list.push(i);
  }
  document.getElementById("inp3").value = list;
}
