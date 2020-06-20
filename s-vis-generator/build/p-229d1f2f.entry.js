import{r as t,d as o,e as i,f as e,h as n,H as r,c as a,w as s}from"./p-f5cfe7fe.js";import{g as l,a as d,c}from"./p-663ff2e9.js";import{c as h}from"./p-58d13c5e.js";import{c as p,h as b}from"./p-0708a211.js";class g{constructor(i){t(this,i),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=o(this,"ionScrollStart",7),this.ionScroll=o(this,"ionScroll",7),this.ionScrollEnd=o(this,"ionScrollEnd",7)}disconnectedCallback(){this.onScrollEnd()}onAppLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}shouldForceOverscroll(){const{forceOverscroll:t}=this,o=l(this);return void 0===t?"ios"===o&&d("ios"):t}resize(){this.fullscreen?i(()=>this.readDimensions()):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,e(this))}readDimensions(){const t=f(this.el),o=Math.max(this.el.offsetTop,0),i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||i!==this.cBottom)&&(this.cTop=o,this.cBottom=i,e(this))}onScroll(t){const o=Date.now(),e=!this.isScrolling;this.lastScroll=o,e&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,i(o=>{this.queued=!1,this.detail.event=t,u(this.detail,this.scrollEl,o,e),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,i){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,i)}async scrollToPoint(t,o,i=0){const e=this.scrollEl;if(i<32)return null!=o&&(e.scrollTop=o),void(null!=t&&(e.scrollLeft=t));let n,r=0;const a=new Promise(t=>n=t),s=e.scrollTop,l=e.scrollLeft,d=null!=o?o-s:0,c=null!=t?t-l:0,h=t=>{const o=Math.min(1,(t-r)/i)-1,a=Math.pow(o,3)+1;0!==d&&(e.scrollTop=Math.floor(a*d+s)),0!==c&&(e.scrollLeft=Math.floor(a*c+l)),a<1?requestAnimationFrame(h):n()};return requestAnimationFrame(t=>{r=t,h(t)}),a}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{scrollX:t,scrollY:o}=this,i=l(this),e=this.shouldForceOverscroll(),a="ios"===i&&c.getBoolean("experimentalTransitionShadow",!0);return this.resize(),n(r,{class:Object.assign(Object.assign({},p(this.color)),{[i]:!0,"content-sizing":b("ion-popover",this.el),overscroll:e}),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},n("div",{id:"background-content",part:"background"}),n("main",{class:{"inner-scroll":!0,"scroll-x":t,"scroll-y":o,overscroll:(t||o)&&e},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):void 0,part:"scroll"},n("slot",null)),a?n("div",{class:"transition-effect"},n("div",{class:"transition-cover"}),n("div",{class:"transition-shadow"})):null,n("slot",{name:"fixed"}))}get el(){return a(this)}}const f=t=>{const o=t.closest("ion-tabs");if(o)return o;return t.closest("ion-app,ion-page,.ion-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t)},u=(t,o,i,e)=>{const n=t.currentX,r=t.currentY,a=o.scrollLeft,s=o.scrollTop,l=i-t.currentTime;if(e&&(t.startTime=i,t.startX=a,t.startY=s,t.velocityX=t.velocityY=0),t.currentTime=i,t.currentX=t.scrollLeft=a,t.currentY=t.scrollTop=s,t.deltaX=a-t.startX,t.deltaY=s-t.startY,l>0&&l<100){const o=(s-r)/l;t.velocityX=(a-n)/l*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}};g.style=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;will-change:scroll-position}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100vh;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}';const m=t=>{const o=document.querySelector(t+".ion-cloned-element");if(null!==o)return o;const i=document.createElement(t);return i.classList.add("ion-cloned-element"),i.style.setProperty("display","none"),document.body.appendChild(i),i},v=t=>{if(!t)return;const o=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(o).map(t=>{const o=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}})||[]}},x=(t,o)=>{void 0===o?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",o.toString())},w=(t,o=!0)=>{o?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")};class k{constructor(o){t(this,o),this.collapsibleHeaderInitialized=!1,this.translucent=!1}async componentDidLoad(){await this.checkCollapsibleHeader()}async componentDidUpdate(){await this.checkCollapsibleHeader()}componentDidUnload(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const t="condense"===this.collapse,o=!(!t||"ios"!==l(this))&&t;if(!o&&this.collapsibleHeaderInitialized)this.destroyCollapsibleHeader();else if(o&&!this.collapsibleHeaderInitialized){const t=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),o=t?t.querySelector("ion-content"):null;s(()=>{m("ion-title").size="large",m("ion-back-button")}),await this.setupCollapsibleHeader(o,t)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}async setupCollapsibleHeader(t,o){if(!t||!o)return void console.error("ion-header requires a content to collapse, make sure there is an ion-content.");if("undefined"==typeof IntersectionObserver)return;this.scrollEl=await t.getScrollElement();const e=o.querySelectorAll("ion-header");if(this.collapsibleMainHeader=Array.from(e).find(t=>"condense"!==t.collapse),!this.collapsibleMainHeader)return;const n=v(this.collapsibleMainHeader),r=v(this.el);n&&r&&(w(n,!1),n.toolbars.forEach(t=>{x(t,0)}),this.intersectionObserver=new IntersectionObserver(t=>{((t,o,i)=>{s(()=>{((t,o)=>{if(!t[0].isIntersecting)return;const i=t[0].intersectionRatio>.9?0:100*(1-t[0].intersectionRatio)/75;o.toolbars.forEach(t=>{x(t,1===i?void 0:i)})})(t,o);const e=t[0],n=e.intersectionRect,r=n.width*n.height,a=0===r&&0==e.rootBounds.width*e.rootBounds.height,s=Math.abs(n.left-e.boundingClientRect.left),l=Math.abs(n.right-e.boundingClientRect.right);a||r>0&&(s>=5||l>=5)||(e.isIntersecting?(w(o,!1),w(i)):(0===n.x&&0===n.y||0!==n.width&&0!==n.height)&&(w(o),w(i,!1),x(o.toolbars[0])))})})(t,n,r)},{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(r.toolbars[r.toolbars.length-1].el),this.contentScrollCallback=()=>{((t,o,e)=>{i(()=>{const i=h(1,1+-t.scrollTop/500,1.1);null===e.querySelector("ion-refresher.refresher-native")&&s(()=>{((t=[],o=1,i=!1)=>{t.forEach(t=>{const e=t.ionTitleEl,n=t.innerTitleEl;e&&"large"===e.size&&(n.style.transformOrigin="left center",n.style.transition=i?"all 0.2s ease-in-out":"",n.style.transform=`scale3d(${o}, ${o}, 1)`)})})(o.toolbars,i)})})})(this.scrollEl,r,t)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),s(()=>{void 0!==this.collapsibleMainHeader&&this.collapsibleMainHeader.classList.add("header-collapse-main")}),this.collapsibleHeaderInitialized=!0)}render(){const{translucent:t}=this,o=l(this);return n(r,{role:"banner",class:{[o]:!0,["header-"+o]:!0,"header-translucent":this.translucent,["header-collapse-"+(this.collapse||"none")]:!0,["header-translucent-"+o]:this.translucent}},"ios"===o&&t&&n("div",{class:"header-background"}),n("slot",null))}get el(){return a(this)}}k.style={ios:"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}"};class y{constructor(i){t(this,i),this.ionStyle=o(this,"ionStyle",7)}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const t=this.getSize();this.ionStyle.emit({["title-"+t]:!0})}getSize(){return void 0!==this.size?this.size:"default"}render(){const t=l(this),o=this.getSize();return n(r,{class:Object.assign({[t]:!0,["title-"+o]:!0},p(this.color))},n("div",{class:"toolbar-title"},n("slot",null)))}get el(){return a(this)}static get watchers(){return{size:["sizeChanged"]}}}y.style={ios:":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}"};class A{constructor(o){t(this,o),this.childrenStyles=new Map}componentWillLoad(){const t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find(t=>"start"===t.slot);o&&o.classList.add("buttons-first-slot");const i=t.reverse(),e=i.find(t=>"end"===t.slot)||i.find(t=>"primary"===t.slot)||i.find(t=>"secondary"===t.slot);e&&e.classList.add("buttons-last-slot")}childrenStyle(t){t.stopPropagation();const o=t.target.tagName,i=t.detail,n={},r=this.childrenStyles.get(o)||{};let a=!1;Object.keys(i).forEach(t=>{const o="toolbar-"+t,e=i[t];e!==r[o]&&(a=!0),e&&(n[o]=!0)}),a&&(this.childrenStyles.set(o,n),e(this))}render(){const t=l(this),o={};return this.childrenStyles.forEach(t=>{Object.assign(o,t)}),n(r,{class:Object.assign(Object.assign({"in-toolbar":b("ion-toolbar",this.el),[t]:!0},o),p(this.color))},n("div",{class:"toolbar-background"}),n("div",{class:"toolbar-container"},n("slot",{name:"start"}),n("slot",{name:"secondary"}),n("div",{class:"toolbar-content"},n("slot",null)),n("slot",{name:"primary"}),n("slot",{name:"end"})))}get el(){return a(this)}}A.style={ios:":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}"};export{g as ion_content,k as ion_header,y as ion_title,A as ion_toolbar}