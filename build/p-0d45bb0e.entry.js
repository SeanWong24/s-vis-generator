import{r as t,d as i,h as s,H as n,c as e}from"./p-f5cfe7fe.js";import{h as o,f as r,s as h}from"./p-030496fe.js";import{A as a,s as c,m as l,p as u}from"./p-593e5f1c.js";function f(t,i){var s,n=t.length,e=-1,o=0;if(null==i)for(;++e<n;)(s=+t[e])&&(o+=s);else for(;++e<n;)(s=+i(t[e],e,t))&&(o+=s);return o}var d={name:"implicit"};function g(){var t=o(),i=[],s=[],n=d;function e(e){var o=e+"",r=t.get(o);if(!r){if(n!==d)return n;t.set(o,r=i.push(e))}return s[(r-1)%s.length]}return e.domain=function(s){if(!arguments.length)return i.slice();i=[],t=o();for(var n,r,h=-1,a=s.length;++h<a;)t.has(r=(n=s[h])+"")||t.set(r,i.push(n));return e},e.range=function(t){return arguments.length?(s=h.call(t),e):s.slice()},e.unknown=function(t){return arguments.length?(n=t,e):n},e.copy=function(){return g(i,s).unknown(n)},r.apply(e,arguments),e}class p{constructor(){this.valueHistory=[],this.dataRecordList=[],this.segmentPosition=[0,0],this.mergedSegmentAdjustmentRatio=0,this.adjustmentRatio=1}get adjustedSegmentPosition(){return this._adjustedSegmentPosition||this.segmentPosition}set adjustedSegmentPosition(t){this._adjustedSegmentPosition=t}}var x=function(){var t=1,i=1,s=20,n="#343434",e=2,o="",r=function(t){return"M ".concat(t/4,",").concat(3*t/4,"l").concat(t/4,",").concat(-t/2,"l").concat(t/4,",").concat(t/2)},h="".concat(Math.random().toString(36),"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5),a="transparent",c="auto",l=function(l){var u=function(n){var e=s;switch(n){case"squares":return"M ".concat(e/4," ").concat(e/4," l ").concat(e/2," 0 l 0 ").concat(e/2," l ").concat(-e/2," 0 Z");case"nylon":return"M 0 ".concat(e/4," l ").concat(e/4," 0 l 0 ").concat(-e/4," M ").concat(3*e/4," ").concat(e," l 0 ").concat(-e/4," l ").concat(e/4," 0 M ").concat(e/4," ").concat(e/2," l 0 ").concat(e/4," l ").concat(e/4," 0 M ").concat(e/2," ").concat(e/4," l ").concat(e/4," 0 l 0 ").concat(e/4);case"waves":return"M 0 ".concat(e/2," c ").concat(e/8," ").concat(-e/4," , ").concat(3*e/8," ").concat(-e/4," , ").concat(e/2," 0 c ").concat(e/8," ").concat(e/4," , ").concat(3*e/8," ").concat(e/4," , ").concat(e/2," 0 M ").concat(-e/2," ").concat(e/2," c ").concat(e/8," ").concat(e/4," , ").concat(3*e/8," ").concat(e/4," , ").concat(e/2," 0 M ").concat(e," ").concat(e/2," c ").concat(e/8," ").concat(-e/4," , ").concat(3*e/8," ").concat(-e/4," , ").concat(e/2," 0");case"woven":return"M ".concat(e/4,",").concat(e/4,"l").concat(e/2,",").concat(e/2,"M").concat(3*e/4,",").concat(e/4,"l").concat(e/2,",").concat(-e/2," M").concat(e/4,",").concat(3*e/4,"l").concat(-e/2,",").concat(e/2,"M").concat(3*e/4,",").concat(5*e/4,"l").concat(e/2,",").concat(-e/2," M").concat(-e/4,",").concat(e/4,"l").concat(e/2,",").concat(-e/2);case"crosses":return"M ".concat(e/4,",").concat(e/4,"l").concat(e/2,",").concat(e/2,"M").concat(e/4,",").concat(3*e/4,"l").concat(e/2,",").concat(-e/2);case"caps":return"M ".concat(e/4,",").concat(3*e/4,"l").concat(e/4,",").concat(-e/2,"l").concat(e/4,",").concat(e/2);case"hexagons":return t=3,i=Math.sqrt(3),"M ".concat(e,",0 l ").concat(e,",0 l ").concat(e/2,",").concat(e*Math.sqrt(3)/2," l ").concat(-e/2,",").concat(e*Math.sqrt(3)/2," l ").concat(-e,",0 l ").concat(-e/2,",").concat(-e*Math.sqrt(3)/2," Z M 0,").concat(e*Math.sqrt(3)/2," l ").concat(e/2,",0 M ").concat(3*e,",").concat(e*Math.sqrt(3)/2," l ").concat(-e/2,",0");default:return n(e)}}(r),f=l.append("defs").append("pattern").attr("id",h).attr("patternUnits","userSpaceOnUse").attr("width",s*t).attr("height",s*i);o&&f.append("rect").attr("width",s*t).attr("height",s*i).attr("fill",o),f.append("path").attr("d",u).attr("fill",a).attr("stroke",n).attr("stroke-width",e).attr("stroke-linecap","square").attr("shape-rendering",c)};return l.heavier=function(t){return e*=0===arguments.length?2:2*t,l},l.lighter=function(t){return e/=0===arguments.length?2:2*t,l},l.thinner=function(t){return s*=0===arguments.length?2:2*t,l},l.thicker=function(t){return s/=0===arguments.length?2:2*t,l},l.background=function(t){return o=t,l},l.shapeRendering=function(t){return c=t,l},l.size=function(t){return s=t,l},l.d=function(t){return r=t,l},l.fill=function(t){return a=t,l},l.stroke=function(t){return n=t,l},l.strokeWidth=function(t){return e=t,l},l.id=function(t){return 0===arguments.length?h:(h=t,l)},l.url=function(){return"url(#".concat(h,")")},l};class m{constructor(s){t(this,s),this.textureMap=new Map,this.data=[],this.maxSegmentLimit=10,this.mergedSegmentName="*Other*",this.mergedSegmentMaxRatio=1,this.maxSegmentMarginRatioAllowed=.1,this.colorScheme=[...a],this.axisStrokeWidth=2,this.axisBoxWidth=15,this.axisBoxFill="rgb(100,100,100)",this.axisHeaderTextColor="rgb(0,0,0)",this.axisHeaderTextSize=16,this.axisHeaderTextWeight="bold",this.axisSegmentTextColor="rgb(0,0,0)",this.minimumRatioToShowAxisText=0,this.ribbonOpacity=.5,this.ribbonHighlightOpacity=.8,this.sideMargin=2,this.ribbonTension=1,this.useTextures=!1,this.ribbonClick=i(this,"ribbonClick",7),this.axisHeaderClick=i(this,"axisHeaderClick",7),this.axisHeaderContextMenu=i(this,"axisHeaderContextMenu",7),this.axisSegmentClick=i(this,"axisSegmentClick",7),this.visLoaded=i(this,"visLoaded",7)}connectedCallback(){new ResizeObserver(t=>{for(const i of t)i.target===this.hostElement&&(this.hostElementBoundingClientRect=i.target.getBoundingClientRect())}).observe(this.hostElement),window.addEventListener("click",()=>this.contextMenu=void 0)}render(){var t;this.dimensionNameList=(null===(t=this.dimensions)||void 0===t?void 0:t.length)>0?this.dimensions:Object.keys((this.data||[{}])[0]);const i=this.dimensionValuesMap||this.generateDimensionValuesMap(),e=this.generateDimensionNodeListMap(i);this.fillDataRecordListForDimensionNodeListMap(i,e),this.removeEmptyDataRecordsForDimensionNodeListMap(e),this.fillSegmentPositions(e,i);const{width:o,height:r}=this.hostElementBoundingClientRect||{},h=g(this.colorScheme),a=g(["hexagons","crosses","caps","woven","waves","nylon","squares"]);return s(n,null,o&&r&&this.textureContainerElement&&s("div",{id:"main-container",ref:()=>this.visLoaded.emit(e)},this.contextMenu,s("div",{id:"axis-headers-container",style:{height:this.axisHeaderTextSize+"px"}},this.dimensionNameList.map((t,i)=>s("text",{class:"axis-header-text",style:{position:"absolute",color:this.axisHeaderTextColor,fontSize:this.axisHeaderTextSize+"px",fontWeight:this.axisHeaderTextWeight,left:this.obtainDimensionPosition(o,this.sideMargin,i)+"px"},onClick:()=>this.axisHeaderClick.emit(t),onContextMenu:i=>{i.preventDefault(),this.axisHeaderContextMenu.emit(t)}},t))),s("svg",{id:"main-svg",width:o,height:r-this.axisHeaderTextSize},this.renderRibbons(e,o,r-this.axisHeaderTextSize,h,a),this.renderAxes(i,e,o,r-this.axisHeaderTextSize))),s("svg",{id:"texture-container",ref:t=>this.textureContainerElement=t,height:0}))}renderAxes(t,i,n,e){return this.hostElement.style.setProperty("--axis-text-font-size",.8*this.axisBoxWidth+"px"),this.dimensionNameList.map((o,r)=>{const h=i.get(o),a=new Map;for(const t of h){const i=a.get(t.valueHistory[r]);i?i.push(t):a.set(t.valueHistory[r],[t])}const c=[...a].map(([i,h])=>{const a=this.obtainDimensionPosition(n,this.sideMargin,r),c=[h[0].adjustedSegmentPosition[0]||h[0].segmentPosition[0],h[h.length-1].adjustedSegmentPosition[1]||h[h.length-1].segmentPosition[1]];return{line:s("line",{x1:a,y1:c[0]*e,x2:a,y2:c[1]*e,stroke:"black","stroke-width":this.axisStrokeWidth}),box:s("rect",{x:a,y:c[0]*e,width:this.axisBoxWidth,height:(c[1]-c[0])*e,fill:this.axisBoxFill,opacity:0,onClick:()=>this.axisSegmentClick.emit(h),onContextMenu:n=>{n.preventDefault(),this.contextMenu=s("div",{id:"context-menu-container",style:{left:n.x<window.innerWidth/2?n.x+"px":void 0,top:n.y<window.innerHeight/2?n.y+"px":void 0,right:n.x>window.innerWidth/2?window.innerWidth-n.x+"px":void 0,bottom:n.y>window.innerHeight/2?window.innerHeight-n.y+"px":void 0}},s("ul",null,["Move Up","Move Down"].map(n=>s("li",{onClick:()=>{const s=function(t,i,s){i>=0&&i<t.length&&s>=0&&s<t.length&&(t[i]=t.splice(s,1,t[i])[0])},e=t.get(o),r=e.findIndex(t=>t===i);switch(n){case"Move Up":s(e,r,r-1);break;case"Move Down":s(e,r,r+1)}this.dimensionValuesMap=new Map(t)}},s("text",null,n),s("hr",null)))))}},s("title",null,"Dimension: "+o+"\nValue: "+i.toString()+"\nCount: "+f(h.map(t=>t.dataRecordList.length))+"\nProportion: "+(f(h.map(t=>t.segmentPosition[1]-t.segmentPosition[0]))/(1-this.maxSegmentMarginRatioAllowed)*100).toFixed(2)+"%")),text:c[1]-c[0]>=this.minimumRatioToShowAxisText?s("text",{x:a+this.axisBoxWidth/2,y:c[0]*e,"text-anchor":"start","writing-mode":"tb",color:this.axisSegmentTextColor},i):void 0}});return s("g",{class:"axis"},s("g",{class:"axis-line"},c.map(t=>t.line)),s("g",{class:"axis-box"},c.map(t=>t.box)),s("g",{class:"axis-text"},c.map(t=>t.text)))})}renderRibbons(t,i,n,e,o){return this.hostElement.style.setProperty("--ribbon-highlight-opacity",this.ribbonHighlightOpacity.toString()),this.dimensionNameList.map((r,h)=>{const a=t.get(r),u=this.dimensionNameList[h+1],f=a.map(a=>{const f=this.obtainDimensionPosition(i,this.sideMargin,h),d=this.obtainDimensionPosition(i,this.sideMargin,h+1),g=(t.get(u)||[]).filter(t=>t.valueHistory.slice(0,a.valueHistory.length).toString()===a.valueHistory.toString());let p=0;return g.map(t=>{const i=(a.adjustedSegmentPosition[0]+p)*n,g=(a.adjustedSegmentPosition[0]+(p+=(t.segmentPosition[1]-t.segmentPosition[0])*(a.valueHistory[h]===this.mergedSegmentName?1-a.mergedSegmentAdjustmentRatio:1)/a.adjustmentRatio))*n,x=this.obtainRibbonPathD(f,i,g,d,(t.adjustedSegmentPosition[0]||t.segmentPosition[0])*n,(t.adjustedSegmentPosition[1]||t.segmentPosition[1])*n),m=e(a.valueHistory[0].toString());let b;return this.useTextures&&void 0!==a.valueHistory[1]&&(this.textureMap.has(a.valueHistory[1]+"\t"+m)||this.textureMap.set(a.valueHistory[1]+"\t"+m,this.createTexture(o(a.valueHistory[1].toString())).background(m)),b=this.textureMap.get(a.valueHistory[1]+"\t"+m),c(this.textureContainerElement).call(b)),s("path",{ref:i=>c(i).datum(t),d:x,fill:b?b.url():m,opacity:this.ribbonOpacity,onMouseEnter:()=>{c(this.hostElement.shadowRoot).selectAll("g.ribbons path").classed("ribbon-highlight",i=>{const s=l([i.valueHistory.length,t.valueHistory.length]);return i.valueHistory.slice(0,s).toString()===t.valueHistory.slice(0,s).toString()})},onMouseLeave:()=>{c(this.hostElement.shadowRoot).selectAll(".ribbons path").classed("ribbon-highlight",!1)},onClick:()=>this.ribbonClick.emit(t)},s("title",null,"Dimension: "+r+" -> "+u+"\nValue History: "+t.valueHistory.join(" -> ")+"\nCount: "+t.dataRecordList.length+"\nProportion: "+(t.dataRecordList.length/this.data.length*100).toFixed(2)+"%"))})});return s("g",{class:"ribbons"},f.flat())})}obtainRibbonPathD(t,i,s,n,e,o){const r=this.ribbonTension*t+(1-this.ribbonTension)*n,h=this.ribbonTension*n+(1-this.ribbonTension)*t,a=u();return a.moveTo(t,i),a.lineTo(t,s),a.bezierCurveTo(r,s,h,o,n,o),a.lineTo(n,e),a.bezierCurveTo(h,e,r,i,t,i),a.closePath(),a.toString()}fillSegmentPositions(t,i){for(let s=0;s<this.dimensionNameList.length;s++){const n=this.dimensionNameList[s],e=t.get(n);let{mergedSegmentAdjustmentOffset:o,mergedSegmentAdjustmentOffsetRatio:r}=this.obtainMergedSegmentAdjustmentOffsetAndItsRatio(i,n,e,s);this.fillSegmentPositionsForSingleDimension(o,r,s,n,e,i)}}fillSegmentPositionsForSingleDimension(t,i,s,n,e,o){var r,h;const a=this.data.length-t;let c=0;for(let l=0;l<e.length;l++){const u=e[l];u.mergedSegmentAdjustmentRatio=i,u.adjustmentRatio=a/this.data.length;const d=t=>t.valueHistory[s]===this.mergedSegmentName?1-i:1,g=f(e.slice(0,l).map(t=>t.dataRecordList.length)),p=g/this.data.length*(1-this.maxSegmentMarginRatioAllowed),x=(g+u.dataRecordList.length)/this.data.length*(1-this.maxSegmentMarginRatioAllowed),m=f(e.slice(0,l).map(t=>t.dataRecordList.length*d(t))),b=m/a*(1-this.maxSegmentMarginRatioAllowed),v=(m+u.dataRecordList.length*d(u))/a*(1-this.maxSegmentMarginRatioAllowed),M=this.maxSegmentMarginRatioAllowed/o.get(n).length/2;e[l].valueHistory[s]!==(null===(r=e[l-1])||void 0===r?void 0:r.valueHistory[s])&&(c+=M),t&&(u.adjustedSegmentPosition=[b+c,v+c]),u.segmentPosition=[p+c,x+c],e[l].valueHistory[s]!==(null===(h=e[l+1])||void 0===h?void 0:h.valueHistory[s])&&(c+=M)}}obtainMergedSegmentAdjustmentOffsetAndItsRatio(t,i,s,n){let e=0,o=0;if(t.get(i).find(t=>t===this.mergedSegmentName)){let t=f(s.filter(t=>t.valueHistory[n]===this.mergedSegmentName).map(t=>t.dataRecordList.length));t/this.data.length>this.mergedSegmentMaxRatio&&(e=(t-this.data.length*this.mergedSegmentMaxRatio)/(1-this.mergedSegmentMaxRatio),o=e/t)}return{mergedSegmentAdjustmentOffset:e,mergedSegmentAdjustmentOffsetRatio:o}}removeEmptyDataRecordsForDimensionNodeListMap(t){for(const[i,s]of t)t.set(i,s.filter(t=>t.dataRecordList.length>0))}fillDataRecordListForDimensionNodeListMap(t,i){const s=[...i.values()].flatMap(t=>t);for(const n of this.data)for(const i of s){let s=!0;for(let e=0;e<i.valueHistory.length;e++){const o=this.dimensionNameList[e],r=n[o];(i.valueHistory[e]!==this.mergedSegmentName&&i.valueHistory[e]!==r||i.valueHistory[e]===this.mergedSegmentName&&void 0!==t.get(o).find(t=>t===r))&&(s=!1)}s&&i.dataRecordList.push(n)}}generateDimensionNodeListMap(t){const i=new Map;for(let s=0;s<this.dimensionNameList.length;s++){const n=this.dimensionNameList[s],e=s>0?this.dimensionNameList[s-1]:"",o=[],r=t.get(n),h=i.get(e);for(const t of r)if(h)for(const i of h)o.push(Object.assign(new p,{valueHistory:[...i.valueHistory,t]}));else o.push(Object.assign(new p,{valueHistory:[t]}));i.set(n,o)}return i}generateDimensionValuesMap(){const t=this.dimensionNameList.map(t=>{const i=[...new Set(this.data.map(i=>i[t]))].sort((t,i)=>{switch(typeof t){case"number":return t-i;case"string":return function(t,i){return t<i?-1:t>i?1:0}(t,i)}});return[t,i]});for(let i=0;i<t.length;i++){const s=t[i],n=this.maxSegmentLimit[i]||this.maxSegmentLimit;s[1].length>n&&(s[1].splice(n),s[1].push(this.mergedSegmentName))}return new Map(t)}obtainDimensionPosition(t,i,s){return(t-2*i-this.axisBoxWidth)/(this.dimensionNameList.length-1)*s+i}createTexture(t){return x().d(t)}get hostElement(){return e(this)}}m.style=":host{display:block;width:100%;height:100%;--axis-text-font-size:1em;--ribbon-highlight-opacity:.8}#main-container{width:100%;height:100%}#context-menu-container{display:block;position:fixed;border-radius:5px;padding:5px;background-color:lightgrey;opacity:.8;min-width:100px}#context-menu-container{z-index:1}#context-menu-container>ul{margin:0;padding:0}#context-menu-container>ul>li{list-style-type:none;margin:0;padding:0;cursor:pointer}#context-menu-container>ul>li:hover{background-color:grey}.axis-header-text{cursor:pointer}.axis-box{cursor:pointer}.axis-box :hover{opacity:.5}.axis-text{font-size:var(--axis-text-font-size);pointer-events:none}.ribbon-highlight{opacity:var(--ribbon-highlight-opacity)}";export{m as s_parallel_sets}