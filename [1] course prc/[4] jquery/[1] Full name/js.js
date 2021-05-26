
//Structor
         // $(selector).action()
        // $ = jqueryr object
       // Selector = jeita dile element k dorvo
      // . = jqueryr object
     // Action() = jquery method
    //btn e click korle aktta function call hove
   //first name ta niya variable e rakve
  //last name ta niya variable e rakve
 //FullName  ta niya variable e rakve
//FullName  er value set kore dilam firstname+lastname


// $('#btn').click(function () {
//
//    var firstName = $('#firstName').val();
//    var lastName = $('#lastName').val();
//    var fullName = firstName+' '+lastName;
//    $('#fullName').val(fullName);
//
//
// });


// ======================================================================

$('#firstNumber').keyup(function () {

  var firstNumber = $('#firstNumber').val();
   $('.one').text(firstNumber);
});
$('#lastNumber').keyup(function () {

   var lastNumber = $('#lastNumber').val();
   $(".two").text(lastNumber);
});
$("#btn").click(function () {

   var firstNumber = Number($('.one').text());

   var lastNumber = Number($('.two').text());


   $('.three').text(firstNumber+lastNumber);


});