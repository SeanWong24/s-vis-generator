import{w as t}from"./p-f5cfe7fe.js";import{h as o,a as e,b as n}from"./p-46875cf6.js";import{createGesture as r}from"./p-03389897.js";const s=(s,a)=>{let c,i;const f=(t,o,e)=>{if("undefined"==typeof document)return;const n=document.elementFromPoint(t,o);n&&a(n)?n!==c&&(m(),d(n,e)):m()},d=(o,e)=>{c=o,i||(i=c);const n=c;t(()=>n.classList.add("ion-activated")),e()},m=(o=!1)=>{if(!c)return;const e=c;t(()=>e.classList.remove("ion-activated")),o&&i!==c&&c.click(),c=void 0};return r({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>f(t.currentX,t.currentY,e),onMove:t=>f(t.currentX,t.currentY,n),onEnd:()=>{m(!0),o(),i=void 0}})};export{s as c}