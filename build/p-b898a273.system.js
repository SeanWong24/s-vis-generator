System.register(["./p-acc39b4b.system.js","./p-09cdc383.system.js","./p-14d2ff5e.system.js"],(function(n){"use strict";var t,e,r,u,i;return{setters:[function(n){t=n.w},function(n){e=n.createGesture},function(n){r=n.h;u=n.a;i=n.b}],execute:function(){var c=n("c",(function(n,c){var o;var f;var s=function(n,t,e){if(typeof document==="undefined"){return}var r=document.elementFromPoint(n,t);if(!r||!c(r)){d();return}if(r!==o){d();a(r,e)}};var a=function(n,e){o=n;if(!f){f=o}var r=o;t((function(){return r.classList.add("ion-activated")}));e()};var d=function(n){if(n===void 0){n=false}if(!o){return}var e=o;t((function(){return e.classList.remove("ion-activated")}));if(n&&f!==o){o.click()}o=undefined};return e({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return s(n.currentX,n.currentY,u)},onMove:function(n){return s(n.currentX,n.currentY,i)},onEnd:function(){d(true);r();f=undefined}})}))}}}));