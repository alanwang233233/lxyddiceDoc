(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7666],{26278:function(e,t,r){Promise.resolve().then(r.bind(r,27064)),Promise.resolve().then(r.bind(r,31300)),Promise.resolve().then(r.bind(r,32538)),Promise.resolve().then(r.bind(r,38539)),Promise.resolve().then(r.t.bind(r,71166,23)),Promise.resolve().then(r.bind(r,24723)),Promise.resolve().then(r.bind(r,98918)),Promise.resolve().then(r.bind(r,82485)),Promise.resolve().then(r.bind(r,71932)),Promise.resolve().then(r.bind(r,34779)),Promise.resolve().then(r.bind(r,61559)),Promise.resolve().then(r.bind(r,67752)),Promise.resolve().then(r.bind(r,18102)),Promise.resolve().then(r.bind(r,71718)),Promise.resolve().then(r.bind(r,11364)),Promise.resolve().then(r.bind(r,71820)),Promise.resolve().then(r.bind(r,48450)),Promise.resolve().then(r.bind(r,99761)),Promise.resolve().then(r.bind(r,52846)),Promise.resolve().then(r.bind(r,22824)),Promise.resolve().then(r.bind(r,52453)),Promise.resolve().then(r.bind(r,86404)),Promise.resolve().then(r.bind(r,17823)),Promise.resolve().then(r.bind(r,97512))},27064:function(e,t,r){"use strict";r.d(t,{ClientContexts:function(){return l}});var n=r(27573),a=r(18250);function l(e){let{children:t,forcedTheme:r}=e;return(0,n.jsx)(a.f,{nonce:"",attribute:"class",enableSystem:!0,forcedTheme:r,children:t})}r(7653)},31300:function(e,t,r){"use strict";r.d(t,{RefreshChangeRequestButton:function(){return c}});var n=r(27573),a=r(16378),l=r(7653);r(71364);var s=(0,r(30359).$)("ebe2454926b87e898c2656d2494d4f7263611b83"),i=r(71474),o=r(32538);function c(e){let{updatedAt:t}=e,[r,c]=l.useState(!1),[d,u]=l.useState(!1),h=function(e){let{spaceId:t,changeRequestId:r,revisionId:n}=e;return l.useCallback(async()=>{await s({spaceId:t,changeRequestId:r,revisionId:n})&&window.location.reload()},[t,r,n])}(e),f=l.useCallback(async()=>{u(!0);try{await h()}finally{u(!1),c(!1)}},[h]);return(l.useEffect(()=>{t<Date.now()-3e4&&c(!0)},[t]),l.useEffect(()=>{if(!r){let e=setTimeout(()=>{c(!0)},3e4);return()=>clearTimeout(e)}},[r]),r)?(0,n.jsx)(o.ToolbarButton,{title:"Refresh",onClick:e=>{e.preventDefault(),f()},children:(0,n.jsx)(a.JO,{icon:"rotate",className:(0,i.t)("size-4",d?"animate-spin":null)})}):null}},32538:function(e,t,r){"use strict";r.d(t,{Toolbar:function(){return l},ToolbarBody:function(){return s},ToolbarButton:function(){return o},ToolbarButtonGroups:function(){return i}});var n=r(27573);r(7653);var a=r(71474);function l(e){let{children:t}=e;return(0,n.jsx)("div",{className:(0,a.t)("flex","flex-row","items-center","gap-4","text-sm","px-4","py-1","rounded-full","truncate","text-light","dark:text-light"),children:t})}function s(e){return(0,n.jsx)("div",{className:"flex flex-col gap-1",children:e.children})}function i(e){return(0,n.jsx)("div",{className:"flex flex-row gap-2",children:e.children})}function o(e){let{children:t,...r}=e;return(0,n.jsx)("a",{...r,className:(0,a.t)("flex","flex-col","items-center","justify-center","size-11","gap-1","text-sm","rounded-full","hover:bg-dark-1","hover:text-white","truncate","text-light","dark:text-light","dark:hover:bg-dark-2","hover:shadow-lg","cursor-pointer"),children:t})}},38539:function(e,t,r){"use strict";r.r(t),r.d(t,{CookiesToast:function(){return u}});var n=r(27573),a=r(16378),l=r(7653),s=r(26445),i=r(364),o=r(38155),c=r(89039),d=r(71474);function u(e){let{privacyPolicy:t="https://policies.gitbook.com/privacy/cookies"}=e,[r,u]=l.useState(!1),h=(0,i.ZK)();if(l.useEffect(()=>{u(void 0===(0,c.Bi)())},[]),!r)return null;let f=e=>{(0,c.GQ)(e),window.location.reload()},m="cookies-description";return(0,n.jsxs)("div",{role:"dialog","data-testid":"cookies-dialog","aria-modal":"true","aria-label":(0,o.F)(h,"cookies_title"),"aria-describedby":m,className:(0,d.t)("fixed","z-10","bg-white","rounded","straight-corners:rounded-none","ring-1","ring-dark/2","shadow-1xs","p-4","pr-8","bottom-4","right-4","left-16","max-w-md","text-balance","sm:left-auto","dark:ring-light/2","dark:bg-dark"),children:[(0,n.jsx)("p",{id:m,className:(0,d.t)("text-sm"),children:(0,o.t)(h,"cookies_prompt",(0,n.jsx)("a",{href:t,className:(0,d.t)("text-primary-500","hover:text-primary-600","underline"),children:(0,o.t)(h,"cookies_prompt_privacy")}))}),(0,n.jsx)("button",{onClick:()=>u(!1),"aria-label":(0,o.F)(h,"cookies_close"),className:(0,d.t)("absolute","top-3","right-3","w-6","h-6","flex","justify-center","items-center","rounded-sm","hover:bg-dark/2","dark:hover:bg-light/1"),title:(0,o.F)(h,"cookies_close"),children:(0,n.jsx)(a.JO,{icon:"xmark",className:(0,d.t)("size-4")})}),(0,n.jsxs)("div",{className:(0,d.t)("mt-3","flex","flex-row","gap-2"),children:[(0,n.jsx)(s.zx,{variant:"primary",size:"small","aria-label":(0,o.F)(h,"cookies_accept"),onClick:()=>{f(!0)},children:(0,o.t)(h,"cookies_accept")}),(0,n.jsx)(s.zx,{variant:"secondary",size:"small","aria-label":(0,o.F)(h,"cookies_reject"),onClick:()=>{f(!1)},children:(0,o.t)(h,"cookies_reject")})]})]})}},24723:function(e,t,r){"use strict";r.d(t,{HeaderMobileMenu:function(){return d}});var n=r(27573),a=r(16378),l=r(67754),s=r(7653),i=r(364),o=r(71474);let c="navigation-open";function d(e){let t=(0,i.ZK)(),r=(0,l.usePathname)(),[d,u]=(0,s.useState)(!1),h=()=>{window.scrollY>=320?u(!0):u(!1)};return(0,s.useEffect)(()=>{document.body.classList.remove(c)},[r]),(0,s.useEffect)(()=>(window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}),[]),(0,n.jsx)("button",{...e,"aria-label":(0,i.Ff)(t,"table_of_contents_button_label"),onClick:()=>{!d&&document.body.classList.contains(c)?document.body.classList.remove(c):(document.body.classList.add(c),window.scrollTo(0,0))},className:(0,o.t)("flex","flex-row","items-center","hover:bg-dark/3","py-1","px-2","dark:hover:bg-light/2","rounded","straight-corners:rounded-sm","page-no-toc:hidden",e.className),children:(0,n.jsx)(a.JO,{icon:"bars",className:(0,o.t)("size-4","text-inherit")})})}},98918:function(e,t,r){"use strict";r.d(t,{SpacesDropdownMenuItem:function(){return o}});var n=r(27573),a=r(67754);r(16378),r(7653);var l=r(71474),s=r(26445);function i(e){let{children:t,active:r=!1,href:a}=e;return(0,n.jsx)(s.rU,{href:a,prefetch:!1,className:(0,l.t)("flex","flex-row","items-center","text-sm","px-3","py-1","rounded","straight-corners:rounded-sm",r?["bg-primary/3","dark:bg-light/2","text-primary-600"]:["hover:bg-dark/2","dark:hover:bg-light/2"]),children:t})}function o(e){let{variantSpace:t,active:r}=e,l=function(e){var t;let r=null!==(t=(0,a.useSelectedLayoutSegment)())&&void 0!==t?t:"",n=new URL(e);return n.pathname+="/".concat(r),n.pathname=n.pathname.replace(/\/{2,}/g,"/").replace(/\/$/,""),n.searchParams.set("fallback","true"),n.toString()}(t.url);return(0,n.jsx)(i,{href:l,active:r,children:t.title},t.id)}},82485:function(e,t,r){"use strict";r.r(t),r.d(t,{LoadIntegrations:function(){return a}});var n=r(7653);function a(){return n.useEffect(()=>{(function(e){for(var t,r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];((null===(t=window.GitBook)||void 0===t?void 0:t.events.get(e))||[]).forEach(e=>e(...n))})("load")},[]),null}window.GitBook={events:new Map,addEventListener:(e,t)=>{var r,n,a;let l=null!==(a=null===(r=window.GitBook)||void 0===r?void 0:r.events.get(e))&&void 0!==a?a:[];l.push(t),null===(n=window.GitBook)||void 0===n||n.events.set(e,l)},removeEventListener:(e,t)=>{var r,n;let a=null!==(n=null===(r=window.GitBook)||void 0===r?void 0:r.events.get(e))&&void 0!==n?n:[],l=a.indexOf(t);-1!==l&&a.splice(l,1)}}},18102:function(e,t,r){"use strict";r.r(t),r.d(t,{SearchButton:function(){return c}});var n=r(27573),a=r(16378),l=r(7653),s=r(364),i=r(71474),o=r(67491);function c(e){let{style:t,children:r}=e,l=(0,s.ZK)(),[,c]=(0,o.R)();return(0,n.jsxs)("button",{onClick:()=>{c({ask:!1,global:!1,query:""})},"aria-label":(0,s.Ff)(l,"search"),className:(0,i.t)("flex","flex-1","flex-row","justify-center","items-center","px-2","gap-3","text-dark/7","min-h-[2.5rem]","w-[2.5rem]","rounded-lg","straight-corners:rounded-none","bg-dark/2","transition-colors","transition-opacity","ease-out","hover:opacity-8","ring-1","ring-inset","ring-dark/1","dark:bg-light/1","dark:ring-light/1","dark:text-light/7","[&>p]:hidden","[&>span]:hidden","md:justify-start","md:[&>p]:flex","md:[&>span]:flex","md:w-full","md:px-3.5","text-base",t),children:[(0,n.jsx)("div",{className:(0,i.t)("text-dark/7","pt-1.5","pb-2","dark:text-light/7"),children:(0,n.jsx)(a.JO,{icon:"magnifying-glass",className:(0,i.t)("shrink-0","size-4")})}),r,(0,n.jsx)(d,{})]})}let d=()=>{let[e,t]=(0,l.useState)("win");return(0,l.useEffect)(()=>{t(function(){let e=navigator.platform.toLowerCase();return e.includes("mac")?"mac":(e.includes("win"),"win")}())},[]),(0,n.jsxs)("span",{className:(0,i.t)("hidden","md:inline","justify-end","text-xs","text-dark/5","dark:text-light/5",'[font-feature-settings:"calt",_"case"]'),children:["mac"===e?"⌘":"Ctrl"," + K"]})}},71718:function(e,t,r){"use strict";r.r(t),r.d(t,{SearchModal:function(){return F}});var n=r(27573),a=r(16378),l=r(43452),s=r(89834),i=r(67754),o=r(7653),c=r(17885),d=r(7488),u=r(364),h=r(71474),f=r(26445),m=r(38155);r(71364);var x=r(30359),p=(0,x.$)("a501ac45ed3ebadb223a733b12ac4f508a02a6f1");(0,x.$)("88fb2d467ee087e4b48b9e692a45a74cb8eca346");var g=(0,x.$)("96d2ca57d3a2e5d7e3d0d8e99be6f13dddcbb28a"),b=(0,x.$)("c0d1b952c0b66e493a2c8c90f33fbbc426d83a8c"),v=(0,x.$)("570add0a00dbdd6e818c5df488df0dff652dd942"),k=r(67491);let y=(0,d.cn)({key:"searchAskState",default:null});function w(e){let{spaceId:t,query:r}=e,a=(0,u.ZK)(),[,l]=(0,k.R)(),[s,i]=(0,d.FV)(y);if(o.useEffect(()=>{let e=!1;return i({type:"loading"}),(async()=>{var n;let a=(n=v(t,r),{[Symbol.asyncIterator]:function(){return{current:n,async next(){let{iteratorResult:e,next:t}=await this.current;return t?this.current=t:e.done=!0,e}}}});for await(let t of(l(e=>e?{...e,ask:!0,query:r}:null),a)){if(e)return;i({type:"answer",answer:t})}})().catch(t=>{e||i({type:"error"})}),()=>{e=!0}},[t,r,l,i]),o.useEffect(()=>()=>{i(null)},[i]),s&&"answer"in s){var c;null==s||null===(c=s.answer)||void 0===c||c.body}return(0,n.jsxs)("div",{className:(0,h.t)("max-h-[60vh]","overflow-y-auto","border-t","border-dark/2","dark:border-light/1"),children:[(null==s?void 0:s.type)==="answer"?(0,n.jsx)(n.Fragment,{children:s.answer?(0,n.jsx)("div",{className:(0,h.t)("w-full"),children:(0,n.jsx)(j,{answer:s.answer})}):(0,n.jsx)("div",{className:(0,h.t)("p-4"),children:(0,m.t)(a,"search_ask_no_answer")})}):null,(null==s?void 0:s.type)==="error"?(0,n.jsx)("div",{className:(0,h.t)("p-4"),children:(0,m.t)(a,"search_ask_error")}):null,(null==s?void 0:s.type)==="loading"?(0,n.jsx)("div",{className:(0,h.t)("w-full","flex","items-center","justify-center"),children:(0,n.jsx)(f.gb,{className:(0,h.t)("w-5","py-4","text-primary")})}):null]})}function j(e){let{answer:t}=e,r=(0,u.ZK)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{"data-test":"search-ask-answer",className:(0,h.t)("mt-4","px-4","text-dark/9","dark:text-light/8"),children:t.hasAnswer?t.body:(0,m.t)(r,"search_ask_no_answer")}),t.followupQuestions.length>0?(0,n.jsx)(_,{followupQuestions:t.followupQuestions}):null,t.sources.length>0?(0,n.jsx)(N,{hasAnswer:t.hasAnswer,sources:t.sources,language:r}):null]})}function _(e){let{followupQuestions:t}=e,r=(0,k.q)();return(0,n.jsx)("div",{className:(0,h.t)("mt-7 mb-4","flex","flex-col","flex-wrap","gap-1"),children:t.map(e=>(0,n.jsxs)(f.rU,{className:(0,h.t)("text-sm","font-medium","inline-flex","items-start","gap-2","px-4","py-1","text-primary-500","focus-within:text-primary-700","hover:bg-primary/2","dark:text-primary-400","dark:hover:bg-primary-500/3"),...r({query:e,ask:!0}),children:[(0,n.jsx)(a.JO,{icon:"magnifying-glass",className:(0,h.t)("size-[15px]","shrink-0","mt-0.5","[opacity:0.64]")}),(0,n.jsx)("span",{children:e})]},e))})}function N(e){let{sources:t,language:r,hasAnswer:l}=e;return(0,n.jsxs)("div",{className:(0,h.t)("flex","flex-wrap","gap-2","mt-7","py-4","px-4","border-t","border-dark/2","dark:border-light/1"),children:[(0,n.jsx)("span",{className:(0,h.t)("text-sm"),children:(0,m.t)(r,l?"search_ask_sources":"search_ask_sources_no_answer")}),t.map(e=>(0,n.jsx)("span",{className:(0,h.t)(),children:(0,n.jsxs)(f.rU,{className:(0,h.t)("flex","text-sm","text-dark/7","hover:underline","focus-within:text-primary-700","dark:text-light/8"),href:e.href,prefetch:!1,children:[(0,n.jsx)(a.JO,{icon:"arrow-up-right",className:(0,h.t)("text-dark/6","w-[15px]","h-[15px]","shrink-0","mt-0.5","mr-0.5","dark:text-light/6")}),e.title]})},e.id))]})}var C=r(1457);let q=new Set(["who","what","where","when","why","how","explain","is","are","was","were","do","does","did","which","whom","whose","can","have","give","tell","show","find"]);function E(e){let{query:t,text:r,highlight:a=["text-bold","text-primary"]}=e,l=t.toLowerCase().split(" ").reduce((e,t)=>e.reduce((e,r)=>{if(r.match)return e.push(r),e;let{text:n}=r,a=n.toLowerCase().indexOf(t);if(a>=0){let r=n.slice(0,a),l=n.slice(a,a+t.length),s=n.slice(a+t.length);return r.length>0&&e.push({text:r}),l.length>0&&e.push({text:l,match:t}),s.length>0&&e.push({text:s}),e}return e.push({text:n}),e},[]),[{text:r}]);return(0,n.jsx)("span",{className:(0,h.t)("whitespace-break-spaces"),children:l.map((e,t)=>(0,n.jsx)("span",{className:(0,h.t)(e.match?a:null),children:e.text},t))})}let P=o.forwardRef(function(e,t){let{query:r,item:a,active:l}=e;return(0,n.jsxs)(f.rU,{ref:t,href:a.href,className:(0,h.t)("flex","flex-row","px-6","py-3","hover:bg-dark-4/2","text-base","text-dark","font-semibold","first:mt-0","[&:has(+.search-section-result-item):not(:first-child)]:mt-6","dark:text-light","dark:hover:bg-light-4/2",l?["bg-dark/1","dark:bg-light/1"]:null),children:[a.spaceTitle?(0,n.jsx)("span",{className:(0,h.t)("opacity-6","font-normal","mr-2"),children:a.spaceTitle+" ›"}):null,(0,n.jsx)(E,{query:r,text:a.title})]})}),R=o.forwardRef(function(e,t){let{question:r,recommended:l=!1,active:s,onClick:i}=e,o=(0,u.ZK)(),c=(0,k.q)();return(0,n.jsxs)(f.rU,{ref:t,onClick:i,className:(0,h.t)("flex","flex-row","px-4","py-2","hover:bg-dark-4/2","text-dark/7","text-sm","font-medium","first:mt-0","last:pb-3","dark:text-light/8","dark:hover:bg-light-4/2",s?["bg-dark/1","dark:bg-light/1"]:null),...c({ask:!0,query:r}),children:[(0,n.jsx)(a.JO,{icon:"magnifying-glass",className:(0,h.t)("w-[15px]","h-[15px]","shrink-0","mt-0.5","mr-4","text-dark/5","dark:text-light/5")}),l?r:(0,u.t)(o,"search_ask",[r])]})}),S=o.forwardRef(function(e,t){let{query:r,item:a,active:l}=e;return(0,n.jsx)(f.rU,{ref:t,href:a.href,className:(0,h.t)("search-section-result-item","[&:has(+:not(&))]:mb-6","flex","flex-col","pl-6","hover:bg-dark-4/2","dark:hover:bg-light-4/2",l?["bg-dark/1","dark:bg-light/1"]:null),children:(0,n.jsxs)("div",{className:(0,h.t)("border-l","p-3","border-dark/2","dark:border-light/2"),children:[a.title?(0,n.jsx)("p",{className:(0,h.t)("text-base","text-dark/7","dark:text-light/8"),children:(0,n.jsx)(E,{query:r,text:a.title})}):null,a.body?(0,n.jsx)("p",{className:(0,h.t)("text-sm","text-dark","line-clamp-6","linear-mask-gradient","z-[-1]","relative","dark:text-light/8"),children:(0,n.jsx)(E,{query:r,text:a.body})}):null]})})}),T=o.forwardRef(function(e,t){let{children:r,query:a,spaceId:l,revisionId:s,parent:i,withAsk:c,onSwitchToAsk:d}=e,m=(0,u.ZK)(),x=o.useRef(null),[v,k]=o.useState(null),[y,w]=o.useState(null),j=o.useRef([]),_=o.useRef(null);o.useEffect(()=>{if(a)return c&&k(e=>L(e,a)),x.current=setTimeout(async()=>{w(null);let e=await (i?b(i,a):g(l,s,a));k(c?L(e,a):e)},350),()=>{x.current&&(clearTimeout(x.current),x.current=null)};{if(!c)return;let e=!1;return(_.current?Promise.resolve(_.current):p(l)).then(t=>{_.current=t,e||k(t.map(e=>({type:"recommended-question",id:e,question:e})))}),()=>{e=!0}}},[a,l,s,i,c]),o.useEffect(()=>{var e;null!==y&&j.current[y]&&(null===(e=j.current[y])||void 0===e||e.scrollIntoView({block:"nearest",inline:"nearest"}))},[y,j]);let N=o.useCallback(e=>{v&&w(t=>null===t?0:Math.max(Math.min(t+e,v.length-1),0))},[v]),q=o.useCallback(()=>{var e;null!==y&&j.current[y]&&(null===(e=j.current[y])||void 0===e||e.click())},[y,j]);return(o.useImperativeHandle(t,()=>({moveUp:()=>{N(-1)},moveDown:()=>{N(1)},select:q}),[N,q]),v)?(0,n.jsxs)("div",{className:(0,h.t)("max-h-[60vh]","overflow-auto","relative","shadow-[0_1px_0_0_inset]","shadow-dark/2","dark:shadow-light/2"),children:[r,0===v.length?(0,n.jsx)("div",{"data-test":"search-noresults",className:(0,h.t)("text-sm","text-dark","p-6","text-center","dark:text-light/8"),children:(0,u.t)(m,"search_no_results",a)}):(0,n.jsx)("div",{"data-test":"search-results",children:v.map((e,t)=>{switch(e.type){case"page":return(0,n.jsx)(P,{ref:e=>{j.current[t]=e},query:a,item:e,active:t===y},e.id);case"question":return(0,n.jsx)(R,{ref:e=>{j.current[t]=e},question:a,active:t===y,onClick:d},e.id);case"recommended-question":return(0,n.jsx)(R,{ref:e=>{j.current[t]=e},question:e.question,active:t===y,onClick:d,recommended:!0},e.id);case"section":return(0,n.jsx)(S,{ref:e=>{j.current[t]=e},query:a,item:e,active:t===y},e.id);default:(0,C.ZP)(e)}})})]}):a?(0,n.jsx)("div",{className:(0,h.t)("flex","items-center","justify-center","py-8"),children:(0,n.jsx)(f.gb,{className:(0,h.t)("w-6","text-primary")})}):null});function L(e,t){let r=e?e.filter(e=>"question"!==e.type):null;return!function(e){if(e.length>25||e.includes("?")||e.includes(" "))return!0;let t=e.toLowerCase().trim().split(/\s+/);if(0===t.length)return!1;for(let e of t)if(q.has(e))return!0;return!1}(t)?r:[{type:"question",id:"question",query:t},...null!=r?r:[]]}function z(e){let{spaceTitle:t}=e,[r,a]=(0,k.R)(),l=(0,u.ZK)();return r?(0,n.jsxs)("div",{role:"toolbar","aria-orientation":"horizontal",className:(0,h.t)("overflow-x-auto","hide-scroll","flex","flex-row","py-3","gap-0","px-0","pt-0","sticky","z-[0]","w-[calc(100%-1px)]","left-[1px]","top-[0px]","bg-gradient-to-b","from-white","to-transparent","from-60%","dark:from-dark-3","shadow-[0_1px_0_0_inset]","shadow-dark/2","dark:shadow-light/2","md:px-6","md:gap-3"),children:[(0,n.jsx)(U,{active:!r.global,onClick:()=>{a({...r,global:!1})},children:(0,u.t)(l,"search_scope_space",t)}),(0,n.jsx)(U,{active:r.global,onClick:()=>{a({...r,global:!0})},children:(0,u.t)(l,"search_scope_all")})]}):null}function U(e){let{onClick:t,children:r,active:a}=e;return(0,n.jsx)("button",{role:"tab",type:"button","aria-selected":a,onClick:t,className:(0,h.t)("text-xs","transition-colors","duration-75","px-2.5","py-1.5","border-t","relative","top-[0px]","z-[1]","border-dark/2","whitespace-pre","hover:border-dark/6","dark:hover:border-light/6","md:px-1",a?["text-primary-400","border-primary-400","hover:border-primary-400","dark:hover:text-primary-400","dark:border-primary-400","dark:hover:border-primary-400"]:null),children:r})}var O=r(76777);function F(e){let[t,r]=(0,k.R)(),a=(0,d.sJ)(y),u=(0,i.useRouter)();(0,c.y1)("mod+k",e=>{e.preventDefault(),r({ask:!1,query:"",global:!1})},[]);let f=null!==t;if(o.useEffect(()=>(f&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="auto"}),[f]),null===t)return null;let m=async e=>{await r(null),e&&u.push(e)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{role:"dialog",className:(0,h.t)("flex","items-start","justify-center","fixed","inset-0","bg-dark/4","backdrop-blur-2xl","opacity-[1]","z-30","px-4","pt-4","dark:bg-dark/8","md:pt-[min(8vw,_6rem)]"),onClick:()=>{m()},children:[(0,n.jsx)(l.M,{children:(null==a?void 0:a.type)==="loading"?(0,n.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},className:(0,h.t)("w-[100vw]","h-[100vh]","fixed","inset-0","z-10","pointer-events-none"),children:(0,n.jsx)(O.K,{gridStyle:["h-[100vh]","aspect-auto","top-[-30%]"],pulse:!0,tile:96,style:["grid"]})},"loading"):null}),(0,n.jsx)(I,{...e,state:t,onChangeQuery:e=>{r(e)},onClose:m})]})})}function I(e){let{spaceId:t,revisionId:r,spaceTitle:l,withAsk:s,parent:i,state:c,onChangeQuery:d,onClose:f}=e,m=(0,u.ZK)(),x=o.useRef(null),p=o.useRef(null);return o.useEffect(()=>{var e;null===(e=p.current)||void 0===e||e.focus()},[]),(0,n.jsxs)("div",{role:"dialog","aria-label":(0,u.Ff)(m,"search"),className:(0,h.t)("z-40","flex","flex-col","bg-white","max-w-[768px]","mt-[-1px]","w-full","max-h","rounded-lg","ring-1","ring-dark/1","shadow-2xl","backdrop-blur-lg","overflow-hidden","dark:ring-inset","dark:bg-dark-3","dark:ring-light/2"),onClick:e=>{e.stopPropagation()},children:[(0,n.jsxs)("div",{className:(0,h.t)("flex","flex-row","items-center"),children:[(0,n.jsx)("div",{className:(0,h.t)("p-2","pl-4"),children:(0,n.jsx)(a.JO,{icon:"magnifying-glass",className:(0,h.t)("size-4","text-dark/4","dark:text-light/5")})}),(0,n.jsx)("div",{className:(0,h.t)("flex-1"),children:(0,n.jsx)("input",{ref:p,value:c.query,onKeyDown:e=>{var t,r,n;"Escape"===e.key?f():"ArrowUp"===e.key?(e.preventDefault(),null===(t=x.current)||void 0===t||t.moveUp()):"ArrowDown"===e.key?(e.preventDefault(),null===(r=x.current)||void 0===r||r.moveDown()):"Enter"===e.key&&(e.preventDefault(),null===(n=x.current)||void 0===n||n.select())},onChange:e=>{d({ask:!1,query:e.target.value,global:c.global})},className:(0,h.t)("text-dark","placeholder:text-dark/7","flex","resize-none","w-full","h-12","p-2","focus:outline-none","bg-transparent","whitespace-pre-line","dark:text-light","dark:placeholder:text-light/7"),placeholder:(0,u.Ff)(m,s?"search_ask_input_placeholder":"search_input_placeholder"),spellCheck:"false",autoComplete:"off",autoCorrect:"off"})})]}),c.ask&&s?null:(0,n.jsx)(T,{ref:x,spaceId:t,revisionId:r,parent:c.global?i:null,query:c.query,withAsk:s,onSwitchToAsk:()=>{d({ask:!0,query:c.query,global:c.global})},children:i&&c.query?(0,n.jsx)(z,{spaceTitle:l}):null}),c.query&&c.ask&&s?(0,n.jsx)(w,{spaceId:t,query:c.query}):null]})}},67491:function(e,t,r){"use strict";r.d(t,{R:function(){return i},q:function(){return o}});var n=r(97268),a=r(7653);let l={q:n.Oi,ask:n.AE,global:n.AE},s={history:"replace"};function i(){let[e,t]=(0,n.XI)(l,s),r=a.useMemo(()=>null===e||null===e.q?null:{query:e.q,ask:!!e.ask,global:!!e.global},[e]),i=a.useRef(r);return a.useLayoutEffect(()=>{i.current=r},[r]),[r,a.useCallback(e=>("function"==typeof e&&(e=e(i.current)),null===e)?t({q:null,ask:null,global:null}):t({q:e.query,ask:!!e.ask||null,global:!!e.global||null}),[t])]}function o(){let[,e]=i();return a.useCallback(t=>{var r;let n=new URLSearchParams;return n.set("q",null!==(r=t.query)&&void 0!==r?r:""),t.ask?n.set("ask","on"):n.delete("ask"),t.global?n.set("global","on"):n.delete("global"),{href:"?"+n.toString(),prefetch:!1,onClick:r=>{r.preventDefault(),e(e=>({query:"",ask:!1,global:!1,...null!=e?e:{},...t}))}}},[e])}},11364:function(e,t,r){"use strict";r.d(t,{L:function(){return o},TOCScrollContainer:function(){return i}});var n=r(27573),a=r(7653),l=r(71474);let s=a.createContext(null);function i(e){let{children:t,className:r}=e,i=a.createRef();return(0,n.jsx)(s.Provider,{value:i,children:(0,n.jsx)("div",{ref:i,className:(0,l.t)(r),children:t})})}function o(e){let{isActive:t,linkRef:r}=e,n=function(){let e=a.useContext(s);if(!e)throw Error("Context `TOCScrollContainerRefContext` must be used within Provider");return e}(),l=a.useRef(!1);a.useLayoutEffect(()=>{if(!t){l.current=!1;return}if(l.current)return;let e=r.current,a=n.current;e&&a&&function(e,t){let r=e.offsetTop,n=t.scrollTop,a=n+t.clientHeight;return r<n+200||r>a-200}(e,a)&&(null==a||a.scrollTo({top:e.offsetTop-200}),l.current=!0)},[t,r,n])}},71820:function(e,t,r){"use strict";r.d(t,{ToggleableLinkItem:function(){return g}});var n=r(27573),a=r(16378),l=r(24160),s=r(35924),i=r(89834),o=r(67754),c=r(7653),d=r(71474),u=r(11364),h=r(25939),f=r(26445);let m={opacity:1,height:"auto",display:"block"},x={opacity:0,height:0,transitionEnd:{display:"none"}},p=(0,l.E)(.02,{ease:e=>Math.pow(e,2)});function g(e){var t;let{href:r,children:l,descendants:g,pathname:b}=e,v=decodeURIComponent(null!==(t=(0,o.useSelectedLayoutSegment)())&&void 0!==t?t:""),k=v===b,y=!!g,w=y&&(k||v.startsWith(b+"/")),[j,_]=(0,s.H)(),[N,C]=c.useState(w),q=(0,h.tm)();c.useEffect(()=>{y&&C(e=>e||w)},[w,y]),c.useEffect(()=>{if(q&&y)try{_(j.current,N?m:x,{duration:.1});let e="& > ul > li";N?_(e,{opacity:1},{delay:p}):_(e,{opacity:0})}catch(e){console.error(e)}},[N,q,y,_,j]);let E=c.createRef();return(0,u.L)({linkRef:E,isActive:k}),(0,n.jsxs)("div",{children:[(0,n.jsxs)(f.rU,{ref:E,href:r,...k?{"aria-current":"page"}:{},className:(0,d.t)("group/toclink","flex","flex-row","justify-between","pl-5","pr-1.5","py-1.5","text-sm","transition-colors","relative","text-balance","before:border-l","before:absolute","before:left-[-1px]","before:top-0","before:h-full","rounded-md","straight-corners:rounded-none","[&+div_a]:rounded-l-none",k?["before:border-primary-500","font-semibold","text-primary","hover:bg-primary/3","dark:before:border-primary-400","dark:text-primary-400","hover:before:border-primary","dark:hover:bg-primary-500/3","dark:hover:before:border-primary"]:["before:border-transparent","font-normal","text-dark/8","hover:bg-dark/1","hover:text-dark/9","hover:before:border-dark/3","dark:text-light/8","dark:hover:bg-light/2","dark:hover:before:border-light/3","dark:hover:text-light/9"]),children:[l,y?(0,n.jsx)("span",{className:(0,d.t)("group","relative","rounded-full","straight-corners:rounded-sm","w-5","h-5","after:grid-area-1-1","after:absolute","after:-top-1","after:grid","after:-left-1","after:w-7","after:h-7","hover:bg-dark/2","hover:text-current","dark:hover:bg-light/2","dark:hover:text-current",k?["hover:bg-primary/4","dark:hover:bg-primary/4"]:[]),onClick:e=>{e.preventDefault(),e.stopPropagation(),C(e=>!e)},children:(0,n.jsx)(a.JO,{icon:"chevron-right",className:(0,d.t)("grid","flex-shrink-0","size-3","m-1","transition-[opacity]","text-current","transition-transform","[opacity:0.40]","group-hover:[opacity:1]",N?["rotate-90"]:["rotate-0"])})}):null]}),y?(0,n.jsx)(i.E.div,{ref:j,className:(0,d.t)(N?null:"[&_ul>li]:opacity-1"),initial:N?m:x,children:g}):null]})}},48450:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeToggler:function(){return c}});var n=r(27573),a=r(16378),l=r(18250),s=r(7653),i=r(364),o=r(71474);function c(e){let t=(0,i.ZK)(),[r,a]=s.useState(!1),{theme:c,setTheme:u}=(0,l.F)();s.useEffect(()=>{a(!0)},[]);let h=e=>{u(e)};return(0,n.jsxs)("div",{role:"radiogroup",className:(0,o.t)("flex","flex-row","rounded-full","straight-corners:rounded-sm","border","border-dark/3","dark:border-light/2"),children:[(0,n.jsx)(d,{active:r&&"light"===c,icon:"sun-bright",onClick:()=>h("light"),title:(0,i.Ff)(t,"switch_to_light_theme")}),(0,n.jsx)(d,{active:r&&"system"===c,icon:"desktop",onClick:()=>h("system"),title:(0,i.Ff)(t,"switch_to_system_theme")}),(0,n.jsx)(d,{active:r&&"dark"===c,icon:"moon",onClick:()=>h("dark"),title:(0,i.Ff)(t,"switch_to_dark_theme")})]})}function d(e){let{icon:t,onClick:r,title:l,active:s}=e;return(0,n.jsx)("button",{type:"button",role:"radio",onClick:r,"aria-label":l,"aria-checked":s,className:(0,o.t)("p-1","m-1","group","rounded-full","straight-corners:rounded-sm",s?["bg-primary-600/4","dark:bg-primary-400/2"]:null,"text-dark","dark:text-light/7"),children:(0,n.jsx)(a.JO,{icon:t,className:(0,o.t)("size-4",s?["text-primary-600","dark:text-primary-400"]:null)})})}},89039:function(e,t,r){"use strict";r.d(t,{Bi:function(){return u},GQ:function(){return d},OP:function(){return o}});var n=r(7220),a=r(68571);let l="__gitbook_cookie_granted",s=null,i=null;async function o(){return s||(i||(i=c().finally(()=>{i=null})),s=await i),s}async function c(){if(u())return h();let e=n.Z.get("__session");if(e)return e;{var t;let e=h(),r=new URL(null!==(t=a.env.NEXT_PUBLIC_GITBOOK_APP_URL)&&void 0!==t?t:"https://app.gitbook.com");r.pathname="/__session",r.searchParams.set("proposed",e);try{let e=await fetch(r,{method:"GET",credentials:"include",cache:"no-cache",mode:"cors"}),{deviceId:t}=await e.json();return t}catch(t){return console.error("Failed to fetch visitor session ID",t),e}}}function d(e){n.Z.set(l,e?"yes":"no",{expires:365,sameSite:"none",secure:!0})}function u(){let e=n.Z.get(l);return"yes"!==e&&("no"===e||void 0)}function h(){return"undefined"!=typeof crypto&&crypto.randomUUID?"".concat(crypto.randomUUID(),"R"):"".concat(Math.random().toString(36).substring(2),"R")}},71166:function(e){e.exports={containerHeaderlinks:"headerLinks_containerHeaderlinks__GUgiv",linkEllipsis:"headerLinks_linkEllipsis__Z01IN"}}},function(e){e.O(0,[5538,4428,3335,2634,6718,4037,8381,1698,4377,6445,1293,2632,1744],function(){return e(e.s=26278)}),_N_E=e.O()}]);
//# sourceMappingURL=layout-e6c9e9cb143d3791.js.map