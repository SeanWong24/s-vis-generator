System.register(["./p-acc39b4b.system.js","./p-696a4bca.system.js","./p-8fbc4b9b.system.js"],(function(t){"use strict";var o,r,a,n,i,e;return{setters:[function(t){o=t.r;r=t.d;a=t.h;n=t.H},function(t){i=t.g},function(t){e=t.G}],execute:function(){var s=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var c=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var p=function(){function t(t){o(this,t);this.blocker=e.createBlocker({disableScroll:true});this.visible=true;this.tappable=true;this.stopPropagation=true;this.ionBackdropTap=r(this,"ionBackdropTap",7)}t.prototype.connectedCallback=function(){if(this.stopPropagation){this.blocker.block()}};t.prototype.disconnectedCallback=function(){this.blocker.unblock()};t.prototype.onMouseDown=function(t){this.emitTap(t)};t.prototype.emitTap=function(t){if(this.stopPropagation){t.preventDefault();t.stopPropagation()}if(this.tappable){this.ionBackdropTap.emit()}};t.prototype.render=function(){var t;var o=i(this);return a(n,{tabindex:"-1",class:(t={},t[o]=true,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})};return t}();t("ion_backdrop",p);p.style={md:c}}}}));