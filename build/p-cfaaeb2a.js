import{w as t}from"./p-f5cfe7fe.js";import{createGesture as o}from"./p-03389897.js";import{h as e,a as n,b as r}from"./p-46875cf6.js";const s=(s,a)=>{let c,i;const f=(t,o,e)=>{if("undefined"==typeof document)return;const n=document.elementFromPoint(t,o);n&&a(n)?n!==c&&(m(),d(n,e)):m()},d=(o,e)=>{c=o,i||(i=c);const n=c;t(()=>n.classList.add("ion-activated")),e()},m=(o=!1)=>{if(!c)return;const e=c;t(()=>e.classList.remove("ion-activated")),o&&i!==c&&c.click(),c=void 0};return o({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>f(t.currentX,t.currentY,n),onMove:t=>f(t.currentX,t.currentY,r),onEnd:()=>{m(!0),e(),i=void 0}})};export{s as c}