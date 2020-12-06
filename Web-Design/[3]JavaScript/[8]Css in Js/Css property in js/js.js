
    //brnRed ta dore aktta variable btnRed e raklam
   //btnRed click korle aktta function call hove
  //jave niya kaj korvo divOne take id diya dore aktta variable divOne e raklam
 //html element k js er maddome css property dite caile >
// {jei element e divo tar name} . {style} . {Css attribute} = 'Value';

var btnRed = document.getElementById('btnRed');
btnRed.onclick = function () {
 var divOne = document.getElementById('divOne');
 divOne.style.backgroundColor = "red";




}
var btnBlack = document.getElementById('btnBlack');
    btnBlack.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.style.backgroundColor = 'black';
    divOne.style.border = '2px solid red';



}
var btnBlue = document.getElementById('btnBlue');
    btnBlue.onclick = function () {
    var divOne = document.getElementById('divOne');

    divOne.style.borderRadius



}
var btnGreen = document.getElementById('btnGreen');
    btnGreen.onclick = function () {
    var divOne = document.getElementById('divOne');

}
