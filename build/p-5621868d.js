import{c as n,i as t,a as r,b as a,d as u,m as i,s as e,e as o,f}from"./p-030496fe.js";var c=Math.sqrt(50),h=Math.sqrt(10),s=Math.sqrt(2);function M(n,t,r){var a=(t-n)/Math.max(0,r),u=Math.floor(Math.log(a)/Math.LN10),i=a/Math.pow(10,u);return u>=0?(i>=c?10:i>=h?5:i>=s?2:1)*Math.pow(10,u):-Math.pow(10,-u)/(i>=c?10:i>=h?5:i>=s?2:1)}function v(n,t){t||(t=[]);var r,a=n?Math.min(t.length,n.length):0,u=t.slice();return function(i){for(r=0;r<a;++r)u[r]=n[r]*(1-i)+t[r]*i;return u}}function l(n,t){var r,a=t?t.length:0,u=n?Math.min(a,n.length):0,i=new Array(u),e=new Array(a);for(r=0;r<u;++r)i[r]=N(n[r],t[r]);for(;r<a;++r)e[r]=t[r];return function(n){for(r=0;r<u;++r)e[r]=i[r](n);return e}}function d(n,t){var r=new Date;return n=+n,t=+t,function(a){return r.setTime(n*(1-a)+t*a),r}}function y(n,t){var r,a={},u={};for(r in null!==n&&"object"==typeof n||(n={}),null!==t&&"object"==typeof t||(t={}),t)r in n?a[r]=N(n[r],t[r]):u[r]=t[r];return function(n){for(r in a)u[r]=a[r](n);return u}}function N(i,e){var o,f,c=typeof e;return null==e||"boolean"===c?n(e):("number"===c?t:"string"===c?(o=r(e))?(e=o,a):u:e instanceof r?a:e instanceof Date?d:(f=e,!ArrayBuffer.isView(f)||f instanceof DataView?Array.isArray(e)?l:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?y:t:v))(i,e)}function w(n,t){return n=+n,t=+t,function(r){return Math.round(n*(1-r)+t*r)}}function b(n,t){if((r=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var r,a=n.slice(0,r);return[a.length>1?a[0]+a.slice(2):a,+n.slice(r+1)]}function p(n){return(n=b(Math.abs(n)))?n[1]:NaN}var m,A=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function g(n){if(!(t=A.exec(n)))throw new Error("invalid format: "+n);var t;return new k({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function k(n){this.fill=void 0===n.fill?" ":n.fill+"",this.align=void 0===n.align?">":n.align+"",this.sign=void 0===n.sign?"-":n.sign+"",this.symbol=void 0===n.symbol?"":n.symbol+"",this.zero=!!n.zero,this.width=void 0===n.width?void 0:+n.width,this.comma=!!n.comma,this.precision=void 0===n.precision?void 0:+n.precision,this.trim=!!n.trim,this.type=void 0===n.type?"":n.type+""}function $(n,t){var r=b(n,t);if(!r)return n+"";var a=r[0],u=r[1];return u<0?"0."+new Array(-u).join("0")+a:a.length>u+1?a.slice(0,u+1)+"."+a.slice(u+1):a+new Array(u-a.length+2).join("0")}g.prototype=k.prototype,k.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};const x={"%":function(n,t){return(100*n).toFixed(t)},b:function(n){return Math.round(n).toString(2)},c:function(n){return n+""},d:function(n){return Math.round(n).toString(10)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},g:function(n,t){return n.toPrecision(t)},o:function(n){return Math.round(n).toString(8)},p:function(n,t){return $(100*n,t)},r:$,s:function(n,t){var r=b(n,t);if(!r)return n+"";var a=r[0],u=r[1],i=u-(m=3*Math.max(-8,Math.min(8,Math.floor(u/3))))+1,e=a.length;return i===e?a:i>e?a+new Array(i-e+1).join("0"):i>0?a.slice(0,i)+"."+a.slice(i):"0."+new Array(1-i).join("0")+b(n,Math.max(0,t+i-1))[0]},X:function(n){return Math.round(n).toString(16).toUpperCase()},x:function(n){return Math.round(n).toString(16)}};function j(n){return n}var z,D,E,P=Array.prototype.map,X=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function B(n){return+n}z=function(n){var t,r,a=void 0===n.grouping||void 0===n.thousands?j:(t=P.call(n.grouping,Number),r=n.thousands+"",function(n,a){for(var u=n.length,i=[],e=0,o=t[0],f=0;u>0&&o>0&&(f+o+1>a&&(o=Math.max(1,a-f)),i.push(n.substring(u-=o,u+o)),!((f+=o+1)>a));)o=t[e=(e+1)%t.length];return i.reverse().join(r)}),u=void 0===n.currency?"":n.currency[0]+"",i=void 0===n.currency?"":n.currency[1]+"",e=void 0===n.decimal?".":n.decimal+"",o=void 0===n.numerals?j:function(n){return function(t){return t.replace(/[0-9]/g,(function(t){return n[+t]}))}}(P.call(n.numerals,String)),f=void 0===n.percent?"%":n.percent+"",c=void 0===n.minus?"-":n.minus+"",h=void 0===n.nan?"NaN":n.nan+"";function s(n){var t=(n=g(n)).fill,r=n.align,s=n.sign,M=n.symbol,v=n.zero,l=n.width,d=n.comma,y=n.precision,N=n.trim,w=n.type;"n"===w?(d=!0,w="g"):x[w]||(void 0===y&&(y=12),N=!0,w="g"),(v||"0"===t&&"="===r)&&(v=!0,t="0",r="=");var b="$"===M?u:"#"===M&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",p="$"===M?i:/[%p]/.test(w)?f:"",A=x[w],k=/[defgprs%]/.test(w);function $(n){var u,i,f,M=b,g=p;if("c"===w)g=A(n)+g,n="";else{var $=(n=+n)<0||1/n<0;if(n=isNaN(n)?h:A(Math.abs(n),y),N&&(n=function(n){n:for(var t,r=n.length,a=1,u=-1;a<r;++a)switch(n[a]){case".":u=t=a;break;case"0":0===u&&(u=a),t=a;break;default:if(!+n[a])break n;u>0&&(u=0)}return u>0?n.slice(0,u)+n.slice(t+1):n}(n)),$&&0==+n&&"+"!==s&&($=!1),M=($?"("===s?s:c:"-"===s||"("===s?"":s)+M,g=("s"===w?X[8+m/3]:"")+g+($&&"("===s?")":""),k)for(u=-1,i=n.length;++u<i;)if(48>(f=n.charCodeAt(u))||f>57){g=(46===f?e+n.slice(u+1):n.slice(u))+g,n=n.slice(0,u);break}}d&&!v&&(n=a(n,1/0));var x=M.length+n.length+g.length,j=x<l?new Array(l-x+1).join(t):"";switch(d&&v&&(n=a(j+n,j.length?l-g.length:1/0),j=""),r){case"<":n=M+n+g+j;break;case"=":n=M+j+n+g;break;case"^":n=j.slice(0,x=j.length>>1)+M+n+g+j.slice(x);break;default:n=j+M+n+g}return o(n)}return y=void 0===y?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y)),$.toString=function(){return n+""},$}return{format:s,formatPrefix:function(n,t){var r=s(((n=g(n)).type="f",n)),a=3*Math.max(-8,Math.min(8,Math.floor(p(t)/3))),u=Math.pow(10,-a),i=X[8+a/3];return function(n){return r(u*n)+i}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),D=z.format,E=z.formatPrefix;var F=[0,1];function G(n){return n}function S(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:(r=isNaN(t)?NaN:.5,function(){return r});var r}function T(n){var t,r=n[0],a=n[n.length-1];return r>a&&(t=r,r=a,a=t),function(n){return Math.max(r,Math.min(a,n))}}function V(n,t,r){var a=n[0],u=n[1],i=t[0],e=t[1];return u<a?(a=S(u,a),i=r(e,i)):(a=S(a,u),i=r(i,e)),function(n){return i(a(n))}}function Y(n,t,r){var a=Math.min(n.length,t.length)-1,u=new Array(a),i=new Array(a),e=-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++e<a;)u[e]=S(n[e],n[e+1]),i[e]=r(t[e],t[e+1]);return function(t){var r=o(n,t,1,a)-1;return i[r](u[r](t))}}function Z(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function q(n,r){return function(){var n,r,a,u,o,f,c=F,h=F,s=N,M=G;function v(){return u=Math.min(c.length,h.length)>2?Y:V,o=f=null,l}function l(t){return isNaN(t=+t)?a:(o||(o=u(c.map(n),h,s)))(n(M(t)))}return l.invert=function(a){return M(r((f||(f=u(h,c.map(n),t)))(a)))},l.domain=function(n){return arguments.length?(c=i.call(n,B),M===G||(M=T(c)),v()):c.slice()},l.range=function(n){return arguments.length?(h=e.call(n),v()):h.slice()},l.rangeRound=function(n){return h=e.call(n),s=w,v()},l.clamp=function(n){return arguments.length?(M=n?T(c):G,l):M!==G},l.interpolate=function(n){return arguments.length?(s=n,v()):s},l.unknown=function(n){return arguments.length?(a=n,l):a},function(t,a){return n=t,r=a,v()}}()(n,r)}function C(n){var t=n.domain;return n.ticks=function(n){var r=t();return function(n,t,r){var a,u,i,e,o=-1;if(r=+r,(n=+n)==(t=+t)&&r>0)return[n];if((a=t<n)&&(u=n,n=t,t=u),0===(e=M(n,t,r))||!isFinite(e))return[];if(e>0)for(n=Math.ceil(n/e),t=Math.floor(t/e),i=new Array(u=Math.ceil(t-n+1));++o<u;)i[o]=(n+o)*e;else for(n=Math.floor(n*e),t=Math.ceil(t*e),i=new Array(u=Math.ceil(n-t+1));++o<u;)i[o]=(n-o)/e;return a&&i.reverse(),i}(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var a=t();return function(n,t,r,a){var u,i=function(n,t,r){var a=Math.abs(t-n)/Math.max(0,r),u=Math.pow(10,Math.floor(Math.log(a)/Math.LN10)),i=a/u;return i>=c?u*=10:i>=h?u*=5:i>=s&&(u*=2),t<n?-u:u}(n,t,r);switch((a=g(null==a?",f":a)).type){case"s":var e=Math.max(Math.abs(n),Math.abs(t));return null!=a.precision||isNaN(u=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(p(t)/3)))-p(Math.abs(n)))}(i,e))||(a.precision=u),E(a,e);case"":case"e":case"g":case"p":case"r":null!=a.precision||isNaN(u=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,p(t)-p(n))+1}(i,Math.max(Math.abs(n),Math.abs(t))))||(a.precision=u-("e"===a.type));break;case"f":case"%":null!=a.precision||isNaN(u=function(n){return Math.max(0,-p(Math.abs(n)))}(i))||(a.precision=u-2*("%"===a.type))}return D(a)}(a[0],a[a.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var a,u=t(),i=0,e=u.length-1,o=u[i],f=u[e];return f<o&&(a=o,o=f,f=a,a=i,i=e,e=a),(a=M(o,f,r))>0?a=M(o=Math.floor(o/a)*a,f=Math.ceil(f/a)*a,r):a<0&&(a=M(o=Math.ceil(o*a)/a,f=Math.floor(f*a)/a,r)),a>0?(u[i]=Math.floor(o/a)*a,u[e]=Math.ceil(f/a)*a,t(u)):a<0&&(u[i]=Math.ceil(o*a)/a,u[e]=Math.floor(f*a)/a,t(u)),n},n}function H(){var n=q(G,G);return n.copy=function(){return Z(n,H())},f.apply(n,arguments),C(n)}export{H as l}