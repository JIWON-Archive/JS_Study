var count = 0;
var timer = setInterval(function() {
    console.log(count);
    if(++count > 5) 
        clearInterval(timer);
}, 300);