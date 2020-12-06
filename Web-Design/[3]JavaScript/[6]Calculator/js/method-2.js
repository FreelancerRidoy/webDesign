     //aktta function liklam myCalculator
    //altta peramiter nilam operator [jar modde different value asve function calling tteke]
   //user input niya variabl er modde raklam
  //than switch er modde variuable pass korci operator
 //jei btn e click hove sei valu ta asve operator er modde
//operator er value jei case er sate mile jave sei case ta excute hove


function myCalculatior(oerator) {

    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
   switch (oerator) {

       case '+':
           var result = firstNumber+lastNumber;
           document.getElementById('result').value = result;
           break;
       case '-':
           var result = firstNumber-lastNumber;

           break;
       case '*':
           var result = firstNumber*lastNumber;

           break;
       case '/':
           var result = firstNumber/lastNumber;

           break;
       case '%':
           var result = firstNumber%lastNumber;

           break;

   }
   return result;

}

     //id diya btn ta dore aktta variable e raklam
    //btn ta click hole aktta function ta excute hove
   //function ta excute hole aktta function call hove
  //aktta operator pataccci function call er maddome
 //variable diya function er result get korttesi
// than result input fild e print korttesi value te

var plus = document.getElementById('plus');
plus.onclick = function () {
var result = myCalculatior('+');
    document.getElementById('result').value = result;
}
var minus = document.getElementById('minus');
minus.onclick = function () {
    var result = myCalculatior('-');
    document.getElementById('result').value = result;
}
var multiplication = document.getElementById('multiplication');
multiplication.onclick = function () {
    var result = myCalculatior('*');
    document.getElementById('result').value = result;
}
var divition = document.getElementById('divition');
divition.onclick = function () {
    var result = myCalculatior('/');
    document.getElementById('result').value = result;
}
var remainder = document.getElementById('remainder');
remainder.onclick = function () {
    var result = myCalculatior('%');
    document.getElementById('result').value = result;
}