import{r as t,d as s,w as i,h as e,H as n,c as o}from"./p-cd08f63e.js";import{c as a,g as h}from"./p-dff9dc95.js";import{p as r}from"./p-56dbf9e6.js";import{c,h as l}from"./p-5b51185b.js";const d=class{constructor(i){t(this,i),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=t=>{const s=t.target,i=this.checked;this.value=s.value,i&&this.scrollable&&this.checkButton(i,s),this.checked=s},this.ionChange=s(this,"ionChange",7),this.ionSelect=s(this,"ionSelect",7),this.ionStyle=s(this,"ionStyle",7)}valueChanged(t,s){this.ionSelect.emit({value:t}),(""!==s||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const s of t)s.disabled=this.disabled}gestureChanged(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await __sc_import_app("./p-78321f41.js")).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1);const s=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),s&&this.addRipple(t);const i=this.valueAfterGesture;void 0!==i&&(this.ionChange.emit({value:i}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(t){if(!a.getBoolean("animated",!0)||!a.getBoolean("rippleEffect",!0))return;const s=this.getButtons().find(t=>t.value===this.value),i=(s.shadowRoot||s).querySelector("ion-ripple-effect");if(!i)return;const{x:e,y:n}=r(t.event);i.addRipple(e,n).then(t=>t())}setActivated(t){this.getButtons().forEach(s=>{t?s.classList.add("segment-button-activated"):s.classList.remove("segment-button-activated")}),this.activated=t}activate(t){const s=t.event.target,i=this.getButtons().find(t=>t.value===this.value);"ION-SEGMENT-BUTTON"===s.tagName&&(i||(this.value=s.value),this.value===s.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,s){const e=this.getIndicator(t),n=this.getIndicator(s);if(null===e||null===n)return;const o=e.getBoundingClientRect(),a=n.getBoundingClientRect(),h=`translate3d(${o.left-a.left}px, 0, 0) scaleX(${o.width/a.width})`;i(()=>{n.classList.remove("segment-button-indicator-animated"),n.style.setProperty("transform",h),n.getBoundingClientRect(),n.classList.add("segment-button-indicator-animated"),n.style.setProperty("transform","")}),this.value=s.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),s=t.findIndex(t=>t.value===this.value)+1;this.checked=t.find(t=>t.value===this.value);for(const i of t)i.classList.remove("segment-button-after-checked");s<t.length&&t[s].classList.add("segment-button-after-checked")}setNextIndex(t,s=!1){const i="rtl"===document.dir,e=this.activated,n=this.getButtons(),o=n.findIndex(t=>t.value===this.value),a=n[o];let h,r;if(-1===o)return;const c=a.getBoundingClientRect(),l=c.left,d=c.width,m=t.currentX,u=document.elementFromPoint(m,c.top+c.height/2);if(e&&!s){if(i?m>l+d:m<l){const t=o-1;t>=0&&(r=t)}else if((i?m<l:m>l+d)&&e&&!s){const t=o+1;t<n.length&&(r=t)}void 0===r||n[r].disabled||(h=n[r])}if(!e&&s&&(h=u),null!=h){if("ION-SEGMENT"===h.tagName)return!1;a!==h&&this.checkButton(a,h)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const t=h(this);return e(n,{onClick:this.onClick,class:Object.assign(Object.assign({},c(this.color)),{[t]:!0,"in-toolbar":l("ion-toolbar",this.el),"in-toolbar-color":l("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},e("slot",null))}get el(){return o(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"]}}};d.style={md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"};export{d as ion_segment}