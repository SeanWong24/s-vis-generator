var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="app";var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=false;var c=typeof window!=="undefined"?window:{};var v=c.CSS;var d=c.document||{head:{}};var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var h=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var p=function(e){return Promise.resolve(e)};var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=function(e,r,t,n){if(t){{if(n){t=t.filter((function(e){var r=e[0];return r&16}))}else{t=t.filter((function(e){var r=e[0];return!(r&16)}))}}t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=w(e,n);var o=b(r,i);var l=R(n);m.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return m.rel(s,a,o,l)}))}))}};var b=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var w=function(e,r){if(r&4)return d;if(r&8)return c;if(r&32)return d.body;if(r&16)return e.parentElement;return e};var R=function(e){return(e&2)!==0};var N="{visibility:hidden}.hydrated{visibility:inherit}";var S="http://www.w3.org/1999/xlink";var _=function(e,r){if(r===void 0){r=""}{return function(){return}}};var x=function(e,r){{return function(){return}}};var k=new WeakMap;var L=function(e,r,t){var n=We.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}We.set(e,n)};var T=function(e,r,t,n){var a=j(r,t);var i=We.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=k.get(e);var o=void 0;if(!s){k.set(e,s=new Set)}if(!s.has(a)){{if(m.$cssShim$){o=m.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var C=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=_("attachStyles",r.$tagName$);var i=T(h&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h");if(n&2){t.classList.add(i+"-s")}}a()};var j=function(e,r){return"sc-"+(r&&e.$flags$&32?e.$tagName$+"-"+r:e.$tagName$)};var E=function(e){return Ge.map((function(r){return r(e)})).find((function(e){return!!e}))};var A=e("s",(function(e){return Ge.push(e)}));var I=e("g",(function(e){return Be(e).$modeName$}));var P={};var M="http://www.w3.org/2000/svg";var O="http://www.w3.org/1999/xhtml";var U=function(e){return e!=null};var B=function(e){e=typeof e;return e==="object"||e==="function"};var z=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var q=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!B(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?H(null,a):a)}l=o}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,V)}var c=H(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var H=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var D=e("H",{});var F=function(e){return e&&e.$tag$===D};var V={forEach:function(e,r){return e.map(W).forEach(r)},map:function(e,r){return e.map(W).map(r).map(G)}};var W=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var G=function(e){var r=H(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var J=function(e,r,t,n,a,i){if(t!==n){var s=He(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=Q(t);var $=Q(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(He(c,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){m.rel(e,r,t,false)}if(n){m.ael(e,r,n,false)}}else{var v=B(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(p){}}var h=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;h=true}}if(n==null||n===false){if(h){e.removeAttributeNS(S,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!v){n=n===true?"":n;if(h){e.setAttributeNS(S,r,n)}else{e.setAttribute(r,n)}}}}};var K=/\s/;var Q=function(e){return!e?[]:e.split(K)};var X=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var s=r.$attrs$||P;{for(n in i){if(!(n in s)){J(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){J(a,n,i[n],s[n],t,r.$flags$)}};var Y=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var m;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=d.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=d.createTextNode("")}else{if(!$){$=l.$tag$==="svg"}c=l.$elm$=d.createElementNS($?M:O,l.$flags$&2?"slot-fb":l.$tag$);if($&&l.$tag$==="foreignObject"){$=false}{X(null,l,$)}if(U(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=Y(e,l,u,c);if(v){c.appendChild(v)}}}{if(l.$tag$==="svg"){$=false}else if(c.tagName==="foreignObject"){$=true}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";m=e&&e.$children$&&e.$children$[t];if(m&&m.$tag$===l.$tag$&&e.$elm$){Z(e.$elm$,false)}}}return c};var Z=function(e,r){m.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){ie(a).insertBefore(a,ae(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){Z(a,r)}}m.$flags$&=~1};var ee=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=Y(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,ae(r))}}}};var re=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;ue(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{Z(a,true)}}a.remove()}}};var te=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var $=r[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var m;while(a<=l&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(ne(f,c)){se(f,c);f=r[++a];c=n[++i]}else if(ne($,v)){se($,v);$=r[--l];v=n[--u]}else if(ne(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){Z(f.$elm$.parentNode,false)}se(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(ne($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){Z($.$elm$.parentNode,false)}se($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){m=r[s];if(m.$tag$!==c.$tag$){d=Y(r&&r[i],t,s,e)}else{se(m,c);r[s]=undefined;d=m.$elm$}c=n[++i]}else{d=Y(r&&r[i],t,i,e);c=n[++i]}if(d){{ie(f.$elm$).insertBefore(d,ae(f.$elm$))}}}}if(a>l){ee(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){re(r,a,l)}};var ne=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var ae=function(e){return e&&e["s-ol"]||e};var ie=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var se=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{X(e,r,$)}}if(n!==null&&a!==null){te(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}ee(t,null,r,a,0,a.length-1)}else if(n!==null){re(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var oe=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}oe(t)}}};var le=[];var fe=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if($e(t,a)){i=le.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{le.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){le.map((function(e){if($e(e.$nodeToRelocate$,t["s-sn"])){i=le.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!le.some((function(e){return e.$nodeToRelocate$===t}))){le.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){fe(r)}}};var $e=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var ue=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(ue)}};var ce=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||H(null,null);var u=F(r)?r:q(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=h&&(n.$flags$&1)!==0;l=false}se($,u);{m.$flags$|=1;if(f){fe(u.$elm$);var c=void 0;var v=void 0;var p=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<le.length;w++){c=le[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){p=d.createTextNode("");p["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=p,v)}}for(w=0;w<le.length;w++){c=le[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;p=v["s-ol"];while(p=p.previousSibling){b=p["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){oe(u.$elm$)}m.$flags$&=~1;le.length=0}};var ve=e("c",(function(e){return Be(e).$hostElement$}));var de=e("d",(function(e,r,t){var n=ve(e);return{emit:function(e){return me(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var me=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var he=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var pe=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}he(e,e.$ancestorComponent$);var t=function(){return ge(e,r)};return rr(t)};var ge=function(e,r){var t=_("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return Se(n,r,t)}));e.$queuedListeners$=null}}{a=Se(n,"componentWillLoad")}}{a=_e(a,(function(){return Se(n,"componentWillRender")}))}t();return _e(a,(function(){return ye(e,n,r)}))};var ye=function(e,r,t){var n=e.$hostElement$;var a=_("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){C(e)}var s=_("render",e.$cmpMeta$.$tagName$);{{ce(e,be(e,r))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return we(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var be=function(e,r){try{r=r.render&&r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){De(t)}return r};var we=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=_("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{xe(t)}{Se(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){Ne()}}}else{{Se(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ze((function(){return pe(e,false)}))}e.$flags$&=~(4|512)}};var Re=e("f",(function(e){{var r=Be(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){pe(r,false)}return t}}));var Ne=function(e){{xe(d.documentElement)}Ze((function(){return me(c,"appload",{detail:{namespace:n}})}))};var Se=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){De(n)}}return undefined};var _e=function(e,r){return e&&e.then?e.then(r):r()};var xe=function(e){return e.classList.add("hydrated")};var ke=function(e,r){if(e!=null&&!B(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Le=function(e,r){return Be(e).$instanceValues$.get(r)};var Te=function(e,r,t,n){var a=Be(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=ke(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){De(n)}}))}}if((s&(2|16))===2){pe(a,false)}}}};var Ce=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Le(this,n)},set:function(e){Te(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=Be(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;m.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var je=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,o,l,f,$,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;if(n.$modeName$==null){n.$modeName$=typeof a.$lazyBundleIds$!=="string"?E(e):""}s=Ve(a,n);if(!s.then)return[3,2];t=x();return[4,s];case 1:s=c.sent();t();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Ce(s,a,2);s.isProxied=true}i=_("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){De(v)}{n.$flags$&=~8}{n.$flags$|=128}i();Ee(n.$lazyInstance$);o=j(a,n.$modeName$);if(!(!We.has(o)&&s.style))return[3,5];l=_("registerStyles",a.$tagName$);f=s.style;if(typeof f!=="string"){f=f[n.$modeName$]}if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-cb0bfb69.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=c.sent();c.label=4;case 4:L(o,f,!!(a.$flags$&1));l();c.label=5;case 5:$=n.$ancestorComponent$;u=function(){return pe(n,true)};if($&&$["s-rc"]){$["s-rc"].push(u)}else{u()}return[2]}}))}))};var Ee=function(e){{Se(e,"connectedCallback")}};var Ae=function(e){if((m.$flags$&1)===0){var r=Be(e);var t=r.$cmpMeta$;var n=_("connectedCallback",t.$tagName$);{y(e,r,t.$listeners$,true)}if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){Ie(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){he(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ze((function(){return je(e,r,t)}))}}else{y(e,r,t.$listeners$,false);Ee(r.$lazyInstance$)}n()}};var Ie=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Pe=function(e){if((m.$flags$&1)===0){var r=Be(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Se(t,"disconnectedCallback")}{Se(t,"componentDidUnload")}}};var Me=e("b",(function(e,r){if(r===void 0){r={}}var t=_();var n=[];var a=r.exclude||[];var i=c.customElements;var s=d.head;var o=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $;var u=true;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!h&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;qe(r,t);if(t.$flags$&1){if(h){{r.attachShadow({mode:"open",delegatesFocus:!!(t.$flags$&16)})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{m.jmp((function(){return Ae(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return Pe(e)}))};r.prototype.forceUpdate=function(){Re(this)};r.prototype.componentOnReady=function(){return Be(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Ce(o,t,1))}}))}));{l.innerHTML=n+N;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return $=setTimeout(Ne,30)}))}}t()}));var Oe=e("i",(function(e){var r=new URL(e,m.$resourcesUrl$);return r.origin!==c.location.origin?r.href:r.pathname}));var Ue=new WeakMap;var Be=function(e){return Ue.get(e)};var ze=e("r",(function(e,r){return Ue.set(r.$lazyInstance$=e,r)}));var qe=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}y(e,t,r.$listeners$,false);return Ue.set(e,t)};var He=function(e,r){return r in e};var De=function(e){return console.error(e)};var Fe=new Map;var Ve=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=typeof e.$lazyBundleIds$!=="string"?e.$lazyBundleIds$[t.$modeName$]:e.$lazyBundleIds$;var s=Fe.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Fe.set(i,e)}return e[a]}),De)};var We=new Map;var Ge=[];var Je=[];var Ke=[];var Qe=function(e,r){return function(t){e.push(t);if(!u){u=true;if(r&&m.$flags$&4){Ze(Ye)}else{m.raf(Ye)}}}};var Xe=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){De(t)}}e.length=0};var Ye=function(){Xe(Je);{Xe(Ke);if(u=Je.length>0){m.raf(Ye)}}};var Ze=function(e){return p().then(e)};var er=e("e",Qe(Je,false));var rr=e("w",Qe(Ke,true));var tr=e("B",{isDev:false,isBrowser:true,isServer:false,isTesting:false});var nr=e("a",(function(){if(!(v&&v.supports&&v.supports("color","var(--c)"))){return r.import("./p-b2525e42.system.js").then((function(){if(m.$cssShim$=c.__cssshim){return m.$cssShim$.i()}else{return 0}}))}return p()}));var ar=e("p",(function(){{m.$cssShim$=c.__cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href;{ir(t.resourcesUrl,e)}if(!c.customElements){return r.import("./p-67940bdc.system.js").then((function(){return t}))}}return p(t)}));var ir=function(e,r){var t=z(n);try{c[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;c[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=d.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(c[t].m);o.remove()}}));a.set(i,s);d.head.appendChild(o)}return s}}}}}}));