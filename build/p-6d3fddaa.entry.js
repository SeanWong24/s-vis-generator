import{r as s,h as t,H as i}from"./p-f5cfe7fe.js";import{g as o}from"./p-663ff2e9.js";import"./p-58d13c5e.js";import"./p-f3a0c163.js";import"./p-6497746f.js";import{m as e}from"./p-250306ce.js";import{u as r}from"./p-5f820b7b.js";class n{constructor(t){s(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>e.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await r(this.menu)}render(){const s=o(this),e=this.autoHide&&!this.visible;return t(i,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[s]:!0,"menu-toggle-hidden":e}},t("slot",null))}}n.style=":host(.menu-toggle-hidden){display:none}";export{n as ion_menu_toggle}