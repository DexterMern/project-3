var cap = Math.floor(Math.random() * (999999 - 100000)) + 100000;
document.getElementById("capcha-1").innerHTML = cap;
function test(){
   var x1 =  document.getElementById('x1').value;
   if (x1 == cap){
    alert('Excellent ,you are not a robot')
   }else{
    alert('sorry you are a robot')
   }
}