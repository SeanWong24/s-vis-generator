import{r as o,d as a,w as t,h as i,H as s,c as r}from"./p-f5cfe7fe.js";import{g as e,c as n}from"./p-663ff2e9.js";import{g as d}from"./p-177ede88.js";import{c as l}from"./p-58d13c5e.js";import{d as c}from"./p-f779fe79.js";import{a as p,d as m}from"./p-718ae824.js";import{c as h}from"./p-6497746f.js";import"./p-78da8fe1.js";import{createGesture as f}from"./p-03389897.js";import"./p-f3a0c163.js";import{B as b,p as x,b as w,f as u,d as v,e as g}from"./p-fbaedccc.js";import{g as y}from"./p-0708a211.js";const k=(o,a)=>{const t=h().addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i=h().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),s=h().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(a){const o=window.innerWidth<768,r="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,e=h().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",t=`translateY(${r?"-10px":o}) scale(0.93)`;e.afterStyles({transform:t}).beforeAddWrite(()=>n.style.setProperty("background-color","black")).addElement(a).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:t,borderRadius:"10px 10px 0 0"}]),s.addAnimation(e)}else if(s.addAnimation(t),r){const o=`translateY(-10px) scale(${r?.93:1})`;e.afterStyles({transform:o}).addElement(a.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:o}]);const t=h().afterStyles({transform:o}).addElement(a.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:o}]);s.addAnimation([e,t])}else i.fromTo("opacity","0","1")}else s.addAnimation(t);return s},D=(o,a,t=500)=>{const i=h().addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s=h().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),r=h().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(t).addAnimation(s);if(a){const o=window.innerWidth<768,t="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,e=h().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(o=>{1===o&&(a.style.setProperty("overflow",""),Array.from(n.querySelectorAll("ion-modal")).filter(o=>void 0!==o.presentingElement).length<=1&&n.style.setProperty("background-color",""))}),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${t?"-10px":o}) scale(0.93)`;e.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),r.addAnimation(e)}else if(r.addAnimation(i),t){const o=`translateY(-10px) scale(${t?.93:1})`;e.addElement(a.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:o},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const i=h().addElement(a.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:o},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);r.addAnimation([e,i])}else s.fromTo("opacity","1","0")}else r.addAnimation(i);return r},Y=o=>{const a=h(),t=h(),i=h();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),a.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([t,i])},M=o=>{const a=h(),t=h(),i=h(),s=o.querySelector(".modal-wrapper");return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(s).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),a.addElement(o).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([t,i])};class j{constructor(t){o(this,t),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,b)},this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onLifecycle=o=>{const a=this.usersElement,t=C[o.type];if(a&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});a.dispatchEvent(i)}},x(this.el),this.didPresent=a(this,"ionModalDidPresent",7),this.willPresent=a(this,"ionModalWillPresent",7),this.willDismiss=a(this,"ionModalWillDismiss",7),this.didDismiss=a(this,"ionModalDidDismiss",7)}swipeToCloseChanged(o){this.gesture?this.gesture.enable(o):o&&this.initSwipeToClose()}async present(){if(this.presented)return;const o=this.el.querySelector(".modal-wrapper");if(!o)throw new Error("container is undefined");const a=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await p(this.delegate,o,this.component,["ion-page"],a),await c(this.usersElement),t(()=>this.el.classList.add("show-modal")),await w(this,"modalEnter",k,Y,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){if("ios"!==e(this))return;const o=this.leaveAnimation||n.get("modalLeave",D),a=this.animation=o(this.el,this.presentingElement);this.gesture=((o,a,t)=>{const i=o.offsetHeight;let s=!1;const r=f({el:o,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:o=>{const a=o.event.target;return null===a||!a.closest||null===a.closest("ion-content")},onStart:()=>{a.progressStart(!0,s?1:0)},onMove:o=>{const t=l(1e-4,o.deltaY/i,.9999);a.progressStep(t)},onEnd:o=>{const e=o.velocityY,n=l(1e-4,o.deltaY/i,.9999),c=(o.deltaY+1e3*e)/i>=.5;let p=c?-.001:.001;c?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),p+=d([0,0],[.32,.72],[0,1],[1,1],n)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),p+=d([0,0],[1,0],[.68,.28],[1,1],n)[0]);const m=((o,a)=>l(400,o/Math.abs(1.1*a),500))(c?n*i:(1-n)*i,e);s=c,r.enable(!1),a.onFinish(()=>{c||r.enable(!0)}).progressEnd(c?1:0,p,m),c&&t()}});return r})(this.el,a,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}async dismiss(o,a){if(this.gestureAnimationDismissing&&"gesture"!==a)return!1;const t=u.get(this)||[],i=await v(this,o,a,"modalLeave",D,M,this.presentingElement);return i&&(await m(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),t.forEach(o=>o.destroy())),this.animation=void 0,i}onDidDismiss(){return g(this.el,"ionModalDidDismiss")}onWillDismiss(){return g(this.el,"ionModalWillDismiss")}render(){const o=e(this);return i(s,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign({[o]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===o},y(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},i("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===o&&i("div",{class:"modal-shadow"}),i("div",{role:"dialog",class:"modal-wrapper"}))}get el(){return r(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}}const C={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};j.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}"};export{j as ion_modal}