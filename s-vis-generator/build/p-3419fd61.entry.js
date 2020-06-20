import{r as o,d as i,h as t,H as e,c as r}from"./p-f5cfe7fe.js";import{g as p}from"./p-663ff2e9.js";import"./p-58d13c5e.js";import{d as s}from"./p-f779fe79.js";import{a as n,d as a}from"./p-718ae824.js";import"./p-f3a0c163.js";import{B as c,p as v,a as l,d as h,e as d}from"./p-876472ac.js";import{g as f}from"./p-0708a211.js";import{c as b}from"./p-6497746f.js";const m=(o,i)=>{let t="top",e="left";const r=o.querySelector(".popover-content"),p=r.getBoundingClientRect(),s=p.width,n=p.height,a=o.ownerDocument.defaultView.innerWidth,c=o.ownerDocument.defaultView.innerHeight,v=i&&i.target&&i.target.getBoundingClientRect(),l=null!=v&&"top"in v?v.top:c/2-n/2,h=null!=v&&"left"in v?v.left:a/2,d=v&&v.width||0,f=v&&v.height||0,m=o.querySelector(".popover-arrow"),u=m.getBoundingClientRect(),w=u.width,g=u.height;null==v&&(m.style.display="none");const k={top:l+f,left:h+d/2-w/2},y={top:l+f+(g-1),left:h+d/2-s/2};let D=!1,P=!1;y.left<x+25?(D=!0,y.left=x):s+x+y.left+25>a&&(P=!0,y.left=a-s-x,e="right"),l+f+n>c&&l-n>0?(k.top=l-(g+1),y.top=l-n-(g-1),o.className=o.className+" popover-bottom",t="bottom"):l+f+n>c&&(r.style.bottom=x+"%"),m.style.top=k.top+"px",m.style.left=k.left+"px",r.style.top=y.top+"px",r.style.left=y.left+"px",D&&(r.style.left=`calc(${y.left}px + var(--ion-safe-area-left, 0px))`),P&&(r.style.left=`calc(${y.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+e;const j=b(),W=b(),I=b();return W.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),I.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.addElement(o).easing("ease").duration(100).addAnimation([W,I])},x=5,u=o=>{const i=b(),t=b(),e=b();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.addElement(o).easing("ease").duration(500).addAnimation([t,e])},w=(o,i)=>{const t=o.ownerDocument,e="rtl"===t.dir;let r="top",p=e?"right":"left";const s=o.querySelector(".popover-content"),n=s.getBoundingClientRect(),a=n.width,c=n.height,v=t.defaultView.innerWidth,l=t.defaultView.innerHeight,h=i&&i.target&&i.target.getBoundingClientRect(),d=null!=h&&"bottom"in h?h.bottom:l/2-c/2,f=h&&h.height||0,m={top:d,left:null!=h&&"left"in h?e?h.left-a+h.width:h.left:v/2-a/2};m.left<12?(m.left=12,p="left"):a+12+m.left>v&&(m.left=v-a-12,p="right"),d+f+c>l&&d-c>0?(m.top=d-c-f,o.className=o.className+" popover-bottom",r="bottom"):d+f+c>l&&(s.style.bottom="12px");const x=b(),u=b(),w=b(),g=b(),k=b();return u.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),w.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),g.addElement(s).beforeStyles({top:m.top+"px",left:m.left+"px","transform-origin":`${r} ${p}`}).fromTo("transform","scale(0.001)","scale(1)"),k.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),x.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([u,w,g,k])},g=o=>{const i=b(),t=b(),e=b();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.addElement(o).easing("ease").duration(500).addAnimation([t,e])};class k{constructor(t){o(this,t),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,c)},this.onLifecycle=o=>{const i=this.usersElement,t=y[o.type];if(i&&t){const e=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});i.dispatchEvent(e)}},v(this.el),this.didPresent=i(this,"ionPopoverDidPresent",7),this.willPresent=i(this,"ionPopoverWillPresent",7),this.willDismiss=i(this,"ionPopoverWillDismiss",7),this.didDismiss=i(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const i=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await n(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],i),await s(this.usersElement),l(this,"popoverEnter",m,w,this.event)}async dismiss(o,i){const t=await h(this,o,i,"popoverLeave",u,g,this.event);return t&&await a(this.delegate,this.usersElement),t}onDidDismiss(){return d(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return d(this.el,"ionPopoverWillDismiss")}render(){const o=p(this),{onLifecycle:i}=this;return t(e,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},f(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:i,onIonPopoverWillPresent:i,onIonPopoverWillDismiss:i,onIonPopoverDidDismiss:i,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},t("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),t("div",{class:"popover-wrapper"},t("div",{class:"popover-arrow"}),t("div",{class:"popover-content"})))}get el(){return r(this)}}const y={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};k.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'};export{k as ion_popover}