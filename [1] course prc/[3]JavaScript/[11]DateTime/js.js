
// function demo() {
// alert('hellow Test');
//
// }
       //function er nam setIntervat  aktta nirdistto somoi por por akta kaj se korve
// setInterval(demo, 6000);

// ===========================================================================
// ===========================================================================
// ===========================================================================

//new aktta keyword && Date() aktta class && dateTime aktta variable (Object)
//kono aktta class er nam er age jokon new keyword bosai tokon aktta object create hoye jai
// oi object ta variable dateTime er modde raklam

 //  var dateTime = new Date();
 // var year = dateTime.getFullYear();
 // var date = dateTime.getDate();
 // var mounth = dateTime.getMonth();
 // alert(date+'/'+mounth+'/'+year);




function watch(){

        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var mid = 'pm';
        if (min < 10) {
            min = "0" + min;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if(hour==0){
            hour=12;
        }
        if(TwentyFourHour < 12) {
            mid = 'am';
        }
        document.getElementById('watch').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
        setTimeout(clock, 1000);

}

setInterval(watch,1000);
