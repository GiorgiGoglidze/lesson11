


var rockbands =["Led zeppelin", "Pink Floyd",  "Deep Purple", "The beatles","The Doors" ] ;

for (var i =0; i < rockbands.length; i++){
console.log(rockbands[i]);
}




function display (brad,x) 
    {
        var Price = brad(x);
        alert(Price);
     }
     
   var  pricemessage=function (bradPrice)
     {
         
         if (bradPrice<=1)
         return "პური იაფია";
         else if (bradPrice>2 && bradPrice<=4)
         return "პურის ფასი ნორმალურია";
         else if (bradPrice>4 && bradPrice<6)
         return "პურის ფასი მაღალია";
         else
         return "პურის ფასი ძალიან მაღალია ";
     }
     var str1 = prompt("პურის ფასი",)
     display (pricemessage,str1);



var mas = [ 15,53,22,198,10,28,16,70,33,951];
var result =mas.filter ((n) => n%2 ==1)
document.write(result);



