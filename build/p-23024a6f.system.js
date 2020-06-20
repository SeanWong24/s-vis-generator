System.register(["./p-5ddd3057.system.js"],(function(n){"use strict";var t,r,e,i,a,u,o,f,c;return{setters:[function(n){t=n.c;r=n.i;e=n.a;i=n.b;a=n.d;u=n.m;o=n.s;f=n.e;c=n.f}],execute:function(){n("l",un);var l=Math.sqrt(50),s=Math.sqrt(10),h=Math.sqrt(2);function d(n,t,r){var e,i=-1,a,u,o;t=+t,n=+n,r=+r;if(n===t&&r>0)return[n];if(e=t<n)a=n,n=t,t=a;if((o=m(n,t,r))===0||!isFinite(o))return[];if(o>0){n=Math.ceil(n/o);t=Math.floor(t/o);u=new Array(a=Math.ceil(t-n+1));while(++i<a)u[i]=(n+i)*o}else{n=Math.floor(n*o);t=Math.ceil(t*o);u=new Array(a=Math.ceil(n-t+1));while(++i<a)u[i]=(n-i)/o}if(e)u.reverse();return u}function m(n,t,r){var e=(t-n)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),a=e/Math.pow(10,i);return i>=0?(a>=l?10:a>=s?5:a>=h?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=l?10:a>=s?5:a>=h?2:1)}function M(n,t,r){var e=Math.abs(t-n)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),a=e/i;if(a>=l)i*=10;else if(a>=s)i*=5;else if(a>=h)i*=2;return t<n?-i:i}function g(n,t){if(!t)t=[];var r=n?Math.min(t.length,n.length):0,e=t.slice(),i;return function(a){for(i=0;i<r;++i)e[i]=n[i]*(1-a)+t[i]*a;return e}}function p(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function v(n,t){var r=t?t.length:0,e=n?Math.min(r,n.length):0,i=new Array(e),a=new Array(r),u;for(u=0;u<e;++u)i[u]=b(n[u],t[u]);for(;u<r;++u)a[u]=t[u];return function(n){for(u=0;u<e;++u)a[u]=i[u](n);return a}}function y(n,t){var r=new Date;return n=+n,t=+t,function(e){return r.setTime(n*(1-e)+t*e),r}}function w(n,t){var r={},e={},i;if(n===null||typeof n!=="object")n={};if(t===null||typeof t!=="object")t={};for(i in t){if(i in n){r[i]=b(n[i],t[i])}else{e[i]=t[i]}}return function(n){for(i in r)e[i]=r[i](n);return e}}function b(n,u){var o=typeof u,f;return u==null||o==="boolean"?t(u):(o==="number"?r:o==="string"?(f=e(u))?(u=f,i):a:u instanceof e?i:u instanceof Date?y:p(u)?g:Array.isArray(u)?v:typeof u.valueOf!=="function"&&typeof u.toString!=="function"||isNaN(u)?w:r)(n,u)}function x(n,t){return n=+n,t=+t,function(r){return Math.round(n*(1-r)+t*r)}}function N(n,t){if((r=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var r,e=n.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+n.slice(r+1)]}function k(n){return n=N(Math.abs(n)),n?n[1]:NaN}function A(n,t){return function(r,e){var i=r.length,a=[],u=0,o=n[0],f=0;while(i>0&&o>0){if(f+o+1>e)o=Math.max(1,e-f);a.push(r.substring(i-=o,i+o));if((f+=o+1)>e)break;o=n[u=(u+1)%n.length]}return a.reverse().join(t)}}function S(n){return function(t){return t.replace(/[0-9]/g,(function(t){return n[+t]}))}}var j=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function z(n){if(!(t=j.exec(n)))throw new Error("invalid format: "+n);var t;return new E({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}z.prototype=E.prototype;function E(n){this.fill=n.fill===undefined?" ":n.fill+"";this.align=n.align===undefined?">":n.align+"";this.sign=n.sign===undefined?"-":n.sign+"";this.symbol=n.symbol===undefined?"":n.symbol+"";this.zero=!!n.zero;this.width=n.width===undefined?undefined:+n.width;this.comma=!!n.comma;this.precision=n.precision===undefined?undefined:+n.precision;this.trim=!!n.trim;this.type=n.type===undefined?"":n.type+""}E.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===undefined?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===undefined?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function $(n){n:for(var t=n.length,r=1,e=-1,i;r<t;++r){switch(n[r]){case".":e=i=r;break;case"0":if(e===0)e=r;i=r;break;default:if(!+n[r])break n;if(e>0)e=0;break}}return e>0?n.slice(0,e)+n.slice(i+1):n}var F;function P(n,t){var r=N(n,t);if(!r)return n+"";var e=r[0],i=r[1],a=i-(F=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,u=e.length;return a===u?e:a>u?e+new Array(a-u+1).join("0"):a>0?e.slice(0,a)+"."+e.slice(a):"0."+new Array(1-a).join("0")+N(n,Math.max(0,t+a-1))[0]}function q(n,t){var r=N(n,t);if(!r)return n+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}var C={"%":function(n,t){return(n*100).toFixed(t)},b:function(n){return Math.round(n).toString(2)},c:function(n){return n+""},d:function(n){return Math.round(n).toString(10)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},g:function(n,t){return n.toPrecision(t)},o:function(n){return Math.round(n).toString(8)},p:function(n,t){return q(n*100,t)},r:q,s:P,X:function(n){return Math.round(n).toString(16).toUpperCase()},x:function(n){return Math.round(n).toString(16)}};function D(n){return n}var L=Array.prototype.map,I=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function O(n){var t=n.grouping===undefined||n.thousands===undefined?D:A(L.call(n.grouping,Number),n.thousands+""),r=n.currency===undefined?"":n.currency[0]+"",e=n.currency===undefined?"":n.currency[1]+"",i=n.decimal===undefined?".":n.decimal+"",a=n.numerals===undefined?D:S(L.call(n.numerals,String)),u=n.percent===undefined?"%":n.percent+"",o=n.minus===undefined?"-":n.minus+"",f=n.nan===undefined?"NaN":n.nan+"";function c(n){n=z(n);var c=n.fill,l=n.align,s=n.sign,h=n.symbol,d=n.zero,m=n.width,M=n.comma,g=n.precision,p=n.trim,v=n.type;if(v==="n")M=true,v="g";else if(!C[v])g===undefined&&(g=12),p=true,v="g";if(d||c==="0"&&l==="=")d=true,c="0",l="=";var y=h==="$"?r:h==="#"&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",w=h==="$"?e:/[%p]/.test(v)?u:"";var b=C[v],x=/[defgprs%]/.test(v);g=g===undefined?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));function N(n){var r=y,e=w,u,h,N;if(v==="c"){e=b(n)+e;n=""}else{n=+n;var k=n<0||1/n<0;n=isNaN(n)?f:b(Math.abs(n),g);if(p)n=$(n);if(k&&+n===0&&s!=="+")k=false;r=(k?s==="("?s:o:s==="-"||s==="("?"":s)+r;e=(v==="s"?I[8+F/3]:"")+e+(k&&s==="("?")":"");if(x){u=-1,h=n.length;while(++u<h){if(N=n.charCodeAt(u),48>N||N>57){e=(N===46?i+n.slice(u+1):n.slice(u))+e;n=n.slice(0,u);break}}}}if(M&&!d)n=t(n,Infinity);var A=r.length+n.length+e.length,S=A<m?new Array(m-A+1).join(c):"";if(M&&d)n=t(S+n,S.length?m-e.length:Infinity),S="";switch(l){case"<":n=r+n+e+S;break;case"=":n=r+S+n+e;break;case"^":n=S.slice(0,A=S.length>>1)+r+n+e+S.slice(A);break;default:n=S+r+n+e;break}return a(n)}N.toString=function(){return n+""};return N}function l(n,t){var r=c((n=z(n),n.type="f",n)),e=Math.max(-8,Math.min(8,Math.floor(k(t)/3)))*3,i=Math.pow(10,-e),a=I[8+e/3];return function(n){return r(i*n)+a}}return{format:c,formatPrefix:l}}var T;var V;var X;B({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"});function B(n){T=O(n);V=T.format;X=T.formatPrefix;return T}function G(n){return Math.max(0,-k(Math.abs(n)))}function R(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(k(t)/3)))*3-k(Math.abs(n)))}function U(n,t){n=Math.abs(n),t=Math.abs(t)-n;return Math.max(0,k(t)-k(n))+1}function Y(n){return function(){return n}}function Z(n){return+n}var H=[0,1];function J(n){return n}function K(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:Y(isNaN(t)?NaN:.5)}function Q(n){var t=n[0],r=n[n.length-1],e;if(t>r)e=t,t=r,r=e;return function(n){return Math.max(t,Math.min(r,n))}}function W(n,t,r){var e=n[0],i=n[1],a=t[0],u=t[1];if(i<e)e=K(i,e),a=r(u,a);else e=K(e,i),a=r(a,u);return function(n){return a(e(n))}}function _(n,t,r){var e=Math.min(n.length,t.length)-1,i=new Array(e),a=new Array(e),u=-1;if(n[e]<n[0]){n=n.slice().reverse();t=t.slice().reverse()}while(++u<e){i[u]=K(n[u],n[u+1]);a[u]=r(t[u],t[u+1])}return function(t){var r=f(n,t,1,e)-1;return a[r](i[r](t))}}function nn(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function tn(){var n=H,t=H,e=b,i,a,f,c=J,l,s,h;function d(){l=Math.min(n.length,t.length)>2?_:W;s=h=null;return m}function m(r){return isNaN(r=+r)?f:(s||(s=l(n.map(i),t,e)))(i(c(r)))}m.invert=function(e){return c(a((h||(h=l(t,n.map(i),r)))(e)))};m.domain=function(t){return arguments.length?(n=u.call(t,Z),c===J||(c=Q(n)),d()):n.slice()};m.range=function(n){return arguments.length?(t=o.call(n),d()):t.slice()};m.rangeRound=function(n){return t=o.call(n),e=x,d()};m.clamp=function(t){return arguments.length?(c=t?Q(n):J,m):c!==J};m.interpolate=function(n){return arguments.length?(e=n,d()):e};m.unknown=function(n){return arguments.length?(f=n,m):f};return function(n,t){i=n,a=t;return d()}}function rn(n,t){return tn()(n,t)}function en(n,t,r,e){var i=M(n,t,r),a;e=z(e==null?",f":e);switch(e.type){case"s":{var u=Math.max(Math.abs(n),Math.abs(t));if(e.precision==null&&!isNaN(a=R(i,u)))e.precision=a;return X(e,u)}case"":case"e":case"g":case"p":case"r":{if(e.precision==null&&!isNaN(a=U(i,Math.max(Math.abs(n),Math.abs(t)))))e.precision=a-(e.type==="e");break}case"f":case"%":{if(e.precision==null&&!isNaN(a=G(i)))e.precision=a-(e.type==="%")*2;break}}return V(e)}function an(n){var t=n.domain;n.ticks=function(n){var r=t();return d(r[0],r[r.length-1],n==null?10:n)};n.tickFormat=function(n,r){var e=t();return en(e[0],e[e.length-1],n==null?10:n,r)};n.nice=function(r){if(r==null)r=10;var e=t(),i=0,a=e.length-1,u=e[i],o=e[a],f;if(o<u){f=u,u=o,o=f;f=i,i=a,a=f}f=m(u,o,r);if(f>0){u=Math.floor(u/f)*f;o=Math.ceil(o/f)*f;f=m(u,o,r)}else if(f<0){u=Math.ceil(u*f)/f;o=Math.floor(o*f)/f;f=m(u,o,r)}if(f>0){e[i]=Math.floor(u/f)*f;e[a]=Math.ceil(o/f)*f;t(e)}else if(f<0){e[i]=Math.ceil(u*f)/f;e[a]=Math.floor(o*f)/f;t(e)}return n};return n}function un(){var n=rn(J,J);n.copy=function(){return nn(n,un())};c.apply(n,arguments);return an(n)}}}}));