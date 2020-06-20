var __awaiter=this&&this.__awaiter||function(t,e,r,n){function a(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function o(t){try{l(n.next(t))}catch(e){i(e)}}function s(t){try{l(n["throw"](t))}catch(e){i(e)}}function l(t){t.done?r(t.value):a(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-acc39b4b.system.js","./p-696a4bca.system.js","./p-58644701.system.js","./p-9bdf5884.system.js"],(function(t,e){"use strict";var r,n,a,i,o,s,l,d,b,g,u;return{setters:[function(t){r=t.r;n=t.d;a=t.h;i=t.H;o=t.c},function(t){s=t.g},function(t){l=t.c;d=t.e;b=t.b},function(t){g=t.c;u=t.h}],execute:function(){var c=":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}";var h=':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}';var p=function(){function t(t){var e=this;r(this,t);this.noUpdate=false;this.hasFocus=false;this.ratioA=0;this.ratioB=0;this.debounce=0;this.name="";this.dualKnobs=false;this.min=0;this.max=100;this.pin=false;this.snaps=false;this.step=1;this.ticks=true;this.disabled=false;this.value=0;this.clampBounds=function(t){return l(e.min,t,e.max)};this.ensureValueInBounds=function(t){if(e.dualKnobs){return{lower:e.clampBounds(t.lower),upper:e.clampBounds(t.upper)}}else{return e.clampBounds(t)}};this.handleKeyboard=function(t,r){var n=e.step;n=n>0?n:1;n=n/(e.max-e.min);if(!r){n*=-1}if(t==="A"){e.ratioA=l(0,e.ratioA+n,1)}else{e.ratioB=l(0,e.ratioB+n,1)}e.updateValue()};this.onBlur=function(){if(e.hasFocus){e.hasFocus=false;e.ionBlur.emit();e.emitStyle()}};this.onFocus=function(){if(!e.hasFocus){e.hasFocus=true;e.ionFocus.emit();e.emitStyle()}};this.ionChange=n(this,"ionChange",7);this.ionStyle=n(this,"ionStyle",7);this.ionFocus=n(this,"ionFocus",7);this.ionBlur=n(this,"ionBlur",7)}t.prototype.debounceChanged=function(){this.ionChange=d(this.ionChange,this.debounce)};t.prototype.minChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.maxChanged=function(){if(!this.noUpdate){this.updateRatio()}};t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}this.emitStyle()};t.prototype.valueChanged=function(t){if(!this.noUpdate){this.updateRatio()}t=this.ensureValueInBounds(t);this.ionChange.emit({value:t})};t.prototype.connectedCallback=function(){this.updateRatio();this.debounceChanged();this.disabledChanged()};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,r;var n=this;return __generator(this,(function(a){switch(a.label){case 0:t=this.rangeSlider;if(!t)return[3,2];r=this;return[4,e.import("./p-09cdc383.system.js")];case 1:r.gesture=a.sent().createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}});this.gesture.enable(!this.disabled);a.label=2;case 2:return[2]}}))}))};t.prototype.getValue=function(){var t=this.value||0;if(this.dualKnobs){if(typeof t==="object"){return t}return{lower:0,upper:t}}else{if(typeof t==="object"){return t.upper}return t}};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,"interactive-disabled":this.disabled})};t.prototype.onStart=function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect();var r=t.currentX;var n=l(0,(r-e.left)/e.width,1);if(document.dir==="rtl"){n=1-n}this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B";this.setFocus(this.pressedKnob);this.update(r)};t.prototype.onMove=function(t){this.update(t.currentX)};t.prototype.onEnd=function(t){this.update(t.currentX);this.pressedKnob=undefined};t.prototype.update=function(t){var e=this.rect;var r=l(0,(t-e.left)/e.width,1);if(document.dir==="rtl"){r=1-r}if(this.snaps){r=k(m(r,this.min,this.max,this.step),this.min,this.max)}if(this.pressedKnob==="A"){this.ratioA=r}else{this.ratioB=r}this.updateValue()};Object.defineProperty(t.prototype,"valA",{get:function(){return m(this.ratioA,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"valB",{get:function(){return m(this.ratioB,this.min,this.max,this.step)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioLower",{get:function(){if(this.dualKnobs){return Math.min(this.ratioA,this.ratioB)}return 0},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ratioUpper",{get:function(){if(this.dualKnobs){return Math.max(this.ratioA,this.ratioB)}return this.ratioA},enumerable:false,configurable:true});t.prototype.updateRatio=function(){var t=this.getValue();var e=this,r=e.min,n=e.max;if(this.dualKnobs){this.ratioA=k(t.lower,r,n);this.ratioB=k(t.upper,r,n)}else{this.ratioA=k(t,r,n)}};t.prototype.updateValue=function(){this.noUpdate=true;var t=this,e=t.valA,r=t.valB;this.value=!this.dualKnobs?e:{lower:Math.min(e,r),upper:Math.max(e,r)};this.noUpdate=false};t.prototype.setFocus=function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector(t==="A"?".range-knob-a":".range-knob-b");if(e){e.focus()}}};t.prototype.render=function(){var t,e;var r=this;var n=this,o=n.min,l=n.max,d=n.step,c=n.el,h=n.handleKeyboard,p=n.pressedKnob,m=n.disabled,v=n.pin,x=n.ratioLower,w=n.ratioUpper;var y=s(this);var z=x*100+"%";var B=100-w*100+"%";var A=document;var C=A.dir==="rtl";var K=C?"right":"left";var S=C?"left":"right";var j=function(t){var e;return e={},e[K]=t[K],e};var F=(t={},t[K]=z,t[S]=B,t);var _=[];if(this.snaps&&this.ticks){for(var M=o;M<=l;M+=d){var P=k(M,o,l);var O={ratio:P,active:P>=x&&P<=w};O[K]=P*100+"%";_.push(O)}}b(true,c,this.name,JSON.stringify(this.getValue()),m);return a(i,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},g(this.color)),(e={},e[y]=true,e["in-item"]=u("ion-item",c),e["range-disabled"]=m,e["range-pressed"]=p!==undefined,e["range-has-pin"]=v,e))},a("slot",{name:"start"}),a("div",{class:"range-slider",ref:function(t){return r.rangeSlider=t}},_.map((function(t){return a("div",{style:j(t),role:"presentation",class:{"range-tick":true,"range-tick-active":t.active},part:t.active?"tick-active":"tick"})})),a("div",{class:"range-bar",role:"presentation",part:"bar"}),a("div",{class:"range-bar range-bar-active",role:"presentation",style:F,part:"bar-active"}),f(C,{knob:"A",pressed:p==="A",value:this.valA,ratio:this.ratioA,pin:v,disabled:m,handleKeyboard:h,min:o,max:l}),this.dualKnobs&&f(C,{knob:"B",pressed:p==="B",value:this.valB,ratio:this.ratioB,pin:v,disabled:m,handleKeyboard:h,min:o,max:l})),a("slot",{name:"end"}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return t}();t("ion_range",p);var f=function(t,e){var r=e.knob,n=e.value,i=e.ratio,o=e.min,s=e.max,l=e.disabled,d=e.pressed,b=e.pin,g=e.handleKeyboard;var u=t?"right":"left";var c=function(){var t={};t[u]=i*100+"%";return t};return a("div",{onKeyDown:function(t){var e=t.key;if(e==="ArrowLeft"||e==="ArrowDown"){g(r,false);t.preventDefault();t.stopPropagation()}else if(e==="ArrowRight"||e==="ArrowUp"){g(r,true);t.preventDefault();t.stopPropagation()}},class:{"range-knob-handle":true,"range-knob-a":r==="A","range-knob-b":r==="B","range-knob-pressed":d,"range-knob-min":n===o,"range-knob-max":n===s},style:c(),role:"slider",tabindex:l?-1:0,"aria-valuemin":o,"aria-valuemax":s,"aria-disabled":l?"true":null,"aria-valuenow":n},b&&a("div",{class:"range-pin",role:"presentation",part:"pin"},Math.round(n)),a("div",{class:"range-knob",role:"presentation",part:"knob"}))};var m=function(t,e,r,n){var a=(r-e)*t;if(n>0){a=Math.round(a/n)*n+e}return l(e,a,r)};var k=function(t,e,r){return l(0,(t-e)/(r-e),1)};p.style={ios:c}}}}));