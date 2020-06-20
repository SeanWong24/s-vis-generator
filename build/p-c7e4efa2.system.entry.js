var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),r=0,e=0;e<n;e++)for(var a=arguments[e],o=0,c=a.length;o<c;o++,r++)i[r]=a[o];return i};System.register(["./p-acc39b4b.system.js","./p-5ddd3057.system.js","./p-3a86a9d7.system.js"],(function(t){"use strict";var e,n,i,r,a,o,c,s,u,l,h,d;return{setters:[function(t){e=t.r;n=t.d;i=t.h;r=t.H;a=t.c},function(t){o=t.h;c=t.f;s=t.s},function(t){u=t.A;l=t.s;h=t.m;d=t.p}],execute:function(){function g(t,e){var n=t.length,i=-1,r,a=0;if(e==null){while(++i<n){if(r=+t[i])a+=r}}else{while(++i<n){if(r=+e(t[i],i,t))a+=r}}return a}var f={name:"implicit"};function m(){var t=o(),e=[],n=[],i=f;function r(r){var a=r+"",o=t.get(a);if(!o){if(i!==f)return i;t.set(a,o=e.push(r))}return n[(o-1)%n.length]}r.domain=function(n){if(!arguments.length)return e.slice();e=[],t=o();var i=-1,a=n.length,c,s;while(++i<a)if(!t.has(s=(c=n[i])+""))t.set(s,e.push(c));return r};r.range=function(t){return arguments.length?(n=s.call(t),r):n.slice()};r.unknown=function(t){return arguments.length?(i=t,r):i};r.copy=function(){return m(e,n).unknown(i)};c.apply(r,arguments);return r}var v=function(){function t(){this.valueHistory=[];this.dataRecordList=[];this.segmentPosition=[0,0];this.mergedSegmentAdjustmentRatio=0;this.adjustmentRatio=1}Object.defineProperty(t.prototype,"adjustedSegmentPosition",{get:function(){return this._adjustedSegmentPosition||this.segmentPosition},set:function(t){this._adjustedSegmentPosition=t},enumerable:false,configurable:true});return t}();function p(t,e){if(t<e){return-1}else if(t>e){return 1}else{return 0}}var x=function(){return"".concat(Math.random().toString(36),"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)};var y=function(){var t=20;var e="";var n=2;var i=false;var r="#343434";var a="#343434";var o=0;var c=x();var s=function s(u){var l=u.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",t).attr("height",t);if(e){l.append("rect").attr("width",t).attr("height",t).attr("fill",e)}l.append("circle").attr("cx",t/2).attr("cy",t/2).attr("r",n).attr("fill",r).attr("stroke",a).attr("stroke-width",o);if(i){[[0,0],[0,t],[t,0],[t,t]].forEach((function(t){l.append("circle").attr("cx",t[0]).attr("cy",t[1]).attr("r",n).attr("fill",r).attr("stroke",a).attr("stroke-width",o)}))}};s.heavier=function(t){if(arguments.length===0){n*=2}else{n*=2*t}return s};s.lighter=function(t){if(arguments.length===0){n/=2}else{n/=2*t}return s};s.thinner=function(e){if(arguments.length===0){t*=2}else{t*=2*e}return s};s.thicker=function(e){if(arguments.length===0){t/=2}else{t/=2*e}return s};s.background=function(t){e=t;return s};s.size=function(e){t=e;return s};s.complement=function(t){if(arguments.length===0){i=true}else{i=t}return s};s.radius=function(t){n=t;return s};s.fill=function(t){r=t;return s};s.stroke=function(t){a=t;return s};s.strokeWidth=function(t){o=t;return s};s.id=function(t){if(arguments.length===0){return c}c=t;return s};s.url=function(){return"url(#".concat(c,")")};return s};var b=function(){var t=20;var e="#343434";var n=2;var i="";var r=x();var a=["diagonal"];var o="auto";var c=function e(n){var i=t;switch(n){case"0/8":case"vertical":return"M ".concat(i/2,", 0 l 0, ").concat(i);case"1/8":return"M ".concat(i/4,",0 l ").concat(i/2,",").concat(i," M ").concat(-i/4,",0 l ").concat(i/2,",").concat(i," M ").concat(i*3/4,",0 l ").concat(i/2,",").concat(i);case"2/8":case"diagonal":return"M 0,".concat(i," l ").concat(i,",").concat(-i," M ").concat(-i/4,",").concat(i/4," l ").concat(i/2,",").concat(-i/2," M ").concat(3/4*i,",").concat(5/4*i," l ").concat(i/2,",").concat(-i/2);case"3/8":return"M 0,".concat(3/4*i," l ").concat(i,",").concat(-i/2," M 0,").concat(i/4," l ").concat(i,",").concat(-i/2," M 0,").concat(i*5/4," l ").concat(i,",").concat(-i/2);case"4/8":case"horizontal":return"M 0,".concat(i/2," l ").concat(i,",0");case"5/8":return"M 0,".concat(-i/4," l ").concat(i,",").concat(i/2,"M 0,").concat(i/4," l ").concat(i,",").concat(i/2," M 0,").concat(i*3/4," l ").concat(i,",").concat(i/2);case"6/8":return"M 0,0 l ".concat(i,",").concat(i," M ").concat(-i/4,",").concat(3/4*i," l ").concat(i/2,",").concat(i/2," M ").concat(i*3/4,",").concat(-i/4," l ").concat(i/2,",").concat(i/2);case"7/8":return"M ".concat(-i/4,",0 l ").concat(i/2,",").concat(i," M ").concat(i/4,",0 l ").concat(i/2,",").concat(i," M ").concat(i*3/4,",0 l ").concat(i/2,",").concat(i);default:return"M ".concat(i/2,", 0 l 0, ").concat(i)}};var s=function s(u){var l=u.append("defs").append("pattern").attr("id",r).attr("patternUnits","userSpaceOnUse").attr("width",t).attr("height",t);if(i){l.append("rect").attr("width",t).attr("height",t).attr("fill",i)}a.forEach((function(t){l.append("path").attr("d",c(t)).attr("stroke-width",n).attr("shape-rendering",o).attr("stroke",e).attr("stroke-linecap","square")}))};s.heavier=function(t){if(arguments.length===0){n*=2}else{n*=2*t}return s};s.lighter=function(t){if(arguments.length===0){n/=2}else{n/=2*t}return s};s.thinner=function(e){if(arguments.length===0){t*=2}else{t*=2*e}return s};s.thicker=function(e){if(arguments.length===0){t/=2}else{t/=2*e}return s};s.background=function(t){i=t;return s};s.size=function(e){t=e;return s};s.orientation=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++){e[n]=arguments[n]}if(arguments.length===0){return s}a=e;return s};s.shapeRendering=function(t){o=t;return s};s.stroke=function(t){e=t;return s};s.strokeWidth=function(t){n=t;return s};s.id=function(t){if(arguments.length===0){return r}r=t;return s};s.url=function(){return"url(#".concat(r,")")};return s};var M=function(){var t=1;var e=1;var n=20;var i="#343434";var r=2;var a="";var o=function t(e){return"M ".concat(e/4,",").concat(e*3/4,"l").concat(e/4,",").concat(-e/2,"l").concat(e/4,",").concat(e/2)};var c=x();var s="transparent";var u="auto";var l=function i(r){var a=n;switch(r){case"squares":return"M ".concat(a/4," ").concat(a/4," l ").concat(a/2," 0 l 0 ").concat(a/2," l ").concat(-a/2," 0 Z");case"nylon":return"M 0 ".concat(a/4," l ").concat(a/4," 0 l 0 ").concat(-a/4," M ").concat(a*3/4," ").concat(a," l 0 ").concat(-a/4," l ").concat(a/4," 0 M ").concat(a/4," ").concat(a/2," l 0 ").concat(a/4," l ").concat(a/4," 0 M ").concat(a/2," ").concat(a/4," l ").concat(a/4," 0 l 0 ").concat(a/4);case"waves":return"M 0 ".concat(a/2," c ").concat(a/8," ").concat(-a/4," , ").concat(a*3/8," ").concat(-a/4," , ").concat(a/2," 0 c ").concat(a/8," ").concat(a/4," , ").concat(a*3/8," ").concat(a/4," , ").concat(a/2," 0 M ").concat(-a/2," ").concat(a/2," c ").concat(a/8," ").concat(a/4," , ").concat(a*3/8," ").concat(a/4," , ").concat(a/2," 0 M ").concat(a," ").concat(a/2," c ").concat(a/8," ").concat(-a/4," , ").concat(a*3/8," ").concat(-a/4," , ").concat(a/2," 0");case"woven":return"M ".concat(a/4,",").concat(a/4,"l").concat(a/2,",").concat(a/2,"M").concat(a*3/4,",").concat(a/4,"l").concat(a/2,",").concat(-a/2," M").concat(a/4,",").concat(a*3/4,"l").concat(-a/2,",").concat(a/2,"M").concat(a*3/4,",").concat(a*5/4,"l").concat(a/2,",").concat(-a/2," M").concat(-a/4,",").concat(a/4,"l").concat(a/2,",").concat(-a/2);case"crosses":return"M ".concat(a/4,",").concat(a/4,"l").concat(a/2,",").concat(a/2,"M").concat(a/4,",").concat(a*3/4,"l").concat(a/2,",").concat(-a/2);case"caps":return"M ".concat(a/4,",").concat(a*3/4,"l").concat(a/4,",").concat(-a/2,"l").concat(a/4,",").concat(a/2);case"hexagons":t=3;e=Math.sqrt(3);return"M ".concat(a,",0 l ").concat(a,",0 l ").concat(a/2,",").concat(a*Math.sqrt(3)/2," l ").concat(-a/2,",").concat(a*Math.sqrt(3)/2," l ").concat(-a,",0 l ").concat(-a/2,",").concat(-a*Math.sqrt(3)/2," Z M 0,").concat(a*Math.sqrt(3)/2," l ").concat(a/2,",0 M ").concat(3*a,",").concat(a*Math.sqrt(3)/2," l ").concat(-a/2,",0");default:return r(a)}};var h=function h(d){var g=l(o);var f=d.append("defs").append("pattern").attr("id",c).attr("patternUnits","userSpaceOnUse").attr("width",n*t).attr("height",n*e);if(a){f.append("rect").attr("width",n*t).attr("height",n*e).attr("fill",a)}f.append("path").attr("d",g).attr("fill",s).attr("stroke",i).attr("stroke-width",r).attr("stroke-linecap","square").attr("shape-rendering",u)};h.heavier=function(t){if(arguments.length===0){r*=2}else{r*=2*t}return h};h.lighter=function(t){if(arguments.length===0){r/=2}else{r/=2*t}return h};h.thinner=function(t){if(arguments.length===0){n*=2}else{n*=2*t}return h};h.thicker=function(t){if(arguments.length===0){n/=2}else{n/=2*t}return h};h.background=function(t){a=t;return h};h.shapeRendering=function(t){u=t;return h};h.size=function(t){n=t;return h};h.d=function(t){o=t;return h};h.fill=function(t){s=t;return h};h.stroke=function(t){i=t;return h};h.strokeWidth=function(t){r=t;return h};h.id=function(t){if(arguments.length===0){return c}c=t;return h};h.url=function(){return"url(#".concat(c,")")};return h};var S={circles:y,lines:b,paths:M};var w=":host{display:block;width:100%;height:100%;--axis-text-font-size:1em;--ribbon-highlight-opacity:.8}#main-container{width:100%;height:100%}#context-menu-container{display:block;position:fixed;border-radius:5px;padding:5px;background-color:lightgrey;opacity:.8;min-width:100px}#context-menu-container{z-index:1}#context-menu-container>ul{margin:0;padding:0}#context-menu-container>ul>li{list-style-type:none;margin:0;padding:0;cursor:pointer}#context-menu-container>ul>li:hover{background-color:grey}.axis-header-text{cursor:pointer}.axis-box{cursor:pointer}.axis-box :hover{opacity:.5}.axis-text{font-size:var(--axis-text-font-size);pointer-events:none}.ribbon-highlight{opacity:var(--ribbon-highlight-opacity)}";var H=function(){function t(t){e(this,t);this.textureMap=new Map;this.data=[];this.maxSegmentLimit=10;this.mergedSegmentName="*Other*";this.mergedSegmentMaxRatio=1;this.maxSegmentMarginRatioAllowed=.1;this.colorScheme=__spreadArrays(u);this.axisStrokeWidth=2;this.axisBoxWidth=15;this.axisBoxFill="rgb(100,100,100)";this.axisHeaderTextColor="rgb(0,0,0)";this.axisHeaderTextSize=16;this.axisHeaderTextWeight="bold";this.axisSegmentTextColor="rgb(0,0,0)";this.minimumRatioToShowAxisText=0;this.ribbonOpacity=.5;this.ribbonHighlightOpacity=.8;this.sideMargin=2;this.ribbonTension=1;this.useTextures=false;this.ribbonClick=n(this,"ribbonClick",7);this.axisHeaderClick=n(this,"axisHeaderClick",7);this.axisHeaderContextMenu=n(this,"axisHeaderContextMenu",7);this.axisSegmentClick=n(this,"axisSegmentClick",7);this.visLoaded=n(this,"visLoaded",7)}t.prototype.connectedCallback=function(){var t=this;var e=new ResizeObserver((function(e){for(var n=0,i=e;n<i.length;n++){var r=i[n];if(r.target===t.hostElement){t.hostElementBoundingClientRect=r.target.getBoundingClientRect()}}}));e.observe(this.hostElement);window.addEventListener("click",(function(){return t.contextMenu=undefined}))};t.prototype.render=function(){var t=this;var e;this.dimensionNameList=((e=this.dimensions)===null||e===void 0?void 0:e.length)>0?this.dimensions:Object.keys((this.data||[{}])[0]);var n=this.dimensionValuesMap||this.generateDimensionValuesMap();var a=this.generateDimensionNodeListMap(n);this.fillDataRecordListForDimensionNodeListMap(n,a);this.removeEmptyDataRecordsForDimensionNodeListMap(a);this.fillSegmentPositions(a,n);var o=this.hostElementBoundingClientRect||{},c=o.width,s=o.height;var u=m(this.colorScheme);var l=m(["hexagons","crosses","caps","woven","waves","nylon","squares"]);return i(r,null,c&&s&&this.textureContainerElement&&i("div",{id:"main-container",ref:function(){return t.visLoaded.emit(a)}},this.contextMenu,i("div",{id:"axis-headers-container",style:{height:this.axisHeaderTextSize+"px"}},this.dimensionNameList.map((function(e,n){return i("text",{class:"axis-header-text",style:{position:"absolute",color:t.axisHeaderTextColor,fontSize:t.axisHeaderTextSize+"px",fontWeight:t.axisHeaderTextWeight,left:t.obtainDimensionPosition(c,t.sideMargin,n)+"px"},onClick:function(){return t.axisHeaderClick.emit(e)},onContextMenu:function(n){n.preventDefault();t.axisHeaderContextMenu.emit(e)}},e)}))),i("svg",{id:"main-svg",width:c,height:s-this.axisHeaderTextSize},this.renderRibbons(a,c,s-this.axisHeaderTextSize,u,l),this.renderAxes(n,a,c,s-this.axisHeaderTextSize))),i("svg",{id:"texture-container",ref:function(e){return t.textureContainerElement=e},height:0}))};t.prototype.renderAxes=function(t,e,n,r){var a=this;this.hostElement.style.setProperty("--axis-text-font-size",this.axisBoxWidth*.8+"px");return this.dimensionNameList.map((function(o,c){var s=e.get(o);var u=new Map;for(var l=0,h=s;l<h.length;l++){var d=h[l];var f=u.get(d.valueHistory[c]);if(f){f.push(d)}else{u.set(d.valueHistory[c],[d])}}var m=__spreadArrays(u).map((function(e){var s=e[0],u=e[1];var l=a.obtainDimensionPosition(n,a.sideMargin,c);var h=[u[0].adjustedSegmentPosition[0]||u[0].segmentPosition[0],u[u.length-1].adjustedSegmentPosition[1]||u[u.length-1].segmentPosition[1]];var d=i("line",{x1:l,y1:h[0]*r,x2:l,y2:h[1]*r,stroke:"black","stroke-width":a.axisStrokeWidth});var f=i("rect",{x:l,y:h[0]*r,width:a.axisBoxWidth,height:(h[1]-h[0])*r,fill:a.axisBoxFill,opacity:0,onClick:function(){return a.axisSegmentClick.emit(u)},onContextMenu:function(e){e.preventDefault();a.contextMenu=i("div",{id:"context-menu-container",style:{left:e.x<window.innerWidth/2?e.x+"px":undefined,top:e.y<window.innerHeight/2?e.y+"px":undefined,right:e.x>window.innerWidth/2?window.innerWidth-e.x+"px":undefined,bottom:e.y>window.innerHeight/2?window.innerHeight-e.y+"px":undefined}},i("ul",null,["Move Up","Move Down"].map((function(e){return i("li",{onClick:function(){var n=function(t,e,n){if(e>=0&&e<t.length&&n>=0&&n<t.length){t[e]=t.splice(n,1,t[e])[0]}};var i=t.get(o);var r=i.findIndex((function(t){return t===s}));switch(e){case"Move Up":n(i,r,r-1);break;case"Move Down":n(i,r,r+1);break}a.dimensionValuesMap=new Map(t)}},i("text",null,e),i("hr",null))}))))}},i("title",null,"Dimension: "+o+"\n"+"Value: "+s.toString()+"\n"+"Count: "+g(u.map((function(t){return t.dataRecordList.length})))+"\n"+"Proportion: "+(g(u.map((function(t){return t.segmentPosition[1]-t.segmentPosition[0]})))/(1-a.maxSegmentMarginRatioAllowed)*100).toFixed(2)+"%"));var m=h[1]-h[0]>=a.minimumRatioToShowAxisText?i("text",{x:l+a.axisBoxWidth/2,y:h[0]*r,"text-anchor":"start","writing-mode":"tb",color:a.axisSegmentTextColor},s):undefined;return{line:d,box:f,text:m}}));return i("g",{class:"axis"},i("g",{class:"axis-line"},m.map((function(t){return t.line}))),i("g",{class:"axis-box"},m.map((function(t){return t.box}))),i("g",{class:"axis-text"},m.map((function(t){return t.text}))))}))};t.prototype.renderRibbons=function(t,e,n,r,a){var o=this;this.hostElement.style.setProperty("--ribbon-highlight-opacity",this.ribbonHighlightOpacity.toString());return this.dimensionNameList.map((function(c,s){var u=t.get(c);var d=o.dimensionNameList[s+1];var g=u.map((function(u){var g=o.obtainDimensionPosition(e,o.sideMargin,s);var f=o.obtainDimensionPosition(e,o.sideMargin,s+1);var m=(t.get(d)||[]).filter((function(t){return t.valueHistory.slice(0,u.valueHistory.length).toString()===u.valueHistory.toString()}));var v=0;return m.map((function(t){var e=(t.segmentPosition[1]-t.segmentPosition[0])*(u.valueHistory[s]===o.mergedSegmentName?1-u.mergedSegmentAdjustmentRatio:1)/u.adjustmentRatio;var m=(u.adjustedSegmentPosition[0]+v)*n;var p=(u.adjustedSegmentPosition[0]+(v+=e))*n;var x=(t.adjustedSegmentPosition[0]||t.segmentPosition[0])*n;var y=(t.adjustedSegmentPosition[1]||t.segmentPosition[1])*n;var b=o.obtainRibbonPathD(g,m,p,f,x,y);var M=r(u.valueHistory[0].toString());var S;if(o.useTextures&&u.valueHistory[1]!==undefined){if(!o.textureMap.has(u.valueHistory[1]+"\t"+M)){o.textureMap.set(u.valueHistory[1]+"\t"+M,o.createTexture(a(u.valueHistory[1].toString())).background(M))}S=o.textureMap.get(u.valueHistory[1]+"\t"+M);l(o.textureContainerElement).call(S)}var w=i("path",{ref:function(e){return l(e).datum(t)},d:b,fill:S?S.url():M,opacity:o.ribbonOpacity,onMouseEnter:function(){l(o.hostElement.shadowRoot).selectAll("g.ribbons path").classed("ribbon-highlight",(function(e){var n=h([e.valueHistory.length,t.valueHistory.length]);if(e.valueHistory.slice(0,n).toString()===t.valueHistory.slice(0,n).toString()){return true}else{return false}}))},onMouseLeave:function(){l(o.hostElement.shadowRoot).selectAll(".ribbons path").classed("ribbon-highlight",false)},onClick:function(){return o.ribbonClick.emit(t)}},i("title",null,"Dimension: "+c+" -> "+d+"\n"+"Value History: "+t.valueHistory.join(" -> ")+"\n"+"Count: "+t.dataRecordList.length+"\n"+"Proportion: "+(t.dataRecordList.length/o.data.length*100).toFixed(2)+"%"));return w}))}));return i("g",{class:"ribbons"},g.flat())}))};t.prototype.obtainRibbonPathD=function(t,e,n,i,r,a){var o=this.ribbonTension*t+(1-this.ribbonTension)*i;var c=this.ribbonTension*i+(1-this.ribbonTension)*t;var s=d();s.moveTo(t,e);s.lineTo(t,n);s.bezierCurveTo(o,n,c,a,i,a);s.lineTo(i,r);s.bezierCurveTo(c,r,o,e,t,e);s.closePath();var u=s.toString();return u};t.prototype.fillSegmentPositions=function(t,e){for(var n=0;n<this.dimensionNameList.length;n++){var i=this.dimensionNameList[n];var r=t.get(i);var a=this.obtainMergedSegmentAdjustmentOffsetAndItsRatio(e,i,r,n),o=a.mergedSegmentAdjustmentOffset,c=a.mergedSegmentAdjustmentOffsetRatio;this.fillSegmentPositionsForSingleDimension(o,c,n,i,r,e)}};t.prototype.fillSegmentPositionsForSingleDimension=function(t,e,n,i,r,a){var o=this;var c,s;var u=this.data.length-t;var l=0;var h=function(h){var f=r[h];f.mergedSegmentAdjustmentRatio=e;f.adjustmentRatio=u/d.data.length;var m=function(t){return t.valueHistory[n]===o.mergedSegmentName?1-e:1};var v=g(r.slice(0,h).map((function(t){return t.dataRecordList.length})));var p=v/d.data.length*(1-d.maxSegmentMarginRatioAllowed);var x=(v+f.dataRecordList.length)/d.data.length*(1-d.maxSegmentMarginRatioAllowed);var y=g(r.slice(0,h).map((function(t){return t.dataRecordList.length*m(t)})));var b=y/u*(1-d.maxSegmentMarginRatioAllowed);var M=(y+f.dataRecordList.length*m(f))/u*(1-d.maxSegmentMarginRatioAllowed);var S=d.maxSegmentMarginRatioAllowed/a.get(i).length/2;if(r[h].valueHistory[n]!==((c=r[h-1])===null||c===void 0?void 0:c.valueHistory[n])){l+=S}if(t){f.adjustedSegmentPosition=[b+l,M+l]}f.segmentPosition=[p+l,x+l];if(r[h].valueHistory[n]!==((s=r[h+1])===null||s===void 0?void 0:s.valueHistory[n])){l+=S}};var d=this;for(var f=0;f<r.length;f++){h(f)}};t.prototype.obtainMergedSegmentAdjustmentOffsetAndItsRatio=function(t,e,n,i){var r=this;var a=0;var o=0;if(t.get(e).find((function(t){return t===r.mergedSegmentName}))){var c=g(n.filter((function(t){return t.valueHistory[i]===r.mergedSegmentName})).map((function(t){return t.dataRecordList.length})));if(c/this.data.length>this.mergedSegmentMaxRatio){a=(c-this.data.length*this.mergedSegmentMaxRatio)/(1-this.mergedSegmentMaxRatio);o=a/c}}return{mergedSegmentAdjustmentOffset:a,mergedSegmentAdjustmentOffsetRatio:o}};t.prototype.removeEmptyDataRecordsForDimensionNodeListMap=function(t){for(var e=0,n=t;e<n.length;e++){var i=n[e],r=i[0],a=i[1];t.set(r,a.filter((function(t){return t.dataRecordList.length>0})))}};t.prototype.fillDataRecordListForDimensionNodeListMap=function(t,e){var n=__spreadArrays(e.values()).flatMap((function(t){return t}));for(var i=0,r=this.data;i<r.length;i++){var a=r[i];for(var o=0,c=n;o<c.length;o++){var s=c[o];var u=true;var l=function(e){var n=h.dimensionNameList[e];var i=a[n];if(s.valueHistory[e]!==h.mergedSegmentName&&s.valueHistory[e]!==i||s.valueHistory[e]===h.mergedSegmentName&&t.get(n).find((function(t){return t===i}))!==undefined){u=false;return"continue"}};var h=this;for(var d=0;d<s.valueHistory.length;d++){l(d)}if(u){s.dataRecordList.push(a)}}}};t.prototype.generateDimensionNodeListMap=function(t){var e=new Map;for(var n=0;n<this.dimensionNameList.length;n++){var i=this.dimensionNameList[n];var r=n>0?this.dimensionNameList[n-1]:"";var a=[];var o=t.get(i);var c=e.get(r);for(var s=0,u=o;s<u.length;s++){var l=u[s];if(c){for(var h=0,d=c;h<d.length;h++){var g=d[h];a.push(Object.assign(new v,{valueHistory:__spreadArrays(g.valueHistory,[l])}))}}else{a.push(Object.assign(new v,{valueHistory:[l]}))}}e.set(i,a)}return e};t.prototype.generateDimensionValuesMap=function(){var t=this;var e=this.dimensionNameList.map((function(e){var n=__spreadArrays(new Set(t.data.map((function(t){return t[e]})))).sort((function(t,e){switch(typeof t){case"number":return t-e;case"string":return p(t,e)}}));return[e,n]}));for(var n=0;n<e.length;n++){var i=e[n];var r=this.maxSegmentLimit[n]||this.maxSegmentLimit;if(i[1].length>r){i[1].splice(r);i[1].push(this.mergedSegmentName)}}var a=new Map(e);return a};t.prototype.obtainDimensionPosition=function(t,e,n){return(t-e*2-this.axisBoxWidth)/(this.dimensionNameList.length-1)*n+e};t.prototype.createTexture=function(t){return S.paths().d(t)};Object.defineProperty(t.prototype,"hostElement",{get:function(){return a(this)},enumerable:false,configurable:true});return t}();t("s_parallel_sets",H);H.style=w}}}));