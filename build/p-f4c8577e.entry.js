import{r as o,d as i,h as t,H as e,c as r}from"./p-f5cfe7fe.js";import{g as p}from"./p-663ff2e9.js";import"./p-58d13c5e.js";import{d as s}from"./p-f779fe79.js";import{a as n,d as a}from"./p-718ae824.js";import{c}from"./p-6497746f.js";import"./p-f3a0c163.js";import{B as l,p as h,b as d,d as v,e as m}from"./p-fbaedccc.js";import{g as f}from"./p-0708a211.js";const x=(o,i)=>{let t="top",e="left";const r=o.querySelector(".popover-content"),p=r.getBoundingClientRect(),s=p.width,n=p.height,a=o.ownerDocument.defaultView.innerWidth,l=o.ownerDocument.defaultView.innerHeight,h=i&&i.target&&i.target.getBoundingClientRect(),d=null!=h&&"top"in h?h.top:l/2-n/2,v=null!=h&&"left"in h?h.left:a/2,m=h&&h.width||0,f=h&&h.height||0,x=o.querySelector(".popover-arrow"),w=x.getBoundingClientRect(),u=w.width,g=w.height;null==h&&(x.style.display="none");const y={top:d+f,left:v+m/2-u/2},k={top:d+f+(g-1),left:v+m/2-s/2};let D=!1,P=!1;k.left<b+25?(D=!0,k.left=b):s+b+k.left+25>a&&(P=!0,k.left=a-s-b,e="right"),d+f+n>l&&d-n>0?(y.top=d-(g+1),k.top=d-n-(g-1),o.className=o.className+" popover-bottom",t="bottom"):d+f+n>l&&(r.style.bottom=b+"%"),x.style.top=y.top+"px",x.style.left=y.left+"px",r.style.top=k.top+"px",r.style.left=k.left+"px",D&&(r.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),P&&(r.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+e;const j=c(),W=c(),I=c();return W.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),I.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.addElement(o).easing("ease").duration(100).addAnimation([W,I])},b=5,w=o=>{const i=c(),t=c(),e=c();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.addElement(o).easing("ease").duration(500).addAnimation([t,e])},u=(o,i)=>{const t=o.ownerDocument,e="rtl"===t.dir;let r="top",p=e?"right":"left";const s=o.querySelector(".popover-content"),n=s.getBoundingClientRect(),a=n.width,l=n.height,h=t.defaultView.innerWidth,d=t.defaultView.innerHeight,v=i&&i.target&&i.target.getBoundingClientRect(),m=null!=v&&"bottom"in v?v.bottom:d/2-l/2,f=v&&v.height||0,x={top:m,left:null!=v&&"left"in v?e?v.left-a+v.width:v.left:h/2-a/2};x.left<12?(x.left=12,p="left"):a+12+x.left>h&&(x.left=h-a-12,p="right"),m+f+l>d&&m-l>0?(x.top=m-l-f,o.className=o.className+" popover-bottom",r="bottom"):m+f+l>d&&(s.style.bottom="12px");const b=c(),w=c(),u=c(),g=c(),y=c();return w.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),u.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),g.addElement(s).beforeStyles({top:x.top+"px",left:x.left+"px","transform-origin":`${r} ${p}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,u,g,y])},g=o=>{const i=c(),t=c(),e=c();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.addElement(o).easing("ease").duration(500).addAnimation([t,e])};class y{constructor(t){o(this,t),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,l)},this.onLifecycle=o=>{const i=this.usersElement,t=k[o.type];if(i&&t){const e=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});i.dispatchEvent(e)}},h(this.el),this.didPresent=i(this,"ionPopoverDidPresent",7),this.willPresent=i(this,"ionPopoverWillPresent",7),this.willDismiss=i(this,"ionPopoverWillDismiss",7),this.didDismiss=i(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const i=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await n(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],i),await s(this.usersElement),d(this,"popoverEnter",x,u,this.event)}async dismiss(o,i){const t=await v(this,o,i,"popoverLeave",w,g,this.event);return t&&await a(this.delegate,this.usersElement),t}onDidDismiss(){return m(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return m(this.el,"ionPopoverWillDismiss")}render(){const o=p(this),{onLifecycle:i}=this;return t(e,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},f(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:i,onIonPopoverWillPresent:i,onIonPopoverWillDismiss:i,onIonPopoverDidDismiss:i,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},t("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),t("div",{class:"popover-wrapper"},t("div",{class:"popover-arrow"}),t("div",{class:"popover-content"})))}get el(){return r(this)}}const k={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};y.style={md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"};export{y as ion_popover}