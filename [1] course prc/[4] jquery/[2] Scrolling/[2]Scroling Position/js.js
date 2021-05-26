
//scrollTop() aktta attribute jeita diya scroll kore ami koto tuku namttesi/utttesi seita mejarment kora jai
var curentPosition = 0;
$("#scrollDiv").scroll(function () {

 var scrollingPosition = $("#scrollDiv").scrollTop();

 if(scrollingPosition > curentPosition){
   $("#display").text('scrolling Down');
 }else {
   $("#display").text('scrolling Up');
 }
 curentPosition = scrollingPosition;


});