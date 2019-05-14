/*
Move background - Code by Zsolt Király
v1.0.4 - 2018-06-25
*/

'use strict';
var moveBackground = function() {

    function signatura() {
        if (window['console']) {
            const text = {
                black: '%c     ',
                blue: '%c   ',
                author: '%c  Zsolt Király  ',
                github: '%c  https://zsoltkiraly.com/'
            }
    
            const style = {
                black: 'background: #282c34',
                blue: 'background: #61dafb',
                author: 'background: black; color: white',
                github: ''
            }
    
            console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
        }
    }
    
    signatura();

    function app(c) {

        var lFollowX = 0,
            lFollowY = 0,
            x = 0,
            y = 0,
            friction = 1 / 30;

        var moveArea = document.querySelector('.move-area');

        if(moveArea) {
            function moveBackground() {
                x += (lFollowX - x) * friction;
                y += (lFollowY - y) * friction;

                var translate = 'translate(' + x + 'px, ' + y + 'px)';

                var bg = moveArea.querySelector('.move-background');

                bg.style.WebkitTransform = translate;
                bg.style.msTransform = translate;
                bg.style.transform = translate;

                window.requestAnimationFrame(moveBackground);
            }

            moveArea.addEventListener('mousemove', function(e) {

                var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                var lMouseX = Math.max(-100, Math.min(100, w / 2 - e.clientX));
                var lMouseY = Math.max(-100, Math.min(100, h / 2 - e.clientY));

                lFollowX = (20 * lMouseX) / 100;
                lFollowY = (10 * lMouseY) / 100;
            }, false);

            moveBackground();
        }
    };

    return {
        app: app
    }

}();

window.addEventListener('load', function() {
    moveBackground.app();
}, false);