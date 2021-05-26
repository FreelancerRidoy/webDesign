function btnClick(btnValue) {
switch (btnValue) {
    case 'btnOne':
        var text = 'i am Ridoy';
        break;
    case 'btnTwo':
        var text = ' who are you';
        break;
    case 'btnThree':
        var text = 'i know everything';
        break;
    default:
        var text = 'i know everything';
        break;
}
document.getElementById('textBox').innerHTML = text;
}


var btnName =document.getElementById('btnOne');
btnName.onclick = function () {
btnClick('btnOne');
}
var btnName =document.getElementById('btnTwo');
btnName.onclick = function () {
    btnClick('btnTwo');
}
var btnName =document.getElementById('btnThree');
btnName.onclick = function () {
        btnClick('btnThree');

}
