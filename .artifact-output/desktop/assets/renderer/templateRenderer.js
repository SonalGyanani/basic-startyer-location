import{r as b}from"../static/index-8c34e822.js";import{s as p}from"../static/server.browser-b338a903.js";const y="modulepreload",T=function(e){return"/"+e},m={},_=function(t,r,n){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=T(s),s in m)return;m[s]=!0;const a=s.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":y,a||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),a)return new Promise((l,f)=>{i.addEventListener("load",l),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},v=e=>{const t=e.split("/");return t.pop(),t.map(r=>"../").reduce((r,n)=>r+n,"")};var d={exports:{}},o=String,g=function(){return{isColorSupported:!1,reset:o,bold:o,dim:o,italic:o,underline:o,inverse:o,hidden:o,strikethrough:o,black:o,red:o,green:o,yellow:o,blue:o,magenta:o,cyan:o,white:o,gray:o,bgBlack:o,bgRed:o,bgGreen:o,bgYellow:o,bgBlue:o,bgMagenta:o,bgCyan:o,bgWhite:o}};d.exports=g();d.exports.createColors=g;const x=e=>`<title>${e.title?e.title:"Yext Pages Site"}</title>
    <meta charset="${e.charset||"UTF-8"}">
    <meta name="viewport" content="${e.viewport||"width=device-width, initial-scale=1"}">
    ${e.tags?e.tags.map(E).join(`
`):""}
    ${e.other?e.other:""}`.split(`
`).filter(t=>t.trim()!="").join(`
`),E=e=>{switch(e.type){case"base":case"link":case"meta":return`<${e.type} ${u(e.attributes)}>`;case"style":case"script":case"noscript":case"template":return`<${e.type} ${u(e.attributes)}></${e.type}>`;default:return console.log(d.exports.yellow(`[WARNING]: Tag type ${e.type} is unsupported by the Tag interface. Please use "other" to render this tag.`)),""}},u=e=>Object.keys(e).map(t=>`${t}="${e[t]}"`).join(" "),P=(e,t)=>{var r,n;return e!=null&&e.lang?e.lang:(r=t==null?void 0:t.document)!=null&&r.locale?(n=t==null?void 0:t.document)==null?void 0:n.locale:"en"},R=(e,t,r,n,s)=>{const a=e.__meta.manifest.projectFilepaths,c=s?s(e):void 0;return`<!DOCTYPE html>
    <html lang=${P(c,e)}>
    <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify(e)}<\/script>
        ${w(`${a.templatesRoot}/${t.templateName}.tsx`,e.__meta.manifest.bundlerManifest,new Set).map(l=>`<link rel="stylesheet" href="/${l}"/>`).filter((l,f,$)=>$.indexOf(l)==f).join(`
`)}
        ${c?x(c):""}
    </head>
    <body>
        <div id="reactele">${r}</div>${n?`<script type="module" src="/${O(`${a.hydrationBundleOutputRoot}/${t.templateName}.tsx`,e)}" defer><\/script>`:""}
    </body>
    </html>`},w=(e,t,r)=>{const n=Object.entries(t).find(([i])=>i===e);if(!n)return[];const[s,a]=n;r.add(s);const c=a.css||[];return(a.imports||[]).flatMap(i=>w(i,t,r)).forEach(i=>c.push(i)),c},O=(e,t)=>{const{__meta:r}=t;for(const[n,s]of Object.entries(r.manifest.bundlerManifest))if(n===e)return s.file},S=e=>{if(j(e.filename,e.config),!e.getPath)throw new Error(`Template ${e.filename} is missing an exported getPath function.`);if(!e.default&&!e.render)throw new Error(`Module ${e.filename} does not have the necessary exports to produce page. A module should either have a React component as a default export or a render function.`)},j=(e,t)=>{if(!t.name)throw new Error(`Template ${e} is missing a "name" in the config function.`);if(t.streamId&&t.stream)throw new Error(`Template ${e} must not define both a "streamId" and a "stream".`)},k=(e,t)=>{let r=e.split("/")[e.split("/").length-1];const n=r.slice(r.lastIndexOf("."));let s=r.slice(0,r.lastIndexOf("."));return t&&(r=r.split(n)[0].slice(0,r.split(n)[0].lastIndexOf("."))+n,s=s.slice(0,s.lastIndexOf("."))),{base:r,name:s}},N=(e,t,r)=>{const n=k(e,r),s={...t,config:A(n.name,t.config),path:e,filename:n.base,templateName:n.name};return S(s),s},A=(e,t)=>{var r;return{name:(r=t==null?void 0:t.name)!=null?r:e,...t}},h=new Map,L=async(e,t)=>{const r=t.bundlePaths[e].replace("assets","..");if(!r)throw new Error(`Could not find path for feature ${e}`);let n=h.get(r);n||(n=await _(()=>import(r),[]));const s=N(r,n,!0);return h.set(r,s),s},F=async(e,t)=>{var a,c;e.transformProps&&(t=await e.transformProps(t));const r=e.getPath(t);if(!r)throw new Error(`getPath does not return a valid string in template '${e.templateName}'`);const n={...t,path:r,relativePrefixToRoot:v(r)};return{content:H(e,n),path:r,redirects:(c=(a=e.getRedirects)==null?void 0:a.call(e,n))!=null?c:[]}},H=(e,t)=>{const{default:r,render:n,getHeadConfig:s}=e;if(!r&&!n)throw new Error(`Cannot render html from template '${e.config.name}'. Template is missing render function or default export.`);return n?(s&&console.warn(`getHeadConfig for template ${e.config.name} will not be called since a custom render function is defined.`),n(t)):R(t,e,p.exports.renderToString(b.exports.createElement(r,t)),!0,s)};var B=async e=>{const t=e.__meta.manifest,r=await L(e.document.__.name,t);return await F(r,e)};export{B as default};
