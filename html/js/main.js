$(function() {
    $chainsaw = $("svg.chainsaw-icon");
    var count = 0;
    setInterval(function() {
        count % 2 === 0 ? $chainsaw.attr("class", "chainsaw-icon") : $chainsaw.attr("class", "chainsaw-icon glowing"), 
        count++;
    }, 1500);
});