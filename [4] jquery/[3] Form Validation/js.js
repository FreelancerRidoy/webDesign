
// ======================================First Name Validation==================================================================================

function checkFirstName(){
    var firstName = $('#firstName').val();

    var  reg = /^[a-zA-Z ]{2,30}$/;  //regular ecrpetion (a-z),(A-Z) ,(min-2,max-12 char)

    if (reg.test(firstName)){ //reg.test (test er modde patailam firstName)|test method ta dekve
        // first name er value gula expretion er sate mil ace kinah?
        $("#firstNameError").text(' ');
        return true;
    }else {
        $("#firstNameError").text('invalid').css('color','red');
        return  false;
    }

}

 //first name 2 er caite boro / 10 er caite coto hole condition true
// # Regular Expretion = java script er aktta librabyr nam

$("#firstName").keyup(function () {
    checkFirstName();
});

// ======================================Last Name Validation==================================================================================
function checkLastName(){
    var lastName = $('#lastName').val();

    var  reg = /^[a-zA-Z ]{2,30}$/;  //regular ecrpetion (a-z),(A-Z) ,(min-2,max-12 char)

    if (reg.test(lastName)){ //reg.test (test er modde patailam firstName)|test method ta dekve
        // first name er value gula expretion er sate mil ace kinah?
        $("#lastNameError").text(' ');
        return true;
    }else {
        $("#lastNameError").text('invalid').css('color','red');
        return false;
    }

}

//first name 2 er caite boro / 10 er caite coto hole condition true
// # Regular Expretion = java script er aktta librabyr nam

$("#lastName").keyup(function () {
    checkLastName();
});
// ======================================Email Name Validation==================================================================================

function checkEmailAddress() {

    var emailAddress = $("#emailAddress").val();
    var reg =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
        if (reg.test(emailAddress)){
            $("#emailAddressError").text(' ');
            return true;
        }else{
            $("#emailAddressError").text('invalid').css('color','red');
            return false;
        }
}

$("#emailAddress").blur(function () {

    checkEmailAddress();
});
$("#emailAddress").keyup(function () {

    $("#emailAddressError").text(' ');
});

// ======================================Password Validation==================================================================================
function checkPassword(){
    var password = $('#password').val();

    var  reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    //regular ecrpetion (a-z),(A-Z) (aktta seecial cerecter) (min Char- 6)

    if (reg.test(password)){
        $("#passwordError").text(' ');
        return true;
    }else {
        $("#passwordError").text('invalid').css('color','red');
        return false;
    }

}

$("#password").blur(function () {

    checkPassword();
});

$("#password").keyup(function () {

    $("#passwordError").text(' ');
});
$("#password").click(function () {

    $("#passwordError").text('must 2 char 1 letter, @#$ eatch one').css('color','blue');

});
// ________________________Show Password______________________________________
// ___________________________Show Password______________________________________
$("#showHide").click(function () {
var attrValue = $("#password").attr('type');


if(attrValue == 'password'){
    $("#password").attr('type','text');
    $("#confriPassword").attr('type','text');
}else {
    $("#password").attr('type','password');
    $("#confriPassword").attr('type','password');
}
});


// ======================================Confirm Validation==================================================================================
function checkconfrimpassword(){
    var password = $("#password").val();
    var confrimPassword = $("#confriPassword").val();

    if(password == confrimPassword){
        $("#confrimPasswordError").text(' ');
        return true;
    }else {
        $("#confrimPasswordError").text('Password Shouyld be Same').css('color','red');
        return false;
    }
}

$("#confriPassword").blur(function () {
checkconfrimpassword();

});
$("#confriPassword").keyup(function () {
    $("#confrimPasswordError").text(' ');
});

// ======================================Gender Validation==================================================================================

function checkGender() {

    var genderInfo = $('input[type="radio"]:checked').val();
    if (genderInfo == 'male' || genderInfo == 'female'){
        $("#genderInfoError").text(' ');
        return true;
    }else {

        $("#genderInfoError").text('Please give your gender info');
        return false;
    }

}


// ======================================district Validation==================================================================================

function checkdistrickName() {

    var districtName = $("#districtName").val();
    if (districtName == " "){
        $("#districtError").text('Please select your district')
        return false;
    }else {

        return true;

    }


}

// ======================================Email Name Validation==================================================================================

$("#form").submit(function () {
    if (checkFirstName()==true && checkLastName() == true && checkEmailAddress()==true && checkPassword()==true && checkconfrimpassword()==true && checkGender()==true && checkdistrickName()==true ){
        return true;
    }else {
        return false;
    }



});