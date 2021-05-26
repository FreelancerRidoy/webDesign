     //plus btn ta k id diya dore aktta variable er modde raklam
    //btn ta click korle aktta function excute hove
   //user input niya aktta variable er modde raklam
  //Number function diya scring k number e convert korlam
 //Number aktta function,aitar karone scring convert hoye jave number e
//java script er concreate sign +, string takle concrate kore && number takle plus kore
var plusBtn = document.getElementById('plus');
plusBtn.onclick = function () {

    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber + lastNumber;
    document.getElementById('result').value = result;

}
      //minus btn ta k id diya dore aktta variable er modde raklam
     //btn ta click korle aktta function excute hove
    //user input niya aktta variable er modde raklam
   //Number function diya scring k number e convert korlam
  //Number aktta function,aitar karone scring convert hoye jave number e



var minusBtn = document.getElementById('minus');
minusBtn.onclick = function () {

    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber - lastNumber;
    document.getElementById('result').value = result;
}
      //multiplication btn ta k id diya dore aktta variable er modde raklam
     //btn ta click korle aktta function excute hove
    //user input niya aktta variable er modde raklam
   //Number function diya scring k number e convert korlam
  //Number aktta function,aitar karone scring convert hoye jave number e
 //java script er concreate sign +, string takle concrate kore && number takle plus kore


var multiplicationBtn = document.getElementById('multiplication');
     multiplicationBtn.onclick = function () {

    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber * lastNumber;
    document.getElementById('result').value = result;
}
      //plus btn ta k id diya dore aktta variable er modde raklam
     //btn ta click korle aktta function excute hove
    //user input niya aktta variable er modde raklam
   //Number function diya scring k number e convert korlam
  //Number aktta function,aitar karone scring convert hoye jave number e



var divitionBtn = document.getElementById('divition');
     divitionBtn.onclick = function () {

    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber / lastNumber;
    document.getElementById('result').value = result;
}

      //remainder btn ta k id diya dore aktta variable er modde raklam
     //btn ta click korle aktta function excute hove
    //user input niya aktta variable er modde raklam
   //Number function diya scring k number e convert korlam
  //Number aktta function,aitar karone scring convert hoye jave number e



var remainderBtn = document.getElementById('remainder');
     remainderBtn.onclick = function () {

    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = firstNumber % lastNumber;
    document.getElementById('result').value = result;
}