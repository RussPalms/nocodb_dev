"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||c;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<c;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const c={title:"Sync Schema",description:"Schema changes made to database from outside NocoDB GUI can be synced"},r=void 0,i={unversionedId:"setup-and-usages/sync-schema",id:"version-0.109.7/setup-and-usages/sync-schema",title:"Sync Schema",description:"Schema changes made to database from outside NocoDB GUI can be synced",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/120.sync-schema.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/sync-schema",permalink:"/0.109.7/setup-and-usages/sync-schema",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/030.setup-and-usages/120.sync-schema.md",tags:[],version:"0.109.7",sidebarPosition:120,frontMatter:{title:"Sync Schema",description:"Schema changes made to database from outside NocoDB GUI can be synced"},sidebar:"tutorialSidebar",previous:{title:"Display Value",permalink:"/0.109.7/setup-and-usages/display-value"},next:{title:"Share Base",permalink:"/0.109.7/setup-and-usages/share-base"}},s={},l=[{value:"How to sync schema changes to NocoDB",id:"how-to-sync-schema-changes-to-nocodb",level:2},{value:"1. From the <code>Project menu</code>, click <code>Team &amp; Settings</code>",id:"1-from-the-project-menu-click-team--settings",level:3},{value:"2. Click <code>Data Source</code> under SETTINGS, click <code>Sync Metadata</code> on the target base",id:"2-click-data-source-under-settings-click-sync-metadata-on-the-target-base",level:3},{value:"3. Changes carried outside GUI, identified by NocoDB are listed under <code>Sync state</code>",id:"3-changes-carried-outside-gui-identified-by-nocodb-are-listed-under-sync-state",level:3},{value:"4. Click <code>Sync Now</code> to complete Schema sync procedure",id:"4-click-sync-now-to-complete-schema-sync-procedure",level:3},{value:"Notes",id:"notes",level:4}],d={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-sync-schema-changes-to-nocodb"},"How to sync schema changes to NocoDB"),(0,o.kt)("p",null,"NocoDB allows you to sync schema changes if you have made changes outside NocoDB GUI. However, it has to be noted then you will have to bring your own schema migrations for moving from one environment to other."),(0,o.kt)("p",null,"Below are the steps to sync schema changes."),(0,o.kt)("h3",{id:"1-from-the-project-menu-click-team--settings"},"1. From the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Project menu"),", click ",(0,o.kt)("inlineCode",{parentName:"h3"},"Team & Settings")),(0,o.kt)("img",{width:"322",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194856648-67936db0-ee4d-4060-be3d-af9f86ef8fc6.png"}),(0,o.kt)("h3",{id:"2-click-data-source-under-settings-click-sync-metadata-on-the-target-base"},"2. Click ",(0,o.kt)("inlineCode",{parentName:"h3"},"Data Source")," under SETTINGS, click ",(0,o.kt)("inlineCode",{parentName:"h3"},"Sync Metadata")," on the target base"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/219831352-e6692ba5-5c94-4331-94ce-5796e57f87a1.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/219831634-bbb6f256-45fb-4224-9f82-bc1bed6082db.png",alt:"image"})),(0,o.kt)("h3",{id:"3-changes-carried-outside-gui-identified-by-nocodb-are-listed-under-sync-state"},"3. Changes carried outside GUI, identified by NocoDB are listed under ",(0,o.kt)("inlineCode",{parentName:"h3"},"Sync state")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If changes made to the database are not visible, click ",(0,o.kt)("inlineCode",{parentName:"li"},"Reload")),(0,o.kt)("li",{parentName:"ul"},"Identified schema changes are identified for each table in ",(0,o.kt)("inlineCode",{parentName:"li"},"red")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sync now")," button gets activated, if Schema changes are identified by NocoDB")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/219831855-bcac229c-41b6-4689-b7e1-c3cdfe23a0a1.png",alt:"image"})),(0,o.kt)("h3",{id:"4-click-sync-now-to-complete-schema-sync-procedure"},"4. Click ",(0,o.kt)("inlineCode",{parentName:"h3"},"Sync Now")," to complete Schema sync procedure"),(0,o.kt)("h4",{id:"notes"},"Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Column rename operation will be treated like ",(0,o.kt)("inlineCode",{parentName:"li"},"column delete")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"column create")," operation."),(0,o.kt)("li",{parentName:"ol"},"Only table schema changes identified will be listed under ",(0,o.kt)("inlineCode",{parentName:"li"},"Sync state"),". Any changes to records are automatically synchronized.")))}m.isMDXComponent=!0}}]);