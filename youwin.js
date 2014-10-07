$('img.trophy').css({position:"absolute"});
$('img.trophy').css({transform:"rotate(90deg)"});
var x=1000;
var sx=5
setInterval(function (e) {
    $('img.trophy').css({left:x});
    x = x-sx
    if(x<5)
        sx=-5
    if(x>1005)
        sx=5
   $('img.trophy').css({transform:"rotate(" +x+"deg)"}); 
        

},10);