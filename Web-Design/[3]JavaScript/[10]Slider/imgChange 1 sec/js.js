 var imagePath = ['img/img%20(1).jpg','img/img%20(2).jpg','img/img%20(3).jpg','img/img%20(4).jpg'];
var index = 0;

 function imageChange() {
 var mainImage = document.getElementById('mainImage');
     mainImage.setAttribute('src',imagePath[index]);


     index++;
     if (index > imagePath.length){
         index = 0;
     }

 }


 setInterval(imageChange,1000);

