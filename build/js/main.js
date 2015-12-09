$(function(){
    $chainsaw = $('svg.chainsaw-icon');

    var count = 0;

    setInterval(function(){
        if (count%2===0){
            $chainsaw.attr("class","chainsaw-icon");
        } else {
            $chainsaw.attr("class","chainsaw-icon glowing");
        }
        count++;
    }, 1500);
});
