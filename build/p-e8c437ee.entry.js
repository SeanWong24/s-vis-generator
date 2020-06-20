import{r as t,h as n,H as i}from"./p-f5cfe7fe.js";import"./p-663ff2e9.js";import"./p-f3a0c163.js";import{a as e}from"./p-fbaedccc.js";class o{constructor(n){t(this,n)}async updateDatasetString(t){try{const n=[];let i=-1;const e=t.split("\n");for(const t of e){const e=[],o=t.split(",");if(i<0)i=o.length;else if(i!==o.length)throw new Error("Value count for each line is different.");for(const t of o){if(Number.isNaN(+t))throw new Error("There is a non-numric value.");e.push(+t)}n.push(e)}const o=[];for(let t=1;t<n[0].length;t++){const i=[];for(let e=0;e<n.length;e++)i.push([n[e][0],n[e][t]]);o.push(i)}this.data=o}catch(n){const t=await e.create({header:"Invalid Input",subHeader:"The input dataset cannot be parsed.",message:null==n?void 0:n.message,buttons:["OK"]});await t.present()}}render(){return n(i,null,n("ion-header",null,n("ion-toolbar",{color:"primary"},n("ion-buttons",{slot:"start"},n("ion-back-button",{"default-href":"/"})),n("ion-title",null,"Generating Line Chart"))),n("ion-content",null,n("ion-grid",{slot:"fixed"},n("ion-row",null,n("ion-col",null,n("ion-card",null,n("ion-card-content",null,n("ion-item",null,n("ion-label",{position:"stacked"},"Dataset"),n("ion-textarea",{ref:t=>this.datasetTextAreaElement=t,rows:10,placeholder:"Enter the dataset here (as CSV format)"})),n("ion-button",{onClick:()=>{var t;return this.updateDatasetString(null===(t=this.datasetTextAreaElement)||void 0===t?void 0:t.value)}},"Confirm"),n("ion-item",null,n("ion-label",{position:"fixed"},"Min X"),n("ion-input",{clearInput:!0,type:"number",inputmode:"numeric",value:this.minX,placeholder:"Not Set(Auto)",onIonChange:({detail:{value:t}})=>this.minX=+t})),n("ion-item",null,n("ion-label",{position:"fixed"},"Max X"),n("ion-input",{clearInput:!0,type:"number",inputmode:"numeric",value:this.maxX,placeholder:"Not Set(Auto)",onIonChange:({detail:{value:t}})=>this.maxX=+t})),n("ion-item",null,n("ion-label",{position:"fixed"},"Min Y"),n("ion-input",{clearInput:!0,type:"number",inputmode:"numeric",value:this.minY,placeholder:"Not Set(Auto)",onIonChange:({detail:{value:t}})=>this.minY=+t})),n("ion-item",null,n("ion-label",{position:"fixed"},"Max Y"),n("ion-input",{clearInput:!0,type:"number",inputmode:"numeric",value:this.maxY,placeholder:"Not Set(Auto)",onIonChange:({detail:{value:t}})=>this.maxY=+t}))))),n("ion-col",null,n("ion-card",null,n("s-line-chart",{data:this.data,minX:this.minX,maxX:this.maxX,minY:this.minY,maxY:this.maxY})))))))}}o.style=":host{display:block}ion-grid{width:100%;height:100%}ion-row{width:100%;height:100%}ion-col{width:100%;height:100%}ion-card{width:100%;height:100%;margin:0}s-line-chart{width:100%;height:100%}";export{o as app_line_chart}