        //resultBtn Button ta k id diya dore btnClick variable er modde raklam
       //btn ta click korle aktta function excute hove
      //user input niya aktta variable er modde raklam
     //aktta variavle declar kore,value hisave empty string diya dlam,jate result print korar somoi undefind mesage na ase
    //than for loop use korlam
   //loop ta start hove var i tteke, and i er modde first number ta niya raklam,
  //conkdition match korttesi,i<=LastNumber true hole loop excute hove
 //prottek bar condition tru hole ,value 1 ,1 kore barve and ager result tar sate porer ta concret kore pasa pasi bosiya dive
//innerhtml er modde result print kora hocce



 var btnClick = document.getElementById('resultBtn');
btnClick.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value;
    var lastNumber = document.getElementById('lastNumber').value;

    showNumbers= ' ';
    for (var i = firstNumber; i<=lastNumber; i++){
        var showNumbers =showNumbers+i+', ';
    }
    document.getElementById('resultShow').innerHTML = showNumbers;

}