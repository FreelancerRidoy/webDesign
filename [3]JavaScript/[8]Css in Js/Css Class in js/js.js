//brnRed ta dore aktta variable btnRed e raklam
//btnRed click korle aktta function call hove
//jave niya kaj korvo divOne take id diya dore aktta variable divOne e raklam
//html element k js er maddome css class dite caile >
// {jei element e divo tar name} . {className} = 'className';


var btnRed = document.getElementById('btnRed');
btnRed.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'js-divTwo';


}

var btnBlue = document.getElementById('btnBlue');
btnBlue.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.className = 'div';


}
