// ==UserScript==
// @name        Bilibili left
// @namespace   zmddyx
// @include     https://www.bilibili.com/video/*
// @version     1
// @grant       none
// @required    http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==
"use strict";
(function () {
    var $player = $("#bofqi");
    var button = "<button id=\"js-move-to-left\" class=\"b-btn\">左移</button>";
    $player.before(button);

    var $leftBtn = $("#js-move-to-left");
    console.log($player);
    $leftBtn.click(function () {
        if("yes" != $player.attr("js-left")) {
            $player.css("margin-left", "0px");
            $player.attr("js-left","yes");
        } else {
            $player.css("margin-left", "auto");
            $player.attr("js-left","no");
        }
    });
})();



