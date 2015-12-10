$(function(){
    $chainsaw = $('svg.chainsaw-icon');
    $audio = document.getElementById("player-audio");

    var chainsaws = [$('.chainsaw.one'), $('.chainsaw.two'), $('.chainsaw.three')],
        pickChainsaw = function(){
            var sawIndex = function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            };
            chainsaws[sawIndex(0,3)].css("display", "block");
        },
        unglow = function(){
            $chainsaw.attr("class","chainsaw-icon");
            $audio.pause();
        },
        glow = function(){
            $chainsaw.attr("class","chainsaw-icon glowing");
            $audio.play();
        };

    pickChainsaw();

    var mobileCount = 0;

    if ($('html').hasClass('no-touch')) {
        $('svg.chainsaw-icon').hover(
            function(){
                glow();
            },
            function(){
                unglow();
            }
        );
    } else {
        $('svg.chainsaw-icon').click(function(){
            if (mobileCount%2 === 0) {
                glow();
            } else {
                unglow();
            }
            mobileCount++;
        });
    }

});
