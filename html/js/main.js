$(function() {
    $chainsaw = $("svg.chainsaw-icon"), $audio = document.getElementById("player-audio");
    var chainsaws = [ $(".chainsaw.one"), $(".chainsaw.two"), $(".chainsaw.three") ], pickChainsaw = function() {
        var sawIndex = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        chainsaws[sawIndex(0, 3)].css("display", "block");
    }, unglow = function() {
        $chainsaw.attr("class", "chainsaw-icon"), $audio.pause();
    }, glow = function() {
        $chainsaw.attr("class", "chainsaw-icon glowing"), $audio.play();
    };
    pickChainsaw();
    var mobileCount = 0;
    $("html").hasClass("no-touch") ? $("svg.chainsaw-icon").hover(function() {
        glow();
    }, function() {
        unglow();
    }) : $("svg.chainsaw-icon").click(function() {
        mobileCount % 2 === 0 ? glow() : unglow(), mobileCount++;
    });
    var letters = $(".letter"), glowLetters = function(i) {
        var last = i - 1, nextLetter = $(".letter." + i), lastLetter = $(".letter." + last);
        nextLetter.addClass("glow"), lastLetter.removeClass("glow");
    }, i = 0;
    setInterval(function() {
        glowLetters(i), i++, i > letters.length && (i = 0);
    }, 330);
});