$(function(){
    $chainsaw = $('svg.chainsaw-icon');

    var count = 0,
        chainsaws = [$('.chainsaw.one'), $('.chainsaw.two'), $('.chainsaw.three')],
        pickChainsaw = function(){
            var sawIndex = function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            };
            chainsaws[sawIndex(0,3)].css("display", "block");
        },
        glow = function(){
            if (count%2===0){
                $chainsaw.attr("class","chainsaw-icon");
            } else {
                $chainsaw.attr("class","chainsaw-icon glowing");
            }
            count++;
        };

    pickChainsaw();
    glow();

    setInterval(function(){
        glow();
    }, 1500);
});
