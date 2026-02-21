const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox._Hx565f_.js","assets/chunks/framework.DHtr43LW.js"])))=>i.map(i=>d[i]);
import{d as k,c as r,r as _,n as C,o as s,a as R,t as L,b as S,w as m,T as ln,e as g,_ as h,u as Sn,i as ap,f as sp,g as An,h as N,j as i,k as d,l as Q,m as Mn,p as H,q as op,s as Nn,v as rp,x as O,y as cn,z as U,A as On,B as dn,C as en,D as un,E as Dn,F as Fn,G as w,H as z,I as q,J as y,K as J,L as Jn,M as ip,N as lp,O as G,P as _n,Q as Kn,R as cp,S as bn,U as on,V as Gn,W as dp,X as up,Y as _p,Z as qn,$ as Wn,a0 as fp,a1 as mp,a2 as Z,a3 as hp,a4 as vp,a5 as bp,a6 as Bn,a7 as gp,a8 as $p,a9 as x}from"./chunks/framework.DHtr43LW.js";const kp=k({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(p){return(n,e)=>(s(),r("span",{class:C(["VPBadge",p.type])},[_(n.$slots,"default",{},()=>[R(L(p.text),1)])],2))}}),Pp={key:0,class:"VPBackdrop"},Tp=k({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(p){return(n,e)=>(s(),S(ln,{name:"fade"},{default:m(()=>[p.show?(s(),r("div",Pp)):g("",!0)]),_:1}))}}),yp=h(Tp,[["__scopeId","data-v-c79a1216"]]),V=Sn;function Sp(p,n){let e,t=!1;return()=>{e&&clearTimeout(e),t?e=setTimeout(p,n):(p(),(t=!0)&&setTimeout(()=>t=!1,n))}}function gn(p){return p.startsWith("/")?p:`/${p}`}function Vn(p){const{pathname:n,search:e,hash:t,protocol:a}=new URL(p,"http://a.com");if(ap(p)||p.startsWith("#")||!a.startsWith("http")||!sp(n))return p;const{site:o}=V(),l=n.endsWith("/")||n.endsWith(".html")?p:p.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${e}${t}`);return An(l)}function tn({correspondingLink:p=!1}={}){const{site:n,localeIndex:e,page:t,theme:a,hash:o}=V(),l=N(()=>({label:n.value.locales[e.value]?.label,link:n.value.locales[e.value]?.link||(e.value==="root"?"/":`/${e.value}/`)}));return{localeLinks:N(()=>Object.entries(n.value.locales).flatMap(([u,f])=>l.value.label===f.label?[]:{text:f.label,link:Ap(f.link||(u==="root"?"/":`/${u}/`),a.value.i18nRouting!==!1&&p,t.value.relativePath.slice(l.value.link.length-1),!n.value.cleanUrls)+o.value,lang:f.lang,dir:f.dir})),currentLang:l}}function Ap(p,n,e,t){return n?p.replace(/\/$/,"")+gn(e.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,t?".html":"")):p}const Np={class:"NotFound"},Op={class:"code"},Bp={class:"title"},Vp={class:"quote"},xp={class:"action"},Lp=["href","aria-label"],Cp=k({__name:"NotFound",setup(p){const{theme:n}=V(),{currentLang:e}=tn();return(t,a)=>(s(),r("div",Np,[i("p",Op,L(d(n).notFound?.code??"404"),1),i("h1",Bp,L(d(n).notFound?.title??"PAGE NOT FOUND"),1),a[0]||(a[0]=i("div",{class:"divider"},null,-1)),i("blockquote",Vp,L(d(n).notFound?.quote??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),i("div",xp,[i("a",{class:"link",href:d(An)(d(n).notFound?.link??d(e).link),"aria-label":d(n).notFound?.linkLabel??"go to home"},L(d(n).notFound?.linkText??"Take me home"),9,Lp)])]))}}),wp=h(Cp,[["__scopeId","data-v-829df670"]]);function Yn(p,n){if(Array.isArray(p))return sn(p);if(p==null)return[];n=gn(n);const e=Object.keys(p).sort((a,o)=>o.split("/").length-a.split("/").length).find(a=>n.startsWith(gn(a))),t=e?p[e]:[];return Array.isArray(t)?sn(t):sn(t.items,t.base)}function Ip(p){const n=[];let e=0;for(const t in p){const a=p[t];if(a.items){e=n.push(a);continue}n[e]||n.push({items:[]}),n[e].items.push(a)}return n}function Mp(p){const n=[];function e(t){for(const a of t)a.text&&a.link&&n.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&e(a.items)}return e(p),n}function $n(p,n){return Array.isArray(n)?n.some(e=>$n(p,e)):Q(p,n.link)?!0:n.items?$n(p,n.items):!1}function sn(p,n){return[...p].map(e=>{const t={...e},a=t.base||n;return a&&t.link&&(t.link=a+t.link.replace(/^\//,a.endsWith("/")?"":"/")),t.items&&(t.items=sn(t.items,a)),t})}function Dp(){const{hasSidebar:p}=W(),n=Mn("(min-width: 960px)"),e=Mn("(min-width: 1280px)");return{isAsideEnabled:N(()=>!e.value&&!n.value?!1:p.value?e.value:n.value)}}const Ep=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,kn=[];function Qn(p){return typeof p.outline=="object"&&!Array.isArray(p.outline)&&p.outline.label||p.outlineTitle||"On this page"}function jp(p){const n=[...document.querySelectorAll(".VPDoc h1, .VPDoc h2, .VPDoc h3, .VPDoc h4, .VPDoc h5, .VPDoc h6")].filter(e=>e.id&&e.hasChildNodes()).map(e=>{const t=Number(e.tagName[1]);return{element:e,title:zp(e),link:"#"+e.id,level:t}});return Rp(n,p)}function zp(p){let n="";for(const e of p.childNodes)if(e.nodeType===1){if(Ep.test(e.className))continue;n+=e.textContent}else e.nodeType===3&&(n+=e.textContent);return n.trim()}function Rp(p,n){if(n===!1)return[];const e=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[t,a]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;return Fp(p,t,a)}function Hp(p,n){const{isAsideEnabled:e}=Dp(),t=Sp(o,100);let a=null;H(()=>{requestAnimationFrame(o),window.addEventListener("scroll",t)}),op(()=>{l(location.hash)}),Nn(()=>{window.removeEventListener("scroll",t)});function o(){if(!e.value)return;const c=window.scrollY,u=window.innerHeight,f=document.body.offsetHeight,b=Math.abs(c+u-f)<1,v=kn.map(({element:P,link:A})=>({link:A,top:Up(P)})).filter(({top:P})=>!Number.isNaN(P)).sort((P,A)=>P.top-A.top);if(!v.length){l(null);return}if(c<1){l(null);return}if(b){l(v[v.length-1].link);return}let $=null;for(const{link:P,top:A}of v){if(A>c+rp()+4)break;$=P}l($)}function l(c){a&&a.classList.remove("active"),c==null?a=null:a=p.value.querySelector(`a[href="${decodeURIComponent(c)}"]`);const u=a;u?(u.classList.add("active"),n.value.style.top=u.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function Up(p){let n=0;for(;p!==document.body;){if(p===null)return NaN;n+=p.offsetTop,p=p.offsetParent}return n}function Fp(p,n,e){kn.length=0;const t=[],a=[];return p.forEach(o=>{const l={...o,children:[]};let c=a[a.length-1];for(;c&&c.level>=l.level;)a.pop(),c=a[a.length-1];if(l.element.classList.contains("ignore-header")||c&&"shouldIgnore"in c){a.push({level:l.level,shouldIgnore:!0});return}l.level>e||l.level<n||(kn.push({element:l.element,link:l.link}),c?c.children.push(l):t.push(l),a.push(l))}),t}const X=O(!1);function Jp(p){let n;cn(()=>{n=X.value?document.activeElement:void 0}),H(()=>{window.addEventListener("keyup",e)}),Nn(()=>{window.removeEventListener("keyup",e)});function e(t){t.key==="Escape"&&X.value&&(p(),n?.focus())}}function Kp(){function p(){X.value=!0}function n(){X.value=!1}function e(){X.value?n():p()}return{isOpen:X,open:p,close:n,toggle:e}}function Gp(p){const{page:n,hash:e}=V(),t=O(!1),a=N(()=>p.value.collapsed!=null),o=N(()=>!!p.value.link),l=O(!1),c=()=>{l.value=Q(n.value.relativePath,p.value.link)};U([n,p,e],c),H(c);const u=N(()=>l.value?!0:p.value.items?$n(n.value.relativePath,p.value.items):!1),f=N(()=>!!(p.value.items&&p.value.items.length));cn(()=>{t.value=!!(a.value&&p.value.collapsed)}),On(()=>{(l.value||u.value)&&(t.value=!1)});function b(){a.value&&(t.value=!t.value)}return{collapsed:t,collapsible:a,isLink:o,isActiveLink:l,hasActiveLink:u,hasChildren:f,toggle:b}}const Pn=dn([]),pn=dn([]),Tn=dn(!1);function W(){const{frontmatter:p,theme:n}=V(),e=N(()=>!!(p.value.isHome??p.value.layout==="home")),t=N(()=>p.value.sidebar!==!1&&pn.value.length>0&&!e.value),a=N(()=>t.value&&Tn.value),o=N(()=>t.value?Ip(pn.value):[]),l=N(()=>e.value?!1:p.value.aside!=null?!!p.value.aside:n.value.aside!==!1),c=N(()=>l.value?p.value.aside==null?n.value.aside==="left":p.value.aside==="left":!1),u=N(()=>Pn.value.length>0);return{isHome:e,sidebar:Dn(pn),sidebarGroups:o,hasSidebar:t,isSidebarEnabled:a,hasAside:l,leftAside:c,headers:Dn(Pn),hasLocalNav:u}}function qp({closeSidebar:p}){const{frontmatter:n,page:e,theme:t}=V();U(()=>[e.value.relativePath,t.value.sidebar],([o,l])=>{const c=l?Yn(l,o):[];JSON.stringify(c)!==JSON.stringify(pn.value)&&(pn.value=c)},{immediate:!0,deep:!0,flush:"sync"}),Fn(()=>{Pn.value=jp(n.value.outline??t.value.outline)}),en&&(Tn.value=window.innerWidth>=960,window.addEventListener("resize",()=>{Tn.value=window.innerWidth>=960},{passive:!0}));const a=un();U(()=>a.path,p),Jp(p)}const Xn=Symbol("layout-info"),Wp=["href","title"],Yp=k({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(p){return(n,e)=>{const t=q("VPDocOutlineItem",!0);return s(),r("ul",{class:C(["VPDocOutlineItem",p.root?"root":"nested"])},[(s(!0),r(w,null,z(p.headers,({children:a,link:o,title:l})=>(s(),r("li",null,[i("a",{class:"outline-link",href:o,title:l},L(l),9,Wp),a?.length?(s(),S(t,{key:0,headers:a},null,8,["headers"])):g("",!0)]))),256))],2)}}}),Zn=h(Yp,[["__scopeId","data-v-1ce71065"]]),Qp={class:"content"},Xp={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Zp=k({__name:"VPDocAsideOutline",setup(p){const{theme:n}=V(),e=O(),t=O(),{headers:a,hasLocalNav:o}=W();return Hp(e,t),(l,c)=>(s(),r("nav",{"aria-labelledby":"doc-outline-aria-label",class:C(["VPDocAsideOutline",{"has-outline":d(o)}]),ref_key:"container",ref:e},[i("div",Qp,[i("div",{class:"outline-marker",ref_key:"marker",ref:t},null,512),i("div",Xp,L(d(Qn)(d(n))),1),y(Zn,{headers:d(a),root:!0},null,8,["headers"])])],2))}}),ne=h(Zp,[["__scopeId","data-v-60d5052e"]]),pe={class:"VPDocAsideCarbonAds"},ee=k({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(p){const n=()=>null;return(e,t)=>(s(),r("div",pe,[y(d(n),{"carbon-ads":p.carbonAds},null,8,["carbon-ads"])]))}}),te={class:"VPDocAside"},ae=k({__name:"VPDocAside",setup(p){const{theme:n}=V();return(e,t)=>(s(),r("div",te,[_(e.$slots,"aside-top",{},void 0,!0),_(e.$slots,"aside-outline-before",{},void 0,!0),y(ne),_(e.$slots,"aside-outline-after",{},void 0,!0),t[0]||(t[0]=i("div",{class:"spacer"},null,-1)),_(e.$slots,"aside-ads-before",{},void 0,!0),d(n).carbonAds?(s(),S(ee,{key:0,"carbon-ads":d(n).carbonAds},null,8,["carbon-ads"])):g("",!0),_(e.$slots,"aside-ads-after",{},void 0,!0),_(e.$slots,"aside-bottom",{},void 0,!0)]))}}),se=h(ae,[["__scopeId","data-v-3f215769"]]);function oe(){const{theme:p,page:n}=V();return N(()=>{const{text:e="Edit this page",pattern:t=""}=p.value.editLink||{};let a;return typeof t=="function"?a=t(n.value):a=t.replace(/:path/g,n.value.filePath),{url:a,text:e}})}function re(){const{page:p,theme:n,frontmatter:e}=V();return N(()=>{const t=Yn(n.value.sidebar,p.value.relativePath),a=Mp(t),o=ie(a,f=>f.link.replace(/[?#].*$/,"")),l=o.findIndex(f=>Q(p.value.relativePath,f.link)),c=n.value.docFooter?.prev===!1&&!e.value.prev||e.value.prev===!1,u=n.value.docFooter?.next===!1&&!e.value.next||e.value.next===!1;return{prev:c?void 0:{text:(typeof e.value.prev=="string"?e.value.prev:typeof e.value.prev=="object"?e.value.prev.text:void 0)??o[l-1]?.docFooterText??o[l-1]?.text,link:(typeof e.value.prev=="object"?e.value.prev.link:void 0)??o[l-1]?.link},next:u?void 0:{text:(typeof e.value.next=="string"?e.value.next:typeof e.value.next=="object"?e.value.next.text:void 0)??o[l+1]?.docFooterText??o[l+1]?.text,link:(typeof e.value.next=="object"?e.value.next.link:void 0)??o[l+1]?.link}}})}function ie(p,n){const e=new Set;return p.filter(t=>{const a=n(t);return e.has(a)?!1:e.add(a)})}const K=k({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(p){const n=p,e=N(()=>n.tag??(n.href?"a":"span")),t=N(()=>n.href&&Jn.test(n.href)||n.target==="_blank");return(a,o)=>(s(),S(J(e.value),{class:C(["VPLink",{link:p.href,"vp-external-link-icon":t.value,"no-icon":p.noIcon}]),href:p.href?d(Vn)(p.href):void 0,target:p.target??(t.value?"_blank":void 0),rel:p.rel??(t.value?"noreferrer":void 0)},{default:m(()=>[_(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),le={class:"VPLastUpdated"},ce=["datetime"],de=k({__name:"VPDocFooterLastUpdated",setup(p){const{theme:n,page:e,lang:t}=V(),{language:a}=lp(),o=ip("timeRef"),l=N(()=>new Date(e.value.lastUpdated)),c=N(()=>l.value.toISOString()),u=dn("");return H(()=>{cn(()=>{const f=n.value.lastUpdated?.formatOptions?.forceLocale?t.value:a.value;u.value=new Intl.DateTimeFormat(f,n.value.lastUpdated?.formatOptions??{dateStyle:"medium",timeStyle:"medium"}).format(l.value),f&&t.value!==f?o.value?.setAttribute("lang",f):o.value?.removeAttribute("lang")})}),(f,b)=>(s(),r("p",le,[R(L(d(n).lastUpdated?.text||d(n).lastUpdatedText||"Last updated")+": ",1),i("time",{ref_key:"timeRef",ref:o,datetime:c.value},L(u.value),9,ce)]))}}),ue=h(de,[["__scopeId","data-v-3c637f39"]]),_e={key:0,class:"VPDocFooter"},fe={key:0,class:"edit-info"},me={key:0,class:"edit-link"},he={key:1,class:"last-updated"},ve={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},be={class:"pager"},ge=["innerHTML"],$e=["innerHTML"],ke={class:"pager"},Pe=["innerHTML"],Te=["innerHTML"],ye=k({__name:"VPDocFooter",setup(p){const{theme:n,page:e,frontmatter:t}=V(),a=oe(),o=re(),l=N(()=>n.value.editLink&&t.value.editLink!==!1),c=N(()=>e.value.lastUpdated),u=N(()=>l.value||c.value||o.value.prev||o.value.next);return(f,b)=>u.value?(s(),r("footer",_e,[_(f.$slots,"doc-footer-before",{},void 0,!0),l.value||c.value?(s(),r("div",fe,[l.value?(s(),r("div",me,[y(K,{class:"edit-link-button",href:d(a).url,"no-icon":!0},{default:m(()=>[b[0]||(b[0]=i("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),R(" "+L(d(a).text),1)]),_:1},8,["href"])])):g("",!0),c.value?(s(),r("div",he,[y(ue)])):g("",!0)])):g("",!0),d(o).prev?.link||d(o).next?.link?(s(),r("nav",ve,[b[1]||(b[1]=i("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),i("div",be,[d(o).prev?.link?(s(),S(K,{key:0,class:"pager-link prev",href:d(o).prev.link},{default:m(()=>[i("span",{class:"desc",innerHTML:d(n).docFooter?.prev||"Previous page"},null,8,ge),i("span",{class:"title",innerHTML:d(o).prev.text},null,8,$e)]),_:1},8,["href"])):g("",!0)]),i("div",ke,[d(o).next?.link?(s(),S(K,{key:0,class:"pager-link next",href:d(o).next.link},{default:m(()=>[i("span",{class:"desc",innerHTML:d(n).docFooter?.next||"Next page"},null,8,Pe),i("span",{class:"title",innerHTML:d(o).next.text},null,8,Te)]),_:1},8,["href"])):g("",!0)])])):g("",!0)])):g("",!0)}}),Se=h(ye,[["__scopeId","data-v-e257564d"]]),Ae={class:"container"},Ne={class:"aside-container"},Oe={class:"aside-content"},Be={class:"content"},Ve={class:"content-container"},xe={class:"main"},Le=k({__name:"VPDoc",setup(p){const{theme:n}=V(),e=un(),{hasSidebar:t,hasAside:a,leftAside:o}=W(),l=N(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(c,u)=>{const f=q("Content");return s(),r("div",{class:C(["VPDoc",{"has-sidebar":d(t),"has-aside":d(a)}])},[_(c.$slots,"doc-top",{},void 0,!0),i("div",Ae,[d(a)?(s(),r("div",{key:0,class:C(["aside",{"left-aside":d(o)}])},[u[0]||(u[0]=i("div",{class:"aside-curtain"},null,-1)),i("div",Ne,[i("div",Oe,[y(se,null,{"aside-top":m(()=>[_(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[_(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[_(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[_(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[_(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[_(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):g("",!0),i("div",Be,[i("div",Ve,[_(c.$slots,"doc-before",{},void 0,!0),i("main",xe,[y(f,{class:C(["vp-doc",[l.value,d(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),y(Se,null,{"doc-footer-before":m(()=>[_(c.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),_(c.$slots,"doc-after",{},void 0,!0)])])]),_(c.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Ce=h(Le,[["__scopeId","data-v-7011f0d8"]]),we=k({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(p){const n=p,e=N(()=>n.href&&Jn.test(n.href)),t=N(()=>n.tag||(n.href?"a":"button"));return(a,o)=>(s(),S(J(t.value),{class:C(["VPButton",[p.size,p.theme]]),href:p.href?d(Vn)(p.href):void 0,target:n.target??(e.value?"_blank":void 0),rel:n.rel??(e.value?"noreferrer":void 0)},{default:m(()=>[_(a.$slots,"default",{},()=>[R(L(p.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),Ie=h(we,[["__scopeId","data-v-01bff58b"]]),Me=["src","alt"],De=k({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(p){return(n,e)=>{const t=q("VPImage",!0);return p.image?(s(),r(w,{key:0},[typeof p.image=="string"||"src"in p.image?(s(),r("img",G({key:0,class:"VPImage"},typeof p.image=="string"?n.$attrs:{...p.image,...n.$attrs},{src:d(An)(typeof p.image=="string"?p.image:p.image.src),alt:p.alt??(typeof p.image=="string"?"":p.image.alt||"")}),null,16,Me)):(s(),r(w,{key:1},[y(t,G({class:"dark",image:p.image.dark,alt:p.image.alt},n.$attrs),null,16,["image","alt"]),y(t,G({class:"light",image:p.image.light,alt:p.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):g("",!0)}}}),rn=h(De,[["__scopeId","data-v-8426fc1a"]]),Ee={class:"container"},je={class:"main"},ze={class:"heading"},Re=["innerHTML"],He=["innerHTML"],Ue=["innerHTML"],Fe={key:0,class:"actions"},Je={key:0,class:"image"},Ke={class:"image-container"},Ge=k({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(p){const{heroImageSlotExists:n}=_n(Xn);return(e,t)=>(s(),r("div",{class:C(["VPHero",{"has-image":p.image||d(n)}])},[i("div",Ee,[i("div",je,[_(e.$slots,"home-hero-info-before",{},void 0,!0),_(e.$slots,"home-hero-info",{},()=>[i("h1",ze,[p.name?(s(),r("span",{key:0,innerHTML:p.name,class:"name clip"},null,8,Re)):g("",!0),p.text?(s(),r("span",{key:1,innerHTML:p.text,class:"text"},null,8,He)):g("",!0)]),p.tagline?(s(),r("p",{key:0,innerHTML:p.tagline,class:"tagline"},null,8,Ue)):g("",!0)],!0),_(e.$slots,"home-hero-info-after",{},void 0,!0),p.actions?(s(),r("div",Fe,[(s(!0),r(w,null,z(p.actions,a=>(s(),r("div",{key:a.link,class:"action"},[y(Ie,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):g("",!0),_(e.$slots,"home-hero-actions-after",{},void 0,!0)]),p.image||d(n)?(s(),r("div",Je,[i("div",Ke,[t[0]||(t[0]=i("div",{class:"image-bg"},null,-1)),_(e.$slots,"home-hero-image",{},()=>[p.image?(s(),S(rn,{key:0,class:"image-src",image:p.image},null,8,["image"])):g("",!0)],!0)])])):g("",!0)])],2))}}),qe=h(Ge,[["__scopeId","data-v-1e96e9e8"]]),We=k({__name:"VPHomeHero",setup(p){const{frontmatter:n}=V();return(e,t)=>d(n).hero?(s(),S(qe,{key:0,class:"VPHomeHero",name:d(n).hero.name,text:d(n).hero.text,tagline:d(n).hero.tagline,image:d(n).hero.image,actions:d(n).hero.actions},{"home-hero-info-before":m(()=>[_(e.$slots,"home-hero-info-before")]),"home-hero-info":m(()=>[_(e.$slots,"home-hero-info")]),"home-hero-info-after":m(()=>[_(e.$slots,"home-hero-info-after")]),"home-hero-actions-after":m(()=>[_(e.$slots,"home-hero-actions-after")]),"home-hero-image":m(()=>[_(e.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):g("",!0)}}),Ye={class:"box"},Qe={key:0,class:"icon"},Xe=["innerHTML"],Ze=["innerHTML"],nt=["innerHTML"],pt={key:4,class:"link-text"},et={class:"link-text-value"},tt=k({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(p){return(n,e)=>(s(),S(K,{class:"VPFeature",href:p.link,rel:p.rel,target:p.target,"no-icon":!0,tag:p.link?"a":"div"},{default:m(()=>[i("article",Ye,[typeof p.icon=="object"&&p.icon.wrap?(s(),r("div",Qe,[y(rn,{image:p.icon,alt:p.icon.alt,height:p.icon.height||48,width:p.icon.width||48},null,8,["image","alt","height","width"])])):typeof p.icon=="object"?(s(),S(rn,{key:1,image:p.icon,alt:p.icon.alt,height:p.icon.height||48,width:p.icon.width||48},null,8,["image","alt","height","width"])):p.icon?(s(),r("div",{key:2,class:"icon",innerHTML:p.icon},null,8,Xe)):g("",!0),i("h2",{class:"title",innerHTML:p.title},null,8,Ze),p.details?(s(),r("p",{key:3,class:"details",innerHTML:p.details},null,8,nt)):g("",!0),p.linkText?(s(),r("div",pt,[i("p",et,[R(L(p.linkText)+" ",1),e[0]||(e[0]=i("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):g("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),at=h(tt,[["__scopeId","data-v-5219619b"]]),st={key:0,class:"VPFeatures"},ot={class:"container"},rt={class:"items"},it=k({__name:"VPFeatures",props:{features:{}},setup(p){const n=p,e=N(()=>{const t=n.features.length;if(t){if(t===2)return"grid-2";if(t===3)return"grid-3";if(t%3===0)return"grid-6";if(t>3)return"grid-4"}else return});return(t,a)=>p.features?(s(),r("div",st,[i("div",ot,[i("div",rt,[(s(!0),r(w,null,z(p.features,o=>(s(),r("div",{key:o.title,class:C(["item",[e.value]])},[y(at,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):g("",!0)}}),lt=h(it,[["__scopeId","data-v-a6181336"]]),ct=k({__name:"VPHomeFeatures",setup(p){const{frontmatter:n}=V();return(e,t)=>d(n).features?(s(),S(lt,{key:0,class:"VPHomeFeatures",features:d(n).features},null,8,["features"])):g("",!0)}}),dt=k({__name:"VPHomeContent",setup(p){const{width:n}=cp({initialWidth:0,includeScrollbar:!1});return(e,t)=>(s(),r("div",{class:"vp-doc container",style:Kn(d(n)?{"--vp-offset":`calc(50% - ${d(n)/2}px)`}:{})},[_(e.$slots,"default",{},void 0,!0)],4))}}),ut=h(dt,[["__scopeId","data-v-8e2d4988"]]),_t=k({__name:"VPHome",setup(p){const{frontmatter:n,theme:e}=V();return(t,a)=>{const o=q("Content");return s(),r("div",{class:C(["VPHome",{"external-link-icon-enabled":d(e).externalLinkIcon}])},[_(t.$slots,"home-hero-before",{},void 0,!0),y(We,null,{"home-hero-info-before":m(()=>[_(t.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[_(t.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[_(t.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[_(t.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[_(t.$slots,"home-hero-image",{},void 0,!0)]),_:3}),_(t.$slots,"home-hero-after",{},void 0,!0),_(t.$slots,"home-features-before",{},void 0,!0),y(ct),_(t.$slots,"home-features-after",{},void 0,!0),d(n).markdownStyles!==!1?(s(),S(ut,{key:0},{default:m(()=>[y(o)]),_:1})):(s(),S(o,{key:1}))],2)}}}),ft=h(_t,[["__scopeId","data-v-8b561e3d"]]),mt={},ht={class:"VPPage"};function vt(p,n){const e=q("Content");return s(),r("div",ht,[_(p.$slots,"page-top"),y(e),_(p.$slots,"page-bottom")])}const bt=h(mt,[["render",vt]]),gt=k({__name:"VPContent",setup(p){const{page:n,frontmatter:e}=V(),{isHome:t,hasSidebar:a}=W();return(o,l)=>(s(),r("div",{class:C(["VPContent",{"has-sidebar":d(a),"is-home":d(t)}]),id:"VPContent"},[d(n).isNotFound?_(o.$slots,"not-found",{key:0},()=>[y(wp)],!0):d(e).layout==="page"?(s(),S(bt,{key:1},{"page-top":m(()=>[_(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[_(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):d(e).layout==="home"?(s(),S(ft,{key:2},{"home-hero-before":m(()=>[_(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[_(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[_(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[_(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[_(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[_(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[_(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[_(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[_(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):d(e).layout&&d(e).layout!=="doc"?(s(),S(J(d(e).layout),{key:3})):(s(),S(Ce,{key:4},{"doc-top":m(()=>[_(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[_(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":m(()=>[_(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[_(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[_(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":m(()=>[_(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":m(()=>[_(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[_(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[_(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[_(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":m(()=>[_(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),$t=h(gt,[["__scopeId","data-v-c87f25bf"]]),kt={class:"container"},Pt=["innerHTML"],Tt=["innerHTML"],yt=k({__name:"VPFooter",setup(p){const{theme:n,frontmatter:e}=V(),{hasSidebar:t}=W();return(a,o)=>d(n).footer&&d(e).footer!==!1?(s(),r("footer",{key:0,class:C(["VPFooter",{"has-sidebar":d(t)}])},[i("div",kt,[d(n).footer.message?(s(),r("p",{key:0,class:"message",innerHTML:d(n).footer.message},null,8,Pt)):g("",!0),d(n).footer.copyright?(s(),r("p",{key:1,class:"copyright",innerHTML:d(n).footer.copyright},null,8,Tt)):g("",!0)])],2)):g("",!0)}}),St=h(yt,[["__scopeId","data-v-c3855bb3"]]),At={class:"menu-text"},Nt={class:"header"},Ot={class:"outline"},Bt=k({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(p){const n=p,{theme:e}=V(),t=O(!1),a=O(0),o=O(),l=O();function c(v){o.value?.contains(v.target)||(t.value=!1)}U(t,v=>{if(v){document.addEventListener("click",c);return}document.removeEventListener("click",c)}),bn("Escape",()=>{t.value=!1}),Fn(()=>{t.value=!1});function u(){t.value=!t.value,a.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function f(v){v.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),on(()=>{t.value=!1}))}function b(){t.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,$)=>(s(),r("div",{class:"VPLocalNavOutlineDropdown",style:Kn({"--vp-vh":a.value+"px"}),ref_key:"main",ref:o},[p.headers.length>0?(s(),r("button",{key:0,onClick:u,class:C({open:t.value})},[i("span",At,L(d(Qn)(d(e))),1),$[0]||($[0]=i("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(s(),r("button",{key:1,onClick:b},L(d(e).returnToTopLabel||"Return to top"),1)),y(ln,{name:"flyout"},{default:m(()=>[t.value?(s(),r("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:f},[i("div",Nt,[i("a",{class:"top-link",href:"#",onClick:b},L(d(e).returnToTopLabel||"Return to top"),1)]),i("div",Ot,[y(Zn,{headers:p.headers},null,8,["headers"])])],512)):g("",!0)]),_:1})],4))}}),Vt=h(Bt,[["__scopeId","data-v-0bf0e06f"]]),xt={class:"container"},Lt=["aria-expanded"],Ct={class:"menu-text"},wt=k({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(p){const{theme:n}=V(),{isHome:e,hasSidebar:t,headers:a,hasLocalNav:o}=W(),{y:l}=Gn(),c=O(0);H(()=>{c.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const u=N(()=>({VPLocalNav:!0,"has-sidebar":t.value,empty:!o.value,fixed:!o.value&&!t.value}));return(f,b)=>!d(e)&&(d(o)||d(t)||d(l)>=c.value)?(s(),r("div",{key:0,class:C(u.value)},[i("div",xt,[d(t)?(s(),r("button",{key:0,class:"menu","aria-expanded":p.open,"aria-controls":"VPSidebarNav",onClick:b[0]||(b[0]=v=>f.$emit("open-menu"))},[b[1]||(b[1]=i("span",{class:"vpi-align-left menu-icon"},null,-1)),i("span",Ct,L(d(n).sidebarMenuLabel||"Menu"),1)],8,Lt)):g("",!0),y(Vt,{headers:d(a),navHeight:c.value},null,8,["headers","navHeight"])])],2)):g("",!0)}}),It=h(wt,[["__scopeId","data-v-db738f89"]]);function Mt(){const p=O(!1);function n(){p.value=!0,window.addEventListener("resize",a)}function e(){p.value=!1,window.removeEventListener("resize",a)}function t(){p.value?e():n()}function a(){window.outerWidth>=768&&e()}const o=un();return U(()=>o.path,e),{isScreenOpen:p,openScreen:n,closeScreen:e,toggleScreen:t}}const xn=Symbol("nav"),Dt={},Et={class:"VPSwitch",type:"button",role:"switch"},jt={class:"check"},zt={key:0,class:"icon"};function Rt(p,n){return s(),r("button",Et,[i("span",jt,[p.$slots.default?(s(),r("span",zt,[_(p.$slots,"default",{},void 0,!0)])):g("",!0)])])}const Ht=h(Dt,[["render",Rt],["__scopeId","data-v-1d5665e3"]]),Ut=k({__name:"VPSwitchAppearance",setup(p){const{isDark:n,theme:e}=V(),t=_n("toggle-appearance",()=>{n.value=!n.value}),a=O("");return On(()=>{a.value=n.value?e.value.lightModeSwitchTitle||"Switch to light theme":e.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,l)=>(s(),S(Ht,{title:a.value,class:"VPSwitchAppearance","aria-checked":d(n),onClick:d(t)},{default:m(()=>[...l[0]||(l[0]=[i("span",{class:"vpi-sun sun"},null,-1),i("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),Ln=h(Ut,[["__scopeId","data-v-5337faa4"]]),Ft={key:0,class:"VPNavBarAppearance"},Jt=k({__name:"VPNavBarAppearance",setup(p){const{site:n}=V();return(e,t)=>d(n).appearance&&d(n).appearance!=="force-dark"&&d(n).appearance!=="force-auto"?(s(),r("div",Ft,[y(Ln)])):g("",!0)}}),Kt=h(Jt,[["__scopeId","data-v-6c893767"]]),Cn=O();let np=!1,hn=0;function Gt(p){const n=O(!1);if(en){!np&&qt(),hn++;const e=U(Cn,t=>{t===p.el.value||p.el.value?.contains(t)?(n.value=!0,p.onFocus?.()):(n.value=!1,p.onBlur?.())});Nn(()=>{e(),hn--,hn||Wt()})}return dp(n)}function qt(){document.addEventListener("focusin",pp),np=!0,Cn.value=document.activeElement}function Wt(){document.removeEventListener("focusin",pp)}function pp(){Cn.value=document.activeElement}const Yt={class:"VPMenuLink"},Qt=["innerHTML"],Xt=k({inheritAttrs:!1,__name:"VPMenuLink",props:{item:{}},setup(p){const n=p,{page:e}=V(),t=N(()=>typeof n.item.link=="function"?n.item.link(e.value):n.item.link);return(a,o)=>(s(),r("div",Yt,[y(K,G(a.$attrs,{class:{active:d(Q)(d(e).relativePath,p.item.activeMatch||t.value,!!p.item.activeMatch)},href:t.value,target:p.item.target,rel:p.item.rel,"no-icon":p.item.noIcon}),{default:m(()=>[i("span",{innerHTML:p.item.text},null,8,Qt)]),_:1},16,["class","href","target","rel","no-icon"])]))}}),fn=h(Xt,[["__scopeId","data-v-faf5b206"]]),Zt={class:"VPMenuGroup"},na={key:0,class:"title"},pa=k({__name:"VPMenuGroup",props:{text:{},items:{}},setup(p){return(n,e)=>(s(),r("div",Zt,[p.text?(s(),r("p",na,L(p.text),1)):g("",!0),(s(!0),r(w,null,z(p.items,t=>(s(),r(w,{key:JSON.stringify(t)},["link"in t?(s(),S(fn,{key:0,item:t},null,8,["item"])):g("",!0)],64))),128))]))}}),ea=h(pa,[["__scopeId","data-v-1963e1bb"]]),ta={class:"VPMenu"},aa={key:0,class:"items"},sa=k({__name:"VPMenu",props:{items:{}},setup(p){return(n,e)=>(s(),r("div",ta,[p.items?(s(),r("div",aa,[(s(!0),r(w,null,z(p.items,t=>(s(),r(w,{key:JSON.stringify(t)},["link"in t?(s(),S(fn,{key:0,item:t},null,8,["item"])):"component"in t?(s(),S(J(t.component),G({key:1,ref_for:!0},t.props),null,16)):(s(),S(ea,{key:2,text:t.text,items:t.items},null,8,["text","items"]))],64))),128))])):g("",!0),_(n.$slots,"default",{},void 0,!0)]))}}),oa=h(sa,[["__scopeId","data-v-25a6cce8"]]),ra=["aria-expanded","aria-label"],ia={key:0,class:"text"},la=["innerHTML"],ca={key:1,class:"vpi-more-horizontal icon"},da={class:"menu"},ua=k({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(p){const n=O(!1),e=O();Gt({el:e,onBlur:t});function t(){n.value=!1}return(a,o)=>(s(),r("div",{class:"VPFlyout",ref_key:"el",ref:e,onMouseenter:o[1]||(o[1]=l=>n.value=!0),onMouseleave:o[2]||(o[2]=l=>n.value=!1)},[i("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":p.label,onClick:o[0]||(o[0]=l=>n.value=!n.value)},[p.button||p.icon?(s(),r("span",ia,[p.icon?(s(),r("span",{key:0,class:C([p.icon,"option-icon"])},null,2)):g("",!0),p.button?(s(),r("span",{key:1,innerHTML:p.button},null,8,la)):g("",!0),o[3]||(o[3]=i("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(s(),r("span",ca))],8,ra),i("div",da,[y(oa,{items:p.items},{default:m(()=>[_(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),wn=h(ua,[["__scopeId","data-v-42cb505d"]]),_a=["href","aria-label","rel","innerHTML"],fa=k({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{},me:{type:Boolean}},setup(p){const n=p,e=O();H(async()=>{await on();const a=e.value?.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${n.icon}.svg')`)});const t=N(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}"></span>`);return(a,o)=>(s(),r("a",{ref_key:"el",ref:e,class:"VPSocialLink no-icon",href:p.link,"aria-label":p.ariaLabel??(typeof p.icon=="string"?p.icon:""),target:"_blank",rel:p.me?"me noopener":"noopener",innerHTML:t.value},null,8,_a))}}),ma=h(fa,[["__scopeId","data-v-591a6b30"]]),ha={class:"VPSocialLinks"},va=k({__name:"VPSocialLinks",props:{links:{},me:{type:Boolean,default:!0}},setup(p){return(n,e)=>(s(),r("div",ha,[(s(!0),r(w,null,z(p.links,({link:t,icon:a,ariaLabel:o})=>(s(),S(ma,{key:t,icon:a,link:t,ariaLabel:o,me:p.me},null,8,["icon","link","ariaLabel","me"]))),128))]))}}),In=h(va,[["__scopeId","data-v-d07f11e6"]]),ba={key:0,class:"group translations"},ga={class:"trans-title"},$a={key:1,class:"group"},ka={class:"item appearance"},Pa={class:"label"},Ta={class:"appearance-action"},ya={key:2,class:"group"},Sa={class:"item social-links"},Aa=k({__name:"VPNavBarExtra",setup(p){const{site:n,theme:e}=V(),{localeLinks:t,currentLang:a}=tn({correspondingLink:!0}),o=N(()=>t.value.length&&a.value.label||n.value.appearance||e.value.socialLinks);return(l,c)=>o.value?(s(),S(wn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:m(()=>[d(t).length&&d(a).label?(s(),r("div",ba,[i("p",ga,L(d(a).label),1),(s(!0),r(w,null,z(d(t),u=>(s(),S(fn,{key:u.link,item:u,lang:u.lang,dir:u.dir},null,8,["item","lang","dir"]))),128))])):g("",!0),d(n).appearance&&d(n).appearance!=="force-dark"&&d(n).appearance!=="force-auto"?(s(),r("div",$a,[i("div",ka,[i("p",Pa,L(d(e).darkModeSwitchLabel||"Appearance"),1),i("div",Ta,[y(Ln)])])])):g("",!0),d(e).socialLinks?(s(),r("div",ya,[i("div",Sa,[y(In,{class:"social-links-list",links:d(e).socialLinks},null,8,["links"])])])):g("",!0)]),_:1})):g("",!0)}}),Na=h(Aa,[["__scopeId","data-v-bf2fac68"]]),Oa=["aria-expanded"],Ba=k({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(p){return(n,e)=>(s(),r("button",{type:"button",class:C(["VPNavBarHamburger",{active:p.active}]),"aria-label":"mobile navigation","aria-expanded":p.active,"aria-controls":"VPNavScreen",onClick:e[0]||(e[0]=t=>n.$emit("click"))},[...e[1]||(e[1]=[i("span",{class:"container"},[i("span",{class:"top"}),i("span",{class:"middle"}),i("span",{class:"bottom"})],-1)])],10,Oa))}}),Va=h(Ba,[["__scopeId","data-v-e5dd9c1c"]]),xa=["innerHTML"],La=k({__name:"VPNavBarMenuLink",props:{item:{}},setup(p){const n=p,{page:e}=V(),t=N(()=>typeof n.item.link=="function"?n.item.link(e.value):n.item.link);return(a,o)=>(s(),S(K,{class:C({VPNavBarMenuLink:!0,active:d(Q)(d(e).relativePath,p.item.activeMatch||t.value,!!p.item.activeMatch)}),href:t.value,target:p.item.target,rel:p.item.rel,"no-icon":p.item.noIcon,tabindex:"0"},{default:m(()=>[i("span",{innerHTML:p.item.text},null,8,xa)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Ca=h(La,[["__scopeId","data-v-52a1d768"]]),wa=k({__name:"VPNavBarMenuGroup",props:{item:{}},setup(p){const n=p,{page:e}=V(),t=o=>"component"in o?!1:"link"in o?Q(e.value.relativePath,typeof o.link=="function"?o.link(e.value):o.link,!!n.item.activeMatch):o.items.some(t),a=N(()=>t(n.item));return(o,l)=>(s(),S(wn,{class:C({VPNavBarMenuGroup:!0,active:d(Q)(d(e).relativePath,p.item.activeMatch,!!p.item.activeMatch)||a.value}),button:p.item.text,items:p.item.items},null,8,["class","button","items"]))}}),Ia={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Ma=k({__name:"VPNavBarMenu",setup(p){const{theme:n}=V();return(e,t)=>d(n).nav?(s(),r("nav",Ia,[t[0]||(t[0]=i("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(s(!0),r(w,null,z(d(n).nav,a=>(s(),r(w,{key:JSON.stringify(a)},["link"in a?(s(),S(Ca,{key:0,item:a},null,8,["item"])):"component"in a?(s(),S(J(a.component),G({key:1,ref_for:!0},a.props),null,16)):(s(),S(wa,{key:2,item:a},null,8,["item"]))],64))),128))])):g("",!0)}}),Da=h(Ma,[["__scopeId","data-v-39714824"]]);function Ea(p){const{localeIndex:n,theme:e}=V();function t(a){const o=a.split("."),l=e.value.search?.options,c=l&&typeof l=="object",u=c&&l.locales?.[n.value]?.translations||null,f=c&&l.translations||null;let b=u,v=f,$=p;const P=o.pop();for(const A of o){let T=null;const B=$?.[A];B&&(T=$=B);const M=v?.[A];M&&(T=v=M);const I=b?.[A];I&&(T=b=I),B||($=T),M||(v=T),I||(b=T)}return b?.[P]??v?.[P]??$?.[P]??""}return t}const ja=["aria-label"],za={class:"DocSearch-Button-Container"},Ra={class:"DocSearch-Button-Placeholder"},En=k({__name:"VPNavBarSearchButton",setup(p){const e=Ea({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(t,a)=>(s(),r("button",{type:"button","aria-label":d(e)("button.buttonAriaLabel"),"aria-keyshortcuts":"/ control+k meta+k",class:"DocSearch DocSearch-Button"},[i("span",za,[a[0]||(a[0]=i("span",{class:"vpi-search DocSearch-Search-Icon"},null,-1)),i("span",Ra,L(d(e)("button.buttonText")),1)]),a[1]||(a[1]=i("span",{class:"DocSearch-Button-Keys"},[i("kbd",{class:"DocSearch-Button-Key"}),i("kbd",{class:"DocSearch-Button-Key"})],-1))],8,ja))}}),Ha={class:"VPNavBarSearch"},Ua={id:"local-search"},Fa={key:1,id:"docsearch"},Ja=k({__name:"VPNavBarSearch",setup(p){const n=up(()=>_p(()=>import("./chunks/VPLocalSearchBox._Hx565f_.js"),__vite__mapDeps([0,1]))),e=()=>null,{theme:t}=V(),a=O(!1),o=O(!1);H(()=>{});function l(){a.value||(a.value=!0,setTimeout(c,16))}function c(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||c()},16)}function u(v){const $=v.target,P=$.tagName;return $.isContentEditable||P==="INPUT"||P==="SELECT"||P==="TEXTAREA"}const f=O(!1);bn("k",v=>{(v.ctrlKey||v.metaKey)&&(v.preventDefault(),f.value=!0)}),bn("/",v=>{u(v)||(v.preventDefault(),f.value=!0)});const b="local";return(v,$)=>(s(),r("div",Ha,[d(b)==="local"?(s(),r(w,{key:0},[f.value?(s(),S(d(n),{key:0,onClose:$[0]||($[0]=P=>f.value=!1)})):g("",!0),i("div",Ua,[y(En,{onClick:$[1]||($[1]=P=>f.value=!0)})])],64)):d(b)==="algolia"?(s(),r(w,{key:1},[a.value?(s(),S(d(e),{key:0,algolia:d(t).search?.options??d(t).algolia,onVnodeBeforeMount:$[2]||($[2]=P=>o.value=!0)},null,8,["algolia"])):g("",!0),o.value?g("",!0):(s(),r("div",Fa,[y(En,{onClick:l})]))],64)):g("",!0)]))}}),Ka=k({__name:"VPNavBarSocialLinks",setup(p){const{theme:n}=V();return(e,t)=>d(n).socialLinks?(s(),S(In,{key:0,class:"VPNavBarSocialLinks",links:d(n).socialLinks},null,8,["links"])):g("",!0)}}),Ga=h(Ka,[["__scopeId","data-v-0394ad82"]]),qa=["href","rel","target"],Wa=["innerHTML"],Ya={key:2},Qa=k({__name:"VPNavBarTitle",setup(p){const{site:n,theme:e}=V(),{hasSidebar:t}=W(),{currentLang:a}=tn(),o=N(()=>typeof e.value.logoLink=="string"?e.value.logoLink:e.value.logoLink?.link),l=N(()=>typeof e.value.logoLink=="string"?void 0:e.value.logoLink?.rel),c=N(()=>typeof e.value.logoLink=="string"?void 0:e.value.logoLink?.target);return(u,f)=>(s(),r("div",{class:C(["VPNavBarTitle",{"has-sidebar":d(t)}])},[i("a",{class:"title",href:o.value??d(Vn)(d(a).link),rel:l.value,target:c.value},[_(u.$slots,"nav-bar-title-before",{},void 0,!0),d(e).logo?(s(),S(rn,{key:0,class:"logo",image:d(e).logo},null,8,["image"])):g("",!0),d(e).siteTitle?(s(),r("span",{key:1,innerHTML:d(e).siteTitle},null,8,Wa)):d(e).siteTitle===void 0?(s(),r("span",Ya,L(d(n).title),1)):g("",!0),_(u.$slots,"nav-bar-title-after",{},void 0,!0)],8,qa)],2))}}),Xa=h(Qa,[["__scopeId","data-v-1e38c6bc"]]),Za={class:"items"},ns={class:"title"},ps=k({__name:"VPNavBarTranslations",setup(p){const{theme:n}=V(),{localeLinks:e,currentLang:t}=tn({correspondingLink:!0});return(a,o)=>d(e).length&&d(t).label?(s(),S(wn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:d(n).langMenuLabel||"Change language"},{default:m(()=>[i("div",Za,[i("p",ns,L(d(t).label),1),(s(!0),r(w,null,z(d(e),l=>(s(),S(fn,{key:l.link,item:l,lang:l.lang,dir:l.dir},null,8,["item","lang","dir"]))),128))])]),_:1},8,["label"])):g("",!0)}}),es=h(ps,[["__scopeId","data-v-4c1766e2"]]),ts={class:"wrapper"},as={class:"container"},ss={class:"title"},os={class:"content"},rs={class:"content-body"},is=k({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(p){const n=p,{y:e}=Gn(),{isHome:t,hasSidebar:a}=W(),o=O({});return On(()=>{o.value={"has-sidebar":a.value,home:t.value,top:e.value===0,"screen-open":n.isScreenOpen}}),(l,c)=>(s(),r("div",{class:C(["VPNavBar",o.value])},[i("div",ts,[i("div",as,[i("div",ss,[y(Xa,null,{"nav-bar-title-before":m(()=>[_(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[_(l.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),i("div",os,[i("div",rs,[_(l.$slots,"nav-bar-content-before",{},void 0,!0),y(Ja,{class:"search"}),y(Da,{class:"menu"}),y(es,{class:"translations"}),y(Kt,{class:"appearance"}),y(Ga,{class:"social-links"}),y(Na,{class:"extra"}),_(l.$slots,"nav-bar-content-after",{},void 0,!0),y(Va,{class:"hamburger",active:p.isScreenOpen,onClick:c[0]||(c[0]=u=>l.$emit("toggle-screen"))},null,8,["active"])])])])]),c[1]||(c[1]=i("div",{class:"divider"},[i("div",{class:"divider-line"})],-1))],2))}}),ls=h(is,[["__scopeId","data-v-70946a35"]]),cs={key:0,class:"VPNavScreenAppearance"},ds={class:"text"},us=k({__name:"VPNavScreenAppearance",setup(p){const{site:n,theme:e}=V();return(t,a)=>d(n).appearance&&d(n).appearance!=="force-dark"&&d(n).appearance!=="force-auto"?(s(),r("div",cs,[i("p",ds,L(d(e).darkModeSwitchLabel||"Appearance"),1),y(Ln)])):g("",!0)}}),_s=h(us,[["__scopeId","data-v-b44890b2"]]),fs=["innerHTML"],ms=k({__name:"VPNavScreenMenuLink",props:{item:{}},setup(p){const n=p,{page:e}=V(),t=N(()=>typeof n.item.link=="function"?n.item.link(e.value):n.item.link),{closeScreen:a}=_n(xn);return(o,l)=>(s(),S(K,{class:"VPNavScreenMenuLink",href:t.value,target:p.item.target,rel:p.item.rel,"no-icon":p.item.noIcon,onClick:d(a)},{default:m(()=>[i("span",{innerHTML:p.item.text},null,8,fs)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),hs=h(ms,[["__scopeId","data-v-7d55a1c1"]]),vs=["innerHTML"],bs=k({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(p){const n=p,{page:e}=V(),t=N(()=>typeof n.item.link=="function"?n.item.link(e.value):n.item.link),{closeScreen:a}=_n(xn);return(o,l)=>(s(),S(K,{class:"VPNavScreenMenuGroupLink",href:t.value,target:p.item.target,rel:p.item.rel,"no-icon":p.item.noIcon,onClick:d(a)},{default:m(()=>[i("span",{innerHTML:p.item.text},null,8,vs)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),ep=h(bs,[["__scopeId","data-v-49e5ec9f"]]),gs={class:"VPNavScreenMenuGroupSection"},$s={key:0,class:"title"},ks=k({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(p){return(n,e)=>(s(),r("div",gs,[p.text?(s(),r("p",$s,L(p.text),1)):g("",!0),(s(!0),r(w,null,z(p.items,t=>(s(),S(ep,{key:t.text,item:t},null,8,["item"]))),128))]))}}),Ps=h(ks,[["__scopeId","data-v-4b7a798b"]]),Ts=["aria-controls","aria-expanded"],ys=["innerHTML"],Ss=["id"],As={key:0,class:"item"},Ns={key:1,class:"item"},Os={key:2,class:"group"},Bs=k({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(p){const n=p,e=O(!1),t=N(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function a(){e.value=!e.value}return(o,l)=>(s(),r("div",{class:C(["VPNavScreenMenuGroup",{open:e.value}])},[i("button",{class:"button","aria-controls":t.value,"aria-expanded":e.value,onClick:a},[i("span",{class:"button-text",innerHTML:p.text},null,8,ys),l[0]||(l[0]=i("span",{class:"vpi-plus button-icon"},null,-1))],8,Ts),i("div",{id:t.value,class:"items"},[(s(!0),r(w,null,z(p.items,c=>(s(),r(w,{key:JSON.stringify(c)},["link"in c?(s(),r("div",As,[y(ep,{item:c},null,8,["item"])])):"component"in c?(s(),r("div",Ns,[(s(),S(J(c.component),G({ref_for:!0},c.props,{"screen-menu":""}),null,16))])):(s(),r("div",Os,[y(Ps,{text:c.text,items:c.items},null,8,["text","items"])]))],64))),128))],8,Ss)],2))}}),Vs=h(Bs,[["__scopeId","data-v-956364f9"]]),xs={key:0,class:"VPNavScreenMenu"},Ls=k({__name:"VPNavScreenMenu",setup(p){const{theme:n}=V();return(e,t)=>d(n).nav?(s(),r("nav",xs,[(s(!0),r(w,null,z(d(n).nav,a=>(s(),r(w,{key:JSON.stringify(a)},["link"in a?(s(),S(hs,{key:0,item:a},null,8,["item"])):"component"in a?(s(),S(J(a.component),G({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(s(),S(Vs,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):g("",!0)}}),Cs=k({__name:"VPNavScreenSocialLinks",setup(p){const{theme:n}=V();return(e,t)=>d(n).socialLinks?(s(),S(In,{key:0,class:"VPNavScreenSocialLinks",links:d(n).socialLinks},null,8,["links"])):g("",!0)}}),ws={class:"list"},Is=k({__name:"VPNavScreenTranslations",setup(p){const{localeLinks:n,currentLang:e}=tn({correspondingLink:!0}),t=O(!1);function a(){t.value=!t.value}return(o,l)=>d(n).length&&d(e).label?(s(),r("div",{key:0,class:C(["VPNavScreenTranslations",{open:t.value}])},[i("button",{class:"title",onClick:a},[l[0]||(l[0]=i("span",{class:"vpi-languages icon lang"},null,-1)),R(" "+L(d(e).label)+" ",1),l[1]||(l[1]=i("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),i("ul",ws,[(s(!0),r(w,null,z(d(n),c=>(s(),r("li",{key:c.link,class:"item"},[y(K,{class:"link",href:c.link,lang:c.lang,dir:c.dir},{default:m(()=>[R(L(c.text),1)]),_:2},1032,["href","lang","dir"])]))),128))])],2)):g("",!0)}}),Ms=h(Is,[["__scopeId","data-v-a4d9b172"]]),Ds={class:"container"},Es=k({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(p){const n=O(null),e=qn(en?document.body:null);return(t,a)=>(s(),S(ln,{name:"fade",onEnter:a[0]||(a[0]=o=>e.value=!0),onAfterLeave:a[1]||(a[1]=o=>e.value=!1)},{default:m(()=>[p.open?(s(),r("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[i("div",Ds,[_(t.$slots,"nav-screen-content-before",{},void 0,!0),y(Ls,{class:"menu"}),y(Ms,{class:"translations"}),y(_s,{class:"appearance"}),y(Cs,{class:"social-links"}),_(t.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):g("",!0)]),_:3}))}}),js=h(Es,[["__scopeId","data-v-f2779853"]]),zs={key:0,class:"VPNav"},Rs=k({__name:"VPNav",setup(p){const{isScreenOpen:n,closeScreen:e,toggleScreen:t}=Mt(),{frontmatter:a}=V(),o=N(()=>a.value.navbar!==!1);return Wn(xn,{closeScreen:e}),cn(()=>{en&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(l,c)=>o.value?(s(),r("header",zs,[y(ls,{"is-screen-open":d(n),onToggleScreen:d(t)},{"nav-bar-title-before":m(()=>[_(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[_(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[_(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[_(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),y(js,{open:d(n)},{"nav-screen-content-before":m(()=>[_(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[_(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):g("",!0)}}),Hs=h(Rs,[["__scopeId","data-v-da52a441"]]),Us=["role","tabindex"],Fs={key:1,class:"items"},Js=k({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(p){const n=p,{collapsed:e,collapsible:t,isLink:a,isActiveLink:o,hasActiveLink:l,hasChildren:c,toggle:u}=Gp(N(()=>n.item)),f=N(()=>c.value?"section":"div"),b=N(()=>a.value?"a":"div"),v=N(()=>c.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),$=N(()=>a.value?void 0:"button"),P=N(()=>[[`level-${n.depth}`],{collapsible:t.value},{collapsed:e.value},{"is-link":a.value},{"is-active":o.value},{"has-active":l.value}]);function A(B){"key"in B&&B.key!=="Enter"||!n.item.link&&u()}function T(){n.item.link&&u()}return(B,M)=>{const I=q("VPSidebarItem",!0);return s(),S(J(f.value),{class:C(["VPSidebarItem",P.value])},{default:m(()=>[p.item.text?(s(),r("div",G({key:0,class:"item",role:$.value},fp(p.item.items?{click:A,keydown:A}:{},!0),{tabindex:p.item.items&&0}),[M[1]||(M[1]=i("div",{class:"indicator"},null,-1)),p.item.link?(s(),S(K,{key:0,tag:b.value,class:"link",href:p.item.link,rel:p.item.rel,target:p.item.target},{default:m(()=>[(s(),S(J(v.value),{class:"text",innerHTML:p.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(s(),S(J(v.value),{key:1,class:"text",innerHTML:p.item.text},null,8,["innerHTML"])),p.item.collapsed!=null&&p.item.items&&p.item.items.length?(s(),r("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:T,onKeydown:mp(T,["enter"]),tabindex:"0"},[...M[0]||(M[0]=[i("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):g("",!0)],16,Us)):g("",!0),p.item.items&&p.item.items.length?(s(),r("div",Fs,[p.depth<5?(s(!0),r(w,{key:0},z(p.item.items,D=>(s(),S(I,{key:D.text,item:D,depth:p.depth+1},null,8,["item","depth"]))),128)):g("",!0)])):g("",!0)]),_:1},8,["class"])}}}),Ks=h(Js,[["__scopeId","data-v-d81de50c"]]),Gs=k({__name:"VPSidebarGroup",props:{items:{}},setup(p){const n=O(!0);let e=null;return H(()=>{e=setTimeout(()=>{e=null,n.value=!1},300)}),Z(()=>{e!=null&&(clearTimeout(e),e=null)}),(t,a)=>(s(!0),r(w,null,z(p.items,o=>(s(),r("div",{key:o.text,class:C(["group",{"no-transition":n.value}])},[y(Ks,{item:o,depth:0},null,8,["item"])],2))),128))}}),qs=h(Gs,[["__scopeId","data-v-8d50c081"]]),Ws={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Ys=k({__name:"VPSidebar",props:{open:{type:Boolean}},setup(p){const{sidebarGroups:n,hasSidebar:e}=W(),t=p,a=O(null),o=qn(en?document.body:null);U([t,a],()=>{t.open?(o.value=!0,a.value?.focus()):o.value=!1},{immediate:!0,flush:"post"});const l=O(0);return U(n,()=>{l.value+=1},{deep:!0}),(c,u)=>d(e)?(s(),r("aside",{key:0,class:C(["VPSidebar",{open:p.open}]),ref_key:"navEl",ref:a,onClick:u[0]||(u[0]=hp(()=>{},["stop"]))},[u[2]||(u[2]=i("div",{class:"curtain"},null,-1)),i("nav",Ws,[u[1]||(u[1]=i("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),_(c.$slots,"sidebar-nav-before",{},void 0,!0),(s(),S(qs,{items:d(n),key:l.value},null,8,["items"])),_(c.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):g("",!0)}}),Qs=h(Ys,[["__scopeId","data-v-af661f50"]]),Xs={href:"#VPContent",class:"VPSkipLink visually-hidden"},Zs=k({__name:"VPSkipLink",setup(p){const{theme:n}=V(),e=un(),t=O();return U(()=>e.path,()=>t.value.focus()),(a,o)=>(s(),r(w,null,[i("span",{ref_key:"backToTop",ref:t,tabindex:"-1"},null,512),i("a",Xs,L(d(n).skipToContentLabel||"Skip to content"),1)],64))}}),no=h(Zs,[["__scopeId","data-v-331ec75c"]]),po=k({__name:"Layout",setup(p){const{isOpen:n,open:e,close:t}=Kp();qp({closeSidebar:t});const{frontmatter:a}=V(),o=vp(),l=N(()=>!!o["home-hero-image"]);return Wn(Xn,{heroImageSlotExists:l}),(c,u)=>{const f=q("Content");return d(a).layout!==!1?(s(),r("div",{key:0,class:C(["Layout",d(a).pageClass])},[_(c.$slots,"layout-top",{},void 0,!0),y(no),y(yp,{class:"backdrop",show:d(n),onClick:d(t)},null,8,["show","onClick"]),y(Hs,null,{"nav-bar-title-before":m(()=>[_(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":m(()=>[_(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":m(()=>[_(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":m(()=>[_(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":m(()=>[_(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":m(()=>[_(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),y(It,{open:d(n),onOpenMenu:d(e)},null,8,["open","onOpenMenu"]),y(Qs,{open:d(n)},{"sidebar-nav-before":m(()=>[_(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":m(()=>[_(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),y($t,null,{"page-top":m(()=>[_(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":m(()=>[_(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":m(()=>[_(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":m(()=>[_(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":m(()=>[_(c.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":m(()=>[_(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":m(()=>[_(c.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":m(()=>[_(c.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":m(()=>[_(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":m(()=>[_(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":m(()=>[_(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":m(()=>[_(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":m(()=>[_(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":m(()=>[_(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":m(()=>[_(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":m(()=>[_(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":m(()=>[_(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":m(()=>[_(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":m(()=>[_(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":m(()=>[_(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":m(()=>[_(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":m(()=>[_(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":m(()=>[_(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),y(St),_(c.$slots,"layout-bottom",{},void 0,!0)],2)):(s(),S(f,{key:1}))}}}),eo=h(po,[["__scopeId","data-v-1df9f90f"]]),tp={Layout:eo,enhanceApp:({app:p})=>{p.component("Badge",kp)}},jn="age_verified",to=365,ao=k({__name:"AgeWarning",setup(p){const n=O(!1),e=O(!1);function t(c,u,f){const b=new Date;b.setTime(b.getTime()+f*24*60*60*1e3);const v=`expires=${b.toUTCString()}`;document.cookie=`${c}=${u};${v};path=/;SameSite=Strict`}function a(c){const u=c+"=",f=document.cookie.split(";");for(let b=0;b<f.length;b++){let v=f[b];for(;v.charAt(0)===" ";)v=v.substring(1,v.length);if(v.indexOf(u)===0)return v.substring(u.length,v.length)}return null}function o(){e.value=!0,setTimeout(()=>{n.value=!1,e.value=!1},300),t(jn,"true",to)}function l(){window.location.href="https://tv.cctv.com/2013/09/02/VIDE1378113141436780.shtml"}return H(()=>{a(jn)||(n.value=!0)}),(c,u)=>(s(),S(bp,{to:"body"},[n.value?(s(),r("div",{key:0,class:C(["age-warning-overlay",{"fade-out":e.value}])},[i("div",{class:"age-warning-modal"},[u[0]||(u[0]=i("div",{class:"warning-icon"},"🔞",-1)),u[1]||(u[1]=i("h2",null,"未成年人禁止入内",-1)),u[2]||(u[2]=i("p",null,"本站包含成人内容，仅限18岁及以上人士访问。",-1)),u[3]||(u[3]=i("p",{class:"warning-detail"}," 继续访问即表示您已年满18周岁，并同意浏览成人内容。 ",-1)),i("div",{class:"warning-buttons"},[i("button",{onClick:o,class:"btn-confirm"}," 是，我已年满18岁 "),i("button",{onClick:l,class:"btn-reject"}," 否，我未满18岁 ")])])],2)):g("",!0)]))}}),so=h(ao,[["__scopeId","data-v-20130149"]]),oo={key:0},ro={class:"moon-icon"},io=k({__name:"ThemeTransition",setup(p){const{isDark:n}=Sn(),e=O(!1),t=O(!1),a=O(!1),o=O(!1),l=O(!1);let c,u,f;const b=()=>{c&&(clearTimeout(c),c=void 0),u&&(clearTimeout(u),u=void 0),f&&(clearTimeout(f),f=void 0)},v=()=>{l.value=!0,o.value=!1,a.value=!1,u=setTimeout(()=>{e.value=!1,l.value=!1},260)},$=A=>{const T=document.documentElement;A?T.classList.add("dark"):T.classList.remove("dark")},P=A=>{b(),t.value=A,document.documentElement.classList.add("theme-switching"),a.value=!0,e.value=!0,o.value=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{o.value=!0})}),f=setTimeout(()=>{$(A)},200),c=setTimeout(()=>{o.value=!1,a.value=!1,document.documentElement.classList.remove("theme-switching"),u=setTimeout(()=>{e.value=!1},400)},500)};return U(n,(A,T)=>{if(!(typeof window>"u")&&T!==void 0){if(e.value||o.value||a.value){b(),v(),setTimeout(()=>P(A),130);return}P(A)}}),(A,T)=>e.value?(s(),r("div",oo,[i("div",{class:C(["theme-backdrop",{"backdrop-dark":t.value,show:a.value,fast:l.value}])},null,2),i("div",{class:C(["theme-transition-mask",{"mask-dark":t.value,animating:o.value,fast:l.value}])},[i("div",ro,L(t.value?"🌙":"☀️"),1)],2)])):g("",!0)}}),lo=h(io,[["__scopeId","data-v-06473298"]]),co=280,uo=k({__name:"BackToTop",setup(p){const n=O(!1),e=()=>{n.value=window.scrollY>co},t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return H(()=>{window.addEventListener("scroll",e,{passive:!0}),e()}),Z(()=>{window.removeEventListener("scroll",e)}),(a,o)=>n.value?(s(),r("button",{key:0,class:"back-top",type:"button",onClick:t,"aria-label":"返回顶部"}," ↑ ")):g("",!0)}}),_o=h(uo,[["__scopeId","data-v-df795d79"]]),vn={allowedPrefixes:["/","/articles","/license","/settings"],excludedPrefixes:["/404"],excludedIncludes:[]},yn=p=>{for(const n of vn.excludedPrefixes)if(p.startsWith(n))return!1;for(const n of vn.excludedIncludes)if(p.includes(n))return!1;for(const n of vn.allowedPrefixes)if(p.startsWith(n))return!0;return!1},nn="last_read",fo="reading_prompt_enabled",mo=15e3,ho=900*1e3,vo=6e4,bo=k({__name:"ReadingReminder",setup(p){const n=Bn(),e=O(!1),t=O(!1),a=O(""),o=O(void 0),l=O(void 0),c=O(!0),u=E=>{const j=document.cookie.match(new RegExp("(?:^|; )"+E.replace(/([.$?*|{}()\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return j?decodeURIComponent(j[1]):""},f=(E,j,Y=365)=>{const F=new Date;F.setTime(F.getTime()+Y*24*60*60*1e3),document.cookie=`${E}=${encodeURIComponent(j)}; path=/; expires=${F.toUTCString()}`},b=()=>{o.value&&(clearTimeout(o.value),o.value=void 0)},v=()=>{l.value&&(clearTimeout(l.value),l.value=void 0)},$=()=>{const E=u(nn);if(E)try{const j=JSON.parse(E),Y=Date.now(),F={current:j.current,previous:j.current,tsCurrent:j.tsCurrent,tsPrevious:Y};f(nn,JSON.stringify(F))}catch{}},P=()=>{v(),l.value=setTimeout(()=>{c.value&&yn(n.route.path)&&$()},vo)},A=()=>{t.value=!0,setTimeout(()=>{e.value=!1,t.value=!1},300),b()},T=()=>{b(),o.value=setTimeout(()=>A(),mo)},B=E=>{if(!yn(E))return;let j="",Y=0;try{const mn=u(nn);if(mn){const an=JSON.parse(mn);an.current&&(j=an.current),an.tsCurrent&&(Y=an.tsCurrent)}}catch{}const F=Date.now();f(nn,JSON.stringify({current:E,previous:j,tsCurrent:F,tsPrevious:Y}))},M=()=>{const E=localStorage.getItem(fo);return E===null?!0:E==="true"},I=()=>{if(!M())return;const E=u(nn);if(E)try{const j=JSON.parse(E),Y=Date.now(),F=j.tsPrevious??0;j.previous&&F&&Y-F>ho&&j.previous!==n.route.path&&(a.value=j.previous,e.value=!0,T())}catch{}},D=()=>{a.value&&(A(),n.go(a.value))};return H(()=>{U(()=>n.route.path,E=>{typeof document>"u"||(B(E),P())},{immediate:!0})}),H(()=>{I(),P(),typeof window<"u"&&(window.addEventListener("visibilitychange",I),window.addEventListener("focus",()=>{c.value=!0,P()}),window.addEventListener("blur",()=>{c.value=!1,v()}))}),Z(()=>{typeof window<"u"&&(window.removeEventListener("visibilitychange",I),window.removeEventListener("focus",()=>{}),window.removeEventListener("blur",()=>{})),b(),v()}),(E,j)=>gp((s(),r("div",{class:C(["reading-reminder",{"fade-out":t.value}])},[i("div",{class:"reading-reminder__content"},[j[0]||(j[0]=i("span",null,"是否跳转到上次阅读位置？",-1)),i("div",{class:"reading-reminder__actions"},[i("button",{class:"primary",onClick:D},"跳转"),i("button",{class:"ghost",onClick:A},"关闭")])])],2)),[[$p,e.value]])}}),go=h(bo,[["__scopeId","data-v-62aa7ff8"]]),zn="cookie_consent",$o="age_verified",ko=k({__name:"CookieConsent",setup(p){const n=O(!1),e=O(!1),t=O(!1);let a;const o=()=>{e.value=!0,setTimeout(()=>{localStorage.setItem(zn,"true"),n.value=!1,e.value=!1},300)},l=()=>{window.location.href="https://www.pixiv.net/users/50811011"},c=()=>localStorage.getItem(zn)==="true",u=()=>document.cookie.includes(`${$o}=true`),f=()=>{t.value=u(),t.value&&!c()&&(n.value=!0)};return H(()=>{f(),a=window.setInterval(()=>{u()&&!t.value&&f()},500)}),Z(()=>{a&&clearInterval(a)}),(b,v)=>n.value?(s(),r("div",{key:0,class:C(["cookie-consent",{"fade-out":e.value}])},[v[3]||(v[3]=i("div",{class:"cookie-backdrop"},null,-1)),i("div",{class:"cookie-modal"},[i("div",{class:"cookie-modal__content"},[v[0]||(v[0]=i("h2",null,"Cookie 政策",-1)),v[1]||(v[1]=i("p",null,"此网站使用 Cookie 来改进用户体验，包括记录您的阅读位置和偏好设置。",-1)),v[2]||(v[2]=i("p",null,"如果您不同意使用 Cookie，请点击“拒绝”按钮离开此网站。",-1)),i("div",{class:"cookie-modal__actions"},[i("button",{class:"accept",onClick:o},"同意并继续"),i("button",{class:"decline",onClick:l},"拒绝")])])])],2)):g("",!0)}}),Po=h(ko,[["__scopeId","data-v-64f9ad39"]]),To={style:{display:"none"}},yo=k({__name:"SearchModal",setup(p){let n=null,e=!1;return H(()=>{const t=()=>{if(n=document.querySelector(".VPLocalSearchBox"),!n){setTimeout(t,50);return}const a=l=>{n&&(n.classList.add("fade-out"),setTimeout(()=>{n&&n.classList.remove("fade-out"),l()},200))},o=l=>{if(e)return;const c=l.target,u=c===n,f=c.closest("button"),b=c.closest("a"),v=l.type==="keydown"&&l.key==="Escape";(u||f||b||v)&&(l.preventDefault(),l.stopPropagation(),l.stopImmediatePropagation(),a(()=>{e=!0,v?window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",code:"Escape",keyCode:27,bubbles:!0,cancelable:!0})):c instanceof HTMLElement&&c.click(),setTimeout(()=>{e=!1},0)}))};n.addEventListener("click",o,!0),window.addEventListener("keydown",o,!0),Z(()=>{n&&n.removeEventListener("click",o,!0),window.removeEventListener("keydown",o,!0)})};t()}),(t,a)=>(s(),r("div",To))}}),So=JSON.parse('{"title":"A.1 雪原与利刃的沉沦（拉普兰德1&德克萨斯0）","description":"","frontmatter":{"order":2},"headers":[],"relativePath":"articles/ark/A/A.1.md","filePath":"articles/ark/A/A.1.md","lastUpdated":1766326350000}'),Ao={name:"articles/ark/A/A.1.md"};function No(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",32)])])}const Oo=h(Ao,[["render",No]]),Bo=Object.freeze(Object.defineProperty({__proto__:null,__pageData:So,default:Oo},Symbol.toStringTag,{value:"Module"})),Vo=JSON.parse('{"title":"阿尔图罗的特别生日礼物~#1&#2","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"articles/ark/B/A/B.A.1and2.md","filePath":"articles/ark/B/A/B.A.1and2.md","lastUpdated":1766326350000}'),xo={name:"articles/ark/B/A/B.A.1and2.md"};function Lo(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",81)])])}const Co=h(xo,[["render",Lo]]),wo=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Vo,default:Co},Symbol.toStringTag,{value:"Module"})),Io=JSON.parse('{"title":"B.A.3&4 阿尔图罗的生日“派对”~#3&#4","description":"","frontmatter":{"order":2},"headers":[],"relativePath":"articles/ark/B/A/B.A.3and4.md","filePath":"articles/ark/B/A/B.A.3and4.md","lastUpdated":1766326350000}'),Mo={name:"articles/ark/B/A/B.A.3and4.md"};function Do(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",136)])])}const Eo=h(Mo,[["render",Do]]),jo=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Io,default:Eo},Symbol.toStringTag,{value:"Module"})),zo=JSON.parse('{"title":"B.A.5&6 在音乐中堕落的阿尔图罗~#5&#6","description":"","frontmatter":{"order":3},"headers":[],"relativePath":"articles/ark/B/A/B.A.5and6.md","filePath":"articles/ark/B/A/B.A.5and6.md","lastUpdated":1766326350000}'),Ro={name:"articles/ark/B/A/B.A.5and6.md"};function Ho(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",113)])])}const Uo=h(Ro,[["render",Ho]]),Fo=Object.freeze(Object.defineProperty({__proto__:null,__pageData:zo,default:Uo},Symbol.toStringTag,{value:"Module"})),Jo=JSON.parse('{"title":"阿尔图罗的派对(?)","description":"","frontmatter":{"order":2,"title":"阿尔图罗的派对(?)"},"headers":[],"relativePath":"articles/ark/B/A/index.md","filePath":"articles/ark/B/A/index.md","lastUpdated":1766326350000}'),Ko={name:"articles/ark/B/A/index.md"};function Go(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[i("h1",{id:"阿尔图罗的派对",tabindex:"-1"},[R("阿尔图罗的派对(?) "),i("a",{class:"header-anchor",href:"#阿尔图罗的派对","aria-label":"Permalink to “阿尔图罗的派对(?)”"},"​")],-1),i("p",null,"这是A系列的简介。",-1)])])}const qo=h(Ko,[["render",Go]]),Wo=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Jo,default:qo},Symbol.toStringTag,{value:"Module"})),Yo=JSON.parse('{"title":"B.N.1 冰镇苹果汁💗~（能天使0&菲亚梅塔1）","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"articles/ark/B/N/B.N.1.md","filePath":"articles/ark/B/N/B.N.1.md","lastUpdated":1766326350000}'),Qo={name:"articles/ark/B/N/B.N.1.md"};function Xo(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",92)])])}const Zo=h(Qo,[["render",Xo]]),nr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Yo,default:Zo},Symbol.toStringTag,{value:"Module"})),pr=JSON.parse('{"title":"B.N.2 坏姐姐！💗~（安乐）","description":"","frontmatter":{"order":2},"headers":[],"relativePath":"articles/ark/B/N/B.N.2.md","filePath":"articles/ark/B/N/B.N.2.md","lastUpdated":1766326350000}'),er={name:"articles/ark/B/N/B.N.2.md"};function tr(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",87)])])}const ar=h(er,[["render",tr]]),sr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:pr,default:ar},Symbol.toStringTag,{value:"Module"})),or=JSON.parse('{"title":"B.N.3 泰拉的超市、可爱的能天使还有企鹅物流的各位💗~","description":"","frontmatter":{"order":3},"headers":[],"relativePath":"articles/ark/B/N/B.N.3.md","filePath":"articles/ark/B/N/B.N.3.md","lastUpdated":1766326350000}'),rr={name:"articles/ark/B/N/B.N.3.md"};function ir(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",123)])])}const lr=h(rr,[["render",ir]]),cr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:or,default:lr},Symbol.toStringTag,{value:"Module"})),dr=JSON.parse('{"title":"B.N.4 坏掉的小苹果~（乐徳）","description":"","frontmatter":{"order":4},"headers":[],"relativePath":"articles/ark/B/N/B.N.4.md","filePath":"articles/ark/B/N/B.N.4.md","lastUpdated":1766326350000}'),ur={name:"articles/ark/B/N/B.N.4.md"};function _r(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",77)])])}const fr=h(ur,[["render",_r]]),mr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:dr,default:fr},Symbol.toStringTag,{value:"Module"})),hr=JSON.parse('{"title":"B.N.5.1苹果派装不下再多了呜呜呜~！","description":"","frontmatter":{"order":5},"headers":[],"relativePath":"articles/ark/B/N/B.N.5.1.md","filePath":"articles/ark/B/N/B.N.5.1.md","lastUpdated":1766326350000}'),vr={name:"articles/ark/B/N/B.N.5.1.md"};function br(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",94)])])}const gr=h(vr,[["render",br]]),$r=Object.freeze(Object.defineProperty({__proto__:null,__pageData:hr,default:gr},Symbol.toStringTag,{value:"Module"})),kr=JSON.parse('{"title":"B.N.5.2 苹果派装不下再多了呜呜呜~！2","description":"","frontmatter":{"order":6},"headers":[],"relativePath":"articles/ark/B/N/B.N.5.2.md","filePath":"articles/ark/B/N/B.N.5.2.md","lastUpdated":1766326350000}'),Pr={name:"articles/ark/B/N/B.N.5.2.md"};function Tr(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",64)])])}const yr=h(Pr,[["render",Tr]]),Sr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:kr,default:yr},Symbol.toStringTag,{value:"Module"})),Ar=JSON.parse('{"title":"B.N.6 触手服以及能天使~","description":"","frontmatter":{"order":7},"headers":[],"relativePath":"articles/ark/B/N/B.N.6.md","filePath":"articles/ark/B/N/B.N.6.md","lastUpdated":1766326350000}'),Nr={name:"articles/ark/B/N/B.N.6.md"};function Or(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",183)])])}const Br=h(Nr,[["render",Or]]),Vr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Ar,default:Br},Symbol.toStringTag,{value:"Module"})),xr=JSON.parse('{"title":"变成泡芙的能天使~","description":"","frontmatter":{"order":1,"title":"变成泡芙的能天使~"},"headers":[],"relativePath":"articles/ark/B/N/index.md","filePath":"articles/ark/B/N/index.md","lastUpdated":1766326350000}'),Lr={name:"articles/ark/B/N/index.md"};function Cr(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[i("h1",{id:"变成泡芙的能天使",tabindex:"-1"},[R("变成泡芙的能天使~ "),i("a",{class:"header-anchor",href:"#变成泡芙的能天使","aria-label":"Permalink to “变成泡芙的能天使~”"},"​")],-1),i("p",null,"这是N系列的简介。",-1)])])}const wr=h(Lr,[["render",Cr]]),Ir=Object.freeze(Object.defineProperty({__proto__:null,__pageData:xr,default:wr},Symbol.toStringTag,{value:"Module"})),Mr=JSON.parse('{"title":"淫乱的罗德岛","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"articles/ark/index.md","filePath":"articles/ark/index.md","lastUpdated":1766326350000}'),Dr={name:"articles/ark/index.md"};function Er(p,n,e,t,a,o){const l=q("ARKChapterList");return s(),r("div",null,[n[0]||(n[0]=x("",11)),y(l),n[1]||(n[1]=i("hr",null,null,-1)),n[2]||(n[2]=i("p",null,[R("⚠️ "),i("strong",null,"警告"),R(": 本作品包含成人内容，仅限18岁以上读者阅读。")],-1))])}const jr=h(Dr,[["render",Er]]),zr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Mr,default:jr},Symbol.toStringTag,{value:"Module"})),Rr=JSON.parse('{"title":"小说列表","description":"","frontmatter":{},"headers":[],"relativePath":"articles/index.md","filePath":"articles/index.md","lastUpdated":1766326350000}'),Hr={name:"articles/index.md"};function Ur(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[i("h1",{id:"小说列表",tabindex:"-1"},[R("小说列表 "),i("a",{class:"header-anchor",href:"#小说列表","aria-label":"Permalink to “小说列表”"},"​")],-1),i("p",null,[R("这里都是Naiii的小说！与"),i("a",{href:"https://www.pixiv.net/users/50811011",target:"_blank",rel:"noreferrer"},"Pixiv"),R("同步更新哦")],-1)])])}const Fr=h(Hr,[["render",Ur]]),Jr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Rr,default:Fr},Symbol.toStringTag,{value:"Module"})),Kr=JSON.parse('{"title":"#1 共犯的初响","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"articles/tsandsis/chapter1.md","filePath":"articles/tsandsis/chapter1.md","lastUpdated":1766326350000}'),Gr={name:"articles/tsandsis/chapter1.md"};function qr(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",95)])])}const Wr=h(Gr,[["render",qr]]),Yr=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Kr,default:Wr},Symbol.toStringTag,{value:"Module"})),Qr=JSON.parse('{"title":"#10 湿透的伪装与荆棘的印记","description":"","frontmatter":{"order":10},"headers":[],"relativePath":"articles/tsandsis/chapter10.md","filePath":"articles/tsandsis/chapter10.md","lastUpdated":1766469247000}'),Xr={name:"articles/tsandsis/chapter10.md"};function Zr(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",468)])])}const ni=h(Xr,[["render",Zr]]),pi=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Qr,default:ni},Symbol.toStringTag,{value:"Module"})),ei=JSON.parse('{"title":"#11 同桌的指尖与白丝的秘密","description":"","frontmatter":{"order":11},"headers":[],"relativePath":"articles/tsandsis/chapter11.md","filePath":"articles/tsandsis/chapter11.md","lastUpdated":1768327787000}'),ti={name:"articles/tsandsis/chapter11.md"};function ai(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",221)])])}const si=h(ti,[["render",ai]]),oi=Object.freeze(Object.defineProperty({__proto__:null,__pageData:ei,default:si},Symbol.toStringTag,{value:"Module"})),ri=JSON.parse('{"title":"#12 口红印与不道歉的占有","description":"","frontmatter":{"order":12},"headers":[],"relativePath":"articles/tsandsis/chapter12.md","filePath":"articles/tsandsis/chapter12.md","lastUpdated":1768327787000}'),ii={name:"articles/tsandsis/chapter12.md"};function li(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",171)])])}const ci=h(ii,[["render",li]]),di=Object.freeze(Object.defineProperty({__proto__:null,__pageData:ri,default:ci},Symbol.toStringTag,{value:"Module"})),ui=JSON.parse('{"title":"#13 空教室中的观众与表演","description":"","frontmatter":{"order":13},"headers":[],"relativePath":"articles/tsandsis/chapter13.md","filePath":"articles/tsandsis/chapter13.md","lastUpdated":1768327787000}'),_i={name:"articles/tsandsis/chapter13.md"};function fi(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",120)])])}const mi=h(_i,[["render",fi]]),hi=Object.freeze(Object.defineProperty({__proto__:null,__pageData:ui,default:mi},Symbol.toStringTag,{value:"Module"})),vi=JSON.parse('{"title":"#14 药水、校服与主动献祭","description":"","frontmatter":{"order":14},"headers":[],"relativePath":"articles/tsandsis/chapter14.md","filePath":"articles/tsandsis/chapter14.md","lastUpdated":1768327787000}'),bi={name:"articles/tsandsis/chapter14.md"};function gi(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",186)])])}const $i=h(bi,[["render",gi]]),ki=Object.freeze(Object.defineProperty({__proto__:null,__pageData:vi,default:$i},Symbol.toStringTag,{value:"Module"})),Pi=JSON.parse('{"title":"#15 囚笼、盲眼与双倍的占有","description":"","frontmatter":{"order":15},"headers":[],"relativePath":"articles/tsandsis/chapter15.md","filePath":"articles/tsandsis/chapter15.md","lastUpdated":1768327787000}'),Ti={name:"articles/tsandsis/chapter15.md"};function yi(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",284)])])}const Si=h(Ti,[["render",yi]]),Ai=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Pi,default:Si},Symbol.toStringTag,{value:"Module"})),Ni=JSON.parse('{"title":"#16 项圈、四肢与“汪”","description":"","frontmatter":{"order":16},"headers":[],"relativePath":"articles/tsandsis/chapter16.md","filePath":"articles/tsandsis/chapter16.md","lastUpdated":1768327787000}'),Oi={name:"articles/tsandsis/chapter16.md"};function Bi(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",182)])])}const Vi=h(Oi,[["render",Bi]]),xi=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Ni,default:Vi},Symbol.toStringTag,{value:"Module"})),Li=JSON.parse('{"title":"#17 水牢、净罪与暗涌的欲望","description":"","frontmatter":{"order":17},"headers":[],"relativePath":"articles/tsandsis/chapter17.md","filePath":"articles/tsandsis/chapter17.md","lastUpdated":1768327787000}'),Ci={name:"articles/tsandsis/chapter17.md"};function wi(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",131)])])}const Ii=h(Ci,[["render",wi]]),Mi=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Li,default:Ii},Symbol.toStringTag,{value:"Module"})),Di=JSON.parse('{"title":"#18 晨露、项圈与并行的足迹","description":"","frontmatter":{"order":18},"headers":[],"relativePath":"articles/tsandsis/chapter18.md","filePath":"articles/tsandsis/chapter18.md","lastUpdated":1768327787000}'),Ei={name:"articles/tsandsis/chapter18.md"};function ji(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",117)])])}const zi=h(Ei,[["render",ji]]),Ri=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Di,default:zi},Symbol.toStringTag,{value:"Module"})),Hi=JSON.parse('{"title":"#19 制服、课堂与融化于课桌下的春潮","description":"","frontmatter":{"order":19},"headers":[],"relativePath":"articles/tsandsis/chapter19.md","filePath":"articles/tsandsis/chapter19.md","lastUpdated":1768327787000}'),Ui={name:"articles/tsandsis/chapter19.md"};function Fi(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",105)])])}const Ji=h(Ui,[["render",Fi]]),Ki=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Hi,default:Ji},Symbol.toStringTag,{value:"Module"})),Gi=JSON.parse('{"title":"#2 公园的羞耻游戏","description":"","frontmatter":{"order":2},"headers":[],"relativePath":"articles/tsandsis/chapter2.md","filePath":"articles/tsandsis/chapter2.md","lastUpdated":1766329124000}'),qi={name:"articles/tsandsis/chapter2.md"};function Wi(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",322)])])}const Yi=h(qi,[["render",Wi]]),Qi=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Gi,default:Yi},Symbol.toStringTag,{value:"Module"})),Xi=JSON.parse('{"title":"#20 正字、囚服与永夜的盛宴","description":"","frontmatter":{"order":20},"headers":[],"relativePath":"articles/tsandsis/chapter20.md","filePath":"articles/tsandsis/chapter20.md","lastUpdated":1768328362000}'),Zi={name:"articles/tsandsis/chapter20.md"};function nl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",133)])])}const pl=h(Zi,[["render",nl]]),el=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Xi,default:pl},Symbol.toStringTag,{value:"Module"})),tl=JSON.parse('{"title":"#21 正字烙印与永夜沉沦","description":"","frontmatter":{"order":21},"headers":[],"relativePath":"articles/tsandsis/chapter21.md","filePath":"articles/tsandsis/chapter21.md","lastUpdated":1768328362000}'),al={name:"articles/tsandsis/chapter21.md"};function sl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",75)])])}const ol=h(al,[["render",sl]]),rl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:tl,default:ol},Symbol.toStringTag,{value:"Module"})),il=JSON.parse('{"title":"#22 双主轮舞与媚骨成刑","description":"","frontmatter":{"order":22},"headers":[],"relativePath":"articles/tsandsis/chapter22.md","filePath":"articles/tsandsis/chapter22.md","lastUpdated":1771696632000}'),ll={name:"articles/tsandsis/chapter22.md"};function cl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",83)])])}const dl=h(ll,[["render",cl]]),ul=Object.freeze(Object.defineProperty({__proto__:null,__pageData:il,default:dl},Symbol.toStringTag,{value:"Module"})),_l=JSON.parse('{"title":"#23 忤逆初萌与惩戒深犁","description":"","frontmatter":{"order":23},"headers":[],"relativePath":"articles/tsandsis/chapter23.md","filePath":"articles/tsandsis/chapter23.md","lastUpdated":1771696632000}'),fl={name:"articles/tsandsis/chapter23.md"};function ml(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",139)])])}const hl=h(fl,[["render",ml]]),vl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:_l,default:hl},Symbol.toStringTag,{value:"Module"})),bl=JSON.parse('{"title":"#24 双面镜城与午夜欢宴","description":"","frontmatter":{"order":23},"headers":[],"relativePath":"articles/tsandsis/chapter24.md","filePath":"articles/tsandsis/chapter24.md","lastUpdated":1771696632000}'),gl={name:"articles/tsandsis/chapter24.md"};function $l(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",231)])])}const kl=h(gl,[["render",$l]]),Pl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:bl,default:kl},Symbol.toStringTag,{value:"Module"})),Tl=JSON.parse('{"title":"#25 银幕下的暗潮与隔间内的盛宴","description":"","frontmatter":{"order":23},"headers":[],"relativePath":"articles/tsandsis/chapter25.md","filePath":"articles/tsandsis/chapter25.md","lastUpdated":1771696632000}'),yl={name:"articles/tsandsis/chapter25.md"};function Sl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",181)])])}const Al=h(yl,[["render",Sl]]),Nl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Tl,default:Al},Symbol.toStringTag,{value:"Module"})),Ol=JSON.parse('{"title":"#3 白瓷之印","description":"","frontmatter":{"order":3},"headers":[],"relativePath":"articles/tsandsis/chapter3.md","filePath":"articles/tsandsis/chapter3.md","lastUpdated":1766462880000}'),Bl={name:"articles/tsandsis/chapter3.md"};function Vl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",305)])])}const xl=h(Bl,[["render",Vl]]),Ll=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Ol,default:xl},Symbol.toStringTag,{value:"Module"})),Cl=JSON.parse('{"title":"#4 长发的白瓷铃铛","description":"","frontmatter":{"order":4},"headers":[],"relativePath":"articles/tsandsis/chapter4.md","filePath":"articles/tsandsis/chapter4.md","lastUpdated":1766462880000}'),wl={name:"articles/tsandsis/chapter4.md"};function Il(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",214)])])}const Ml=h(wl,[["render",Il]]),Dl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Cl,default:Ml},Symbol.toStringTag,{value:"Module"})),El=JSON.parse('{"title":"#5 黑丝、银锁与偏执的牙印","description":"","frontmatter":{"order":5},"headers":[],"relativePath":"articles/tsandsis/chapter5.md","filePath":"articles/tsandsis/chapter5.md","lastUpdated":1766462880000}'),jl={name:"articles/tsandsis/chapter5.md"};function zl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",197)])])}const Rl=h(jl,[["render",zl]]),Hl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:El,default:Rl},Symbol.toStringTag,{value:"Module"})),Ul=JSON.parse('{"title":"#6 白丝、药丸与空教室的惩罚","description":"","frontmatter":{"order":6},"headers":[],"relativePath":"articles/tsandsis/chapter6.md","filePath":"articles/tsandsis/chapter6.md","lastUpdated":1766462880000}'),Fl={name:"articles/tsandsis/chapter6.md"};function Jl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",292)])])}const Kl=h(Fl,[["render",Jl]]),Gl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Ul,default:Kl},Symbol.toStringTag,{value:"Module"})),ql=JSON.parse('{"title":"#7 铃音的小穴与温柔的引导","description":"","frontmatter":{"order":7},"headers":[],"relativePath":"articles/tsandsis/chapter7.md","filePath":"articles/tsandsis/chapter7.md","lastUpdated":1766462880000}'),Wl={name:"articles/tsandsis/chapter7.md"};function Yl(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",166)])])}const Ql=h(Wl,[["render",Yl]]),Xl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:ql,default:Ql},Symbol.toStringTag,{value:"Module"})),Zl=JSON.parse('{"title":"#8 雪白的蛹与新生之穴","description":"","frontmatter":{"order":8},"headers":[],"relativePath":"articles/tsandsis/chapter8.md","filePath":"articles/tsandsis/chapter8.md","lastUpdated":1766463690000}'),nc={name:"articles/tsandsis/chapter8.md"};function pc(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",262)])])}const ec=h(nc,[["render",pc]]),tc=Object.freeze(Object.defineProperty({__proto__:null,__pageData:Zl,default:ec},Symbol.toStringTag,{value:"Module"})),ac=JSON.parse('{"title":"#9 谎言的茉莉香与惩罚的荆棘","description":"","frontmatter":{"order":9},"headers":[],"relativePath":"articles/tsandsis/chapter9.md","filePath":"articles/tsandsis/chapter9.md","lastUpdated":1766469247000}'),sc={name:"articles/tsandsis/chapter9.md"};function oc(p,n,e,t,a,o){return s(),r("div",null,[...n[0]||(n[0]=[x("",355)])])}const rc=h(sc,[["render",oc]]),ic=Object.freeze(Object.defineProperty({__proto__:null,__pageData:ac,default:rc},Symbol.toStringTag,{value:"Module"})),lc=JSON.parse('{"title":"TS哥哥和扶她妹妹","description":"","frontmatter":{"order":2},"headers":[],"relativePath":"articles/tsandsis/index.md","filePath":"articles/tsandsis/index.md","lastUpdated":1766326350000}'),cc={name:"articles/tsandsis/index.md"};function dc(p,n,e,t,a,o){const l=q("ChapterList");return s(),r("div",null,[n[0]||(n[0]=i("h1",{id:"ts哥哥和扶她妹妹",tabindex:"-1"},[R("TS哥哥和扶她妹妹 "),i("a",{class:"header-anchor",href:"#ts哥哥和扶她妹妹","aria-label":"Permalink to “TS哥哥和扶她妹妹”"},"​")],-1)),n[1]||(n[1]=i("p",null,"一个关于特殊兄妹关系的故事。",-1)),n[2]||(n[2]=i("h2",{id:"简介",tabindex:"-1"},[R("简介 "),i("a",{class:"header-anchor",href:"#简介","aria-label":"Permalink to “简介”"},"​")],-1)),n[3]||(n[3]=i("p",null,"就是骨科啦~",-1)),y(l,{novel:"tsandsis"}),n[4]||(n[4]=i("hr",null,null,-1)),n[5]||(n[5]=i("p",null,[R("⚠️ "),i("strong",null,"警告"),R(": 本作品包含成人内容，仅限18岁以上读者阅读。")],-1))])}const uc=h(cc,[["render",dc]]),_c=Object.freeze(Object.defineProperty({__proto__:null,__pageData:lc,default:uc},Symbol.toStringTag,{value:"Module"})),fc={key:0,class:"latest-banner"},mc={class:"latest-body"},hc=["href"],vc={key:0,class:"latest-date"},bc={key:1,class:"latest-desc"},gc="latest_update_banner",$c=k({__name:"LatestUpdateBanner",setup(p){const n=Object.assign({"../../../articles/ark/A/A.1.md":Bo,"../../../articles/ark/B/A/B.A.1and2.md":wo,"../../../articles/ark/B/A/B.A.3and4.md":jo,"../../../articles/ark/B/A/B.A.5and6.md":Fo,"../../../articles/ark/B/A/index.md":Wo,"../../../articles/ark/B/N/B.N.1.md":nr,"../../../articles/ark/B/N/B.N.2.md":sr,"../../../articles/ark/B/N/B.N.3.md":cr,"../../../articles/ark/B/N/B.N.4.md":mr,"../../../articles/ark/B/N/B.N.5.1.md":$r,"../../../articles/ark/B/N/B.N.5.2.md":Sr,"../../../articles/ark/B/N/B.N.6.md":Vr,"../../../articles/ark/B/N/index.md":Ir,"../../../articles/ark/index.md":zr,"../../../articles/index.md":Jr,"../../../articles/tsandsis/chapter1.md":Yr,"../../../articles/tsandsis/chapter10.md":pi,"../../../articles/tsandsis/chapter11.md":oi,"../../../articles/tsandsis/chapter12.md":di,"../../../articles/tsandsis/chapter13.md":hi,"../../../articles/tsandsis/chapter14.md":ki,"../../../articles/tsandsis/chapter15.md":Ai,"../../../articles/tsandsis/chapter16.md":xi,"../../../articles/tsandsis/chapter17.md":Mi,"../../../articles/tsandsis/chapter18.md":Ri,"../../../articles/tsandsis/chapter19.md":Ki,"../../../articles/tsandsis/chapter2.md":Qi,"../../../articles/tsandsis/chapter20.md":el,"../../../articles/tsandsis/chapter21.md":rl,"../../../articles/tsandsis/chapter22.md":ul,"../../../articles/tsandsis/chapter23.md":vl,"../../../articles/tsandsis/chapter24.md":Pl,"../../../articles/tsandsis/chapter25.md":Nl,"../../../articles/tsandsis/chapter3.md":Ll,"../../../articles/tsandsis/chapter4.md":Dl,"../../../articles/tsandsis/chapter5.md":Hl,"../../../articles/tsandsis/chapter6.md":Gl,"../../../articles/tsandsis/chapter7.md":Xl,"../../../articles/tsandsis/chapter8.md":tc,"../../../articles/tsandsis/chapter9.md":ic,"../../../articles/tsandsis/index.md":_c}),e=f=>{if(f==null)return null;if(typeof f=="number")return f<1e12?f*1e3:f;const b=Date.parse(String(f));return Number.isNaN(b)?null:b},t=N(()=>Object.values(n).map(f=>{const b=f?.__pageData??{},v=f?.frontmatter??{},$=b.relativePath;if(!$)return null;const P=$.replace(/\.md$/,""),A=P.endsWith("/index")?`/${P.slice(0,-6)}/`:`/${P}`,T=e(b.lastUpdated)??e(v.updated)??e(v.date);return{title:b.title||v.title||"未命名章节",description:b.description||v.description,path:A,lastUpdated:T??b.lastUpdated}}).filter(Boolean).filter(f=>f.path.startsWith("/articles")&&yn(f.path)).sort((f,b)=>{const v=e(f.lastUpdated)??0,$=e(b.lastUpdated)??0;return v===$?b.path.localeCompare(f.path):$-v})),a=N(()=>t.value[0]),o=f=>{if(typeof document>"u")return null;const b=document.cookie.match(new RegExp("(?:^|; )"+f.replace(/([.$?*|{}()\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return b?decodeURIComponent(b[1]):null},l=O(!0);H(()=>{l.value=o(gc)!=="1"});const c=()=>{l.value=!1},u=N(()=>{const f=a.value?.lastUpdated;if(!f)return"";const b=typeof f=="number"?f:Date.parse(f),v=b<1e12?b*1e3:b,$=new Date(v),P=A=>String(A).padStart(2,"0");return`${$.getFullYear()}-${P($.getMonth()+1)}-${P($.getDate())}`});return(f,b)=>(s(),S(ln,{name:"banner-fade"},{default:m(()=>[a.value&&l.value?(s(),r("div",fc,[b[0]||(b[0]=i("div",{class:"latest-label"},"最新更新",-1)),i("div",mc,[i("a",{class:"latest-title",href:a.value.path},L(a.value.title),9,hc),u.value?(s(),r("span",vc,"更新于 "+L(u.value),1)):g("",!0),a.value.description?(s(),r("p",bc,L(a.value.description),1)):g("",!0)]),i("div",{class:"latest-actions"},[i("button",{class:"btn",onClick:c},"关闭")])])):g("",!0)]),_:1}))}}),kc=h($c,[["__scopeId","data-v-fb77de2f"]]),Pc="reader_font",Tc="reader_font_size",yc=k({__name:"Layout",setup(p){const{Layout:n}=tp,{isDark:e}=Sn(),t=Bn(),a="20260222_025813",o=T=>{T.preventDefault(),window.__deferredPwaPrompt=T,window.dispatchEvent(new CustomEvent("pwa-install-available"))},l=()=>{window.__deferredPwaPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))},c=T=>{if(typeof document>"u")return null;const B=document.cookie.match(new RegExp("(?:^|; )"+T.replace(/([.$?*|{}()\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return B?decodeURIComponent(B[1]):null},u=()=>{if(typeof window>"u")return;const T=c(Pc);T&&(document.documentElement.dataset.font=T);const B=c(Tc);B&&(document.documentElement.dataset.fontSize=B)},f=T=>{document.querySelector("iframe.giscus-frame")?.contentWindow?.postMessage({giscus:{setConfig:{theme:T}}},"https://giscus.app")},b=()=>{const T=document.querySelector(".giscus-wrapper");T&&(T.innerHTML="",typeof window<"u"&&"giscus"in window&&delete window.giscus)},v=(T=5)=>{const B=document.querySelector(".giscus-wrapper");if(!B){T>0&&setTimeout(()=>v(T-1),100);return}const M=B.querySelector("iframe.giscus-frame"),I=e.value?"dark":"light";if(M){f(I);return}const D=document.createElement("script");D.src="https://giscus.app/client.js",D.setAttribute("data-repo","NatsumiXD/novel-comment"),D.setAttribute("data-repo-id","R_kgDOQshs6w"),D.setAttribute("data-category","Announcements"),D.setAttribute("data-category-id","DIC_kwDOQshs684C0EPb"),D.setAttribute("data-mapping","pathname"),D.setAttribute("data-strict","1"),D.setAttribute("data-reactions-enabled","1"),D.setAttribute("data-emit-metadata","0"),D.setAttribute("data-input-position","bottom"),D.setAttribute("data-theme",I),D.setAttribute("data-lang","zh-CN"),D.setAttribute("crossorigin","anonymous"),D.async=!0,B.appendChild(D)};H(()=>{u(),typeof window<"u"&&(window.addEventListener("beforeinstallprompt",o),window.addEventListener("appinstalled",l)),on(()=>{setTimeout(v,300),setTimeout(A,300)})}),Z(()=>{typeof window>"u"||(window.removeEventListener("beforeinstallprompt",o),window.removeEventListener("appinstalled",l))});const $=()=>{document.documentElement.classList.add("page-transitioning")},P=()=>{document.documentElement.classList.remove("page-transitioning")};U(e,T=>{typeof window>"u"||f(T?"dark":"light")},{flush:"post"}),U(()=>t.route.path,()=>{b(),$(),on(()=>{setTimeout(v,100),setTimeout(A,200),setTimeout(P,500)})},{flush:"post"});const A=()=>{if(typeof document>"u")return;const T=document.querySelector(".VPFooter .message");if(!T||T.querySelector(".build-time-inline"))return;const B=document.createElement("span");B.className="build-time-inline",B.textContent=` · Build time ${a} `,T.appendChild(B)};return(T,B)=>(s(),S(d(n),null,{"layout-top":m(()=>[y(Po),y(so),y(lo),y(yo),y(go)]),"home-hero-before":m(()=>[y(kc)]),"doc-after":m(()=>[...B[0]||(B[0]=[i("div",{class:"giscus-wrapper"},null,-1)])]),"layout-bottom":m(()=>[y(_o)]),_:1}))}}),Sc=h(yc,[["__scopeId","data-v-c7d67c1f"]]),Ac={},Nc={class:"not-found"};function Oc(p,n){return s(),r("div",Nc,[...n[0]||(n[0]=[i("div",{class:"not-found__bubble"},[i("p",{class:"not-found__code"},"404"),i("h1",null,"迷路啦！"),i("p",null,"这里是次元夹缝，路标被史莱姆吃掉了。"),i("p",null,"别慌，跟着导航猫娘回去就好喵！"),i("a",{class:"not-found__button",href:"/"},"喵呜~ 带我回首页"),i("p",{class:"not-found__tip"},"一直往前会抵达未来，但换个方向更快找到想要的世界。")],-1)])])}const Bc=h(Ac,[["render",Oc],["__scopeId","data-v-2020f3db"]]),Vc=`---
order: 1
---

# 淫乱的罗德岛

这是一部基于明日方舟的R18同人小说。

## 简介

可能会有一点点猎奇，纯肉

A为短篇

B为系列

一级序号为章节

二级序号为小节

如B.N.4就是N系列第四章

B.N.5.1就是N系列第五章第一节

## 章节列表

<ARKChapterList />

---

⚠️ **警告**: 本作品包含成人内容，仅限18岁以上读者阅读。
`,xc=Object.freeze(Object.defineProperty({__proto__:null,default:Vc},Symbol.toStringTag,{value:"Module"})),Lc=`---
order: 1
---

# #1 共犯的初响

午后的阳光慵懒地穿过窗帘缝隙，在走廊地板上投下几道安静的光斑。星野铃音端着刚出炉、还散发着温热黄油香气的曲奇饼，站在哥哥房门前，轻轻敲了敲。

“哥哥？我烤了曲奇哦。”

没有回应。只有门缝里隐约传出一种低沉的、规律的嗡鸣声，混杂着某种湿润的、有节奏的“噗呲……噗呲……”轻响。

铃音歪了歪头。哥哥今天格外安静。她又叫了一声，依旧没有回答。手搭上门把，轻轻一旋——没锁。

推开门的瞬间，烤盘的温热还未从指尖褪去，一股混合着奇异甜腻气息的空气便扑面而来。房间很暗，厚重的窗帘几乎拉满，唯一的光源是角落电脑屏幕上闪烁的幽蓝微光，以及屏幕旁一盏低角度照射的、氛围暧昧的小夜灯。光线巧妙地避开了房间中央那个人的脸庞，只勾勒出身体的轮廓和某些局部的、惊人的细节。

铃音的呼吸停滞了。

视线首先被那双裹在纯黑色过膝丝袜里的腿吸引。丝袜在昏暗中泛着哑光，紧紧包裹着匀称修长的线条，一只脚踝上还系着细小的银色链子。再往上，是轻飘飘的、带有蕾丝边饰的黑色短裙，以及一件同样风格的露肩小上衣。头顶，一对毛茸茸的黑色猫耳发箍，随着身体难以自抑的细微颤抖而轻轻晃动。

但这些都不是重点。

重点是那双分开的腿之间，以及它们下方正在运作的机械。

一根粗壮的、金属与硅胶构成的柱状物，连接着发出低沉嗡鸣的基座，正以稳定的节奏进出着那个隐秘的部位。每一次进入，都带出更多晶莹的肠液，发出清晰的“噗嗤”水声；每一次退出，被扩张到极致的嫣红穴口便微微缩紧，随即又被下一轮进犯填满。那个部位周围，肌肤已经泛着情动的粉色。

而在前方，被短裙勉强遮掩、却又因动作而暴露的，是属于男性的器官。尺寸小巧，颜色是可爱的淡粉，此刻早已完全挺立，顶端不断渗出透明粘稠的液体，随着后方机械的撞击，在前端空气中划出细微的银丝，然后滴落，在早已湿润的布料和肌肤上留下更深的痕迹。

“哈啊……嗯……又、又要到了……不行了……”

熟悉又陌生的甜腻呻吟从房间中央传来，带着压抑的哭腔和浓得化不开的情欲。那是哥哥的声音，却又不是平时那个温柔清朗的哥哥。这个声音沙哑、甜腻、断断续续，每一个音节都浸泡在快感里。

铃音手中的托盘“哐当”一声掉在地上，曲奇饼滚落四处。但声音似乎被房间内的嗡鸣和呻吟吞噬了，那个沉浸在欲望中的人并未察觉。

屏幕的微光映照着滚动得飞快的匿名弹幕：

「今天的水声好响啊主播！」
「黑丝腿prpr！后面吃得好深！」
「前面又流了那么多，好色！」
「要射了吧？快让我们听！」

铃音僵在原地，大脑一片空白。哥哥？那个总是温柔浅笑、指尖带着书卷气的哥哥？那个会因为她打碎杯子而先关心她有没有受伤的哥哥？现在正穿着女装，被冰冷的机器侵犯着，在无数匿名的目光下，展露着最私密、最淫靡的姿态？

荒谬感和强烈的冲击让她头晕目眩。但下一秒，一股截然不同的、灼热而凶猛的热流，猛地从她小腹深处窜起，迅速席卷全身。

她感觉到自己裙下那个一直被她厌恶、忽视、试图用宽松衣物遮掩的部位，正以前所未有的速度和硬度苏醒、膨胀，紧紧顶住了内裤的布料，甚至将裙摆微微撑起一个不容忽视的弧度。一种混合着羞耻、厌恶、以及……难以言喻兴奋的战栗，顺着脊椎爬升。

不……不能看……这是不对的……

理智在尖叫，但身体和目光却被牢牢钉在原地。

视野里，那双穿着黑丝的腿绞紧又松开，脚趾难耐地蜷缩。前方的粉色器官猛地一颤，随即，一股白浊的液体激射而出，划出短促的弧线，溅在身下的软垫和机械基座上，发出细微的“啪嗒”声。

“嗯啊啊——！”哥哥的呻吟陡然拔高，又骤然虚弱下去，变成了断断续续的抽泣般的喘息。但后方的机械并未停止，甚至似乎调整了角度，更深地碾入，让那刚刚经历释放的身体再次剧烈颤抖起来，前方又可怜兮兮地挤出几滴稀薄的精液。

弹幕更加疯狂了。

铃音听见了自己粗重的呼吸声，感到大腿内侧一片冰凉的湿意——不知道是汗水，还是别的什么。厌恶感像潮水般涌来，却又被更凶猛的、黑暗的兴奋瞬间扑灭。一个清晰的、令人战栗的认知浮现在脑海：哥哥和她一样。不，甚至更……他需要这个。他沉醉其中。

她轻轻关上了门，落锁的“咔哒”声在嗡鸣与喘息中几乎微不可闻。

但椅子上的人还是浑身一僵。

“谁……？！”惊慌失措的声音，带着高潮后的绵软和沙哑。那个身影试图移动，却被身后的机器牵制，发出一声闷哼。

铃音没有回答，只是慢慢走近，脚步声轻得几乎听不见。昏暗的光线中，她只能看清哥哥身体的轮廓，脖颈优美的线条，锁骨处闪烁的细汗，以及那双惊慌中望向她的、在阴影中看不清神色的眼睛。还有，那片狼藉的、依然挺立着渗出液体的前端。

“哥、哥哥……”她听到自己的声音轻飘飘的，带着奇怪的颤音，“你在……做什么呀？”

“铃音？！不、不是……这是……”哥哥的声音支离破碎，试图解释，却语无伦次。他手忙脚乱地去摸身后机器的开关，动作笨拙。

铃音已经走到了他面前，蹲下身。这个角度，她能更清楚地看到那根小巧的、湿漉漉的器官，看到后面那根可怕的机械仍在缓慢地抽插，带出咕啾的水声。甜腻的、带着哥哥体香和某种腥膻的气味更加浓郁地钻进鼻腔。

她伸出手，没有碰触哥哥，而是轻轻拨弄了一下那个挂在哥哥上衣胸口、不知何时夹上去的、带着小铃铛的乳夹。

“叮铃……”

清脆的响声在淫靡的水声和喘息中格外突兀。

“啊……！”哥哥发出一声短促的惊叫，身体猛地一弹，前面的小东西也跟着抖了抖，渗出更多液体。

“好可爱。”铃音轻声说，这次声音稳了一些，甚至带上了一丝自己也未察觉的笑意。她从口袋里摸出一个小小的、粉色跳蛋，那是她平时偶尔用来安慰自己的玩具之一。她打开开关，细微的“嗡嗡”声响起。

“等、等一下！铃音，你不能……我是……”哥哥的声音带着哭腔，试图向后缩，却被身后的机器顶得向前一送。

铃音没有理会，将震动的跳蛋缓缓贴上哥哥大腿内侧的黑丝。丝滑的布料下，肌肤明显绷紧了。她沿着内侧慢慢往上移动，感受着指尖下身体的颤抖。最终，跳蛋停在了那根湿滑小巧的器官下方，轻轻压住最敏感的系带区域。

“嗯嗯——！不……不要在那里……哈啊……！”

哥哥的抗拒瞬间变成了甜腻的哀鸣，腰肢不受控制地向上挺动，主动将前端往震动的源头送去。后面的机器因为他的动作发出更响的“噗嗤”声。

铃音看着那根小东西在震动下可怜又可爱地跳动、吐露清液，看着哥哥的身体在黑丝的包裹下难耐地扭动，听着那破碎的、染满情欲的呻吟。她裙下的硬物涨得发痛，渴望被触碰、被抚慰的冲动几乎要冲破理智。

她忽然站起身，在哥哥茫然又渴求的目光中，提起了自己的裙摆。

没有穿内裤。这是她独自在房间里的习惯。

昏暗光线下，那根尺寸惊人、完全勃起、青筋盘绕的粗大阴茎弹了出来。龟头紫红发亮，前裂孔不断渗出透明的先走液，拉出细长的银丝。

哥哥的呼吸明显停滞了，阴影中的脸部轮廓似乎抬起了些，怔怔地“看”向那里。

“很恶心，对吧？”铃音的声音有些发苦，但更多的是一种破罐破摔的灼热，“和哥哥……不一样。是个怪物。”

但下一刻，她看到哥哥的身体动了。

他从那张特制的椅子上滑了下来，跪在了她的面前。动作牵动了后穴的机器，他发出一声闷哼，却还是坚持着，仰起头——尽管脸仍在阴影中，铃音却能感觉到他的视线落在她的阴茎上。

然后，哥哥伸出了舌尖，像小猫试探牛奶一样，轻轻舔了一下那不断渗液的铃口。

“唔……！”咸涩而腥膻的味道在铃音味蕾炸开，但更让她战栗的是哥哥的动作。

哥哥似乎顿了顿，随即，双手有些颤抖地扶住了她的腰侧，张开嘴，尝试将那硕大的龟头纳入口中。他的嘴太小，只能勉强含住前端一小部分，但湿滑温软的口腔包裹上来时，铃音还是倒抽了一口气。

“滋……啾……”生涩的吮吸声响起。哥哥努力地吞吐着，舌头笨拙地舔舐冠状沟，时不时滑过铃口，引来铃音一阵阵酥麻的颤栗。唾液混合着先走液，从嘴角溢出，沿着柱身流下。

“噗呲……噗呲……”身后的炮机依然在规律地抽插哥哥的后穴，每一次深入，哥哥的身体就会往前一送，喉咙发出被顶到的呜咽，但口舌的服务却更加卖力。

铃音的手不由自主地按上了哥哥的头，指尖陷入那柔软的发丝。她能感觉到哥哥的顺从，甚至……迎合。一种巨大的、禁忌的征服感和快感淹没了她。她开始轻轻摆动腰部，将自己送得更深。

“呜……咕……”哥哥发出含糊的吞咽声，眼角似乎有生理性的泪水反射着微光。

就在这时，哥哥的前端又射了。一股白浊毫无预兆地喷射出来，大部分溅在地板上，少许甚至溅到了铃音的脚踝。哥哥的身体剧烈痉挛着，后面的机器抽插声变得愈发响亮和湿润。

铃音的理智终于彻底崩断。

她猛地将哥哥从自己身下拉起，几乎是粗暴地将他推倒在旁边凌乱的床上。炮机的软管被拉直，发出不堪重负的声响。她摸索着找到开关，“啪”地一声关掉，然后握住那根湿滑冰冷的机械，猛地从哥哥体内抽了出来！

“啊……！”后穴骤然空虚，让哥哥发出一声失落的、带着哭腔的叹息。那处嫣红的小口一时无法闭合，微微张合着，流出大量混合了润滑液和肠液的浊白液体，将床单染湿一片。

铃音爬上床，跪在哥哥双腿之间。昏暗光线中，哥哥的身体一览无余：凌乱的女装，破了的黑丝，带着泪痕和精斑的平坦小腹，剧烈起伏的胸膛上晃动的乳夹铃铛，还有那双分开的、不断颤抖的腿，以及中间那个泥泞不堪、渴望被填满的入口。

她握住自己滚烫坚硬的阴茎，硕大的龟头抵上了那个湿滑紧致的小口。

“哥哥，”她的声音沙哑得厉害，“我……可以吗？”

阴影中，哥哥的脸似乎转向她，然后，一双手臂伸了过来，柔软却坚定地环住了她的脖颈，将她往下拉。一个带着泪咸和情欲气息的吻印在了她的唇上，笨拙而热烈。

“进来……铃音……”哥哥喘息着，热气喷在她的耳廓，“用你的……填满我……”

再无犹豫。

腰部用力，粗大的前端挤开那紧致湿滑的入口，一寸寸深入。

“嗯……啊……！”哥哥的呻吟被顶得支离破碎。

太紧了，太热了。远比机器更真实，更富有生命力的触感包裹上来。铃音感到自己阴茎上的每一根血管都在搏动，被那贪婪蠕动的内壁紧紧吮吸。

她开始抽动。起初缓慢，试探。

“哈啊……慢、慢点……好涨……”哥哥的腿环上了她的腰。

但随着快感累积，节奏逐渐加快。

“噗叽！噗叽！噗叽——！”

粗壮阴茎在狭窄肠道里高速进出，带出大量润滑和肠液，发出响亮而淫靡的水声。每一次重重撞击，都会顶到深处某个敏感点，让哥哥发出尖锐的、甜腻的哭叫。

“那里……就是那里！嗯啊啊！铃音……好厉害……！”

哥哥的前端又开始渗出清液，随着撞击的频率，一小股一小股地射出，量不大，却持续不断。胸前的小铃铛随着剧烈的颠簸疯狂作响，“叮铃叮铃”响个不停。

铃音俯下身，吻住哥哥的唇，吞掉他所有的呻吟。两人的汗水混合在一起，滴落在彼此身上。她能感觉到哥哥体内越来越热，绞得越来越紧。

“哥哥……我要……我要射了……”铃音喘息着，撞击得又快又狠，床架发出不堪重负的“吱呀”声。

“射……都射进来……给哥哥……”哥哥失神地呢喃着，双腿死死夹紧她的腰。

最后的猛力一顶，龟头深深嵌入最深处。

“嗯啊啊啊啊——！”

两人同时达到了高潮。

铃音的阴茎在哥哥体内剧烈搏动，炽热的精液一股接一股地喷射，灌满那紧致的肠腔。与此同时，哥哥的前端也喷出了一道格外浓稠的白浊，直接溅到了他自己的下巴和锁骨上。

高潮的余韵中，铃音无力地趴在哥哥汗湿的身体上，剧烈喘息。哥哥体内温暖的包裹和规律的收缩还在继续，吮吸着最后一点精华。

不知过了多久，铃音稍微退出来。混合着大量精液和肠液的浓白液体立刻从哥哥后穴涌出，将床单弄得更湿更狼藉。

哥哥似乎连动一根手指的力气都没有了，只是躺在那里，胸膛起伏。阴影中，看不清他的表情。

铃音的心突然被恐慌攫住。她做了什么？对亲生哥哥……

但就在这时，一只微凉的手轻轻抚上了她的脸颊。

“铃音……”哥哥的声音很轻，带着事后的沙哑和疲惫，却没有厌恶或恐惧，“……谢谢你。”

铃音的眼泪毫无预兆地掉了下来，滴在哥哥的胸口。她低下头，把脸埋进哥哥的颈窝，嗅着那混合了情欲、汗水和自己气味的复杂气息。

“对不起……哥哥……对不起……”她哽咽着。

“笨蛋……”哥哥的手轻轻拍着她的背，像小时候哄她睡觉那样，“……我们……是一样的啊。”

窗外，夕阳的最后一点余晖也消失了，房间彻底陷入昏暗。只有角落里，忘记关闭的电脑屏幕，还幽幽地亮着，定格在某个满是问号和惊叹号的匿名聊天界面上。

而床上，两个被禁忌的欲望和温暖的体温缠绕在一起的灵魂，才刚刚开始面对他们崭新、混乱、而又无法分割的未来。`,Cc=Object.freeze(Object.defineProperty({__proto__:null,default:Lc},Symbol.toStringTag,{value:"Module"})),wc=`---
order: 10
---

# #10 湿透的伪装与荆棘的印记


清晨六点十五分，悠真在黑暗中睁开眼睛。

她没有立刻起身，而是先静静地躺着，感受身体的状态。子宫深处传来熟悉的酸胀感，阴道口还残留着昨天被过度使用的微痛。但比这些更强烈的，是那种从骨髓里渗出的、令人焦躁的渴望——性转药物的副作用正在持续发作，每一天都比前一天更强烈。

她翻身下床，赤脚走到衣柜前。

今天的穿搭已经计划好了。白色短袖T恤打底，外面套黑色工装裤——多口袋的设计，宽松的版型，能完美掩盖身形。但工装裤里面，她准备了一条藏青色的JK裙，裙摆刚好到大腿中部。腿上会穿黑色吊带丝袜，袜口有精致的蕾丝，吊带连接着配套的黑色蕾丝内裤。最后是那双及踝的黑色马丁靴。

这是她精心设计的“反差装扮”。外表看起来是中性的、甚至有点帅气的风格，但里面却藏着完全女性化的、甚至可以说是色情的秘密。

她脱下睡衣，站在全身镜前。

镜子里，少女的身体在晨光中泛着细腻的光泽。胸部比昨天又大了一点，乳晕的颜色更深了。小腹平坦，腰线纤细。再往下，那片新生的女性部位已经微微湿润——仅仅是想到今天的计划，身体就已经先一步做出了反应。

悠真伸出手，指尖轻轻碰了碰阴蒂。

“唔……”

细微的呻吟在安静的房间里格外清晰。她咬住嘴唇，收回手。

不能现在就开始。要留着。留着给……

她不知道要留给谁。是早川理纱？还是晚上回来后的铃音？

或者说，她潜意识里希望两者都有。

这种想法让她感到羞耻，但更让她兴奋。

穿上JK裙时，裙摆摩擦过大腿的感觉很奇妙。丝滑的布料，轻飘飘的重量，还有那种“穿着裙子”的心理暗示——这些都让她心跳加速。

然后是吊带丝袜。她坐在床边，小心地将丝袜卷到脚尖，然后一点点往上拉。黑色半透明的材质包裹住小腿、膝盖、大腿。袜口有精致的蕾丝边，再往上，是连接着内裤的吊带。她调整好吊带的位置，让蕾丝刚好卡在胯骨两侧。

站起来时，丝袜发出细微的摩擦声。她走到镜子前，转过身——从后面看，吊带在臀部下沿形成两道优雅的弧线，连接着腿上的丝袜。黑色蕾丝内裤包裹着臀部，中间那道缝隙若隐若现。

色情极了。

也美极了。

悠真脸红了。她穿上工装裤——宽松的布料掩盖了一切。拉上拉链，系好腰带，再套上黑色短袖衬衫，只扣最下面的两颗扣子，露出里面的白T恤。

最后是马丁靴。她坐下来，仔细地系好每一根鞋带。

全部穿好后，她站在镜子前转了一圈。

外表看起来完全是个“打扮时尚的男生”。工装裤的宽松版型掩盖了臀部和腿部的曲线，衬衫的敞开穿法营造出随性的感觉。长发扎成低马尾，塞进衬衫领子里。脸上没有化妆，只有嘴唇涂了无色的润唇膏。

但只有她自己知道，工装裤底下藏着什么。

那是只属于她的，或者说，只属于那些会被允许看到的人的，秘密。

下楼时，铃音已经坐在餐桌前了。她今天看起来好了一些，但眼睛下面还是有淡淡的黑眼圈。

“哥哥早。”铃音的声音有些沙哑，她抬起头，看到悠真的穿搭时，眼睛亮了一下，“今天也……很帅。”

悠真脸红了：“早。”

她在对面坐下，小口喝着牛奶。她能感觉到铃音的视线一直停留在自己身上，那种审视的、占有的目光让她既紧张又兴奋。

“哥哥，”铃音突然开口，“今天……也会有人给你送便当吗？”

悠真握着杯子的手紧了紧：“……嗯。早川同学说……还会送。”

空气安静了几秒。

然后，铃音笑了。那个笑容很温柔，但眼睛里有什么东西在闪烁：“是吗。那哥哥要好好感谢人家哦。”

悠真点头，不敢看铃音的眼睛。

“不过哥哥，”铃音的声音更轻了，“要记住我们的约定哦。只有我能碰哥哥，只有我能抱哥哥，只有我能……”

她顿了顿，没有说完。但悠真知道后面的话是什么。

只有我能操哥哥。

“嗯。”悠真小声说，“我记得。”

铃音满意了。她站起身，走到悠真身后，从后面抱住她。脸埋在她颈窝，深深吸了一口气。

“哥哥身上的味道……”铃音低声说，“还是我的味道。真好。”

悠真僵住了。她能感觉到铃音的胸部贴着她的背，能感觉到妹妹的呼吸喷在脖子上，能感觉到……自己身体的反应。

“铃音……”她小声说，“我要迟到了……”

铃音松开手，在她脸颊上亲了一下：“去吧。放学早点回来。”

“嗯。”

走出家门时，悠真腿还在发软。刚才被铃音抱的那一下，她差点就高潮了。工装裤下的丝袜已经湿了一小块，黏腻地贴在大腿内侧。

她深呼吸，强迫自己冷静。

不能在学校里失态。至少……不能太早失态。

到学校时，比平时早了一些。教室里还没几个人，悠真在自己的座位坐下，从书包里拿出课本。

她能感觉到丝袜的触感——细腻，光滑，紧紧包裹着双腿。也能感觉到裙摆随着动作轻轻晃动，摩擦着大腿内侧。这些细微的刺激累积起来，让她一直处于微妙的兴奋状态。

上课时，她努力集中注意力，但身体的不适感越来越明显。子宫深处传来阵阵酸胀，像有什么东西在里头搅动。阴道口不断渗出液体，内裤已经湿透了，湿意渗透了丝袜和工装裤，在裤裆处形成一小块不易察觉的深色。

她并紧双腿，轻轻摩擦。这个动作带来一丝快感，也带来更多的液体。

不行。要忍住。

她咬住嘴唇，手指在桌下悄悄按在小腹上。隔着层层布料，她按到了子宫的位置——那里温热，柔软，随着按压传来阵阵快感。

“唔……”

细微的呻吟从喉咙里溢出，她赶紧捂住嘴。

前座的女生转过头：“悠真同学？你没事吧？”

“没……没事……”悠真用假声回答，脸烧得通红，“有点……胃疼。”

“要去保健室吗？”

“不用……一会儿就好。”

女生转回去了。悠真松了口气，但身体的状态更糟了。刚才那一下按压，让她差点高潮。她能感觉到阴道在痉挛，一股热流涌出，彻底浸湿了内裤和丝袜。

她低头看去——工装裤的裆部，深色的水渍又扩大了一圈。

完了。

她咬住嘴唇，强迫自己坚持到午休。

下课铃响起时，悠真几乎虚脱。她趴在桌上，小口喘气，身体还在微微颤抖。

“悠真。”

早川理纱的声音从头顶传来。

悠真抬起头，看到早川站在桌前，手里拎着便当袋。今天的早川穿着校服裙，白色衬衫的领口系着红色丝带，头发扎成高马尾，看起来清爽又可爱。

“早川同学……”悠真坐直身体，努力让声音听起来正常。

“你脸色好白。”早川担忧地看着她，“不舒服吗？”

“有点……胃疼。”悠真重复了早川的谎言。

“那……”早川犹豫了一下，“要去天台吃便当吗？那里空气好一些。”

天台。

悠真心里一紧。天台很少有人去，很安静，很……私密。

“……好。”她听到自己这样说。

两人一前一后走出教室，爬上楼梯，来到天台。

正午的阳光有些刺眼，但风很凉爽。天台上空无一人，只有几只鸽子在角落咕咕叫着。

早川在阴影处找了个干净的地方坐下，拍了拍身边的位置：“这里。”

悠真走过去，在她身边坐下。这个距离很近，近到能闻到早川身上淡淡的洗衣液香味。

“给。”早川递过便当盒，“今天是你喜欢的照烧鸡排和蔬菜沙拉。”

“谢谢……”悠真接过，打开盖子。照烧鸡排煎得恰到好处，酱汁浓郁，蔬菜沙拉新鲜爽口。很用心的一份便当。

她拿起筷子，小口吃着。动作还是不自觉地秀气——手指捏筷子的姿势很柔，夹菜时手腕转动很小，咀嚼时嘴唇抿紧。

早川静静地看着她吃，眼神温柔又复杂。

“悠真，”她突然开口，“你今天的穿搭……很好看。”

悠真手一顿：“谢谢……”

“工装裤很适合你。”早川说，然后，声音更轻了，“里面……穿了什么？”

悠真僵住了。筷子停在半空，她抬起头，看向早川。

早川的脸有些红，但眼神很坚定：“昨天抱你的时候……我感觉到了。你穿着……丝袜，对吗？”

悠真没有说话。她的心跳得厉害，几乎要从喉咙里跳出来。

早川伸出手，轻轻碰了碰她的工装裤裤脚——那里，黑色丝袜的袜口露出来一小截，蕾丝边若隐若现。

“是吊带丝袜吧？”早川问，手指顺着裤脚往上滑了一点点，“我看到了吊带的痕迹。”

悠真浑身颤抖。她想否认，想逃跑，但身体却像被钉在原地。

而更糟的是，随着早川的触碰，随着早川话语里的暗示，她的身体反应更强烈了。她能感觉到又一股热流涌出，内裤和丝袜彻底湿透，湿意甚至渗透了工装裤。

早川显然注意到了。她的视线落在悠真裆部——那里，深色的水渍已经很明显了。

“悠真，”早川的声音变得很轻，很温柔，“你……湿了，对吗？”

悠真闭上眼睛，眼泪涌了出来。她点头，很小的幅度。

早川没有嘲笑她，没有鄙视她。相反，她伸出手，轻轻擦去悠真脸上的泪痕。

“没关系的。”早川说，“没关系的，悠真。我不会告诉任何人。”

悠真睁开眼睛，看着早川。那双总是温柔的眼睛里，此刻盛满了理解和某种更深的东西——不是欲望，不是占有，而是……接受。完全的、无条件的接受。

“早川同学……”悠真哭着说，“我……我其实……”

“嘘。”早川的手指按在她嘴唇上，“现在不要说。等你想说的时候再说。”

她收回手，重新坐好：“先吃饭吧，要凉了。”

悠真点头，重新拿起筷子。但她的手在抖，几乎夹不起菜。

早川注意到了。她接过悠真的筷子，夹起一块鸡排，递到她嘴边：“啊——”

悠真愣住了。这个动作太亲密了，像情侣之间的喂食。

但她还是张开了嘴，接受了那块鸡排。

早川笑了，那个笑容很温暖，很明亮。她又夹起一片生菜，喂给悠真。

就这样，早川一口一口地喂完了整份便当。悠真像个孩子一样被照顾着，被珍视着。这种感觉很奇妙——和铃音的占有欲不同，早川的温柔更像是一种呵护，一种珍惜。

吃完最后一口，早川收拾好饭盒，然后转头看向悠真。

“悠真，”她说，“报酬。”

悠真知道她指的是什么。昨天的拥抱，今天的便当，还有……刚才的喂食。早川要收取报酬了。

“……好。”她小声说。

早川笑了。她站起身，走到悠真面前，然后，伸出手。

“站起来。”她说。

悠真站起来。因为腿软，她踉跄了一下，早川及时扶住了她。

两人面对面站着，距离很近。悠真能闻到早川身上淡淡的香味，能看到早川眼睛里自己的倒影——那个眼眶发红、嘴唇微肿、看起来脆弱又诱人的自己。

“今天，”早川说，“可以让我看看吗？”

悠真愣住了：“看……什么？”

“看你工装裤底下的样子。”早川的声音很轻，但很清晰，“我想看看……真正的你。”

悠真浑身僵硬。她想拒绝，但身体里那股汹涌的欲望让她无法开口。而且……内心深处，她也想被看到。想被早川看到那个真实的、女性化的自己。

她沉默了很久。久到早川以为她不会答应了，准备收回请求时——

悠真点了点头。

很小的幅度，但很坚定。

早川的眼睛亮了。她伸出手，放在悠真工装裤的腰带上。

“可以吗？”她问，最后一次确认。

悠真点头。

早川的手指开始动作。她解开腰带，拉开拉链，然后，慢慢将工装裤往下褪。

布料摩擦过丝袜，发出细微的沙沙声。当工装裤褪到大腿中部时，里面的JK裙露了出来——藏青色的百褶裙，裙摆刚好到大腿中部。

早川的动作停住了。她盯着那条裙子，眼睛睁大。

“裙子……”她低声说，声音里带着惊讶和某种更深的情绪。

悠真脸红了。她低下头，不敢看早川的眼睛。

早川继续往下褪工装裤，直到完全褪到脚踝。现在，悠真下半身完全暴露在早川面前——藏青色JK裙，黑色吊带丝袜，蕾丝内裤。丝袜已经湿透了，大腿内侧的部分颜色更深，紧紧贴在皮肤上，勾勒出腿部的轮廓。

早川蹲下来，视线和悠真的下半身齐平。她伸出手，指尖轻轻碰了碰丝袜的袜口——那里，蕾丝边已经被体液浸湿，颜色变深。

“湿透了……”早川低声说，手指顺着丝袜往上滑，划过悠真的大腿内侧，“这里……很难受吧？”

悠真浑身剧烈颤抖。早川的指尖划过的地方，带来一阵阵电流般的快感。她能感觉到自己的体液还在不断涌出，沿着腿根流下，浸湿了更多丝袜。

“早川同学……”她哭着说，“别……别看了……”

“为什么？”早川抬起头，看向她，“很漂亮啊。悠真这样……很漂亮。”

她站起身，重新和悠真面对面。然后，她伸出手，环住悠真的腰。

“现在，”早川说，把悠真抱进怀里，“报酬。”

这次的拥抱和昨天不同。昨天是温柔的、克制的。今天是……亲密的，深入的。

早川的手臂紧紧环住悠真的腰，两人的身体完全贴在一起。悠真能感觉到早川的胸部贴着自己的胸口，能感觉到早川的呼吸喷在颈窝，能感觉到……自己身体的反应像火山一样爆发。

“唔……”她发出一声压抑的呻吟。

早川听到了。她非但没有松开，反而抱得更紧，还开始轻轻摇晃，像在哄小孩。

“悠真，”早川在她耳边低声说，“你很舒服，对吗？”

悠真点头，脸埋在她肩头。

“这里，”早川的手移到悠真背部，轻轻往下按，让两人的下腹部也贴在一起，“有感觉吗？”

有。太有了。

悠真能感觉到早川的小腹贴着自己的小腹，隔着裙子、丝袜和内裤，她依然能感觉到那种压迫感。而那个部位，已经湿得一塌糊涂，液体甚至渗透了层层布料，染湿了早川的校服裙。

“湿了……”早川说，声音里带着笑意，“悠真把我弄湿了。”

悠真脸更红了。她想道歉，但早川打断了她。

“没关系。”早川说，“我喜欢。”

她开始轻轻摩擦。不是大幅度的动作，只是细微的、缓慢的左右晃动。但就是这个动作，让悠真几乎崩溃。

“啊……早川同学……不要……”她哭着哀求，手却抓紧了早川背后的衣服。

“不要什么？”早川问，动作没有停，“不要停？还是……不要继续？”

悠真回答不出来。她的理智在说“停下”，但身体在说“更多”。这种矛盾让她痛苦，但也让她兴奋。

早川显然看穿了她的挣扎。她笑了，那个笑容里带着温柔，也带着某种掌控感。

“悠真，”她说，嘴唇贴近悠真的耳朵，“你其实很想要，对吗？想要被碰，想要被抚摸，想要……高潮。”

悠真浑身剧烈颤抖。这句话像钥匙一样，打开了她最后的防线。

她点头，很小的幅度，但早川感觉到了。

“那就给你。”早川说，手从悠真背上滑到臀部，用力把她按向自己。同时，她的腿微微分开，让悠真的下体正好卡在她两腿之间。

这个姿势太色情了。悠真的阴部隔着层层布料，紧贴着早川大腿内侧最柔软的部位。随着早川轻轻晃动身体，那里开始摩擦悠真的敏感点。

“啊……啊……”悠真发出细碎的呻吟，腿软得几乎站不住。

早川搂着她，支撑着她，同时继续那个缓慢但持续的摩擦动作。

“悠真这里，”早川的手移到悠真胸前，隔着衬衫和T恤，轻轻按在那两处凸起上，“也很敏感吧？”

她开始揉捏。不是粗暴的，而是缓慢的、有节奏的揉捏。手指找到乳头的位置，隔着布料轻轻按压、打圈。

悠真尖叫一声，身体弓起。胸部传来的快感和下身传来的快感叠加在一起，像两股洪流在体内冲撞。

“早川同学……我要……要去了……”她哭着说。

“这么快？”早川有些惊讶，但动作没有停，“那……去吧。”

这句话像最后的指令。悠真的防线彻底崩溃。

她达到了高潮。

不是潮吹——量没那么大。但依然是强烈的高潮。子宫剧烈收缩，阴道痉挛般收紧，阴蒂跳动得像要爆炸。大量的液体涌出，彻底浸湿了内裤、丝袜、裙子，甚至早川的校服裙。

悠真瘫软在早川怀里，像一滩融化的水。她喘息着，眼泪不停地流，身体还在微微抽搐。

早川抱着她，轻轻拍着她的背。

“第一次？”她问，声音很轻。

悠真点头。

“在别人怀里高潮……是第一次吗？”

悠真犹豫了一下，然后摇头。她想起了铃音——但那是妹妹，是特殊的。

早川似乎理解了她没说出口的话。她没有追问，只是抱得更紧了些。

许久，悠真稍微恢复了一些力气。她想要退开，但早川没有松开。

“报酬还没结束。”早川说。

悠真愣住了：“还……还要什么？”

早川没有回答，而是低下头，脸埋在悠真颈窝。她深深吸了一口气，然后，张开嘴，轻轻咬住了悠真锁骨上方的皮肤。

不是真的咬，更像是吮吸。但力度不小，悠真能感觉到刺痛。

“早川同学……”她小声说。

早川没有理会。她继续吮吸，同时舌头轻轻舔舐那个部位。湿热的触感让悠真浑身发麻。

许久，早川松开嘴，抬起头。

悠真锁骨上方，留下了一个清晰的、紫红色的吻痕。不，应该说是咬痕——边缘有细微的齿印。

“标记。”早川说，手指轻轻抚过那个痕迹，“这样，别人就会知道，悠真是有人要的。”

悠真愣住了。她看着早川，看着那双温柔的眼睛里此刻闪烁的某种占有欲，心里涌起复杂的情绪。

早川整理了一下衣服，退后一步，拉开了距离。

“下午还有课，”她说，声音恢复了平时的温柔，“快收拾一下。”

悠真低头看去——自己的裙子、丝袜全湿了，早川的校服裙也湿了一小块。

“对不起……”她小声说。

“没关系。”早川笑了，“我有备用裙子。倒是你……这样能上课吗？”

悠真这才想起自己的状态。她连忙拉上工装裤——还好，工装裤是深色的，湿痕不太明显。但里面的裙子和丝袜……

“我带了备用的。”她说，声音很小。

早川眼睛亮了：“早有准备？”

悠真脸红了，点头。

“那……”早川凑近，在她耳边低声说，“悠真果然是期待着会发生什么，对吗？”

悠真无法否认。她确实是期待的。从早上精心打扮开始，她就期待着被看到，被触碰，被……占有。

早川似乎很满意她的沉默。她后退一步，挥挥手：“那下午见。体育课的时候……我会来找你的。”

说完，她转身离开了天台。

悠真站在原地，许久没有动。她能感觉到身体还在微微颤抖，能感觉到高潮后的余韵还在体内流淌，能感觉到锁骨上那个咬痕在隐隐作痛。

但比这些更强烈的，是一种空虚感。

被填满之后的空虚。

她蹲下来，开始换衣服。从书包里拿出备用的内裤、丝袜、裙子——都是和早上穿的一模一样的款式。

脱下湿透的内裤时，她看到上面沾满了透明的液体，甚至还有一丝丝拉丝。丝袜也湿透了，黑色半透明的材质因为浸湿而颜色变深，紧紧贴在腿上，勾勒出每一寸肌肤的轮廓。

她小心地把湿衣服卷起来，装进塑料袋，再放进书包最底层。

换上干爽的衣服后，她感觉好了一些。但身体的渴望并没有消失——刚才的高潮只是暂时缓解，那股从骨髓里渗出的欲望还在，甚至因为被满足过一次而变得更加强烈。

她整理好工装裤，拉好拉链，系好腰带。然后，她拿出小镜子，检查了一下锁骨上的咬痕——很明显，紫红色的一圈，边缘有细微的齿印。

她犹豫了一下，把衬衫最上面的扣子扣好，遮住了那个痕迹。

但布料摩擦过咬痕时，带来细微的刺痛和快感。她咬住嘴唇，收起镜子，离开了天台。

下午的课，悠真完全没听进去。

她坐在座位上，身体还在微微颤抖。锁骨上的咬痕隐隐作痛，但也带来奇异的快感——每次她稍微动一下，衬衫布料摩擦过那个部位，都会让她想起早川的嘴唇，早川的舌头，早川的牙齿。

还有早川说的话——“这样，别人就会知道，悠真是有人要的。”

这句话像魔咒一样在她脑子里回响。

有人要的。

她是有人要的。

这个认知让她既羞耻又兴奋。

体育课安排在最后一节。悠真换好运动服——长袖长裤，完全掩盖了身体。但她能感觉到，丝袜还穿着，裙子还穿着，工装裤套在外面。这种层叠的穿着让她一直处于微妙的兴奋状态。

热身跑时，她尽量跑在队伍最后面。但即使如此，她还是能感觉到身体的反应——胸部随着跑步晃动，乳头摩擦着运动服，带来刺激。下身也因为运动而不断摩擦，快感一阵阵涌上来。

她咬住嘴唇，强迫自己坚持。

自由活动时间，大部分同学去了操场或体育馆。悠真找了个借口，说要去洗手间，离开了队伍。

她走进教学楼，想找个没人的地方休息一下。但刚走进一楼走廊，就被人从后面拉住了手腕。

“悠真。”

是早川理纱。

悠真转身，看到早川也穿着运动服，但外面套了件开衫。她的头发扎成马尾，脸上带着红晕，不知道是因为运动还是因为别的什么。

“早川同学……”

“跟我来。”早川拉着她，走进一间空教室——是家政教室，平时很少人用。

关上门，拉上窗帘，教室里变得昏暗。只有从窗帘缝隙透进来的几缕阳光，照亮空气中漂浮的尘埃。

“这里……”悠真小声说，心跳又开始加速。

“这里很安全。”早川说，转身面对她，“体育老师不会来这里检查。”

她走近，手放在悠真腰上：“刚才跑步的时候……我一直看着悠真。”

悠真愣住了。

“悠真跑步的样子，”早川的手指轻轻摩挲着悠真的腰侧，“很可爱。脸红红的，喘气的样子，还有……腿软的样子。”

悠真脸红了。她想否认，但早川的手指开始往上滑，停在她胸前。

“这里，”早川隔着运动服，轻轻按在那两处凸起上，“晃得很厉害。悠真一定感觉到了吧？”

悠真点头，很小的幅度。

早川笑了。她开始揉捏，隔着厚厚的运动服，动作很轻，但很有节奏。

“唔……”悠真发出一声呻吟，腿又开始发软。

“悠真，”早川凑近，嘴唇几乎贴到她的耳朵，“想不想再来一次？”

悠真浑身颤抖。她想说不想，但身体已经先一步做出了反应——她能感觉到又一股热流涌出，内裤和丝袜又开始变湿。

早川显然察觉到了。她的手往下滑，停在悠真小腹上，隔着运动裤和工装裤，轻轻按压。

“湿了，对吗？”早川问，声音里带着笑意，“悠真的身体……真的很诚实。”

悠真闭上眼睛，眼泪又涌了出来。她不知道为什么自己会这样——为什么只是被早川碰一下，说几句话，就会湿成这样，就会想要更多。

“早川同学……”她哭着说，“我……我不知道为什么会这样……”

“我知道。”早川说，手继续往下，隔着布料按在悠真的阴部上，“因为悠真很敏感。很……淫荡。”

这个词让悠真浑身一颤。羞耻感像潮水一样涌上来，但与之一起涌上的，还有更强烈的兴奋。

“我不是……”她小声否认，但声音微弱得连自己都说服不了。

“你是。”早川的手开始轻轻按压、摩擦那个部位，“悠真这里，已经湿透了。隔着这么多层衣服，我都能感觉到湿意。”

悠真无法反驳。她确实湿透了。从早上到现在，她几乎一直处在湿润的状态。

早川的动作开始加快。隔着运动裤和工装裤，摩擦的力度不大，但持续不断。而且，她似乎找到了技巧——每次都正好摩擦过阴蒂的位置。

“啊……啊……”悠真发出细碎的呻吟，手抓住早川的手臂，指尖因为用力而泛白。

“想要高潮吗？”早川问，呼吸也变得急促。

悠真点头，眼泪不停流。

“那就来。”早川说，另一只手也加入进来——她拉开悠真运动裤的裤腰，手伸进去，隔着工装裤和内裤，直接按在了那个湿漉漉的部位上。

这个接触更直接了。悠真能感觉到早川手指的温度，能感觉到按压的力度，能感觉到……快感像海啸一样涌上来。

“早川同学……我要……要去了……”她哭着说。

“去吧。”早川说，手指开始快速按压。

悠真达到了第二次高潮。

这次比天台那次更强烈。也许是因为在教室里，也许是因为随时可能被人发现的紧张感，也许是因为……早川的手指更直接了。

她瘫软在早川怀里，像一滩融化的水。运动服的后背完全湿透，贴着皮肤。下身也湿透了，液体甚至渗透了层层布料，在运动裤上晕开一小块深色。

早川抱着她，轻轻拍着她的背。

许久，悠真稍微恢复了一些力气。她抬起头，看到早川正看着她，眼神温柔又复杂。

“悠真，”早川说，“你……喜欢这样吗？”

悠真沉默了几秒，然后点头。

“喜欢被我碰？喜欢被我弄到高潮？”

悠真脸红了，但还是点头。

“那……”早川的手指轻轻抚过她的脸颊，“喜欢我吗？”

悠真愣住了。她看着早川，看着那双温柔的眼睛里此刻盛满的期待，心里涌起复杂的情绪。

喜欢早川吗？

喜欢的。早川温柔，体贴，包容，而且……接受她的一切。即使是这么淫荡的、不堪的一面，早川也接受了。

但是……

但是铃音呢？

那个占有欲强烈、偏执、但深爱着她的妹妹。

悠真陷入了沉默。她不知道该怎么回答。

早川似乎看穿了她的挣扎。她没有追问，只是笑了笑，那个笑容有些勉强。

“没关系。”早川说，退后一步，拉开了距离，“不用现在回答。”

她整理了一下衣服，转身准备离开。

“早川同学！”悠真叫住她。

早川转身，看向她。

“……谢谢你。”悠真小声说，“谢谢你……接受这样的我。”

早川的眼睛亮了。她走回来，在悠真嘴唇上亲了一下——很轻很快的一个吻，像羽毛拂过。

“不用谢。”她说，“因为我……很喜欢这样的悠真。”

说完，她转身离开了教室。

悠真站在原地，手指抚上嘴唇，那里还残留着温热的触感。她能闻到自己身上早川的气味，能感觉到身体里还在流淌的快感余韵，能感觉到……那种空虚感又回来了。

她蹲下来，开始检查自己的衣服——运动裤湿了一小块，但因为是深蓝色，不太明显。里面的工装裤、裙子、丝袜全湿了。

她拿出备用的衣物——还是和早上一样，同款的内裤、丝袜、裙子。在空教室里快速换好，把湿衣服装进塑料袋。

全部整理好后，她看了看时间——体育课还有十分钟结束。她整理了一下头发，深呼吸，走出了教室。

放学铃响时，悠真几乎是用跑的离开了学校。

她不敢停留，怕早川再来找她，怕自己又会控制不住。身体的欲望还在燃烧，但她知道，必须留着。留着回家，留着给铃音。

回到家时，天色已经暗了。

悠真打开门：“我回来了……”

没有回应。

她脱下鞋，走进客厅。还是没有人。

“铃音？”她叫了一声，往楼上走去。

卧室的门虚掩着。悠真推开门，然后，又愣住了。

和昨天一样，铃音坐在床上，背对着门。她穿着睡衣，头发乱糟糟的，肩膀微微颤抖。房间里弥漫着浓郁的、熟悉的气味——体液和汗水的气味。

而在床上，散落着几件东西——悠真昨天换下的睡衣，还有她今天早上换下的湿内裤（她明明藏起来了，但铃音还是找到了）。

铃音手里拿着那条湿内裤，脸埋在里面，深深呼吸着。另一只手放在自己腿间，睡衣下摆被撩起，能看见她光裸的大腿和……那只已经完全勃起、尺寸惊人的男性器官。

悠真僵在门口，大脑一片空白。

铃音在……用她的湿内裤自慰。

这个认知让她浑身发热，下身又涌出一股热流。她能感觉到新换的内裤又开始变湿。

而这时，铃音似乎察觉到了什么，动作停住了。

她慢慢转过身，看向门口。

看到悠真的瞬间，铃音的眼睛亮了。但那种亮和昨天不同——今天，里面还掺杂着某种深沉的、令人心悸的黑暗。

“哥哥……”铃音的声音沙哑得厉害，“你回来了。”

她放下手里的内裤，站起身。睡衣下摆垂下来，遮住了下半身，但悠真能看到那处明显的隆起，还有顶端渗出的透明液体，在布料上晕开一小块深色。

铃音走过来，脚步有些虚浮。她的脸泛着不正常的红晕，眼睛红得吓人，呼吸急促得像跑了很久。

“哥哥……”她走到悠真面前，伸手想要抱她。

但就在这时，铃音的动作又停住了。

她的鼻子动了动，然后，脸上的红晕迅速褪去，取而代之的是一种冰冷的苍白。

“哥哥，”铃音的声音变得很轻，很平静，“你身上……很整洁呢。”

悠真心里一紧：“什么……什么意思？”

“衣服。”铃音伸手，抓住悠真衬衫的领口，“很平整，很干净。像……刚换过的。”

她的手指开始解悠真的衬衫扣子。一颗，两颗，三颗。

当解开第三颗扣子时，铃音的动作停住了。

她的视线落在悠真锁骨上——那里，紫红色的咬痕清晰可见。在白皙的皮肤上，那个痕迹像某种宣告，某种标记。

铃音盯着那个咬痕看了很久很久。

久到悠真以为时间停止了。

然后，铃音笑了。

那个笑容很温柔，温柔到令人毛骨悚然。

“哥哥，”铃音说，手指轻轻抚过那个咬痕，“这是什么？”

悠真浑身僵硬。她想解释，但谎言卡在喉咙里，发不出声音。

铃音的手指加大了力度，指甲几乎要嵌进那个咬痕里。

“疼吗？”铃音问，声音依然很轻，“被咬的时候……疼吗？”

悠真点头，眼泪涌了上来。

“那为什么，”铃音的手突然用力，抓住悠真的肩膀，“为什么还要让她咬？”

悠真被摇得几乎站不住：“对不起……对不起铃音……我只是……”

“只是什么？”铃音打断她，声音终于有了起伏——是愤怒，是痛苦，是某种近乎疯狂的绝望，“只是忍不住？只是想要？只是……管不好自己的下体？”

悠真哭得更凶了：“不是的……我没有……”

“没有？”铃音笑了，那个笑容扭曲得可怕，“那这是什么？”

她用力扯开悠真的衬衫，更多的扣子崩开，露出里面的白T恤。然后，她的手移到悠真腰上，开始解工装裤的腰带。

“不要……铃音……不要……”悠真哭着哀求。

但铃音没有理会。她解开腰带，拉开拉链，然后，用力把工装裤往下褪。

当工装裤褪到大腿中部时，里面的JK裙和吊带丝袜露了出来。

铃音的动作停住了。

她盯着那条裙子，盯着那双丝袜，盯着吊带在悠真大腿根部勒出的痕迹。她的眼神从愤怒，变成了某种更深沉的、令人恐惧的东西。

“哥哥，”铃音说，声音轻得像耳语，“你今天……穿成这样去学校？”

悠真点头，不敢说话。

“穿成这样，”铃音的手指勾住丝袜的吊带，轻轻拉扯，“给那个早川看？”

悠真摇头，但动作微弱得几乎没有说服力。

铃音笑了。她松开吊带，手往上移，停在悠真胸口，隔着T恤按在那两处凸起上。

“这里，”她说，手指开始揉捏，“也被她碰了，对吗？”

悠真浑身颤抖，点头。

“这里呢？”铃音的手往下滑，停在悠真小腹上，“也被她碰了？”

悠真点头。

“这里呢？”手继续往下，隔着裙子和丝袜，按在那个湿漉漉的部位，“也被她碰了？被她弄湿了？被她……弄高潮了？”

悠真哭得说不出话，只能点头。

铃音盯着她看了很久，然后，突然松开了手。

她后退一步，开始脱自己的睡衣。

当铃音完全赤裸地站在悠真面前时，悠真倒吸了一口冷气。

铃音的男性器官比昨天看起来更可怕。完全勃起的状态下，尺寸惊人得吓人，颜色深红发紫，顶端不断渗出透明的液体，在空气中拉出细细的银丝。而下面，那个女性部位也湿透了，阴唇微微张开，露出底下湿润的嫩肉，也在不断渗出液体。

但最引人注目的，是铃音整个人的状态——她的眼睛红得像要滴血，呼吸急促得像是下一秒就要窒息，全身的肌肉都紧绷着，皮肤泛着不正常的红晕，汗水从额头、胸口、后背不断渗出。

“哥哥，”铃音说，声音沙哑得几乎听不清，“你知道我今天，是怎么过的吗？”

悠真摇头，眼泪不停流。

“我闻着哥哥内裤上的味道，”铃音走近，抓住悠真的手，强迫她握住那根滚烫的性器，“想着哥哥在学校，穿着裙子，穿着丝袜，被那个早川碰，被那个早川弄湿……我就受不了。”

悠真的手被强迫着上下滑动。她能感觉到那根性器上的脉搏跳动，能感觉到顶端渗出的粘稠液体，能感觉到……铃音的欲望有多么强烈，多么疯狂。

“我一边想着这些，”铃音继续说，另一只手抓住悠真的头发，强迫她抬起头，“一边自慰。可是不够……完全不够……”

她松开悠真的头发，转而抓住她的腰，把她转过去，让她趴在床上。

“所以，”铃音说，声音很轻，但每个字都像冰锥一样刺进悠真心里，“我要惩罚哥哥。狠狠地惩罚。”

悠真趴在床上，脸埋在枕头里。她能感觉到铃音的手分开她的臀瓣，能感觉到那个巨大的龟头抵在她阴道口——但这次，铃音没有立刻进入。

“哥哥，”铃音说，龟头在那个湿漉漉的入口处轻轻摩擦，“今天被那个早川弄高潮了几次？”

悠真颤抖着回答：“两……两次……”

“两次。”铃音重复，声音里带着某种计算的味道，“那今天……我要让哥哥高潮十次。”

悠真愣住了：“十……十次？”

“对。”铃音说，龟头用力顶开那个紧窄的入口，开始缓慢进入，“每一次，都要比上一次更用力。每一次，都要让哥哥记住——是谁在操你，是谁在占有你，是谁……让你变成这样的。”

悠真尖叫起来。铃音的进入比昨天更粗暴，更用力。她能感觉到自己被一点点撑开到极限，感觉到内壁被摩擦到几乎疼痛，感觉到子宫口被重重撞击。

当铃音整根没入时，悠真已经哭不出声音了。她张着嘴，发出无声的尖叫，身体因为疼痛和过度刺激而剧烈颤抖。

铃音俯身，趴在她背上，脸埋在她颈窝。

“哥哥这里……”她低声说，声音带着压抑的兴奋和愤怒，“今天被那个早川碰过了。我要……覆盖掉她的味道。全部覆盖掉。”

她开始动。

一开始就很用力。每一次抽出都几乎完全退出，每一次进入都又深又重，像要把悠真钉在床上。肉体撞击的声音在房间里回响，混合着水声和悠真的哭喊。

“啪！啪！啪！”

“啊！啊！铃音……不要了……真的不要了……”

铃音没有理会。她抓住悠真的腰，把她往后拉，让自己进得更深。这个姿势让悠真完全暴露，她能清楚地看到两人交合的部位——看到自己的小穴被撑开到极限，看到铃音的性器在里面进出，带出大量透明的液体。那些液体浸湿了丝袜，让黑色的材质变得深一块浅一块，紧紧贴在皮肤上，勾勒出腿部的每一寸轮廓。

“哥哥看到了吗？”铃音在她耳边喘息，动作越来越快，“看到我是怎么操你的吗？看到你是怎么被我操到流水的吗？看到你的丝袜……是怎么被我弄湿的吗？”

悠真点头，眼泪模糊了视线。她能看到，能感觉到，能闻到——一切都是那么强烈，那么真实，那么……让人无法承受。

铃音的动作突然停住。

悠真发出哀鸣——快感骤然中断的痛苦比持续的快感更折磨人。

“第一次。”铃音说，声音冷静得可怕，“哥哥，高潮。”

她开始快速抽插，频率快到几乎看不清。几十下后，悠真达到了第一次高潮。

液体喷涌而出，浸湿了更多丝袜和床单。子宫剧烈收缩，阴道痉挛般收紧。

但铃音没有停。她继续操，继续用力，继续深入。

“第二次。”她说。

又是一轮快速的、用力的抽插。悠真达到了第二次高潮。这次比第一次更强烈，液体量更多。

“第三次。”

“第四次。”

“第五次。”

每一次，铃音都会报数。每一次，悠真都会高潮。但每一次高潮后，铃音都不会停，而是继续操，继续用力，继续深入，直到下一次高潮来临。

当数到第八次时，悠真已经意识模糊了。她像一具失去灵魂的玩偶，任由铃音摆布。身体已经完全湿透——汗水，泪水，还有源源不断的爱液。丝袜从大腿到脚踝全湿了，黑色半透明的材质因为浸湿而变得几乎透明，紧紧贴在皮肤上，勾勒出每一寸肌肤的轮廓。吊带勒进肉里，留下红色的痕迹。

裙子也湿透了，皱巴巴地堆在腰间。工装裤早就被踢到床下。

而铃音还在继续。

“第九次。”她说，动作已经慢了下来，但每一次进入依然又深又重。

悠真达到了第九次高潮。这次几乎没有液体喷出——身体已经快被榨干了。但快感依然强烈，强烈到几乎带着痛楚。

铃音终于停下来。她退出，把悠真翻过来，让她仰面躺着。

悠真眼神涣散，嘴唇微张，小口喘气。她的身体还在微微抽搐，阴道还在不受控制地收缩，一股股稀薄的液体缓缓流出。

铃音跪在她腿间，盯着那个被操到红肿、还在微微张开的小穴看了很久。

然后，她俯身，脸凑近。

“哥哥这里，”她低声说，“终于……全是我的味道了。”

她伸出舌头，舔了上去。

不是温柔的舔舐，而是缓慢的、仔细的舔舐。舌头扫过阴唇，刮过阴蒂，最后抵进阴道口，在里面仔细地舔，像在品尝，像在确认。

悠真发出细微的呻吟，身体轻轻颤抖。

铃音舔了很久，直到确认每一个角落都染上了自己的气味，才抬起头。

然后，她重新进入。

最后一次。

“第十次。”铃音说，动作很慢，但每一次都进到最深。

悠真达到了第十次高潮。

这一次，什么也没有喷出。身体已经彻底空了。但快感依然存在——那是一种从骨髓里渗出的、深入灵魂的快感。她感觉自己像漂浮在虚空中，意识模糊，只有无边的、温暖的、让人想要沉溺的快感。

铃音趴在她身上，同样在剧烈喘息。她的性器还在悠真体内，顶端渗出白浊的精液——那是她刚才射出的。

许久，铃音才退出，躺到悠真身边。

房间里弥漫着浓郁的体液气味，混合着汗水、精液、爱液和某种更私密的味道。床单完全湿透了，冰凉地贴着皮肤。丝袜黏在腿上，裙子皱成一团。

两人都没有说话，只是喘息。

许久，铃音翻过身，把悠真抱进怀里。

“哥哥，”她小声说，声音里带着哭腔，“对不起……我又失控了……”

悠真摇头，脸埋在她胸口：“不……是我的错……我不该……”

“哥哥，”铃音捧起她的脸，直视着她的眼睛，“你爱我吗？”

“爱。”悠真毫不犹豫地回答，“最爱铃音了。”

“那……为什么还要让那个早川碰你？”

悠真沉默了。许久，她才小声说：“因为……早川同学接受我。接受这样的我。”

“什么样的你？”

“淫荡的……管不住自己的……这样的我。”悠真哭着说，“铃音，你知道吗？我今天……只是因为早川同学碰了我几下，说了几句话，就高潮了两次。这样的我……很恶心吧？”

铃音盯着她看了很久。然后，她笑了，那个笑容很疲惫，但很真实。

“不恶心。”铃音说，吻了吻悠真的额头，“哥哥这样……很可爱。”

“可爱？”

“嗯。”铃音的手轻轻抚过悠真的身体，“哥哥的身体很敏感，很诚实，很……诱人。这让我很生气，但也很喜欢。”

她顿了顿，继续说：“但是哥哥，答应我，以后不要再让别人碰你了。好吗？你的敏感，你的淫荡，你的高潮……都只给我一个人。好吗？”

悠真看着铃音，看着那双红红的眼睛里此刻盛满的恳求，心里涌起复杂的情绪。

她想起了早川。想起了早川的温柔，早川的包容，早川的接受。

但她也想起了铃音。想起了铃音的占有欲，铃音的偏执，铃音的……爱。

最后，她点头。

“好。”她说，“只给铃音。”

铃音满意了。她抱紧悠真，脸埋在她颈窝。

“哥哥，”她小声说，“我……我真的不能没有你。如果你离开了，我会死的。真的会死的。”

悠真心疼极了。她回抱住铃音，轻轻拍着妹妹的背：“我不会离开的。永远不会。”

“真的吗？”

“真的。”

两人就这样相拥着，在潮湿凌乱的床上，慢慢睡着了。

悠真又做了一个梦。

梦里，她站在一片黑色的丝袜海洋里。丝袜像藤蔓一样缠绕着她，从脚踝到大腿，从腰间到胸口，越缠越紧，直到无法呼吸。

她挣扎，但越挣扎缠得越紧。

突然，她听到有人叫她。

“悠真。”

她转头，看到早川理纱站在丝袜海洋边缘，朝她伸出手。

“悠真，过来。”早川说，脸上带着温柔的笑容。

悠真想过去，但丝袜缠得太紧，她动不了。

而这时，铃音从丝袜中钻出来，抱住她。

“哥哥，”铃音说，脸上带着泪痕，“不要走。留在我身边。”

悠真看着早川，又看着铃音，再次陷入了两难。

而这次，丝袜缠得更紧了，紧到她眼前发黑，几乎窒息。

她醒来时，天已经亮了。

铃音还在睡，手还紧紧抱着她。悠真轻轻挪开妹妹的手，下床，走到窗边。

窗外，晨光熹微，新的一天又开始了。

她看着窗外，心里涌起复杂的情绪。

答应了铃音，以后只给她一个人。

但早川呢？那个温柔地接受了她一切的早川呢？

她不知道。

她只知道，自己被困住了。被困在铃音的爱里，被困在这个新生的身体里，被困在无休止的欲望里。

而这一切，才刚刚开始。

她回到床上，抱住还在睡的铃音。

“对不起，”她小声说，也不知道是在对谁说，“对不起。”

然后，她闭上眼睛，强迫自己睡去。

明天，又是新的一天。

明天，她还要继续伪装，继续隐藏，继续在两个人之间摇摆。

但她知道，无论怎么摇摆，最终都会回到铃音身边。

因为铃音是她的一切。

是她的妹妹，是她的爱人，是她的……牢笼。

而这个牢笼，她甘愿被困在其中`,Ic=Object.freeze(Object.defineProperty({__proto__:null,default:wc},Symbol.toStringTag,{value:"Module"})),Mc=`---
order: 11
---

# #11 同桌的指尖与白丝的秘密

周一的晨光透过教室窗户，在课桌上切出斜斜的光斑。粉笔灰在光线里缓慢漂浮，像某种不真切的梦。

悠真坐在靠窗的倒数第二排，手指无意识地抠着课本边缘。她能感觉到周围投来的视线——好奇的，探究的，或许还有些别的什么。性转后的第三周，她仍然没有习惯这种被注视的感觉。

尤其是今天。

因为今天，座位换了。

班主任站在讲台上，念着新的座位表。当念到“早川理纱”和“樱井悠真”并排坐时，悠真感觉自己的心脏停跳了一拍。

她转过头，看向教室门口。

早川理纱正走进来。她今天穿着标准的校服——白衬衫，深蓝色西装外套，同色系的格子裙。但不知为何，这套普通的校服穿在她身上，总有种说不出的……妥帖感。衬衫最上面的两颗扣子松着，露出精致的锁骨。裙子长度在膝盖上方两寸，黑色小腿袜包裹着笔直的小腿。

早川的目光在教室里扫了一圈，然后，准确无误地落在了悠真身上。

她笑了。不是平时那种温柔含蓄的笑，而是更明亮，更……具有某种指向性的笑。

悠真慌忙低下头，假装整理课本。她能感觉到早川的脚步声越来越近，能感觉到那股熟悉的、带着淡淡洗衣液香味的体温靠近。

然后，早川在她旁边的座位坐下了。

“早上好，悠真。”早川的声音很轻，但清晰地传进悠真耳朵里。

“早……早上好。”悠真用假声回应，声音因为紧张而有些发颤。

早川似乎很满意她的反应。她放下书包，开始不紧不慢地整理文具——铅笔盒，笔记本，教科书。每一个动作都很优雅，但悠真能感觉到，早川的注意力完全在自己身上。

那种感觉很奇怪。像被某种温和的捕食者盯上了。

上课铃响了。

第一节课是国语。老师是个头发花白的老先生，讲课声音平缓得像催眠曲。大部分同学都昏昏欲睡，但悠真完全睡不着。

因为早川的手，不知何时，已经放在了她的腿上。

不是明目张胆的，而是很隐蔽的。早川的右手肘支在桌上，手掌自然垂下，刚好落在悠真大腿的位置。隔着工装裤粗糙的布料，悠真能感觉到那只手的温度，还有指尖若有若无的按压。

她僵住了。身体像被施了定身咒，一动不敢动。

早川却仿佛什么都没发生。她左手托腮，认真地看着黑板，偶尔还在笔记本上记点什么。侧脸在晨光里显得格外沉静，像个标准的好学生。

只有那只右手，在无人注意的角落，开始了缓慢的动作。

指尖先是轻轻点了点悠真的大腿，像在试探。然后，开始画圈。很小的圈，隔着布料，几乎感觉不到。但悠真感觉到了——那个圆圈的中心，正好是她大腿内侧最敏感的位置。

“唔……”

细微的呻吟差点溢出来，悠真赶紧咬住嘴唇。她看向早川，用眼神恳求——别在这里。

早川转过头，对她笑了笑。那个笑容很温柔，但眼睛里有某种不容拒绝的东西。

她的手指继续移动。从画圈变成了上下滑动，顺着大腿的线条，从膝盖上方一直滑到大腿根部，再滑回来。每一次滑到大腿根部时，指尖都会稍稍用力，按压那个最敏感的区域。

悠真浑身都在颤抖。她并紧双腿，想要阻止那只手，但这个动作反而让早川的手指陷得更深。

早川似乎察觉到了她的挣扎。她凑近一些，嘴唇几乎贴到悠真的耳朵，用只有两人能听到的声音说：

“放松点，悠真。会被发现的。”

热气喷在耳廓上，带来一阵战栗。悠真咬住嘴唇，强迫自己放松。但她能感觉到，自己的身体已经先一步做出了反应——工装裤下的内裤开始变湿，丝袜包裹的大腿渗出细密的汗珠。

早川的手指还在继续。她似乎找到了某种节奏——上滑，按压，下滑，再上滑。每一次按压，都精准地落在最敏感的位置。

悠真感觉自己快要疯了。她能感觉到早川的指尖隔着布料传来的温度，能感觉到那种若有若无的摩擦带来的快感，能感觉到……身体里那股汹涌的欲望正在被一点点撩拨起来。

她想逃。但身体却像被钉在座位上，动弹不得。不，不是动弹不得，而是……不想动。

内心深处，某个黑暗的角落，她其实在享受。享受这种在公开场合被隐秘触碰的快感，享受这种随时可能被发现的刺激，享受早川那种温柔的、却又不容拒绝的掌控。

早川似乎看穿了她的心思。手指的动作开始变得更加大胆。

她不再满足于上下滑动，而是开始画更复杂的图案——螺旋形，之字形，甚至写起了字。悠真努力分辨，终于意识到早川在写什么——

“湿”“了”“吗”。

三个字，一遍又一遍，写在她大腿上。

悠真的脸烧得通红。她想摇头，但身体已经给出了诚实的答案——她能感觉到内裤已经湿透，黏腻的液体甚至渗透了丝袜，在工装裤内侧留下小小的湿痕。

早川的手指停了停，然后，轻轻按在那个湿痕的位置。

隔着层层布料，她按了按。

悠真浑身剧烈一颤，差点叫出声。她死死咬住嘴唇，手指抓住桌沿，指节泛白。

早川的手指开始在那个湿痕的位置画圈。很小的圈，但很用力。透过湿透的布料，悠真能清楚地感觉到指尖的触感，那种摩擦带来的快感几乎要让她崩溃。

“啊……”细微的呻吟终于还是漏了出来。

前座的同学回过头，疑惑地看了她一眼。

悠真赶紧低下头，假装咳嗽：“抱歉……嗓子有点不舒服。”

同学转回去了。悠真松了口气，但心脏还在狂跳。

而早川，不仅没有收敛，反而变本加厉。

她的手指移到了悠真大腿根部更内侧的位置——那里，离那个最敏感的部位只有几层布料的距离。然后，她开始轻轻按压，用指尖模仿某种韵律性的动作。

一下，两下，三下。

每一下都正好按在阴蒂对应的位置。

悠真感觉自己快要死了。快感像潮水一样涌上来，一波比一波强烈。她能感觉到子宫在收缩，阴道在痉挛，阴蒂跳动得像要爆炸。但比这些更强烈的，是那种在公开场合被玩弄到边缘的羞耻和刺激。

她看向早川，用眼神哀求——停下，求你了。

早川看着她，眼神温柔，但手指没有停。她凑近，在悠真耳边轻声说：

“悠真，想高潮吗？”

悠真摇头，眼泪涌了上来。

“可是你的身体说想。”早川的手指加大了力度，“这里，已经湿透了。隔着这么多层衣服，我都能感觉到。”

悠真咬住嘴唇，不敢说话。

“在课堂上高潮，”早川的声音带着某种诱惑，“很刺激吧？所有人都不知道，只有我知道。只有我知道悠真在老师的讲课声里，被我弄到潮吹。”

这句话像最后的催化剂。悠真的防线彻底崩溃。

她能感觉到高潮正在逼近，那种熟悉的感觉从子宫深处涌上来，蔓延到四肢百骸。她想忍，但早川的手指还在继续，还在按压，还在撩拨。

“早川……同学……”她哭着说，声音细若蚊蚋。

“嗯？”早川应了一声，手指的动作突然加快。

就是这一下。

悠真达到了高潮。

不是剧烈的那种，而是压抑的、克制的，但依然强烈的高潮。她能感觉到一股热流涌出，彻底浸湿了内裤、丝袜、工装裤。液体量不算多，但足够让她羞耻到想死。

而早川，在她高潮的瞬间，手指突然停止了动作。她把手收回来，重新放回自己腿上，仿佛什么都没有发生。

悠真趴在桌上，小口喘气，眼泪无声地流。她能感觉到身下的湿意，能感觉到高潮后的空虚，能感觉到……早川的视线。

她转过头，看向早川。

早川正看着她，眼睛里有一种满足的、近乎温柔的光芒。她伸出手，在桌下轻轻握了握悠真的手。

“第一次。”早川用口型说。

悠真愣了一秒，然后明白了——这是在计数。就像铃音做的那样。

这个认知让她更加羞耻，但也更加兴奋。

下课铃响了。

同学们陆陆续续离开教室，去上体育课。悠真坐在座位上，没有动——她站不起来。工装裤湿了一小块，虽然不明显，但她不敢冒险。

“不去吗？”早川问，声音很平静。

悠真摇头：“我……不太舒服。”

“那正好。”早川站起身，走到她面前，“我也请假了。我们换个地方？”

“什么……地方？”

早川没有回答，只是伸出手：“跟我来。”

悠真犹豫了一下，还是把手放在了早川手里。早川握住，拉她站起来。这个动作让她腿软了一下，早川及时扶住了她。

两人走出教室，穿过空无一人的走廊。早川拉着她，走进了一间空教室——是音乐教室，平时很少人用。

关上门，拉上窗帘，教室里变得昏暗。只有一架旧钢琴和几排椅子。

“这里……”悠真小声说，心跳又开始加速。

“这里很安全。”早川说，转身面对她，“体育课期间，不会有人来的。”

她走近，手放在悠真腰上：“现在，让我看看。”

“看……什么？”

“看你今天的样子。”早川的手指开始解悠真校服外套的扣子，“上半身是校服，下半身是工装裤。但我知道，里面一定藏着什么，对吗？”

悠真脸红了。她想阻止，但早川的动作很温柔，也很坚定。

校服外套被脱下，挂在椅背上。然后是衬衫——早川一颗一颗解开扣子，动作慢得像在拆礼物。当衬衫完全敞开时，里面的白色背心露了出来。

早川盯着那件背心看了几秒，然后伸出手，隔着背心按在悠真胸口。

“这里，”她说，手指轻轻揉捏那两处凸起，“刚才在课堂上，也硬了吧？”

悠真点头，很小的幅度。

早川笑了。她收回手，蹲下来，视线和悠真的下半身齐平。

“现在，”她说，手放在工装裤的腰带上，“让我看看下面。”

悠真浑身僵硬。她知道早川要做什么——要脱掉她的工装裤，要看到里面的裙子，看到里面的丝袜。

她想拒绝，但身体里的欲望让她开不了口。

早川解开腰带，拉开拉链，然后，慢慢将工装裤往下褪。

布料摩擦过皮肤，发出细微的沙沙声。当工装裤褪到大腿中部时，里面的jk裙露了出来——是深蓝色的百褶裙，裙摆刚好到大腿中部。

早川的动作停住了。她盯着那条裙子，眼睛里有某种光芒在闪烁。

“裙子……”她低声说，手指轻轻抚过裙摆，“果然。”

她继续往下褪工装裤，直到完全褪到脚踝。现在，悠真下半身完全暴露在早川面前——深蓝色jk裙，还有……

“白丝？”早川的声音里带着惊讶。

悠真低头看去——是的，她今天穿的是白色过膝袜，袜口有精致的蕾丝边。袜子在膝盖上方两寸的位置，和裙子下摆之间露出一截白皙的大腿。

“白色的……”早川蹲下来，手指轻轻碰了碰丝袜的袜口，“很适合悠真。”

悠真脸红了。她能感觉到早川的指尖划过皮肤的感觉，那种触感让她浑身发麻。

早川的手指顺着丝袜往上滑，划过悠真的小腿，膝盖，大腿。当滑到大腿中部时，她停住了。

那里，丝袜已经被浸湿了一小块。白色的材质因为湿透而变得半透明，紧紧贴在皮肤上，勾勒出肌肤的轮廓。湿痕的中心，正好是那个最敏感的位置。

“这里，”早川的手指按在那个湿痕上，“刚才弄湿的？”

悠真点头，不敢看早川的眼睛。

早川的手指开始在那个湿痕上画圈。透过湿透的丝袜，悠真能清楚地感觉到指尖的触感，那种摩擦带来的快感让她腿软。

“早川同学……”她哭着说，“别……”

“别什么？”早川抬起头，看向她，“别碰？可是悠真这里，明明很想要。”

她站起身，重新和悠真面对面。然后，她伸出手，环住悠真的腰。

“现在，”早川说，把悠真抱进怀里，“让我好好抱抱你。”

这次的拥抱和之前都不同。早川的手臂紧紧环住悠真的腰，两人的身体完全贴在一起。悠真能感觉到早川的胸部贴着自己的胸口，能感觉到早川的呼吸喷在颈窝，能感觉到……自己身体的反应又开始苏醒。

“悠真，”早川在她耳边低声说，“你今天很漂亮。”

悠真没有说话，只是把脸埋在她肩头。

早川的手开始移动。一只手留在悠真腰上，另一只手滑到她背后，轻轻往下按，让两人的下腹部也贴在一起。

这个姿势让悠真的裙子被撩起了一些，丝袜包裹的大腿直接贴在了早川的校服裙上。她能感觉到早川大腿的温度，能感觉到那种摩擦带来的快感。

“早川同学……”她小声说。

“嗯？”早川应了一声，开始轻轻摇晃身体。

不是大幅度的动作，只是细微的、缓慢的左右晃动。但这个动作让两人的下体隔着布料摩擦，带来一阵阵电流般的快感。

悠真咬住嘴唇，强迫自己不发出声音。但早川显然不打算放过她。

“悠真，”早川的手移到她臀部，轻轻按压，“刚才在课堂上，高潮的时候……是什么感觉？”

悠真脸红了：“别……别问……”

“告诉我。”早川的声音带着某种蛊惑，“我想知道。”

悠真犹豫了很久，才小声说：“很……羞耻。但也很……舒服。”

“还有呢？”

“怕被人发现……但越怕，越……兴奋。”

早川笑了。她凑近，嘴唇贴近悠真的耳朵：“那现在呢？现在只有我们两个人，悠真还会兴奋吗？”

悠真点头。她当然会。从早川抱住她的那一刻起，她的身体就已经给出了诚实的反应。

早川显然感觉到了。她的手往下滑，停在悠真大腿内侧，隔着丝袜轻轻摩挲。

“这里，”她的手指找到那个湿痕的位置，“已经又湿了。”

悠真没有否认。她确实湿了。从早川脱掉她工装裤的那一刻起，她就在不断渗出液体。

早川的手指开始在那个位置画圈。这次不再是隔着布料，而是直接隔着丝袜，触感更加清晰。悠真能感觉到指尖的温度，能感觉到按压的力度，能感觉到……快感像潮水一样涌上来。

“啊……”她发出一声细碎的呻吟。

早川的动作没有停。她继续画圈，同时另一只手移到悠真胸前，隔着背心揉捏那两处凸起。

双重刺激下，悠真很快就再次被推到了高潮边缘。

“早川同学……我要……要去了……”她哭着说。

“去吧。”早川说，手指加快了速度。

悠真达到了第二次高潮。

这次比课堂那次更强烈。也许是环境更私密，也许是早川的动作更直接。液体大量涌出，彻底浸湿了丝袜，白色的材质因为湿透而几乎变得透明，紧紧贴在大腿上，勾勒出每一寸肌肤的轮廓。

悠真瘫软在早川怀里，小口喘气。早川抱着她，轻轻拍着她的背。

许久，悠真稍微恢复了一些力气。她抬起头，看向早川。

早川正看着她，眼睛里有一种复杂的情绪——温柔，占有，还有某种更深的东西。

“悠真，”早川说，手指轻轻抚过她的脸颊，“你喜欢这样吗？”

悠真沉默了几秒，然后点头。

“喜欢被我碰？喜欢被我弄到高潮？”

悠真脸红了，但还是点头。

“那……”早川凑近，嘴唇几乎贴到她的嘴唇，“喜欢我吗？”

悠真愣住了。她看着早川，看着那双温柔的眼睛里此刻盛满的期待，心里涌起复杂的情绪。

她想起了铃音。想起了昨天铃音说的话——“哥哥，答应我，以后不要再让别人碰你了。”

她答应了。

但现在，她又在这里，被早川抱着，被早川玩弄，被早川弄到高潮。

她在做什么？她在背叛铃音吗？

但身体却诚实得可怕。即使心里充满愧疚，身体依然在渴求早川的触碰，早川的温度，早川的……一切。

“我……”悠真开口，声音破碎。

早川似乎看穿了她的挣扎。她没有追问，只是笑了笑，那个笑容有些勉强。

“没关系。”早川说，退后一步，拉开了距离。

悠真突然感到一阵空虚。那种被抱着的温暖消失了，取而代之的是一种冰冷的失落。

她看着早川，看着早川转身去拿她的工装裤，看着早川蹲下来，帮她穿裤子。

这个动作很温柔，但也很有距离感。

“早川同学……”悠真小声叫住她。

早川抬起头，看向她。

“我……”悠真咬了咬嘴唇，“我喜欢你。”

这句话说出来的瞬间，她自己也愣住了。她没想到自己会说出口，但话已经说出去了，收不回来。

早川的眼睛亮了。她站起身，重新走到悠真面前。

“真的？”她问，声音很轻。

悠真点头。这是真话。她喜欢早川。喜欢早川的温柔，喜欢早川的包容，喜欢早川接受这样的她。

但同时，她也喜欢铃音。喜欢铃音的占有欲，喜欢铃音的偏执，喜欢铃音的……爱。

她同时喜欢两个人。

这个认知让她感到羞耻，但也让她感到某种解脱。

早川看着她，看了很久。然后，她笑了，那个笑容很温暖，很明亮。

“我也喜欢悠真。”早川说，重新抱住她，“很喜欢很喜欢。”

悠真回抱住早川，把脸埋在她肩头。眼泪又流了出来，但这次，不是因为痛苦或羞耻，而是因为某种复杂的、难以言说的情绪。

两人就这样抱着，在空无一人的音乐教室里，抱了很久。

直到下课铃隐约传来，早川才松开手。

“该回去了。”她说，帮悠真整理好衣服，“体育课快结束了。”

悠真点头。她看着早川，看着早川温柔地帮她系好衬衫扣子，帮她穿好校服外套，帮她整理好头发。

每一个动作都很细致，很温柔。

全部整理好后，早川后退一步，上下打量着悠真。

“好了。”她说，“现在看起来，就像个普通的好学生。”

悠真低头看了看自己——校服整齐，工装裤拉链拉好，除了丝袜还有些湿，其他都看不出异常。

“谢谢你。”她小声说。

早川笑了。她凑近，在悠真嘴唇上亲了一下——这次不是羽毛般的轻吻，而是一个真正的、温柔的吻。

悠真愣住了。她能感觉到早川嘴唇的柔软，能感觉到早川的呼吸，能感觉到……自己的心跳。

许久，早川才松开她。

“这是今天的第二个报酬。”早川说，眼睛里有某种光芒在闪烁，“明天，我还会要更多。”

说完，她转身，先一步离开了教室。

悠真站在原地，手指抚上嘴唇，那里还残留着早川的温度。她能闻到自己身上早川的气味，能感觉到身体里还在流淌的快感余韵，能感觉到……那种空虚感又回来了。

但同时，她也感觉到一种奇异的满足。

被需要的满足。被喜欢的满足。被……爱的满足。

即使这份爱来自两个人。

即使这份爱注定会带来痛苦。

她还是想要。

她整理好情绪，深呼吸，走出了教室。

走廊里已经能听到同学们回教室的喧闹声。悠真加快脚步，回到了自己的座位。

刚坐下，早川也回来了。两人对视一眼，早川对她笑了笑，那个笑容很平常，仿佛刚才在音乐教室里的一切都没有发生。

但悠真知道，有什么东西已经改变了。

从今天起，早川不再是被动的接受者。

她是主动的。

她是掌控的。

而悠真，心甘情愿地被掌控。

放学铃响时，悠真收拾好书包，准备离开。

早川拉住了她的手。

“悠真，”早川说，声音很轻，“明天见。”

悠真点头：“明天见。”

早川笑了。她松开手，转身离开了教室。

悠真站在原地，看着早川的背影消失在走廊尽头，许久没有动。

她能感觉到，自己正站在某个十字路口。

左边是铃音，右边是早川。

而她，哪个方向都想去。

最终，她选择了回家的方向。

因为铃音在等她。

因为铃音说，如果她离开，会死的。

她不能让铃音死。

所以她只能让自己，被困在两个人的爱里。

慢慢窒息。`,Dc=Object.freeze(Object.defineProperty({__proto__:null,default:Mc},Symbol.toStringTag,{value:"Module"})),Ec=`---
order: 12
---

# #12 口红印与不道歉的占有

玄关的灯昏黄如旧日，悠真脱下马丁靴时，足踝处的白丝袜口已经滑落到脚背，露出一小截被靴筒压出的红痕。她低头看着那道痕迹，恍惚间想起早川在音乐教室里蹲下身时，指尖触碰袜边的温度。那个吻——轻柔的、带着薄荷糖气息的吻——似乎还留在唇上。

“我回来了。”她对着空荡的走廊轻声说，声音里有一丝未褪尽的微颤。

客厅没有开灯，只有二楼卧室门下漏出的一线光。悠真放下书包，手指无意识地抚过衬衫领口——那里，早川的唇印应该已经擦掉了。在离开音乐教室前，她特意去洗手间检查过，用湿纸巾反复擦拭，直到皮肤发红。

可为什么心里还是这么慌？

她走上楼梯，木阶发出轻微的吱呀声。每上一级，心跳就快一分。像是走向审判台，又像是走向救赎地。矛盾的引力拉扯着她，一边是早川留在唇上的温柔，一边是铃音刻在骨子里的占有。

卧室门虚掩着。

悠真推开门，看见铃音背对门口坐在床边。妹妹穿着那件洗得发白的旧睡衣，头发散在肩头，手里拿着什么东西，正低头看着。

“铃音？”悠真唤了一声。

铃音没有回头，也没有应答。房间里异常安静，只有窗外风吹过树叶的沙沙声。

悠真走近，这才看清铃音手里拿着的，是她今天早上换下的那条白丝袜——本该在书包最底层的塑料袋里。袜子已经被展开，大腿根部那一块深色的、半干涸的湿痕在白色织物上格外刺眼。

悠真僵在原地。

铃音慢慢转过身。她的脸上没有任何表情，没有愤怒，没有悲伤，甚至没有质问。那是一种彻底的空洞，空洞得让人害怕。

“哥哥，”铃音开口，声音平稳得像一潭死水，“今天在学校，开心吗？”

悠真想说话，喉咙却像被扼住，发不出声音。

铃音站起身，走近。她的目光像手术刀一样缓慢地扫过悠真的全身——从微微汗湿的额发，到红得不自然的嘴唇，到衬衫领口，再到工装裤。

然后，铃音的视线定格在了悠真右肩的位置。

那里，衬衫白色的布料上，有一个淡淡的、几乎看不见的粉色痕迹。如果不是在特定光线下特定角度，根本不会有人注意。

但铃音注意到了。

因为那是她每天都会看的、熟悉到骨子里的哥哥的身体。

“这是什么？”铃音伸手，指尖轻轻触碰到那个痕迹。

悠真低头看去，心脏骤然停跳。

口红印。

早川在音乐教室抱住她时，脸贴在她肩上，唇上的口红蹭到了衬衫上。她明明检查过，明明以为擦干净了——

“我……”悠真张了张嘴，却发不出完整的音节。

铃音的指尖在那个痕迹上反复摩挲，动作很轻，轻得像在抚摸易碎的瓷器。但悠真能感觉到，那只手在颤抖。

“哥哥，”铃音的声音依然平稳，但仔细听，能听出底下汹涌的暗流，“你知道吗？我小时候，最喜欢看你穿白衬衫。”

悠真愣住，不明白话题为什么突然跳转。

“那时候你还没长高，衬衫总是松松垮垮的，下摆垂到大腿。”铃音继续说，手指从那个口红印上移开，开始解悠真衬衫的扣子，“每次你穿白衬衫，我都会偷偷看你。因为白色最干净，最像哥哥。干净的，纯粹的，只属于我的哥哥。”

一颗，两颗，三颗。

扣子被解开，衬衫向两边敞开，露出里面的白色背心。背心被汗水浸湿了一小块，贴在胸口，勾勒出那对小巧乳房的轮廓。

铃音盯着那处，眼神暗了暗。

“可是现在，”她的手按在悠真胸口，隔着背心，能感觉到下面急促的心跳，“哥哥这里，装着别人了，对吗？”

“不是的……”悠真终于找回了声音，眼泪涌了上来，“铃音，不是你想的那样……”

“那是哪样？”铃音问，手突然用力，抓住悠真的肩膀，“这个口红印，是哪个‘同学’不小心蹭到的吗？这条丝袜上的水，是哪个‘同学’不小心打翻的饮料吗？”

她每问一句，手上的力道就加重一分。悠真被捏得生疼，却不敢挣扎。

“哥哥，”铃音凑近，额头抵着悠真的额头，呼吸喷在她脸上，“你答应过我的。你说过，只给我一个人碰，只给我一个人看，只给我一个人……”

她的声音开始颤抖，那种强装的平静正在碎裂。

“可是哥哥骗我。”铃音说，眼泪从她眼角滑落，但她的表情依然冷静得可怕，“哥哥一次又一次骗我。”

“对不起……”悠真哭着说，“铃音，对不起……”

“不要道歉。”铃音打断她，手指移到悠真嘴唇上，用力按压，“哥哥的道歉，我已经听腻了。每次道歉，每次都说不会再犯，可是下次呢？下次还是会被别的女人碰，还是会在别人怀里高潮，还是会让别人在你身上留下痕迹。”

她收回手，后退一步，开始脱自己的睡衣。

动作很慢，很平静，但每个动作都带着一种绝望的仪式感。睡衣滑落在地，铃音赤裸地站在悠真面前。

她的身体在昏黄的灯光下泛着暖色的光泽。胸部因为兴奋而挺立，乳头硬成深红色的小点。小腹平坦，腰线纤细。再往下——

悠真倒吸一口冷气。

铃音的男性器官已经完全勃起，尺寸惊人得可怕。深红色的柱身上青筋虬结，顶端硕大的龟头不断渗出透明的液体，在空气中拉出细细的银丝。下面的女性部位也完全湿润，阴唇微微张开，露出底下粉嫩的嫩肉，同样在不断渗出爱液。

但最让悠真恐惧的，是铃音脸上的表情。

没有愤怒，没有疯狂，甚至没有欲望。

只有一种深沉的、冰冷的绝望。

“哥哥，”铃音说，走近，手按在悠真胸口，用力一推，“今天，我不会再道歉了。”

悠真被推得踉跄后退，跌倒在地板上。背撞到木质地板，发出一声闷响。疼痛让她眼前发黑，但比疼痛更强烈的，是恐惧。

铃音跪下来，跨坐在她身上。两人的脸相距不过几寸，悠真能清楚地看见妹妹眼睛里那片深不见底的黑暗。

“哥哥知道吗？”铃音的手移到悠真工装裤的腰带上，“我每次操你的时候，都在想，如果把你操坏了，你就不能去找别人了。”

“咔嚓——”

腰带被解开。

拉链被拉开。

工装裤被粗暴地褪到大腿根部，露出里面的jk裙和白丝袜。裙子因为刚才的推搡而卷到了腰间，丝袜袜口也被扯得歪斜，蕾丝边勒进大腿肉里，留下一道红痕。

铃音盯着那个部位看了很久。她的目光像实质一样扫过悠真的每一寸皮肤——湿透的白丝袜紧紧包裹着大腿，因为湿透而变得半透明，勾勒出腿部的轮廓。大腿根部，丝袜已经被爱液浸透，颜色变得更深。裙子下面，内裤的轮廓若隐若现，裆部深色的水渍清晰可见。

“湿成这样，”铃音低声说，手指隔着丝袜和内裤，按在那个湿漉漉的部位，“哥哥在回家的路上，是不是一边走，一边想着今天被那个女人碰的感觉？”

悠真摇头，眼泪不停地流：“我没有……我没有想……”

“撒谎。”铃音的手指用力按压下去。

“啊——！”悠真尖叫一声，身体弓起。

铃音的手指隔着层层布料，找到了阴蒂的位置。她开始按压，不是温柔的，而是用力的、带着惩罚意味的按压。每一下都让悠真浑身颤抖，每一下都让她涌出更多的液体。

“哥哥这里，”铃音说，另一只手也开始动作——她撕开悠真的背心，布料发出刺耳的撕裂声，“已经被别人碰过了，对吗？”

悠真胸前那对小巧的乳房暴露在空气中，乳头因为寒冷和恐惧而硬挺起来。铃音盯着看了几秒，然后低下头，张嘴含住了左边那颗。

不是吮吸，而是咬。

牙齿用力合拢，咬在乳晕周围的嫩肉上。

“疼——！铃音，疼——！”悠真哭着挣扎，但铃音的身体像铁箍一样压着她，动弹不得。

铃音松开嘴，抬起头。悠真左边乳房上留下了一圈清晰的齿痕，深红色，边缘已经有些发紫。

“疼吗？”铃音问，声音很轻，“疼就记住。记住是谁在咬你，是谁在操你，是谁在……毁掉你。”

她的手往下移，抓住悠真内裤的边缘，用力一扯。

布料撕裂的声音在安静的房间里格外刺耳。内裤被撕成两半，扔到一边。现在，悠真下半身完全暴露在铃音面前——裙子卷到腰间，白丝袜湿透，而那个最私密的部位，正不断涌出透明的液体，顺着臀缝流下，滴在地板上。

“滴答。”

轻微的水声。

铃音盯着那个部位，看了很久很久。她的眼神复杂得难以解读——有欲望，有愤怒，有痛苦，还有某种近乎毁灭的冲动。

然后，她抬起悠真的腿，把那双白丝包裹的脚踝架在自己肩上。这个姿势让悠真完全打开，最私密的地方毫无保留地暴露出来。

“哥哥，”铃音说，手扶着自己那根已经完全勃起的性器，硕大的龟头顶在悠真湿透的入口，“今天，我要让你记住一辈子。”

她腰往前送。

“唔——！！！”

悠真发出被扼住喉咙般的呻吟。铃音的进入比以往任何一次都粗暴，都用力。她能感觉到自己被强行撑开，感觉到内壁被摩擦到几乎疼痛，感觉到子宫口被重重撞击。

而当铃音整根没入时，悠真已经发不出声音了。她张着嘴，像离水的鱼一样大口喘气，眼泪模糊了视线。

铃音没有立刻开始抽插。她就那样停在最深处，俯身，脸贴近悠真。

“哥哥，”她轻声说，呼吸喷在悠真脸上，“感觉到了吗？我在你里面。”

悠真点头，很小的幅度。

“全部，”铃音的手按在悠真小腹上，那里能感觉到明显的凸起——是她性器的形状，“全部都在里面。从今天起，这里，这里，还有这里——”

她的手移到悠真胸口，按住那颗被咬出齿痕的乳房。

“——都是我的。”

说完，她开始动。

不是缓慢的、折磨人的抽插，而是从一开始就全力以赴。每一次抽出都几乎完全退出，每一次进入都用尽全力，像要把悠真钉穿在地板上。

“啪！啪！啪！”

肉体撞击的声音在房间里回响，混合着水声和悠真破碎的呻吟。地板因为撞击而微微震动，灰尘在灯光里飞舞。

悠真感觉自己快要死了。快感和痛楚交织在一起，像两股相反方向的力在撕裂她的身体。她能感觉到铃音的性器在自己体内横冲直撞，能感觉到那个巨大的龟头每一次都重重撞在子宫口上，能感觉到……自己正在被彻底占有，彻底标记，彻底变成铃音的所有物。

“啊……啊……铃音……慢点……会死的……真的会死的……”悠真哭着哀求。

“那就死吧。”铃音说，动作没有停，“死在下面，死在我手里，总比死在别的女人怀里好。”

她的另一只手移到悠真胸前，抓住那对乳房，用力揉捏。指甲陷入嫩肉，留下红色的抓痕。

“哥哥的这里，”铃音喘息着说，汗水从她额头滴落，落在悠真脸上，“也被那个女人碰过了吧？她怎么碰的？像我这样？还是更温柔？”

悠真摇头，说不出话。

“告诉我。”铃音的手指用力掐住乳头。

“啊——！她……她只是……隔着衣服……”悠真哭着回答。

“隔着衣服？”铃音笑了，那个笑容扭曲得可怕，“那哥哥就湿成这样了？真贱。”

她松开手，转而抓住悠真的头发，强迫她抬起头。

“看着我。”铃音命令。

悠真睁开被眼泪模糊的眼睛，看向铃音。

妹妹的脸上满是汗水，头发黏在额前，眼睛红得像要滴血。但最让悠真心悸的，是那双眼睛里没有任何温度。没有爱，没有温柔，只有一种冰冷的、近乎机械的占有。

“记住我现在的样子，”铃音说，腰部的动作越来越快，“记住是谁在操你，记住是谁让你变成这样，记住——”

她突然停下动作，俯身，嘴唇贴在悠真耳边。

“——你永远都是我的。”

然后，她开始了最后的冲刺。

这一次，她不再有任何保留。每一次进入都用尽全力，每一次撞击都深入子宫。肉体撞击的声音越来越密集，水声越来越响，悠真的呻吟已经变成了破碎的哭喊。

她能感觉到高潮正在逼近，那种熟悉的感觉从子宫深处涌上来。但这次，她没有抗拒，没有挣扎。她只是张开腿，承受着，迎接着，让铃音在她体内横冲直撞，让铃音把她撞碎，让铃音把她变成一滩只会高潮的肉。

“铃音……我要……要去了……”悠真哭着说。

“去吧。”铃音喘息着说，“和我一起。”

悠真达到了高潮。

这一次的高潮前所未有的强烈。液体不是一股股涌出，而是像打开了闸门一样喷射出来。大量的爱液从两人交合的部位喷溅而出，洒在地板上，洒在铃音腿上，洒在悠真自己的小腹上。

与此同时，子宫剧烈收缩，像要把铃音的性器吸进去一样紧紧箍住。阴道痉挛般收紧，每一次痉挛都带来更强烈的快感。

而在她高潮的瞬间，铃音也达到了顶点。

悠真能清楚地感觉到，那根在她体内的性器开始脉动，一股股滚烫的液体射进她子宫深处。量多得惊人，像永远不会停止一样，一波接一波，填满了她，烫伤了她，标记了她。

许久，射精才停止。

铃音瘫软在悠真身上，两人都剧烈喘息着，汗水混合在一起，分不清是谁的。

房间安静下来，只有粗重的呼吸声和窗外隐约的风声。

许久，铃音才慢慢退出。随着她的退出，大量混合着精液和爱液的液体从悠真体内涌出，顺着大腿流下，浸湿了更多白丝袜。

铃音坐起来，看着地板上的液体，看着悠真瘫软的身体，看着那些痕迹——齿痕，抓痕，吻痕，还有那个已经模糊但依然可见的口红印。

她伸手，轻轻抚过那个口红印。

然后，她笑了。

那个笑容很疲惫，但很平静。

“哥哥，”铃音开口，声音因为刚才的剧烈运动而沙哑，“明天，我和你一起去学校。”

悠真愣住，转头看向她。

铃音低头，看着悠真，眼神恢复了温度——但那种温度，是一种冰冷的、不容置疑的温度。

“我要去看看，”铃音说，手指轻轻划过悠真红肿的嘴唇，“是哪个女人，敢碰我的东西。”

悠真浑身一颤。

“睡吧。”铃音站起身，伸出手，“洗个澡，然后睡觉。”

悠真看着那只伸向自己的手，犹豫了一下，还是握住了。

铃音拉她起来，扶着她走进浴室。热水冲下来时，悠真才感觉到身体的疼痛——乳房被咬的地方火辣辣地疼，大腿内侧被丝袜勒出的红痕在热水的冲刷下刺痛，而最疼的，是那个被过度使用的部位。

但铃音的动作很温柔。她仔细地清洗悠真身上的每一处，包括那些痕迹，包括那个口红印。当热水冲过那个口红印时，淡粉色的水顺着悠真的肩膀流下，消失在排水口。

洗完澡，铃音用浴巾裹住悠真，把她抱回床上——床单已经换过了，干净的，带着阳光味道的床单。

铃音自己也洗了澡，然后上床，从后面抱住悠真。

两人的身体紧贴在一起，铃音的胸口贴着悠真的背，手臂环着她的腰。

“哥哥，”铃音在悠真耳边轻声说，“晚安。”

悠真没有回答。她闭上眼睛，感受着铃音的体温，感受着身体的疼痛，感受着子宫里还残留的、属于铃音的液体。

她想起了早川。

想起了早川温柔的吻，想起了早川在音乐教室里的拥抱，想起了早川说“我也喜欢悠真”。

然后，她想起了铃音刚才的眼神——那种冰冷的、不容置疑的占有。

她知道自己站在悬崖边缘。

而铃音，正在把她往下推。

或者说，她早就已经掉下去了。

只是现在，才感觉到坠落的风。

悠真翻过身，面对着铃音。黑暗中，她看不清妹妹的脸，只能感觉到她的呼吸。

她伸出手，轻轻摸了摸铃音的脸。

“铃音，”悠真小声说，“我不会离开你的。”

铃音沉默了几秒，然后，握住她的手，按在自己胸口。

那里，心跳平稳而有力。

“我知道。”铃音说，“因为哥哥离开的话，我会把哥哥抓回来。然后，把哥哥锁起来，关在只有我知道的地方。那样，哥哥就永远都是我的了。”

这些话如果是别人说，会是威胁，是恐吓。

但从铃音嘴里说出来，只是陈述一个事实。

一个她们都心知肚明的事实。

悠真没有害怕。相反，她感到一种奇异的安心。

被占有，被标记，被锁起来。

那样，她就不用再选择了。

那样，她就安全了。

“睡吧。”悠真说，重新闭上眼睛。

铃音抱紧她，脸埋在她颈窝。

许久，两人的呼吸都平稳下来，交织在一起，像一首无声的安眠曲。

窗外，月亮被云层遮住，夜色深得像墨。

房间里，相拥而眠的两人，在彼此的温度里寻找着短暂的安宁。

而明天，铃音会去学校。

明天，早川会在那里。

明天，会发生什么，悠真不知道。

她只知道，无论发生什么，她都无法逃脱。

因为铃音是她的一切。

是她的妹妹，是她的爱人，是她的……囚笼。

而这个囚笼，她早已放弃了逃离的念头。`,jc=Object.freeze(Object.defineProperty({__proto__:null,default:Ec},Symbol.toStringTag,{value:"Module"})),zc=`---
order: 13
---

# #13 空教室中的观众与表演

晨光与昨日并无不同，但悠真踏出家门的脚步却沉重如灌铅。铃音走在她身侧半步之前，手中提着两个书包——悠真的，和她自己的。妹妹换回了校服，深蓝色西装外套熨帖平整，百褶裙摆随着步伐规律摆动。她甚至仔细扎好了领结，每一根发丝都梳得一丝不苟。这过分得体的外表下，翻涌着只有悠真能察觉的、冰冷粘稠的暗流。

“哥哥，走快些。”铃音没有回头，声音平静，“要迟到了。”

悠真小跑两步跟上，白丝小腿袜包裹的脚踝在晨光中泛着柔和光泽。她今天穿着和昨天相似——校服上衣，工装裤。但里面，是铃音亲手挑选并穿上的：纯白蕾丝边的成套内衣，连裤白丝袜，以及一条格外短、稍一弯腰就会走光的百褶裙。工装裤的粗糙布料摩擦着丝袜，带来持续不断的细微触感，像无声的提醒。

“铃音……”悠真小声开口，“今天……真的要……”

“要什么？”铃音停下脚步，转身看她。晨光中，妹妹的眼睛清澈见底，却深不见光。“要去见见哥哥的新‘朋友’啊。这不是很正常吗？”

悠真闭了嘴，指甲掐进掌心。

学校走廊嘈杂如常，学生们三两成群。铃音目不斜视，拉着悠真穿过人群，径直走向旧教学楼三层——那排几乎废弃的理科准备室。她的脚步精准得像事先丈量过，最后停在一扇漆皮剥落的门前。

钥匙插入锁孔，转动，门开了。

灰尘在从高窗斜射而入的光柱中飞舞。这是一间中型教室，桌椅堆在墙角，中央空出一片地板。而最引人注目的是，房间中央已经摆好了两把椅子——一把是普通的木椅，另一把则明显被改造过：椅背和扶手上固定着结实的尼龙绳扣，地上还散落着更多绳索、眼罩、口球，甚至还有几个尺寸不一的跳蛋和一根细长的黑色皮革短鞭。

悠真的血液瞬间冰凉。

“你……你什么时候……”她声音发颤。

“昨天哥哥睡着后。”铃音放下书包，动作从容得像在布置茶会，“我回来了一趟。这些工具，”她脚尖轻轻踢了踢地上的鞭子，“是我早就准备好的。本来想等哥哥更听话一些再用……但现在看来，需要提前课程了。”

她走到悠真面前，双手捧起哥哥的脸，拇指轻轻摩挲眼下淡淡的青黑。

“哥哥没睡好吧？一直在想那个女人？”铃音微笑，那笑容甜美却毫无温度，“没关系，很快就不用想了。她会亲眼看到，哥哥到底属于谁。”

“你要对早川同学做什么？！”悠真猛地抓住铃音的手腕。

铃音垂眸看向那只颤抖的手，然后缓慢而坚定地掰开她的手指。

“请她来参观。”她说，转身走向门口，“哥哥先准备一下。脱掉工装裤，上衣可以留着。对了，裙子要撩起来，固定在腰上。丝袜不用脱……我喜欢哥哥穿着白丝的样子。”

门关上了。

悠真站在空荡的教室中央，浑身发抖。她看着那把改造过的椅子，看着地上那些冰冷的工具，胃部一阵痉挛。逃跑的念头闪过，但腿像生了根。她能逃到哪里去？铃音会找到她，而后果……她不敢想。

手指颤抖着解开工装裤的扣子，拉链滑下的声音在寂静中格外刺耳。粗糙的布料滑过丝袜，堆在脚踝。冷空气瞬间包裹住下半身，丝袜薄如蝉翼，几乎挡不住寒意。她按照铃音说的，将百褶裙的裙摆向上卷起，用自带的扣夹固定在腰侧。这个姿势让整个下半身几乎暴露——纯白的三角内裤包裹着私处，白丝连裤袜从腰部一直延伸到脚尖，大腿根部被袜边勒出微微的肉痕。

她赤脚站在冰冷的地板上，丝袜底传来粗砺的触感。

门再次开了。

铃音走进来，身后跟着——

早川理纱。

早川的校服依旧整齐，但脸色苍白。她的双手被一副塑料束带反绑在身后，嘴上贴着宽胶带，只能发出“唔唔”的闷哼。她的眼睛瞪大，目光先是落在悠真几乎全裸的下半身，然后猛地转向铃音，充满了愤怒、震惊和……一丝不易察觉的恐惧。

“介绍一下。”铃音的声音在空旷教室中回荡，带着一种近乎愉悦的残忍，“这是我哥哥，樱井悠真。当然，现在看起来可能不太像‘哥哥’。”她走到悠真身边，手指梳过悠真的长发，“这位是早川理纱同学，哥哥的……新朋友。”

早川挣扎起来，束带深深勒进手腕皮肤。

“别急，早川同学。”铃音推着她走到那把普通木椅前，强迫她坐下，然后用早已准备好的绳索将她上半身和椅子牢牢绑在一起，“你可是特邀观众。今天的表演，需要有人见证。”

绑好早川，铃音转向悠真，脸上的笑容消失了。

“过来，哥哥。”

悠真像被操纵的木偶，一步步走过去。铃音按住她的肩膀，让她背对那把改造过的椅子，然后轻轻一推。悠真跌坐在椅子上，冰冷的木面激得她浑身一颤。

接下来的一切发生得迅速而有序。铃音的动作熟练得可怕——手腕被拉起，固定在椅背高处的绳扣上；脚踝被分开，绑在两侧椅腿延伸出的固定环上。绳索收紧时，悠真忍不住闷哼一声。她被摆成一个羞耻的姿势：双腿大张，身体微微后仰，胸脯因为手臂被抬高而显得更加挺起。裙摆依然卷在腰间，内裤和丝袜覆盖的下体完全暴露在空气中，也暴露在早川直直投来的视线中。

“唔……！”早川在椅子上猛烈扭动，胶带下的脸涨得通红。

铃音充耳不闻。她拿起一个黑色的皮质眼罩，走到悠真面前。

“哥哥，看着早川同学。”她命令。

悠真抬起泪眼，看向早川。早川的眼睛里充满了复杂的情绪：愤怒、心疼、羞耻，还有……某种悠真看不懂的深暗。视线交错的瞬间，悠真感到一阵灭顶的羞耻，她想移开目光，但铃音捏住了她的下巴。

“记住她的眼神，哥哥。”铃音轻声说，然后将眼罩戴在了悠真眼睛上，“记住你在被谁看着。”

世界陷入一片黑暗。其他感官瞬间被放大。

她听到铃音走开的脚步声，听到早川更加剧烈的挣扎声和闷哼，听到某种电子设备被打开的轻微“滴”声。然后，一个冰凉圆润的东西，突然贴上了她内裤覆盖的阴户位置。

是跳蛋。

“唔！”悠真身体一弹，但绳索限制了她的动作。

“这是最小档。”铃音的声音在不远处响起，平静得像在解说实验，“我们慢慢来，早川同学。请仔细看，我哥哥的身体……是怎么一点点被玩坏的。”

跳蛋启动了。细微却密集的震动透过内裤和丝袜传来，直击最敏感的核心。悠真咬住下唇，鼻腔里溢出细细的呻吟。黑暗剥夺了视觉，却让身体的感受变得无比清晰。她能感觉到内裤很快湿了一小块，湿痕在震动中慢慢扩大，丝袜裆部被浸湿后，冰凉地贴在皮肤上。

“声音，哥哥。”铃音说。

紧接着，悠真感觉到一个球状物被塞进了嘴里。是口球。皮带在脑后扣紧，她只能发出含糊的“呜嗯”声。唾液无法控制地开始积聚，顺着嘴角流下。

“现在，我们升级。”铃音的声音带着笑意。

另一个跳蛋被贴在了悠真的肛门入口，隔着丝袜和内裤的后裆。前后夹击的震动让悠真猛地弓起腰，绳索勒进皮肉。快感像电流一样窜过脊椎，她的大脑开始昏沉。羞耻感依然存在，但在持续不断的刺激下，身体的反应越来越诚实。她能感觉到小穴深处开始抽搐，渴望被填满的空虚感蔓延开来。

“湿得真快。”铃音的声音近了，一只手突然隔着湿透的丝袜和内裤，按在悠真的阴蒂上，用力揉压。

“呜嗯——！！！”悠真剧烈挣扎，椅子腿在地板上刮出刺耳的声音。

“早川同学看到了吗？”铃音的声音转向早川，“我哥哥的这里，已经湿透了。丝袜都变成半透明了……想看更清楚些吗？”

“唔！唔唔！”早川的挣扎声更大了。

布料撕裂的声音响起。

悠真感觉到下身一凉——内裤被从中间剪开了。然后，覆盖在私处的丝袜也被剪开一个口子。冷空气直接吹拂在完全暴露的、湿漉漉的阴户上。更羞耻的是，跳蛋依然贴在那里震动，现在没有了布料的阻隔，震动直接作用于裸露的阴蒂和阴唇，刺激感瞬间倍增。

“呜！呜嗯嗯——！”悠真疯狂摇头，眼泪浸湿了眼罩下部。

“漂亮吧？”铃音似乎在向早川展示，“我哥哥的小穴，颜色是嫩粉色的，现在因为兴奋完全肿起来了，阴唇分开，露出里面更红的小口，一直在收缩，流着水。看，水顺着椅子往下滴呢。”

“滴答。”

轻微却清晰的水滴声。悠真几乎要晕厥过去。她知道早川在看，在听着，在闻着这空气中弥漫的、她自己情动淫靡的气味。

“仅仅是这样，还不够。”铃音的手离开了。悠真听到她走开的脚步声，然后是塑料袋的窸窣声。

当那东西贴上她的小穴入口时，悠真浑身僵住了。

那不是跳蛋。那是……形状、尺寸……是铃音的……那个。

龟头硕大滚烫，顶端不断渗出粘滑的先走液，在她湿透的穴口涂抹、研磨，却没有进入。它在门口徘徊，一次一次地顶撞最敏感的阴蒂和穴口嫩肉，模拟着插入的动作，却始终不真正给与。

“呜……呜……”悠真哭泣着，腰部不受控制地向上挺动，追逐着那折磨人的触感。空虚感变成了煎熬，小穴深处痉挛般收缩，分泌出更多爱液，顺着臀缝流下。

“想要吗，哥哥？”铃音的声音近在耳边，带着灼热的气息，“想要妹妹的鸡巴插进去吗？想要在早川同学面前，被妹妹操到高潮吗？”

悠真无法回答，只能发出破碎的呜咽。她残存的理智在尖叫着拒绝，但身体已经背叛了她。腰部摆动的幅度越来越大，穴口饥渴地一张一合，仿佛在主动吞咽那巨大的龟头。

“回答我。”龟头突然用力顶了一下，挤开穴口一点点，然后又退出。

“呜嗯！嗯！！”悠真拼命点头，泪水汹涌。

“说清楚。用身体说。”

铃音终于不再折磨她。粗长滚烫的性器对准湿滑泥泞的穴口，腰身猛地一沉——

“噗嗤！”

沉重、粘腻、饱含水声的插入音，在寂静的教室里清晰无比。

“呜啊啊啊——！！！”被口球压抑的尖叫变了调。悠真感觉身体被劈开了，又被填满了。那根可怕的性器长驱直入，重重撞上子宫口，碾过体内每一寸敏感点。丝袜包裹的双腿无法合拢，只能大张着，随着铃音的侵入而剧烈颤抖。

早川那边传来椅子剧烈摇晃和闷哼的声音，她似乎挣扎得更厉害了。

铃音开始抽插。一开始是缓慢的，每一次退出都几乎全部抽出，让早川能清楚地看到那根沾满晶莹爱液的深红色性器，是如何从悠真被撑得圆润发红的小穴中退出，又如何在下一瞬狠狠贯穿进去。

“噗嗤……噗嗤……噗嗤……”

规律的水声伴随着肉体撞击声。悠真被顶得身体不断撞向椅背，手腕和脚踝的绳索越勒越紧。口球让她无法吞咽，唾液混合着少量的胃液从嘴角流出，滴在胸口。眼罩也湿透了，分不清是汗水还是泪水。

“哥哥里面……好热，好紧。”铃音喘息着，动作逐渐加快，“吸得这么用力……这么想要吗？在早川同学面前，被我操就这么兴奋吗？”

悠真无法思考，快感像海啸一样淹没她。被捆绑、被观看、被侵犯的羞耻，与身体被彻底填满、撞击带来的极致快感混合在一起，形成一种摧毁理智的狂潮。她的子宫口在每一次撞击下软化成水，小穴内壁疯狂蠕动绞紧，贪婪地吮吸着入侵者。

“呜嗯！嗯嗯嗯——！”她发出高亢的鼻音，腰部主动迎合着铃音的冲撞。

“看，早川同学。”铃音的声音带着残忍的兴奋，“我哥哥在主动求欢呢。腰扭得多厉害……小穴喷了多少水……你的口红印，能让她这么湿吗？你的手指，能把她插得这么爽吗？”

“噗嗤！噗嗤！啪！啪！”

抽插声越来越快，越来越重。肉体撞击声密集如鼓点。悠真感觉自己变成了一个单纯的容器，一个为承受妹妹性器而存在的肉壶。意识飘远了，只剩下身体最本能的反应——收紧，吞吐，高潮。

“哥哥要去了，对不对？”铃音的声音也染上了情欲的沙哑，“来，告诉早川同学，你要被妹妹操射了。”

铃音的手突然伸到悠真胸前，隔着校服衬衫狠狠掐住一边乳头，用力拧转。

尖锐的疼痛混合着极致的快感，成了压垮骆驼的最后一根稻草。

悠真身体绷成一道弓，头向后仰，喉咙里发出被扼住般的尖细呜鸣。子宫剧烈痉挛，小穴深处传来一阵强过一阵的绞紧。然后——

“噗咻——！”

大量的爱液从两人紧密结合的部位喷射而出，溅落在地板上，发出淅淅沥沥的水声。这不是普通的高潮潮吹，而是近乎失禁般的猛烈喷射。液体温热，量大得惊人，顺着悠真大张的大腿、丝袜，流到椅子上、地板上。

在她高潮的同时，铃音也低吼一声，腰身死死抵住，将粗大的性器深深楔入最深处，然后开始猛烈喷射。

“嗯——！”悠真感觉到滚烫的精液一股接一股，强劲地冲刷着子宫深处。量多得仿佛无穷无尽，将她的小腹都微微撑起。被内射的饱胀感和灼热感，让她高潮的余韵持续不断地延长。

教室里只剩下粗重的喘息声、精液注入的水声，以及早川那边轻微的、绝望的啜泣声？

铃音伏在悠真身上，喘息良久，才慢慢退出。

“啵”的一声轻响，混合着精液和爱液的浊白液体立刻从悠真红肿外翻的小穴口涌出，顺着椅子流淌。那个小穴一时无法闭合，微微张着，露出里面被灌满的、更深的粉色媚肉。

铃音站直身体，走到早川面前。她撕开了早川嘴上的胶带。

“咳……咳咳！”早川剧烈咳嗽，眼睛通红地瞪着铃音，但说不出话，眼泪无声地流。

铃音看了她几秒，然后凑近她耳边，用只有两人能听到的声音说：

“早川同学，看够了吗？这就是碰我哥哥的下场。今天只是观看。下次……”她顿了顿，声音更冷，“如果你再敢碰她一根手指，绑在这把椅子上的，就是你了。而观众，会换成我哥哥。”

早川浑身一颤，死死咬住下唇，鲜血渗出。

铃音不再看她，走回悠真身边，解开了她的口球和眼罩。

突然的光线让悠真眯起眼。她第一眼看到的是铃音平静无波的脸，然后，视线不由自主地转向早川。

早川也在看着她。那双总是温柔含笑的眼睛里，此刻盛满了泪水、震惊、痛苦，还有……一种悠真看不懂的、深沉的悲伤。早川的视线缓缓扫过悠真被精液弄污的下体，扫过她泪痕狼藉的脸，扫过她手腕脚踝被绳索勒出的红痕。

两人的目光在空中交汇。

没有语言。但悠真从早川眼中读到了太多：愧疚、无力、以及……一丝尚未熄灭的什么。

铃音开始给悠真解绑。绳索松开，勒痕深可见肉。悠真浑身瘫软，几乎从椅子上滑落，被铃音一把抱住。

“表演结束了，哥哥。”铃音在她耳边轻声说，语气恢复了平常的温柔，却让悠真不寒而栗，“我们清理一下，然后去上课。早川同学，”她转向早川，“需要我帮你解开吗？还是你想再坐一会儿？”

早川闭上眼睛，两行清泪滑落。她摇了摇头，又点了点头。

铃音走过去，用匕首割断她身上的绳索。早川踉跄站起，深深看了悠真最后一眼，那眼神复杂得让悠真心碎。然后，她头也不回地、跌跌撞撞地冲出了教室。

门被关上。

教室里只剩下铃音和悠真，以及满屋淫靡的气息和痕迹。

铃音打来温水，仔细擦拭悠真身上的污秽，帮她穿上备用的干净内裤和新的丝袜，套上工装裤。动作温柔细致，仿佛刚才那个冷酷的施虐者只是幻影。

“哥哥今天很乖。”铃音最后梳理着悠真的头发，吻了吻她的额头，“奖励是……明天继续。”

悠真瞳孔微缩，身体不由自主地颤抖。

铃音笑了，牵起她的手。

“走吧，要迟到了。”她说，声音轻快，“哥哥，从今天起，你就是我一个人的了。早川同学……应该明白了。”

悠真被她牵着，走出空教室。阳光刺眼，走廊喧闹。

她回头看了一眼那扇紧闭的门。

门内，一场盛大的羞辱刚刚落幕。

门外，她的世界已经彻底改变。

而早川眼中那抹尚未熄灭的东西，像一颗微弱的火种，落在她心底最深的灰烬里。

不知能否燎原。
`,Rc=Object.freeze(Object.defineProperty({__proto__:null,default:zc},Symbol.toStringTag,{value:"Module"})),Hc=`---
order: 14
---

# #14 药水、校服与主动献祭

空教室事件后的第三天，早川理纱没有来上学。

悠真坐在教室里，指尖无意识地摩挲着自动铅笔的笔杆。窗外的樱花已经谢了大半，零落的花瓣在风中打着旋。她试图集中注意力听讲，但老师的声音像是隔着一层水传来，模糊不清。脑海中反复浮现的，是早川最后那个眼神——盛满泪水的、悲伤的、却又燃烧着某种未熄灭火焰的眼神。

那天之后，铃音像什么也没发生过一样。她依旧每天早上为悠真搭配衣服，依旧牵着她的手上下学，依旧在夜晚抱着她入睡。只是，那拥抱的力道比以前更紧，像是生怕一松手就会消失。

午休时，悠真独自来到天台。风很大，吹乱了她的长发。她靠在栏杆上，闭上眼睛，试图让混乱的思绪平静下来。

“悠真。”

熟悉的声音在身后响起。

悠真猛地转身，心脏几乎跳出胸腔。

早川理纱站在那里。她穿着校服，但脸色比三天前更加苍白，眼下有着浓重的青黑。然而，她的眼神变了——不再是纯粹的温柔或悲伤，而是一种混杂着决绝、痛苦和某种奇异炽热的东西。

“早川……同学？”悠真下意识后退一步，背抵在栏杆上，“你……你还好吗？”

早川没有回答。她一步步走近，每一步都踩得很稳。天台的风吹起她的裙摆和长发，让她整个人看起来像某种即将扑火的飞蛾。

“我做了个决定。”早川在距离悠真一步之遥的地方停下，声音很轻，但每个字都清晰无比，“我不想再只是看着了。”

悠真怔住。

早川从校服口袋里掏出一个小玻璃瓶。瓶子只有拇指大小，里面装着深蓝色的粘稠液体，在阳光下泛着诡异的光泽。

“这是……”悠真盯着那个瓶子，一种不祥的预感涌上心头。

“能让身体暂时改变的药。”早川说，手指摩挲着瓶身，“我从……某个特殊渠道弄来的。喝下去之后，十二小时内，女性身体会暂时长出男性器官。”

悠真倒吸一口冷气：“你疯了？这种东西怎么可能——”

“我不知道它有没有副作用。”早川打断她，目光灼灼地盯着悠真，“但我不在乎。悠真，那天在教室里，我看着你被那样对待，看着你痛苦又快乐的样子，看着你被捆绑、被侵犯、被羞辱……我的心像被撕碎了。但更可怕的是……”

她停顿了一下，声音变得嘶哑：“我发现我在嫉妒。”

悠真睁大眼睛。

“我嫉妒铃音可以那样触碰你，可以那样进入你，可以让你露出那种表情。”早川的声音开始颤抖，但眼神更加坚定，“我也想……不，我必须。否则我会疯掉。悠真，你明白吗？我必须成为能‘拥有’你的人之一，否则我在你身边连呼吸的权利都没有。”

“可是——”

“没有可是。”早川拧开瓶盖，仰头将深蓝色液体一饮而尽。她的喉结滚动了一下，然后剧烈咳嗽起来，脸涨得通红。

“早川同学！”悠真冲过去扶住她。

早川的身体在颤抖，额头上冒出细密的汗珠。她抓住悠真的手臂，力道大得惊人。

“药效……很快。”早川喘息着说，“悠真，带我去个没人的地方……音乐教室，或者……随便哪里……”

悠真的大脑一片空白，但身体已经行动。她搀扶着早川走下天台，避开人群，来到旧教学楼二层的音乐准备室——这里平时很少有人来。她用备用钥匙打开门（这把钥匙是她从铃音那里偷偷复制的），将早川扶进去，反锁上门。

准备室里堆满乐器和乐谱，空气中弥漫着灰尘和木头的气息。午后的阳光从高窗斜射进来，在地板上投出明亮的光斑。

早川靠在钢琴上，身体蜷缩起来。她开始剧烈喘息，脸色从苍白转为潮红，汗水浸湿了衬衫。

“早川同学，你怎么样？要不要去医院——”悠真焦急地问。

“不用。”早川抬起头，眼神已经有些涣散，但嘴角扯出一个扭曲的笑容，“来了……感觉……来了……”

她突然抓住悠真的手，按在自己小腹下方。

悠真愣住了。

隔着校服裙和底裤，她能感觉到——那里，早川原本平坦的部位，正在以肉眼可见的速度鼓起、膨胀、变硬。布料被顶起一个明显的弧度，而且那个弧度还在不断增大。

“唔……”早川咬住下唇，身体绷紧。她的呼吸变得粗重，脸颊绯红，眼睛里蒙上一层水雾。变化的过程似乎伴随着剧烈的快感或痛感，她的双腿不自觉夹紧又松开，膝盖微微颤抖。

悠真像被烫到一样想抽回手，但早川死死按着。

“摸它……”早川喘息着命令，“悠真……摸它……让我知道这不是梦……”

悠真的手指颤抖着，隔着布料轻轻按压那个鼓起的部位。硬热的触感透过布料传来，尺寸大得惊人。她能感觉到那东西在掌心下脉动，像有生命一般。

早川发出一声长长的呻吟，腰肢向前挺动，让悠真的手更紧密地贴住。

“还不够……”早川说，另一只手开始解自己的校服裙扣，“让我……让你看……”

裙子滑落在地。早川穿着白色的蕾丝内裤，但此刻，那内裤已经被顶起一个帐篷，前端甚至渗出深色的湿痕。她颤抖着褪下内裤——

悠真屏住了呼吸。

早川双腿之间，赫然挺立着一根完全勃起的男性性器。尺寸惊人——长度目测超过十八厘米，粗壮得一手难以握住，深红色的柱身上青筋盘虬，硕大的龟头呈紫红色，顶端的小孔不断渗出透明的先走液。它高高翘起，直指天花板，在午后的光线下泛着湿润的光泽。

而在这根男性器官的下方，早川原本的女性部位依然存在——阴唇微微张开，露出粉嫩的穴口，同样湿润着，渗出晶莹的爱液。两种性征同时存在于一个身体上，形成一种诡异又淫靡的画面。

“这就是……”早川低头看着自己新长出的器官，声音里混合着震惊、羞耻和兴奋，“我的……鸡巴。悠真，喜欢吗？”

悠真说不出话。她的目光无法从那根粗大的性器上移开。心跳如擂鼓，小腹深处涌起一股熟悉的燥热。三天前被铃音侵犯的记忆混合着眼前这具身体的冲击，让她双腿发软。

“悠真，”早川走近一步，那根硬热的肉棒几乎碰到悠真的校服裙摆，“现在，轮到我‘拥有’你了。”

她伸手，开始解悠真的校服外套扣子。

一颗，两颗。

外套敞开，露出里面的衣服——不是往常的衬衫或T恤，而是一套明显小一号的、属于女生夏季校服的水手服。白色短袖上衣紧绷地包裹着悠真的上身，勾勒出胸前小巧的隆起；深蓝色的领巾系在颈间，尾端垂在胸口；而下身，是一条极短的百褶裙，裙摆只勉强遮住大腿根部。

“这是……”早川的呼吸一滞。

“铃音……让我穿在里面的。”悠真小声说，脸红了，“她说……随时可能会检查……所以必须一直穿着……”

早川的手指抚过水手服的领口，然后是短裙的裙摆。她的眼神暗沉下来，混合着欲望和某种冰冷的愤怒。

“她还让你穿了什么？”早川问，手撩起裙摆。

悠真没有阻止。

裙摆被掀起，露出下面的景象——没有穿内裤。光滑的小腹下方，粉嫩的阴户完全暴露，阴唇微微分开，已经有些湿润。而更引人注目的是，她的大腿上穿着黑色的蕾丝吊带袜。袜口缀着精致的蕾丝边，被同样黑色的吊袜带固定在腰间的束腰上。吊袜带的扣子扣在束腰两侧，黑色的丝带从束腰延伸到大腿，连接着袜口。这套装束将悠真的下半身衬托得格外情色——大腿被黑色丝袜包裹，根部露出绝对领域的白皙皮肤，而最私密的部位却毫无遮掩。

“真是……准备充分啊。”早川的声音沙哑了，她的手指轻轻碰触悠真大腿根部裸露的皮肤，“铃音是不是每天都盼着有人能看到哥哥这副模样？”

悠真咬住下唇，没有回答。但她的身体已经给出了反应——小穴又渗出更多爱液，顺着大腿内侧滑下，在黑色丝袜上留下深色的水痕。

早川的手指没有停留在皮肤上，而是继续向下，轻轻拨开悠真湿润的阴唇，指尖触碰到已经硬挺的阴蒂。

“啊……”悠真轻喘一声，腰部向前挺动。

“这么湿。”早川低声说，手指沿着湿滑的穴口打转，“悠真，看到我这根东西，就这么兴奋吗？”

悠真点点头，眼睛直勾勾地盯着早川腿间那根粗大的肉棒。它还在不断渗出先走液，顶端亮晶晶的，散发着雄性荷尔蒙的气息。

“想要吗？”早川问，手指突然插入一根到悠真小穴里。

“嗯！”悠真闷哼一声，小穴立刻绞紧那根手指。

“说出来。”早川开始缓慢抽插手指，另一只手握住自己勃发的性器，上下撸动，“悠真，告诉我，你想要什么？”

“想要……早川同学的……鸡巴……”悠真喘息着说，羞耻感让她的脸更红，但欲望压倒了一切，“想要……被早川同学……插进去……”

“哪里？”早川的手指抽出来，带出更多爱液，然后再次插入两根，“想要我插哪里？这个小穴，还是……”

她的手指移到悠真后方，轻轻按压那个紧闭的入口。

“都……都想要……”悠真几乎哭出来，身体像被点燃一样滚烫，“早川同学……给我……”

早川的眼神变得深沉。她抽出手指，双手捧住悠真的脸，让她直视自己。

“那现在，先从这里开始。”早川说，拇指按在悠真的嘴唇上，“悠真，用你的嘴，好好伺候它。”

悠真没有丝毫犹豫。她跪了下来，黑色吊带袜的膝盖触及冰冷的地板。她仰头看着早川，眼睛水润，嘴唇微张，然后伸出舌头，轻轻舔过那根粗大肉棒的顶端。

咸腥的先走液味道在舌尖化开。悠真没有皱眉，反而像是品尝美味一般，将龟头整个含入嘴中。

“嘶——”早川倒吸一口气，手指插入悠真的长发，轻轻抓住。

悠真的口交技术并不熟练，但她极其认真。她先用舌头仔细舔舐龟头的每一个角落，尤其是顶端的小孔，用舌尖挑逗、打转，吮吸不断渗出的液体。然后，她尝试着将更多含入口中。肉棒的尺寸太大，她的嘴巴被撑得满满的，脸颊鼓起，嘴角无法闭合，唾液混合着先走液从嘴角流下。

“呜……嗯……”悠真发出含糊的鼻音，眼睛向上看着早川，眼神里满是讨好和渴望。

“对……就是这样……”早川喘息着，腰部微微向前挺动，“深一点……悠真……你能吃得更深……”

悠真努力放松喉咙，让肉棒进入更深。她的一只手握住露在外面的柱身，配合着嘴部的吞吐上下套弄。另一只手则不安分地抚上自己的小穴，开始快速揉搓阴蒂。

“噗呲……啧……啧……”

响亮的口交声在寂静的准备室里回荡。悠真吃得非常卖力，每一次吞吐都尽可能深，喉咙被顶到发出吞咽的咕噜声。她的眼睛始终看着早川，看着早川因为快感而微皱的眉头、泛红的脸颊、急促的呼吸。

“悠真……你太棒了……”早川的手指收紧，声音颤抖，“我要……忍不住了……”

就在早川即将射精的瞬间，悠真却突然吐出肉棒。她仰起脸，脸上沾满唾液和先走液，嘴唇红肿，但眼睛亮得惊人。

“射在里面……”悠真喘息着说，“早川同学……射在我嘴里……我想要……全部……”

这句话像最后一根稻草，压垮了早川的理智。

早川低吼一声，再次将肉棒插进悠真嘴里，抵到最深处，然后开始猛烈喷射。滚烫的精液一股接一股地冲击着悠真的喉咙。量多得惊人，悠真被呛到，但依然努力吞咽着，喉结不断滚动。来不及咽下的白浊从嘴角溢出，顺着下巴滴落，染脏了水手服的领口。

射精持续了很长时间。当早川终于退出时，悠真嘴里还含着大量精液。她张开嘴，让早川看到那些白浊，然后才慢慢咽下去，最后伸出舌头，将嘴角残留的也舔干净。

“全部……吃完了。”悠真说，声音沙哑，但带着满足的笑意。

早川看着这样的悠真，呼吸一滞。某种黑暗的、占有的欲望在她心中疯狂滋长。

“还不够。”早川说，将悠真拉起来，推到钢琴盖上。钢琴发出沉闷的共鸣音。“刚才只是开胃菜。现在，才是正餐。”

悠真背靠着冰凉的钢琴漆面，双腿被早川分开。黑色吊带袜包裹的大腿在深色钢琴的衬托下更加白皙诱人。她的水手服上衣被推高，露出平坦的小腹和胸口。百褶裙被完全撩起，堆在腰间，暴露出毫无遮掩的下体。

早川俯身，吻住悠真的唇。这个吻充满了侵略性，舌头长驱直入，扫荡着悠真口腔里残留的精液味道。悠真热烈地回应着，双手环住早川的脖子。

吻了很久，早川才退开，嘴唇移到悠真耳边。

“悠真，自己把腿再分开些。”她命令，声音低沉，“让我看清楚，你有多想要。”

悠真听话地将双腿分到最大，几乎成一字马。这个姿势让她的小穴完全暴露，粉嫩的穴口一张一合，不断涌出透明爱液。

早川的手指再次抚上那个湿漉漉的入口，但没有插入，只是轻轻画圈。

“说，想要我怎么做？”

“插进来……”悠真喘息着，“用早川同学的鸡巴……插进来……用力……”

“哪里？”

“小穴……后面也……都想要……”

早川笑了，那笑容里带着一丝残酷的温柔。她握住自己已经再次半勃起的肉棒（药效似乎让她的恢复能力极强），用龟头在悠真的穴口摩擦，涂抹上更多爱液，但就是不进入。

“自己来。”早川说，“悠真，自己坐上来。”

悠真愣了愣，然后理解了早川的意思。她撑起身体，手扶着早川的肩膀，调整姿势，让湿透的穴口对准那根粗大的龟头。然后，她慢慢下沉。

“啊……好大……”悠真呻吟着，眉头微皱。早川的尺寸比铃音的还要夸张，进入的过程有些艰难。但她没有停下，继续向下坐，直到整根肉棒完全没入体内。

“唔——！”两人同时发出闷哼。

悠真感觉身体被撑到了极限，子宫口被重重撞击。早川的肉棒在她体内脉动，热度惊人。她开始上下起伏，主动套弄起来。

“对……就是这样……”早川喘息着，双手抓住悠真的腰，帮助她动作，“自己动……悠真……自己操自己……”

“啊……啊……早川同学的……好深……”悠真忘情地起伏着，水手服的上衣随着动作晃动，领巾松脱。黑色吊带袜包裹的大腿在早川腰侧摩擦，吊袜带的扣子发出细微的金属碰撞声。

“噗嗤……噗嗤……”

肉体交合的水声越来越响。悠真的小穴已经被充分润滑，每次坐下都能听到粘腻的撞击声。她越动越快，腰部扭动的幅度也越来越大，像个熟练的舞者。

“早川同学……我……我要去了……”悠真喊道，高潮的电流在体内流窜。

“不准。”早川突然按住她的腰，停止她的动作，“我没说可以。”

悠真僵住，身体因为即将到来的高潮而颤抖，却被强行中断，难受得眼泪汪汪。

“求求你……早川同学……让我去……”她哀求道。

“求我。”早川说，腰部向上狠狠一顶。

“啊！求、求你……让我高潮……早川同学……主人……求求你……”悠真口不择言地哀求，快感几乎将她逼疯。

“好。”早川松开了手。

悠真立刻疯狂地起伏起来，只用了十几下，就达到了高潮。大量的爱液喷涌而出，浇灌在两人交合的部位，发出“噗嗤”的声响。她浑身痉挛，小穴剧烈收缩，几乎要夹断早川的肉棒。

早川也被夹得闷哼一声，但她没有射。她等悠真的高潮稍微平息，就将她从钢琴上抱下来，让她趴在钢琴盖上，臀部高高翘起。

“现在，是后面。”早川说，手指沾满悠真爱液和自己的先走液，涂抹在她紧缩的肛门入口，“放松。”

悠真将脸贴在冰凉的钢琴漆面上，顺从地放松身体。早川的手指缓缓插入一根，然后两根，扩张着那个紧致的入口。

“可以了……进来……”悠真喘息着说。

早川没有犹豫，扶着自己沾满混合液体的肉棒，对准那个小穴，腰身一挺——

“呃啊——！”

悠真发出尖锐的惨叫，但声音里痛苦和快感各半。后穴被强行开拓的疼痛让她瞬间清醒，但随之而来的、被彻底填满的饱胀感又让她沉迷。

早川开始抽插。后穴比前面更紧，摩擦力更强，每一下进出都带着明显的阻力，发出更加粘腻淫靡的声响。

“啪！啪！啪！”

肉体撞击声在空旷的房间里回荡。悠真被顶得身体不断前冲，胸部压在钢琴盖上，乳头摩擦着冰凉的漆面。黑色吊带袜包裹的腿在颤抖，膝盖几乎撑不住身体。

“早川……同学……太深了……后面……要坏了……”悠真哭着说，但臀部却不由自主地向后迎合。

“坏掉最好。”早川喘息着说，动作越来越粗暴，“坏掉了……就没人能修好……除了我……”

她突然抓住悠真的头发，强迫她抬起头，看向钢琴盖上映出的两人交合的倒影。

“看，悠真。”早川在她耳边说，气息灼热，“看你现在是什么样子——像个发情的母狗，撅着屁股被人从后面干。水手服乱糟糟的，丝袜也勾丝了，满脸都是眼泪和口水……这就是你，樱井悠真。一个离开了鸡巴就活不下去的肉便器。”

这些话像刀子一样刺进悠真心里，但诡异的是，伴随着身体的快感，这些话反而让她更加兴奋。她看着倒影中自己淫乱的模样，看着早川在她身后疯狂冲刺的样子，小穴又涌出一股爱液。

“我是……我是早川同学的肉便器……”悠真哭着说，意识已经模糊，“随便用……把我操坏……射在里面……让我怀孕……”

最后这句话彻底点燃了早川。

她低吼一声，死死抵住悠真后穴的最深处，开始猛烈射精。滚烫的精液灌入肠道深处，量多得让悠真的小腹都微微鼓起。她被内射得浑身颤抖，后穴贪婪地收缩着，榨取着每一滴精液。

射精结束后，早川没有立刻退出。她伏在悠真背上，喘息着，感受着两人身体连接的紧密。

许久，她才缓缓退出。

“啵”的一声，混合着肠液和精液的浊白液体从悠真无法闭合的后穴流出，顺着大腿滴落，在黑色丝袜上留下污迹。

早川将悠真翻过来，让她躺在钢琴盖上。悠真眼神涣散，脸上泪痕斑驳，嘴角还带着笑。水手服沾满了各种液体，皱巴巴的。黑色吊带袜好几处勾丝，大腿根部一片狼藉。

早川低头看着这样的悠真，心中涌起复杂的情绪——满足、占有、爱恋，以及一丝深沉的悲伤。

她俯身，轻轻吻了吻悠真的额头。

“我送你回去。”早川说，声音恢复了平时的温柔，但多了一丝疲惫。

悠真摇摇头，挣扎着坐起来。

“不用……”她小声说，“铃音会来接我……她说过放学后会来这里找我……”

早川的身体一僵。

就在这时，准备室的门锁传来转动的声音。

两人同时看向门口。

门开了。

樱井铃音站在门口，手里提着两个书包。她的目光平静地扫过一片狼藉的室内，扫过早川腿间尚未完全软下的性器，扫过悠真身上明显的痕迹和污渍。

然后，她笑了。

那个笑容甜美得令人毛骨悚然。

“看来，”铃音轻声说，走进来，反手锁上门，“我来的正是时候呢。”

悠真的血液瞬间冻结。

早川下意识将悠真护在身后，但她的身体还在微微颤抖——药效正在消退，腿间的性器以肉眼可见的速度缩小、消失，变回原本的女性器官。变化的过程伴随着剧烈的虚弱感，她几乎站立不稳。

铃音走到钢琴边，伸手摸了摸琴盖上未干的水渍，然后放到鼻子前闻了闻。

“精液的味道。”她平静地说，“还有肠液。早川同学，你玩得挺开啊。”

早川咬紧牙关，没有说话。

铃音的目光转向悠真。她伸手，轻轻擦掉悠真嘴角残留的白浊，动作温柔得像在擦拭珍宝。

“哥哥今天不乖呢。”铃音轻声说，“明明说好了只给妹妹一个人碰的。”

“对不起……”悠真下意识地说，眼泪涌了上来。

“我说过，不要道歉。”铃音打断她，手指移到悠真脖子上，那里有一个新鲜的吻痕，“道歉没有用。惩罚才有用。”

她看向早川，眼神冰冷如刀。

“早川同学，谢谢你。”铃音说，语气真诚得可怕，“谢谢你让我看到，哥哥到底可以有多淫荡，多下贱。也谢谢你……给了我一个完美的理由。”

“你想干什么？”早川强撑着问。

铃音没有回答。她脱下自己的校服外套，披在悠真身上，遮住那些痕迹。然后，她牵起悠真的手。

“我们回家，哥哥。”铃音说，声音轻柔，“至于早川同学……”

她回头，看了早川最后一眼。

“药效过了之后会很虚弱吧？好好休息。明天见。”

铃音拉着悠真离开了准备室。

门关上。

早川瘫坐在地上，腿间已经恢复了原状，只留下残留的粘腻和剧烈的疲惫。她看着紧闭的门，看着钢琴盖上两人交合的痕迹，看着满室淫靡的气息。

她成功了。

她拥有了悠真，哪怕只有一次。

但为什么，心里空得这么厉害？

而门外，铃音牵着悠真走在夕阳下的走廊里。她的脚步不疾不徐，甚至哼起了歌。

悠真浑身发抖，不敢说话。

“哥哥别怕。”铃音突然停下，转身抱住悠真，脸埋在她颈窝，“我不会生气的。相反，我很高兴。”

悠真愣住了。

“因为现在，”铃音抬起头，眼睛在夕阳下闪着奇异的光，“我终于可以名正言顺地，把哥哥彻底关起来了。”

她笑了，笑容天真如孩童。

“从今晚开始，哥哥的脚上，会多一条漂亮的链子。不长，只够在房间里活动。这样，哥哥就再也不会乱跑了。”

悠真睁大眼睛，恐惧淹没了一切。

但铃音的怀抱很温暖，声音很温柔。

“我们回家，哥哥。”

“回我们永远的家。”

夕阳将两人的影子拉得很长，像一条锁链，紧紧相连。
`,Uc=Object.freeze(Object.defineProperty({__proto__:null,default:Hc},Symbol.toStringTag,{value:"Module"})),Fc=`---
order: 15
---

# #15 囚笼、盲眼与双倍的占有

黑暗是第一个回来的感觉。

不是夜晚的那种黑暗，而是密不透风的、压着眼皮的那种浓稠的黑暗。悠真还没完全清醒，意识像漂浮在粘稠的温水里，四肢沉甸甸的。她试图睁开眼睛，却发现眼皮被什么东西紧紧贴着——不是困倦的粘合，而是一种柔韧光滑的布料，严丝合缝地覆盖了整个眼部区域，边缘用柔软的胶带固定在了太阳穴和颧骨上。

眼罩。

这个词跳进脑海的瞬间，昨日的记忆碎片轰然回流——夕阳下铃音温柔的微笑，那句“把哥哥彻底关起来”，还有脚踝上冰凉的触感……

她猛地想坐起来，身体却只抬起一半就被什么东西扯住了。

“哗啦……”

清脆的金属碰撞声从右脚踝传来。悠真颤抖着手向下摸去，触感先是被单的柔软，然后是小腿皮肤的温热，再往下，脚踝处——一个宽约两指、内侧衬着柔软羊皮的金属环，紧密地扣在她的脚踝骨上。环上连接着一条细长的银链，链子另一端消失在床尾的黑暗里。

她顺着链子摸索，手指碰到冰冷的金属栏杆——是床尾的雕花柱。链子用一把小巧的锁具固定在了那里。长度……她尝试移动右脚，链子哗啦作响，允许的活动半径大约只有两米。刚好够她从床上下来，在卧室里走几步，但绝对够不到门口。

真的……被锁起来了。

恐慌像冰冷的蛇缠绕住心脏。悠真张开嘴想喊，喉咙却干涩得发不出像样的声音。卧室里很安静，窗帘应该拉着，只有微弱的光线透过眼罩边缘的缝隙，提示着现在是白天。

“铃……音……”她终于挤出一丝气音。

没有回应。

但下一秒，卧室门被推开了。很轻的“咔哒”声，然后是熟悉的、几乎无声的脚步声。铃音走路总是这样，像猫一样，只有离得很近才能察觉到。

“哥哥醒了？”铃音的声音在床边响起，带着清晨特有的、微微沙哑的温柔。一只手抚上悠真的脸颊，指尖冰凉。“睡得好吗？”

悠真想躲开，但身体僵硬得无法动弹。“铃音……这个……链子……”

“嗯，很漂亮吧？”铃音的手指顺着脸颊滑到下巴，轻轻抬起她的脸，“我挑了很久呢。纯银的，内侧衬了皮，不会磨伤哥哥娇嫩的皮肤。长度也计算过了，足够你在房间里活动，上厕所、走到衣柜边、甚至坐到窗边的小沙发都可以。但是呢……”

她的声音凑得更近，气息喷在悠真耳廓：“不够你离开这个房间，也不够你碰到门锁。”

“为……为什么要这样……”悠真的声音带了哭腔。

“为什么？”铃音重复了一遍，语气里带上了一丝困惑，仿佛悠真问了一个极其愚蠢的问题，“当然是因为哥哥不乖啊。哥哥背着我，让别的女人碰了，还让她……进去了那么深的地方。”

她的手指下滑，隔着轻薄的睡衣布料，按在悠真小腹下方。

“这里，还有后面，”手指移到臀缝，“都被别人用过了。脏了。需要好好清洗，消毒，然后……重新打上我的标记。”

悠真浑身发抖。

“所以，从今天开始，这是惩罚，也是教育。”铃音的声音恢复了平静，甚至带着一丝愉悦，“哥哥要学乖，学会只属于我一个人。首先呢……”

她掀开了被子。

清晨微凉的空气瞬间包裹住悠真的身体。她只穿了一件丝质的吊带睡裙，长度刚过大腿中部，下身是真空的。铃音的手指轻易地探入睡裙下摆，抚上她赤裸的大腿内侧。

“首先，要清除掉别人留下的痕迹。”铃音说，另一只手开始解自己睡衣的扣子。“用我的东西，灌满哥哥的每一个地方，从里到外，覆盖掉早川同学的味道。”

布料摩擦的声音。悠真听到铃音似乎脱掉了什么，然后床垫微微下陷——铃音上来了，跨坐在她腰间。

即使隔着睡衣，悠真也能感觉到铃音身体的热度，以及……那根已经硬挺的、抵在她小腹上的性器的形状和热度。尺寸一如既往地惊人，只是这样贴着，就让她小腹深处条件反射地抽搐了一下。

“不要……铃音……现在是早上……”悠真徒劳地挣扎，但锁链限制了她腿部的动作，双手手腕也被铃音轻易地按在了头顶。

“早上才好。”铃音俯下身，嘴唇贴着悠真被蒙住的眼罩，声音低沉，“精力充沛，可以好好惩罚哥哥。而且……”

她挺腰，粗大的龟头隔着薄薄的睡裙布料，抵在悠真湿滑的穴口，研磨着。

“哥哥的身体，好像不是这么说的呢。”铃音轻笑，“已经湿了。只是被我压着，听到我的声音，下面就流水了。真是个淫荡的身体。”

悠真咬住下唇，耻辱感烧红了脸颊。但身体确实在背叛她——小穴深处涌出热流，穴口不由自主地收缩，渴望被填满。黑暗剥夺了视觉，其他感官被无限放大。她能清晰感觉到铃音性器的形状、热度、脉动，能闻到铃音身上淡淡的沐浴露香味和她自己情动的甜腥气息，能听到两人粗重交错的呼吸，还有自己心脏疯狂擂鼓的声音。

“今天呢，哥哥要好好记住。”铃音说，一只手撩开悠真的睡裙下摆，将布料堆叠在她腰间，让她下半身完全暴露在微凉的空气中。“记住谁才是能这样碰你的人。”

没有任何前戏的温柔。铃音调整了一下角度，腰身猛地一沉——

“噗嗤！”

沉重的、饱含水声的贯穿音在寂静的卧室里炸开。

“啊——！！！”悠真尖叫出声，身体像虾一样弓起，又被锁链和铃音的体重压回床上。

进来了。全部。那根粗长得可怕的性器，以惩罚性的力度和速度，一口气凿开了她湿润但未充分扩张的甬道，直抵最深处，重重撞在宫口上。疼痛和快感像两股对冲的电流，瞬间窜遍全身。

“疼……好疼……”悠真哭了出来，眼泪迅速浸湿了眼罩下部。

“疼就对了。”铃音的声音在她上方响起，冷静得残忍，“这是惩罚。惩罚哥哥不听话，惩罚哥哥让别人碰。疼，才能记住。”

她开始抽插。一开始就是全力的、毫不留情的撞击。每一次退出都几乎整根抽出，让空气涌入被开拓得火热的穴道，然后在悠真痉挛般的收缩中再次狠狠贯入。

“啪！啪！啪！噗嗤——噗嗤——！”

肉体撞击声混合着粘腻的水声，节奏稳定而粗暴。床垫发出不堪重负的吱呀声，锁链随着悠真身体的挣扎和撞击不断哗啦作响，像为这场侵犯伴奏的打击乐。

悠真被顶得不断向上滑动，头几乎要撞到床头板。手腕被铃音死死按着，指甲掐进掌心。眼罩下的世界是一片动荡的黑暗，只有身体的感觉清晰得可怕——被撑开到极限的撕裂感，子宫被一次次撞击的酸胀感，还有随着粗暴抽插逐渐累积、压过疼痛的快感。

“啊……啊……慢点……铃音……求你了……”她断断续续地哀求，声音被撞得支离破碎。

“不准求饶。”铃音喘息着，动作反而加快，“惩罚的时候，哥哥只需要接受。接受我的侵犯，接受我的精液，接受你是个离开妹妹的鸡巴就活不下去的肉便器这个事实。”

“不……我不是……”悠真摇头，泪水更多了。

“不是吗？”铃音猛地一记深顶，龟头碾过体内某个极其敏感的点。

“呀啊——！”悠真猝不及防地尖声淫叫，腰部失控地向上挺动迎合。

“看，身体很诚实呢。”铃音冷笑，继续精准地撞击那个点，“这么快就有感觉了？被妹妹这样粗暴地干，反而更兴奋了？哥哥，你真下贱。”

下贱。这个词像针一样刺进悠真心底。但伴随着粗暴的侵犯和体内爆炸般的快感，羞耻感奇异地转化成了更强烈的兴奋。她的小穴分泌出更多爱液，每一次抽插都带出响亮的水声，湿漉漉的触感蔓延到大腿和床单上。

“我……嗯啊……啊……铃音……”她开始无意识地呼唤妹妹的名字，声音里痛苦和愉悦交织。

“对了，就是这样。”铃音的呼吸也粗重起来，汗水滴落在悠真颈窝，“叫我的名字。让所有人知道，是谁在操你，是谁在让你爽。”

抽插越来越快，越来越重。悠真感觉自己的意识被撞散了，变成碎片漂浮在情欲的洪流里。她忘记了被锁链囚禁的恐惧，忘记了被蒙眼的无助，只剩下身体最本能的反应——收紧，迎合，渴求更深的占有。

就在她即将被推上高潮的临界点时，铃音却突然停了下来。

肉棒深深埋在体内，一动不动。

“唔……”悠真难耐地扭动腰肢，空虚感瞬间反扑，比持续的侵犯更折磨人，“动……铃音……动啊……”

“想要？”铃音的声音带着戏谑。

“想……想要……”悠真啜泣着承认。

“自己动。”铃音松开了她的手腕，身体微微抬起，但性器依然停留在深处，“惩罚的第二阶段——哥哥自己来。用你的小穴，自己套弄我的鸡巴，直到我满意为止。”

悠真愣住了。自己动？在眼睛被蒙住、脚被锁住的情况下？

“做不到的话，我就拔出来。”铃音作势要后退。

“不！不要！”悠真慌乱地伸手，抱住铃音的腰，“我做……我做……”

她努力支起上半身，靠床头坐着。铃音配合地调整了姿势，跪坐在她腿间，性器依然深深插在里面。悠真双手扶着铃音的胯骨，开始尝试上下起伏。

这个姿势很吃力。锁链限制了右脚的活动幅度，她只能用左腿和腰腹的力量支撑。一开始的动作笨拙而迟缓，但很快，身体找到了节奏。

“嗯……啊……”悠真喘息着，自己控制着进出的深度和速度。奇妙的是，这种主动权在手的错觉，配合着眼不能视的黑暗和被锁链禁锢的现实，反而催生出一种更堕落的快感。她开始加大幅度，每一次坐下都让自己吞得更深，让龟头重重撞上宫口。

“对……就是这样……”铃音仰起头，喉结滚动，双手捧住悠真的脸，拇指摩挲她湿润的眼罩，“哥哥自己动起来，真好看。腰扭得这么骚，小穴吸得这么紧……果然是个天生的淫娃。”

悠真被这些话刺激得更加兴奋。她开始加快速度，腰部像装了马达一样快速起伏，臀部撞击着铃音的大腿，发出清脆的“啪啪”声。水声也随之变得密集响亮。

“啊……啊……铃音……好深……顶到了……”她忘情地呻吟，长发随着动作飞舞，汗湿的睡裙紧贴在身上，勾勒出胸前小巧的轮廓。

“哪里顶到了？”铃音喘息着问，“说清楚。”

“子宫……顶到子宫了……啊啊……要化了……”悠真语无伦次，快感累积得快要爆炸。

“那就化掉吧。”铃音突然按住她的腰，制止了她的动作，然后腰部猛地向上狠狠一顶——不是悠真在动，而是铃音再次掌握了主动权，开始了新一轮狂暴的冲刺。

“呀啊啊啊——！！！”

悠真的尖叫变了调。被突然的猛攻打得措手不及，快感瞬间冲破阈值。她感觉子宫口痉挛着打开，小穴深处剧烈收缩，一股滚烫的爱液喷涌而出，浇淋在两人交合的部位。

高潮了。

但铃音没有停。她在悠真高潮的剧烈收缩中继续抽插，甚至更加用力，仿佛要将她子宫里每一寸空间都拓上自己的形状。

“射……射在里面……”悠真在高潮的余韵中哭求，“铃音……射给我……灌满我……”

“如你所愿。”

铃音低吼一声，死死抵住最深处，开始喷射。滚烫浓稠的精液强劲地冲击着宫口和宫颈，一股接一股，仿佛无穷无尽。悠真被烫得浑身颤抖，小腹肉眼可见地微微鼓起。被内射的饱胀感和灼热感，让她刚刚平息的高潮余波再次被激起，小穴贪婪地吮吸着，榨取着每一滴精液。

射精持续了很长时间。当铃音终于退出时，悠真浑身瘫软地倒在床上，像一滩融化的奶油。大量的白浊混合着她的爱液，从红肿无法闭合的穴口汩汩涌出，弄脏了床单。

铃音伏在她身上喘息，汗水浸湿了两人相贴的皮肤。

过了好一会儿，铃音才撑起身体，下了床。悠真听到她走到房间某处，然后是倒水的声音。

“喝点水。”铃音扶起她，将杯口凑到她嘴边。

悠真顺从地喝了几口，温水滋润了干痛的喉咙。她靠在铃音怀里，身体还在轻微颤抖，高潮的余韵和被内射的饱胀感依然清晰。

“惩罚的第一轮，结束了。”铃音在她耳边轻声说，手指梳理着她汗湿的头发，“但今天还很长，哥哥。接下来，是第二轮。”

还有？悠真瑟缩了一下。

“不过，在第二轮开始前，需要清洁一下。”铃音说着，将她抱了起来。

锁链随着移动哗啦作响。铃音抱着她走进卧室附带的浴室——链子的长度果然计算精准，刚好够走到浴室门口。浴室里已经放好了温水，铃音将她放进浴缸，自己也跨了进来。

温暖的水流包裹住身体。铃音开始仔细地清洗她，从头发到脚趾，每一寸皮肤都不放过，尤其是刚刚被侵犯过的私处。手指探入仍然松软张开的穴口，将里面的精液和爱液仔细抠挖出来，动作说不上温柔，但也不算粗暴，更像一种仪式性的清理。

悠真靠在浴缸边缘，眼罩依然蒙着。温热的水流和铃音的触摸让她昏昏欲睡，身体的疲惫和快感残留让她几乎失去思考能力。

清洗完毕后，铃音用柔软的大浴巾擦干她的身体，然后给她换上了一套新的衣服——不是睡衣，而是一件非常轻薄的、几乎透明的白色纱质连衣裙。长度到膝盖上方，没有袖子，领口开得很低，胸前只有简单的系带，稍微一动就可能敞开。裙子下面，依然是真空。然后，铃音给她穿上了一双白色的过膝丝袜，丝袜顶端用精致的蕾丝吊袜带固定在大腿根部。

这套装束让悠真感觉自己更像一个被精心打扮的玩偶，或者祭品。

铃音没有给她穿内裤，也没有解开眼罩和脚链。她牵着悠真走回卧室，让她坐在窗边那张小沙发上。链子的长度刚好够她坐在这里。

“在这里等着。”铃音说，吻了吻她的额头，“我去准备点东西。第二轮惩罚，需要一些……道具。”

脚步声远去，卧室门打开又关上。

悠真独自坐在沙发上，丝袜包裹的腿并拢着，双手放在膝盖上。眼罩下的黑暗让她对时间流逝的感觉变得模糊。几分钟？还是几十分钟？她不知道。只能听到窗外远处隐约的车流声，还有自己略显急促的呼吸和心跳。

她尝试摸索周围。沙发是柔软的绒面，旁边有一个小边几，上面似乎放着一本书和一个杯子。再远就够不到了。锁链的长度将她牢牢限制在这个以床和沙发为中心的小小圆形区域内。

这就是……被囚禁的感觉吗？

完全的黑暗，有限的空间，彻底的被动等待。

奇怪的是，最初的恐慌过后，一种诡异的平静感开始滋生。也许是身体还沉浸在刚才激烈性事的余韵中，也许是知道反抗毫无意义，也许是……内心深处某个被铃音长期驯化的部分，已经开始接受甚至依赖这种绝对的掌控。

就在这时，她听到了声音。

不是铃音的脚步声。

是更轻的，有些迟疑的，另一个人的脚步声。

从门口传来。

有人进来了？悠真立刻绷紧身体，侧耳倾听。

脚步声停在门口，似乎犹豫了一下，然后才继续向室内走来。步伐很轻，但和铃音那种猫一样的轻盈不同，这个脚步声带着一种刻意放轻的谨慎。

是谁？佣人？不可能。铃音绝对不会让其他人看到她被锁住的样子。那……

一个可怕的猜测浮现在脑海。

难道……

脚步声停在了她面前不远处。悠真感觉到一道目光落在自己身上，带着复杂的温度——审视，犹豫，还有……某种灼热的东西。

“铃……音？”她试探着开口，声音因为紧张而干涩。

没有回应。

但那个人走近了。悠真闻到一股淡淡的、有些陌生的香水味——清冷的雪松混合着一点点柑橘前调。这不是铃音常用的甜暖花香。

一只手伸过来，轻轻碰了碰她的脸颊。

指尖微凉，触感和铃音不同，更纤细一些。

悠真猛地向后缩，背抵在沙发靠背上。“谁？！你是谁？！”

那只手顿了顿，然后缓缓收回。

依然没有声音。

但悠真听到了另一种声音——略显急促的呼吸声，还有……衣物摩擦的细微声响，仿佛那人在解开什么。

不祥的预感越来越强烈。她开始挣扎着想站起来，但锁链限制了她，她只能蜷缩在沙发角落，双手抱住膝盖，徒劳地将自己缩成一团。

“铃音！铃音你在哪里？！”她提高声音喊道，恐惧再次攫住了心脏。

一只手突然抓住了她的手腕，力道不小，将她从蜷缩状态拉直。然后，那双手开始将她往沙发边缘拖。

“放开我！你是谁？！你想干什么？！”悠真尖叫着，双脚胡乱踢蹬，但丝袜包裹的腿根本造不成什么威胁，反而因为挣扎让裙摆翻起，露出大片白皙的大腿和腿根。

她被按倒在沙发宽大的扶手上，上半身悬空，臀部被迫翘起。纱裙被轻易地撩到腰间，白色的丝袜和蕾丝吊袜带暴露无遗，而更下方，刚刚被清洗过、还残留着红肿和湿润的私处，也毫无遮掩地暴露在空气中。

“不……不要……”悠真哭了，绝望地摇头。

回应她的，是一个坚硬、滚烫的物体，抵在了她湿滑的穴口。

尺寸……很惊人。和铃音的不相上下，甚至可能更粗一些。热度透过皮肤传来，顶端渗出粘滑的液体，涂抹在入口。

不是铃音。

这个认知让她如坠冰窟。

但下一秒，那根东西没有任何预警地，猛地贯穿了她。

“呃啊啊啊——！！！”

撕裂般的疼痛再次传来。刚刚经历过高潮和清洗的甬道依然柔软湿润，但并未完全从之前的侵犯中恢复，此刻被另一根同样粗大的性器强行闯入，疼痛混合着被填满的奇异快感，让她大脑一片空白。

那个人开始抽插。动作起初有些生涩，但很快找到了节奏，变得猛烈而深入。每一次撞击都又重又准，顶得悠真身体不断前冲，胸部压在沙发扶手上，脸颊摩擦着粗糙的绒面。

“啪！啪！啪！噗嗤——”

交合的水声再次响起，混合着沙发摇晃的吱呀声和锁链的哗啦声。悠真咬住嘴唇，试图忍住呻吟，但身体在激烈的侵犯下很快背叛了她。

“啊……啊……”细微的呜咽还是从喉咙里溢了出来。

那个人似乎听到了，动作顿了一下，然后更加用力地顶入深处，仿佛在惩罚她的忍耐。

快感再次开始累积。尽管恐惧和羞耻依然存在，但身体的反应是诚实的。她被干得越来越湿，小穴开始主动收缩吮吸，腰部甚至无意识地微微向后迎合。

是谁？到底是谁？

早川同学？不……不可能……那天之后，铃音怎么可能还让她接近自己？而且早川同学是女孩子，怎么可能……

可是这根东西，这侵犯的方式……

混乱的思绪被一阵猛烈的顶弄打断。那个人突然改变了角度，龟头重重碾过她体内某个极其敏感的点，反复摩擦。

“呀啊——！”悠真猝不及防地尖叫出声，身体剧烈颤抖，高潮的电流瞬间窜过脊椎。

那个人没有停，反而趁着她的高潮收缩，更加疯狂地冲刺。悠真被干得语无伦次，意识模糊，只能发出破碎的呻吟和哭泣。

“啊……啊……不行了……要坏了……嗯啊……”

就在她即将再次被推上高峰时，一个熟悉的声音，冷不丁地在房间另一头响了起来。

“哥哥叫得真好听呢。”

是铃音！

悠真浑身一僵，随即涌起巨大的羞耻和恐慌。铃音看到了！看到自己被一个陌生人侵犯！她会怎么想？她会……

“看来哥哥很喜欢这位‘客人’呢。”铃音的声音带着笑意，慢慢走近，“小穴吸得这么紧，水流了这么多……比刚才被我干的时候还兴奋吗？”

“不……不是的……”悠真慌乱地摇头，眼泪浸湿了眼罩，“铃音……救我……有人……有人在……”

“我知道啊。”铃音的语气轻松得可怕，“这位‘客人’，是我请来的。”

悠真的大脑“嗡”的一声，彻底当机。

铃音……请来的？

“惩罚的第二轮，就是让哥哥在不知道对方是谁的情况下，被干到高潮。”铃音的声音停在沙发边，一只手抚上悠真的头发，温柔地梳理着，“让哥哥好好体会一下，被陌生人侵犯的感觉。不过呢……”

她的声音压低，带着恶魔般的愉悦：“看来哥哥根本不在意是谁呢。只要鸡巴够大，干得够狠，哥哥就会自动张开腿，流水，求着被内射。对吧？”

“不是……我没有……”悠真哭着否认，但身体深处传来的强烈快感和正在体内疯狂抽插的性器，让她的否认苍白无力。

正在侵犯她的人，似乎因为铃音的话而受到了刺激，动作猛地变得更加粗暴，冲撞的力度大到几乎要把悠真从沙发上顶下去。粗重的喘息声在头顶响起，这一次，悠真隐约觉得……这喘息声，有点耳熟。

“啊……啊……慢点……太快了……啊！”悠真被顶得不断向前滑动，胸部摩擦着沙发扶手，乳头在粗糙布料和纱裙的摩擦下硬挺起来，带来额外的刺激。

“哥哥，猜猜看。”铃音的声音近在耳边，带着戏谑，“现在干你的人，是谁？”

悠真摇头，她不敢猜，也猜不到。

“给你个提示。”铃音的手顺着她的脊背滑下，停留在两人交合的部位，指尖轻轻拨开被撞击得不断翻开的阴唇，让侵入和退出的过程更加清晰可见，“这个人，你也认识哦。而且……你们做过类似的事情呢。”

认识？做过类似的事？

一个不可能的答案浮现在脑海。

不……绝对不可能……

但就在这时，侵犯她的人似乎到了极限。一声压抑的、闷闷的低吼从上方传来——那声音，虽然因为情欲而变形，但悠真绝不会认错！

是……是早川同学的声音？！

这个认知像一道闪电劈中了她。

早川同学？可是早川同学是……啊！药！那天她喝了药！她可以……

所以现在，正在用这根粗大肉棒疯狂侵犯她的，是早川理纱？！

震惊、荒谬、羞耻、以及一种难以言喻的……兴奋，混合在一起，冲击着悠真的神经。她的小穴因为这个认知而剧烈收缩，紧紧绞住了体内的性器。

“嗯……！”早川（如果真的是她）发出一声闷哼，抽插的动作出现了短暂的紊乱，随即变得更加狂野，仿佛要证明什么，或者掩盖什么。

“看来哥哥猜到了呢。”铃音轻笑，手指恶劣地按压着悠真阴蒂，“没错哦，就是早川同学。我邀请她来，一起‘教育’哥哥。怎么样，惊喜吗？”

惊喜？这是惊吓！但为什么……心脏跳得这么快？身体这么热？

早川同学……在用男人的东西……干我……

这个念头像最烈性的春药，让悠真本就敏感的身体更加亢奋。她开始主动向后迎合早川的撞击，臀肉拍打早川小腹的声音变得更加清脆响亮。

“啊……早川……同学……”她试探着，颤抖地叫出了这个名字。

体内的性器猛地一僵。

“果然，哥哥认出来了。”铃音的声音冷了几分，“就这么熟悉她的东西吗？连蒙着眼睛，被干了这么久，都能认出来？”

“我……我没有……”悠真慌乱地想解释，但早川突然加重力度的顶弄让她说不出完整的话。

“呜……啊……早川……慢……慢点……”

“不准叫她的名字。”铃音命令道，手指加重了按压阴蒂的力道，带来一阵尖锐的刺激，“现在干你的人，是我允许的‘工具’。哥哥只需要感受鸡巴，不需要知道是谁的鸡巴。叫我的名字。”

“可……可是……”悠真被前后夹击的快感逼得快要疯掉。体内的肉棒在疯狂抽送，阴蒂被铃音的手指残酷地玩弄，双重刺激下，高潮再次迅速逼近。

“叫我的名字。”铃音重复，语气不容置疑。

“铃……铃音……啊！”悠真哭着喊道，身体在早川的猛攻下剧烈颤抖。

“乖。”铃音奖励般地吻了吻她的后颈，但手指的动作并未放松，“继续叫。让早川同学听听，你在被她的鸡巴干的时候，叫的是谁的名字。”

这句话无疑是对早川的刺激。悠真感觉到体内的肉棒又胀大了一圈，抽插的速度和力度达到了新的巅峰，每一下都像是要捅穿她一般。早川的呼吸粗重得可怕，带着一种压抑的愤怒和……痛苦？

“铃音……铃音……啊……要去了……又要去了……”悠真在灭顶的快感中忘乎所以，高声哭喊着妹妹的名字，腰部疯狂地向后挺动，迎合着早川的侵犯。

“射在里面。”铃音对早川命令道，声音冰冷，“用你的精液，灌满我哥哥的子宫。让她怀上你的孩子……然后，我会每天当着你的面，把她肚子里的东西，用我的鸡巴操到流掉。”

这句残忍至极的话，成了压垮早川理智的最后一根稻草。

她发出一声近乎呜咽的低吼，死死抵住悠真身体最深处，开始猛烈喷射。滚烫的精液强劲地冲击着宫口，量多得超乎想象，悠真感觉小腹迅速鼓胀起来，被填满的饱胀感让她发出满足的叹息。

“啊……好多……灌满了……”她无意识地呢喃，小穴贪婪地收缩，榨取着每一滴。

早川的射精持续了很长时间。结束后，她没有立刻退出，而是伏在悠真背上，身体微微颤抖，呼吸紊乱。

铃音这才松开按压阴蒂的手。她走到早川身边，拍了拍她的肩膀。

“可以了，早川同学。第一轮‘协助惩罚’结束了。”铃音的语气恢复了平静，“去那边清洗一下，休息会儿。接下来，还有更精彩的。”

早川缓缓退出。又是一阵粘腻的水声，大量混合着精液和爱液的浊白液体从悠真无法闭合的穴口涌出，顺着大腿流下，浸湿了白色丝袜。

早川的脚步声有些踉跄地走向浴室方向。

悠真瘫软在沙发上，身体因为连续的高潮和内射而微微痉挛，大脑一片混沌。早川同学……真的来了……和铃音一起……惩罚她……

这时，铃音再次靠近。她用手指沾了一点从悠真体内流出的、早川的精液，抹在悠真的嘴唇上。

“尝尝看。”铃音说，“早川同学的精液，味道如何？”

悠真下意识地舔了舔嘴唇，咸腥的味道在舌尖化开。她点了点头，又摇摇头，说不出话。

“看来哥哥还挺喜欢。”铃音笑了，“那么，接下来……”

她将悠真翻了个身，让她仰躺在沙发上。然后，她分开悠真穿着白色丝袜的腿，将它们大大地拉开，固定在沙发扶手上。这个姿势让悠真门户大开，红肿湿润、不断流出精液的小穴完全暴露。

“第二轮‘协助惩罚’，要开始了。”铃音说，声音里带着一种残忍的兴奋，“不过这次，规则要变一下。”

她提高声音：“早川同学，准备好了吗？”

浴室方向传来水声停止的声音，然后是有些沉重的脚步声。早川走了过来，停在沙发边。

悠真虽然看不见，但能感觉到两道目光落在自己身上——一道冰冷而掌控，一道灼热而复杂。

“哥哥，接下来，我和早川同学会一起‘照顾’你。”铃音的手抚上悠真大腿内侧的丝袜，“但是呢，你依然不知道是谁在碰你。我们会交换位置，交换‘工具’。你要做的，就是感受，然后……”

她俯身，嘴唇贴着悠真的耳朵，一字一句地说：

“猜猜看，哪根鸡巴，是我的，哪根是早川同学的。如果猜错了……”

铃音没有说下去，但威胁的意味不言而喻。

悠真的心脏狂跳起来。一起？交换？这……这太……

没等她消化完，第一根肉棒已经抵了上来。这次，是抵在她的后穴入口。

那里刚刚被铃音开发过，还残留着不适和微微的肿胀感。冰凉的润滑剂被涂抹上去，然后，那根粗大的龟头开始缓缓挤入。

“呃……”悠真皱紧眉头，后穴被开拓的异物感依然鲜明。

肉棒进入得很慢，但很坚定，一点点撑开紧致的括约肌，向深处推进。直到整根没入。

然后，开始缓慢地抽插。

“啊……啊……”悠真适应着后穴被填充的感觉，这种被从后面进入的姿势，带来一种不同于正面的、更深的侵犯感。

这时，另一根肉棒抵在了她前面的小穴口。那里刚刚被早川灌满了精液，湿滑泥泞。龟头轻易地挤开红肿的阴唇，插了进去，和后面的肉棒形成了前后夹击之势。

“嗯啊——！”悠真猛地仰头，前后同时被填满的饱胀感几乎让她窒息。两根粗大的性器在她体内占据着不同的空间，偶尔会隔着一层薄薄的肉壁相互摩擦，带来一种难以形容的、仿佛整个盆腔都被占有的错觉。

前面的肉棒开始抽插，带动着她体内的精液发出咕叽咕叽的水声。后面的肉棒也配合着节奏，一进一出。

两根鸡巴，以不同的节奏和力度，同时侵犯着她的两个洞穴。

“啊……啊……不行了……太多了……啊……”悠真被干得神志不清，只能发出破碎的呻吟。身体像暴风雨中的小船，被前后夹击的快感浪潮抛起又落下。

她努力地想分辨。哪根是铃音？哪根是早川？

后面的那根，抽插的节奏更稳，更冷静，每一次都顶得很深，但不会刻意寻找敏感点，更像是在完成一项任务……是铃音吗？

前面的那根，则更加狂野，力度变化很大，有时温柔研磨，有时又猛地发起一阵暴风骤雨般的冲刺，龟头总是试图寻找她体内的敏感点摩擦……这是早川？还是说，这是铃音在故意模仿早川的风格？

她分不清。两根肉棒的感觉都很相似，尺寸都大得可怕，热度都灼人。在激烈的性事中，细微的差别被快感的洪流淹没。

“猜猜看，哥哥。”铃音的声音不知从哪个方向传来，带着笑意，“现在插在你小穴里的，是谁？”

悠真咬着嘴唇，犹豫了。

“我……我不知道……”

“猜错了的话，今晚就没有晚饭吃哦。”铃音轻松地说着惩罚内容，“而且，链子会缩得更短，让哥哥只能躺在床上。”

“是……是铃音……”悠真胡乱猜了一个。

前面的抽插突然停了下来。

“猜错了哦。”铃音的声音很近，仿佛就在她面前，“现在干你前面的，是早川同学。所以，惩罚成立。”

话音落下，前面的肉棒突然以加倍的力量和速度开始了冲刺，仿佛在发泄被认错的不满。而后面的肉棒则退了出去。

但紧接着，那根肉棒抵上了她的嘴唇。

“作为惩罚，用嘴好好伺候这根‘猜错了’的鸡巴。”铃音命令道，“这是早川同学的，还是我的呢？哥哥再猜猜看？”

粗大的龟头顶开她的牙齿，插入口腔。咸腥的味道弥漫开来。悠真被迫开始吮吸吞吐，但脑子还在混乱地思考——这根的味道，和刚才早川射在她嘴里的，有点像……但又好像有点不同……

她分不清，真的分不清。

口腔被侵犯的同时，前面的小穴依然在被猛烈地抽插。双重刺激下，她的意识越来越模糊，只能凭借本能反应，用舌头侍奉着嘴里的肉棒，用身体迎合着前面的侵犯。

“呜……嗯……”她被干得口水直流，精液和口水的混合物从嘴角溢出。

嘴里的肉棒在她卖力的口交下很快膨胀，然后在她口腔深处喷射。大量的精液灌满她的嘴巴，她被迫吞咽下去，喉结不断滚动。

射精后，肉棒退了出去。但紧接着，另一根肉棒又抵了上来——这次，是抵在她后穴。

“刚才后面没做完，继续。”一个声音说——是早川的声音！虽然刻意压低了，但悠真还是认出来了。

所以，刚才在她嘴里的，是铃音？

没等她理清，后穴再次被粗大的性器闯入。而同时，前面的小穴里，也换了一根肉棒——这根抽插的风格又变了，更加绵长持久，每一次深入都会停留片刻，研磨旋转……

乱了，全乱了。

两根肉棒开始交替着侵犯她的三个洞。有时候是前后同时，有时候是轮流进入同一个洞穴，有时候是口腔和后穴，有时候是小穴和口腔……她们似乎在玩一个交换身体的游戏，而悠真就是那个承载游戏的容器。

她已经被干得完全失去了思考能力，身体像一块融化的糖，随着每一次撞击而变形。高潮一次次袭来，有时是前面，有时是后面，有时是前后夹击下的双重高潮。精液被灌进她的嘴巴、小穴、后穴，混合着她的爱液，弄得满身狼藉。白色的纱裙早已被各种液体浸湿，变得透明，紧贴在身上，勾勒出身体的轮廓。白色的丝袜也沾满了污渍，蕾丝吊袜带歪斜地挂在大腿上。

她不再试图去猜谁是谁了。只是沉浸在无止境的快感中，呻吟，哭喊，哀求更多。

“啊……啊……不管是谁……都好……干我……用力干我……”

“鸡巴……好棒……插烂我……啊……”

“射……都射给我……灌满我……”

她说着淫荡的话语，身体主动迎合着每一次侵犯，像一个不知餍足的肉欲容器。

不知过了多久，就在她觉得自己快要被彻底玩坏的时候，一次前后同时的、极其深入的贯穿，将她送上了前所未有的一次高潮。

“啊啊啊啊啊——！！！”

她尖叫着，身体绷成一道弓，前后两个洞穴同时剧烈痉挛，爱液混合着之前被灌入的精液大量喷涌。几乎在同一时间，体内的两根肉棒也开始猛烈喷射，滚烫的精液从前后的入口同时灌入，将她的小腹撑得圆润鼓起。

她被灌得翻着白眼，几乎晕厥过去。

射精持续了很久。当两根肉棒终于退出时，悠真像一具被掏空的人偶，瘫在沙发上，只有胸脯还在剧烈起伏。粘稠的白浊从她前后两个无法闭合的洞口不断涌出，在沙发和她的身下积成一滩。

寂静弥漫开来，只有三人粗重的喘息声。

过了好一会儿，铃音的声音响起：“早川同学，去清理一下。然后，你可以走了。”

早川的脚步声有些沉重地走向浴室。

铃音则留在悠真身边。她解开悠真脚踝上的锁链——只是暂时解开，然后抱起瘫软的她，走向浴室。

在温热的水流下，铃音再次仔细地清洗她的身体，将里里外外的精液都清理干净。动作依然不算温柔，但带着一种事后的慵懒。

清洗完毕，擦干，换上干净的睡衣——这次是保守的长袖长裤。眼罩依然没有取下。

铃音抱着她回到床上，重新扣上脚链。然后，她在悠真身边躺下，将她搂进怀里。

“今天的惩罚，结束了。”铃音在她耳边轻声说，手指抚摸着她的头发，“哥哥今天表现得……很精彩。虽然猜错了，但看在你后来那么淫荡的份上，晚饭还是会给你的。”

悠真累得说不出话，只是往铃音怀里缩了缩。

“早川同学的精液，好吃吗？”铃音突然问。

悠真沉默了一会儿，轻轻点了点头。

铃音笑了，胸膛震动。“看来哥哥真的很喜欢被两个女人用鸡巴干呢。前后夹击的感觉，很好吧？”

悠真没有否认。身体残留的快感告诉她，那感觉……确实好到让人恐惧。

“以后，说不定还会有更多‘客人’。”铃音的声音变得缥缈，“如果哥哥一直这么不乖的话。所以，要听话，知道吗？”

悠真颤抖了一下，更紧地贴近铃音。

“睡吧。”铃音吻了吻她的额头，“明天……又是新的一天。”

悠真在铃音的怀抱和脚踝锁链的冰凉触感中，沉入了黑暗的睡眠。

而此刻，浴室里，早川理纱站在镜子前，看着镜中那个面色苍白、眼神空洞的自己。她腿间的男性器官已经消失，变回原本的女性模样，但那个地方残留的粘腻感和身体的疲惫，提醒着她刚才发生的一切。

她参与了。
她侵犯了悠真。
她射精了。
她……和铃音一起，把悠真当成了共同的肉便器。

一种深沉的自我厌恶和扭曲的快感交织在一起，让她几乎呕吐。但与此同时，心底那个黑暗的角落，却在为能够再次“拥有”悠真，哪怕是这种扭曲的、共享的方式，而感到一丝可悲的满足。

她拧开水龙头，用冰冷的水冲洗着脸。

门外，是那个囚禁着悠真的房间。
门内，是她已经开始崩坏的灵魂。

夜还很长。
而游戏，似乎才刚刚升级。
`,Jc=Object.freeze(Object.defineProperty({__proto__:null,default:Fc},Symbol.toStringTag,{value:"Module"})),Kc=`---
order: 16
---

# #16 项圈、四肢与“汪”

黑暗持续了三天。

不是时间意义上的三天——窗外的光线透过眼罩边缘的缝隙，依然规律地明暗交替，提示着晨昏。但悠真对时间的感知，已经在这片彻底的、被掌控的黑暗中变得模糊而破碎。眼罩再没有被取下过，仿佛她的视觉功能已经成了一种不被需要的、甚至危险的奢侈品。

脚踝上的锁链长度经过了一次调整。第二天早上铃音微笑着告诉她“因为昨天猜错了，这是惩罚的一部分”后，链子缩短到了仅允许她在床和床边地毯范围内活动。去不了窗边的沙发，去不了衣柜，甚至连独立走到浴室门口都变得勉强。大部分时候，她只能坐在床上，或者躺在床边的地毯上，听着房间里各种细微的声响，猜测铃音在做什么，猜测现在是白天还是夜晚。

进食、饮水、排泄，所有生理需求都在这个半径内被解决。铃音准备了精致的便壶和痰盂，甚至有一个可移动的小型洗浴盆。清洁工作由铃音亲自完成，动作细致得像在擦拭珍贵的瓷器，但那种彻底的无助和被摆布感，比任何粗暴的对待都更深刻地侵蚀着悠真的自我边界。

第三天下午，当铃音再次解开她睡衣的扣子，用温热的湿毛巾擦拭她身体时，悠真已经不再下意识地瑟缩或试图遮掩。她只是静静地坐着，微微抬起手臂，配合着毛巾的移动。皮肤暴露在微凉的空气中，乳尖因刺激而微微挺立，但她心里几乎没什么波澜。

“哥哥越来越乖了。”铃音的声音带着赞许，手指抚过她锁骨下方一处新鲜的吻痕——那是昨天“惩罚游戏”留下的，参与者依然包括早川，方式依然是蒙眼下的交替侵犯和猜谜，而悠真依然没有完全猜对。“习惯了黑暗，习惯了锁链，习惯了被随意触摸……真好。”

悠真没有说话，只是轻轻颤动了一下睫毛。眼罩下的黑暗是她唯一熟悉的世界，锁链的冰凉触感是唯一恒定的坐标。至于触摸……是的，习惯了。无论是铃音日常的清洗护理，还是那些激烈性事中的粗暴把玩，这具身体似乎已经不再属于她自己，而是一个供人使用、评价、并随意留下印记的物体。

“今天晚上，会有新的‘课程’。”铃音擦完她的后背，开始为她涂抹身体乳，茉莉花的清淡香气弥漫开来。“早川同学也会来。这次的主题是……‘驯化’。”

驯化？悠真心底滑过一丝本能的寒意，但很快就被一种麻木的顺从覆盖。还能怎么样呢？反抗没有意义，哭泣只会招来更过分的对待，甚至连沉默都可能被解读为消极抵抗而引发“矫正”。她只能接受，无论是什么。

“哥哥不好奇吗？”铃音的手指滑到她小腹，轻柔地打着圈，“不好奇会被‘驯化’成什么样子？”

“……好奇。”悠真低声回答，这是铃音喜欢的——对施加于自身的一切表现出某种程度的“参与感”，哪怕是恐惧的参与。

“会告诉哥哥的。”铃音为她穿上一件新的丝质睡裙，同样是轻薄透明的材质，长度只到大腿中部。“不过，在课程开始前，需要先做一些准备工作。”

准备工作包括一顿比平时更简单的晚餐——流质的营养粥，由铃音用勺子一口一口喂给她。然后是口腔清洁，铃音用柔软的指套牙刷仔细刷洗她的每一颗牙齿，甚至检查了她的喉咙。最后，是灌肠。

这个过程已经不再陌生。铃音会准备好温度适宜的生理盐水，用专门的器具轻柔地注入她的后庭，然后等待一段时间，让她将肠道彻底排空。起初的羞耻和不适已经逐渐被一种空洞的洁净感取代。悠真知道，这是为了在接下来的性事中，后穴能够被使用得更彻底，更“干净”。

当这一切都完成后，铃音让她平躺在床上。锁链的长度刚好允许这个姿势。

“现在，放松，哥哥。”铃音的声音很近，她的手抚摸着悠真的头发，“接下来我要给你戴上一个新的‘装饰品’。可能会有点凉，但很快你就会习惯的。”

新的装饰品？悠真还没来得及思考，就感到一个冰凉柔软的皮质物体，圈住了她的脖颈。

项圈。

宽约两指的黑色皮革，内侧似乎衬着柔软的绒面，贴合着喉部的皮肤。铃音在后方调整着搭扣，发出细微的金属咔哒声。项圈被扣紧，不松不紧，刚好能让她感受到一种持续的、温和的束缚感，吞咽时喉结会摩擦到内侧的皮革。

然后，一个更小的、冰凉的东西被挂在了项圈的前方。是个铃铛？悠真轻微地动了一下脖子，果然听到清脆的“叮铃”声。

“很合适。”铃音满意地说，手指摩挲着项圈的边缘，“从现在开始，这就是哥哥的‘新身份’的一部分了。要好好戴着，永远不能自己摘下来，明白吗？”

悠真点了点头，项圈随着动作发出轻微的声响。

“光点头可不行。”铃音的手轻轻拍了拍她的脸颊，“这种时候，要用声音回应。说‘是，主人’。”

悠真的身体僵硬了一瞬。主人？这个称呼……

“说。”铃音的声音沉下几分，带着不容置疑的压力。

“……是，主人。”声音干涩，微不可闻。

“大声点，清晰点。”铃音命令。

“是，主人！”悠真提高声音，屈辱感让脸颊发烫，但项圈的存在无时无刻不在提醒她此刻的处境。

“很好。”铃音奖励般地吻了吻她的额头，“记住这个称呼。在接下来的‘课程’里，我和早川同学，都是你的‘主人’。而你……”

她的手指顺着项圈下滑，划过悠真的胸口，停留在她平坦的小腹上。

“是我们共同饲养、调教的小宠物。一只需要学习规矩，学习服从，学习如何取悦主人的……小母狗。”

小母狗。

这三个字像烧红的烙铁，烫在悠真残存的羞耻心上。她不由自主地颤抖起来，比被锁链锁住、被蒙住眼睛时更甚。这是一种更深层次的、对人格的剥夺和重塑。

“怕了？”铃音感觉到她的颤抖，低笑出声，“别怕，哥哥。只要你乖乖听话，学会做一只好狗狗，主人会对你很好的。会给你食物，水，还有……”

她的手滑到悠真腿间，隔着薄薄的睡裙布料，轻轻按压已经有些湿润的部位。

“……让你舒服的‘奖励’。”

悠真咬住下唇，身体却因为那轻微的按压而泛起细小的战栗。恐惧和一种扭曲的期待交织在一起。

就在这时，门铃响了。

悠真浑身一紧。有人来了？这个时间？

“啊，是早川同学到了。”铃音的语气轻松平常，仿佛来的只是一位普通的访客。“正好，让她看看哥哥戴上新项圈的样子。”

脚步声远去，然后是开门声，隐约的交谈声。另一个熟悉的、带着些许犹豫和压抑情绪的脚步，跟随着铃音走进了卧室。

早川同学……又来了。

悠真下意识地想把脸转向声音来源，但又强迫自己保持不动。她能感觉到一道目光落在自己身上，聚焦在她脖颈的项圈上。那目光带着复杂的温度——震惊、痛苦，或许还有一丝……被压抑的兴奋？

“怎么样，早川同学？”铃音的声音响起，“我给哥哥选的新装饰，还不错吧？黑色很衬她的皮肤，铃铛的声音也很清脆。”

早川沉默了几秒，才开口，声音有些低哑：“……嗯。很合适。”

“不止是装饰哦。”铃音走近床边，悠真感觉到床垫微微下陷，铃音坐了下来。“这是‘身份标识’。从今天起，哥哥就是我们两个人的小宠物了。早川同学也同意了，对吧？”

“……对。”早川的回答简短，带着一种认命般的沉重。

“那么，课程现在开始。”铃音拍了拍手，语气变得轻快而富有仪式感，“第一课：姿势。”

她的手放在悠真的肩膀上，轻轻向下施加压力。

“来，哥哥，从床上下来。到地毯上来。”

悠真顺从地挪动身体，在锁链允许的范围内，慢慢从床边滑下，双脚落在柔软的地毯上。丝质睡裙的下摆滑到大腿根部，她赤足站着，微微低着头。

“不对哦。”铃音的声音带着纠正的意味，“宠物狗是怎么站的呢？”

悠真愣住了。宠物狗……怎么站？

“看来哥哥还不明白。”铃音叹了口气，然后对早川说，“早川同学，示范一下？”

早川似乎也僵了一下，但很快，悠真听到衣料摩擦的声音，似乎是早川蹲了下来，然后……

“四肢着地。”早川的声音很近，就在她面前的地面上，平静无波，但仔细听能察觉一丝紧绷。“手掌和膝盖支撑身体，背部放平，抬头。”

示范？早川同学在……四肢着地？

这个认知让悠真更加混乱。

“看到了吗，哥哥？”铃音的手按在悠真背上，微微用力，“像早川同学示范的那样，趴下来。手掌和膝盖着地。这就是你以后在主人面前，最基础的姿势。”

屈辱感如同海啸般袭来。四肢着地……像狗一样趴着……

“快点。”铃音的声音冷了一度。

悠真颤抖着，缓缓弯下腰，双手先撑在地毯上。粗糙的纤维摩擦着掌心。然后，她屈起膝盖，跪了下来。这个姿势让她臀部翘起，睡裙的下摆完全无法遮盖任何东西，下身完全暴露在微凉的空气中，也暴露在两位“主人”的视线下。项圈因为低头的姿势而显得更加突出，铃铛随着她的动作轻响。

“头抬起来。”铃音命令，“宠物在接受主人指令时，要抬起头，看着主人——哦，抱歉，哥哥看不见。那就面向声音的方向。”

悠真艰难地抬起头，虽然眼前只有黑暗。她能感觉到两道目光，像实质般落在她身上，审视着她这屈辱的姿态。

“很好。”铃音似乎走开了一下，很快回来。悠真听到一种轻微的“嗡嗡”声，然后感觉到一个冰凉光滑的环状物，套在了她右手的手腕上。接着是左手，左脚踝，右脚踝……四个环，材质似乎是某种硬质塑料，内侧有柔软的衬垫，紧密但不勒人。然后，铃音开始调整锁链——原来脚踝上的锁链被解开，重新连接到了这四个环上？不，不止……

“为了让哥哥更好地保持姿势，需要一点点辅助。”铃音解释着，悠真感到手腕和脚踝被某种有弹性的带子向后拉去，迫使她的手臂更加伸直，膝盖也维持着一个固定的角度。虽然不至于疼痛，但明显限制了她的动作自由，让她只能维持这个四肢着地的趴跪姿势。

“现在，试着动一动，哥哥。”铃音说。

悠真尝试移动右手，发现只能在小范围内抬起或移动，无法将手收回到身前。脚也一样。她像一只被固定了姿态的标本，只能微微晃动身体，或者转动脖颈。

“完美。”铃音满意地说，“这样就不会偷懒或者乱动了。早川同学，你觉得呢？”

“……很好。”早川的声音依然很近，她似乎还维持着那个示范的姿势？或者只是蹲在一边看着？

“那么，第二课：回应。”铃音在悠真面前的地毯上坐下——悠真能从声音方向和气息判断出来。“作为宠物，当主人叫你的名字，或者发出特定的指令时，你需要及时回应。现在，你的名字不再是‘悠真’或者‘哥哥’，而是‘小白’。白色的睡裙，白色的皮肤，很适合，对吧？”

小白……一个宠物的名字。

“来，试试。”铃音拍了拍手，“小白。”

悠真张了张嘴，喉咙像被堵住了。屈辱感让她几乎窒息。

“小白。”铃音重复，声音里带上了警告。

“……汪。”一声微弱得几乎听不见的、从喉咙深处挤出来的声音。

“声音太小了，而且不标准。”铃音的语气冷下来，“早川同学，你觉得该怎么纠正？”

短暂的沉默。然后，早川的声音响起，比刚才更低沉，也更……稳定，仿佛下定了某种决心：“需要……强化训练。不正确的回应，应该受到惩罚。”

“同意。”铃音说，“那么，惩罚由早川同学来执行吧。让她记住，该怎么叫。”

早川靠近了。悠真能闻到她身上那股清冷的雪松香水味，混合着一丝不易察觉的、类似金属的气息（是那药水吗？）。一只手——是早川的手，手指纤细但有力——抓住了悠真后脑的头发，迫使她的头抬得更高，脸朝向前方。

“听好了。”早川的声音很近，热气喷在悠真耳廓，但语气是冷的，“当主人叫你‘小白’时，你要清晰、响亮地叫‘汪！’。像这样——”

早川自己发出了一声短促但清晰的狗叫声：“汪！”

那声音里的冷静和刻意，让悠真浑身发冷。

“现在，你来。”早川松开了她的头发，但手依然停留在她脑后，带着威胁的意味。

铃音再次拍手：“小白。”

悠真闭上眼睛——尽管这动作在眼罩下毫无意义。她深吸一口气，屈辱的泪水在眼眶里打转，但最终，求生欲和那早已被驯化的顺从占了上风。

“汪！”她叫了出来，声音比刚才大，模仿着早川示范的那种短促音调。

“好一点，但还不够好。”铃音评价道，“缺少热情。宠物看到主人，应该欢快地叫。再来，小白。”

“汪！汪！”悠真提高了音调，甚至试图让声音带上一点起伏，尽管她心里一片死寂。

“这次不错。”铃音似乎笑了，“奖励一下。”

奖励？悠真还没反应过来，就感觉到一根手指，带着湿滑冰凉的触感，抵在了她裸露的穴口。是润滑剂。然后，那手指开始缓慢地插入，在她紧致的后穴中浅浅抽送。

“呜……”悠真闷哼一声，身体下意识地绷紧。这个姿势下，后穴完全暴露，被侵入的感觉格外鲜明。

“放松。”早川的声音在另一边响起，她的手抚上悠真的背部，顺着脊柱下滑，“这是奖励。好好感受。”

两根手指在后穴中开拓着，动作不算温柔，但也不至于造成伤害。屈辱和生理刺激混杂在一起，让悠真的小穴也开始分泌出爱液，顺着大腿内侧滑下。

“看，身体很开心呢。”铃音的手指退出，带出一点润滑剂，然后轻轻拍了拍悠真的臀部，“记住，听话，就会有奖励。不听话……”

她没有说下去，但威胁的意味弥漫在空气中。

“第三课：移动。”铃音站了起来，“作为宠物，要学会根据主人的指令移动。现在，保持姿势，向前爬。”

爬？在这个被固定了四肢角度的状态下？

“试试看，小白。”早川的声音在旁边鼓励（或者说，督促），“用手肘和膝盖的力量。”

悠真尝试移动右臂，带动右肩，然后尝试挪动右膝。动作极其笨拙，而且因为手腕和脚踝的束缚，幅度很小。她像一只关节生锈的木偶，艰难地向前蹭了一小步。项圈的铃铛随着动作叮当作响。

“很好，继续。”铃音在前面引导着，“过来，小白，来我这里。”

悠真只能继续。一步，又一步。地毯的纤维摩擦着手肘内侧和膝盖的皮肤，带来轻微的刺痛。这个姿势耗力巨大，很快她就气喘吁吁，汗水从额角渗出，浸湿了眼罩边缘。

“停。”铃音在她面前不远处说。“现在，后退。”

后退比前进更困难。悠真几乎要摔倒，是早川在旁边适时地扶了一下她的腰，才稳住身体。

“不……不行……”悠真喘着气，手臂和膝盖都在发抖。

“可以的，小白。”早川的声音很低，手在她腰侧轻轻捏了捏，不知是鼓励还是警告，“慢慢来。”

最终，在早川半扶半推的帮助下，悠真勉强向后挪动了一小段距离。

“不错，虽然很笨拙。”铃音评价道，“需要多加练习。不过，在练习之前……”

她走开了片刻，回来时，手里似乎拿着什么东西。悠真听到塑料包装被撕开的声音，然后是一种奇特的、有点湿润的摩擦声。

“第四课：进食。”铃音说，“宠物的进食方式，也和人类不同哦。”

一个东西被放到了悠真面前的地毯上。是一个浅盘。然后，铃音抓着她的后颈，轻轻将她的头按低。

“不用手，直接用嘴。尝尝看，小白。”

悠真的脸几乎贴到了盘子上。她闻到了一股食物的味道——似乎是捣碎的肉泥混合了某种糊状物。温度适宜。

直接用嘴……吃？

最后的羞耻心在挣扎。但项圈的存在，四肢被束缚的无力感，以及身后两位“主人”沉默的注视，最终压垮了她。

她伸出舌头，试探性地舔了一下盘子里的食物。

咸的，带着肉味和土豆泥的绵软。味道并不差，但进食的方式让她胃部一阵翻搅。

“对，就这样。”铃音鼓励道，“舔干净。这是你今晚的食物。”

悠真闭上眼睛，开始像真正的动物一样，用舌头舔舐、卷取盘子里的食物。唾液和食物混合，发出细微的“啧啧”声。她吃得狼狈不堪，脸颊和鼻尖都沾上了食物碎屑。项圈的铃铛随着她头部的动作不断轻响。

早川在旁边静静地看着。她的呼吸有些沉重，手指无意识地蜷缩着。看着那个曾经让她心动、让她想要温柔对待的少女，此刻像狗一样趴在地上舔食，一种剧烈的、撕裂般的心痛和一种黑暗的、掌控般的快感在她心中激烈交战。但她没有动，也没有说话。她知道，一旦踏入这个房间，参与这场“驯化”，她就不能再回头，也不能再心软。这是她自己选择的道路，为了能够留在悠真身边，哪怕是以这种扭曲的方式。

当悠真终于将盘子舔得差不多干净时（边缘还有一些她实在舔不到的残渣），铃音拍了拍手。

“很好，吃得还算干净。接下来是饮水。”

同样是一个浅盘，被放在了食物盘旁边。里面是清水。

这次悠真没有太多犹豫，她凑过去，用舌头卷起水，或者直接将嘴唇贴到水面上吮吸。水花溅出了一些，打湿了她下巴周围的毛发和地毯。

“可以了。”铃音将水盘拿开，然后用一块湿毛巾，开始擦拭悠真脸上和颈部的食物残渣和水渍。动作依旧细致，仿佛在清洁一件物品。

“第五课，”铃音擦完后，声音里带上了一丝愉悦，“也是今晚的重点：标记与占有。”

悠真还没从刚才屈辱的进食中缓过来，就感觉到铃音和早川都靠近了。她们一左一右，蹲在她身体两侧。

“宠物需要被主人标记，才能明确归属。”铃音的手抚摸着悠真后颈的项圈，“而最直接有效的标记方式，就是从内到外，都染上主人的气味。”

早川的手则放在了悠真的腰臀连接处，指尖微微用力。

“今晚，我们会在你身上，留下更深的印记。”早川的声音低沉，带着一种压抑的兴奋，“用我们的方式。”

铃音首先行动。悠真听到她解开衣物、释放出那根熟悉性器的声音。然后，粗大滚烫的龟头，抵在了悠真早已湿润的后穴入口。那里刚刚被手指开拓过，依然柔软。

没有过多的前戏。铃音腰身一沉——

“噗嗤！”

“啊——！”悠真痛呼一声，身体向前冲了一下，又被早川按住。

铃音开始抽插。后穴被完全占据的感觉，在这个四肢着地的姿势下，带来一种更强烈的、被从后方征服的兽性感。每一次撞击都顶到极深，铃铛随着冲击激烈作响。

“嗯……哈……铃音……主人……”悠真被干得语无伦次，下意识地叫出了那个屈辱的称呼。

“乖狗狗。”铃音喘息着，动作加快，“就是这样……记住谁在干你……”

就在这时，早川也有了动作。她似乎也准备好了——空气中弥漫开那股特殊的、微甜微腥的气息，暗示着她腿间再次生长出了男性的器官。她调整了一下悠真的姿势，让悠真的臀部翘得更高，然后，那另一根硬热硕大的肉棒，抵在了悠真前方的小穴口。

那里早已泥泞不堪，爱液汩汩流出。

“不……后面……已经……”悠真惊慌地想并拢腿，但四肢被束缚着，根本无法做到。

“前后都要。”早川的声音带着不容置疑的坚决，腰身向前一送——

“呃啊——！！！”

两根粗大的性器，同时贯穿了前后两个紧致的洞穴。悠真感觉身体从中间被彻底劈开、填满，饱满到几乎要爆炸。子宫和后庭深处同时被顶到，带来一种灵魂出窍般的极致快感和痛苦。

“啊……啊……不行……太多了……撑……撑破了……”悠真哭喊着，身体像风中的落叶一样剧烈颤抖。这个姿势下，她完全无法逃避，只能承受着前后夹击的侵犯。

铃音和早川开始了配合。起初节奏有些混乱，但很快，她们找到了默契——当前面的肉棒深入时，后面的稍退；当后面的顶入时，前面的则抽出。两根性器以交替的节奏，在悠真的体内疯狂进出，将她变成一个被双向贯穿的、纯粹用于承受性欲的容器。

“噗嗤——噗嗤——啪！啪！”

粘腻的水声和肉体撞击声密集地响起，混合着悠真高亢的哭叫和喘息，还有项圈铃铛疯狂的叮当声。汗水、爱液、先走液混合在一起，弄湿了她身下的地毯，也弄湿了两位施虐者的身体。

“说，你是谁的小狗？”铃音在后面狠狠顶撞着，喘息着问。

“是……是铃音主人的……啊！”悠真尖叫。

“还有呢？”早川在前方猛地一记深顶，龟头碾过G点。

“是……是早川主人的……汪汪！”悠真被快感逼得胡言乱语，甚至无意识地又学了一声狗叫。

“乖，记住就好。”铃音的声音带着满意，“我们两个人的……小母狗。”

抽插越来越快，越来越重。悠真被前后夹击的快感推上了一个又一个高峰，却又总在即将彻底崩溃时被拉回。意识彻底涣散了，只剩下身体最本能的反应——收缩，迎合，渴求更深的填充和更猛烈的撞击。

“要……要去了……主人……小白要去了……”她哭着喊道，身体痉挛般地收紧。

“一起。”铃音低吼。

“射给你。”早川的声音也绷紧了。

两根肉棒同时抵死在她体内最深处，然后，滚烫的精液从前后两个方向，同时强劲地喷射进来，冲刷着子宫壁和肠道内壁。

“啊啊啊——！！！”

悠真发出近乎惨叫的高吟，身体绷成一道极致的弧线，前后两个洞穴同时剧烈痉挛，混合着被内射的极致快感，将她抛上了有生以来最猛烈的一次高潮。眼前甚至闪过一片白光，尽管她什么也看不见。

大量的精液被灌入，她的小腹以肉眼可见的速度鼓胀起来，像怀孕了一般。白浊混合着她的爱液，从前后两个无法闭合的、红肿的洞口不断溢出，顺着大腿流下，在地毯上积成一滩深色的水渍。

射精持续了很久。当两根肉棒终于缓缓退出时，悠真像被抽掉了所有骨头，彻底瘫软在地毯上，只有胸脯还在剧烈起伏，身体时不时地抽搐一下。精液仍在缓缓流出。

铃音和早川也喘息着，她们跪在悠真身体两侧，看着这只被她们共同“标记”和“驯化”的小宠物。悠真浑身湿透，睡裙皱巴巴地卷在腰间，身上布满汗水、精液和爱液的痕迹，项圈的铃铛随着她微弱的呼吸轻轻作响，黑色皮革在汗湿的皮肤衬托下格外刺眼。

过了好一会儿，铃音才起身，拿来了温水和毛巾。她和早川一起，开始清理悠真身上的狼藉。动作都算得上细致，但沉默弥漫在三人之间，只有水流声和布料摩擦声。

清理干净后，铃音解开了悠真手腕和脚踝上的辅助束缚，但项圈和连接在项圈上的短链（长度只够她稍微活动头部）依然保留。锁链也被重新连接回她的右脚踝，长度恢复到了之前的两米左右。

“今晚的课程到此结束。”铃音将虚弱不堪的悠真抱回床上，让她侧躺着。“小白表现得很好，虽然还有很多需要学习的地方。”

悠真累得连手指都动不了，只是发出了一声模糊的呜咽。

早川站在床边，看着床上那具苍白脆弱的身体，看着那黑色的项圈，眼神复杂。她伸出手，似乎想碰碰悠真的脸，但在半空中停住了。

“明天……”早川开口，声音沙哑，“还需要我来吗？”

“当然。”铃音微笑着，替悠真盖好薄被，“‘驯化’是一个长期的过程，需要两位主人的共同努力和一致性。明天同样的时间，欢迎早川同学再来。我们可以进行一些更‘进阶’的训练，比如……外出适应。”

外出？早川的瞳孔微缩。

“只是在院子里，当然，会做好‘安全措施’。”铃音补充道，手指绕着悠真项圈上的短链，“让小白适应一下不同的环境，学习在户外也保持规矩。”

早川沉默了片刻，点了点头。“……好。”

她最后看了一眼床上似乎已经昏睡过去的悠真，转身离开了卧室。

铃音送走早川，回到床边。她脱掉自己身上也有些凌乱的衣服，钻进被窝，从背后将悠真搂进怀里。手指抚摸着悠真脖颈上的项圈。

“晚安，小白。”她在悠真耳边轻声说，“我的小母狗。”

悠真在昏沉中，似乎又发出了一声细微的、梦呓般的呜咽。

窗外的月光被厚厚的窗帘挡住，只有一丝极微弱的光线渗入。

房间内，锁链、项圈、还有那尚未散尽的淫靡气息，共同构筑成一个坚固的囚笼。

而囚笼的中心，那只刚刚被烙上“宠物”印记的少女，在疲惫和残留的快感中，沉入了无梦的黑暗。

她的“人性”，正在这日复一日的“驯化”中，一点点被剥离、碾碎，然后按照主人的意愿，重新塑造成另一个模样。

夜晚还很长。
而明天，新的课程即将开始。
`,Gc=Object.freeze(Object.defineProperty({__proto__:null,default:Kc},Symbol.toStringTag,{value:"Module"})),qc=`---
order: 17
---

# #17 水牢、净罪与暗涌的欲望

锁链的长度经过又一次“调整”。

第四天清晨，悠真在熟悉的束缚感中醒来，尚未睁眼——或者说，尚未尝试在那永恒的黑暗下“睁眼”——便下意识地动了动右脚踝。冰凉的金属环依旧紧扣，但链子划过的弧度与长度感觉……似乎又有些许不同。比昨天允许的两米活动范围，似乎更短了一些。

她摸索着坐起，薄被从身上滑落，丝质睡裙贴着皮肤，带来微凉的触感。她试探性地向床边移动，脚趾触到地毯边缘时，锁链便传来了明确的阻力。她伸出手臂向前探，指尖勉强碰到床头柜的抽屉把手，再远就不行了。粗略估算，半径可能只有一米五左右。

一个以床为中心、更小的囚笼。

“哥哥醒了？”铃音的声音从门边传来，带着晨起特有的慵懒。脚步声靠近，床垫微微下陷。“喜欢你的新活动范围吗？昨晚‘小白’在睡梦中不太安分，总想往床边滚，为了安全起见，稍微缩短了一点。”

悠真沉默。她根本不记得自己睡梦中是否有过不安分。但这不重要，解释权从来不在她这里。

“今天有特别安排。”铃音的手指抚上她的脸颊，然后滑到脖颈，摩挲着那个从未被取下过的皮质项圈。“浴室课程。哥哥需要学习……如何在不同的环境下，都保持一只宠物应有的规矩和仪态。”

浴室？悠真的心微微提了起来。那个空间，意味着更多的水，更彻底的暴露，以及……某些并不久远却已感觉隔世的记忆。

“不过在那之前，需要先给哥哥换上适合‘课程’的服装。”铃音起身，走到衣柜方向，传来翻找衣物的悉索声。

很快，她回到床边。“来，抬手。”

悠真顺从地抬起手臂。冰凉的、滑腻的布料套过她的头顶，然后是收紧腰身、系上蝴蝶结的触感。上衣是短款的，布料挺括，领口系着领结。接着是裙子，非常短的百褶裙，布料轻飘飘的，刚被拉到腰间，下摆便只堪堪遮住大腿根部。裙子后面似乎还有调节扣，铃音在她身后摆弄了几下，让裙摆维持在一个极其微妙的高度。

最后，是一双袜子。不是之前的过膝丝袜，而是及膝的、带有条纹的棉质学生袜，顶端有松紧带。袜子被仔细地拉上，边缘卡在膝盖下方。

“好了。”铃音退后一步，似乎在欣赏。“很合适。经典的款式，清纯又可爱。可惜……”她的手指撩起悠真的裙摆，指尖刮过赤裸的腿根皮肤，“里面什么也没穿。这才是适合宠物的打扮，方便随时使用，不是吗？”

悠真身体僵直，眼罩下的脸颊发烫。这套衣服的款式她再熟悉不过，是标准的女高中生校服（JK服）。曾经属于她，但早已被她深藏在衣柜最底层，连同那段混乱的性别认知一起。如今，它被铃音翻找出来，以一种完全背离其原本意义的方式，穿在她被囚禁、被剥夺视力的身体上。

“走吧，小白。”铃音牵起她的手，引导她下床。“链子暂时解开，但项圈上的牵引绳会扣上。跟着我。”

右脚踝的锁环被解开，久违的、没有金属拖拽感的轻松只持续了一瞬。紧接着，脖颈项圈的前方传来轻微的拉扯力，一个类似狗绳扣环的东西被挂了上去。铃音握住了牵引绳的另一端。

“记住，走路要跟在我脚边，不能快也不能慢。”铃音下达指令，轻轻拉了一下绳子。

悠真被牵引着，迈开脚步。赤裸的脚底踩在微凉的地板上，短裙随着步伐轻轻晃动，布料摩擦着敏感的腿根。她看不见路，只能完全依赖脖颈上传来的牵引力方向和铃音的脚步声来判断。这种绝对的依赖和被动，让她感觉自己更像一件被搬运的物品，而非活人。

穿过卧室门，走过一小段走廊（她能通过脚下地板材质的变化和空间回声感知），然后进入了另一个空间。空气瞬间变得潮湿温暖，带着淡淡的沐浴露和瓷砖清洁剂的味道。是浴室。

这个浴室很大，是主卧附带的，悠真依稀记得里面有宽敞的淋浴区、一个大浴缸和足够的空地。此刻，她被牵引着向里走，脚下从地板变成了防滑垫。

“停在这里。”铃音说。

悠真停下。她听到铃音似乎在操作什么，有金属物件碰撞的轻响，还有液体流动的哗啦声。是在准备浴缸放水吗？

但接着，脖颈项圈上的牵引绳被解开了。取而代之的，是一个更坚硬、更冰凉的金属环，咔哒一声，扣在了项圈前端的D形环上。然后，那个金属环似乎被连接到了某个固定物体上，悠真感觉到一股向下的、固定的拉力，迫使她的头必须微微低垂，脖颈后方承受着一定的重量。

“这是热水调节器的阀门延伸杆。”铃音的声音从她侧上方传来，平静地解释，“我稍微改造了一下，加了个扣环。现在，你的项圈就拴在上面。杆子的长度是固定的，所以你的活动范围……仅限于以这个阀门为中心，半径大概五十厘米的扇形区域。而且，杆子的高度决定了你只能保持这个高度，无法完全站直，也无法坐下或躺下。最适合的姿势是……四肢着地，或者弯腰趴伏。”

悠真尝试着动了动。确实，脖子被固定在一个较低的点，她如果想减轻颈部的拉力，就必须弯下腰，降低身体重心。最终，她不得不再次摆出那个屈辱的“宠物”姿势——手掌和膝盖着地，趴在防滑垫上。短裙因为这个姿势而彻底失去了遮掩作用，裙摆向上滑到腰际，将整个臀部和大腿根部，以及其间毫无遮掩的私处，完全暴露在潮湿的空气中。学生袜包裹的小腿和膝盖抵在冰冷的瓷砖上。

“完美。”铃音赞叹，“这个姿势很适合你，小白。现在，让我们开始今天的课程——环境适应与清洁仪式。”

她走开了几步。悠真听到水龙头被拧开的声音，但不是浴缸的，而是花洒。水流冲击在瓷砖地上的声音，由远及近。

“首先，是彻底清洁。”铃音的声音伴随着水声靠近，“宠物在进入主人的生活区域前，必须保持干净。尤其是你，小白，昨天身上沾了那么多不干净的东西。”

话音刚落——

“嗤——！”

冰凉刺骨的水流，毫无预兆地冲击在悠真的后背上！

“啊——！”悠真惊叫一声，浑身剧烈地哆嗦起来。那水不是温的，是接近冷水的温度，在本身就微凉的浴室空气中，打在只穿着单薄JK服的她身上，寒意瞬间穿透布料，刺入骨髓。水流并不集中，而是散开的，像高压水枪的喷雾，冲刷着她的背部、臀部、大腿。

“好冷……铃音……主人……好冷……”她牙齿打颤，本能地想蜷缩躲避，但脖子被拴在调节杆上，活动范围极小，只能徒劳地扭动身体，像一条被钉住的鱼。

“冷就对了。”铃音的声音没有丝毫波动，她移动着花洒，让冰冷的水流冲刷悠真的侧腰、小腹，甚至故意让一部分水流溅到她裸露的腿间和乳房下方。“不干净的小狗，需要用冷水清醒一下，冲掉那些淫荡的气味和脏污的记忆。”

水流持续不断地冲击着。悠真很快被淋得浑身湿透。单薄的JK服白色上衣和深色格子裙紧紧贴在身上，变得半透明，勾勒出胸前小巧的隆起和腰身的曲线。布料吸水后变得沉重，冰冷地黏在皮肤上。学生袜也被溅湿，颜色变深，紧裹着小腿。她冷得瑟瑟发抖，皮肤上起了一层细密的鸡皮疙瘩，嘴唇失去血色。

“求求你……主人……停下……太冷了……”她啜泣着哀求，身体因为寒冷和持续的刺激而微微痉挛。

“这就受不了了？”铃音关掉了花洒。

突如其来的寂静中，只有悠真牙齿打战和水滴从她身上、衣服上滴落在地的“嘀嗒”声。她剧烈喘息着，呼出的气息在冰冷的空气中形成白雾。

“看来小白不仅不干净，还很娇气。”铃音放下花洒，脚步声靠近。她蹲在悠真面前，尽管悠真看不见，但能感觉到她的目光和气息。“需要更深刻的教训，才能记住保持清洁和顺从的重要性。”

铃音的手伸过来，没有触碰悠真冰冷颤抖的身体，而是握住了连接她项圈和调节杆的那段金属链。然后，她开始缓缓地、顺时针转动热水调节器的阀门。

“唔……”悠真立刻感到脖颈后方传来的拉力方向改变了。调节杆似乎被旋动了，迫使她的头部和上半身向着某个方向扭转。她不得不跟着调整四肢的位置，以缓解颈部的不适。

铃音转动的幅度不大，但很稳定。悠真像一只被拴在旋转木马上的小狗，被迫以阀门为中心，缓慢地在地上爬行、调整姿态。湿透的衣服黏在身上，冰冷而难受，每移动一下，粗糙的防滑垫都摩擦着膝盖和手掌的皮肤。

“就这样，转一圈。”铃音命令道，“让身体的每一面都接受过清洗和审视。”

屈辱、寒冷、以及这种被完全操控着移动的无力感，几乎将悠真淹没。她只能机械地跟着脖颈拉力的指引，在极其有限的空间里，艰难地完成了一次缓慢的“旋转”。湿漉漉的头发贴在脸颊和脖子上，水滴不断落下。

当她的姿势大概转回原位时，铃音停止了转动阀门。

“现在，稍微暖和一点吧。”铃音的声音里听不出什么情绪，她再次拿起花洒。

这一次，水流是温热的。

舒适的温度冲刷在冰冷僵硬的皮肤上，带来一阵战栗般的解脱感。悠真忍不住发出一声低低的呻吟，身体微微放松。温热的水流冲走了部分寒意，也冲走了皮肤上黏腻的不适感。铃音移动着花洒，仔细地冲洗她的后背、肩膀、腰臀、腿，甚至包括她被固定着无法躲避的私处。水温恰到好处，不烫不凉，是一种温柔的抚慰。

但这种温柔并未持续太久。

“干净的身体，才配接受主人的触碰和赏赐。”铃音一边冲洗，一边说道，“小白，你要记住，你的身体不属于你自己。它的清洁、它的状态、它何时可以感受舒适、何时必须承受惩戒，都由主人决定。你唯一的任务，就是接受，并为此感到感激。”

温热的水流中，铃音的手也探了进来。她撩开悠真湿透黏在身上的上衣下摆，手掌直接贴上她冰凉的后腰皮肤，然后缓缓上移，抚摸她的脊背，力道适中，带着一种评估和占有的意味。另一只手则顺着水流，滑过她的臀瓣，指尖偶尔擦过敏感的股缝和穴口边缘。

悠真在温热的水流和这带着明确意图的触摸下，身体渐渐回温，甚至……可耻地开始产生反应。寒冷过后的温暖格外诱人，而铃音的抚摸虽然不带情欲的温柔，却精准地撩拨着她被长期调教得异常敏感的身体。小腹深处泛起熟悉的暖流，腿间开始湿润，混合着温热的水流。

“哦？身体暖和过来，就又开始发情了？”铃音显然察觉到了她身体的变化，轻笑一声，手指恶劣地在她穴口周围打转，却不深入。“真是淫荡成性的小母狗。冷水都浇不灭你的欲望吗？”

悠真羞愧得无地自容，但身体却更诚实地微微向后挺动，迎合那若即若离的指尖。

铃音却没有满足她。她关掉了温水，拿过一条干燥宽大的浴巾，开始擦拭悠真的身体。从头发开始，到后背、手臂、腰臀、腿，动作算不上特别温柔，但很彻底，吸干了大部分水分。湿透的JK服没有被脱下，依然黏在身上，但表面的水被擦去后，不再那么冰冷沉重。

擦拭完毕后，铃音将浴巾扔到一边。她再次调整了一下热水调节器的阀门，悠真感到脖颈的拉力让她必须将头部抬得更高一些，背部也需要挺直一点，形成了一个更像引颈待戮的姿势。

“保持这个姿势，小白。”铃音拍了拍她湿漉漉的头顶，“我要去拿点东西。不许乱动，明白吗？”

“……明白，主人。”悠真哑声回答。

铃音的脚步声远去，离开了浴室，还带上了门。

一时间，浴室里只剩下悠真自己粗重未平的喘息，以及水滴从水管或她发梢偶尔滴落的细微声响。她被独自留在这个潮湿、温暖、充满她自身和铃音气息的空间里，脖子被拴在冰冷的金属杆上，以屈辱的姿态跪趴着，湿衣服黏腻地贴着皮肤，下身空虚地翕张。

孤独和等待放大了所有感官。她试图去听门外的动静，但只有一片寂静。时间在黑暗中缓慢流逝，每一秒都被拉长。身体的反应在孤独中并未消退，反而因为无人触碰而变得更加清晰难耐。腿间的湿滑感提醒着她方才的兴奋，而此刻的静止和空虚则成了一种变相的折磨。

不知过了多久，也许只有几分钟，也许有十几分钟，就在悠真开始感到脖子和膝盖有些酸痛时，浴室的门被轻轻推开了。

脚步声响起。

不是铃音。

这个脚步更轻，更迟疑，带着一种熟悉的、刻意收敛的气息。

早川同学？

悠真立刻绷紧了身体。铃音说过早川今天会来，但没想到是在这种情况下，独自进入浴室。

早川没有说话。她停在门口几秒，然后才慢慢走近。悠真能闻到那股清冷的雪松香水味，比以往更淡，似乎被水汽氤氲过，还夹杂着一丝……类似金属和血液的、极其微弱的腥甜气？是药水吗？她已经服用了？

早川在悠真面前停下。悠真虽然看不见，但能感觉到她的目光，像实质的火焰，灼烧着她湿透的、半透明衣物下裸露的皮肤，尤其是那毫无遮掩的臀部与腿间。

沉默在弥漫。只有早川略显急促的呼吸声，和悠真自己越来越快的心跳。

终于，早川动了。她缓缓地、极其轻微地伸出手，指尖颤抖着，触碰到了悠真湿漉漉的头发，顺着发丝滑到后颈，触碰到那个黑色的皮质项圈。她的手指摩挲着项圈的边缘，感受着其下的皮肤温度和脉搏跳动，动作很轻，带着一种近乎痛苦的珍惜。

然后，她的手向下，抚过悠真潮湿的JK服上衣背部，感受着布料下脊骨的形状。她的触碰比铃音更小心翼翼，带着一种探索和确认的意味，仿佛在触摸一件失而复得、却又注定无法真正拥有的珍宝。

悠真屏住呼吸，不敢动弹，也不知道该如何反应。早川的沉默和这种轻柔的触碰，比铃音直接的命令和惩戒更让她心慌意乱。她能感觉到早川指尖传来的细微颤抖，能感觉到那目光中饱含的、几乎要溢出来的复杂情绪——欲望、痛苦、怜惜、愤怒、占有欲……种种矛盾的情感交织在一起，形成一种沉重的压力，笼罩着悠真。

早川的手继续向下，抚过悠真的腰侧，来到臀部。她的手指描摹着臀瓣的曲线，隔着湿透的裙子布料，感受着其下的柔软和温热。然后，她的指尖探入了臀缝，轻轻划过那微微张合、依然湿润的穴口边缘。

“嗯……”悠真忍不住发出一声细微的呜咽，身体敏感地一颤。

这声呜咽似乎刺激了早川。她的呼吸猛地一窒，手指停顿了一下，随即，动作不再那么小心翼翼。她撩起了悠真早已失去遮蔽作用的裙摆，让那湿滑红肿的私处完全暴露在她眼前。她的目光如有实质，灼烧着那个部位。

悠真感到一阵强烈的羞耻，下意识地想并拢腿，但这个姿势和项圈的束缚让她根本做不到。

早川的指尖再次触碰上来，这次更直接，更用力。她分开那湿滑的唇瓣，指腹按压揉弄着敏感的阴蒂，带着一种压抑的、却越来越失控的力道。

“啊……”悠真低吟，身体不由自主地向前拱起，却又被脖子上的束缚拉回。快感混合着羞耻和困惑席卷而来。早川同学……为什么独自进来？铃音知道吗？她是要……

早川没有给她答案。她的另一只手也加入了，一只手继续蹂躏着前面的花核，另一只手则探向后穴的入口。那里因为之前的灌肠和姿势而微微松弛，早川沾着前穴爱液的手指，轻易地挤入了一根，然后缓缓抽送。

“呜……早川……主人……”悠真混乱地叫着，身体在前后夹击的刺激下开始颤抖。早川的动作虽然带着生疏和压抑的粗暴，却异常地精准，很快找到了能让她失控的点。

早川依然沉默，只是呼吸越发粗重滚烫，喷在悠真颈后的皮肤上。她的手指在后穴中进出得越来越快，另一只手揉搓阴蒂的力道也加大，指甲偶尔刮过，带来尖锐的刺激。

悠真被这沉默而激烈的侵犯弄得晕头转向，快感迅速堆积。她开始无意识地摇晃臀部，迎合着早川手指的动作，嘴里溢出断断续续的呻吟。

“哈啊……早川主人……手指……好舒服……再深点……”

她的迎合和呻吟似乎彻底点燃了早川一直压抑的东西。早川猛地抽出了手指。

布料摩擦声，金属搭扣解开声，还有……某种硬物膨胀、摩擦衣料的细微声响。

悠真心中警铃大作。这个声音……是早川同学……她用了药？现在，她要……

下一秒，一个滚烫、坚硬、尺寸惊人的柱状物体，取代了手指，抵在了她湿漉漉的后穴入口。龟头粗大，带着粘滑的先走液，充满威胁性地研磨着那个紧致的入口。

“不……后面……早川主人……不要……”悠真惊慌地摇头，后穴被进入的记忆伴随着些许不适涌上心头。

早川没有理会她微弱的抗拒。她一只手牢牢扣住悠真的腰，另一只手扶着自己勃发的性器，腰身用力向前一顶——

“呃啊——！！！”

粗大的肉棒强行挤开括约肌，长驱直入，直抵肠道深处。被强行开拓的胀痛感让悠真眼前发黑，但紧随其后的，是那熟悉的、被彻底填满的饱胀感和逐渐升腾的快意。

早川开始抽插。一开始是缓慢的、试探性的，似乎还在克制。但很快，节奏就变得猛烈起来。她仿佛要将所有无法言说的情绪——对铃音安排的屈从，对自身欲望的厌恶，对悠真扭曲的爱恋，以及那种深不见底的占有欲——全部通过这最原始的撞击发泄出来。

“噗嗤！噗嗤！啪！啪！”

肉体撞击的声音在浴室的墙壁间回响，混合着肠道内粘腻的水声和早川压抑的低喘。她每一次退出都几乎全根抽出，再狠狠贯穿到底，撞得悠真身体不断前冲，脖子上的项圈和金属链绷紧，勒得她有些窒息。

“啊……啊……太深了……早川主人……慢一点……”悠真哭喊着，身体却违背意志地更加贴合早川的撞击，内壁贪婪地收缩吮吸着那根狂暴的肉棒。

早川的沉默让这场性事显得格外诡异和激烈。她没有命令，没有羞辱的话语，只有沉重的呼吸、压抑的闷哼，和越来越失控的力道。她像一头被困住的野兽，在唯一可以发泄的出口处疯狂冲撞。

她的一只手绕到前面，粗暴地揉捏悠真隔着湿透上衣的乳房，另一只手则死死掐着悠真的腰胯，留下深深的指痕。她的嘴唇贴在悠真后颈项圈上方的皮肤，不是亲吻，更像是啃咬，留下湿热的痕迹和轻微的刺痛。

快感在疼痛和粗暴中飞速累积。悠真被干得神志不清，只能被动地承受着这沉默的、却充满爆发力的侵犯。后穴被摩擦得火热，前列腺的刺激让她前面也渗出更多爱液，滴落在地。

“要……要去了……早川主人……小白要去了……”她尖声哭叫，肠道剧烈收缩。

早川的抽插在这一刻达到顶峰，她喉咙里发出一声类似呜咽的低吼，将悠真死死按向自己，胯部紧贴，肉棒深深埋入最深处，开始剧烈喷射。

滚烫的精液一股股冲击着肠道内壁，量多得惊人。悠真被内射得浑身痉挛，前面也达到了高潮，爱液喷溅而出。她被前后同时的高潮淹没，意识陷入一片空白的狂潮。

早川的射精持续了很长时间，仿佛要将自己掏空。结束后，她没有立刻退出，而是伏在悠真汗湿的背上，身体微微颤抖，沉重的喘息喷在悠真耳边。

过了许久，她才缓缓退出。粘稠的白浊混合着肠液，从悠真无法闭合的后穴汩汩流出，顺着大腿滴下。

早川退后两步，整理衣服的声音有些慌乱。她似乎站在原地看了悠真几秒，那目光复杂难言。然后，她快步走向门口，打开门，离开了。

浴室里再次只剩下悠真一人，和满室情欲过后更加浓郁的气味。她瘫软在防滑垫上，脖子依旧被拴着，身体还在高潮的余韵中轻微抽搐，后穴饱胀，不断有精液流出。湿透的JK服凌乱不堪，身上布满了早川留下的指痕和咬痕。

早川同学……刚才那是……发泄？趁铃音不在的时候？为什么？

困惑、疲惫、以及一种更深沉的、关于自身处境的虚无感，笼罩了她。

没过多久，浴室门再次被打开。这次是铃音。

她走进来，似乎对空气中残留的气息和悠真身上的狼藉毫不意外。她手里拿着一个托盘，上面似乎放着一些东西。

“看来早川同学已经提前来‘预习’过了。”铃音的语气平淡，走到悠真身边，蹲下，用手指沾了一点从悠真腿间流下的、混合着白浊的液体，放在鼻尖闻了闻。“嗯，味道很浓。她倒是挺卖力。”

悠真无力回答。

铃音将托盘放在一边，拿起一条新的湿毛巾，开始清理悠真身上的污渍。她先擦拭了悠真的后穴和大腿，然后将她稍稍扶起一点，擦拭前面和腹部。动作依旧程序化。

清理到一半时，铃音停了下来。她拿起托盘里的一个东西——是一个宠物用的、硅胶材质的肛塞，尺寸中等，顶端有较细的颈部和一个膨大的底部，底部还连着一个可爱的、毛绒绒的白色小狗尾巴。

“为了防止精液流得到处都是，也为了提醒小白时刻记得自己的身份。”铃音将肛塞涂满润滑剂，然后对准悠真仍然微微张开的后穴，缓缓推了进去。

冰凉的异物感让悠真哼了一声。肛塞被完全推入，膨大的底部卡在入口处，细长的白色小狗尾巴垂在她臀缝间，随着她的呼吸轻轻晃动。

“很可爱。”铃音评价道，然后拿起托盘上的另一个东西——是一个同样硅胶材质、但中空的前庭锁。形状类似贞操带的前半部分，只有一个很小的孔洞，被设计成只能允许极少量液体渗出，但绝对无法容纳任何手指或性器进入。铃音将它扣在了悠真湿润红肿的阴部，调整好位置，咔哒一声锁上，钥匙被她收起。

“这里也要锁好。在主人允许之前，不准再随便流水，更不准被其他东西碰到。”铃音拍了拍那冰凉的前庭锁，“当然，必要的清洁孔还是有的。”

最后，铃音解开了连接项圈和热水调节杆的金属链。但项圈依然戴着。她将虚弱无力的悠真抱起来，用浴巾裹住。

“今天的浴室课程暂时结束，小白。”铃音抱着她向外走去，“你表现得……很‘生动’。尤其是早川同学来的时候。不过，没有主人的允许，擅自‘接待’其他访客，即使是另一位主人，也算是不太规矩。所以，今晚没有晚饭了。好好反省吧。”

悠真将脸埋在铃音肩头，精疲力竭，连委屈的力气都没有了。身体前后被异物堵塞的感觉异常鲜明，小狗尾巴的存在更是无时无刻不在嘲笑她此刻的身份。

她被抱回卧室，重新戴上脚链。湿透的JK服被脱下，换上了干燥的睡裙。但项圈、肛塞、前庭锁，都被保留了下来。

铃音将她放在床上，盖好被子。

“睡吧，小白。”铃音吻了吻她的额头，“明天，或许该学习一些户外课程了。总待在房间里，对小狗的身心健康可不好。”

悠真在身体的酸痛、异物感、以及深入骨髓的疲惫中，陷入了昏迷般的睡眠。

梦中，她仿佛被无尽的冷水冲刷，又仿佛被滚烫的欲望填满。脖颈上的项圈越来越重，尾巴在身后摇啊摇。

而浴室的阴影里，早川理纱靠在墙上，听着卧室门关上的声音，缓缓滑坐在地。她低下头，看着自己空空如也的腿间（药效已过），和微微颤抖的、曾经用力掐住悠真腰身的手指。一滴滚烫的液体，毫无预兆地滴落在冰冷瓷砖上。

是汗，还是别的什么？

她不知道。只知道心里那个空洞，在刚才那场沉默的侵犯后，非但没有被填满，反而撕裂得更大，呼啸着寒冷的、自我憎恶的风。

夜还长。
水汽未散。
锁链与项圈，在月光照不到的角落，泛着冷硬的光。`,Wc=Object.freeze(Object.defineProperty({__proto__:null,default:qc},Symbol.toStringTag,{value:"Module"})),Yc=`---
order: 18
---

# #18 晨露、项圈与并行的足迹

清晨五点半，天空是一种浑浊的深蓝色，像被稀释的墨水，边缘泛着病态的青灰。整个住宅区沉睡在一种过度寂静里，连惯常的早鸟鸣叫都显得稀疏怯懦。空气冰凉潮湿，带着泥土和植物腐败的微腥，钻进鼻腔，刺激着黏膜。

悠真被这陌生的空气惊醒，或者说，是被脖颈处传来的、不同于以往的牵引力惊醒。项圈还在，但连接的不是床柱或某个固定家具，而是一条更长的、坚韧的尼龙牵引绳。绳子的另一端握在铃音手中，她早已穿戴整齐，站在床边，脸上带着一种近乎朝圣般的平静神情。

“早安，小白。”铃音的声音压得很低，在寂静的房间里却异常清晰。“今天天气很好，适合第一次户外适应课程。”

户外？悠真的心脏猛地一缩，残余的睡意瞬间烟消云散。眼罩下的黑暗似乎变得更加厚重压抑。她下意识地蜷缩了一下身体，却立刻感到臀部后面那个毛绒绒的尾巴扫过大腿——肛塞还在。下身前庭锁冰凉的触感也时刻提醒着她自身的处境。

“不用怕。”铃音似乎察觉到了她的恐惧，手指梳理着她睡乱的长发，“时间还早，不会有人看见。而且，我们只是在院子范围内活动。来，换上衣服。”

今天准备的“衣服”更加简单到近乎侮辱。一件宽大的、长及大腿中部的白色男士衬衫，布料柔软但轻薄。没有内衣，没有裤子，衬衫下摆堪堪遮住臀部，但只要稍一动作，就会露出腿根和那截可笑的白色狗尾巴。学生袜换成了及踝的短棉袜，同样白色。铃音甚至在她脚踝套上了两个柔软的、带有蓬松白色短毛的脚环，模拟小狗的脚踝毛发。

“这样更像了。”铃音满意地打量着她，然后将牵引绳的长度调整到大约两米。“记住，出去之后，你就是一只名叫小白的小狗。要保持安静，紧跟在我脚边，服从每一个指令。明白吗？”

“……明白，主人。”悠真的声音干涩发抖。衬衫下空荡荡的冰凉感，和暴露在空气中的腿，让她极度不安。

铃音打开卧室门，牵引绳微微收紧。悠真被迫从床上下来，赤脚踩在微凉的地板上，跟着铃音的牵引，蹒跚地走出房间，穿过客厅。她能感觉到脚下的地面从木地板变成更冰凉坚硬的大理石（玄关），然后，铃音停了下来，打开了通往室外的门。

一股更加清冽、饱含晨露气息的空气扑面而来，瞬间包裹住她。那是一种与室内截然不同的、广阔而陌生的冰凉。她忍不住打了个寒颤，赤裸的腿和脚趾暴露在户外的低温中，皮肤瞬间绷紧。

“来。”铃音率先走下台阶。悠真被她牵引着，小心翼翼地迈出第一步。赤脚底接触到的是粗糙湿润的户外地砖，冰冷坚硬，硌得脚心生疼。她努力跟上铃音的步伐，但看不见路，只能依靠牵引绳的拉力和对铃音脚步声音的判断。短袜很快被露水打湿，冰凉地贴在脚踝上。

她们似乎走在一条石板小径上。周围很安静，只有风吹过树叶的沙沙声，远处偶尔有极轻微的车辆驶过声。但这份安静反而让悠真更加恐惧。任何一点意外的声响——邻居的开门声、晨跑者的脚步声、甚至是鸟雀突然的惊飞——都足以让她心脏停跳。

她被牵引着，深一脚浅一脚地走着。衬衫下摆随着步伐不断晃动，大腿和后臀时隐时现，尾巴在身后轻轻摇摆。每一次感觉到微风拂过腿间，她都羞耻得想立刻死去。前庭锁的存在感在户外变得更加鲜明，冰凉的金属紧贴着最敏感的部位，是一种无声的、残酷的禁锢宣告。

铃音走得不快，似乎在欣赏晨景，或者是在评估她的“宠物”在陌生环境下的表现。她没有说话，只是偶尔轻轻调整牵引绳的力度或方向，引导悠真避开可能的花坛边缘或小台阶。

就在悠真逐渐被寒冷、恐惧和持续的羞耻折磨得有些麻木时，铃音停了下来。

“早川同学，你很准时。”铃音对着前方某个方向说道。

早川同学？她也来了？在外面？悠真的身体瞬间僵硬。

“嗯。”早川的声音从几米外传来，同样压得很低，带着清晨的沙哑和一种紧绷。“需要我……做什么？”

“跟着我们一起散步就好。”铃音的语气轻松，“观察，适应，必要时协助纠正小白的行為。毕竟，你也是她的主人之一。”

脚步声靠近，是早川。她停在了悠真的另一侧。悠真能感觉到她的目光，比室内更加直接，更加无所顾忌地落在自己身上——落在单薄衬衫下隐约的轮廓上，落在晃动的下摆和裸露的腿上，落在那截随着她紧张而微微颤抖的白色狗尾巴上。

沉默再次降临。三个身影在微明的晨光中站立。铃音牵着绳子，姿态从容。早川站在一旁，身影有些僵硬。而被项圈和绳子束缚的悠真，低着头，赤脚站在冰冷潮湿的地面上，瑟瑟发抖。

“走吧，继续。”铃音再次迈开脚步。

这一次，散步的队伍变成了三人。铃音走在前面偏左，牵引着悠真。早川沉默地跟在悠真右侧略后方，像一个监督者，又像一个同谋。

每一步都像是踩在刀尖上。悠真的全部注意力都集中在保持平衡、跟随牵引、以及感知周围可能的风险上。对早川注视的羞耻感，被更庞大的、对暴露和被发现的恐惧所覆盖。她像惊弓之鸟，任何一点风吹草动都让她肌肉紧绷。

她们似乎绕过了主屋，来到了侧院一片相对开阔的草坪附近。草叶上的露水更重，悠真赤脚踩上去，冰凉湿滑，草尖搔刮着脚底和脚背。

“在这里停一下。”铃音说。

悠真停下，不安地站着。她能感觉到草地的湿气正透过薄薄的短袜向上蔓延。

“小白，坐下。”铃音下达指令。

坐下？在湿漉漉的草地上？穿着这件……悠真犹豫了。

“坐下。”铃音重复，声音微冷。

悠真慢慢地、极其别扭地屈膝，试图在不弄脏衬衫（虽然这很可笑）的前提下，坐在地上。臀部接触到冰冷潮湿的草地时，她忍不住瑟缩了一下。衬衫下摆因为这个动作而向上缩起，大腿根部几乎完全暴露，尾巴也被压在了身下。早川的呼吸声似乎滞了一瞬。

“手，放在前面。”铃音继续命令。

悠真将双手放在并拢的膝盖上，这个姿势让她看起来更加拘谨和……像一只被训练中的狗。

“早川同学，”铃音转向早川，“你觉得，小白在户外环境下的服从性如何？”

早川沉默了几秒，似乎在观察。“……紧张。动作僵硬。对指令反应不够迅速。”

“分析得很到位。”铃音点头，“紧张是因为对环境陌生，也是因为心里还残留着不必要的羞耻和恐惧。这需要更多的暴露和习惯。至于反应速度……”她顿了顿，“可能需要一点及时的‘纠正’来加强记忆。”

铃音走到悠真面前，蹲下身。悠真虽然看不见，但能感觉到她近距离的注视和气息。

“小白，站起来。”

悠真慌忙想站起来，但坐姿不便，加上紧张，动作有些笨拙迟缓。

就在她刚刚撑起身体，还未完全站直时，铃音突然毫无预警地，将手中一直拿着的一个小东西——似乎是一个装了少量冰水的便携喷雾瓶——对准悠真裸露的大腿内侧，按下了喷嘴。

“嗤——”

细密冰凉的雾状水珠喷洒在敏感的腿根皮肤上。

“呀！”悠真惊叫一声，腿猛地一软，差点又坐回去，本能地向后躲闪。

“不准动。”铃音的声音冰冷，手按住了她的肩膀。“这只是冷水。对于反应迟钝、注意力不集中的小狗，一点轻微的感官刺激是必要的提醒。”

说着，她又喷了几下。冰水落在皮肤上，迅速带走热量，带来一阵阵刺骨的寒意和战栗。悠真咬紧牙关，不敢再躲，只能僵硬地站着，忍受着腿根处传来的冰凉刺痛和深入骨髓的羞耻。水珠甚至有一些溅到了前庭锁上，金属变得更加冰凉。

早川在一旁看着，手指蜷缩在身侧。她的目光紧紧盯着那被冰水刺激得微微发抖的苍白大腿，盯着水珠滚落的痕迹，盯着那若隐若现的、被衬衫下摆半遮半掩的私处轮廓。一种混合着痛楚和灼热的情绪在她胸腔里翻腾。

“现在，重新来。”铃音收起喷雾瓶，“小白，坐下。”

这一次，悠真几乎是立刻就坐了下去，动作快得甚至有些狼狈。潮湿的草地再次浸湿了她的臀部和尾巴。

“很好。”铃音语气缓和了一些，“记住了吗？服从要迅速、准确。任何犹豫都会带来不愉快的结果。”

她站起身，对早川说：“早川同学，你也可以试试。主人需要建立一致的权威。”

早川的身体明显僵硬了。她看着坐在地上、微微发抖的悠真，看着她腿上未干的水渍，看着她脖颈上黑色的项圈和那截可笑的尾巴。几秒钟的沉默像几个世纪一样漫长。

最终，早川缓缓走上前，在悠真面前停下。她伸出手，指尖带着清晨的凉意，触碰到了悠真的下巴，轻轻将她的脸抬得更高一些，迫使她“面朝”自己。

“小白，”早川开口，声音比她自己预想的还要沙哑低沉，“听好了。”

悠真屏住呼吸。

“我……”早川的指尖微微颤抖，但语气却努力维持着平静和命令感，“也是你的主人。我的指令，同样需要立刻、无条件地服从。明白吗？”

“……明白，早川主人。”悠真低声回答。

“现在，”早川收回手，退后一步，“站起来，走到我面前。”

悠真立刻依言站起，凭着声音和感觉，小心翼翼地向前迈了两小步，停在早川面前不足一米的地方。她能闻到早川身上那股清冷的香水味，混合着户外晨露的气息。

早川看着她。看着这个曾经让她心动、让她想要温柔守护的少女，如今穿着男人的衬衫，戴着项圈和狗尾巴，像一只受训的宠物般站在自己面前，因为寒冷和恐惧而微微战栗。心脏像被一只冰冷的手攥紧，但与此同时，另一种黑暗的、掌控的满足感，却也在隐秘的角落滋生。

她伸出手，不是触碰悠真，而是从自己的外套口袋里，拿出了一个东西。

是一个项圈。与悠真脖颈上那个相似的黑色皮质项圈，但更细一些，内侧似乎也衬着柔软的绒面。

“作为你的主人之一，”早川的声音很轻，却带着一种奇异的重量，“我也需要留下我的标记。”

她走近一步，手指拂开悠真颈后的长发，然后将那个细一些的项圈，套在了悠真原有项圈的上方，紧紧相贴。两个黑色的皮质环并列在悠真纤细的脖颈上，锁扣的金属扣闪烁着微光。

“这是我的。”早川扣好项圈，指尖划过那崭新的皮革边缘，低声说，像是在宣誓，又像是在说服自己。“以后，看到这两个项圈，你就要同时想起两位主人。你的归属，是双重的。”

悠真感觉到脖子上又多了一层束缚，并不紧勒，但存在感极其鲜明。双重的项圈，双重的归属，双重的……枷锁。她微微颤抖，却说不出任何话。

铃音在旁边静静看着，脸上露出一丝难以捉摸的微笑，似乎对早川的“主动宣示主权”感到满意。

“很好。”铃音走上前，再次握紧了牵引绳，“标记完成。接下来，是今天的重点训练项目——并行跟随。”

她将牵引绳稍微放松了一些，然后对早川说：“早川同学，你走在她另一侧。不需要绳子，但你需要用声音和手势引导她，让她习惯同时跟随两位主人的步调和方向。我们从简单的直线行走开始。”

早川点了点头，走到悠真的左侧。现在，悠真被夹在了中间。

“小白，注意听。”铃音说，“我和早川主人会同时给出前进的指令。你需要保持在我们中间，步伐一致，方向笔直。准备好了吗？”

“……准备好了。”悠真深吸了一口冰凉的空气。

“那么，开始。前进。”

铃音和早川几乎同时迈步。悠真被中间的绳子牵引着，也赶紧迈步。她努力想跟上两人的速度，但看不见，只能依靠牵引力和两侧的脚步声来判断。一开始还算顺利，但很快问题出现了——铃音和早川的步幅和频率并非完全一致。铃音的步伐更从容稳定，早川的则略显迟疑和僵硬。夹在中间的悠真很快感到了混乱，步伐变得踉跄，身体微微左右摇晃，试图同时迎合两侧那微妙的差异。

“集中注意力，小白。”铃音的声音从右边传来，同时轻轻拉了一下绳子纠正方向。

“看着前面……不，感受中线。”早川的声音从左边传来，她似乎伸出手，虚扶在悠真左臂附近，引导她。

悠真头晕脑胀。她就像走在一条看不见的、两边拉力不断微调的钢丝上。草坪的地面并不完全平坦，偶尔有小小的起伏或石子，赤脚踩上去带来意外的触感，进一步干扰了她的平衡。

“方向偏了，向左一点。”早川说。

“速度，保持匀速。”铃音提醒。

悠真努力调整，但顾此失彼。在一次试图同时应对两侧指令时，她的左脚绊到了一簇稍高的草，身体猛地向前一倾。

“啊！”她低呼一声，眼看就要摔倒。

两双手同时伸了过来。右边是铃音，抓住了牵引绳和她的右臂；左边是早川，扶住了她的左肩和上臂。她被稳稳地架住，没有真的跌倒在潮湿的草地上。

然而，这个突如其来的失衡和两人的扶持，让她的衬衫下摆彻底滑了上去，堆积在腰间。整个臀部、后腰，以及那截白色的狗尾巴，完全暴露在清晨微凉的空气中，也暴露在两侧“主人”的视线之下。

时间仿佛凝固了一瞬。悠真僵在原地，羞耻感如岩浆般喷发，烧毁了所有思绪。她能感觉到铃音和早川的目光，如同探照灯，灼烧着她裸露的皮肤。

铃音率先松开了手，但早川扶着她左肩的手，却似乎停顿了更久一些，指尖甚至无意识地收紧，掐进了她的皮肉。

“站稳。”早川的声音极其低沉，然后松开了手。

悠真慌乱地伸手去拉衬衫下摆，手指颤抖。

“不用遮。”铃音平静地阻止了她，“就这样。记住这个感觉，小白。记住当你不能完美服从、失去平衡时，会暴露什么，会处于何种境地。这有助于你集中精神。”

悠真的手僵在半空，然后无力地垂下。衬衫下摆依旧堆在腰间，后半身完全裸露。晨风毫无阻碍地吹拂着臀部和腿根，冰冷刺骨。尾巴可怜地耷拉着。

“继续。”铃音下令，再次迈步。

这一次，悠真几乎是凭着本能和强烈的羞耻心在行走。她将全部精神集中在双脚、牵引绳和两侧的脚步声上，努力忽视身后那一片冰凉的暴露感。她走得异常专注，甚至有些僵硬，但步伐却奇迹般地稳定了不少，能够更好地协调两侧的牵引和指引。

她们在草坪上缓慢地走着直线、曲线，甚至绕着小圈。铃音和早川偶尔会交换指令，测试她的反应。悠真像一台被输入了复杂程序的机器，努力地执行着。寒冷、羞耻、恐惧、还有一丝可悲的、想要做好以获得“认可”的念头，驱使着她。

不知走了多久，天空的深蓝渐渐褪去，染上了一层更浅的灰蓝色。远处开始有零星的人声和车辆启动声传来。这个世界正在苏醒。

铃音终于停下了脚步。

“可以了。第一次户外适应，到此为止。”她的声音里听不出太多情绪，“总体来说，及格。但需要改进的地方还很多。”

她将牵引绳交到早川手中。“早川同学，你带她回房间。我处理点事情。”

早川接过了绳子，指尖与铃音的短暂触碰，冰凉。

铃音转身离开了，脚步声很快远去。

现在，只剩下早川和悠真。清晨的光线又亮了一些，虽然悠真看不见，但能感觉到温度的微弱变化。她依旧站在那里，衬衫下摆未拉下，浑身冰冷，疲惫不堪。

早川握着绳子，没有立刻动作。她看着悠真。看着那苍白皮肤上被晨风激起的细密疙瘩，看着那两道刺眼的黑色项圈，看着那截垂在裸露臀缝间的、可笑的白色狗尾巴。看着这个人，这个曾经让她觉得美好而遥远的存在，此刻如此破碎、如此屈辱地站在她面前，由她手中的一根绳子所掌控。

一阵强烈的冲动涌上心头——她想扔掉绳子，想用外套裹住她，想带她逃离这里，想擦掉她身上所有的耻辱印记……但她没有动。她知道，自己做不到。她早已深陷其中，成为这屈辱结构的一部分，甚至……是主动的参与者。

她慢慢地、极其轻微地，收紧了手中的绳子，将悠真向自己拉近了一小步。

悠真顺从地挪动脚步。

早川抬起另一只手，指尖颤抖着，抚上了悠真脖颈上那崭新的、属于她的项圈。皮革的触感，其下脉搏的跳动，温热皮肤的颤抖……这一切都如此真实。

然后，她的手指顺着脊椎，缓缓下滑，划过裸露的后腰，来到尾椎骨上方，轻轻捏住了那截狗尾巴的根部，微微提起，又松开。尾巴晃动了一下。

悠真浑身一颤，发出一声极轻的呜咽。

这声呜咽像一根针，刺破了早川心中某种紧绷的东西。她的呼吸猛地急促起来，眼中迅速积聚起一层薄薄的水光。但她迅速眨了眨眼，将那不合时宜的湿润逼了回去。

“……回去吧。”早川的声音沙哑得几乎破碎。她牵着绳子，转身向主屋方向走去。步伐比来时更加沉重。

悠真跟在她身后，依旧赤脚，衬衫下摆飘荡，尾巴摇晃。每一步都留下一个潮湿的脚印在渐干的草地上。

她们沉默地走回屋内，穿过客厅，回到那个熟悉的卧室。早川解开了牵引绳，但项圈都没有取下。她看着悠真站在原地，浑身冰冷，不知所措的样子。

“去浴室，把自己弄干。”早川最终说道，语气恢复了某种程度的平静，但带着深深的疲惫。“铃音……主人回来之前，收拾好。”

悠真点了点头，凭着记忆，摸索着向浴室走去。早川没有跟进去，只是站在卧室门口，看着她踉跄的背影消失在浴室门内。

早川靠在门框上，仰起头，闭上眼睛。清晨户外的一幕幕在她脑海中闪回——那苍白颤抖的身体，那刺眼的项圈和尾巴，那冰水喷洒时惊惶的双眼，那失去平衡后完全暴露的屈辱……还有自己为她戴上第二个项圈时，心中那撕裂般的痛楚和扭曲的满足。

她抬起手，看着自己刚才握过绳子的掌心，那里似乎还残留着尼龙粗糙的触感和牵引另一端的重量。然后，她缓缓握紧了拳头，指甲深深掐进肉里。

浴室里传来隐约的水声。

早川知道，自己已经无法回头了。项圈已经戴上，不仅是悠真脖颈上的，也是她自己心上的。她被困在了这个由铃音构建、她也自愿踏入的黑暗庭院里，和那只被她们共同命名为“小白”的宠物一起。

而庭院之外，天光正一寸寸变得明亮，照常升起。`,Qc=Object.freeze(Object.defineProperty({__proto__:null,default:Yc},Symbol.toStringTag,{value:"Module"})),Xc=`---
order: 19
---
# #19 制服、课堂与融化于课桌下的春潮

星期一的清晨，阳光穿透稀薄的云层，以一种近乎残忍的澄澈度，洒在通往私立清和学园的林荫道上。空气中飘散着樱花的残香与新鲜修剪过的青草气息，制服整齐的学生们或步履匆匆，或三两结伴，低声谈笑，流动着属于青春校园特有的、略带躁动的宁静。

在这片流动的深蓝色（男生）与藏青色（女生）制服海洋中，一个身影显得有些特别，又奇异地和谐。

樱井悠真——在学园官方记录和绝大多数同学认知中，依然是“他”——穿着男生标准的深蓝色立领制服，外套熨帖地勾勒出略显单薄但比例优美的肩线，扣子一丝不苟地扣到最上面一颗。白色衬衫的领子挺括，露出纤细的脖颈。下身是合身的深灰色长裤，裤腿笔直，落在擦得光亮的黑色皮鞋上。最引人注目的是那头柔顺的、泛着健康光泽的齐肩短发，发尾微微内扣，几缕碎发不经意地拂过白皙的额角和耳廓。没有刻意打理，却有一种自然清爽的俊秀。

“他”微微低着头，背着黑色的皮质书包，独自走在人群边缘。阳光在“他”精致的侧脸轮廓上投下柔和的阴影，长而密的睫毛在眼睑下形成一小片扇形的阴翳。鼻梁挺直，嘴唇是淡淡的樱粉色，此刻轻轻抿着。无论从哪个角度看，这都是一张漂亮得有些过分的、介于少年与少女之间的面孔，带着一丝不易察觉的、玻璃器皿般的易碎感。

许多目光有意无意地掠过“他”。有女生假装和朋友说话时偷偷瞥来的、带着羞涩和好奇的眼神；也有男生故作自然地看过来，视线在“他”脸上停留片刻，又快速移开，耳根微红。在清和学园，樱井悠真——这个成绩优异、样貌出众、性格似乎有些安静孤僻的“男生”——一直是不少人暗中关注甚至恋慕的对象。尽管“他”几乎从不参与社团活动，放学后也总是立刻回家，但那份独特的、中性而洁净的美感，以及笼罩在“他”身上那层淡淡的、令人想要探究的忧郁气息，反而增添了“他”的魅力。

没有人知道，此刻这具包裹在整齐制服下的身体，正在经历着什么。

也没有人知道，“他”微微泛红的耳尖和偶尔轻颤的睫毛，并非出于羞涩或春日微寒，而是源于身体深处一阵阵难以抑制的、酥麻滚烫的电流。

悠真努力维持着表面的平静，每一步都走得异常谨慎。皮鞋踏在石板路上发出规律的轻响，但只有她自己知道，这规律的步伐是多么艰难地维持着。

因为，在笔挺的制服长裤之下，在她柔软的小腹下方，一个冰凉的、小巧的金属物件，正紧密地贴合着最敏感的部位。那是今早铃音亲手为她扣上的——一个最新型号的远程可控按摩器，卵形，尺寸恰好，表面光滑，被仔细地推进她早已湿润的穴口深处，顶端抵着宫颈口，底部则卡在入口处，由一根极细的、几乎看不见的硅胶线与她穿着的特制“内裤”相连。这条所谓的“内裤”，更像是一片带有磁吸扣的柔软硅胶垫，覆盖住前庭，将按摩器牢牢固定在内，同时，在对应阴蒂的位置，有一个微小的、带有细密凸起的圆形硅胶片，此刻正紧紧压在那个已经微微挺立的脆弱珍珠上。

而控制终端，分别握在铃音和早川的手中。

早川理纱走在她左前方大约两三米的位置，穿着女生标准的藏青色西装外套和格子百褶裙，步伐稳健，背脊挺直，手里拿着几本书，看起来只是一个端庄优等生的模样。只有悠真知道，早川插在外套口袋里的那只手上，正握着一个伪装成口红形状的微型遥控器。

铃音则不见踪影，但悠真确信，她一定在学校的某个地方，通过早川实时共享的监控画面（藏在早川领结上的微型摄像头）观察着，并且，也握有另一个控制器。

此刻，按摩器处于最低档的、持续的轻微震动模式，像一群细小的蚂蚁，在她体内最深处不停爬搔，带来一种持续而磨人的酸痒感。阴蒂上的刺激则是间歇性的微弱电流，每一次划过，都让她大腿内侧的肌肉难以察觉地收紧。

她必须集中全部意志力，才能控制住呼吸的平稳，才能不让双腿发软，才能维持脸上那副平静（甚至有些冷淡）的表情。春日的微风拂过脖颈，带来些许凉意，却吹不散皮肤下逐渐升腾的热度。她能感觉到自己脸颊和耳根在发烫，只能努力将脸侧向一边，希望没有人注意到。

走进教学楼，换上室内鞋。每一次弯腰，每一次抬腿，都让体内的异物感更加鲜明，也让她心惊胆战，生怕那细微的硅胶线或自己异常的姿势引起怀疑。

“早安，樱井君。”同班的女生从旁边走过，红着脸小声打招呼。

“早。”悠真微微颔首，声音刻意压低，显得有些冷淡，以此掩饰喉咙可能出现的颤抖。她不敢多说，快步走向自己的教室——二年级B组。

早川的教室在隔壁A组。在走廊分开时，早川状似无意地回头看了她一眼，目光平静，但悠真却仿佛读出了一丝深藏的、灼热的期待。

教室里的气氛一如既往。悠真走到靠窗倒数第二排自己的座位坐下，将书包放进抽屉。这个位置相对隐蔽，窗外是茂盛的樱花树，此刻已是绿叶满枝。她松了口气，稍微放松了一点紧绷的身体。

然而，这口气还没完全吐出——

“嗡————”

体内那持续的低频震动，毫无预警地骤然加强！变成了清晰有力的、规律性的脉冲震动，每一下都精准地撞击在宫口和腔内最敏感的那一点上。同时，阴蒂上的刺激也陡然升级，细微的电流变成了持续的、令人头皮发麻的酥麻。

“唔……！”悠真猛地咬住下唇，将差点逸出的呻吟死死堵在喉咙里。她放在课桌下的双手瞬间攥紧，指甲深深掐进掌心。身体不受控制地向前弓起，又强迫自己靠回椅背。一股热流从小腹深处涌出，她甚至能感觉到穴口收缩了一下，更多的爱液分泌出来，浸湿了固定按摩器的硅胶垫。

是谁？铃音？还是早川？她们开始了……在教室里！

悠真低下头，假意从抽屉里拿书，额前的碎发垂落，遮掩住她瞬间泛红的脸颊和开始迷蒙的眼睛。她能感觉到自己的呼吸变得急促，胸口在制服衬衫下轻微起伏。必须忍住……绝对不能被发现……

任课老师走了进来，是国语课的古川老师，一位严肃的中年女性。课堂开始，讲解古典文法。

悠真努力将注意力集中在黑板和课本上，但身体内部的骚动却像越来越汹涌的潮水，不断冲击着她摇摇欲坠的理智。按摩器的脉冲模式在不断变化，时而急促如鼓点，时而缓慢研磨，每一次变化都让她浑身一颤。阴蒂上的刺激更是花样百出，时而持续按压，时而快速轻触，时而又加入一种奇异的旋转感。

她紧紧并拢双腿，试图夹紧来缓解那种空虚又过载的刺激，但这个动作反而让按摩器在体内陷得更深，顶到更微妙的位置。快感如同细微的藤蔓，从被持续折磨的穴心和阴蒂蔓延开来，缠绕上她的脊椎，爬上她的后颈，让她的头皮一阵阵发麻。

脸颊越来越烫，不用看也知道一定红得不成样子。眼睛里不受控制地蒙上一层水汽，视线开始模糊。她只能用力眨眼，试图看清黑板上的字，但那些汉字仿佛都在跳动、扭曲。握着笔的手指微微发抖，在笔记本上划出的字迹都有些歪斜。

“樱井同学？”古川老师突然点名。

悠真浑身一僵，猛地抬起头。全班的目光瞬间聚集过来。

“请你解释一下，刚才讲到的这个助动词的接续用法。”古川老师推了推眼镜，看着她。

悠真的大脑一片空白。刚才老师讲了什么？她一个字也没听进去。身体内部的震动还在持续，甚至因为她的紧张而变得更加敏感。她能感觉到又一股热流涌出，腿根处一片湿滑黏腻。

“我……”她张了张嘴，声音干涩，带着一丝难以掩饰的颤抖。

就在这时——

“嗡——！”体内的震动突然停止了。阴蒂上的刺激也瞬间消失。

突如其来的空虚和中断，让她几乎脱力地松了半口气，但随即是更强烈的、未被满足的渴望和焦躁。

“对、对不起，老师，”悠真借着这短暂的清明，努力回忆着，勉强答出了一个接近正确的答案，但声音依旧不稳，“……大概是这样。”

古川老师皱了皱眉，似乎觉得她状态不对，但也没多说什么，示意她坐下。

悠真瘫坐在椅子上，后背惊出一层冷汗，心脏狂跳。是铃音或早川在帮她解围？还是只是……暂时停止，为了更残酷的后续？

果然，就在她惊魂未定之时，新的刺激模式开始了。不再是强烈的脉冲，而是一种极其缓慢、却深入骨髓的旋转和研磨。按摩器像有了生命一般，在她体内最柔软脆弱的地方画着圈，每一次旋转都带来一种酸胀的、被彻底玩弄的愉悦。阴蒂上的刺激也变成了温柔却持久的抚慰式震动，像羽毛轻轻搔刮，痒到心里去。

这种慢性的、持续不断的快感折磨，比刚才剧烈的脉冲更难忍受。它不给你痛快，只是不断累积，将你悬吊在情欲的悬崖边，不上不下。悠真感觉自己的身体越来越热，制服衬衫里面已经出了一层细汗，黏腻地贴在皮肤上。双腿间更是泥泞不堪，爱液不断分泌，她甚至怀疑会不会渗透过裤子和硅胶垫，在椅子上留下痕迹。

她将发烧的脸颊贴在冰凉的课桌面上，试图降温，但收效甚微。眼神涣散地看向窗外，绿叶在阳光下摇晃，光影斑驳，她却仿佛看到了铃音微笑的脸，或者早川凝视她的、深不见底的眼眸。

时间变得粘稠而缓慢。每一分每一秒，都是甜蜜的酷刑。

下课铃响起的瞬间，体内的所有刺激戛然而止。

悠真如同虚脱般，趴在课桌上，急促地喘息着，浑身软得没有一丝力气。制服后背已经被汗水浸湿了一小片。脸颊的红潮尚未褪去，眼睛湿漉漉的，嘴唇被自己咬得嫣红微肿。

“樱井君，你没事吧？脸好红，是不是发烧了？”坐在前排的女生关心地回过头。

“没、没事……”悠真连忙摇头，声音沙哑，“可能有点闷……”

她不敢多留，趁着课间休息，拿起水杯，逃也似的离开了教室，走向楼层尽头的卫生间。她需要冷静一下，也需要检查一下是否……泄露。

女生卫生间里没有人。悠真冲进一个隔间，锁上门，背靠着冰冷的门板，剧烈地喘息。她颤抖着手，解开裤子的纽扣和拉链，将手探进去。指尖轻易地触碰到那片湿透的硅胶垫，冰凉滑腻，饱含着她分泌的爱液。按摩器依旧深深埋在里面，安静着，像一枚蛰伏的炸弹。

她羞耻地闭上眼。自己竟然在课堂上，在那么多同学和老师面前，被遥控着达到了那种状态……虽然没有真正高潮，但身体已经被挑逗到极致，每一寸神经都记得那被完全掌控、肆意玩弄的感觉。

休息时间很短。她勉强整理好自己，用冷水拍了拍脸，对着镜子看了看。镜中的“少年”眼含春水，面若桃花，嘴唇红肿，一副刚刚被狠狠疼爱过的模样。她心头一紧，连忙用力深呼吸，试图让脸上的红晕褪去一些，又整理了一下头发和衣领，才低着头快步走回教室。

接下来的数学课、英语课……折磨以不同的形式继续。有时是长时间的低档振动，让她在听课中持续分心；有时是突如其来的高强度刺激，考验她瞬间的忍耐力；有时则是长时间的停顿，在她稍微放松警惕时，猛地给予一连串让她几乎跳起来的快感袭击。

悠真觉得自己快要被逼疯了。身体像个提线木偶，完全被看不见的丝线操控，在情欲的浪潮里沉浮。理智和羞耻心被反复碾磨，取而代之的是一种逐渐加深的、对刺激的依赖和渴求。她开始害怕停顿，因为停顿后的空虚更难以忍受；她也害怕持续，因为持续的快感积累终将引向崩溃。

午休时间。大多数同学去了食堂或小卖部，教室空了大半。悠真没有胃口，依旧坐在座位上，疲惫地趴着。

早川理纱走了进来。她手里拿着一个便当盒，自然地走到悠真旁边的空位坐下——那是今天请假的一个同学的座位。

“悠真，”早川的声音很低，只有两人能听到。她没有用“小白”那个称呼，也许是顾忌环境。“没事吧？”

悠真抬起头，看向早川。早川的脸上带着一丝不易察觉的关切，但更多的是一种深沉的、压抑的专注。她的目光落在悠真依旧泛红的脸颊和湿润的眼睛上，喉结轻微滚动了一下。

“早川……主人……”悠真用气声回答，带着委屈和后怕，“课堂上……太……”

“我知道。”早川打断她，伸出手，似乎想碰碰她的脸，但在中途改为拿起了她桌上的水瓶，“喝点水。” 她拧开瓶盖，递过去，手指无意间擦过悠真的指尖。

悠真接过，小口喝着。冰凉的水滑过干渴的喉咙，稍微缓解了身体的燥热。

早川打开了自己的便当盒，里面是精致的三明治和水果。“吃一点。”她将一小块三明治递到悠真嘴边，动作自然，仿佛只是朋友间的分享。

悠真迟疑了一下，张开嘴，就着早川的手咬了一口。细嚼慢咽的同时，她能感觉到早川的目光一直停留在自己脸上，带着一种审视和……迷恋？

“悠真今天很努力。”早川低声说，又喂了她一块水果，“忍耐得很漂亮。脸红的样子，颤抖的样子，咬着嘴唇强忍呻吟的样子……都很可爱。”

这些话像羽毛搔刮着悠真的心脏，带来一阵战栗。羞耻，却又有一丝被关注的、扭曲的喜悦。

“下午还有两节课。”早川收回手，拿起自己的三明治，“继续坚持。放学后……”她停顿了一下，声音压得更低，带着一丝诱哄和承诺，“放学后，我和铃音，会好好‘奖励’努力的小白。”

奖励……悠真的身体本能地悸动了一下，腿间似乎又渗出些许湿意。她看着早川近在咫尺的、清秀却笼罩着阴翳的脸庞，看着那双眼睛里映出的、自己此刻凌乱的模样，竟然轻轻点了点头。

午休结束的铃声响起。早川收起便当盒，起身离开前，手指状似无意地拂过悠真的后颈，指尖轻轻勾了一下那并不存在的项圈（真实的项圈在制服下贴着皮肤戴着），留下一个隐晦的暗示。

下午的课业，对悠真来说，变成了另一种意义上的煎熬和期待交织的折磨。身体被遥控的快感依旧存在，但似乎因为早川午休时的话语，而多了一层隐晦的指向性。每一次刺激，都仿佛在提醒她“奖励”的临近。她的身体变得更加敏感，更容易被撩拨，反应也更大。有几次，她甚至需要紧紧夹住双腿，双手死死抓住课桌边缘，才能抑制住喉咙里即将冲出的呜咽。

最后一节是体育课。男生换运动服在更衣室时，悠真几乎是逃进了最里面的隔间。快速脱下制服长裤和衬衫，露出下面——特制的、带有细小锁扣的黑色蕾丝吊带袜，袜口连接着同样材质的吊袜带，固定在纤细的腰肢上。而她的下体，除了那个硅胶垫和按摩器，依旧没有任何遮挡。上半身则是一件白色的运动背心，勾勒出胸前微微的弧度。

这身打扮在男生更衣室里是致命的危险。她快速套上宽松的运动外套和长裤，将一切遮盖起来，心脏狂跳不止。体育课的内容是排球。跑动、跳跃、接球……每一个动作都让体内的按摩器发生位移，带来意外的刺激。汗水浸湿了运动服，脸颊绯红，气喘吁吁。在旁人看来，这只是体能不佳的表现，只有她自己知道，每一次跳跃落地时，体内那被重重撞击一下的快感，让她几乎腿软。

“樱井，你没事吧？脸色好红，要不要休息？”体育老师注意到她的异常。

“没、没关系！老师！”悠真连忙摇头，强迫自己集中精神。她感觉到，控制器那边的“主人”似乎也因为体育课的特殊性而有所收敛，刺激维持在较低水平，更像是一种伴随后台运行的、持续的撩拨。

终于，放学的铃声响彻校园。

悠真如同得到赦令，迅速换回制服，收拾书包。她不知道铃音和早川在哪里等她，但身体深处传来的、愈发清晰的悸动和空虚感，告诉她“奖励”的时间快到了。

她随着人流走出教学楼，阳光已经西斜，将她的影子拉得很长。刚走出校门不远，在一处相对僻静的林荫道拐角，一辆熟悉的黑色轿车缓缓停在她身边。

后车窗降下，露出铃音微笑的脸庞。

“上车，小白。”

悠真几乎没有犹豫，拉开车门，坐了进去。车内空间宽敞，弥漫着铃音常用的淡雅香氛。早川已经坐在了另一侧。

车门关上，车辆平稳启动，驶向回家的路。

铃音转过身，伸手抬起悠真的下巴，仔细端详着她。“让我看看……嗯，眼睛湿漉漉的，嘴唇也肿了，脸颊的红晕到现在都没退……今天在课堂上，是不是一直想着主人，想着被触碰，想着高潮？”

悠真羞赧地垂下眼帘，轻轻点了点头。

“真乖。”铃音奖励般地吻了吻她的额头，然后手指灵巧地解开她制服外套的扣子，又解开衬衫最上面的两颗。“憋了一天，很难受吧？里面的小玩具，是不是把小白弄得一直流水？”

衬衫领口被拉开一些，露出精致的锁骨和一片白皙的皮肤。悠真喘息着，不敢回答。

早川在一旁静静看着，她的手放在膝盖上，微微收紧。她的目光落在悠真敞开的领口，落在她因为情动而微微起伏的胸口，落在她湿润迷蒙的眼睛上。

铃音的手探入悠真的衬衫下摆，轻易地找到了裤子的纽扣和拉链，解开。冰凉的指尖，隔着那层湿透的硅胶垫，按在了她高高肿起的阴蒂上。

“啊……！”悠真猛地一颤，身体弓起。

“嘘……”铃音另一只手捂住她的嘴，手指却开始隔着硅胶垫，熟练地揉弄按压那个敏感点。“在车上呢，小声点。小白今天忍耐了一天，现在可以稍微放松一点了哦。”

早川也靠了过来。她没有动手，只是贴近悠真的耳边，呼吸灼热，声音低哑地命令：“自己说，小白。今天在学校，有没有偷偷想着主人的鸡巴？有没有想要被填满？”

在两人夹击的刺激和话语挑逗下，悠真的理智迅速崩解。她隔着铃音的手，含糊而急切地呜咽：“想……想了……小白想……想要主人的大鸡巴……插进来……呜……”

“哪里想？”早川追问，手指轻轻划过悠真滚烫的脸颊。

“小穴……小穴里面想……想得一直流水……”悠真哭泣般地说道，身体在铃音手指的玩弄下不断扭动。

铃音笑了，抽出手指，上面已经沾满了透明的爱液。她将那手指举到悠真眼前。“看，流了这么多。小白果然是个小淫娃。” 然后，她将那手指塞进悠真嘴里，“舔干净，自己的味道。”

悠真顺从地吮吸着，舌尖卷走那些微咸甜腻的液体。

这时，铃音拿出了那个伪装成口红的遥控器，将按摩器的模式调到了最高档的、模拟抽插的强力震动模式。

“嗯啊啊啊——！！！”

悠真猝不及防，被体内骤然爆发的、如同真实性器疯狂抽插般的剧烈刺激，顶得猛地仰起头，发出一声无法抑制的尖叫，又被早川及时捂住。她的身体像离水的鱼一样剧烈弹动，双眼瞬间翻白，口水从嘴角溢出。

强烈的快感如同海啸，瞬间吞没了她。按摩器疯狂地撞击着宫口，碾压着每一寸敏感的内壁，阴蒂上的刺激也同步达到顶峰。在经历了整整一天缓慢而磨人的撩拨和忍耐后，这突如其来的、毫不留情的猛烈攻势，直接将她推向了崩溃的边缘。

“要……要去了……主人……小白要去了……啊啊啊——！！！”她哭喊着，身体绷紧到极限，然后在下一波更强烈的模拟冲刺中，达到了惊天动地的高潮。

大量的爱液像失禁般喷涌而出，彻底浸透了硅胶垫，甚至渗透了裤子的布料。她全身痉挛，瞳孔涣散，喉咙里发出嗬嗬的失声喘息，达到了有意识以来最强烈的一次高潮。

铃音和早川紧紧抱住她颤抖的身体，任由她在高潮的余波中抽搐、呜咽。铃音的脸上带着满足而温柔的笑意，早川则深深地看着悠真彻底沉迷于欲望的、美得惊心动魄的潮红脸颊和失神眼眸，眼神幽暗如深潭。

车辆平稳地行驶着，驶向那栋熟悉的、囚禁着“小白”的宅邸。

车窗外，夕阳如血，将天空染成一片绮丽而颓靡的橙红色。

而车厢内，属于“小白”的、被彻底掌控和宠爱的夜晚，才刚刚开始。`,Zc=Object.freeze(Object.defineProperty({__proto__:null,default:Xc},Symbol.toStringTag,{value:"Module"})),nd=`---
order: 2
---

# #2 公园的羞耻游戏

午后的阳光，在一周后的周六，变得有些不同了。

星野悠真坐在自己房间的地毯上，背靠着床沿，手里拿着一本看到第三页就再也没翻动过的轻小说。他的视线落在窗外摇曳的树影上，耳朵却敏锐地捕捉着隔壁房间的动静——铃音已经一个多小时没有发出任何声音了。

这很不寻常。

自从那个颠覆性的午后，两人的关系进入了某种隐秘而炽热的新阶段。白天，他们依旧是礼貌温和的兄妹，会在早餐时讨论学校的功课，会在母亲面前扮演寻常的兄妹关系。但到了夜晚，当家门锁舌落下，母亲房间的灯熄灭后，某种电流般的默契就会在两人之间流动。

他们会交换眼神，会故意在走廊擦肩而过时手指相触，会在深夜用手机发送一些只有彼此能懂的暧昧讯息。

然后，通常是在凌晨一点后，悠真的房门会被轻轻推开。

但像今天这样，周六下午，铃音完全安静地待在自己房间的情况，还是第一次。悠真感到一种莫名的焦躁，像是习惯了某种规律性的投喂后突然断了粮。他放下书，正准备起身去“借”本书时，手机震动了一下。

是铃音发来的消息。

「哥哥，在看什么？」

悠真抿了抿唇，回复：「小说。你呢？」

「在看一些……有趣的东西。」

「什么？」

那边停顿了几秒，发来一个加密链接。悠真点开，跳转到一个需要年龄验证的匿名视频网站。视频封面很暗，只能看见一个人影背对着镜头，站在似乎是公园长椅旁的阴影里，裙摆被风吹起一角。

标题写着：「深夜的胆量测试，你敢在公共场所这样做吗？」

悠真的心跳漏了一拍。他当然知道这是什么类型的视频——露出play，一种游走在法律与道德边缘的、极度刺激的性癖。他自己在做直播时虽然不露脸，但也仅限于在安全的私人空间里。在公共场所？他想都不敢想。

「你……在看这个？」悠真打字的手指有些抖。

「嗯。突然很好奇。」铃音回复，「哥哥看过吗？」

「……没有。」

「那，要不要玩个游戏？」

悠真盯着那行字，感到小腹深处传来一阵熟悉的、令人羞耻的悸动。他知道自己应该拒绝，应该像个正常的哥哥那样告诫妹妹不要接触这些危险的内容。但嘴唇却莫名发干，身体深处某个被开发过的地方，隐隐传来空虚的渴求。

「什么游戏？」他最终还是问了。

「我们打赌。」铃音的消息回得很快，像是早已准备好说辞，「我来帮哥哥口交。如果哥哥能在五分钟内不射精，就算我输，我给哥哥一百日元。如果哥哥没忍住……射了，那就算哥哥输。」

悠真看着这行字，脸颊开始发烫。五分钟？他对自己在这方面的耐力……其实没什么信心。尤其是在铃音面前。那天的记忆还鲜明地烙在身体里——妹妹生涩却热情的口舌，那种禁忌的触感，光是回想就足以让他前端渗出湿意。

但莫名的好胜心，或者说，是某种想要在妹妹面前维持一点哥哥尊严的愚蠢念头，冒了出来。

「五分钟太短了。」他试图讨价还价，「十分钟。」

「不行哦，就五分钟。」铃音发来一个可爱的表情符号，语气却不容置疑，「哥哥不敢吗？还是说……哥哥已经只是想象一下，就有感觉了？」

仿佛被说中心事般，悠真感到腿间微微发硬。他咬了咬下唇，快速打字：「谁说的！赌就赌！」

「那我现在过来？」

「……嗯。」

消息刚发出去不到二十秒，房门就被推开了。铃音穿着居家短裤和宽松T恤，头发随意扎成马尾，看起来清爽又无辜。只有悠真知道，那宽松裤腰下隐藏着怎样惊人的秘密，以及那双清澈眼睛深处燃烧着怎样的火焰。

铃音反手锁上门，动作自然得像回自己房间一样。她走到悠真面前，蹲下身，视线平齐地看着坐在矮桌旁的哥哥。

“哥哥准备好了吗？”她轻声问，嘴角带着一丝狡黠的笑意。

悠真穿着宽松的居家裤，此刻已经能感觉到前端顶起了一个微小但明确的弧度。他别开视线，点了点头，耳根通红。

铃音伸出手，没有直接触碰那里，而是先抚上悠真的脸颊，拇指轻轻摩挲着他的下唇。“哥哥今天，很乖呢。”她说着，俯身吻了上来。

这是一个温柔的吻，带着薄荷牙膏的清新味道。但悠真很快察觉到不对劲——铃音的另一只手，已经灵巧地解开了他裤腰的绳结，探了进去。

“唔……！”他下意识想并拢腿，却被铃音用膝盖抵住。

内裤被剥下，微凉的空气接触到他早已半勃的性器，让他浑身一颤。那根小巧的、颜色淡粉的器官，已经完全挺立起来，顶端的小孔不断渗出透明的腺液，在阳光下闪着湿润的光。

“已经这么精神了呀。”铃音退开一点，低头看着，语气里带着某种天真的惊叹。她伸出手指，没有直接握住，而是用指尖轻轻刮过柱身下方最敏感的系带。

“啊！”悠真猛地弓起背，前端又吐出一小股清液。

“计时开始了哦。”铃音微笑着说，然后低下头，张开嘴，将那湿漉漉的龟头含了进去。

“嗯……！”悠真倒抽一口气。

温热、湿滑、柔软的口腔完全包裹上来的一瞬间，他的理智就开始摇摇欲坠。铃音的技巧比上次熟练了一些，舌头灵活地舔舐着冠状沟，时而用力吮吸顶端，时而用舌尖快速拨弄那个不断渗液的小孔。

“滋……啾……嗯……”细微的水声在安静的房间里响起。铃音一只手扶着悠真的大腿，另一只手轻轻托着他的囊袋，指尖时不时按压后方会阴处——那里离前列腺很近，轻微的刺激就能带来强烈的快感。

悠真咬住自己的手背，试图抑制住快要溢出的呻吟。太舒服了……比他自己用手，甚至比用玩具都要舒服太多。活生生的、带着情感的、属于妹妹的唇舌，所带来的心理快感远超生理刺激。

他低头看去，铃音正认真吞吐着他的性器。她的脸颊微微凹陷，马尾随着动作轻轻摆动，睫毛垂下，在眼睑投下小小的阴影。这个角度，他能看见她T恤领口下若隐若现的锁骨，以及……那宽松布料下，明显也鼓起了一块的轮廓。

铃音也硬了。

这个认知像一剂强烈的春药，轰然冲垮了悠真本就脆弱的防线。铃音是因为给他口交而兴奋的……她在享受这个过程……

“哈啊……不行……铃音……慢点……”他喘息着求饶，手不自觉地插进了妹妹的发丝间，不是推拒，而是轻柔的抚摸。

铃音抬起眼看他，眼神湿润而迷离。她没有减慢速度，反而更深地吞入，鼻尖几乎抵上他稀疏的耻毛。喉部的紧缩带来了前所未有的压迫感。

“呜……！”悠真的腰肢开始失控地向上挺动，追寻更深的接触。快感如潮水般一波波涌来，积累在腰腹深处，随时准备决堤。

铃音似乎察觉到了他的临界点，吐出了他的性器。银丝断裂，拉出淫靡的细线。她改用手指快速套弄柱身，拇指重重摩擦龟头下方。

“哥哥，要射了吗？”她喘着气问，脸颊泛红，嘴唇被摩擦得水润红肿。

悠真拼命摇头，但身体诚实得很——前端的小孔已经张开，清液像失禁般不断涌出。他的大腿在发抖，脚趾蜷缩，视线开始失焦。

“可是哥哥这里，”铃音用手指接住一滴溢出的清液，展示给他看，“已经说了‘想要’很多次了呢。”

她又低下头，这次不再温柔，而是近乎贪婪地、发出响亮水声地吸吮吞吐。

“噗啾！滋啵！嗯咕——！”

声音、触感、视觉、还有妹妹身上传来的淡淡香气……所有感官刺激叠加在一起。

悠真脑子里最后一根弦，“啪”地断了。

“啊……不行了……要射……铃音……！”他尖叫着，双手用力按住妹妹的头，腰肢疯狂上挺。

铃音没有退开。

炽热的精液直接射进了她的口腔深处。第一股最浓最多，能清晰地感觉到液体冲击喉壁的触感。她喉头滚动，咽下了一些，但更多的从嘴角溢出，顺着下巴滴落，沾湿了悠真的大腿和地毯。

悠真还在射，量不大，但绵长断续。高潮带来的痉挛让他整个人蜷缩起来，前端在妹妹嘴里又可怜地抽动了好几下，才终于软了下来。

铃音慢慢吐出口中剩余的精液，混合着唾液，拉出长长的银丝。她擦了擦嘴角，抬头看向哥哥——悠真瘫坐在地，眼神涣散，胸口剧烈起伏，脸上的潮红还未褪去，一副被彻底玩坏的模样。

她拿起手机，看了眼计时器。

“两分四十七秒。”铃音宣布，声音里带着胜利的笑意，“哥哥输了呢。”

悠真这才从高潮的余韵中回过神来，意识到自己不仅输了，还射在了妹妹嘴里……羞耻感后知后觉地淹没了他。他慌忙抽纸巾想帮铃音擦脸，手却抖得厉害。

铃音接过纸巾，自己擦干净，然后凑近，在悠真唇上印了一个带着精液咸腥味的吻。

“那么，按照约定，”她贴着悠真的唇瓣，轻声说，“哥哥要陪我去公园玩‘露出游戏’哦。”

“等……等一下！”悠真终于找回了声音，“那个赌约……公园什么的……太过了！不行！”

“哥哥想赖账吗？”铃音退开一点，歪着头看他，眼神却暗了下来，“明明答应了的。”

“我……我没想赖账，但是……”悠真语无伦次，“那是公共场所！被人看到的话……”

“所以才刺激呀。”铃音站起身，走到衣柜前，打开——里面不知何时已经塞满了各种女装和配件，都是她最近偷偷网购的。她翻找着，语气轻快：“哥哥穿女装这么可爱，不展示一下太可惜了。而且，我会把哥哥打扮得完全认不出来是男孩子的。”

“铃音……”悠真还在做最后的挣扎。

“还是说，”铃音转过头，眼神里闪过一丝受伤，“哥哥其实……很讨厌和我做这些事？那天说的话，都是骗我的？”

“不是！”悠真几乎是立刻反驳，“我没有讨厌！我只是……”

“只是害怕？”铃音走回来，蹲下，握住悠真的手，“我也害怕。但是……和哥哥在一起的话，好像就没那么怕了。”她的声音低了下去，“哥哥，你知道吗？我一直觉得自己很恶心，这个身体，这些欲望……但是和哥哥一起的时候，我第一次觉得……也许这样也没关系。因为我们是一样的。”

悠真看着妹妹眼中闪烁的不安和渴望，心软成了一滩水。是啊，他们是一样的。都是被困在不被世俗接受的欲望里，孤独挣扎的人。而现在，他们有了彼此。

“……要穿什么？”他听见自己妥协般地问道。

铃音的眼睛瞬间亮了起来，像盛满了星星。

---

两个小时后。

星野悠真站在全身镜前，看着镜中的“少女”，陷入了漫长的沉默。

这……真的是他吗？

纯白色的及腰长假发柔软地披散下来，发尾微卷，刘海修剪得整齐，恰好遮住了一部分额头。头顶，一对毛茸茸的黑色猫耳发箍固定得很牢，随着他转头的动作轻轻颤动。

脸上，一个印有猫咪图案的黑色口罩遮住了大半张脸，只露出一双因为紧张而湿润的眼睛——铃音甚至还给他涂了淡淡的棕色眼影和睫毛膏，让那双本就偏秀气的眼睛显得更大、更楚楚可怜。

脖子处，戴着一个黑色的皮质项圈，中间挂着一个小巧的银色铃铛。

身上，是一套经典的黑白女仆装。白色的荷叶边衬衣，领口系着黑色缎带，袖口也是层层叠叠的蕾丝。外面套着黑色的吊带连衣裙，裙摆只到大腿中段，后面系着一个大大的白色蝴蝶结。

腿上，是过膝的白色丝袜，袜口有精致的黑色蕾丝边。脚上穿着一双看起来正常、但其实内增高有5厘米的黑色圆头小皮鞋——这是为了让他走路的姿态更接近女性。

但这些都不是重点。

重点是衣服下面。

胸前，那对铃音不知道从哪里买来的、带着细密硅胶软刺的乳夹，正紧紧咬合在他淡粉色的乳头上。夹子本身是玫瑰金色的，下面垂着小小的、铃音特意换上的金色铃铛。只要他稍有动作，铃铛就会发出清脆却细微的“叮铃”声。

而后庭……

铃音跪在他身后，裙子撩起，正在做最后的调整。

一根中等尺寸的粉色震动棒，已经没入了那个昨晚才被充分疼爱过、此刻依旧柔软湿滑的穴口。只留下一小截尾巴和连接线，从裙摆下方巧妙引出，连接着铃音口袋里的遥控器。

更可怕的是，在大腿内侧，紧贴着会阴部位，贴着一个火柴盒大小的灰色装置——那就是铃音口中的“郊狼”。此刻它正处于待机状态，但悠真已经通过手机APP的预览功能，体会过那微弱电流刺激前列腺带来的、令人头皮发麻的奇异快感。

而前方，他那根已经被玩弄得有些疲软、可怜兮兮缩着的性器，被套进了一个透明的、带有螺旋凸起纹理的微型飞机杯里。飞机杯本身被固定在特制的吊带 harness 上，紧贴着他的小腹。在飞机杯开口处，还被铃音恶作剧般地套上了一个超薄避孕套——“为了接住哥哥待会儿可能会射出来的东西呀。”她当时是这么说的，眼睛弯成了月牙。

所有这些装置，都被裙子巧妙地遮掩了。从外面看，他只是一个穿着稍微有些性感的女仆装、戴着口罩的猫娘COSPLAYER。虽然引人注目，但在这个多元化的城市街头，并非无法接受。

“完美。”铃音站起身，绕到悠真面前，上下打量着自己的“作品”。她的眼神越来越亮，呼吸也明显加快了。

悠真通过镜子看到，铃音今天的穿着相对保守——简单的牛仔裤和连帽卫衣，帽子拉起来能遮住一部分脸。但她卫衣下摆处，明显鼓起了一个不容忽视的弧度。她也处在兴奋状态。

“哥哥，转一圈看看？”铃音提议。

悠真僵硬地转了个身。裙摆扬起，露出包裹在白色丝袜里的大腿和后方微微隆起的臀部曲线。丝袜与裙摆之间，那截绝对领域的肌肤，在室内灯光下白得晃眼。

“太棒了……”铃音喃喃道，手不自觉地按在了自己腿间，“哥哥这样……简直让人忍不住……”

悠真自己也看得有些失神。镜中的“少女”纤细、可爱，带着一种易碎又色情的气质。完全看不出男性的特征。一种奇异的、混杂着羞耻和兴奋的情绪在胸腔里鼓胀。

铃音走上前，从背后抱住他，手隔着裙子按在他小腹上——正好按在那个隐藏的飞机杯上。

“哥哥现在，是什么感觉？”她在悠真耳边呵气。

悠真颤抖了一下。后穴里的震动棒存在感鲜明，乳头的刺痛混合着快感，前方的性器被紧裹着，郊狼贴着大腿带来细微的酥麻……所有感觉交织在一起。

“……很满。”他诚实地说，声音因为口罩的遮挡而有些闷。

“那，我们出发？”铃音松开他，眼里闪着跃跃欲试的光。

悠真深吸一口气，点了点头。事已至此，逃不掉了。

铃音将震动棒的遥控器调到最低档——只是微微震动的程度，然后将郊狼的遥控APP放在手机桌面最显眼的位置。她自己也戴上口罩和帽子，确认两人的手机、钥匙、一小包湿巾和备用避孕套都带齐了。

“走吧，哥哥。”她牵起悠真的手。

悠真的手指冰凉，但在铃音温热的掌心包裹下，渐渐有了一丝暖意。他最后看了一眼镜中陌生的自己，然后转身，跟着妹妹走出了房间。

穿过客厅时，母亲正在沙发上看电视，回头看了他们一眼。

“要出门？”母亲问。

“嗯，和哥哥去附近的公园散步。”铃音自然地回答，握着悠真的手紧了紧。

母亲的目光落在悠真身上，打量了几秒，笑了：“悠真这身是……社团活动？还是和同学约好了？”

悠真僵住了，发不出声音。口罩下的口球虽然还没戴上，但他此刻紧张得完全说不出话。

“是COSPLAY啦！”铃音抢着回答，“哥哥最近加入的同好会，今天有外拍活动。对吧，哥哥？”

悠真只能用力点头。

母亲似乎没起疑心，只是笑着说：“很可爱哦。不过戴口罩不热吗？还有那个项圈……现在年轻人的流行我真是不懂了。早点回来，注意安全。”

“知道了！”铃音拉着悠真，几乎是逃也似的出了家门。

门在身后关上的瞬间，悠真腿一软，差点跪下去。铃音及时扶住了他。

“吓死我了……”悠真靠在墙上，小声说。

“妈妈没看出来哦。”铃音安慰他，但声音里也带着一丝后怕的颤抖。她拿出那个黑色的、带有透气孔的口球，示意悠真张嘴，“来，戴上这个，哥哥就更不用担心会不小心发出声音了。”

悠真犹豫了一下，还是顺从地张开了嘴。橡胶的气味涌入鼻腔，口球被塞了进来，后面的皮带绕到脑后，扣紧。这下，他彻底无法说话了，只能发出含糊的“呜呜”声。

“这样就好了。”铃音检查了一下，确认不会太紧导致不适，然后重新牵起他的手，“走吧，去公园。”

下午三点的阳光依然明媚。公寓楼下的街道上行人不多，但每经过一个人，悠真的神经就绷紧一分。

他能感觉到那些视线。

好奇的、打量的、欣赏的、疑惑的……各种目光落在他身上。女仆装加猫耳，虽然不算特别罕见，但在普通的住宅区街道上，依然足够引人注目。

尤其……是他现在的状态。

震动棒最低档的嗡鸣，像背景音一样持续刺激着他的后穴。乳夹的刺痛随着走路的每一步，转化成细密的快感。而郊狼虽然没启动，但仅仅是贴着大腿内侧的触感，就让他不由自主地夹紧腿。

最折磨的是前方。那个透明的飞机杯紧紧箍着他半软的性器，内部的螺旋纹理若有若无地摩擦着顶端。而随着走路时身体的晃动，小腹会时不时蹭到飞机杯的外壁，带来间接的刺激。

才走了不到五分钟，悠真就感到前端开始缓缓抬头，在飞机杯有限的空间里胀大，顶住了前端避孕套的尖端。腺液不受控制地分泌，将避孕套内壁润湿了一小块。

“呜……”他发出一声细微的鼻音，手下意识地想往小腹捂，却被铃音牢牢牵着。

“哥哥，走路姿势要更女孩子一点哦。”铃音凑到他耳边，用只有两人能听到的声音说，“屁股稍微扭起来，步伐小一点。对，就是这样。”

悠真羞耻得脚趾蜷缩，但不得不照做。他努力回忆着看过的女性向视频里的步伐，小幅度地摆动腰肢。这个动作让后穴里的震动棒角度微微变化，更深地顶到了某一点。

“嗯……！”他闷哼一声，大腿猛地一颤，差点绊倒。

铃音稳稳扶住他，低笑起来：“哥哥好敏感。这才刚开始呢。”

他们转过街角，通往公园的主路出现在眼前。行人明显多了起来，有推着婴儿车的母亲，有慢跑的青年，有牵手散步的情侣。

更多的目光聚集过来。

悠真感觉自己的脸颊在口罩下烫得惊人。他低下头，试图用假发遮挡视线，却被铃音轻轻抬起了下巴。

“哥哥，不要低头。要自信一点，你现在超可爱的。”铃音说着，甚至举起手机，假装自拍，实则偷偷拍下了悠真此刻慌张又羞耻的模样。

一个路过的高中女生团体发出了小小的惊呼。

“快看快看！猫娘女仆！好可爱！”
“是在出COS吗？这身好精致！”
“那个腿！那个绝对领域！我死了！”
“可以上去合影吗？”

悠真浑身僵硬，下意识地往铃音身后缩了缩。铃音却笑着对那几个女生摆了摆手：“不好意思，我们在赶时间。”

女生们遗憾地走开了，但还是频频回头。

每一声“可爱”，每一个注视的目光，都像羽毛轻轻搔刮着悠真脆弱的神经。羞耻感在累积，但与之相伴的……是一种诡异的兴奋。被当作“可爱的女孩子”看待，被欣赏，被注目……这和他平时作为“星野悠真”时所获得的视线完全不同。

他感觉自己分裂成了两部分：一部分在尖叫着想要逃跑，另一部分却在贪婪地汲取这种禁忌的关注。

而身体，则诚实得多。

他能感觉到自己前端已经完全勃起了，硬邦邦地杵在飞机杯里，顶端不断渗出液体，将避孕套前端润湿成更深的透明色。后穴里的震动棒似乎也开始变得更敏感，每一次迈步带来的摩擦都让他后腰发软。

乳夹的铃铛随着步伐，“叮铃……叮铃……”地响着。声音很小，但在悠真自己听来，却响亮得可怕，仿佛在向全世界宣告他此刻的状态。

铃音牵着他的手，掌心有汗，但握得很紧。悠真侧头看去，发现妹妹的耳朵也红了，呼吸透过口罩变得有些急促。她也在兴奋，甚至可能比他还兴奋。

终于，公园的入口就在眼前。

那是一个中等规模的市民公园，有草坪、树林、小径、儿童游乐区和几个凉亭。周六的下午，人相当多。

在踏入公园大门的前一刻，铃音停了下来，转头看向悠真。

“哥哥，现在后悔还来得及。”她认真地说，眼神复杂，“进去之后，就真的没有回头路了。如果你说不想，我们现在就回家。”

悠真看着妹妹的眼睛，那里有关切，有渴望，也有一丝不确定。他知道，铃音也在害怕。这个游戏太过火了，一旦失控，后果不堪设想。

他张了张嘴，想说什么，却只发出“呜呜”的声音。于是他拿起手机，快速打字，递给铃音看：

「我害怕。但是……我想和铃音一起。」

铃音看着那行字，眼眶微微红了。她凑近，隔着口罩，在悠真脸颊的位置轻轻吻了一下。

“那……我们走。”

踏进公园的第一步，悠真感到世界的声音仿佛被调低了音量。鸟鸣、孩子的嬉笑、远处球场的呼喊……都变得模糊。只有他自己的心跳声、血液奔流的声音，以及体内那微小却固执的嗡鸣，无比清晰。

铃音牵着他，走上了一条相对僻静、但偶尔也会有人经过的碎石小径。小径两旁是茂密的灌木丛，提供了些许视觉遮挡。

走了大概五十米，铃音停下了。

她拿出手机，解锁，点开了震动棒的遥控APP。

悠真惊恐地看着她，摇头。

铃音对他笑了笑，手指在屏幕上轻轻一划。

“嗡————”

后穴里的震动棒，瞬间从最低档跳到了中档。

“嗯呜——！”悠真猛地夹紧腿，身体向前弓起。强烈的震动直接冲击着前列腺，快感如电流般窜遍全身。他腿一软，差点跪下去，全靠铃音搀扶着。

“哥哥，站稳哦。”铃音低声说，一只手环住他的腰，支撑着他，“我们慢慢走。”

他们又开始移动，但悠真的步伐彻底乱了。每一步都伴随着体内剧烈的震动，快感一浪接一浪地冲击着他脆弱的神经。前端在飞机杯里胀痛地搏动着，更多的腺液涌出，他甚至能感觉到避孕套前端已经积聚了一小滩温热的液体。

乳夹的铃铛随着他身体的颤抖，响得更急促了。

“叮铃铃……叮铃铃……”

迎面走来一对散步的老夫妇。悠真吓得魂飞魄散，拼命想把呻吟咽回去，身体却因为紧张和快感而抖得更厉害。

老夫妇好奇地看了他们一眼，老太太甚至还微笑着点了点头：“年轻人，感情真好啊。”

铃音礼貌地点头回应，手却在悠真腰侧轻轻掐了一下，示意他镇定。

擦肩而过后，悠真几乎虚脱地靠在铃音身上，口罩下的口球让他无法大口呼吸，只能发出拉风箱般的“嗬嗬”声。

“哥哥，这才只是震动棒哦。”铃音的声音像恶魔的低语，“接下来，是郊狼。”

她再次拿起手机，点开了那个灰色的APP界面。屏幕上显示着郊狼的连接状态和强度控制条。

“我们先从一级开始。”铃音说着，手指按了下去。

“滋……”

轻微的电流声，几乎听不见。

但悠真感觉到了。

那是一种……难以形容的感觉。不是震动，不是摩擦，而是直接作用于神经末梢的、尖锐又酥麻的电刺激。电流似乎精准地穿透了皮肉，直接击打在前列腺上。

“啊——！”他无法抑制地尖叫出声，虽然被口球堵住后变成了闷闷的呜咽。他的身体剧烈地痉挛了一下，腿间一热——他射了。

在震动棒和电流的双重夹击下，他甚至没到真正的高潮点，就不受控制地泄了出来。一股不算浓稠但量不小的精液，直接射进了飞机杯前端的避孕套里。温热的感觉充满了狭小的空间。

铃音显然通过APP或他身体的反应察觉到了。她轻笑一声，不仅没有关掉郊狼，反而把震动棒又调高了一档。

“呜嗯嗯嗯——！”悠真眼前发白，膝盖彻底软了，整个人往下滑。铃音几乎是半拖半抱着他，踉跄地把他扶到路边一棵大树下，让他背靠着树干喘息。

高潮后的身体极度敏感，震动和电流的刺激并未停止，反而带来了近乎痛苦的快感。悠真浑身是汗，假发黏在额角，白色的丝袜被灌木枝刮破了一道小口。他无助地仰着头，脖颈拉出脆弱的线条，胸口剧烈起伏，乳夹的铃铛疯狂作响。

避孕套前端，已经装了小半袋浑浊的白色液体。

“哥哥射了呢。”铃音靠近，隔着裙子，用手指按了按那个鼓胀的飞机杯和里面的避孕套，“这么多。哥哥明明刚才在家里已经射过一次了……真是色情。”

悠真说不出话，只能发出可怜的、带着哭腔的鼻音。泪水模糊了视线，但快感依然源源不断地从身体深处涌出。他感觉自己像一块被反复榨取的海绵，明明已经干了，却还能被挤出水分。

他想坐下，想休息，想摆脱这些可怕的玩具。

他颤抖着手，掏出手机，用模糊的视线打字：

「铃音……不行了……让我坐下……求求你……」

铃音看了，沉吟了几秒，然后点了点头。

“好吧，那边有长椅。但是，”她强调，“震动棒和郊狼都不会关哦。”

悠真此刻已经顾不了那么多了，只要能坐下，怎样都好。他艰难地点了点头。

铃音搀扶着他，走向不远处一张隐藏在树荫下的木质长椅。这段不到十米的路，对悠真来说却像马拉松一样漫长。每一步都伴随着体内的震动和电流，每一次落脚都让他前端渗出更多液体——他已经没什么可射的了，出来的大多是透明的腺液，但身体依然在高潮的余韵中痉挛。

终于，他瘫坐在长椅上，背靠着椅背，大口喘气——虽然大半气息都被口球堵了回来。

铃音坐在他身边，一只手自然地搭在他大腿上，指尖若有若无地划过丝袜的蕾丝边。另一只手拿着手机，屏幕上显示着两个遥控界面。

“哥哥现在的样子……”铃音轻声说，目光扫过悠真汗湿的脖颈、剧烈起伏的胸口、微微颤抖的双腿，以及裙摆下那截沾了些许泥土的白色丝袜，“……好色情，又好可爱。”

她手指一动。

震动棒跳到了最高档。

“嗡嗡嗡嗡嗡————！！！”

剧烈的、近乎狂暴的震动瞬间炸开。悠真整个人像虾米一样弹了起来，又重重摔回长椅，喉咙里发出破碎的哀鸣。最高档的震动直接把他送上了第二次高潮的悬崖边缘。

但铃音没给他喘息的机会。

郊狼的强度，被她从一级直接拉到了三级。

“滋滋滋——！”

更强的电流窜过。

“嗯啊啊啊啊——！！！”

这一次是真正的高潮。尽管刚刚射过，身体却像是被强行榨取般，又挤出几股稀薄的白浊，注入避孕套中。快感强烈到近乎疼痛，悠真眼前发黑，意识模糊，身体不受控制地痉挛，口水从口球的缝隙溢出，浸湿了口罩内侧。

乳夹的铃铛疯狂乱响。

裙摆后方，因为剧烈的身体动作和震动棒的运作，已经隐隐晕开了一小片深色的水渍——那是肠液混合着润滑液渗出的痕迹。

他瘫在长椅上，像一具被玩坏的人偶，只剩下胸膛微弱的起伏和偶尔的抽搐。

铃音看着他，呼吸急促。她能清楚地看到悠真眼中的泪水、欲望、失神和彻底的屈服。口罩上深色的口水渍，脖颈的汗珠，丝袜的破口，胸前摇晃的铃铛，还有裙下那隐约的湿润痕迹……每一处都在尖叫着“色情”。

她自己也硬得发痛，卫衣下的隆起更加明显。但她强忍着，没有动作。游戏还没结束。

她关掉了震动棒和郊狼。

世界瞬间安静下来。只剩下风声、远处的喧闹，以及悠真拉风箱般的喘息。

过了好一会儿，悠真才慢慢找回一点神智。他感到身体内部还在微微痉挛，空虚得可怕。前端的飞机杯里，避孕套已经装了将近一半的液体，沉甸甸地坠着。后穴因为震动棒的突然撤离，传来一阵强烈的空虚和瘙痒。

他虚弱地看向铃音，眼神里满是哀求。

铃音读懂了。她轻轻摸了摸悠真的头，说：“再坚持一下，哥哥。我们马上就……”

话没说完，一个声音插了进来。

“那个……不好意思打扰一下。”

是一个年轻男性的声音，听起来有些紧张。

悠真和铃音同时一僵，转头看去。

一个看起来像是大学生、穿着运动服的男生站在几步开外，挠着头，有些不好意思地看着悠真。

“请问……可以要个联系方式吗？”男生红着脸说，“你……你COS得很可爱，我、我很喜欢……”

悠真的大脑“嗡”地一声，一片空白。被搭讪了？在这种时候？以这副样子？

他惊慌地看向铃音，眼神里满是求救。

铃音也愣了一下，但随即，一丝恶劣的笑意浮现在她眼底。她对悠真做了个“嘘”的手势，然后转头对那个男生说：“不好意思，我朋友不太方便说话。”

“啊，这样……”男生有些失望，但还是不死心地看着悠真，“那个……真的不能加个LINE什么的吗？我没有恶意，就是……觉得你特别可爱。”

悠真拼命摇头，身体往后缩。

男生又靠近了一步。

就在这时，铃音在悠真看不到的角度，快速拿起了手机。

她打开了郊狼的APP。

然后，把强度直接拉到了——五级。那是他们从未尝试过的最高档。

“滋————！！！！”

前所未有的、强烈的电流，像一把烧红的刀子，狠狠捅进了悠真的下体。

“呜——！！！”悠真猛地瞪大眼睛，身体像被电击般剧烈弹起，又因为极致的快感-痛感而僵直。他想尖叫，但口球堵住了一切声音，只能发出窒息般的、喉咙深处挤压出的“咯咯”声。眼泪瞬间狂涌而出。

他的前端再一次可悲地射出了稀薄的液体，加入避孕套的库存。后穴剧烈收缩，更多的肠液不受控制地涌出，将裙摆后方的深色水渍扩大了一圈。

但他必须忍着。必须不能在陌生人面前发出奇怪的声音，不能做出奇怪的动作。

铃音的手，在桌子下，用力按住了悠真剧烈颤抖的大腿，眼神冷静地看着那个男生：“你看，我朋友真的不太舒服。能请你离开吗？”

男生被悠真突然的剧烈颤抖和急促呼吸吓了一跳，又看到口罩上方那双泪水涟涟、仿佛承受着巨大痛苦的眼睛，终于意识到不对劲，连忙道歉：“对、对不起！我这就走！”

他匆匆离开了，还不时回头看一眼。

直到男生的身影消失在拐角，铃音才关掉了郊狼。

电流停止的瞬间，悠真像断线的木偶般彻底软倒，从长椅上滑落，跪坐在了地上。他双手撑地，剧烈地干呕，却因为口球什么也吐不出来。眼泪、口水、汗水糊了一脸，口罩彻底湿透。

铃音立刻蹲下身，抱住他，拍着他的背。

“对不起……对不起哥哥……”她的声音也带上了哭腔，“我太过分了……我……”

悠真只是靠在她怀里，不住地发抖。高潮过度带来的虚脱感和羞耻感淹没了他。裙下，避孕套已经沉甸甸地装满，后穴不断有液体渗出，沿着大腿内侧的丝袜流下。

铃音帮他摘下了口罩和口球。新鲜空气涌入，悠真贪婪地呼吸着，却还是说不出话，只能发出破碎的抽泣。

“我们……我们回家吧。”铃音的声音在抖，“不玩了，我们回去……”

悠真却摇了摇头。

他颤抖着，拿起掉在地上的手机，用尽力气打字：

「不……去……厕所……」

铃音看着那三个字，愣住了：“厕所？”

悠真点头，眼神迷离又固执，还带着未褪的情欲。他指向公园指示牌上“公共厕所”的方向。

铃音明白了。

哥哥还没满足。或者说，被这样玩弄到极限后，身体和心灵都产生了更深的、更原始的渴求。

她扶起悠真，支撑着他，走向公园角落那栋不起眼的公共厕所。

好在是工作日的下午，厕所里空无一人。铃音直接扶着悠真进了最里面的无障碍卫生间，反锁了门。

狭小的空间里，只有他们两人粗重的呼吸声。

铃音让悠真靠坐在马桶盖上，然后跪在他面前，掀起了他的裙摆。

眼前的景象让她呼吸一滞。

白色丝袜的大腿内侧，已经湿得一塌糊涂，混合着汗水和从后穴渗出的肠液。吊带 harness 勒在大腿根和腰上，固定着那个装满乳白色液体的避孕套和里面的飞机杯。后方，那根粉色的震动棒尾巴还露在外面，周围的皮肤一片嫣红。

铃音伸手，握住了那根震动棒的尾巴。

悠真敏感地一颤。

“哥哥，要拔出来吗？”铃音问。

悠真点头，又摇头，眼神混乱。

铃音明白了。她先将震动棒的强度调到最低档，然后，缓缓地、一点一点地往外抽。

“嗯……啊……”悠真发出甜腻的呻吟。被填满许久的后穴传来强烈的空虚感，内壁依依不舍地绞紧，试图挽留。当震动棒完全离开时，那个小口无法立刻闭合，微微张合着，流出更多透明的液体。

接着，铃音解开了 harness 的扣子，小心翼翼地将那个沉甸甸的、装了不知多少发精液的避孕套从飞机杯上取了下来，打了个结，放在一边。然后才将飞机杯从悠真早已红肿的前端褪下。

小巧的性器暴露在空气中，顶端红肿湿润，还在微微跳动。

铃音没有犹豫，凑上去，轻轻吻了吻那湿漉漉的顶端，用舌头舔掉渗出的清液。

“哈啊……”悠真仰起头，脖颈绷紧。

铃音站起身，开始脱自己的衣服。牛仔裤，内裤，卫衣……很快，她也赤裸了。而她那根尺寸惊人的阴茎，早已完全勃起，青筋盘绕，蓄势待发。

她重新跪下来，这次是面对面地跨坐在悠真腿上。狭窄的空间里，两人赤裸的身体紧紧相贴。

铃音摘下悠真已经歪掉的猫耳发箍，拨开他被汗浸湿的假发，然后，吻了上去。

这是一个深吻，带着咸涩的泪水味道和情欲的炽热。悠真主动回应着，舌头与妹妹的交缠，双手紧紧搂住妹妹的腰背。

铃音一边吻着，一边摸索着，将自己滚烫坚硬的顶端，抵上了那个湿滑泥泞的入口。

“哥哥……”她喘息着，退开一点，看着悠真迷离的眼睛，“我进去了。”

悠真点头，双腿主动分得更开，环住了铃音的腰。

没有任何阻碍，粗大的龟头轻易地挤开了那早已被充分开拓、湿滑无比的穴口，长驱直入。

“啊——！！”两人同时发出满足的叹息。

太深了，太满了。远比震动棒更真实、更炽热、更有生命力的触感，瞬间填满了悠真所有的空虚。他内壁自动地绞紧，热情地包裹、吮吸着入侵者。

铃音开始缓慢地抽动。

“噗嗤……噗嗤……”清晰的水声在安静的卫生间里回荡。每一次进出，都带出更多润滑和肠液。

铃音伸手，解开了悠真胸前的衬衣扣子，让那对带着乳夹的、红肿的乳头暴露出来。她低头，含住了其中一边，用牙齿轻轻磨蹭乳夹。

“嗯啊……！铃音……！”悠真抱紧了妹妹的头。

郊狼还贴在大腿内侧。铃音摸索着找到手机，打开了APP。

“哥哥，我们继续。”她喘息着说，然后，按下了开关。

“滋……”

轻微的电流再次窜过，与阴茎的抽插叠加在一起。

“啊——！不行……那里……啊！”悠真被刺激得疯狂摇头，前端又渗出液体。

铃音加快了抽插的速度，每次都深深顶到最深处，撞击着前列腺。同时，她用手指拨弄着另一边乳头上挂着的铃铛。

“叮铃……叮铃……”

撞击声、水声、电流声、铃铛声、喘息声、呻吟声……交织成一首淫靡的交响乐。

悠真感觉自己要疯了。快感层层叠加，累积到前所未有的高度。他失神地呻吟着，说着破碎的话语：

“铃音……好深……嗯啊……要死了……”
“妹妹……好厉害……哥哥好舒服……”
“再快一点……啊！就是那里……！”
“郊狼……呜……好麻……但是好舒服……”

铃音也被哥哥淫乱的样子和紧致的包裹刺激得不行。她抱紧悠真，将脸埋在他颈窝，贪婪地嗅着他的气息，下身疯狂地冲刺。

“哥哥……哥哥里面……好热好紧……”
“全都吃下去了……我的……全部……”
“哥哥是我的……只是我的……”

在郊狼的电流、乳夹的刺痛、和妹妹近乎狂暴的撞击下，悠真的意识再次被推上顶峰。

“要……要去了……铃音……一起……”他尖叫着，前端猛地喷射出最后一股稀薄的液体，溅在两人小腹之间。

几乎同时，铃音也达到了极限。她狠狠顶入最深处，龟头嵌入宫颈口般的深度，然后，炽热的精液猛烈地喷射而出，一波接一波地灌满了悠真的肠道。

“嗯啊啊啊——！”

两人紧紧相拥，在高潮的余韵中颤抖、喘息。

许久，铃音才慢慢退出。混合着大量精液和肠液的浓白液体，立刻从悠真后穴涌出，顺着大腿流下，滴在地上。

悠真瘫在马桶盖上，眼神涣散，浑身瘫软，连手指都动不了。只有胸口还在微微起伏。

铃音也累坏了，但强撑着，用湿巾仔细地帮哥哥清理身体——擦掉身上的汗水、精液、泪痕，小心地取下乳夹（那里已经留下了明显的红痕），撕下郊狼的贴片，最后，帮他整理好凌乱的女仆装，重新戴好口罩和假发——虽然已经不可能完全恢复原样了。

然后她才草草清理了自己，穿上衣服。

做完这一切，她蹲在悠真面前，握住他的手。

“哥哥，我们回家吧。”

悠真缓缓点头，眼神终于恢复了一些焦距。他看着铃音，然后慢慢抬起手，轻轻碰了碰妹妹的脸颊。

虽然疲惫不堪，虽然羞耻感可能会在之后如潮水般反噬，但此刻，在这个狭小、肮脏、充满情欲气味的公共厕所隔间里，他感到一种奇异的安宁。

他们一起做了疯狂的事。他们分享了最深的秘密和最禁忌的快感。

他们是共犯。

是彼此在这个不正常的世界里，唯一的锚点。

铃音扶起悠真，两人互相搀扶着，走出了隔间，走出了厕所，迎着傍晚微凉的风，踏上了回家的路。

身后，公园的灯火次第亮起。

而他们的夜晚，才刚刚开始。`,pd=Object.freeze(Object.defineProperty({__proto__:null,default:nd},Symbol.toStringTag,{value:"Module"})),ed=`---
order: 20
---
# #20 正字、囚服与永夜的盛宴

玄关的门在身后轻轻合拢，隔绝了外面世界最后一缕天光。宅邸内部的空气，永远弥漫着一种与季节无关的、恒定的微凉，以及铃音偏爱的、混合了白麝香与枯萎玫瑰的熏香气息。这气息对悠真而言，早已从陌生变为熟悉，再从熟悉变为一种嵌入骨髓的、关于“归巢”与“禁锢”的条件反射。

她的身体还在轻微颤抖，制服裤裆处一片冰凉湿腻，是车上那场过于激烈的高潮留下的证据。眼罩依然严实地遮蔽着视线，项圈紧贴着脖颈的皮肤。铃音牵着项圈上的短链，引领她向内走去。早川的脚步声跟在一旁，很轻，但存在感鲜明。

没有回卧室，而是走向了宅邸深处某个她不常去的房间。脚下的触感从入口的大理石变成柔软厚重的地毯，空气中熏香的味道更浓了一些，还夹杂着一丝……皮革和金属的、冷冽而洁净的气味。

“到了。”铃音停下脚步，解开了牵引短链，但项圈未除。“早川同学，可以开始了。”

“是。”早川应道，声音里带着一丝不易察觉的紧绷和……期待？

悠真不安地站在原地，双手下意识地攥紧了制服外套的下摆。她能听到早川走开的脚步声，然后是打开柜门、取出物件的细微声响。

“今天是特别奖励日，小白。”铃音的声音在她面前响起，同时，冰凉的手指开始解开她制服外套的纽扣。“奖励你在学校努力忍耐，也奖励你……今天在车上那么诚实又可爱的表现。”

外套被脱下，然后是领带、衬衫。春日晚间的空气接触到暴露的皮肤，激起一层细小的战栗。她的上半身只剩下那件在体育课时换上的白色运动背心，此刻也微微汗湿，勾勒出胸前小巧却已具雏形的柔软弧度。

接着是皮带、长裤。裤子被褪下时，粘腻冰凉的触感离开皮肤，让她稍微松了口气，但随即是更强烈的羞耻——下半身完全暴露了，只有那双黑色的蕾丝吊带袜和连接着硅胶垫、依旧埋藏着按摩器的下身。早川的目光，如同实质的火焰，灼烧着她赤裸的腿根和那狼藉的部位。

“先清洁。”铃音说。很快，温热湿润的毛巾覆了上来，仔细擦拭着她的腿间、小腹、大腿内侧，动作算不上温柔，但很彻底，洗去了汗水和爱液的黏腻。然后，那个让她又怕又依赖的按摩器被小心地取出，带出更多湿滑的液体。

清洁完毕后，悠真被引领着向前走了几步，然后按着肩膀，让她坐在了一个冰凉光滑的皮质表面上——似乎是一个类似美容院座椅或特殊刑椅的东西，靠背有一定弧度，扶手宽阔。她的手腕和脚踝被柔软但坚韧的皮质束带固定在了扶手和椅子腿上，姿势被调整为微微后仰，双腿被分开到一个羞耻的角度，用束带固定在大腿中部。

完全无法动弹。黑暗、束缚、暴露的姿势……熟悉的恐惧混合着一种扭曲的安心感席卷而来。

“第一套奖励服装。”铃音的声音带着愉悦。布料摩擦声响起，一件轻飘飘的、带着许多蕾丝和缎带的东西被套在了悠真身上。似乎是连衣裙，但布料少得可怜。上身是深紫色的蕾丝胸衣，勉强托住她胸前的柔软，边缘装饰着黑色的缎带蝴蝶结。下身则是一条同样深紫色的、几乎完全透明的蕾丝短裙，长度只到大腿根部，裙摆缀着一圈精致的黑色蕾丝。配套的还有黑色的过膝蕾丝长袜，袜口同样有缎带蝴蝶结，以及一双紫色的高跟鞋——鞋跟细高，迫使她的脚背绷直，足弓形成一道诱人的曲线。

这套衣服与其说是穿着，不如说是一种装饰性的捆绑，将她的身体装点成一份等待拆开的礼物。

“很适合你，小白。”铃音的手指划过蕾丝边缘的皮肤，“紫色很衬你的肤色，显得又纯又欲。”

早川没有发表评论，但悠真能听到她变得略微粗重的呼吸声。

“那么，奖励开始。”铃音宣布。

首先到来的是吻。

并非粗暴的侵占，而是缓慢的、带有碾磨意味的贴近。铃音的嘴唇贴上来的瞬间，悠真微微瑟缩了一下，但随即被那熟悉的、带着清甜气息的柔软俘获。铃音的舌尖先是细细描摹着她的唇形，像在品尝一块精致的点心，然后才温柔地顶开她因为紧张而微闭的牙关，探入口腔。

“嗯……”悠真发出一声细微的呜咽。这个吻太温柔了，温柔得不像惩罚，反而让她更加心慌意乱。

铃音的舌头灵活地扫过她的上颚，刮蹭过敏感的牙龈，然后缠上她不知所措的舌尖，轻轻吮吸、逗弄。唾液交换的声音在寂静的房间里细微地响起，伴随着两人逐渐同步的、湿润的呼吸声。铃音的手捧住了她的脸颊，拇指轻轻摩挲着她的耳后，带来一阵阵酥麻。

这个吻持续了很久，深入而绵长。悠真起初的僵硬渐渐融化，身体不由自主地放松下来，甚至开始生涩地回应，舌尖怯怯地触碰铃音的。一股热流从小腹升起，腿间刚刚被清洁过的地方，又开始渗出湿意。

当铃音终于结束这个长吻，稍稍退开时，悠真已经气喘吁吁，眼罩下的脸颊绯红，被亲吻得红肿湿润的嘴唇微微张着，无意识地寻求更多。

“喜欢吗？”铃音的声音带着笑意，拇指擦过她嘴角溢出的银丝。

“……喜欢。”悠真诚实地小声回答。

“乖。”铃音奖励般地轻啄了一下她的鼻尖，然后退开。“接下来，是早川同学的份。”

早川靠近了。她的气息与铃音截然不同，更加清冷，带着一丝不易察觉的紧绷。她的吻也完全不同。

几乎是带着一种压抑的、急切的掠夺性，早川的嘴唇重重压了下来。那不是品尝，更像是标记。她的舌头强势地闯入悠真的口腔，带着不容拒绝的力道，卷住她的舌用力吮吸，仿佛要将她的灵魂也吸走。牙齿偶尔磕碰到一起，带来轻微的痛感，却奇异地混合在汹涌的情欲里。

“唔……早川……主人……”悠真在亲吻的间隙破碎地呼唤，双手在束带下徒劳地挣动。早川的吻太具侵略性，让她有些害怕，却又被其中蕴含的、几乎要满溢出来的炽烈情感所灼烧，身体背叛意志地变得更加柔软，更加迎合。

早川的一只手按住了她的后脑，加深这个吻，另一只手则粗暴地揉捏着她被蕾丝胸衣包裹的乳房，指尖隔着薄薄的蕾丝抠弄着顶端已经硬挺的乳尖。疼痛和快感同时袭来。

这个吻比铃音的更加狂野，也更加混乱。早川的呼吸滚烫急促，喷洒在悠真脸上。她能尝到早川口中淡淡的、类似薄荷的味道，以及更深处的、某种苦涩而炽热的情感。唾液来不及吞咽，从两人纠缠的嘴角滑落。

就在悠真觉得自己快要因这个吻而窒息时，早川猛地放开了她，退后一步，胸膛剧烈起伏，盯着悠真被吻得一片狼藉、红肿发亮、还带着齿痕的嘴唇，眼神幽暗得可怕。

悠真大口喘息着，嘴唇火辣辣地痛，却又有一种奇异的满足感。身体深处空虚的悸动变得更加鲜明。

“看来小白也很喜欢早川同学的吻呢。”铃音的声音适时响起，带着一丝玩味。“那么，接下来是真正的奖励了。”

铃音走到了悠真被分开的双腿之间。布料摩擦声，金属拉链被拉下的声音。悠真知道接下来会发生什么，身体既恐惧又期待地颤抖起来。

“自己说，小白，”铃音的声音很近，那根熟悉的、尺寸惊人的粗硬肉棒，已经抵上了她湿滑泥泞的穴口，龟头灼热的温度透过薄薄的皮肤传递进来，“想要什么？”

“想要……主人的大鸡巴……”悠真啜泣着，腰部难耐地微微向上挺动，试图让那龟头进入一点点，“插进小白的小穴里……狠狠地干我……”

“如你所愿。”

腰身沉下，破开湿软的屏障，一气贯入深处。

“啊啊啊——！！！”

悠真的尖叫被顶得支离破碎。那熟悉的、被彻底填满撑开的饱胀感，混合着铃音毫不留情的、从一开始就全速的冲刺，瞬间将她抛上了快感的浪尖。铃音的性器粗长坚硬，每一次抽出都几乎尽根而出，带出咕叽的水声，再狠狠撞入最深处，龟头重重碾过宫颈口。

“噗嗤！噗嗤！啪！啪！”

肉体碰撞的声音规律而沉重，混合着粘腻的爱液声和悠真失控的哭叫。蕾丝短裙被撞得不断翻飞，黑色的长袜与紫色的高跟鞋在空中无助地晃动。束带限制了她身体的移动，她只能被动地承受着这狂暴的侵犯，每一次撞击都让她的身体在皮椅上弹动，胸口在蕾丝胸衣里剧烈起伏。

“啊……主人……好深……顶到了……又要去了……”悠真在持续的猛攻下语无伦次，高潮来得又快又急，在铃音又一次深入撞击后，她身体绷紧，小穴剧烈痉挛，一股热流喷涌而出，浇淋在两人交合的部位。

“这就去了？小白今天真敏感。”铃音喘息着，动作却未停，反而趁着她的高潮收缩，更加凶狠地抽插，“但是，奖励时间还很长哦。”

她继续操干着还在高潮余韵中抽搐的悠真，然后对早川示意：“早川同学，该你了。让她前面也快乐起来。”

早川早已准备就绪。她服下了药水，此刻腿间那根与她清冷外表截然不同的、同样粗硕狰狞的肉棒早已昂然挺立，紫红色的龟头饱胀发亮，渗出透明的先走液。她走到悠真面前，将那根滚烫的性器，抵在了悠真微微张开、喘息着的嘴唇上。

“张嘴，小白。”早川的声音沙哑得不成样子。

悠真顺从地张开嘴，让那硕大的龟头闯入。咸腥的味道瞬间充斥口腔。早川没有给她适应的时间，扶着她的后脑，开始向前顶送，将自己深深送入那温暖湿滑的口腔深处。

“呜……嗯……”悠真被前后夹击，喉咙被粗大的肉棒侵入，带来窒息般的快感和强烈的呕吐反射，眼泪一下子涌了出来。但她努力放松喉咙，学着用舌头去舔舐、缠绕口中的柱身。

早川的抽插起初还算克制，但随着铃音在后面操干悠真的节奏加快，她也变得越发失控。她将悠真的头固定住，腰部有力地前后摆动，粗大的肉棒在悠真湿热的口腔和喉咙深处进出，龟头不断顶到喉口，带出咕噜咕噜的吞咽声和悠真痛苦的呜咽。唾液无法控制地溢出，顺着她的下巴、脖颈流下，浸湿了胸前的蕾丝。

前后两个洞穴被同时侵犯，口腔被填满到近乎窒息，后穴被撞击到子宫都在震颤。悠真感觉自己的意识彻底飘散了，只剩下身体最本能的反应——吞咽、收缩、迎合。视线一片黑暗，但快感却如同绚烂的烟花，在神经末梢不断炸开。她像一艘在狂风暴雨中颠簸的小船，被两股汹涌的欲望浪潮抛起、摔落、再抛起。

铃音和早川似乎形成了某种默契的配合。当铃音深深顶入时，早川会暂时放慢速度，让悠真能够呼吸；当早川重重突入喉咙时，铃音则会转为缓慢的研磨。两人交替着主导节奏，将悠真置于持续不断、却又花样翻新的快感地狱之中。

“小白的小穴，吸得好紧……”铃音在后面喘息着说，手指用力掐着悠真的腰臀，留下指痕，“全吃进去了……真贪吃……”

“喉咙……也在吸……”早川的声音断续而压抑，她看着悠真被自己的性器操得满面潮红、泪水涟涟、口水横流的模样，眼神深处有什么东西在碎裂，又在燃烧，“全部……吞下去……”

悠真已经无法回应，只能发出含糊的、饱含情欲的鼻音和呜咽。她感觉自己快要被玩坏了，身体已经高潮了数次，每一次都带来剧烈的痉挛和失禁般的喷射，但侵犯却从未停止，快感仍在不断累积，向着某个未知的、令人恐惧的顶峰攀升。

终于，铃音低吼一声，死死抵住最深处，滚烫的精液强劲地喷射进悠真的子宫深处。几乎在同一时刻，早川也猛地将肉棒顶到悠真喉咙最深处，在她窒息般的抽搐中，将浓稠的精液悉数灌入她的食道。

悠真被前后同时内射，身体像过电般剧烈颤抖，眼前闪过一片白光，达到了一个近乎昏厥的、毁灭性的高潮。大量的混合液体从她前后两个被填满的洞口溢出。

短暂的寂静，只有三人粗重凌乱的喘息。

铃音率先退出，带出更多白浊。她拿过一条温热的湿毛巾，开始清理悠真腿间的狼藉。动作依旧细致。

“第一轮奖励，结束。”铃音宣布，声音带着性事后的慵懒和满足。“表现很好，小白。所以，要留下第一个标记。”

她拿过一支黑色的、笔头柔软的记号笔，冰凉的笔尖触碰到悠真大腿根部内侧细嫩的皮肤。悠真微微瑟缩。

铃音在那里，工整地写下了一个“正”字的第一笔——短短的一横。

“记住，每让你高潮一次，就会在这里记下一笔。”铃音的声音轻柔，却带着不容置疑的意味，“当‘正’字写满，会有特别的终极奖励哦。”

终极奖励？悠真混沌的脑子无法思考那是什么，但皮肤上那微凉的、带有存在感的笔迹，却像烙印一样，提醒着她方才的沦陷和即将到来的更多。

清理工作继续进行。早川也退开了，沉默地整理着自己，但目光始终没有离开过悠真大腿上那个新鲜的黑色笔迹。

“休息十分钟。”铃音解开了悠真一只手腕的束带，将一杯温水递到她嘴边。悠真就着她的手，小口啜饮，喉咙火辣辣地痛。

十分钟后，悠真被从皮椅上解下来。腿软得几乎站不住，铃音和早川扶着她，帮她脱下了那身已经凌乱不堪的深紫色蕾丝套装。

“第二套。”铃音的声音带着期待。

这次是一件纯白色的、带有巨大蝴蝶结装饰的连体式情趣内衣。材质是光滑的乳胶，紧紧包裹住身体，勾勒出每一处曲线。胸部是镂空的蕾丝设计，下身则是完全开裆，将整个私处和臀部暴露在外。背后有交叉的绑带，被铃音和早川仔细地收紧，让乳胶更加贴合，甚至带来轻微的束缚感。配套的还有白色的长筒乳胶手套和过膝乳胶长靴，同样是闪亮的材质。

穿戴完毕，悠真感觉自己像一个人形的、精致的白色玩偶，每一寸皮肤都被闪亮紧绷的乳胶包裹，只有关键部位毫无遮掩地敞开着，等待着使用。

“像不像一个等待拆封的礼物，早川同学？”铃音笑着问。

“……嗯。”早川的目光流连在悠真被乳胶衬得更加白皙滑腻的肌肤上，尤其在开裆处那片湿润红肿的风景上停留最久。

新一轮的侵犯，以早川为主导开始。

或许是为了弥补之前只能使用后穴和口腔的“缺憾”，早川这次直接面对了悠真。她将悠真推倒在房间中央一张铺着黑色丝绒的大矮榻上，分开她穿着乳胶长靴的腿，将自己再次勃起的性器，抵在了那依旧湿润、不断收缩的小穴入口。

没有过多前戏，早川沉腰进入。

“啊……早川主人……”悠真喘息着，乳胶包裹的身体在丝绒上扭动。早川的进入比铃音更带有一丝蛮横的探索欲，她似乎想用自己的性器，彻底丈量、拓印悠真体内的每一寸褶皱。

她开始抽插，速度不快，但每一次都极其深入，并且不断变换着角度，寻找着能让悠真崩溃的点。很快，她找到了——某个倾斜的角度，能让龟头刮蹭到腔内一个极其敏感的区域。

“呀！那里……不行……太……太刺激了……”悠真瞬间尖叫起来，身体像虾一样弓起，乳胶摩擦丝绒，发出窸窣的声响。

早川像是发现了宝藏，开始固定在这个角度，进行短促而激烈的顶弄，每一次都精准地刮过那个点。

“啊！啊！啊啊——！”悠真的叫声变得高亢而破碎，眼泪涌出，很快，在一次集中的猛攻下，她达到了高潮，爱液喷溅。

早川没有停下。她稍稍退出一些，然后用拇指和食指，捏住了悠真暴露在乳胶开裆上缘、因为高潮而更加充血挺立的阴蒂，开始快速地揉搓、掐弄。

“呜啊——！不要……碰那里……刚刚……刚刚才……”悠真哭喊着扭动，但乳胶的束缚和早川的体重让她无法逃脱。阴蒂被粗暴对待带来的尖锐快感，混合着小穴高潮后的过度敏感，形成一种近乎残酷的刺激。

铃音此时也加入了。她跪在悠真头侧，将自己再次硬挺的肉棒送到悠真嘴边。“小白，用嘴让主人舒服。”

悠真呜咽着，张开嘴含住。铃音扶着她的头，开始缓慢而深沉地抽送，享受着口腔的温热包裹。同时，她的手也没闲着，探到悠真胸前，隔着镂空的蕾丝乳胶，用力揉捏那对小巧的乳房，指尖抠弄着乳尖。

前后上三路同时被侵犯、被刺激。悠真感觉自己被拆解成了不同的感官模块，每一块都在承受着超负荷的快感轰炸。她无法思考，只能随着三人的动作做出最本能的反应——吮吸、收缩、颤抖、哭泣。

早川在悠真又一次被阴蒂刺激逼出高潮后，终于也低吼着，将滚烫的精液射进了她的深处。同时，铃音也释放在了她的口腔里。

悠真被灌得满满当当，意识模糊。铃音再次拿起那支黑色记号笔，在她大腿根部那个“正”字第一笔的下方，添上了第二笔——短短的一竖。

清理，短暂的喘息，更换服装。

第三套是女仆装。但绝非传统的保守款式。黑色的连衣裙短得惊人，裙摆只勉强遮住臀部下缘，背后是交叉绑带直至腰际，胸前开襟很低，露出深深的乳沟和边缘。白色的蕾丝围裙与其说是遮挡，不如说是装饰和强调。头上戴着黑色的蕾丝发箍，腿上穿着带有蕾丝边的白色长袜，脚上是黑色的圆头皮鞋。

穿上这身衣服的悠真，少了几分之前的色情玩偶感，多了几分清纯又放浪的禁忌气息，像是一个渴望被主人狠狠“使用”的坏掉的女仆。

这次的游戏加入了道具。铃音拿出了一对小巧的、带有细链的乳夹，夹在了悠真暴露的乳尖上，轻轻一拉，细链连接到了她脖子上的项圈。只要她低头或身体移动，乳夹就会牵拉，带来刺痛和快感。

早川则拿出了一支细长的、冰凉的金属按摩棒，顶端有一个小小的圆球。她打开开关，按摩棒发出低低的震动声。她将震动着的圆球，抵在了悠真被女仆裙半遮半掩的臀缝之间，在后穴入口处打转。

“两位主人……啊……”悠真被前后的刺激弄得站立不稳。乳夹的牵拉带来持续的微痛，后穴处的震动则勾起之前被侵犯的记忆和渴望。

铃音从背后抱住了她，双手穿过腋下，用力揉捏她戴着乳夹的乳房，同时啃咬她的后颈和肩膀。早川则跪在她面前，脸埋在她穿着白色蕾丝袜的腿间，伸出舌头，开始舔舐她早已泥泞不堪、不断收缩的小穴。

“哈啊……早川主人……舌头……”悠真仰起头，靠在铃音怀里，身体因为三重的刺激而剧烈颤抖。早川的舌头灵活而有力，时而舔弄阴蒂，时而钻入穴口，时而扫过周围的敏感带。温热湿滑的触感，配合着后穴的震动和胸前的刺痛，快感以另一种方式累积。

铃音一边揉弄着她，一边也在她耳边低语：“小白，说，你是谁的小女仆？”

“是……是主人的……小女仆……啊！舌头……好舒服……”

“女仆应该做什么？”

“服侍……服侍主人……让主人舒服……嗯啊……”

“那现在，用你的小穴，好好‘服侍’早川主人的舌头。”

在铃音的言语刺激和早川越来越深入的舔弄下，悠真很快又达到了高潮，颤抖着喷出少许液体在早川脸上。早川毫不在意，甚至伸出舌头舔了舔嘴角，然后继续。

这次的高潮后，铃音再次添上了一笔——第三笔，另一横。

服装继续更换。

第四套是皮革束缚装。黑色的紧身皮革胸衣，将腰勒得极细，胸部被托高挤压，乳尖从特制的孔洞中暴露出来。下身是同材质的、带有复杂绑带和金属扣的吊袜带，连接着黑色的渔网袜。脸上还戴了一个只露出眼睛和嘴巴的黑色皮革口枷，让她无法合拢嘴，唾液不断流出。手腕和脚踝戴着配套的皮革铐环，用短链彼此连接，活动受限。

这套装束充满了BDSM的暗示，将悠真装扮成了一个彻底的、等待被驯服的奴隶。

游戏也更加激烈。铃音使用了皮鞭——不是真的狠抽，而是用鞭梢轻轻抽打悠真被皮革束缚的臀部、大腿内侧，留下一道道轻微的红痕，带来火辣辣的刺痛和耻辱感。早川则使用了一个跳蛋，塞进悠真的后穴，然后和铃音一起，用各种工具和手指，轮流玩弄她前面的小穴和阴蒂，逼迫她在疼痛和快感的交织下，一次次崩溃高潮。

每当她高潮一次，铃音就会在她已经有一个半“正”字的大腿根部，再添一笔。

不知过了多久，换了多少套衣服（还有护士服、学生泳装、和服襦袢等等），高潮了多少次。悠真早已数不清，意识在极乐和崩溃的边缘反复横跳。大腿根部的皮肤上，已经被黑色记号笔写满了整整两个“正”字，第三个也写到了第三笔。皮肤因为反复的擦拭和书写，有些发红敏感。

她的身体布满了各种痕迹——吻痕、咬痕、指痕、鞭痕，被不同的衣物勒出的红印，还有干涸的精液与爱液的混合污渍。嗓子早已哭喊得沙哑，眼泪流了又干，干了又流。嘴巴因为长时间佩戴口枷或承受侵犯而无法合拢，唾液淋漓。整个人像一件被过度使用、残破却依旧美丽的玩偶。

最终，当她穿着一套极其轻薄、几乎完全透明、只缀着几颗珍珠的肉色纱裙，像一缕轻烟般瘫倒在铺满丝绒和皮毛的榻上，因又一次过于激烈的高潮而抽搐着失去意识前，她模糊地看到铃音拿起笔，在她大腿上，完成了第三个“正”字的最后一笔。

然后，无边的黑暗和彻底的虚脱吞噬了她。

……

意识缓慢回归时，悠真发现自己躺在卧室柔软的床上。身体已经被彻底清洁过，散发着清爽的沐浴露香气。那些五花八门的情趣服装已经被换下，身上只穿着柔软的丝质睡裙。眼罩和项圈依然戴着，脚踝上的锁链也重新扣好。但身体各处传来的、如同被拆散重组过的酸痛，以及大腿根部皮肤上那清晰存在的、微痒的笔触感，无比真实地提醒着她昨夜发生的一切。

不是梦。

那是持续了几乎一整夜的、疯狂的“奖励”。

房门被轻轻推开，铃音走了进来，手里端着托盘，上面是清淡的粥和小菜。

“醒了？小白。”铃音在床边坐下，摸了摸她的额头，“睡得好吗？”

悠真轻轻点了点头，嗓子干痛，说不出话。

铃音喂她喝了点水，然后开始一小勺一小勺地喂她喝粥。动作温柔细致，与昨夜那个掌控一切、带领她攀上一座又一座快感巅峰的“主人”判若两人。

“昨晚小白很努力呢。”铃音用湿毛巾擦了擦她的嘴角，“高潮了整整十五次。三个‘正’字，记得吗？”

悠真颤了颤睫毛。十五次……那么多吗？她只记得无尽的快感、羞耻和一次又一次的崩溃。

“很棒的记录。”铃音笑着，手指隔着睡裙，轻轻抚过她大腿根部那片被写了字的皮肤，“这里，是小白属于我们的证明，是小白快乐的记录。”

悠真感觉到一阵轻微的酥麻从被抚摸的地方传来，混合着羞耻，还有一种奇异的、被填满的安心感。

“好好休息。”铃音为她掖好被角，“接下来几天，是恢复期。不过……”她俯身，在悠真耳边轻声说，“等小白恢复好了，我们会继续的。直到写满更多的‘正’字，直到……给你那个‘终极奖励’。”

铃音离开了。

悠真独自躺在昏暗的房间里，听着锁链轻微的声响，感受着身体深处的余韵和酸痛，以及大腿皮肤上那些黑色的、象征着她无数次沉沦的笔迹。

终极奖励……会是什么呢？

她不知道。

但在这一刻，在这具被彻底使用、标记、并期待着下一次“奖励”的身体里，一种近乎认命的、扭曲的平静，缓慢地弥漫开来。

窗外，新的一天已然开始。

而对于被囚禁在房间内、身上刻写着欲望印记的“小白”来说，时间只是用来等待下一次盛宴的、缓慢流动的沙漏。`,td=Object.freeze(Object.defineProperty({__proto__:null,default:ed},Symbol.toStringTag,{value:"Module"})),ad=`---
order: 21
---
# #21 正字烙印与永夜沉沦

晨光透过厚重的窗帘缝隙，挤进一丝吝啬的苍白。房间内依旧沉浸在人工维持的昏暗中，只有角落一盏盐灯散发着暖昧的橙红光线。空气里昨夜疯狂的气息尚未完全散去，混合着精液、汗水、皮革、以及铃音惯用的那款催情熏香，沉淀成一种粘稠的、仿佛具有实体般压在胸口的气味。

悠真在浑身散架般的酸痛中醒来。意识像是沉在浑浊水底，缓慢上浮。每一个关节都在呻吟，每一寸肌肉都在诉说着过度使用的疲惫。但比这更深处的，是某种难以言喻的空虚和……渴望。小穴深处隐隐传来被过度撑开后的、微微麻木的钝痛，却又伴随着一种奇异的、未被填满的悸动。后穴亦然。喉咙火烧火燎，吞咽时带来刺痛。

她微微动了一下，锁链发出轻响。眼罩和项圈依旧牢固地占据着它们的位置。大腿根部那片皮肤传来清晰的、微痒的触感——是那些黑色的“正”字。昨夜的一幕幕随着意识的清晰，如同潮水般涌回脑海：一套套更换不休的、羞耻至极的情趣服装；铃音和早川轮番的、或温柔或暴烈的侵犯；口腔、前穴、后庭被反复填满、内射；还有那一次次被推向顶峰、直到意识涣散的高潮……以及，每高潮一次，大腿皮肤上便多出的、冰凉的一笔。

三个完整的“正”字，加上第四、第五个的开头几笔。她甚至不记得具体有多少次了，只记得那支黑色记号笔不断落下时，皮肤传来的微痒触感，和铃音带着笑意的计数声。

羞耻感后知后觉地汹涌而来，烧灼着她的脸颊和耳根。自己竟然……变成了那个样子。在她们身下辗转承欢，哭泣求饶，甚至主动迎合，只为获得更多快感和……她们的“奖励”。那些淫荡的言语，那些不堪的姿态，那些喷射的液体和被玩弄到失神的瞬间……

然而，在这羞耻的烈焰之下，身体却诚实地回忆起那些极致快感的碎片，小腹深处泛起一阵熟悉的、可耻的热流。她夹紧双腿，丝质睡裙摩擦着敏感的肌肤，带来一阵细微的战栗。

门被轻轻推开，脚步声传来。不是铃音轻盈的步伐，也不是早川略带迟疑的步子。这个脚步更沉稳，带着一种……公事公办的冷漠。

悠真立刻紧绷起来，下意识地缩了缩身体。

“醒了？”一个陌生的、略带沙哑的女声响起，听起来年纪不轻。是之前偶尔会来帮铃音处理一些“杂务”的妇人，悠真记得铃音叫她“岩崎太太”。她似乎是铃音家的老佣人，知情且沉默，只做吩咐的事。

岩崎太太走到床边，没有多余的话，直接掀开了悠真的被子。微凉的空气接触到皮肤，悠真忍不住轻颤。她能感觉到岩崎太太的目光平静地扫过她布满痕迹的身体，尤其是在大腿根部那些黑色字迹上停留了片刻，但没有任何情绪波动，仿佛只是在检查一件物品的状况。

“清洁和上药。”岩崎太太言简意赅，开始用温水和特制的、带有舒缓效果的药液擦拭悠真的身体。她的动作麻利而专业，力道适中，既不会弄疼悠真，也绝谈不上温柔。重点清洁了腿间、后庭和口腔，然后涂抹上清凉的药膏，缓解红肿和不适。

过程中，岩崎太太甚至掰开悠真的腿，仔细检查了阴部和后穴的状况，并用一根细小的、涂抹了药膏的棉签探入后穴内部进行简单处理。悠真羞耻得全身僵硬，却只能任由摆布。

清洁上药完毕，岩崎太太为她换上干净的睡裙和新的、更加柔软的脚踝衬垫，然后端来一碗温度适宜的流质食物。她扶起悠真，用勺子一口一口喂给她吃。食物是精心调配的营养粥，易于消化。

全程，岩崎太太没有说一句多余的话，也没有对悠真身上的任何痕迹或状态表现出好奇或评判。她就像一个执行精密程序的机器人。喂食结束后，她又给悠真喂了一些温水，然后便收拾东西离开了，仿佛从未出现过。

这种彻底的、非人化的“照料”，反而比铃音或早川带着情欲的触碰更让悠真感到一种深入骨髓的寒意。她清楚地意识到，在她们眼中，自己或许真的只是一件需要定期维护、以保证其“使用功能”的物品，一件名为“小白”的宠物或性玩具。

岩崎太太离开后不久，铃音走了进来。她换了一身居家服，看起来神清气爽，脸上带着餍足后的慵懒笑意。

“早上好，我的小淫娃。”铃音在床边坐下，伸手抚摸悠真依旧泛着红晕的脸颊，指尖流连到她的嘴唇，轻轻按压那微肿的唇瓣，“岩崎太太服务得还周到吗？她处理这些很有经验。”

悠真轻轻点头，说不出话。

“看来昨晚真的累坏了。”铃音怜惜地吻了吻她的额头，然后手指下滑，探入睡裙领口，握住一只小巧的乳房，指尖拨弄着乳尖，“这里，还有这里，”她的另一只手隔着睡裙按在悠真小腹上，“都被喂得饱饱的呢。早川同学射了很多在里面哦，我的也是。”

露骨的话语让悠真身体轻颤，乳尖在铃音的玩弄下迅速硬挺。

“不过，小白恢复得很快嘛。”铃音轻笑，感受着手下滑腻肌肤逐渐升高的温度和微微加快的心跳，“身体还记得快乐，对吗？即使被玩得那么狠，里面是不是又开始痒了？想要主人的大鸡巴再次插进去，用力填满？”

“主人……”悠真沙哑地开口，带着无助的渴求。身体确实在苏醒，在叫嚣。昨夜那无数次的巅峰，似乎打开了她体内的某个开关，让情欲变得更容易被点燃，也更难以忍受空虚。

“乖，今天让你好好休息。”铃音却收回了手，语气温柔，“肌肉和那里都需要恢复。不过……”她话锋一转，手指点在那片写满正字的皮肤上，“这里的‘记录’可不能因为休息就中断哦。”

她拿过那支熟悉的黑色记号笔，冰凉的笔尖再次触碰到大腿根部。“虽然今天不做爱，但我们可以用别的办法，让小白继续积累‘正’字。毕竟，距离我上次提到的‘终极奖励’，还差得远呢。”

悠真瑟缩了一下，既害怕，又忍不住好奇和期待。终极奖励……到底是什么？

“今天呢，就玩点简单的。”铃音从床头柜拿出一个小巧的遥控器，和一对……粉色的、椭圆形的、带有细长尾巴的小玩意。跳蛋。

“看到这两个小东西了吗？”铃音将跳蛋举到悠真面前，虽然她看不见，“它们会代替我和早川同学，今天一整天都陪着你哦。一个，会放在你的小穴里，另一个，放在你的后庭。它们会以最低的频率，持续地震动，提醒你身体的状态和主人的存在。”

悠真屏住呼吸。

“而这个小遥控器，”铃音晃了晃手里的东西，“我会带在身上。每当你完成我设定的‘小任务’，或者……每当你仅仅是因为想到主人、想到被侵犯、而控制不住地自己流水、甚至偷偷高潮的时候，我就会按下按钮，让这两个小东西给你一点‘小小的奖励’震动。当然，如果小白不乖，或者没有达到要求，它们也会给予一点‘小小的惩罚’哦。”

“而每一次，只要震动强度达到让你流水或高潮的程度，”铃音的笔尖轻轻划过那些黑色字迹，“这里，就会添上一笔。明白了吗？”

“……明白了，主人。”悠真声音颤抖。这意味着，即使没有真实的性交，她的身体和欲望也依旧被远程监控和操控着，连自慰般的高潮权利都被剥夺，转化为累积“正”字的工具。

“真乖。”铃音奖励般地吻了她一下，然后开始操作。她分开悠真的腿，将一枚涂满润滑剂的跳蛋，缓缓推入她依旧有些红肿湿润的小穴深处，细线留在外面。另一枚，则推入了后庭。异物侵入的感觉让悠真轻哼出声。

跳蛋开始工作，发出几乎听不见的微弱嗡鸣，带来持续不断的、细密的、如同无数小针轻轻扎刺般的酥麻感。不强烈，但无法忽视，像背景噪音一样持续刺激着她的感官，让她刚刚稍有平息的欲望再次被撩拨起来。

铃音调整好跳蛋的位置和频率，将遥控器收好。“那么，今天的第一个小任务……”她凑到悠真耳边，轻声说，“在接下来的一个小时里，不准流出一滴爱液。如果流出来了，哪怕只有一点点，你后穴里的小东西，就会用最大的强度震动五分钟哦。当然，如果做到了，会有奖励震动。”

这几乎是不可能的任务！在跳蛋持续的微弱刺激下，在经历了昨夜的疯狂后身体异常敏感的状态下，怎么可能控制住不分泌爱液？

“计时开始。”铃音拍了拍她的脸颊，起身离开了房间。

寂静重新笼罩。只有体内那两个微小却顽固的震动源，在持续不断地提醒她它们的存 在，和她必须完成的“任务”。悠真努力放空思绪，试图忽略身体深处渐渐涌起的、熟悉的湿热感。她收紧小腹和盆底肌肉，试图锁住什么。

但是，那细微的震动仿佛有生命一般，专挑她最敏感的地方钻。小穴里的那颗似乎总是能蹭到某个点，后庭的那颗则带着一种旋转的研磨感。记忆也不合时宜地涌现——铃音抽插的力度，早川啃咬的刺痛，精液灌满的灼热……身体忠实地回忆起那些快感，并做出了反应。

她能感觉到，腿间正在慢慢变得湿润。温热的液体不受控制地渗出，浸湿了睡裙的下摆和垫在身下的布料。

不行……不能流出来……

她夹紧双腿，身体微微扭动，试图压制那股冲动。但越是压抑，感觉却越是鲜明。快感如同涓涓细流，在跳蛋的引导和记忆的催化下，汇聚成越来越汹涌的暗流。

就在她几乎要控制不住的边缘——

“嗡——！！！”

后庭里的跳蛋毫无预警地骤然加强！从细微的嗡鸣变成了清晰有力的、高频的剧烈震动，像一只被激怒的蜂鸟在她肠道深处疯狂冲撞！

“啊——！”悠真猝不及防，尖叫出声，身体猛地弹起，又被锁链拉回。后穴被这突如其来的猛烈刺激弄得一阵紧缩，强烈的便意混合着尖锐的快感直冲头顶。与此同时，因为后穴的剧烈反应，前穴也受到牵连，爱液瞬间涌出更多，彻底决堤。

“不……不行了……流出来了……啊……停下……主人……求求你……”悠真哭喊着，在矮榻上无助地扭动，承受着后穴惩罚性的剧烈震动。这震动持续了整整五分钟，毫不留情。当她像离水的鱼一样瘫软下来时，身下已是一片湿冷，后穴阵阵抽搐，前面更是泥泞不堪。

没过多久，铃音走了进来。她看了看悠真狼狈的样子，叹了口气，语气却带着笑意：“哎呀，失败了呢。小白果然是个小淫娃，连这么简单的任务都做不到。”她拿出记号笔，在原有的正字旁边，毫不留情地添上了一笔。“这是惩罚的记录。”

然后，她拿出另一个遥控器（似乎能控制前穴的跳蛋），按下按钮。

小穴里的跳蛋也开始剧烈震动起来，但不同于后穴惩罚性的强度，这次的震动模式更加复杂，带着一种挑逗的、研磨的节奏，精准地碾压过阴道内壁的敏感点。

“嗯啊……主人……这是……奖励？”悠真被前后夹击的快感弄得神志不清。

“不，这是‘失败’的附加体验。”铃音俯身，在她耳边吹气，“好好记住这种感觉，记住因为控制不住欲望而受到的‘惩罚’和随之而来的……额外的快乐。它们是一体的哦。”

在铃音刻意操控的、交替出现的“惩罚”与“附加体验”中，悠真很快被逼出了今天第一次真正意义上的高潮。身体痉挛，爱液喷溅。

铃音满意地看着，再次落笔，添上了属于这次高潮的一笔。

“看，即使没有真正的性交，小白也能因为这种小小的玩具和规则而高潮呢。”铃音抚摸着悠真汗湿的头发，“你的身体，已经完全属于我们了。连高潮的时机和方式，都由我们决定。”

这一天，就在铃音层出不穷的“小任务”和随之而来的“惩罚”或“奖励”中度过。任务包括但不限于：保持某个姿势一定时间不准动；回答一些羞耻的问题（比如“昨天被早川主人内射的时候在想什么？”）；甚至只是单纯地“想象被主人侵犯并达到高潮”……悠真几乎全部失败。她的身体早已被调教得对快感毫无抵抗力，意志力在持续的情欲刺激下薄如蝉翼。

每一次失败，都伴随着惩罚性的剧烈震动和一笔黑色的记录。偶尔的成功（比如极其短暂地忍住了流水），则会得到一阵精妙计算过的、让她欲仙欲死的“奖励”震动，最终往往还是导向高潮和又一笔记录。

到了傍晚，悠真大腿根部的皮肤上，已经布满了密密麻麻的黑色笔迹，新的“正”字不断叠加在旧的之上，几乎看不出最初的形状，变成一片淫靡的、宣告着所有权和堕落次数的黑色图腾。她的身体和精神都疲惫到了极点，但情欲却被反复撩拨和满足（以一种被操控的方式），形成一种疲惫与兴奋交织的奇异状态。

当晚，早川理纱再次到来。看到悠真大腿上那片触目惊心的黑色印记时，她的瞳孔骤然收缩，呼吸停滞了一瞬。她走到床边，手指颤抖着，轻轻抚过那些字迹，仿佛能感受到其下肌肤的温热和无数次高潮的颤栗。

“都是……今天留下的？”早川的声音低哑。

“大部分是。”铃音微笑着，“小白今天很‘努力’呢，即使没有我们亲自上阵，也自己高潮了很多次哦。当然，是在我的小小‘帮助’下。”

早川看向悠真。悠真此刻软软地躺在床上，眼罩下的脸颊泛着不正常的红晕，嘴唇微张，喘息细弱，一副被彻底玩坏的样子。但早川敏锐地注意到，当她的手指划过那些字迹时，悠真的身体轻轻颤了一下，腿间似乎又有湿意蔓延。

她心中的情感剧烈翻腾。怜惜？痛苦？嫉妒铃音的掌控力？还是……看到属于自己的“物品”被打上如此深刻印记的、黑暗的满足感？

“早川同学也来加几笔吧？”铃音将记号笔递过来，语气带着怂恿，“作为主人，亲自记录下宠物的快乐，不是很有成就感吗？”

早川僵硬地接过笔。冰凉的笔杆握在手中，却仿佛有千钧重。她看着悠真大腿上那片已然混乱的黑色，又看向悠真无知无觉（或者说无力反抗）地敞开着身体的模样。

最终，她缓缓蹲下身，笔尖颤抖着，在那些已有的字迹旁边，寻找了一小块尚且干净的皮肤，用力地、一笔一划地，写下了半个“正”字——那是她的姓氏“早川”的第一个笔画。

不是代表高潮次数的计数，而是她的姓氏。一个更私人、更充满占有欲的标记。

铃音看到了，眼中闪过一丝了然和更深的笑意。

早川写完，像是用尽了力气，将笔扔开，猛地俯身，吻住了悠真。这个吻充满了绝望和掠夺的意味，仿佛想通过这种方式，将自己的存在也烙印进悠真的身体深处，与那些黑色的字迹竞争。

悠真被吻得窒息，无力回应。

当晚，早川没有留下过夜。她在那个漫长而充满侵略性的吻之后，几乎是仓皇地离开了。铃音则心情很好地为悠真做了简单的清洁，取出跳蛋，然后搂着她入睡。

“小白今天真的很棒哦。”入睡前，铃音在她耳边呢喃，“积累了这么多‘正’字。我们离‘终极奖励’又近了一大步呢。期待吗？”

悠真在极度的疲惫和混沌中，几乎是无意识地点了点头。

她不知道“终极奖励”是什么，但在这一刻，这似乎成了支撑她在这永无止境的欲望地狱中沉浮的唯一念想。身体记住了快感，心灵记住了归属（哪怕是扭曲的），而皮肤上那些日益增多的黑色印记，则成了她存在的、唯一的、也是全部的意义证明。

夜色深沉。
盐灯的光晕柔和。
腿间的黑色图腾，在昏暗光线下，宛如活物，静静诉说着永不餍足的欲望，与永无止境的沉沦。`,sd=Object.freeze(Object.defineProperty({__proto__:null,default:ad},Symbol.toStringTag,{value:"Module"})),od=`---
order: 22
---
# #22 双主轮舞与媚骨成刑

午后的光线被三层遮光窗帘过滤得只剩下一层稀薄的、令人昏昏欲睡的暗金色。空气里熏香换了一种——更甜腻，带着某种热带花卉的腐败气息，混合着精液与汗水经久不散的味道，凝成粘稠的、仿佛能缠绕住呼吸的纱。

悠真侧躺在宽大的矮榻上，眼罩依旧，项圈紧锁。体内那两颗跳蛋经过近两天的持续工作，其微弱却无处不在的震动已经像脉搏一样，成为她身体背景噪音的一部分。它们不再仅仅是刺激源，更像是……身体内部的两个器官，两个不断提醒她“状态”和“归属”的器官。当它们停止时（仅在岩崎太太清洁时短暂取出），那种空洞的、无所依凭的恐慌，远比震动本身更让她难以忍受。

大腿根部那片皮肤，黑色墨迹层层叠叠，几乎覆盖了所有可用的肌肤，开始向小腹下方和大腿内侧蔓延。每一个新添的笔画，都意味着一次失控，一次高潮，一次向更深沉沦的坠落。羞耻感依旧存在，却仿佛被磨钝了边缘，变成一种熟悉的、甚至带着某种自虐快感的温热背景。

门被推开，脚步声却不止一个。

悠真立刻绷紧了身体。是铃音，还有……早川。她们一起来的。

“看来我们的小宠物已经能通过脚步声分辨主人了。”铃音的声音带着笑意，在床边停下。

“嗅觉也是。”早川的声音较平时更低沉，带着一种刻意压制的情绪，“她闻得到我们身上的味道。”早川的手指抚上悠真的脸颊，指尖带着微凉的潮意，似乎刚洗过手，但指腹却有着不同于铃音的、更粗糙些的茧——那是长期握笔和某种乐器留下的痕迹。这细微的差别，悠真的身体记得。

“小白，今天状态如何？”铃音在另一边坐下，床垫凹陷。她的手直接探入睡裙，握住了悠真一侧的乳房，拇指熟练地捻动乳尖。“岩崎太太报告说，你早餐时只是听到她提到‘主人’这个词，下面就湿了一片，不得不临时更换内衬。是真的吗？”

悠真瑟缩了一下，无法否认。身体背叛意志的速度越来越快，程度也越来越深。

“真是……无药可救的小淫娃。”早川的手指沿着她的颈线滑下，落在项圈上，轻轻拉扯，让皮革摩擦着喉部的皮肤，“不过，这样也好。省去很多麻烦。”

“今天是个重要的日子，小白。”铃音俯身，在她耳边吐息，温热的气息喷在耳廓，激起一阵颤栗，“你积累了足够多的‘正’字，虽然距离‘终极奖励’还有些距离，但我和早川同学认为，是时候进行一次……‘阶段性考核’了。”

考核？悠真的心猛地一跳，混合着恐惧和一种扭曲的期待。

“考核的内容很简单。”早川接口，她的声音离得更近了，几乎贴着悠真的另一只耳朵，“展示你的‘媚’。”

媚？

“你曾经是‘哥哥’，现在，你是‘小白’，是我们共有的宠物和性玩具。”铃音的手指离开了乳房，转而捏住她的下巴，力道不重，却不容挣脱，“但玩具也有高下之分。一个只会被动承受、哭泣求饶的玩具，和一个懂得主动取悦主人、用身体和表情诉说渴望的玩具，你猜，我们更喜欢哪一个？”

悠真呼吸急促起来。主动……取悦？

“今天的考核，就是看你能否在指令下，展现出合格的‘媚态’。”早川的手滑到了她的大腿内侧，指尖隔着薄薄的丝质睡裙，轻挠那片布满墨迹的皮肤，“每一次成功的‘展示’，都会获得丰厚的奖励，并计入重要的‘考核正字’。当然，失败的话……”她的指尖稍稍用力，指甲陷入柔嫩的肌肤，带来细微的刺痛，“惩罚也会升级。明白吗？”

“……明白，主人们。”悠真的声音干涩，身体却已经开始发热。主动取悦……这个概念像一颗投入心湖的石子，激起的涟漪复杂难言。羞耻之下，竟藏着一丝跃跃欲试的黑暗火苗。

“很好。那么，先让我们看看你的基础。”铃音解开了她眼罩的搭扣。

突如其来的光线让悠真眯起了眼睛。适应了片刻，她才看清眼前的两人。铃音穿着一身黑色的、类似改良旗袍的紧身短裙，侧边高开叉，露出一双裹着透肉黑丝的长腿，脚上是细高跟。她的脸上带着一贯的、游刃有余的浅笑。而早川，则是一身米白色的休闲西装套裙，内搭丝质衬衫，看起来更加端庄禁欲，唯独眼神深处翻涌着与衣着截然相反的、近乎暴烈的占有欲。两人都站在那里，身形笔挺，居高临下地看着她。

“站起来，小白。”铃音命令。

悠真撑着酸软的身体，艰难地从矮榻上起身，赤足站在地毯上。睡裙单薄，胸前两点和腿间的湿痕隐约可见。她低着头，不敢与她们对视。

“抬头。”早川说。

悠真慢慢抬起头。视线不可避免地扫过两人的身体，然后停留在她们的脸上。铃音的眼神带着审视和玩味，早川的则更加深邃灼热。

“第一个指令。”铃音缓缓走到她面前，距离近到能感受到彼此的体温，“用你的眼睛，看着我的眼睛，然后……想象我正在用鸡巴插你，并且马上就要射在你里面。把这份‘想象’和‘渴望’，用你的眼神告诉我。”

悠真的脸颊瞬间爆红。这比任何直接的触摸或侵入更让她难堪。她被迫直视铃音那双含着笑意的眸子，努力集中精神去“想象”。铃音的鸡巴……她记得那粗大的尺寸，滚烫的温度，碾过体内每一寸敏感点的力道，还有喷射时那股灼热的冲击……

渐渐地，她的眼神开始迷离，焦距涣散，呼吸不由自主地加快。羞耻感让她的睫毛轻颤，但身体深处泛起的空虚悸动，却让她的瞳孔深处染上水色，流露出一种混合着怯懦与邀请的、难以言喻的渴求。她的舌尖无意识地舔了舔干燥的下唇。

铃音的呼吸似乎乱了一拍。她伸出手，拇指用力擦过悠真的下唇，声音有些哑：“……合格。”

几乎是同时，早川从侧面贴近，手指捏住悠真的下巴，将她的脸转向自己：“现在，看着我。想象我正命令你跪下来，用你的嘴侍奉我。我要你想象我的味道，想象你喉咙被顶到深处的感觉，想象你吞咽时的不适和……快乐。用你的表情表现出来。”

早川的语气比铃音更冷硬，带着不容置疑的命令。悠真被迫将“想象”的对象转换。早川的鸡巴……似乎比铃音的稍细一些，但更长，进入喉咙时那种窒息感和被完全填满的征服感……她记得早川按住她后脑的力度，记得精液冲入食道时的腥膻……

她的眉头微微蹙起，仿佛真的感到不适，但眼神却更加湿润，眼角泛红，嘴唇微微张开，露出一点洁白的牙齿，喉咙不自觉地做了一个吞咽的动作。那是一种承受苦难却甘之如饴的、近乎献祭般的表情。

早川的喉结滚动了一下，捏着下巴的手指收紧，声音压得更低：“……很好。”

“看来基础不错。”铃音退开一步，绕着悠真走了一圈，像在评估一件艺术品，“那么，进入实践环节。小白，脱掉你的睡裙。用你最慢的速度，一边脱，一边用身体语言告诉我们……你有多期待接下来的事。”

悠真颤抖着伸出手，抓住睡裙的肩带。极致的羞耻感几乎要将她淹没，但“指令”和潜在的“奖励”像鞭子一样驱策着她。她深吸一口气，开始动作。

她极其缓慢地将一边肩带拉下，露出圆润的肩头和精致的锁骨。动作间，身体微微侧转，脖颈拉伸出优美的线条，视线低垂，长睫轻颤。然后，是另一边。布料缓缓滑落，掠过胸前挺立的樱红，引得她身体一阵细微的战栗。她咬着下唇，让睡裙继续下滑，经过平坦的小腹，最后，彻底从身上脱落，堆在脚踝边。

她全身赤裸地站在两人面前，皮肤上布满新旧痕迹，大腿根部的黑色图腾触目惊心。她没有立刻站直，而是维持着微微蜷缩又刻意展示的姿势，双手看似无助地交叠在身前，却又恰好半遮半掩着腿间的私密。她抬起眼，目光从铃音扫到早川，湿润的眼眸里盛满了羞怯、不安，以及一丝竭力表现的、生涩的勾引。

房间里一片寂静，只有三人加重的呼吸声。

“……很好。”铃音的声音彻底哑了，眼中燃起炽热的火焰，“非常好。早川同学，你觉得呢？”

早川没有回答，而是直接行动。她一步上前，猛地将悠真推倒在旁边的沙发上。沙发宽大柔软，悠真惊呼一声，陷了进去。早川随即单膝压上沙发边缘，俯身，用力吻住了悠真的唇，不再是昨晚那种绝望的掠夺，而是充满了掌控欲和标记意味的深吻，舌头强硬地撬开齿关，席卷口腔的每一寸。

铃音也走了过来，她没有加入亲吻，而是好整以暇地站在沙发边，开始解自己旗袍侧边的盘扣。她的动作从容不迫，眼神却紧紧锁在沙发上纠缠的两人身上。

早川在悠真几乎窒息时才放开她，转而攻向脖颈和锁骨，留下深深的红痕。她的手指粗暴地揉捏着悠真的乳房，另一只手则直接探向腿间，毫无预警地将两根手指刺入那早已湿滑泥泞的甬道。

“嗯啊——！”悠真仰起头，脖颈拉出脆弱的弧线。早川手指的入侵又快又深，精准地碾过G点。

“这就湿成这样了？只是脱个衣服，被看一眼而已？”早川在她耳边低语，手指在内壁抠挖，带出咕啾的水声，“果然骨子里就是个欠干的骚货。”

“哈啊……早川主人……手指……好深……”悠真扭动着腰肢，下意识地追逐着手指带来的快感，完全忘记了羞耻，媚态自然而然地流淌出来。她的双手无意识地攀上早川的背，指尖抓紧了西装的面料。

这时，铃音已经解开了衣裙。里面，她竟然什么也没穿。她同样拥有着属于男性的、尺寸傲人的性器，此刻早已勃起，紫红色的龟头狰狞地挺立着，铃口渗出透明的先走液。她跨上沙发，跪在悠真头部上方。

“小白，抬头。”铃音命令，双手扶着自己粗壮的阴茎，抵近了悠真的脸。

悠真被迫从与早川的纠缠中分神，仰起头。那硕大的、带着浓郁雄性气息的器官近在咫尺，几乎碰到她的鼻尖和嘴唇。她的眼神瞬间变得更加迷乱，渴望和臣服清晰可见。她主动张开了嘴，伸出粉色的舌尖，试探地、讨好地舔了一下铃口，将那点咸涩的液体卷入口中。

“唔……真乖。”铃音愉悦地叹息，腰往前送了送，龟头轻易地顶开了她的嘴唇，滑入口腔，“好好舔，用你的舌头伺候它。这是对你刚才表现的奖励。”

与此同时，早川抽出了手指，改为将自己早已硬挺的性器抵在了悠真的后穴入口。那里因为昨日的过度使用和跳蛋的持续刺激，依旧柔软湿润。她没有急于进入，而是用龟头在穴口周围缓慢地研磨、画圈，感受着那处肌肉紧张的收缩和放松。

“前面和后面，你更想要哪一个，小白？”早川的声音带着残忍的温柔，“说出来。”

悠真的口腔被铃音填满，只能发出含糊的呜咽。前后夹击的 anticipation 让她快要疯掉。她扭动臀部，试图主动去吞入早川的阴茎，眼神哀求地望向早川。

“看来是贪心地都想要。”铃音轻笑，按住她的头，开始缓缓挺动腰部，将阴茎更深地送入她温热的口腔，“那就都给你。早川同学，请吧。”

早川不再犹豫，腰身用力，将自己同样不小的性器，坚定而缓慢地挤入了悠真紧致的后庭。

“呜——！！”前后同时被巨大异物侵入的感觉让悠真全身绷紧，瞳孔放大。口腔被塞满，窒息感传来；后穴被撑开，熟悉的胀痛和随之而来的、被填满的奇异满足感交织。

铃音和早川交换了一个眼神，然后，开始了同步的抽插。

起初是缓慢的，像是为了让悠真适应，也像是为了延长这场折磨与欢愉。铃音的阴茎在悠真口中进出，摩擦着上颚和舌面，时不时顶到喉咙深处，引发一阵阵干呕和剧烈的生理性泪水。早川的阴茎则在幽暗紧致的肠道内开拓，每一次深入都碾过敏感的前列腺位置（尽管性转后其形态和敏感度可能变化，但故事设定中此处应依旧存在或转化为新的敏感点），带来直达脊椎的酥麻。

悠真被固定在这两具火热身躯之间，如同暴风雨中的小船，只能被动地承受着一波又一波的冲击。快感从前后两个入口疯狂涌入，在体内汇聚、爆炸。她的意识很快就被冲得七零八落，只剩下身体本能的反应：贪婪地吮吸着口中的阴茎，后穴主动收缩绞紧企图挽留入侵者，纤细的腰肢无意识地摆动迎合，甜腻的、破碎的呻吟不断从被堵住的嘴角溢出。

“对……就是这样，夹紧我，小白。”早川喘息着，加快了后穴抽插的速度和力度，每一次退出都几乎全部抽出，再狠狠地全根没入，撞击着臀瓣发出响亮的“啪啪”声。

铃音则控制着悠真头部的节奏，时而深喉，时而只让她舔舐前端，享受着她舌头的服侍和喉部的紧缩。“咽下去，我的东西，一滴都不准浪费。”她命令道，在悠真口腔深处释放了第一波浓精。

灼热的精液冲入喉咙，悠真被迫吞咽，有些从嘴角溢出，沿着下巴流下，混合着唾液，淫靡不堪。与此同时，后穴被早川撞击到某个极致敏感的点，前穴也剧烈收缩，她达到了今天第一次高潮，爱液喷溅，身体剧烈痉挛。

但两人并没有停下。

铃音稍微退出，让悠真喘息，但很快又将半软的阴茎塞回她嘴里：“清理干净，用你的舌头。”而早川在悠真高潮内壁剧烈收缩时，反而插得更深更猛，在她体内也达到了顶点，滚烫的精液灌满了后庭。

这仅仅是开始。

接下来的时间里，悠真仿佛成了一具专为承受快感而生的容器。铃音和早川轮番使用她的三张“嘴”——真正的嘴，前穴，后庭。有时两人同时进入前后穴；有时一人享用她的口舌，另一人用手指或玩具玩弄她前面的小豆或后穴；有时她们会交换位置；有时则命令她主动用口舌或身体去侍奉她们。

每一次姿势的变换，都伴随着新的指令和“媚态”要求：
“自己坐上来，用你的小穴吞下我的鸡巴，自己动，我要看你摇屁股的样子。”
“趴着，屁股翘高，对着早川主人摆出最下贱的姿势，求她干你。”
“转过身来，用你的腿环住我的腰，一边被我干，一边吻我，要伸出舌头。”
“说，‘请主人们把精液都射在小白脸上’。”

悠真在无尽的快感冲刷和指令驱使下，逐渐放弃了所有矜持和思考。她的身体仿佛拥有了独立的意志，熟练地摆出各种羞耻放荡的姿态，呻吟声愈发甜腻婉转，眼神媚得能滴出水来，每一个表情，每一次扭动，都充满了竭尽全力取悦主人的意味。她甚至开始主动索求，用带着哭腔的甜腻声音乞求更多、更深的侵犯。

“主人……铃音主人……后面好空……想要……想要早川主人再进来……”
“早川主人……小白的小豆好痒……求您用脚踩一踩……”
“射给我……都射给我……小白里面好热……好想要主人的热牛奶……”

她的表现，显然远远超出了“合格”的标准。

每当她完成一次特别淫靡的指令，或者达到一次高潮，铃音或早川就会暂停片刻，拿出那支黑色记号笔，在她早已面目全非的大腿皮肤上，或者小腹下方，甚至臀瓣上，郑重地添上一笔。这些“考核正字”似乎被赋予了更高的“权重”，每一笔落下，都让悠真在极致的快感中，感受到一种扭曲的“成就”和“被认可”的满足。

不知过了多久，窗外天色彻底暗沉。房间里，淫靡的气息浓得化不开。沙发上，地毯上，甚至墙壁上，都留下了斑驳的体液痕迹。

悠真已经不知高潮了多少次，身体软得像一滩烂泥，连抬起手指的力气都没有。她瘫在沙发里，眼神涣散，嘴角和腿间一片狼藉，精液和爱液混合着不断流出。大腿、小腹、乃至胸口，都新添了许多黑色的笔迹，与旧的混合，将她白皙的肌肤几乎染成了黑白交错的花纹。

铃音和早川也消耗了大量体力，身上同样汗湿凌乱。但她们的眼神却异常明亮，充满了餍足和某种黑暗的兴奋。

铃音拿来温热的湿毛巾，罕见地亲自为悠真做简单的清理，动作比岩崎太太温柔得多。早川则沉默地坐在一旁，目光深邃地注视着悠真身上那些新鲜的、属于她们共同“杰作”的印记。

清理完毕，铃音为悠真盖上一张薄毯，然后和早川一起走到了窗边。

“她的‘媚’，是刻在骨头里的。”早川点燃了一支细长的香烟（她平时几乎不抽），声音沙哑，“只是以前被‘哥哥’的壳子束缚着。”

“现在，壳子碎了，骨头露出来了。”铃音也点了一支，吐出一口淡淡的烟雾，“而且，被我们打磨得……闪闪发光。”

两人沉默了片刻，看着窗外城市的零星灯火。

“考核结果，”铃音最终开口，“完美。她距离‘终极奖励’，只差最后几个关键的‘正’字了。”

早川“嗯”了一声，掐灭了烟：“什么时候给？”

“明天。”铃音转头，看向沙发上昏睡过去的悠真，眼神复杂，有掌控一切的满足，有一丝几乎无法察觉的怜惜，更有深不见底的欲望，“给她一夜时间恢复。明天，我们将赐予她……她真正渴望的东西。”

早川顺着她的目光看去，没有问那“终极奖励”究竟是什么。她似乎已经猜到了，或者，那对她而言并不重要。重要的是，床上那个人，从身体到灵魂，从羞耻到媚骨，都已经彻底打上了她们共同的烙印。

永夜依旧。
但沉沦之路，似乎即将抵达一个崭新的、更深的阶段。
那终极的奖励，究竟是救赎，还是更万劫不复的深渊？
只有明日的阳光（如果还能照进这间屋子），才会揭晓。`,rd=Object.freeze(Object.defineProperty({__proto__:null,default:od},Symbol.toStringTag,{value:"Module"})),id=`---
order: 23
---
# #23 忤逆初萌与惩戒深犁

晨光再次以那种近乎施舍的姿态渗入房间时，悠真感到一种与以往不同的清醒。不是身体上的——身体依旧沉重、酸软，每一处被过度使用的肌肉和粘膜都在诉说着疲惫。那种清醒，是意识深处某种沉淀物的短暂上浮，是连续多日被情欲、指令、惩罚与奖励的洪流冲刷后，偶然露出的、属于“过去”的河床。

她睁着眼，看着天花板上模糊的光影。眼罩被取下过夜，项圈却依旧锁在颈间，皮革内衬的边缘已经与皮肤的温度融为一体。体内那两颗跳蛋也暂时取出了，留下的是一种奇异的、被掏空般的虚浮感。大腿根部那片皮肤因为反复书写和擦拭，开始有些发红、微肿，黑色墨迹渗入皮纹，仿佛真的成了某种洗不掉的刺青。

“小白”这个称呼，那些“主人”的称谓，那些摆弄身体、取悦他人的指令……在过去几十个小时里，像滚烫的烙铁，一次次烫在她的神经上，直到形成条件反射。身体记住了快感，甚至开始渴望被支配的安心感。

但此刻，在这片疲惫的宁静中，某个角落却传来极其细微的、不和谐的声音。

像是一根生锈的琴弦，被无意中拨动，发出暗哑的震颤。

“哥哥”。

这个词语毫无预兆地浮现在脑海。不是回忆，更像是一个陌生的、属于别人的标签。她试着将这个词与自己现在的身体、现在的处境联系起来——赤裸的、布满痕迹的、被锁链轻轻束缚在床上的、等待着不知何时会到来的“主人”和新的“任务”或“奖励”的身体——一种荒谬的、近乎滑稽的错位感猛地攫住了她。

这不对。

这个念头很轻，却异常清晰。不是道德意义上的“不对”，而是……“不应该是这样”。不应该是“小白”，不应该是“宠物”，不应该是现在这个样子。

然而，紧接着涌上来的，不是愤怒或决心，而是一阵巨大的、令人窒息的虚无和恐惧。不是这样，那该是哪样？她能去哪里？她能做什么？铃音和早川……她们已经彻底接管了她的世界。反抗的念头刚刚萌芽，就被现实的铜墙铁壁撞得粉碎。

但那股细微的不甘心，却没有立刻消失。它蜷缩在心底，变成了一种……孩子气的、任性的委屈。

为什么我要这样？

为什么是我？

一丝极其微弱、连她自己都未曾明确意识到的念头闪过：如果……如果我稍微不那么“乖”，会怎样？如果我也像那些被宠坏的孩子一样，闹一点小脾气，她们会不会……

这个念头危险而诱人。不是真正的反抗，不是逃离，而更像是一种试探，一种撒娇式的、寻求关注和确认边界的行为。像猫伸出爪子，轻轻挠一下主人的手，不是为了伤害，只是想看看对方的反应。

就在这时，门被推开了。

铃音独自走了进来。她今天穿了一身浅灰色的丝质家居服，长发松松挽起，几缕碎发垂在颊边，看起来慵懒而居家。她手里端着一杯温水，走到床边。

“醒了？”铃音俯身，将水杯递到她唇边，“喝点水。岩崎太太说你昨晚睡得不太安稳。”

悠真顺从地就着她的手喝水。温水滑过干涩的喉咙，带来短暂的舒适。铃音的手指抚过她的额头，将碎发拨开，动作温柔。

“今天感觉怎么样？还累吗？”铃音问，语气是熟悉的、带着掌控感的关切。

就是现在。

那根生锈的琴弦又被拨动了。

悠真喝完了水，没有像往常那样立刻低声回答“好多了，谢谢主人”或者“还有点累，主人”。她微微偏过头，避开了铃音准备继续抚摸她脸颊的手，然后，用了一种她自己都感到陌生的、带着一点拖沓和绵软的语气，小声说：

“……骨头像散架了一样。”

不是抱怨，更像是撒娇式的陈述。

铃音的手停在半空，眉梢几不可察地动了一下。她看着悠真，眼神里的温柔淡去了一些，取而代之的是审视。

“是吗？”铃音的声音平静无波，“被主人疼爱得太厉害，所以散架了？”

悠真的心脏猛地一跳。她不敢看铃音的眼睛，目光游移着，落在铃音家居服的衣扣上。那股孩子气的委屈感更浓了，夹杂着一丝破罐破摔的冲动。她抿了抿唇，用更轻、更含糊的声音嘟囔了一句：

“……也不是第一次散架了。”

这句话里，带着一丝极其微弱的、几乎难以察觉的埋怨和……挑衅。

空气似乎凝固了一瞬。

铃音没有说话。她只是静静地站在那里，看着悠真。那目光不再是温柔的关切，也不是情欲的灼热，而是一种冷静的、评估的、仿佛在观察实验体出现异常反应的眼神。

几秒钟后，铃音忽然笑了。不是那种愉悦的笑，而是嘴角弯起一个略显冰冷的弧度。

“呵。”她轻轻吐出一个音节，然后转身，走到房间角落的柜子前，打开了某个抽屉。她背对着悠真，悠真看不到她在拿什么，只听到细微的金属碰撞声和塑料包装的窸窣声。

恐惧开始后知后觉地爬升。悠真突然意识到，自己刚才做了什么。那点微不足道的、撒娇式的抱怨，在铃音眼中，可能意味着什么。

铃音走了回来，手里拿着几样东西：那支熟悉的黑色记号笔，一个小巧的、带着夹子的乳夹（不是带铃铛的那个，而是更简单、金属质地的），还有……一个遥控器，但不是控制跳蛋的那个，是另一个，更大一些，带有液晶屏。

“看来，是我们最近太‘温柔’了。”铃音在床边坐下，将东西放在一旁，伸手捏住了悠真的下巴，迫使她抬起头，“让小白产生了一些……不该有的错觉。”

她的指尖冰凉，力道适中，却带着不容置疑的压迫感。

“觉得累？觉得被‘疼爱’得太狠了？”铃音的声音很轻，却字字清晰，“所以，开始用这种……小宠物闹脾气的方式，来表达不满了？”

“没、没有……”悠真想否认，声音却虚弱无力。

“有没有，你说了不算。”铃音松开了她的下巴，拿起了那个乳夹，冰冷的金属轻轻碰了碰悠真胸前一侧的樱红，“我说了算。而我的判断是——”

“咔嚓。”轻微的扣合声。乳夹精准地夹住了小巧的乳首，瞬间传来的尖锐刺痛让悠真倒吸一口凉气。

“——你今天的‘课程’，需要调整一下重点。”铃音完成了她的宣判，“从‘学习取悦’，暂时变更为‘复习规矩’。”

她拿起了那个更大的遥控器，按下某个按钮。房间角落里，一个悠真之前从未注意过的、类似小型投影仪的装置亮了起来，一道光束打在对面空白的墙壁上。

出现的不是影像，而是几行简洁的文字，用的是醒目的红色字体：

**【今日规训主题：边界与服从】**
**【核心戒律：主人赐予的一切，皆是恩赏。痛苦、快乐、疲惫、满足，皆需感恩接纳，不得心存怨怼，更不得以任何形式表达不满。】**
**【今日目标：通过深度惩戒，重塑对戒律的身体记忆与条件反射。】**

看着这些冰冷的文字，悠真感到一阵寒意从脚底窜起。这和之前那些带着情色意味的“任务”截然不同，显得更加正式、更加……系统而残酷。

“现在，坐起来。”铃音命令道，解开了她脚踝上柔软的衬垫锁链，但项圈和手腕上的束缚依旧。

悠真颤抖着，用手肘支撑起身体，靠在床头。丝质薄毯从身上滑落，露出布满痕迹的赤裸身躯。乳夹带来的刺痛持续不断，提醒着她此刻的处境。

“早川同学今天学校有事，会晚些过来。”铃音好整以暇地摆弄着遥控器，“所以，上午的‘复习课’，由我单独指导。”

她又按了几个按钮。房间里的熏香系统似乎改变了输出，一种更清冷、略带苦味的气息弥漫开来，冲淡了之前甜腻的情欲味道。同时，角落的盐灯被调暗，另一盏光线更集中、更冷白的阅读灯亮起，照亮了床铺这一片区域，使得周围更加昏暗，营造出一种类似审讯室的氛围。

“首先，我们需要明确你刚才的行为性质。”铃音拿起黑色记号笔，却没有像往常那样直接往悠真身上写，而是用笔帽轻轻敲击着自己的掌心，“消极回应主人的关心，隐含抱怨，语调不恭。这属于‘轻微言语忤逆’。”

她的语气平静得像在宣读手册。

“根据我们正在完善的《小白行为规范与奖惩细则（试行版）》，首次出现此类行为，且情节轻微，惩戒措施如下——”铃音抬眼，看向悠真，目光如冰，“一、感官聚焦惩戒。二、延时高潮剥夺。三、羞耻强化陈述。四、额外侍奉劳作。”

每一个词都让悠真心往下沉。她完全不明白具体意味着什么，但听起来绝不好受。

“现在，执行第一项：感官聚焦惩戒。”铃音放下笔，从抽屉里又拿出一个小盒子，打开，里面是两片薄薄的、半透明的、类似隐形眼镜的镜片，但中心是不透光的黑色。“这是感官剥夺眼罩的升级版，不透光，但更贴合。戴上后，你将彻底失去视觉。同时……”

她又拿出一个精致的、带有柔软耳塞的降噪耳机。“这个会播放特定的白噪音，屏蔽大部分环境音。在接下来的惩戒过程中，你的视觉和听觉将被极大限制，所有注意力将被强迫集中于身体感受到的刺激——主要是疼痛与不适，以及我偶尔允许你听到的指令。”

铃音的动作没有丝毫犹豫，将黑色镜片熟练地戴在了悠真眼睛上。世界瞬间陷入绝对的黑暗。紧接着，降噪耳机覆盖了耳朵，一阵低沉的、持续的“嗡嗡”白噪音灌入耳膜，有效地阻隔了外界声音。

视觉和听觉被剥夺的瞬间，悠真陷入了巨大的恐慌。她下意识地想伸手去抓，但手腕被束缚着。她想呼喊，却发现自己连自己的呼吸声都听不真切。黑暗和寂静如同厚重的茧，将她紧紧包裹。乳尖的刺痛、皮肤接触到空气的微凉、身下床单的触感……所有这些原本被忽略的体感，瞬间被放大到令人心悸的程度。

她能感觉到床垫微微下陷，是铃音靠近了。然后，冰凉的笔尖，点在了她的锁骨下方。

「轻微言语忤逆。惩戒开始。」铃音的声音透过降噪耳机，变得有些模糊和遥远，但却异常清晰，像是直接钻进脑海。

笔尖开始移动，不是写字，而是用尖端，沿着她的锁骨线条，缓慢地、用力地划过。轻微的刺痛，混合着笔尖冰凉的触感，在黑暗和寂静中被无限放大。她忍不住瑟缩。

「不准动。」铃音的命令传来，同时，另一只手按住了她的肩膀。

笔尖继续游走，从锁骨滑到肩头，再到上臂内侧——那里皮肤格外柔嫩。尖锐的刺痛让她浑身紧绷，喉咙里发出压抑的呜咽，却被耳机里的白噪音吞没。

这不仅仅是在施加疼痛，更是在用这种单一、持续、无法预测轨迹的痛感，强制占领她所有的注意力。她无法思考，无法回忆，甚至无法完整地感受恐惧，所有的意识都被迫聚焦于皮肤上那一点移动的刺痛。

不知过了多久，笔尖的划动停止了。但没等她喘息，新的触感传来——是乳夹被轻轻拉扯、旋转。原本就尖锐的痛感陡然升级，变成一种带着拧绞感的、持续不断的折磨。她猛地仰起头，张大了嘴，却发不出像样的声音。

「这是为了让你记住，主人的触碰，无论带来什么，都不该被回避，更不该被抱怨。」铃音的声音冰冷地陈述着，「疼痛，也是恩赏的一种形式。」

紧接着，笔尖再次落下，这次是在她的大腿内侧，那片已经布满墨迹的皮肤附近，用更重的力道，写划着什么。不是写字，更像是毫无意义的、重复的刻划。疼痛叠加在已经有些红肿的皮肤上，带来火烧火燎的感觉。

视觉和听觉的剥夺，使得时间感完全混乱。每一秒都被拉长，每一份痛楚都被仔细品尝。悠真在黑暗中无助地颤抖、流泪（泪水很快被镜片吸收或流下），最初那点孩子气的委屈和试探，早已被碾碎，只剩下最原始的、对痛苦持续性的恐惧和想要它停止的卑微渴望。

就在她觉得自己快要被这无止境的、聚焦的痛感逼疯时，所有的施加突然停止了。

乳夹被取下，刺痛骤然消失，只留下火辣辣的余韵。笔尖也离开了皮肤。

但黑暗和寂静依旧。

她瘫软在床头，剧烈地喘息，虽然自己听不到。全身的皮肤都在敏感地跳动，记忆着刚才的每一分痛楚。

「第一项，感官聚焦惩戒，结束。」铃音的声音响起，「效果评估：初步达到注意力强制集中与痛感关联强化的目的。现在，准备第二项：延时高潮剥夺。」

高潮剥夺？在这种状态下？

悠真还没理解，就感觉到铃音的手落在了她的小腹上，然后缓缓向下，滑入腿间。指尖触碰到了那片湿润泥泞的私密处。她的身体早已在之前的痛苦和持续的紧张中，可耻地分泌出了爱液。

「看，你的身体比你的嘴巴诚实得多。」铃音的声音里似乎带上了一丝讥诮，「即使是在接受惩戒，它依然在渴求快感，在准备迎接高潮。但今天，这份快乐，将被延迟，并且与未能遵守规矩直接挂钩。」

手指开始动作，不是粗暴的侵入，而是极其熟练、极其精准的挑逗。指腹按压阴蒂，指尖在穴口周围画圈，偶尔探入一个指节，模拟着抽插，却又在快感累积前撤出。所有的技巧都旨在撩拨、积累欲望，却绝不给予真正的满足。

在纯粹的黑暗和寂静中，这精准的性刺激变得比以往任何一次都更加难以忍受。所有的感官通道都被关闭，只有触觉，只有那只手带来的、时而轻柔时而用力、变幻莫测的快感刺激。快感如同潮水，一次次涌来，冲击着堤坝，却总在即将决堤的前一刻退去。

悠真开始不由自主地扭动腰肢，试图追逐那狡猾的手指，喉咙里发出破碎的、连自己都听不见的呻吟。身体深处传来熟悉的、空虚的悸动，越来越强烈。她想要，她需要高潮来释放这不断累积的张力，来安抚被痛苦和挑逗双重折磨的神经。

但铃音的手指总是在最关键的时刻停下，或者改变节奏，让那即将到达顶点的快感硬生生憋回去，变成一种更磨人的、悬在半空的焦渴和空虚。

「想要吗？」铃音的声音如同恶魔的低语，穿透白噪音，「想要高潮吗？」

悠真拼命点头，尽管她知道铃音可能看不见，或者不在乎。

「但你不配。」冰冷的宣判，「在你学会彻底感恩和服从之前，这种极致的快乐，将一直被延迟。每一次你试图抱怨、忤逆，你距离高潮的间隔就会被拉长。记住此刻的感觉，记住这求而不得的焦灼。这是你为自己刚才那点小脾气，赢得的奖励。」

手指的挑逗还在继续，甚至变本加厉。快感不断累积，却永远无法抵达终点。悠真觉得自己快要被逼疯了，身体像一张拉满的弓弦，却无法释放。泪水再次涌出，这次是出于纯粹的、性挫折带来的痛苦和绝望。

不知重复了多少次这样“即将抵达又被强行打断”的循环，就在悠真意识都开始模糊的时候，铃音终于停了下来。

手离开了她的身体。

那种骤然停止的失落感和更加汹涌的空虚感，几乎让她崩溃。她像缺水的鱼一样张着嘴，在黑暗中无声地喘息、颤抖。

「第二项，延时高潮剥夺，结束。效果评估：快感剥夺与行为过错关联建立初步成功。」铃音的声音依旧平稳，仿佛刚才那漫长而残酷的挑逗只是例行公事，「现在，进行第三项：羞耻强化陈述。」

束缚着手腕的皮带被解开了。但没等她活动麻木的手腕，铃音抓住了她的双手，引导着她，分别放在了她的两只乳房上。

「揉。」简单的指令。

悠真颤抖着，机械地开始揉捏自己的乳房。乳尖因为之前的乳夹和挑逗，肿胀挺立，一碰就带来混合着刺痛和快感的复杂触觉。

「用力。这不是爱抚，是惩罚的一部分。」铃音纠正她的力道。

她加大了力度，疼痛感加剧。

「现在，一边揉，一边重复我说的话。」铃音开始陈述，语速缓慢，「‘我是小白，是铃音主人和早川主人的宠物和性玩具。’」

悠真张了张嘴，在黑暗和寂静中，用干涩沙哑的声音，艰难地重复：“我……是小白……是铃音主人和早川主人的……宠物和性玩具……”

「‘我存在的意义，是取悦主人，服从主人的一切命令。’」

“……我存在的意义……是取悦主人……服从主人的一切命令……”

「‘我今天的疲惫和不适，是主人疼爱的证明，我应心怀感激，不应有任何怨言。’」

“……我今天的疲惫和不适……是主人疼爱的证明……我应心怀感激……不应有任何怨言……”

「‘我刚才的言语是错误和忤逆的，我接受主人的一切惩戒，并承诺不再犯。’」

“……我刚才的言语是错误和忤逆的……我接受主人的一切惩戒……并承诺不再犯……”

每重复一句，羞耻感就像冰冷的刀子，一遍遍刮过她的心。同时，手上揉捏自己乳房的触感，又将这种言语的羞辱与身体的感知紧密结合起来。她仿佛在通过自己的手，对自己施加惩罚和羞辱。

语句重复了好几遍，直到她的声音不再那么干涩，甚至带上了一种麻木的顺服。

「很好。」铃音似乎满意了，放开了她的手，「第三项结束。现在，最后一项：额外侍奉劳作。」

额外的……侍奉？

铃音帮她取下了降噪耳机和那两片黑色的镜片。骤然恢复的听觉和视觉（虽然房间依旧昏暗）让她有些眩晕。她眨了眨模糊的泪眼，看到铃音站在床边，已经脱下了那身家居服的上衣，只穿着内衣。她的表情平静，眼神深邃。

“你的嘴巴犯了错，现在，用它来弥补。”铃音淡淡地说，手指了指自己的下身。她今天穿着一条黑色的蕾丝内裤，但此刻，那属于男性的性器已然勃起，将薄薄的布料顶起一个明显的帐篷，前端渗出的一小片深色水痕清晰可见。

悠真看着那里，身体深处那被强行压抑、剥夺了释放的快感和渴望，如同被点燃的干草，猛地窜起。惩罚带来的恐惧和痛苦还未消散，但身体的本能反应却更加诚实而迅猛。她感到自己的小穴一阵收缩，流出更多爱液。

“爬过来。”铃音命令。

悠真拖着依旧酸软无力的身体，慢慢地、顺从地从床上爬下，跪在了铃音脚边的地毯上。这个姿势让她感觉自己更加渺小和卑微。

铃音没有自己脱掉内裤，而是居高临下地看着她：“用你的牙齿和舌头，把它弄出来。不准用手。这是对你的耐心和技巧的额外考验，也是为你刚才的不恭赎罪。”

悠真仰起头，看着铃音平静无波的脸，又低头看向那近在咫尺的、散发着浓郁雄性气息的隆起。她凑近，脸颊能感受到布料下的炽热和跳动。她张开嘴，小心翼翼地用牙齿咬住内裤的边缘，慢慢向下拉扯。这个过程笨拙而缓慢，牙齿不时刮蹭到敏感的顶端，引得铃音的呼吸微微加重。

终于，内裤被褪下，那根粗大的、紫红色泽的阴茎弹了出来，几乎拍打在她的脸上。浓烈的气息扑面而来。

没有犹豫，她伸出舌头，从根部开始，沿着贲张的血管，一寸寸向上舔舐。咸涩的先走液被她卷入口中。她努力回忆着之前被教导和强迫学会的技巧，用嘴唇包裹住龟头，用舌头舔舐冠状沟，然后尝试着将它更深地吞入口中。

不准用手，使得这个口交过程格外艰难。她必须用脖颈和腰腹的力量来调整角度和深度，牙齿需要时刻小心避开。唾液不断分泌，混合着先走液，从嘴角溢出，沿着柱身流下，滴落在她的胸口和地毯上。

“嗯……节奏太乱……舌头不够灵活……”铃音偶尔给出冰冷的点评，腰肢却不由自主地随着她的吞吐微微摆动。

悠真更加卖力，努力取悦。口腔被填满、喉咙被顶到的感觉，此刻不再仅仅是惩罚或侍奉，更像是一种……被认可的途径，一种弥补过错、重新获得“好宠物”身份的方法。她贪婪地吮吸着，喉咙发出用力的吞咽声，仿佛想通过这种方式，将铃音的权威和自己的力量彻底吞下、内化。

不知过了多久，就在她下颌酸痛不已的时候，铃音猛地按住了她的后脑，深深地、彻底地撞入她的喉咙深处，剧烈地悸动了几下，滚烫的精液猛烈地喷射出来，灌满了她的口腔和食道。

“咳咳……呜……”悠真被呛得咳嗽，却不敢吐出，只能被迫吞咽。大部分被吞下，仍有少许从鼻息和嘴角溢出。

铃音慢慢退出，看着她狼狈喘息、嘴角挂着白浊的样子，伸手用拇指抹去她嘴角的残迹，然后将拇指塞入她口中。

“舔干净。”

悠真顺从地吮吸着她的拇指。

“第四项，额外侍奉劳作，结束。”铃音抽回手指，语气似乎缓和了一丝，“今日的惩戒课程，暂时告一段落。”

她拉起悠真，将她带回床上，让她躺下。然后，她拿来温热的湿毛巾，仔细地清洁悠真的脸、胸口和腿间。动作恢复了之前的温柔，甚至更加细致。

清洁完毕，她没有立刻离开，而是在床边坐下，轻轻抚摸着悠真汗湿的头发。

“记住今天的感觉，小白。”她的声音很低，“记住疼痛，记住求而不得的焦灼，记住羞耻，还有最后用侍奉来弥补过错的过程。这些，都是你的一部分，是你作为我们的宠物，需要理解和接纳的规则。”

悠真疲惫地闭着眼，身体还在微微颤抖。但奇怪的是，在经历了如此漫长而残酷的惩戒之后，铃音此刻的温柔抚摸，竟然带来了一种前所未有的、近乎眩晕的安心感和……归属感。仿佛穿越暴风雨后，终于抵达了一个虽然狭窄却坚固的港湾。那点微不足道的反抗心思，早已被碾得粉碎，取而代之的是一种更深层的、混合着恐惧、依赖和扭曲认同的顺从。

“我……记住了，主人。”她喃喃道，声音带着事后的绵软和彻底驯服后的乖顺，“对不起……我再也不会了……”

“乖。”铃音吻了吻她的额头，“休息吧。早川同学下午会过来。晚上……如果你表现得好，或许会考虑给你一点点……你渴望了很久的‘奖励’。”

终极奖励？还是仅仅是一次被允许的高潮？

悠真已经无力思考，只是顺从地点点头，在铃音的抚摸下，意识渐渐沉入黑暗的、疲惫的深渊。

在她彻底入睡前，最后一个模糊的念头是：撒娇……是不被允许的。只有绝对的服从，和偶尔因服从而获得的“恩赏”，才是她唯一的存在方式。

那点“brat”属性的萌芽，在第一次试探性的伸展后，便被一场精心设计、冷酷无情的暴风雨彻底摧折。而深植于土壤之下的，是更加盘根错节的、名为“依赖”与“恐惧”的根须。

下午，当早川理纱带着一身室外微寒的空气进入房间时，看到的便是这样一幅景象：悠真沉睡着，脸上还带着泪痕和疲惫，但睡颜却异常宁静，甚至可以说是驯顺。而她裸露的皮肤上，除了旧的墨迹和痕迹，又多了一些新鲜的、红色的划痕和指印。

早川的目光落在那些新痕上，眼神暗了暗。她走到床边，静静地看了悠真一会儿，然后伸手，指尖极轻地拂过那些红痕，仿佛在阅读一场无声的惩戒记录。

她似乎明白了什么，嘴角抿成一条冷硬的直线。但最终，她什么也没说，只是脱下外套，坐在了床边的椅子上，打开一本书，静静地守候。

房间重归寂静。
只有熏香清冷的气息，在无声流淌。
而一场更深的沉沦，或许才刚刚揭开序幕。`,ld=Object.freeze(Object.defineProperty({__proto__:null,default:id},Symbol.toStringTag,{value:"Module"})),cd=`---
order: 23
---
# #24 双面镜城与午夜欢宴

清晨七点，手机刺耳的铃声划破了房间内粘稠的沉寂。不是闹钟，是特定联系人的专属铃声。

铃音从浅眠中倏然惊醒，眼中没有丝毫睡意，只有锐利如刀的光。她看了眼身边蜷缩着、依旧深陷在疲惫与驯顺睡眠中的悠真，迅速拿起床头柜上静音震动的手机。

屏幕上闪烁着两个字：「母亲」。

她的眉头几不可察地蹙了一下，随即恢复平静，指尖滑动接听。

“喂，妈妈。”

“铃音，起床了吗？”电话那头传来母亲干练而略显疏远的声音，背景音有些嘈杂，像是机场或车站，“我和你爸爸临时决定回来一趟，下午的飞机，大概傍晚六点到家。住一晚，明天一早又要飞柏林。家里还好吧？”

住一晚。明天一早走。

铃音的瞳孔微微收缩，但声音却扬起一贯的、轻快乖巧的语调：“真的吗？太好了！家里一切都好呀，哥哥也挺好的。你们这次能待多久呀？就一晚吗？好匆忙哦。”

“嗯，项目间隙，抽空回来看看你们。晚饭不用准备，我们大概七点前到家，随便吃点就行。你哥哥呢？还在睡？”

“应该醒了吧，我去看看。”铃音一边说着，一边用空闲的手轻轻捏了捏悠真的脸颊，力道不重，却足以让她从沉睡中挣扎着醒来。悠真迷迷糊糊地睁开眼，看到铃音拿着手机，眼神瞬间清明，染上一丝紧张。

“哥哥，妈妈电话。”铃音将手机稍微拿远，用口型无声地说：“爸妈今晚回来，住一晚。”

悠真的脸色“唰”地一下白了，睡意全无，眼中涌起巨大的恐慌。爸妈要回来？看到她现在这个样子？不行……绝对不行！

铃音将手机贴回耳边，语气自然：“妈妈，哥哥刚醒，还有点懵呢。你要跟他说话吗？”

“不用了，让他再睡会儿吧。晚上见，记得把家里稍微收拾一下。”

“知道啦，妈妈路上小心。”

电话挂断。

房间内陷入一片死寂。只有熏香机微弱的气流声，和悠真逐渐变得粗重、恐慌的呼吸声。

铃音放下手机，转过头，看着脸色惨白、身体微微发抖的悠真，忽然笑了起来。不是那种温柔或愉悦的笑，而是一种混合了兴奋、玩味和冷酷算计的笑。

“看来，今天对小白来说，是特别考验的一天呢。”她伸出手，指尖滑过悠真冰凉的脸颊，“要在亲爱的爸爸妈妈面前，扮演他们乖巧的‘儿子’，同时……”

她的手指下滑，隔着薄薄的睡衣，精准地按在了悠真小腹下方，那处即使经过一夜休憩，依旧残留着敏感和湿意的部位。

“……还要时刻记住，你真正的主人是谁，你的身体是为谁而准备的。”

悠真浑身一颤，恐惧和一种扭曲的期待交织着席卷全身。扮演“哥哥”？那个对她而言已经陌生得如同前世影子的身份？在父母目光的注视下，同时承受铃音可能的玩弄和挑逗？

“我……我不行的，主人……”她下意识地抓住铃音的衣袖，声音带着哭腔，“我会露馅的……爸爸妈妈会发现的……”

“嘘……”铃音竖起一根手指，抵在她唇上，“我说你行，你就行。别忘了，你可是经过严格训练的小白。扮演，也是训练的一部分。而且……”

她凑近，气息喷在悠真耳廓，声音压得极低，带着蛊惑和威胁：“如果你搞砸了，让爸爸妈妈发现了哪怕一丝一毫的异常……想想后果。不是对我的后果，是对你的。你猜，如果爸爸妈妈知道他们引以为傲的‘儿子’，变成了现在这副离不开主人鸡巴的淫荡模样，他们会怎么样？而你，又会失去什么？”

悠真如坠冰窟。失去现在这个虽然扭曲却“安全”的港湾？被父母用惊骇、厌恶、或许还有“治疗”的目光审视？不……那比铃音的任何惩罚都可怕。至少在这里，在铃音和早川的掌控下，她明确地知道自己的位置和“价值”。而在那个“正常”的世界里，她只是一个无法被理解的怪物。

“我会……我会做好的，主人。”她闭上眼，再睁开时，眼中虽然仍有恐惧，却多了一丝破釜沉舟的决绝，“请主人指导我。”

“很好。”铃音满意地拍了拍她的脸，“首先，我们要进行一些‘准备工作’。”

---

准备工作繁琐而细致，如同在布置一个精巧的陷阱，或者更准确地说，是在构建一座脆弱的、两面皆可照人的镜城。

第一项，是身体痕迹的遮掩。铃音亲自动手，用遮瑕膏和粉底液，仔细覆盖悠真脖颈、锁骨、胸口、腰腹、大腿根部那些过于显眼的吻痕、指印和齿痕。乳夹留下的印子最麻烦，需要用颜色相近的膏体反复按压遮盖。大腿上那片层层叠叠的黑色“正”字图腾，面积太大，颜色太深，遮瑕膏也无能为力。

“这个，用这个。”铃音从衣柜深处翻出一条略显陈旧的、男式深灰色长款运动裤，布料厚实，“今天一整天，只要在家，你就穿这条裤子，上衣可以宽松点。爸妈问起，就说……有点感冒，怕冷。”

悠真点头，接过裤子。布料摩擦着大腿上那片敏感的皮肤，带来微痒的触感。

第二项，是服装与仪态。铃音找出了悠真“以前”的衣服——一些宽松的卫衣、休闲衬衫和牛仔裤。这些衣服对现在体型更加纤细、骨骼线条趋向柔和的悠真来说，明显有些空荡，但也恰好能掩饰胸部微微的隆起和腰臀曲线的变化。

“背挺直一点，但肩膀不要刻意绷着，显得自然。走路步伐稍微大一点，别那么轻……对，想象一下你以前走路的样子。”铃音像个严厉的导演，指导着悠真的每一个动作和表情，“眼神，眼神别那么飘忽，也别老是往下看。看人的时候，目光要稳定，但不用太锐利……算了，你尽量少跟他们对视。”

光是重新学习如何“像男孩子一样”站立、行走、坐下，就花了将近一个小时。悠真感到无比别扭，肌肉记忆早已被长时间的“宠物”姿态重塑，如今强行扭转，让她浑身僵硬。

第三项，是声音和称谓。悠真原本清朗的男声，在经过生理变化和长时间压抑呻吟后，音调不自觉地偏高，带着一丝柔腻的尾音。铃音让她反复练习用胸腔发声，压低嗓音，说一些简短的、中性的句子。

“爸爸，妈妈。”“嗯。”“还好。”“知道了。”

单调的词汇，试图唤起遥远记忆里的语调。

“还有，绝对不能叫我‘主人’，任何时候都不行。”铃音强调，“叫‘铃音’，或者像以前一样，什么都不叫。语气要平常，甚至可以稍微冷淡一点。我们平时的‘亲密’关系，在爸妈面前必须完全隐形，不，是根本不存在。”

悠真艰难地点头。“主人”这个称谓，几乎已经成了她的条件反射和情感寄托，要强行剥离，就像从血肉中拔出根须。

第四项，也是最危险的一项——环境清理。铃音指挥着悠真（也亲自参与），将房间里所有明显不符合“正常男生房间”的物品收起来：各种情趣玩具、绳索锁链、皮革制品、催情熏香、还有那些女装和丝袜，全部被打包塞进带有密码锁的大行李箱，推进了铃音房间的衣柜深处。电脑里相关的记录和直播软件也被暂时卸载或隐藏。

房间恢复了某种刻意营造的“整洁”和“朴素”，只有角落里那盏盐灯和空气中若有若无的、难以彻底散去的甜腻气息，还残留着一丝过去的影子。铃音打开了窗户通风，又喷了一些普通的室内清新剂。

最后，铃音拿出两个小巧的、肉色的、形状特别的小东西。无线遥控跳蛋，而且是尾部带有细绳，可以固定在体内的款式。

“虽然爸妈在，但规矩不能废。”铃音将其中一个涂满润滑剂，在悠真惊恐的目光中，缓缓推入她依旧有些红肿湿润的小穴深处，细绳留在体外，便于取出。“这个，会以最低档的震动待机。这是提醒，也是……保险。如果你表现得好，它只是安静的提醒。如果你有失控的风险，或者我需要加强‘控制’……”她晃了晃手中的微型遥控器，“它会让你记住，谁才是主宰。”

另一个跳蛋，则被铃音收在自己身上。“这是我的。在某些‘必要’的时刻，它会告诉我，该怎么做。”

全部准备就绪，已是中午。两人简单吃了点东西，继续演练。铃音模拟父母可能问的问题，悠真结结巴巴地回答。气氛紧张得像考前突击。

下午四点，铃音的手机再次震动。早川理纱发来信息：「听说你父母今晚回来？」

铃音回复：「嗯，住一晚。小白今天要上‘双重身份体验课’。」

早川很快回复：「需要我做什么？远程协助？还是……现场观摩？（笑）」

铃音想了想：「远程吧。你那个可以连接手机APP的遥控器，权限共享给你。如果我觉得需要，或者……你想玩的话。」

早川：「明白。我会在‘合适’的时候，送上我的‘问候’。期待小白的表现。」

放下手机，铃音看向坐立不安的悠真，嘴角勾起一抹笑：“早川主人也‘上线’了哦。今天，你可是在两位主人的共同关注下进行演出呢。压力大吗？”

悠真只觉得小穴里的跳蛋似乎微微发热，尽管它并没有启动。双重注视，双重掌控……她低下头，手指绞紧了过于宽大的卫衣袖口。

傍晚六点四十分，门锁转动的声音响起。

悠真猛地从沙发上弹起来，心脏狂跳，几乎要撞碎肋骨。铃音则显得从容许多，她迅速检查了一下悠真的衣着和神态，低声道：“记住，你是‘哥哥’，我是‘妹妹’。自然点。”

门开了。

父亲和母亲拖着小型行李箱走了进来。父亲穿着笔挺的西装外套，略显疲惫但依旧精神；母亲则是利落的套装裙，妆容精致。两人身上都带着风尘仆仆的气息和外面世界的味道。

“爸爸！妈妈！”铃音立刻换上灿烂的笑容，像一只欢快的小鸟扑了过去，接过母亲手里的包，“路上辛苦了！怎么比预计的早了一点？”

“航班提前了些。”母亲揉了揉铃音的头发，目光随即转向僵立在沙发旁的悠真，眼中闪过一丝不易察觉的审视，“悠真？怎么傻站着？过来让妈妈看看。”

悠真深吸一口气，强迫自己迈开步子，用练习了半天的、略显僵硬的步伐走过去。她努力挺直背，压低声音：“爸，妈。回来了。”

母亲上下打量着他，眉头微蹙：“怎么穿这么多？脸色也不太好看，是不是又熬夜打游戏了？”说着，伸手想去摸他的额头。

悠真下意识地想躲，硬生生忍住。母亲的手掌温热干燥，贴在他额头上。他能闻到母亲身上淡淡的香水味，一种属于“正常世界”的、令人安心又令人刺痛的味道。

“有点低烧吗？不烫啊。”母亲收回手，看向铃音，“铃音，哥哥这几天有没有好好吃饭？”

“有啊，哥哥最近可乖了，还帮我打扫卫生呢。”铃音面不改色地撒谎，亲昵地挽住母亲的手臂，“可能是昨晚睡觉踢被子有点着凉吧。妈，你们吃饭了吗？家里有食材，我简单做点？”

“不用麻烦了，我们在机场吃过了。”父亲这时开口，声音沉稳，他将行李箱放到一边，脱下外套，“你们吃过了吗？”

“吃过了。”铃音抢答，“哥哥胃口不太好，我就煮了点粥。”

父亲点点头，走到沙发坐下，拍了拍身边的位置：“悠真，过来坐。最近学习怎么样？明年就要考虑升学了吧？”

考验开始了。悠真依言坐下，身体紧绷，尽量用平直的语调回答：“还……还行。在复习。”

“有目标院校了吗？”父亲拿起桌上的财经杂志随手翻看，语气随意，却带着无形的压力。

悠真的大脑一片空白。目标院校？她很久没想过这些了。她的“目标”早就变成了如何取悦主人，如何积累“正”字，如何获得“奖励”。

“还在……考虑。”她含糊道，手指无意识地抓住了运动裤的布料。

“男孩子，要有规划。”父亲看了她一眼，似乎觉得她有些心不在焉，但也没多说，转向铃音，“铃音呢？高中生活适应得怎么样？”

铃音乖巧地坐在母亲身边，笑着回答学校里的趣事，声音清脆，表情灵动，完美扮演着备受宠爱的妹妹角色。悠真在一旁听着，感觉自己像个拙劣的旁观者，与这个温馨的家庭画面格格不入。

母亲起身去厨房烧水泡茶。铃音也跟着去帮忙。客厅里只剩下父亲和悠真。

沉默有些尴尬。父亲看着电视里播放的新闻，忽然问：“最近有没有锻炼？看你好像清瘦了些。”

“有……偶尔。”悠真回答，小腹下意识地收紧。运动裤下，那安静蛰伏的跳蛋似乎存在感格外强烈。

“年轻人，还是要保持运动。身体是革命的本钱。”父亲说着，目光不经意地扫过悠真过于宽松的裤腿，似乎想说什么，最终还是没开口。

这时，母亲和铃音端着茶具回来了。铃音将一杯热茶放在悠真面前的茶几上，弯腰时，她的手臂似是无意地擦过悠真放在腿上的手背。指尖极其轻微地、快速地勾了一下悠真的掌心。

一个只有两人懂的、隐秘的触碰。

悠真浑身一颤，像被微弱的电流击中。她猛地缩回手，差点打翻茶杯。

“怎么了？”母亲疑惑地看过来。

“没、没事，有点烫。”悠真连忙稳住茶杯，心跳如鼓。她不敢看铃音，余光却瞥见铃音嘴角那抹转瞬即逝的、恶作剧得逞般的笑意。

这个插曲很快过去。一家人坐在客厅，看似闲聊，实则各怀心思。父母询问着生活琐事和学习情况，铃音应对自如，偶尔帮悠真打圆场。悠真则尽量减少说话，用简短的词语回应，大部分时间低着头，扮演一个“内向”、“有点感冒所以精神不振”的儿子。

然而，铃音的“玩弄”显然不会就此停止。这只是开胃小菜。

**第一次险情，发生在晚饭后。**

父母带回来一些精致的点心作为礼物。铃音提议一起吃。四人围坐在餐桌旁。

悠真坐在铃音对面，父母分别坐在长桌两端。她小口吃着点心，味同嚼蜡，全部注意力都集中在对面铃音身上，警惕着她任何可能的动作。

铃音表现得十分正常，和父母有说有笑，讨论点心的口味。但她的脚，却在餐桌下悄然行动。

悠真忽然感到一只穿着柔软室内袜的脚，轻轻贴上了自己的小腿。她身体一僵，不敢动弹。那只脚沿着她的小腿缓缓上移，隔着厚实的运动裤布料，摩挲着。

不要……爸爸妈妈就在旁边……

悠真屏住呼吸，拿着点心的手微微发抖。她能感觉到铃音的脚趾，调皮地勾画着她小腿的轮廓，甚至试图往膝盖后方更敏感的地方探去。

母亲正在说话，目光偶尔扫过孩子们。悠真努力维持着面部表情的平静，但额角已经渗出细密的冷汗。小穴里的跳蛋依旧安静，可这种明目张胆的、在父母眼皮底下的触碰，比任何剧烈的震动都更让她恐慌和……兴奋。

一种卑鄙的、罪恶的兴奋感，伴随着恐惧，悄然滋生。

铃音的脚越来越大胆，终于移到了她的大腿位置，隔着裤子，轻轻踩住了她腿根那片被黑色字迹覆盖的皮肤。虽然隔着布料，但那种被压制、被触碰的感觉，依旧清晰传来。

悠真闷哼一声，极其轻微，却被正在倒茶的父亲听到。

“悠真？怎么了？不舒服？”父亲看过来。

“没、没有……”悠真连忙摇头，声音发紧，“点心有点……噎到了。”

铃音适时地递过来一杯水，眼神无辜：“哥哥，喝水。”

悠真接过水杯，指尖冰凉。桌下，铃音的脚不仅没有离开，反而更用力地碾了一下，才慢悠悠地撤回。

一场危机，看似化解。但悠真的后背，已经湿了一片。

**第二次险情，在客厅看电视时。**

父母想看一部老电影，铃音积极响应。悠真本想回房间，却被母亲叫住：“悠真也一起看吧，难得一家人都在。”

于是，四人坐在沙发上。父母坐主沙发，铃音和悠真坐旁边的双人沙发。距离很近。

电影开始不久，铃音就“自然而然”地靠向了悠真这边，手臂贴着悠真的手臂。悠真僵硬地坐着，一动不敢动。

电影播放到一段略显沉闷的对话时，铃音忽然小声对悠真说：“哥哥，我脖子有点酸，帮我揉揉好不好？”声音不大，但足够让旁边的父母听到。

母亲转过头：“铃音，怎么了？”

“没事，妈妈，就是坐久了有点酸，让哥哥帮我按一下就好。”铃音撒娇道。

父亲笑了笑：“悠真，帮帮你妹妹。”

无法拒绝。悠真只能转过身，面对着铃音。铃音背对着父母，面向悠真，脸上露出一个只有悠真能看到的、带着狡黠和命令的笑容。

悠真伸出手，手指颤抖着，按在铃音的后颈上。指尖下的肌肤温热细腻。她机械地揉捏着。

“下面一点，肩膀这里。”铃音指挥着，同时，她的手也“不经意”地搭上了悠真的膝盖。

悠真一颤。铃音的手指，就在她膝盖上，距离大腿根部那片区域不过咫尺之遥。而且，铃音的手指，开始有节奏地、极其轻微地敲击着她的膝盖骨。

哒、哒、哒。

像是在打拍子，又像是在模拟某种节奏。悠真立刻想起了晚上那些被侵犯的节奏，想起了跳蛋震动的频率。她的呼吸开始不稳，揉捏铃音肩膀的手也失了力道。

“哥哥，轻点嘛。”铃音抱怨，声音甜腻。

就在这时，铃音搭在悠真膝盖上的手，忽然向上移动了一寸，直接按在了她的大腿正面上。隔着厚厚的运动裤，掌心传来的温度和压力却无比清晰。

悠真倒吸一口凉气，手猛地从铃音肩膀上滑下。

“怎么了？”母亲再次被惊动，看了过来。

“哥哥笨手笨脚的。”铃音抢先说道，笑着收回手，仿佛刚才的触碰只是个意外，“算了算了，不按了。哥哥你还是专心看电影吧，看你紧张得。”

悠真满脸通红，讷讷无言。父亲看了她一眼，摇摇头，似乎觉得儿子还是太腼腆内向，注意力又回到了电影上。

铃音则端正坐好，仿佛一切都没发生过。只有悠真知道，刚才那一刻，她的心脏几乎停跳。而小穴深处，似乎因为持续的紧张和隐秘的刺激，分泌出了一点温热的液体。

**第三次险情，最为惊险。**

晚上九点多，母亲想让悠真试穿她新买的一件衬衫（按照悠真以前的尺码买的），说是逛街时看到觉得适合他。是一件浅蓝色的牛津纺衬衫，款式简约。

“去房间换上让妈妈看看。”母亲拿着衬衫，对悠真说。

试衣服……要脱掉现在这身宽松的、能遮掩一切的卫衣和运动裤。在母亲面前。

悠真的脸瞬间血色尽失。她求助般地看向铃音。

铃音眼神微闪，随即笑道：“妈，哥哥感冒呢，试衣服多麻烦，而且这衬衫看起来有点薄，现在穿不合适吧？”

“就在房间里试一下，不合适我再拿回去换。很快的。”母亲坚持，或许是太久没见儿子，想多些互动。

无法再推脱。悠真僵硬地接过衬衫，走向自己的房间。母亲跟在她身后。

铃音的心也提了起来。虽然做了遮掩，但悠真身体的变化，近距离仔细看还是能发现端倪。尤其是胸部，虽然不大，但已有明显隆起，绝非男性平坦的胸膛。还有腰臀的线条，皮肤的细腻程度……

她快速思考着对策。

悠真走进房间，关上门，但母亲就等在门外。她颤抖着手，脱掉了宽大的卫衣。上身只剩下贴身的白色棉质背心。镜子里，背心下那微微起伏的曲线，以及锁骨、胸口被遮瑕膏覆盖后仍显不自然的肤色，让她感到绝望。

她咬咬牙，开始脱运动裤。当裤子褪到膝盖时，大腿上那片狰狞交错的黑色墨迹暴露在空气中。她慌忙想拉起裤子，却已经晚了。

“悠真，还没好吗？”母亲的声音在门外响起，伴随着门把手转动的声音——门没锁！

就在这千钧一发之际——

“妈！”铃音的声音突然在客厅响起，伴随着一声夸张的惊呼和什么东西摔碎的声音。

“怎么了？”母亲的注意力立刻被吸引，转身快步走向客厅。

悠真趁机飞快地拉起裤子，心脏狂跳得几乎呕吐。她迅速套上那件浅蓝色衬衫，扣子扣到最上面一颗，勉强遮住脖子和胸口。裤子也重新穿好。

她打开门，走到客厅。只见地上是一个摔碎的玻璃杯，水洒了一地。铃音正一脸懊恼地蹲着收拾。

“对不起，妈妈，我想倒杯水，手滑了。”铃音抱歉地说。

“没事没事，小心别划到手。”母亲拿来扫帚和簸箕。

悠真松了口气，感激地看了一眼铃音。铃音低着头清理碎片，嘴角却微微上扬。

“衬衫试了吗？合身吗？”母亲处理完碎片，抬头问悠真。

悠真僵硬地点点头：“还……还行。”

母亲走过来，仔细看了看：“嗯，肩膀这里好像有点宽了，袖子也长了点。你是不是又瘦了？”她伸手想整理一下悠真的衣领。

悠真下意识地后退半步。

母亲的手停在半空，眼中闪过一丝疑惑和……受伤。

铃音立刻插进来，挽住母亲的手臂：“妈，哥哥感冒不舒服嘛，而且男孩子这个年纪抽条，瘦点很正常啦。这衬衫颜色挺好看的，就是尺码不对，下次我陪你去换一件更合适的。”

母亲看了看低着头的悠真，又看了看笑容甜美的铃音，最终叹了口气：“好吧。你们早点休息。我跟你爸爸也累了，明天一早的飞机。”

一场最大的危机，在铃音急智制造的混乱和打岔下，险险度过。

父母洗漱后，回到了主卧室。关门声响起的那一刻，悠真仿佛全身力气被抽干，几乎要瘫倒在地。铃音扶住了她，将她半拖半抱地弄回房间。

房门关上，隔绝了外面那个“正常”的世界。

悠真靠在门上，剧烈地喘息，眼泪终于控制不住地流了下来。这一天，短短几个小时，却比她经历过的任何一场性爱调教都更消耗心神，更像是在刀尖上行走。

铃音却显得异常兴奋，眼中跳动着危险而灼热的光。她伸手，抚去悠真脸上的泪水，指尖却带着不容置疑的力道。

“害怕吗？”她低声问，声音沙哑。

悠真点头，又摇头，说不清是害怕还是别的。

“刺激吗？”铃音又问，手指下滑，解开了她衬衫最上面的两颗扣子，露出被遮瑕膏覆盖的锁骨，“在爸爸妈妈面前，被我那样触碰……差点被发现……是不是比平时更让你……”

她的手指探入衬衫领口，抚摸那层虚假的遮盖之下真实的肌肤。

悠真颤抖着，无法否认。那种极致的危险和背德的快感，确实像毒药一样，让她在恐惧中尝到了一丝令人眩晕的甘美。

“看来，小白很喜欢这种‘双重生活’的游戏呢。”铃音笑了，彻底扯开她的衬衫，露出只穿着背心的上身。遮瑕膏在汗水和摩擦下有些斑驳，露出下面若隐若现的痕迹。“白天的‘好哥哥’，晚上主人的‘小淫娃’……这个设定，是不是很有趣？”

她低下头，吻住悠真颤抖的唇，不再是白天那种蜻蜓点水或恶作剧的触碰，而是带着积压了一天的欲望和掌控欲的、深入而掠夺的吻。同时，她的手直接探入运动裤宽松的裤腰，隔着内裤，用力揉捏那片满是墨迹的皮肤，以及其下更加湿热的柔软。

“嗯……主人……”悠真破碎的呻吟从纠缠的唇齿间溢出，身体软了下来，主动贴近铃音。一天的伪装、紧张、恐惧，在这一刻找到了宣泄的出口——不是通过逃离，而是通过更深地沉入这扭曲的关系中。

铃音一边吻着她，一边从口袋里掏出了那个微型遥控器。她看着悠真迷离湿润的眼睛，拇指按下了按钮。

不是最低档。

“嗡——！”

小穴深处，那颗安静蛰伏了一整天的跳蛋，骤然启动，而且是以中等强度、带着旋转研磨模式的震动！

“啊——！”悠真猝不及防，腰肢猛地一弹，发出短促的惊叫，随即又被铃音的吻堵住。空虚了一天的内壁被熟悉的震动填满、刺激，快感如同开闸的洪水，汹涌而至。她腿一软，彻底跌入铃音怀中。

铃音搂着她，一边加深亲吻，一边操控着遥控器，让跳蛋的震动模式不断变化，时而持续，时而间歇，时而高频冲刺。悠真在她怀里无助地颤抖、扭动，发出压抑的、甜腻的呜咽，双手紧紧抓住铃音背后的衣服。

“小声点哦……”铃音稍稍退开，唇瓣摩擦着她的耳垂，气息灼热，“爸爸妈妈就在隔壁……你想让他们听到，他们的‘儿子’正在被亲妹妹用跳蛋玩得高潮连连吗？”

这句话像一盆冰水混合着沸油浇下。羞耻感爆炸，但随之而来的，是更强烈的、黑暗的兴奋和刺激。悠真咬住自己的手背，试图抑制呻吟，身体却更加敏感，每一次震动带来的快感都加倍清晰。

铃音将她推倒在床上，迅速剥掉她身上剩余的衣物——那件不合身的衬衫，背心，运动裤，内裤。白皙的、布满新旧痕迹和遮瑕膏残迹的身体完全暴露在昏黄的灯光下。大腿上那片黑色图腾，在汗水和情动泛红的肌肤映衬下，显得格外淫靡刺目。

铃音也脱去了自己的衣服。她同样拥有着完美的女性曲线和那根傲人的男性性器，此刻早已勃发昂扬，前端渗出晶莹的液体。她跪在悠真双腿之间，俯视着她。

“白天装了一天的‘哥哥’，很累吧？”铃音的手指划过悠真泛着不正常红晕的脸颊，滑到她的嘴唇，轻轻按压，“现在，做回我的小白。用你的身体，你的声音，好好取悦我，弥补我白天不得不‘克制’的损失。”

悠真仰望着她，眼中水光潋滟，充满了驯服、渴望和一丝被逼到极致后的迷乱媚态。她伸出舌尖，舔了舔铃音按在她唇上的手指，然后主动张开嘴，含住了那根手指，模仿着口交的动作吮吸起来，眼神勾人。

铃音的呼吸骤然加重。她抽出手指，握住自己滚烫的阴茎，硕大的龟头抵上悠真湿滑不堪的穴口。

“说，你是谁？”她问，声音沙哑。

“我是小白……是主人的小淫娃……”悠真喘息着回答，腰肢主动向上挺送，试图将那粗大的顶端纳入体内。

“白天那个呢？那个在爸爸妈妈面前的人，是谁？”

“是……是哥哥……是假的……”悠真扭动着，空虚的小穴急切地收缩，“现在这个……才是真的……主人……给我……求求你……”

“如你所愿。”

腰部用力，粗壮的阴茎劈开湿滑紧致的甬道，长驱直入，一插到底！

“嗯啊啊啊——！”被彻底填满的充实感和被撑开的胀痛感，让悠真发出了今天最为高昂、却也最为压抑的一声呻吟。她猛地仰起头，脖颈拉出脆弱的弧线。

铃音捂住她的嘴，开始猛烈地抽插起来。

“噗叽！噗叽！噗嗤——！”

激烈的水声在寂静的房间里异常响亮。铃音每一次都重重撞到最深处，碾压过每一寸敏感点。她低头，啃咬着悠真的脖颈和锁骨，留下新的、覆盖在旧痕和遮瑕膏之上的印记。

体内的跳蛋还在持续震动，与真实阴茎的抽插里应外合，将快感推向难以想象的高峰。悠真在铃音身下像暴风雨中的小船，被抛起又落下，意识很快被撞得粉碎。她唯一能做的，就是紧紧缠住铃音的身体，用颤抖的肢体和破碎的呻吟回应这狂暴的侵犯。

不知何时，铃音松开了捂住她嘴的手。悠真立刻咬住了自己的手腕，防止自己叫得太大声。泪水不受控制地流淌，分不清是极乐的泪水，还是对这一天巨大压力的宣泄。

就在悠真被操弄得神志不清、濒临高潮边缘时，铃音却忽然停了下来，缓缓退出。

空虚感瞬间吞噬了悠真。她发出不满的、带着哭腔的呜咽，茫然地看向铃音。

铃音却拿起手机，快速操作了几下，然后将屏幕转向悠真。

屏幕上，是早川理纱发来的视频通话请求。铃音按下了接听。

早川的脸出现在屏幕上。她似乎在一个布置简洁的房间里，穿着睡衣，头发微湿，像是刚洗完澡。她的目光透过屏幕，精准地落在浑身赤裸、泪眼朦胧、双腿大张、小穴泥泞张合的悠真身上。

“晚上好，小白。”早川的声音透过扬声器传来，平静中压抑着风暴，“看来，白天的‘演出’很成功？现在是在接受铃音主人的‘庆功宴’吗？”

悠真羞耻得想蜷缩起来，却被铃音按住了。

“早川主人也来‘验收’一下成果吧。”铃音将手机立在床头柜上，调整角度，确保早川能清楚地看到悠真全身，“顺便，送上一份‘远程问候’。”

她拿起另一个遥控器——那是连接着早川共享权限APP的。

早川在屏幕那头点了点头，拿起自己的手机。

铃音重新压上悠真，阴茎再次抵住穴口，却没有进入。她看着悠真渴望又困惑的眼睛，低笑道：“猜猜看，接下来，是铃音主人的鸡巴先插进去，还是早川主人的‘问候’先到来？”

话音刚落——

“嗡——！！！”

比之前强烈数倍的高频震动，猛地从悠真小穴深处炸开！那是早川通过远程控制，将跳蛋的强度直接调到了接近惩罚档的级别！

“呀啊——！！”悠真猝不及防，身体像虾米一样弓起，脚趾蜷缩，眼前一片白光。这突如其来的剧烈刺激，让她差点直接高潮。

而与此同时，铃音腰身一沉，粗大的阴茎趁着内壁因剧烈震动而痉挛收缩的时机，猛地贯穿到底！

“呃啊——！！！”双重刺激！内部是高频震动的跳蛋疯狂搅动敏感点，外部是粗壮阴茎凶猛的贯穿和碾压！快感如同海啸，瞬间淹没了悠真所有的感官和理智。她失声尖叫，又猛地咬住手臂，全身剧烈地痉挛、抽搐，爱液如同失禁般喷涌而出。

高潮了。被这双重夹击，轻易地、猛烈地送上了顶峰。

但惩罚，或者说“庆功”，才刚刚开始。

铃音没有因为她的高潮而停下，反而抽插得更加凶猛。早川也通过遥控，不断变换着跳蛋的震动模式和强度，时而配合铃音抽插的节奏，时而故意在她稍微缓息时给予突然的强烈刺激。

悠真被两人（即使早川不在现场）默契的“合作”玩弄于股掌之间。高潮一波接着一波，几乎没有间断。她的呻吟变得支离破碎，只剩下无意识的、甜腻的呜咽和啜泣。身体像是脱离了掌控，只会本能地迎合、颤抖、喷射。

铃音在剧烈的运动中俯身，吻去她眼角的泪水，在她耳边喘息着说：“看……这就是真实的你……离开了主人的操控和填满，你什么都不是……连在爸爸妈妈面前扮演一个正常人都做不到……”

“呜……主人……小白……小白是主人的……”悠真意识涣散地重复着，这句话在今天被反复强化后，仿佛成了她唯一确认的真理。

“对，你是我的，也是早川的。”铃音看向屏幕里的早川。

早川的目光紧紧锁在悠真被欲望彻底摧毁的脸上，呼吸也有些急促。她对着麦克风轻声说：“记住这种感觉，小白。记住即使隔着距离，你的身体和快乐，依然由我们掌控。”

这场漫长的、激烈的性爱，持续了不知多久。铃音在悠真体内射了两次，早川也通过遥控，将悠真逼至无数次或大或小的高潮。床单被汗水、爱液和精液浸得湿透。悠真最后连手指都无法动弹，眼神空洞，只剩下身体偶尔的细微抽搐。

铃音终于停了下来，退出。浓白的精液混合着更多的爱液，从悠真红肿无法闭合的小穴中汩汩流出。她拿过手机，对早川说：“差不多了，再玩下去，明天岩崎太太来收拾的时候，恐怕要报警了。”

早川在屏幕那头似乎也平复了一下呼吸，点了点头：“嗯。让她休息吧。今天……辛苦了。”最后三个字，是对着悠真说的，语气有些复杂。

视频挂断。

铃音丢开手机，躺在悠真身边，将她搂进怀里，拉过薄被盖住两人狼藉的身体。悠真像只被雨淋透的小猫，瑟缩在她怀里，无声地流泪。

铃音轻轻拍着她的背，如同安抚婴儿。

“做得很好，小白。”她的声音带着事后的慵懒和满足，“今天这场‘双重身份’的考试，你勉强及格了。虽然几次差点露馅，但最终都圆了回来。”

悠真在她怀里蹭了蹭，发出含糊的鼻音。

“不过，规矩就是规矩。”铃音话锋一转，伸手拿过床头柜上的黑色记号笔，在悠真大腿那片已经几乎没有空位的皮肤上，寻找了一小块尚能下笔的地方，用力地画下了一笔。“这是对你今天整体表现（包括几次险情和最后侍奉）的……综合记录。”

笔尖的触感让悠真轻颤。

“睡吧。”铃音吻了吻她的发顶，“明天，爸爸妈妈一早就走。然后……”

她的声音低下去，带着无尽的深意。

“……我们还有整整一天的时间，来好好‘复习’今天的内容，尤其是……那些‘不够完美’的地方。”

悠真在她怀里，意识沉入黑暗前，最后一个念头是：明天，爸爸妈妈会离开。然后，她又将变回完全的“小白”，生活在只有主人和欲望的镜城之中。

那座脆弱的、两面皆可照人的镜城，在白天的阳光下险些崩塌，却在午夜的欲望深渊中，被浇筑得更加坚固、也更加扭曲。

而镜中的倒影，那个名为“悠真”的男孩，正在一点点碎裂、消散，取而代之的，是名为“小白”的、媚骨天成、离不开主人宠爱的宠物。

夜色深沉。
主卧室里，父母或许正在安睡，浑然不知一墙之隔，他们认知中的“儿子”，正经历着怎样的蜕变与沉沦。
盐灯的光，温柔地笼罩着床上相拥的两人，仿佛在默许这一切的荒诞与必然。`,dd=Object.freeze(Object.defineProperty({__proto__:null,default:cd},Symbol.toStringTag,{value:"Module"})),ud=`---
order: 23
---
# #25 银幕下的暗潮与隔间内的盛宴

清晨的阳光，透过依旧厚重的窗帘缝隙，切割出一道锐利的金色光柱，落在凌乱的床单上，照亮了空气中飞舞的微尘，也照亮了悠真大腿根部那片已经近乎全黑、再也分辨不出单个字迹的皮肤。那片皮肤微微红肿，墨迹边缘有些晕染，像是某种古老而邪异的纹身，深深烙印进皮肉深处。

悠真在浑身熟悉的酸痛中醒来，意识却比以往任何一次都要清晰。昨夜的疯狂，父母的短暂归家，白天的伪装与夜间的剥落，所有记忆碎片混合在一起，在她脑海中沉淀出一种奇异的、灼热的平静。那是一种认命，也是一种更深层次的……觉醒。

她侧过头，看到铃音已经醒了，正支着胳膊，看着她，眼神深邃，带着审视和一丝玩味。

“醒了？”铃音的声音有些沙哑，指尖划过悠真肩头新添的咬痕，“感觉怎么样？我的小骚货。”

这个称呼让悠真身体微微发热。她眨了眨眼，没有像以前那样羞怯或否认，反而主动将脸贴近铃音的手掌，蹭了蹭，喉咙里发出一声类似猫咪的、带着鼻音的轻哼。

“主人……”她的声音还带着刚醒的绵软，却自然流露出一股媚意，“……下面……还有点胀。”

铃音的眉毛挑高了。她明显感觉到了悠真态度微妙的变化。不再是完全的被动承受或恐惧顺从，多了一丝……近乎邀宠的主动。就像一朵被彻底催熟、绽放到糜烂的花，终于开始散发自己那蛊惑人心的甜腻香气。

“哦？”铃音饶有兴致地俯身，鼻尖几乎碰到悠真的鼻尖，“哪里胀？说清楚。”

悠真的脸颊泛起红晕，但眼神却没有闪躲，反而水汪汪地看着铃音，拉着铃音的手，慢慢往下，覆在自己平坦的小腹上，然后更往下，停在稀疏毛发下那依旧有些红肿的阴阜上。

“这里……里面……”她喘息着，引导铃音的手指探入那道湿润的缝隙，指尖轻易就被吸了进去，“被主人灌满的地方……醒了之后……觉得好空……好痒……”

她的腰肢不自觉地微微扭动，迎合着铃音的手指。

铃音的呼吸猛地一滞，眼中燃起炽热的火焰。她没想到，仅仅过了一夜，经历了那场高压的双重身份考验后，悠真非但没有崩溃或退缩，反而像是突破了某种最后的心理屏障，将内里的“媚”与“骚”毫无保留地释放了出来。

这比她预想的，还要……有趣得多。

“看来，昨天的‘考试’，不仅没考垮你，反而把你骨子里的东西全逼出来了。”铃音抽出手指，带出一丝银线，她将手指含入口中舔掉，眼神危险，“这么饥渴？一大早就想要？”

“想要……”悠真毫不犹豫地点头，手臂环上铃音的脖子，将她拉近，吐气如兰，“想要主人的大鸡巴……狠狠地……填满小白……”

就在铃音几乎要把持不住，准备再次压上去的时候，她的手机响了。是早川发来的消息。

铃音啧了一声，拿起手机看了一眼，随即笑了，将屏幕转向悠真。

早川：「今天天气不错，带小白出去‘放放风’如何？听说新上映的那部文艺片评价很高。（微笑）」

出去？看电影？悠真的心猛地一跳。昨天在父母面前的伪装已经让她心力交瘁，今天又要去人群聚集的公共场所？

但铃音却显得兴致勃勃。“早川主人的提议不错。总是关在家里玩，确实有点腻了。”她低头看着悠真，手指捏住她的下巴，“而且，我也很想看看，在公共场合，在那么多‘正常人’中间，你这副刚刚觉醒的骚骨头，能忍到什么程度，又会……露出怎样迷人的表情。”

她的语气充满了跃跃欲试的恶意和期待。

“可是……主人……”悠真有些迟疑，昨天的惊险还历历在目。

“没有可是。”铃音打断她，语气不容置疑，“这就是今天的‘课程’——公共场合的适应性训练与服从性测试。而且……”

她凑到悠真耳边，压低声音，气息灼热：“你不是觉得里面空、痒吗？到了电影院，黑漆漆的，人多又吵……我们可以玩点更刺激的。比如，让你穿着最淫荡的内衣，坐在我们中间，下面塞着跳蛋，看着电影，然后……被我和早川，轮流用手指，或者别的什么……玩到高潮，却不能出声。”

露骨的描述让悠真身体剧颤，小穴条件反射地收缩，流出更多爱液。恐惧依旧存在，但一种更加汹涌的、黑暗的兴奋和期待，却如同毒藤般缠绕上来。在公共场合……被玩弄……在那么多人眼皮底下……

“怎么样？敢不敢？”铃音挑衅地问。

悠真看着铃音眼中那簇跳动的火焰，感受到自己体内同样在燃烧的、陌生的渴望。她深吸一口气，点了点头，眼中闪过一丝破釜沉舟的媚光：“只要是主人的命令……小白……都敢。”

“很好。”铃音奖励般地吻了她一下，“那么，现在开始准备。今天的‘战袍’，要精心挑选才行。”

***

所谓的“战袍”，并非寻常衣物。

铃音从她房间那个上锁的衣柜里，拿出了几件让悠真只看一眼就脸红心跳的东西。

一件黑色的、用料少得可怜的蕾丝连体衣。说是连体衣，其实更像几根纤细的带子勉强维系着几片巴掌大的黑色蕾丝布片。上半部分勉强能遮住胸口两点，下半部分则是标准的丁字裤款式，后面只有一根细绳陷入臀缝，前面则是心形的镂空，刚好将整个阴部完全暴露出来。整套衣服是透视的网纱材质，穿在身上，肌肤若隐若现，比全裸更加淫靡。

一双直到大腿根的黑色丝袜，顶端带着蕾丝花边和细小的吊袜带扣子。

还有一件……毛茸茸的、带有铃铛的猫尾巴肛塞。尾巴是柔软的黑色仿真皮毛，根部连接着一个大小适中的、椭圆形的硅胶塞子。

“穿上。”铃音命令道，眼中满是期待。

悠真颤抖着，在铃音的注视下，一件件穿上这些羞耻至极的衣物。冰凉的蕾丝和网纱贴着皮肤，丝袜顺滑地包裹住双腿，带来熟悉的束缚感。当那根猫尾巴肛塞被铃音涂满润滑剂，缓缓推入她后穴时，她忍不住发出甜腻的呻吟。塞子的大小刚好，填满了昨夜的些许空虚，尾巴垂在臀后，轻轻晃动。

最后，铃音拿出一条普通的、长度及膝的米白色针织连衣裙，款式宽松休闲。“套在外面。”

连衣裙质地柔软，将里面那身淫荡的情趣内衣完全遮盖，只露出穿着黑色丝袜的小腿和脚踝。猫尾巴被巧妙地藏在裙摆下，走动时才会微微晃动。从外表看，这只是一个穿着简单连衣裙和丝袜、看起来有些过于“精致”的年轻女孩（在父母离开后，铃音似乎不再强迫悠真穿男装，而是默认了她女性化的外表）。只有她们自己知道，这看似清纯的装扮下，是怎样一幅不堪入目的景象。

“完美。”铃音上下打量，如同欣赏自己的杰作，“清纯的外表，淫荡的内核。小白，你现在就像一颗包着糖衣的毒药，或者……一个等待被在公共场所拆开的礼物。”

她自己也换了一身衣服——修身的牛仔裤，白色衬衫，外套一件休闲西装，看起来帅气又利落。早川那边回复说，她会直接去电影院门口等，穿着“适合场合的衣服”。

出门前，铃音拿出了两个跳蛋。一个略大，放入悠真早已湿润的小穴深处。另一个，她放进了自己牛仔裤的前兜里。

“这个，”她晃了晃手中的微型遥控器，和早川共享了权限，“今天会非常忙碌。希望你能喜欢这份‘互动式观影体验’。”

下午三点，市中心一家大型影城。

周末的下午，人流不少。悠真戴着口罩和一副平光眼镜（铃音准备的，为了稍微遮掩容貌），低着头，紧紧跟在铃音身边。针织连衣裙下，那身情趣内衣的存在感无比强烈，丝袜摩擦着大腿内侧，猫尾巴随着每一步轻轻扫过臀缝，小穴里的跳蛋安静蛰伏，却时刻提醒着她身体的异常状态。周围是嘈杂的人声、爆米花的甜腻气味、还有各种目光的扫视……每一秒都让她紧张得手心出汗，身体却可耻地更加兴奋，腿心微微湿润。

“抬头，自然点。”铃音低声吩咐，手自然地揽住她的腰，将她往自己身边带了带，动作看起来像一对亲密的姐妹或情侣，“早川在那边。”

悠真抬起头，看到早川理纱正站在售票机旁。她今天穿了一身浅灰色的羊绒长裙，外罩一件深蓝色的风衣，长发披肩，气质清冷知性，与周围环境有些格格不入，却又异常吸引目光。她也看到了她们，微微点了点头。

三人汇合。早川的目光在悠真身上停留了片刻，尤其在她微微泛红的脸颊和被口罩遮住大半的脸上扫过，眼神深了深。她没有多说什么，只是将手中的电影票递给铃音：“买好了，最后排角落的位置。人不多。”

最后排角落，意味着相对隐蔽，也意味着……做点什么不容易被发现。

铃音接过票，笑了：“位置选得不错。”

取票，买饮料和爆米花（纯粹是为了掩饰），检票入场。影厅很大，播放的是一部口碑不错的欧洲文艺片，观众以年轻人和情侣为主，上座率大约六七成。她们的位置在最后一排最靠边的三个连座，旁边和前面几排人都比较少，灯光已经调暗，只有银幕上播放着广告和预告片的光影闪烁。

悠真被安排坐在中间，铃音在左，早川在右。她僵硬地坐下，柔软的座椅仿佛变成了刑具。裙子因为坐姿微微上缩，露出更多裹着黑丝的大腿。早川将爆米花桶放在她腿上，这个动作让她浑身一颤。

“放松，小白。”早川的声音在她右边响起，平静无波，“电影快开始了。”

灯光彻底暗下，银幕上出现片头。舒缓的音乐响起。

电影开始了，但悠真的注意力完全无法集中在银幕上。她能感觉到左右两侧传来的体温，能闻到铃音身上淡淡的香水味和早川身上清冷的皂角香气。紧张和期待让她的呼吸变得急促。

铃音的手，率先有了动作。

她似乎很专注地看着电影，左手却悄然从座椅扶手下方伸了过来，搭在了悠真穿着丝袜的大腿上。指尖先是轻轻点按，然后开始缓慢地、画着圈地摩挲。隔着薄薄的丝袜和里面那少得可怜的蕾丝布片，触感清晰得可怕。

悠真猛地夹紧双腿，却无法阻止那只手。她咬住下唇，不敢出声。

铃音的手指越来越往上，终于触碰到了连衣裙的边缘。她没有犹豫，手指探入裙底，直接触摸到了那根毛茸茸的猫尾巴。她抓住尾巴，轻轻往外拉扯，然后又松开，让塞子在悠真后穴里进出了一点。

“唔……”悠真发出一声极轻的闷哼，身体不由自主地向前倾。

“怎么了？”右边的早川转过头，低声问，仿佛真的在关心。

“没……没什么……”悠真摇头，声音发颤。

早川却伸出手，拿起了悠真腿上那桶爆米花，似乎想自己拿一颗。她的手臂“不小心”碰到了悠真另一侧的大腿，然后，她的手也停留在了那里，和铃音一样，开始隔着裙子和丝袜，抚摸她的大腿，甚至更靠内侧。

左右夹击。

悠真僵在座位上，一动不敢动。银幕上男女主角正在雨中拥吻，配乐浪漫忧伤，而她的身体，却在黑暗的掩护下，被两只手肆意玩弄。裙子下的敏感肌肤因为抚摸而战栗，后穴里的塞子因为铃音的拉扯而带来阵阵异样的刺激。小穴里的跳蛋依旧安静，但她知道，它随时可能启动。

就在这时，铃音的手指离开了猫尾巴，转而探向更前方。她的指尖轻易地找到了那处心形镂空，触摸到了已经完全湿润、微微勃起的小豆。

“！”悠真差点跳起来，被早川按住了肩膀。

“嘘……看电影。”早川在她耳边低语，温热的气息喷在耳廓，她的手则从大腿移到了悠真的小腹，隔着连衣裙，轻轻按压。

铃音的指尖开始灵活地挑逗那颗敏感的小豆，时轻时重，时快时慢。快感如同细小的电流，从下身窜起，直冲头顶。悠真拼命咬住嘴唇，才忍住呻吟。她的身体开始微微颤抖，额头渗出细汗。

早川似乎察觉到了她的状态，嘴角勾起一抹极淡的弧度。她的手从小腹滑下，也探入了裙底，不过她触碰的是悠真丝袜的吊袜带边缘，手指勾住细带，轻轻弹了一下。

“叮……”轻微的金属扣响声，在电影音效的掩盖下几乎听不见，但在悠真耳中却如同惊雷。

铃音加快了手指的动作，同时，她用另一只手，掏出了那个遥控器。

拇指轻轻一按。

“嗡……”

小穴深处，那颗跳蛋启动了。不是剧烈的震动，而是低频率的、持续的、带着旋转感的震动，刚好配合着铃音手指在外部的挑逗。

内外夹击！

“啊……”悠真终于控制不住，发出一声短促的、压抑到极致的呻吟，身体剧烈地痉挛了一下，腿间涌出一股热流。她高潮了，在电影开场不到二十分钟的时候，在左右两位主人的隐秘玩弄下，无声地达到了第一次小高潮。

铃音满意地感受着手指下的湿润和收缩，暂时停下了动作。早川也收回了手，仿佛什么都没发生，继续看着电影。

悠真瘫软在座椅里，大口喘着气，口罩下的脸滚烫，眼神迷离。高潮的余韵还未散去，身体却因为环境的危险和刚刚的刺激而更加敏感亢奋。

电影继续进行。一段相对平缓的剧情。

但悠真知道，这仅仅是开始。

果然，几分钟后，早川有了新的动作。她将自己的风衣脱下，搭在了腿上，也盖住了悠真靠近她那一侧的大腿。然后，她的手在风衣的掩盖下，再次探入悠真裙底。这次，她的目标明确——是那根猫尾巴。

她握住尾巴，不是拉扯，而是开始旋转、捻动，让塞子在悠真后穴里以不同的角度研磨。同时，她倾身靠近悠真，用只有两人能听到的气声说：“听说，猫的尾巴连接着脊柱神经，很敏感。你觉得呢，小白？”

悠真说不出话，只能摇头又点头，后穴传来的陌生而强烈的刺激让她不知所措。早川的玩弄方式与铃音不同，更加细致，更加……折磨人。

铃音也不甘示弱。她再次启动了跳蛋，这次换了另一种震动模式，间歇性强力冲刺。然后，她的手指再次找到那颗湿淋淋的小豆，变本加厉地揉弄。

悠真被前后夹击，快感如同潮水，一波未平一波又起。她夹紧双腿，脚趾在鞋子里蜷缩，双手死死抓住座椅扶手，指甲几乎要嵌进皮革里。呻吟被压抑在喉咙深处，变成破碎的、甜腻的气音。她的身体在两位主人的操控下，变成了一具纯粹感受快感的容器，在黑暗中无声地颤抖、潮吹。

电影银幕上光影变幻，讲述着别人的爱与哀愁。而最后一排的角落里，正在上演着一场更加直接、更加炽烈的欲望戏剧。

**第一次真正的险情，发生在电影播放到一半时。**

前排一对情侣中的女生似乎想去洗手间，她站起身，从前面一排座位挤出来，走向过道。她的目光无意中扫过最后一排，恰好看到悠真身体微微颤抖、脸颊潮红（即使戴着口罩也能看出异常）、眼神迷离的样子。女生愣了一下，脚步顿了顿，脸上露出些许疑惑。

铃音立刻察觉，她迅速收回手，身体坐直，装作认真看电影的样子，同时用胳膊肘轻轻撞了一下早川。早川也立刻停止了动作，手从风衣下抽出，自然地拿起饮料喝了一口。

悠真也意识到有人注视，她强迫自己低下头，假装咳嗽了几声，身体却因为快感中断和紧张而更加紧绷。

那女生看了几秒，可能觉得只是不太舒服，没多想，转身去了洗手间。

危机暂时解除。

但经过这次打断，铃音和早川非但没有收敛，反而更加兴奋。这种在刀尖上跳舞、随时可能被发现的感觉，极大地刺激了她们的掌控欲和施虐欲。

“看来，我们的小白很有‘观众缘’呢。”铃音在悠真耳边低笑，手再次不规矩地滑入裙底，这次，她的手指直接探入了那湿滑紧致的小穴入口，浅浅地抽插起来，“差点就被看到了哦。如果被看到，你这副发情的骚样子，会不会吓到别人？”

早川也再次加入，她的手指隔着丝袜，用力按压悠真大腿根部那片黑色纹身所在的皮肤，带来轻微的刺痛。“或者，会被当成不知羞耻的变态？在电影院里自慰到高潮的……女孩子？”

羞辱的话语混合着真实的侵犯，让悠真羞耻得无以复加，身体却背叛意志，流出更多爱液，将铃音的手指浸得湿透。她甚至不由自主地微微挺腰，迎合那两根作恶的手指。

“里面……好湿……好热……”铃音抽出手指，带出咕啾的水声，在电影音效的掩盖下几乎微不可闻，但悠真却听得清清楚楚。铃音将沾满爱液的手指举到悠真面前，“舔干净。”

悠真看着那晶莹的手指，几乎没有犹豫，伸出舌尖，乖巧地、细致地舔舐起来，将每一滴属于自己的液体卷入口中。眼神迷蒙，带着献祭般的顺从和媚态。

早川看着这一幕，呼吸明显加重了。她的手离开了悠真的大腿，转而探向自己的包，从里面拿出了一个小巧的、圆柱形的物体——一支口红形状的遥控按摩棒，强度可调。

她将按摩棒的头部隔着裙子，顶在了悠真另一侧大腿根部，轻轻震动起来。震动透过布料和丝袜传来，加入了对悠真感官的围攻。

跳蛋在体内震动，手指在穴内抽插，按摩棒在腿根施压，猫尾巴在后穴旋转……多重刺激下，悠真的理智彻底崩盘。她忘记了身处何地，忘记了危险，脑海中只剩下汹涌的快感和取悦主人的本能。她的呻吟渐渐压抑不住，虽然依旧轻微，但在相对安静的时刻，已经有些危险。

“不行了……主人……要去了……又要去了……”她带着哭腔，无意识地哀求，身体绷紧如弓。

铃音和早川对视一眼，默契地同时加强了刺激。

“嗡——！”跳蛋调到高档。
手指加快抽插速度。
按摩棒紧贴敏感点。
猫尾巴被用力一拽！

“嗯啊啊——！！！”悠真猛地仰起头，脖颈拉出优美的弧线，一声高昂的、短促的呻吟终于冲破了束缚，在影厅里响起！

虽然电影音效不小，但这声甜腻至极的、充满情欲色彩的呻吟，还是引起了附近几个观众的侧目。有人疑惑地回头看向最后一排。

铃音反应极快，立刻搂住悠真，让她靠在自己肩上，另一只手轻拍她的背，大声（但保持在合理音量）说：“怎么了？做噩梦了？还是哪里不舒服？”语气充满了“姐姐”的关切。

早川也迅速收起按摩棒，帮忙扶住悠真另一边，一脸“担忧”。

悠真趴在铃音肩头，身体还在高潮的余韵中轻微痉挛，眼泪浸湿了铃音的衣襟。她看起来确实像突然不适。

那几个回头的观众见状，以为是女孩子身体不舒服，也就转回头继续看电影了。

又一次险情，在铃音和早川急智的表演下，化险为夷。

但悠真这次高潮来得太过猛烈，爱液不仅浸湿了内裤和丝袜，甚至渗透了连衣裙的布料，在米白色的裙子上洇开了一小片深色的、不规则的湿痕。位置刚好在大腿根部，虽然不大，但在浅色裙子上颇为显眼。

“啧，弄脏了。”铃音低头看了看，语气却带着愉悦，“看来，中场休息时间到了。”

电影正好播放到一半，进入一个平淡的过渡段落。有些观众起身去洗手间或买零食。

铃音和早川交换了一个眼神。早川点了点头。

“走吧，小白，带你去‘清理’一下。”铃音扶着依旧软绵绵的悠真站起来，用早川的风衣巧妙地遮住她裙子上的湿痕。早川则跟在另一边，三人像是搀扶着身体不适的同伴，慢慢地、自然地走出了影厅。

一离开影厅，进入相对明亮的走廊，悠真就感到一阵强烈的虚脱和羞耻。走廊里人来人往，她能感觉到自己腿间的冰凉粘腻，裙子下的淫荡装扮，以及后穴里那根可笑的猫尾巴。

铃音和早川却显得十分从容。她们径直走向走廊尽头的残疾人卫生间——那里空间较大，有门锁，相对私密。

早川先进去查看了一下，确认里面没人，然后示意铃音扶着悠真进去。

“咔哒。”门锁落下，将外面的世界隔绝。

这个卫生间确实宽敞，干净，有洗手台、马桶和足够的活动空间。明亮的灯光让一切无所遁形。

铃音将悠真按在冰凉的瓷砖墙上，掀起她的连衣裙下摆。那身黑色透视蕾丝情趣内衣、湿透的丝袜、大腿上狰狞的黑色纹身、以及腿间泥泞不堪、还在微微张合吐露爱液的小穴，全都暴露在灯光下。垂在臀后的黑色猫尾巴，此刻显得格外淫靡。

“看看你，骚成什么样子。”铃音的手指粗鲁地拨开那两片湿淋淋的阴唇，露出里面更加鲜红诱人的嫩肉，“电影才看了一半，就流水流成这样，还高潮到弄脏裙子。要是没有我们帮你打掩护，你现在已经被当成变态赶出去了吧？”

悠真羞耻地别开脸，身体却因为暴露在明亮的灯光下和被如此审视而更加兴奋，小穴不自觉地收缩。

早川关掉了水龙头（刚才她开了水龙头制造水流声掩盖可能的声音），走到悠真面前。她伸手，捏住悠真的下巴，迫使她转过头来看着自己。

“害怕吗？刚才差点被发现。”早川问，眼神锐利。

悠真点点头，又摇摇头，眼神水润迷离，带着高潮后的慵懒和更深的情欲：“怕……但是……好刺激……主人……下面……更痒了……”

她竟然主动承认了！铃音和早川都愣了一下，随即眼中爆发出更强烈的光芒。

“看来，公共场合的暴露和危险，反而让你更兴奋了？”早川的手指滑到悠真的喉咙，感受着那里细微的颤动，“你这副媚骨，真是天生就该被这样对待。”

“既然这么痒，这么想要……”铃音松开拨弄阴唇的手，开始解自己的牛仔裤纽扣，“那就在这里，好好满足你。早川同学，你觉得呢？”

早川也松开了捏着悠真下巴的手，开始脱自己的风衣和长裙。里面，她竟然也只穿了一套类似款式的黑色蕾丝内衣，同样拥有着挺立的男性性器。

“当然。”早川的声音冷静，却蕴含着风暴，“影院的‘前戏’已经足够，现在是正餐时间。”

狭小的空间里，温度骤然升高。

铃音首先将悠真转了个身，让她双手撑在洗手台上，臀部高高翘起。黑色的猫尾巴随着动作晃动。铃音站在她身后，粗大的阴茎早已硬得发痛，她抵住那湿滑不堪的穴口，没有任何前戏，腰身一挺，尽根没入！

“啊——！主人！好深……！”悠真发出一声满足的喟叹，身体被撞得向前一冲，双手几乎撑不住。饱满的充实感瞬间驱散了所有空虚。

铃音抓住她的腰，开始猛烈地抽插起来，每一次撞击都结实有力，撞得悠真臀波荡漾，猫尾巴疯狂摆动。水声、肉体碰撞声、悠真压抑不住的呻吟声，在密闭的空间里回荡。

早川则走到了悠真面前。她抬起悠真的脸，看着她被情欲染红的妩媚面容，然后将自己同样不小的阴茎，抵在了悠真的嘴唇上。

“用你的嘴，伺候我。”早川命令道，语气不容置疑。

悠真没有丝毫犹豫，立刻张开口，努力吞入那根炽热的肉刃。她的口腔被填满，舌头熟练地舔舐缠绕，喉咙承受着撞击。后穴被猛烈抽插，口腔被深深侵入，双重填满的快感让她几乎晕厥。

但早川显然不满足于此。她看着悠真沉迷侍奉的样子，忽然伸手，抓住了悠真胸前那少得可怜的蕾丝布料，用力一扯！

“嘶啦——”布料破裂的声音。悠真小巧的乳房弹跳出来，乳尖嫣红挺立。早川低头，含住一侧，用力吮吸啃咬，另一只手则粗暴地揉捏着另一边。

“嗯……呜……”悠真发出含糊的呻吟，前后夹击的快感如同惊涛骇浪，将她彻底淹没。她的意识一片空白，只剩下身体本能地迎合、吞咽、收缩。

铃音的抽插越来越快，越来越重，她俯身，咬住悠真的后颈，留下深深的牙印。“叫出来，小白，这里隔音……比影厅好多了……让我们听听你真正的叫声……”

仿佛得到了赦令，悠真终于放开了喉咙。甜腻的、高亢的、带着哭腔和极致快乐的呻吟，毫无顾忌地爆发出来。

“啊！主人！好棒……插得好深……要死了……啊啊啊！早川主人……鸡巴……好大……喉咙……好满……！”

淫声浪语混杂着激烈的水声和撞击声，充斥着小小的隔间。悠真在两人狂风暴雨般的侵犯下，很快达到了又一次高潮，身体剧烈痉挛，爱液喷溅，后穴死死绞紧铃音的阴茎，口腔也用力吮吸着早川的顶端。

但这仅仅是开始。

铃音在悠真高潮的紧致中射出第一发浓精，滚烫的精液灌满甬道。但她没有退出，而是稍微缓了缓，继续抽插，半软的阴茎在泥泞中摩擦，很快再次硬挺。

早川也在悠真深喉的服侍下释放在她口中，强迫她全部吞咽下去。

然后，两人交换了位置。

早川来到悠真身后，将她后穴里那根猫尾巴肛塞猛地抽出，带出一些肠液和铃音残留的精液。她没有丝毫停顿，将自己沾满悠真口水和精液的阴茎，对准那骤然空虚、微微收缩的后庭，狠狠地捅了进去！

“呀啊——！后面……后面也好满……！”悠真尖叫，后穴被异物侵入的胀痛感和被填满的满足感交织。

而铃音则来到了悠真面前，将依旧湿滑的阴茎再次塞入她口中，同时双手用力揉捏她的双乳，指尖掐拧着乳尖。

新一轮的、更加狂暴的侵犯开始了。

这个小小的残疾人卫生间，变成了专属三人的、欲望沸腾的狂欢密室。她们尝试了各种姿势：悠真被抱起来，双腿环住早川的腰，后穴承受着抽插，同时弯腰为铃音口交；悠真趴在马桶盖上，铃音从后面干她的小穴，早川则站在侧面，将阴茎塞入她手中让她套弄，同时俯身亲吻她；悠真甚至被要求跪在地上，同时为两人口交，承受着她们将精液射在她脸上、头发上……

悠真彻底放弃了思考，变成了纯粹欲望的载体。她媚眼如丝，呻吟不断，主动索求，用身体每一个部位取悦着两位主人。她的“媚骨”在这一刻展现得淋漓尽致——那不是低贱的讨好，而是一种浑然天成、浸入骨髓的、将痛苦与快乐、羞耻与荣耀都转化为极致性吸引力的妖冶姿态。她仿佛天生就该被这样对待，在激烈的性爱中绽放出最夺目的光彩。

不知道过了多久，也不知道高潮了多少次。悠真全身都沾满了汗水、精液和爱液，眼神涣散，嘴角却带着满足的、慵懒的笑意。铃音和早川也消耗了大量体力，呼吸粗重。

最终，铃音将已经软成一滩泥的悠真抱在怀里，坐在马桶盖上。早川则拧开了热水，用纸巾沾湿，开始简单地擦拭三人身上的狼藉。

隔间里弥漫着浓烈的性爱气息。

“看来，今天的‘适应性训练’，超额完成了。”铃音抚摸着悠真汗湿的头发，语气带着餍足和赞赏，“小白，你比我想象的，还要出色。”

悠真靠在她怀里，连点头的力气都没有，只是用鼻音发出含糊的回应。

早川清理完毕，穿好衣服，看着铃音怀里那个被彻底玩坏、却焕发着惊人媚意的“作品”，眼神复杂。有征服的快感，有占有的满足，还有一丝极深的、连她自己都未必清楚的悸动。

“该出去了。电影应该快结束了。”早川看了看时间，“从员工通道走吧，避开散场的人群。”

铃音点头，帮悠真整理了一下那件已经皱巴巴、还带着湿痕的连衣裙，勉强能蔽体。猫尾巴被取出收好。丝袜已经破了好几处，但穿着总比光着强。她们小心翼翼地将悠真扶起来。

打开隔间门时，走廊里正好响起电影散场的广播声和人流涌出的嘈杂声。

三人混在人群中，低调地离开了电影院。夕阳的余晖洒在身上，带着一丝凉意。悠真被两人搀扶着，脚步虚浮，脸上还带着未褪的红潮和媚意，引来一些路人不经意的目光，但都被铃音和早川巧妙地挡住或无视。

回到家，已是华灯初上。

岩崎太太已经准备好了清淡的晚餐，对于三人略显狼狈的样子（尤其是悠真）视若无睹，只是默默摆好饭菜就离开了。

悠真几乎没有力气吃东西，被铃音喂了几口粥，就昏昏欲睡。

洗澡是在铃音的帮助下完成的。温热的水流冲刷着疲惫的身体，也带走了电影院和卫生间里疯狂的痕迹，但那种深入骨髓的兴奋和媚态，却似乎洗不掉。

被擦干，换上干净的睡衣，塞进被窝。铃音和早川也各自洗漱。

当铃音搂着悠真躺下时，早川并没有离开，而是坐在床边的椅子上，静静地看着她们。

“明天……”早川忽然开口。

“明天休息。”铃音接口，将悠真往怀里带了带，“小白今天‘功课’做得很好，值得奖励。”

早川点了点头，没再说什么。她又坐了一会儿，才起身离开。

房间里只剩下铃音和悠真。

“睡吧。”铃音吻了吻悠真的额头，“你今天……非常棒。我以你为荣，我的小骚货。”

悠真在她怀里，意识沉入黑暗前，模糊地想：以我为荣……因为我的淫荡，我的媚骨吗？

然后，她放弃了思考，任由自己沉溺在这扭曲的、温暖的“荣耀”之中。

窗外，城市的夜晚依旧喧嚣。
而镜城之中，那面映照出“媚骨天成”的镜子，似乎被打磨得更加光亮，也映照出更加深邃、无法回头的欲望深渊。`,_d=Object.freeze(Object.defineProperty({__proto__:null,default:ud},Symbol.toStringTag,{value:"Module"})),fd=`---
order: 3
---

# #3 白瓷之印

夜风带走了皮肤表面的汗，却吹不散骨髓里那层潮热。

星野悠真被妹妹半扶半抱着走上公寓楼梯时，双腿还在细细地打颤。每上一级台阶，大腿内侧丝袜摩擦着湿黏的肌肤，后穴深处残余的精液随着动作微微晃动，带来一种令人羞耻的满胀感。傍晚的公园、电流、陌生人的搭讪、公共厕所隔间里疯狂的性爱——所有画面在脑海里搅拌成一片混沌的色块，唯一清晰的，是身体各处传来的、过载后的酸痛与空虚。

钥匙插进锁孔的声音格外响亮。门开了一条缝，客厅温暖的灯光和电视新闻的背景音流泻出来。

“我们回来了。”铃音的声音听起来自然得不可思议。

母亲从厨房探出头：“哦，回来啦。悠真这是……怎么了？”她的目光落在悠真身上——假发有些凌乱，女仆装的领口歪斜，白色丝袜破了道口子，整个人软软地靠在妹妹身上。

“哥哥有点中暑。”铃音流畅地回答，扶着悠真往他房间走，“下午太阳太晒了，可能衣服也穿得厚。我带他休息一下。”

“要喝点藿香正气水吗？”

“不用了，休息会儿就好。”

房门在身后关上，隔绝了母亲关切的声音。铃音反手锁门，然后几乎是立刻，悠真顺着门板滑坐到了地上。

他抬起颤抖的手，扯掉了脸上湿透的口罩和假发。白色长发散落一地，露出底下被汗水浸透的黑色短发。铃音蹲下身，捧起他的脸，借着窗外的月光仔细端详。

悠真的脸颊潮红未褪，眼尾还残留着泪痕，睫毛湿成一簇一簇的。嘴唇因为长时间含着口球和后来的激烈接吻而微微红肿，嘴角破了点皮。但最让铃音移不开视线的，是那双眼睛——迷离、失焦，瞳孔深处却还燃着某种未熄的火星。

“哥哥……”铃音轻声唤他，拇指擦过他嘴角的血迹。

悠真没有回应，只是仰起脸，闭上眼睛，将脖颈脆弱的线条完全暴露出来。喉结滚动了一下，发出一声极轻的、像呜咽又像叹息的声音。

铃音的心被狠狠攥紧了。她开始解悠真女仆装背后的系带，动作比在公园时温柔百倍。扣子一颗颗松开，衬衫滑落肩头，露出底下白皙的皮肤。胸口那对被乳夹折磨了一下午的乳头，此刻已经完全红肿，像两颗熟透的樱桃，顶端还残留着清晰的齿痕和夹痕。

裙子被褪下，丝袜被小心地卷着褪去——在脚踝处卡了一下，因为悠真的脚趾无意识地蜷缩着。

当最后一层布料离开身体，悠真赤身裸体地坐在冰凉的地板上时，铃音才完整地看到这场“游戏”留下的痕迹。

大腿内侧的丝袜勒痕清晰可见，皮肤上还沾着干涸的精液与肠液混合的浊渍。小腹处因为多次射精和 harness 的压迫，泛起一片红痕。后穴微微红肿，一时无法完全闭合，能看到一点白色的粘稠液体正缓缓渗出。而最触目惊心的，是郊狼贴片留下的痕迹——大腿根部的皮肤上，有两块明显的、火柴盒大小的红斑，那是高强度电流反复刺激后的印记。

悠真自己也低头看了看，然后慢慢曲起腿，把脸埋进膝盖间。

“很……脏。”他的声音闷闷的，带着事后的沙哑和一丝颤抖。

“不脏。”铃音立刻说。她起身去浴室拿来温热的湿毛巾，重新跪在悠真面前，“一点都不脏。”

她开始给悠真擦拭身体，从脸颊开始，到脖颈、锁骨、胸口……动作轻柔得像对待易碎的瓷器。温热的毛巾拂过红肿的乳头时，悠真敏感地瑟缩了一下，但没躲开。

擦到大腿内侧时，铃音顿了顿。那里的痕迹最重，混合着各种体液，已经有些干了，擦起来需要用力些。

“疼吗？”她问。

悠真摇头，又点头，最后小声说：“……痒。”

不是疼痛，而是一种更深层的、从被过度使用的器官内部传来的空虚的痒。想要被填满，想要被摩擦，想要再次被送上那种失控的高潮——即使身体明明已经累得连手指都抬不起来了。

铃音听懂了。她继续擦拭的动作，直到悠真身上所有的污渍都被清理干净，皮肤重新露出原本白皙的底色——当然，那些红痕和印记一时半会儿消不掉。

然后，她的目光落在了悠真的脚上。

浴室门口的夜灯光线昏暗，但足够看清那双脚的模样。

悠真的脚型偏瘦长，但骨架纤细，脚踝尤其精致，像一截易折的玉雕。脚背的皮肤薄得能看见底下淡青色的血管，足弓曲线优美。十根脚趾修长匀称，指甲修剪得整齐干净，透着健康的淡粉色。因为刚才一直蜷缩着，此刻放松下来，脚趾微微分开，脚掌心泛着运动后的潮红。

这是铃音第一次这么仔细地看哥哥的脚。在公园时太匆忙，在家时也总是穿着袜子。现在赤裸地呈现在眼前，竟有种惊心动魄的美感。

她不由自主地伸出手，握住了悠真的脚踝。

皮肤微凉，细腻得像上好的丝绸。铃音的拇指无意识地摩挲着那突出的踝骨，感受到掌心里细微的脉搏跳动。

悠真抬起头，有些困惑地看着她。

“哥哥的脚……”铃音的声音有些干涩，“很漂亮。”

悠真眨了眨眼，似乎没理解这句话的意思。但下一秒，当铃音低头，将嘴唇印在他脚背上时，他浑身一颤，脚趾猛地蜷起。

“铃音……？”

那是一个很轻的吻，不带情色意味，更像是一种确认和标记。但温热的唇瓣接触冰凉皮肤的触感，却激起了奇异的反应。

铃音抬起头，眼神暗了下来。她握着悠真的脚踝，将那只脚抬得更高，然后张开嘴，将大脚趾含了进去。

“啊……！”悠真倒抽一口气。

湿热的口腔包裹住脚趾的瞬间，一种从未体验过的、混杂着羞耻和快感的电流窜过脊椎。脚趾并非性感带，但此刻被妹妹含在嘴里，用舌头舔舐、用牙齿轻轻啃咬的感觉，却带来了远超预期的刺激。

尤其，当铃音的舌尖滑过趾缝时——

“嗯……别……”悠真想抽回脚，却被铃音握得更紧。

铃音含完一根脚趾，又换下一根。她像个虔诚的信徒，用唇舌细致地膜拜着哥哥的每一寸足部肌肤。从脚背到脚心，从脚跟到脚尖。唾液在皮肤上留下湿润的水光，在昏暗光线里反射着暧昧的光泽。

悠真仰起头，靠在门板上，呼吸渐渐急促起来。他感觉自己又要硬了——这很荒谬，明明已经射了那么多次，身体却还是对妹妹的触碰给出了诚实的反应。

更糟糕的是，当铃音的舌尖划过他足心最敏感的部位时，一股强烈的尿意混合着某种更深层的冲动，猛地冲了上来。

“等等……铃音……要……”他语无伦次地挣扎起来。

铃音松开口，抬起头：“要什么？”

悠真涨红了脸，说不出口。但身体的需求压倒了一切，他夹紧腿，声音里带了哭腔：“……想去厕所。”

铃音愣了一下，随即明白了。她扶着悠真站起来，但悠真的腿还是软的，根本站不稳。铃音索性一把将他横抱起来——这个动作让她自己也踉跄了一下，但勉强稳住了。

她把悠真抱进房间自带的卫生间，放在马桶上。悠真坐下时，后穴残余的精液又流出来一些，弄湿了冰凉的瓷面。他羞耻得恨不得把自己埋起来，但铃音没有离开，而是蹲在他面前，看着他。

“哥哥自己可以吗？”她问。

悠真摇头。不是不可以，而是……他不想一个人待着。这种时候，他需要铃音在身边，需要确认这一切不是疯狂的梦境。

铃音于是没有走。她伸手，轻轻梳理悠真汗湿的额发，等待。

小便的过程因为身体的疲惫和紧张而断断续续。结束后，悠真甚至没力气自己擦。铃音自然地接过纸巾，替他清理干净，然后再次抱起他，回到房间。

这次，她把悠真放到了床上。

柔软的床垫接纳了疲惫的身体，悠真发出一声满足的叹息。他侧过身，本能地蜷缩起来，像婴儿在子宫里的姿势。这个动作让他后背的脊椎线条和臀部的曲线暴露无遗，在月光下泛着珍珠般细腻的光泽。

铃音站在床边看了他一会儿，然后转身去了浴室。很快，她拿着一个小巧的玻璃瓶回来了。

“哥哥，翻过来，趴着。”她轻声说。

悠真迷迷糊糊地照做。冰凉的液体倒在背上的瞬间，他惊得抖了一下，但很快意识到那是按摩油。铃音的手掌覆了上来，开始给他按摩紧绷的肩背肌肉。

力道适中，手法生涩但认真。精油的香气在空气中散开，是薰衣草混合着柑橘的味道，有安抚神经的作用。悠真渐渐放松下来，喉咙里发出小猫似的咕噜声。

“今天……”铃音的声音从上方传来，“我做得太过分了。对不起，哥哥。”

悠真没有睁眼，只是摇了摇头。过了一会儿，他才小声说：“……是我自己答应的。”

“但我不该把郊狼开那么大，也不该在那种时候……”铃音的手顿了顿，“哥哥那时候哭了。我看到了。”

悠真沉默了很久。久到铃音以为他睡着了，他才开口，声音很轻：“……不是难过才哭的。”

“那是？”

“是……太舒服了。”悠真把脸埋进枕头，耳根通红，“舒服到……觉得害怕。怕自己会真的坏掉，会永远都回不去了。”

铃音的按摩停下了。她俯下身，从背后抱住了悠真，脸埋在他肩胛骨之间。

“那哥哥……想回去吗？”她问，声音闷闷的，“回到以前那种……装作什么都不知道，什么都没有发生的生活？”

悠真没有立刻回答。他感受着背后妹妹温热的体温，感受着她手臂环抱自己的力度，感受着两人皮肤相贴时传来的、令人安心的触感。

然后，他翻过身，面对铃音，在昏暗的光线里注视着她的眼睛。

“回不去了。”他说，语气平静得像在陈述一个事实，“从你推开我房门的那天起，就回不去了。”

铃音的眼泪毫无预兆地掉了下来，滴在悠真的胸口。

悠真抬手，擦去她的眼泪：“所以，不要说对不起。我们……是一样的。”

这句话像一句咒语，解开了某种无形的枷锁。铃音抽了抽鼻子，突然笑了：“那哥哥现在……还痒吗？”

悠真的脸又红了。他别开视线，点了点头。

“哪里痒？”

“……后面。”

铃音的手滑了下去，指尖轻轻碰了碰那个还在微微张合的小口。只是这样一个轻微的触碰，就让悠真浑身一颤，前端又有了抬头的趋势。

“想要吗？”铃音问，声音低哑。

悠真咬着嘴唇，点了点头，又摇摇头：“……但是累了。”

“不做。”铃音说。她起身，从床头柜的抽屉里拿出一个小盒子，打开——里面是几个尺寸、形状各异的肛塞，最小的只有手指粗细，最大的比她的阴茎还要粗。“用这个，好不好？让哥哥含着睡觉。”

悠真的眼睛瞪大了。他看着那些玩具，又看看铃音，最后小声说：“……要小的。”

铃音挑了一个最小的，粉色硅胶材质，顶端圆润，带着细微的颗粒凸起。她挤了大量的润滑剂，然后扶着悠真的腿，慢慢将肛塞推了进去。

“唔……”悠真抓紧了床单。

小号的肛塞几乎没有扩张感，但存在感鲜明。它恰好抵在前列腺的位置，随着呼吸和身体细微的动作，那些颗粒会带来持续的、细微的刺激。

“这样就不空了。”铃音说，吻了吻悠真的额头，“睡吧，哥哥。”

她关掉夜灯，在悠真身边躺下，从背后抱住他。两人的身体严丝合缝地贴在一起，像两片终于找到彼此的拼图。

悠真在黑暗中睁着眼睛。体内的异物感很新奇，但并不难受。相反，那种被填满的感觉带来了心理上的安定。他听着身后妹妹均匀的呼吸声，感受着她手臂环抱自己的力度，慢慢闭上了眼睛。

那天晚上，他做了一个梦。

梦里，他赤身裸体地站在一片纯白的空间里，脚下是冰凉光滑的瓷砖。铃音也在，穿着纯黑色的长裙，手里拿着一支笔。

“哥哥，要留下印记哦。”她说，然后蹲下身，用笔在他的脚背上写字。

笔尖划过皮肤的触感很真实，有点痒，有点凉。悠真低头看去，看到自己的脚背上出现了黑色的字迹——不是日语，也不是任何他认识的语言，而是一种扭曲优美的、像符文般的图案。

铃音写得很认真，从脚背写到脚心，从左脚写到右脚。写完后，她抬起头，对悠真笑了。

“这样，哥哥就是我的了。”

悠真想说什么，但张开嘴，却发不出声音。然后，脚下的瓷砖突然变成了水面，他沉了下去——

“唔！”

悠真猛地睁开眼睛。

晨光透过窗帘的缝隙，在地板上投下金色的线条。他躺在床上，浑身是汗，心脏跳得很快。梦里的画面还很清晰，尤其是脚背上那些黑色符文的触感。

他低头看去。

脚背当然什么都没有。皮肤白皙光滑，只有昨晚被铃音吻过、舔过的地方，似乎还残留着一点微红的痕迹。

他动了动腿，然后僵住了。

后穴里的肛塞还在。一夜过去，润滑剂已经吸收得差不多了，肛塞和肠壁的摩擦变得更加直接。只是这样一个轻微的动作，就带来了清晰的刺激。

更要命的是，他硬了。

晨勃加上异物刺激，让那根小巧的性器精神抖擞地挺立着，顶端渗出湿意。

悠真羞耻地夹紧腿，想悄悄把肛塞弄出来。但他的手刚伸到身后，就被另一只手握住了。

“哥哥醒了？”铃音的声音带着刚睡醒的沙哑，从背后传来。她贴得更紧了些，晨勃的坚硬抵在悠真的臀缝间。

“嗯……”悠真小声应道，不敢动。

铃音的手顺着他小腹滑下去，握住了那根湿漉漉的性器。

“一大早就这么精神啊。”她低笑着，开始缓慢地套弄。

“呜……别……”悠真想躲，但身体却诚实地往前挺，将更多部分送入妹妹手中。肛塞的存在让前列腺的刺激加倍，只是简单的套弄，快感就迅速累积。

铃音另一只手绕到他身后，捏住了肛塞的底端，开始缓缓地旋转、抽插。

“啊……！慢、慢点……”悠真立刻软了腰，前端吐出更多清液。

肛塞的颗粒随着旋转摩擦着肠壁，每一次抽动都精准地刮过敏感点。铃音的手法很慢，但每一下都又深又重，刻意拉长快感累积的过程。

悠真仰起头，大口喘息，手无助地抓住床单。晨光里，他的身体绷成一道优美的弧线，脖颈拉长，胸口的两点红肿在光线里格外显眼。那双赤裸的脚也不自觉地蜷缩、伸展，脚趾难耐地抓着床单。

铃音看着这一切，呼吸也乱了。她加快了手上的动作，肛塞抽插的速度越来越快，另一只手也加快了套弄的频率。

“要……要去了……”悠真哑着声音说，腰肢开始失控地挺动。

但铃音突然停下了。

“还不行哦，哥哥。”她抽出肛塞，也松开了握着他性器的手。

骤然失去刺激，悠真发出一声失落的呜咽，前端可怜地抖了抖，渗出更多液体。高潮被生生打断的痛苦，让他眼眶瞬间红了。

铃音坐起身，把他也拉起来：“去洗澡。然后……”她凑到他耳边，声音带着恶劣的笑意，“今天有新的游戏。”

悠真茫然地看着她：“……什么游戏？”

“秘密。”铃音眨眨眼，“哥哥先去洗澡。记得……后面要洗干净哦。”

她推着还没完全清醒的悠真进了浴室，关上门，然后开始翻找衣柜。

新的游戏。她昨晚几乎没睡，脑子里转着各种念头。公园的露出很刺激，但太危险，不能经常做。她想要更私密、更深刻、更能将哥哥打上自己印记的方式。

然后，她看到了那套衣服。

纯白色的、连裤的丝袜。不是过膝袜，而是从脚尖一直包裹到大腿根的款式。还有配套的白色蕾丝内裤，以及一件白色的、半透明的衬衣。

她想象着哥哥穿上这套衣服的样子——纯白的丝袜裹住那双漂亮的脚，蕾丝内裤勒在腿根，半透明的衬衣下，胸口的红肿若隐若现……

光是想象，她就硬得发痛。

浴室里传来水声。铃音深吸一口气，把衣服放在床上，然后去厨房准备早餐。母亲已经出门了，桌上留着便条说今天有同学聚会，晚上才回来。

完美。

悠真从浴室出来时，身上只裹着浴巾，头发还在滴水。他看到床上的衣服，愣了一下。

“穿上。”铃音把牛奶放在桌上，命令道。

悠真看了看那套纯白的衣物，又看了看铃音，耳根慢慢红了。但他没有反抗，只是背过身，解开了浴巾。

浴巾滑落，露出还泛着水光的身体。后背的线条在晨光里像精心打磨的大理石雕塑，腰窝深陷，臀部挺翘。水珠顺着脊椎滑下，没入股缝。

铃音强迫自己移开视线，低头喝牛奶，但余光还是不受控制地瞟过去。

悠真先穿上了那条白色的蕾丝内裤。布料很薄，几乎是透明的，穿上后根本遮不住什么，反而让臀部的形状更加清晰。然后是连裤丝袜——他坐在床边，小心地将丝袜卷起，然后一点点往上拉。

这个动作很慢，很细致。丝袜掠过脚背，包裹住脚踝，顺着小腿曲线向上，最后拉到大腿根，与内裤边缘重叠。纯白的丝袜将他双腿的线条勾勒得淋漓尽致，尤其是那双脚——丝袜的材质很薄，能清晰地看到底下皮肤的色泽和血管的纹路，却又蒙上了一层朦胧的光泽，像上了釉的白瓷。

最后是那件半透明的白衬衣。悠真扣上扣子，但最上面两颗没扣，露出锁骨和胸口的部分肌肤。衬衣下摆刚好遮住臀部，从后面看，能隐约看到白色蕾丝内裤的边缘和丝袜勒出的痕迹。

他站在镜子前，看着里面的自己，整个人僵住了。

镜中的“少女”全身纯白，像一场未落地的雪。丝袜包裹的双腿笔直修长，衬衣下的身体若隐若现，湿漉漉的黑发贴在额角，眼神慌乱又羞耻。

“……一定要这样吗？”悠真小声问。

铃音走到他身后，从镜子里看着他：“嗯。今天一整天，哥哥都要穿着这个。”

“一整天？”悠真瞪大了眼睛，“可是……妈妈晚上才回来，但白天……”

“白天我们就在家里。”铃音说，手从后面环住悠真的腰，下巴搁在他肩上，“今天不出门。就在家里……玩。”

悠真感到妹妹硬挺的性器抵在自己臀缝间，脸颊瞬间烧了起来。他想躲，但铃音的手臂像铁箍一样圈着他。

“先吃早餐。”铃音松开了他，牵着他的手走到餐桌边。

坐下时，丝袜包裹的臀部接触冰凉的椅面，让悠真瑟缩了一下。更糟糕的是，蕾丝内裤的布料很薄，他能清晰地感觉到每一处褶皱和摩擦。

早餐是简单的吐司、煎蛋和牛奶。悠真小口吃着，尽量不发出声音。但铃音的视线一直落在他身上，像有实质的重量，压得他抬不起头。

“哥哥。”铃音突然开口。

悠真抬起头。

“把脚抬起来，放在我腿上。”

悠真愣住了：“……什么？”

“脚。”铃音重复道，拍了拍自己的大腿，“放上来。”

悠真看了看自己丝袜包裹的脚，又看了看铃音，最后还是慢慢抬起右脚，轻轻放在了妹妹腿上。

丝袜的触感顺滑微凉。铃音的手立刻覆了上去，从脚踝开始，慢慢向上抚摸。

“哥哥的脚，真的很好看。”她低声说，拇指按在足心的位置，轻轻打圈。

“嗯……”悠真敏感地缩了缩脚趾，但脚被铃音握住了，动弹不得。

铃音的手很热，隔着薄薄的丝袜，热度几乎要烫伤皮肤。她的抚摸从足心蔓延到脚背，再到每一根脚趾。她甚至低下头，隔着丝袜，用嘴唇碰了碰悠真的脚背。

湿热的气息透过丝袜传来，悠真浑身一颤，手里的叉子差点掉下去。

“铃音……别……”他小声抗议，但声音软得没有一点说服力。

铃音抬起头，对他笑了笑，然后继续吃自己的早餐，但手一直没有离开悠真的脚。她一边吃，一边无意识地揉捏、抚摸着那只被丝袜包裹的脚，像在把玩一件心爱的玩具。

悠真整顿饭都吃得心不在焉。脚上传来的触感太清晰了，每一次揉捏，每一次按压，都像直接刺激着他的神经。更糟糕的是，他发现自己又硬了——薄薄的蕾丝内裤根本遮不住勃起的形状，前端顶起一个小帐篷，还渗出一点湿痕，将白色的布料染成半透明。

铃音显然也看到了。她的眼神暗了暗，手上的动作更重了些。

好不容易吃完早餐，铃音收拾了碗筷，然后拉着悠真在沙发上坐下。

“今天玩什么，哥哥猜到了吗？”她问。

悠真摇头，手指无意识地揪着衬衣下摆。

“是‘忍耐游戏’哦。”铃音拿出手机，点开一个APP——不是郊狼的，而是另一个陌生的界面，上面有一个大大的红色按钮，和一个进度条。“我会用各种方式让哥哥舒服，但是呢……”她点了点那个红色按钮，“哥哥不能射。一旦射了，就要接受惩罚。”

悠真的脸白了：“惩、惩罚是什么？”

“秘密。”铃音凑近，鼻尖几乎碰到他的，“但哥哥要是能一直忍住不射的话……我会给哥哥奖励。”

“什么奖励？”

“也是秘密。”铃音笑了，眼睛里闪着恶作剧的光，“那么，游戏开始。”

她放下手机，双手捧住悠真的脸，吻了上去。

这是一个温柔的吻，不带任何侵略性，只是唇瓣相贴，轻轻摩挲。悠真一开始很紧张，但慢慢地，他放松下来，甚至主动张开嘴，让铃音的舌头滑了进来。

接吻的声音在安静的客厅里很清晰。水声，喘息声，还有衣服摩擦的窸窣声。铃音的手从悠真的脸颊滑到脖颈，再往下，解开了衬衣最上面的两颗扣子。

胸口暴露在空气中，两点红肿的乳头立刻挺立起来。铃音的指尖轻轻碰了碰其中一边。

“啊……”悠真敏感地向后缩，但被铃音按住了。

“不准躲。”她低声说，然后低下头，含住了那颗乳头。

“嗯！”悠真仰起头，手指插进了铃音的发间。

隔着衬衣薄薄的布料，铃音的舌头的触感更加清晰。她先是用舌尖拨弄乳尖，然后用牙齿轻轻啃咬，最后是用力地吮吸。另一边也没被冷落，她的手指捏住另一颗乳头，揉搓、拉扯，模仿着口交的动作。

乳夹留下的红肿还没完全消退，此刻又被这样对待，快感里混杂着刺痛，让悠真浑身发抖。他的前端已经完全硬了，在内裤里胀痛地跳动着。

但他记得规则——不能射。所以他拼命压抑着快感，咬住下唇，不让呻吟漏出来太多。

铃音察觉到他的忍耐，松开了他的乳头，抬起头看他。悠真的脸颊潮红，眼神迷离，嘴唇被咬得发白，胸口的两点湿漉漉的，在晨光里闪着水光。

“这才刚开始呢，哥哥。”铃音说着，手滑了下去，隔着蕾丝内裤，握住了那根硬挺的性器。

“呜！”悠真猛地夹紧腿，但铃音的手已经钻了进去，直接握住了赤裸的柱身。

“好硬……”她低声感叹，开始缓慢地套弄。手法很温柔，但每一下都从根部撸到顶端，拇指重重刮过铃口。

悠真的呼吸立刻乱了。他抓住铃音的手腕，想阻止，但力气太小，根本拉不动。

“不要……会射的……”他喘息着说。

“那就射啊。”铃音贴着他的耳朵呵气，“射了，就能知道惩罚是什么了哦。”

悠真摇头，拼命摇头。他不知道惩罚是什么，但直觉告诉他，那一定很可怕。他不能射，绝对不能。

他闭上眼睛，开始默背数学公式，试图分散注意力。但身体的感觉太强烈了，铃音的手很热，套弄的速度不快，但每一次摩擦都精准地刺激着最敏感的部位。更糟糕的是，她的拇指一直按在铃口上，那里已经湿得一塌糊涂，不断渗出清液，让套弄变得更加顺滑。

快感像潮水，一波波累积。悠真感觉自己快要到临界点了，腰肢开始不受控制地向上挺动，迎合着妹妹的手。

就在他以为自己要忍不住的时候，铃音突然停下了。

悠真茫然地睁开眼睛，看到铃音抽出了手，拿起了手机。

“差点忘了。”她点开那个APP，按下了红色按钮。

“滋……”

轻微的电流声，从……从后面传来。

悠真猛地瞪大眼睛。他这才意识到，不知什么时候，铃音把一个东西塞进了他后穴——不是肛塞，而是一个更小的、带着电流刺激的玩具。

“郊狼的配套玩具。”铃音解释道，手指在屏幕上滑动，“可以单独控制哦。现在……是一级强度。”

电流很微弱，像细小的针在轻轻扎刺前列腺。但这种刺激和前面套弄的快感叠加在一起，效果是致命的。

“啊……啊……”悠真仰起头，脖颈绷紧，前端又吐出一股清液。他快要不行了，真的快要……

铃音又按了一下按钮。

电流强度增加。这一次是清晰的酥麻感，从尾椎骨窜上来，让悠真浑身发麻。

“二级。”铃音说着，重新握住了他的性器，开始套弄。

双重刺激下，悠真的理智迅速溃散。他抓住沙发扶手，指甲几乎要抠进布料里。呻吟声再也压抑不住，断断续续地漏出来。

“铃音……不行了……真的……”

“还不行哦。”铃音加快了套弄的速度，另一只手也没闲着，揉捏着他的囊袋，“哥哥再坚持一下。”

电流到了三级。

“嗯啊啊——！”悠真尖叫着，腰肢剧烈颤抖，前端跳动，一股白浊猛地喷射出来——但只射出了一小股，就被铃音用手指紧紧捏住了根部，强行中断。

射精不全的痛苦让悠真眼前发黑，眼泪瞬间涌了出来。他大口喘息，身体还在高潮的余韵中痉挛，但快感被硬生生截断的感觉，比单纯的高潮要痛苦百倍。

“哎呀。”铃音松开手，看着指尖沾到的少量精液，“哥哥射了呢。虽然只有一点点……但算哦。”

悠真瘫在沙发上，像一条脱水的鱼，连哭的力气都没有了。他刚才真的以为要彻底高潮了，那种濒临绝顶的感觉太强烈，他根本控制不住。

铃音抽了张纸巾擦手，然后俯身，吻了吻悠真的额头。

“那么，惩罚时间。”

她拉起悠真，带着他回到房间，让他跪在床边。

“手背到后面。”铃音命令道。

悠真照做。铃音用早就准备好的丝巾捆住了他的手腕，打了个活结，不会太紧，但足够让他无法挣脱。

然后，她让悠真趴在床上，脸埋在枕头里，臀部高高翘起。

这个姿势让悠真羞耻得浑身发抖。他能感觉到丝袜包裹的腿完全暴露，后穴的那个小玩具还在发出轻微的电流。更重要的是，他知道惩罚要来了，却不知道具体是什么。

脚步声，抽屉拉开的声音，然后是某种金属碰撞的轻微响声。

悠真紧张地等待着。

冰凉的触感，贴在了他的右脚脚心上。

悠真浑身一僵。他看不见那是什么，但触感很明确——是金属，而且……是环状的。

“叮”的一声轻响，像扣子扣上的声音。然后，同样的触感和声音，出现在左脚脚心。

脚铐？

“哥哥知道这是什么吗？”铃音的声音从脚的方向传来。

悠真摇头，脸还埋在枕头里。

“是脚环。”铃音说，手指拂过他脚踝处的丝袜，“纯银的，我昨天买的。上面刻了字哦。”

刻字？

悠真还没反应过来，就感觉到铃音的手握住了他的右脚脚踝，然后，一个湿润温热的东西，贴在了脚环内侧的皮肤上。

是舌头。

铃音在舔他脚环内侧的皮肤，那里……刻了字？

“左边刻的是‘铃音’。”铃音一边舔，一边说，“右边刻的是‘所有物’。”

悠真的大脑空白了几秒。所有物？铃音的所有物？

“从今天起，哥哥只要看到这个脚环，就要记住。”铃音的声音很轻，但每个字都像烙印一样烫进悠真心里，“你是我的。从身体到心，每一寸都是。”

她的舌头从脚环内侧移开，顺着脚心往上舔，隔着丝袜，用牙齿轻轻啃咬脚后跟的嫩肉。

“惩罚呢，就是这个。”铃音说，“我要给哥哥的脚……做一个‘彻底清洁’。”

彻底清洁？

下一秒，悠真就知道了那是什么意思。

温热的水流，冲在了他的双脚上。不是淋浴，而是更细、更集中的水流，像某种专业的清洗工具。水流冲走了脚上的灰尘和汗渍，然后，铃音的手重新覆了上来，这一次，她挤了大量的沐浴露。

泡沫在脚上堆积，铃音的手像最专业的按摩师，从脚趾缝开始，一点一点地清洗、揉搓、按摩。她的手法极其细致，每一个脚趾的关节，每一处脚心的褶皱，都不放过。

悠真一开始还因为羞耻而紧绷，但慢慢地，他放松下来。脚部的按摩很舒服，尤其是铃音的力道掌握得很好，既不会痒，也不会痛。温水和泡沫包裹着双脚，丝袜早已被浸湿，紧贴着皮肤，让触感变得更加清晰。

但很快，悠真意识到这不仅仅是清洗。

铃音的手指，开始刻意按压他脚部的某些穴位——脚心中央，脚跟内侧，大脚趾下方……这些地方按下去时，会带来奇异的酸胀感，那种感觉……会顺着腿一直往上窜，直冲小腹和后穴。

“啊……那里……”悠真忍不住呻吟出声。

“这里吗？”铃音用力按压他左脚脚心的一个点。

一股强烈的快感猛地窜上来，悠真前端又硬了几分，后穴的那个小玩具似乎也被刺激到，电流感更清晰了。

“原来哥哥的脚，有这么多敏感的地方啊。”铃音低声说，开始有规律地按压、揉捏那些穴位。

酸、胀、麻、痒……各种感觉混合在一起，伴随着电流的刺激，快感以完全不同的路径在身体里累积。悠真发现自己无法控制身体的反应——腰肢在抖，前端在不断渗出液体，后穴一阵阵收缩，绞紧了那个小玩具。

更可怕的是，这种快感是缓慢的、持续的、无法通过射精来释放的。它像温水煮青蛙，一点点累积，直到把人逼疯。

铃音的“清洗”还在继续。她冲掉了泡沫，换成了按摩油。油滑的液体包裹住双脚，她的手掌贴合着悠真的脚底，开始缓慢而用力地推压。

从脚跟到脚心，从脚心到脚趾。每一寸肌肉都被揉开，每一根筋络都被拉伸。舒服，太舒服了，舒服到悠真开始小声哭泣。

“呜……铃音……够了……真的……”

“还不够哦。”铃音说。她低下头，开始用舌头舔舐悠真脚上的按摩油。从脚背开始，沿着血管的纹路，一点一点往上舔。唾液和按摩油混合，在皮肤上铺开湿滑的水光。

舔到脚心时，悠真猛地弓起背，发出一声尖锐的呻吟。

太敏感了。那个部位被舌头反复舔舐的感觉，几乎要让他崩溃。快感已经累积到了一个可怕的程度，他感觉自己随时都会失禁——不是射精，而是更丢人的那种。

“想尿？”铃音察觉到了他的颤抖，停下了动作。

悠真拼命点头，眼泪流进枕头里。

铃音解开了他手腕上的丝巾，扶着他去了卫生间。这一次，悠真连坐都坐不稳，是铃音抱着他，像对待小孩一样帮他完成了排尿。

释放之后，身体的紧绷感缓解了一些，但快感并没有消失，只是暂时退潮。悠真知道，它还会卷土重来。

果然，回到床上后，铃音让他恢复了之前的姿势，然后，拿出了新的东西。

一根羽毛。

白色的，柔软的，不知道是从什么鸟身上取下来的。铃音用羽毛的尖端，轻轻扫过悠真丝袜包裹的脚心。

“啊！”悠真剧烈地颤抖起来。

羽毛带来的痒感，和之前的按摩、舔舐完全不同。它更轻，更飘忽，更难以捉摸。每一次扫过，都像有一百只蚂蚁在脚心爬，痒得钻心，却又带着奇异的快感。

悠真开始挣扎，但脚被铐在床脚的栏杆上，动弹不得。他只能无助地扭动腰肢，发出破碎的哭叫。

“痒……好痒……铃音……求你了……”

铃音没有停。她用羽毛细致地“照顾”了悠真的双脚——脚背、脚心、脚跟、脚趾缝……每一处都不放过。然后，她换成了更细的毛刷，然后是柔软的布料，最后……是她的头发。

她低下头，让自己的发梢轻轻扫过悠真的脚底。

“嗯啊啊啊——！！！”悠真尖叫起来，腰肢猛地向上弹起，前端射出一股透明的液体——不是精液，而是纯粹的前列腺液。他达到了一个奇怪的高潮，没有射精，但快感同样强烈，强烈到他眼前发白，几乎晕过去。

铃音终于停下了。她解开脚铐，将虚脱的悠真抱进怀里，轻轻拍着他的背。

“结束了，哥哥。惩罚结束了。”

悠真靠在她怀里，还在细微地抽搐，眼泪流个不停。太可怕了，那种被缓慢折磨到崩溃的感觉，比直接的高潮要可怕一百倍。

但与此同时，心底深处，某个黑暗的角落，却有一簇火苗被点燃了。

他喜欢。

喜欢这种被完全控制、被细致玩弄、被逼到极限的感觉。喜欢妹妹对他身体的了解和掌控。喜欢成为“铃音的所有物”。

这个认知让他更加羞耻，却也更加兴奋。

铃音抱着他，直到他的颤抖慢慢平息。然后，她吻了吻他的额头。

“奖励。”她说，“哥哥虽然没忍住射了，但坚持了很久哦。所以，还是给奖励。”

悠真抬起湿漉漉的眼睛看着她。

铃音从抽屉里拿出一个小盒子，打开——里面是一对耳钉。小巧的银色耳钉，设计成铃铛的形状，非常精致。

“我昨天一起买的。”铃音说，“给哥哥戴上，好不好？”

悠真摸了摸自己的耳垂——他没有耳洞。

“现在打吗？”他小声问。

“嗯。”铃音拿出一次性的穿耳器，“会有点痛，但是……我想看哥哥戴着它。”

悠真看着那对铃铛耳钉，又看看铃音期待的眼神，最后点了点头。

消毒，定位，然后——

轻微的刺痛，左耳耳垂被穿透。很快，右耳也是。

铃音小心地戴上耳钉，然后退后一步，看着悠真。

黑色的短发，潮红的脸颊，湿润的眼睛，还有耳垂上那一对随着动作轻轻晃动的银色铃铛。纯白的丝袜和衬衣，凌乱地贴在身上，胸口两点红肿，腿间一片狼藉。

美得惊心动魄。

铃音拿起手机，拍下了这张照片。

“哥哥。”她轻声说，“你真漂亮。”

悠真低下头，手指无意识地摸了摸耳垂上的铃铛。金属微凉，随着他的动作发出极其细微的、几乎听不见的叮当声。

然后，他抬起手，抱住了铃音。

“铃音。”他把脸埋在妹妹肩窝，声音闷闷的，“……谢谢。”

谢谢你接受这样的我。

谢谢你想要这样的我。

谢谢你……让我成为你的。

铃音抱紧了他，没有说话。但悠真能感觉到，妹妹的身体在微微颤抖。

窗外，阳光正烈。而房间里，两个互相依偎的身影，在满室的阳光里，安静地拥抱着。

今天还很漫长。

但他们有的是时间，慢慢探索彼此身体的每一寸领土，慢慢刻下更深的印记。

这是只属于他们的、疯狂又甜蜜的游戏。

而游戏，才刚刚开始。`,md=Object.freeze(Object.defineProperty({__proto__:null,default:fd},Symbol.toStringTag,{value:"Module"})),hd=`---
order: 4
---

# #4 长发的白瓷铃铛

春天转成夏天，像雨水渗入土壤般无声无息。

对于星野悠真来说，时间的计量单位不再是日历上翻过的数字，而是头发一寸寸变长的速度，耳垂上铃铛耳钉渐渐习惯的重量，以及脚踝处那对银环在皮肤上留下的、几乎看不见却永远存在的印记。

三个月了。

距离那个颠覆性的午后，已经过去了整整三个月。

悠真坐在教室靠窗的位置，手指无意识地卷着一缕垂到肩头的黑发。发尾已经能轻松绕在食指上两圈半，柔软顺滑，带着刚洗过的茉莉花香——那是铃音挑的洗发水，她说这个味道适合哥哥。

窗外的蝉鸣一声高过一声，把六月的午后熬煮成粘稠的金色糖浆。数学老师在讲台上讲解三角函数，粉笔划过黑板的声音单调乏味。悠真试图集中注意力，但身体里某个地方传来的、熟悉的空虚感，像潮水般一点点漫上来。

痒。

不是皮肤表面的痒，而是更深处的、从骨髓里渗出来的、带着湿气的痒。它盘踞在小腹深处，在后穴空荡荡的甬道里，在前列腺那个早已被开发得过分敏感的点上。像有无数只蚂蚁在血管里爬行，用细小的脚爪搔刮着神经末梢。

悠真夹紧双腿，放在课桌下的手悄悄握成了拳。指甲陷进掌心，留下月牙形的红痕，试图用疼痛来转移注意力。

但没什么用。

那股痒意已经变成了明确的渴望。渴望被填满，渴望被摩擦，渴望被送上那种能将理智彻底碾碎的高潮。他的身体记得铃音手指的温度，记得震动棒的频率，记得郊狼电流窜过的酥麻，记得被进入时那种撕裂般的满足感。

更糟糕的是，他发现自己在想象。

想象此刻，就在这间教室里，在四十多个同学和老师的眼皮底下，铃音悄悄钻到他的课桌下，拉开他裤子的拉链，用嘴含住他硬得发痛的前端。想象她一边吞吐，一边抬起眼睛看他，眼神湿漉漉的，像在说“哥哥要忍住哦”。

或者，想象他自己跪在教室后面的储物柜前，裙子（他现在已经习惯在家里穿裙子了）被撩起来，后穴含着一根跳蛋，而铃音站在他身后，用穿着白袜的脚，一下一下踩着他的臀部，像在惩罚不听话的小狗。

“星野同学？”

老师的点名像一盆冰水浇下来。悠真猛地回过神，发现自己已经站了起来，全班同学的目光都集中在他身上。

“这题的答案是什么？”数学老师推了推眼镜，指着黑板上的一道题。

悠真盯着那些数字和符号，大脑一片空白。他刚才一个字都没听进去，满脑子都是不堪入目的幻想。脸颊开始发烫，他能感觉到汗水从额角滑下来，沿着脖颈流进衬衫领口。

“……对不起，我不知道。”他小声说，低下头。

教室里响起几声压抑的嗤笑。悠真咬住嘴唇，手指揪着校服裤子的布料。坐下时，他能清晰地感觉到前端在内裤里硬邦邦地杵着，顶端渗出的一小片湿迹已经透过了内裤和校裤两层布料，带来冰凉的触感。

下课铃终于响了。悠真几乎是逃也似的冲出了教室，直奔教学楼最西侧的男厕所——那里通常人最少。

他冲进隔间，反锁上门，背靠着冰凉的门板大口喘气。手颤抖着拉开裤链，里面白色的三角内裤已经被前液浸湿了一小块，深色的痕迹在浅色布料上格外显眼。

悠真闭上眼睛，手伸了进去。

不行。

铃音说过，在学校里不可以。绝对不可以自己解决。要忍着，等回家，等她来“处理”。

可是太难受了。那股渴望像毒蛇一样缠着他的内脏，越收越紧。他能感觉到后穴在一阵阵收缩，空虚得发疼。乳头也因为衬衫布料的摩擦而挺立起来，顶着校服的白衬衫，隐约能看到两个小点。

悠真咬住自己的手腕，用疼痛对抗欲望。牙齿陷进皮肤，留下深深的齿痕，但快感还是从身体深处源源不断地涌上来。他想起早上出门前，铃音给他后穴里塞的那个最小号的肛塞——她说“让哥哥在学校也能想着我”。现在那个小东西的存在感变得无比鲜明，随着他身体的颤抖，一下下刮蹭着敏感点。

“哈啊……”悠真发出一声压抑的呻吟，腿软得几乎站不住。他滑坐到马桶盖上，双腿大张，手还握着自己湿漉漉的性器，但不敢动，只是握着，像握着一块烧红的炭。

他想射。想得发疯。

但铃音会知道。她说过，她有办法知道。如果他在学校自己解决了，回家后的“惩罚”会比现在难受一百倍。

眼泪毫无预兆地涌了出来。悠真把脸埋进膝盖，无声地哭泣。他讨厌这样的自己，像个发情的野兽，连最基本的自控都做不到。可他又无法否认，这种被欲望折磨到崩溃的感觉里，混杂着某种黑暗的快感——他正在为了铃音忍耐，他的痛苦是献给她的祭品。

隔间外传来脚步声和男生们说话的声音。悠真立刻屏住呼吸，不敢发出一点声音。

“喂，你们觉不觉得星野最近怪怪的？”一个声音说。

悠真浑身一僵。

“有吗？不就头发长了点。”

“不只是头发。感觉整个人……变软了？说话声音也轻了，走路姿势也怪怪的。”

“你这么一说还真是。而且他最近老是一个人，也不跟我们一起打球了。”

“该不会是交女朋友了吧？沉浸在二人世界里？”

一阵哄笑。

“得了吧，就星野那样子，哪有女生会喜欢他。瘦巴巴的，跟个女孩子似的。”

“别说，他头发留长了还真有点像女的。皮肤也白，腿也细……”

“喂喂，你该不会对男人有兴趣吧？”

“滚！我就说说！”

声音渐渐远去。悠真还保持着蜷缩的姿势，心脏在胸腔里狂跳。他们说他像女孩子……这个认知让他感到一阵羞耻，但更多的，是一种扭曲的、隐秘的兴奋。

他慢慢抬起头，看向隔间门后贴着的全身镜碎片——那是之前有人打架时打破的，一直没修。碎片里映出他此刻的样子：校服衬衫凌乱，领口敞开，露出锁骨和一小片胸口。脸颊潮红，眼睛湿润，嘴唇被咬得红肿。黑发凌乱地垂在肩头，耳垂上的银色铃铛随着他的动作微微晃动。

确实……很像女孩子。

悠真伸出手，指尖碰了碰镜子里自己的脸。然后，慢慢往下，划过脖颈，停在胸口。隔着衬衫，他能感觉到那两个已经硬挺的乳头。很小，只是微微的隆起，但铃音说很可爱，像两颗未成熟的小樱桃。

他想被铃音舔那里。

想被她用舌头拨弄，用牙齿轻咬，想听到她说“哥哥的奶子好可爱”。

这个念头像最后一根稻草，压垮了理智的堤坝。悠真颤抖着手，解开了衬衫最上面的两颗扣子，然后拉下左边衣领，让那颗淡粉色的乳头暴露在空气中。

厕所里很安静，只有远处水管滴水的滴答声。悠真低下头，看着自己胸口那点小小的凸起，然后，伸出舌头，舔了上去。

咸涩的汗水味道。他用舌尖绕着乳晕打圈，然后含住整个乳尖，模仿铃音的动作，轻轻吮吸。

“嗯……”细微的快感窜上来，但不够，远远不够。这更像是隔靴搔痒，反而让那股渴望变得更加强烈。

他想要更多。想要真正的、来自铃音的触碰。

就在这时，手机震动了一下。

悠真猛地回过神，慌忙拉好衣领，扣上扣子，然后拿出手机。

是铃音发来的消息。

「哥哥，现在来旧校舍三楼的音乐准备室。一个人来，别被人看见。」

旧校舍？那是栋快要拆除的老建筑，平时几乎没人去。铃音去那里干什么？

但悠真没时间多想。身体里的渴望已经烧成了燎原大火，任何一点可能的解脱都像是沙漠里的绿洲。他迅速整理好衣服，确认自己看起来还算正常，然后冲出隔间，避开人群，绕到了教学楼后面。

旧校舍矗立在校园最偏僻的角落，外墙爬满了爬山虎，窗户大多破败。悠真从侧面的小门溜进去，里面光线昏暗，空气里弥漫着灰尘和霉味。他沿着摇摇晃晃的楼梯往上走，脚步声在空旷的楼道里回响。

三楼，音乐准备室。门虚掩着，里面透出一点光。

悠真推开门，然后愣住了。

房间显然被打扫过，灰尘被清理了，窗户也擦干净了，午后的阳光斜斜地照进来，在地板上投下金色的方格。房间中央，摆着一架老旧的三角钢琴，琴盖打开，黑白琴键在光线下泛着温润的光泽。

而铃音，就坐在钢琴前的琴凳上。

她穿着学校的女生制服——白衬衫，深蓝色百褶裙，黑色的过膝袜。但她没穿外套，衬衫最上面的两颗扣子解开着，露出锁骨和一小截黑色的蕾丝内衣边缘。她的长发扎成了高马尾，露出一截白皙的后颈。

听到开门声，铃音转过头，对悠真笑了。

“哥哥，过来。”

悠真关上门，反锁，然后慢慢走过去。每走一步，身体里的渴望就更强烈一分。他看到铃音的脚上没穿鞋子，只穿着黑色的短袜，脚踝纤细，脚背的弧度优美。

“坐。”铃音拍了拍自己身边的琴凳。

悠真坐下。琴凳很窄，两个人坐在一起，身体不可避免地贴在一起。他能感觉到铃音大腿的温度，闻到她身上淡淡的、和自己一样的茉莉花香。

“哥哥今天很难受吧？”铃音侧过脸看他，伸手撩开他额前的碎发，“我看到哥哥在数学课上的样子了。脸那么红，腿一直在抖。”

悠真低下头，小声说：“……嗯。”

“想要吗？”

悠真点头，眼泪又涌了上来。他抓住铃音的手，把脸埋进她的掌心：“想……想得快要疯了……”

铃音的拇指擦过他的眼角：“那，我帮哥哥？”

悠真抬起湿漉漉的眼睛看她：“在这里？可是……”

“这里很安全。”铃音说，“旧校舍下周就要拆了，现在没人会来。而且……”她凑近，嘴唇几乎碰到悠真的耳朵，“我想在学校里，对哥哥做一次。”

这句话像一剂烈性春药。悠真浑身一颤，前端又渗出更多液体。

铃音笑了。她站起身，走到钢琴的另一边，拿出了一个纸袋。悠真这才注意到，那里早就准备好了东西。

铃音从纸袋里拿出几样东西：一瓶润滑剂，一副白色的蕾丝手套，还有一个……乳夹？但不是之前那种带刺的，而是更小巧的，两个粉色硅胶垫中间连着一条细链子的那种。

“今天玩点不一样的。”铃音说着，戴上那副蕾丝手套。白色的蕾丝包裹住她的手指和手背，只露出指尖，看起来既纯洁又色情。

她走回悠真面前，命令道：“站起来，把裤子脱了。”

悠真照做。校服裤子滑到脚踝，露出里面已经被前液浸湿的白色内裤。铃音蹲下身，帮他把内裤也褪下来。

完全暴露在空气中的性器已经完全勃起，颜色深红，顶端不断渗出清亮的液体。因为长时间的忍耐，它显得格外肿胀，血管清晰可见。

铃音没有立刻碰那里。她抬起头，对悠真说：“衬衫也脱掉。”

悠真解开扣子，脱下衬衫。上身完全赤裸，胸口那两点淡粉色的乳尖因为寒冷和兴奋而挺立着，在阳光下看起来格外小巧可爱。

铃音站起身，伸出手，用戴着蕾丝手套的指尖，轻轻碰了碰悠真的左胸。

“哥哥的奶子，”她低声说，“真的变大了呢。”

悠真脸红了：“才没有……”

“有的。”铃音捏了捏那团柔软的乳肉，“虽然还是很小，但比以前有肉了。是因为我经常揉吗？”

悠真说不出话。铃音确实经常揉他的胸部，说这样能“促进发育”。虽然他知道这大概率是胡说八道，但身体还是诚实地给出了反应——那里确实比以前更敏感了。

铃音拿起那个乳夹，将两个硅胶垫分别夹在悠真的两颗乳头上。夹力很轻，不会痛，但存在感鲜明。细链垂在胸口，随着呼吸轻轻晃动。

然后，她拉着悠真，让他面对钢琴，背对着自己。

“弯腰，手撑在琴键上。”铃音说。

悠真照做。他弯下腰，双手撑在冰凉的黑白琴键上，臀部向后翘起。这个姿势让他后穴完全暴露，那个小小的肛塞尾巴露在外面。

铃音从后面抱住了他，手从他腋下穿过，握住了他的胸部。

隔着蕾丝手套，她的手指开始揉捏那两团小小的乳肉。力道适中，像在揉面团，又像在按摩。指尖时不时刮过乳夹下的乳头，带来细微的刺痛和快感。

“嗯……”悠真发出满足的叹息。胸部的刺激很陌生，但很舒服。尤其是当铃音用拇指和食指捏住乳夹，轻轻拉扯时，快感会直接窜到脊椎。

“哥哥的奶子，勉强够用了呢。”铃音在他耳边低笑，然后，她松开了他的胸部，转而往下，握住了他硬挺的性器。

悠真浑身一颤。

铃音开始套弄，速度很慢，但每一下都从根部撸到顶端，拇指重重刮过铃口。蕾丝手套的质地很特殊，不像皮肤那么光滑，也不像布料那么粗糙，它带来一种微妙的摩擦感，又刺又痒，格外刺激。

“啊……铃音……”悠真仰起头，手指无意识地按在琴键上，发出杂乱无章的音符。

“还有这里。”铃音另一只手绕到他身后，捏住了肛塞的尾巴，开始缓慢地旋转、抽插。

双重刺激下，悠真的理智迅速瓦解。他咬住下唇，试图压抑呻吟，但破碎的声音还是不断漏出来。

钢琴被他无意识地按压，发出不成调的声响——几个低沉的和弦，几声尖锐的高音，混杂着他甜腻的喘息，在空旷的教室里回荡。

铃音加快了手上的动作。她不再满足于简单的套弄，而是用掌心包裹住悠真的性器，快速上下摩擦。蕾丝手套很快被前液浸湿，发出细微的、湿漉漉的摩擦声。

“噗嗤……噗嗤……”

更响的声音，来自后面。肛塞被快速抽插，带出润滑液和肠液，发出清晰的水声。

“啊……啊……不行了……”悠真摇着头，腰肢开始失控地挺动，“要射了……铃音……要射了……”

“还不行哦。”铃音突然停下了所有动作。

快感骤然中断的痛苦让悠真发出哀鸣。他回头，用哀求的眼神看着妹妹。

铃音松开了他，走到钢琴的另一边，重新拿起了纸袋。这次，她拿出了另一样东西——一双白色的、蕾丝边的短袜。

不是新的，而是穿过的。悠真认出来了，那是铃音昨天穿过的袜子。

“哥哥今天要用的，是这个。”铃音说着，将那双袜子卷成团，然后走到悠真面前，蹲下身。

悠真还没反应过来她要做什么，就感觉到一个柔软温热的东西，贴上了自己湿漉漉的性器。

是铃音的脚。

但不是赤裸的脚，而是穿着白色短袜的脚。袜子很薄，能隐约看到底下脚趾的轮廓。铃音用脚掌包裹住了悠真的柱身，然后开始上下摩擦。

“啊——！”悠真猛地弓起背。

脚交。他只在某些视频里见过，从未想过自己会体验。袜子的布料比手套更粗糙一些，摩擦带来的快感也更加直接、更加……羞耻。

尤其是，当铃音用大脚趾的趾腹，刻意按压他龟头下方最敏感的系带时——

“嗯啊！”悠真尖叫一声，前端又射出一股前液，彻底浸湿了白色的袜子，让布料变成半透明。

“哥哥很喜欢呢。”铃音低声说，脚上的动作没停。她用脚掌包裹着悠真的性器，缓慢但用力地摩擦，时而用脚趾夹住柱身，时而用脚跟按压囊袋。

悠真已经说不出完整的话了，只能发出断断续续的、像小狗呜咽般的声音。他双手撑在琴键上，身体随着铃音脚上的动作前后晃动，每一次摩擦都带来强烈的快感。胸口乳夹的链子随着动作叮当作响，耳垂上的铃铛也在晃动，发出细微的、几乎听不见的声响。

但最刺激的，是视觉。

低头就能看到，妹妹穿着白色短袜的脚，正在自己勃起的性器上摩擦。袜尖已经被精液和前液浸透，变成深色，紧贴着脚趾的轮廓。随着动作，他能清晰地看到脚趾蜷缩又伸展，看到脚背弓起的弧度，看到脚踝处那截白皙的皮肤。

这个画面太淫乱了，也太美了。悠真感到一股更强烈的射精冲动涌上来，但他死死咬着牙，忍着。

铃音察觉到了他的忍耐，脚上的动作更加激烈。她甚至抬起另一只脚，用脚掌踩住了悠真的囊袋，轻轻碾压。

“呜——！”悠真浑身剧烈颤抖，眼泪夺眶而出。太刺激了，刺激到他觉得自己的睾丸都要被踩爆了，但快感却因此变得更加尖锐、更加难以忍受。

“哥哥想射吗？”铃音问，脚趾夹住了悠真龟头的边缘，用力一拧。

“想……想……”悠真哭着说。

“那求我。”

“求……求你……铃音……让我射……”

“说‘请用妹妹的脚让我射精’。”

悠真羞耻得浑身发烫，但欲望压倒了一切：“请……请用妹妹的脚……让我射精……”

铃音满意地笑了。她加快了脚上的动作，用整个脚掌快速摩擦悠真的性器，同时脚趾不断按压敏感点。

悠真再也忍不住了。腰肢猛地向前一挺，一股浓稠的精液喷射出来，直接射在了铃音的脚上。第一股最多，透过薄薄的袜子，能看到白色的液体迅速扩散。然后是第二股、第三股……他射了很久，量多得惊人，把整只袜子都浸透了，精液甚至顺着脚踝流下来，滴在地板上。

高潮的余韵中，悠真浑身瘫软，几乎要滑坐到地上。但铃音扶住了他，把他转过来，让他靠在钢琴上。

然后，她抬起那只沾满精液的脚，凑到悠真嘴边。

“舔干净。”她说。

悠真睁大了眼睛。

“哥哥射出来的东西，要自己负责清理哦。”铃音的语气不容置疑，“用舌头，舔干净。”

悠真看着那只脚。白色的袜子已经被精液浸成深色，湿漉漉地贴在脚上，能清晰地看到脚趾的轮廓和脚背的血管。精液的味道在空气中弥漫，咸腥，带着浓烈的性意味。

羞耻感几乎要将他淹没。但他没有犹豫太久。

他低下头，伸出舌头，舔上了妹妹的脚背。

精液的味道在舌头上化开。他先舔脚背，然后是脚心，最后是每一根脚趾。袜子粗糙的布料摩擦着舌头，混合着精液的粘稠感，触感怪异又色情。他舔得很仔细，像最虔诚的信徒在清理圣物。

铃音靠在钢琴上，低头看着他，呼吸渐渐急促。她能感觉到哥哥温热的舌头隔着袜子舔舐自己的脚，那种湿滑的触感和视觉刺激，让她自己也硬得发痛。

当悠真舔到脚趾缝时，铃音忍不住发出一声呻吟。

悠真抬起头，嘴角还沾着白色的精液。他看向铃音，眼神迷离又湿润。

铃音拉起他，吻了上去。这个吻带着精液的味道，咸涩又炽热。她一边吻，一边拉开了自己裙子的拉链。

黑色的蕾丝内裤下，那根尺寸惊人的阴茎已经完全勃起，顶端渗出透明的液体。

“哥哥，”铃音喘息着说，“还有一件事没做。”

她让悠真转过身，再次弯下腰，手撑在钢琴上。然后，她拉下自己的内裤，将硬挺的顶端抵上了悠真还在微微张合的后穴。

那里已经湿滑无比，肛塞抽走后留下的空虚感正强烈地渴望着被填满。

铃音没有做任何扩张，直接挺腰，整根没入。

“啊——！！！”悠真尖叫起来，手指狠狠按在琴键上，发出一串刺耳的高音。

太满了，太深了。铃音的尺寸比肛塞大得多，进入的瞬间几乎有种撕裂感，但随之而来的是无与伦比的满足。悠真感到自己的内脏都被顶得移位了，但快感也因此强烈到让他大脑空白。

铃音开始抽插。一开始很慢，每一下都深深顶入最深处，碾过前列腺。然后越来越快，越来越用力。

“噗嗤！噗嗤！噗嗤！”

响亮的水声在教室里回荡，混合着钢琴被撞击时发出的杂乱音符，以及两人粗重的喘息和呻吟。

铃音的手重新握住了悠真的胸部，揉捏着那两团小小的乳肉，拉扯着乳夹的链子。每一次挺入，她都会用力捏一下，带来双重的刺激。

悠真已经彻底失神了。他像一艘在暴风雨中的小船，被妹妹的撞击顶得前后摇晃，只能无助地呻吟、哭泣、尖叫。前端又硬了起来，随着铃音的抽插，不断吐出清液，滴在钢琴漆面上，形成一小滩水渍。

“哥哥里面……好热好紧……”铃音喘息着，俯身咬住悠真的后颈，“全部吃下去了……我的东西……”

悠真说不出话，只能点头，眼泪流个不停。他感觉自己快要被操坏了，但快感却还在不断累积，向着另一个高峰攀升。

就在这时，铃音松开了他的胸部，手往下滑，握住了他再次勃起的性器。

套弄，和后面的撞击同步。

三重刺激。

悠真的大脑彻底宕机了。他张着嘴，却发不出任何声音，只有气流从喉咙里挤出的嘶嘶声。眼前一片白光，身体像过电般剧烈痉挛。

然后，他射了。

这一次没有精液——刚才已经射光了，射出来的是透明的前列腺液，量不多，但射精的快感依然强烈到让他几乎晕厥。

几乎同时，铃音也到了极限。她狠狠撞入最深处，龟头嵌进宫颈口般的深度，然后，炽热的精液猛烈地喷射而出，灌满了悠真的肠道。

“嗯啊啊啊——！”

两人一起达到了高潮。

铃音趴在他背上，剧烈喘息。悠真还保持着弯腰的姿势，浑身都在颤抖，后穴不断有混合的精液涌出，顺着大腿流下。

许久，铃音才慢慢退出。她帮悠真取下乳夹，然后用纸巾简单清理了两人身上的狼藉。

阳光已经西斜，教室里的光线变得柔和。悠真瘫坐在地板上，背靠着钢琴，眼神涣散。铃音坐在他身边，头靠在他肩上。

“哥哥，”她轻声说，“下个月，旧校舍就要拆了。”

悠真“嗯”了一声。

“所以今天，可能是最后一次在这里了。”铃音转过头看他，“要留下纪念吗？”

悠真还没反应过来，铃音就拿起手机，对着两人拍了一张照片。

照片里，悠真赤裸着上身，胸口有乳夹留下的红痕，脸上还带着高潮后的潮红和泪痕。铃音靠在他肩上，穿着凌乱的校服裙，手里拿着那双沾满精液的袜子。

背景是那架老旧的钢琴，琴键上还留着他们的手印和体液。

“这张照片，只有我看。”铃音说着，把照片设置成加密，“哥哥在学校里发情的样子，被我操到哭的样子……都是我的。”

悠真看着那张照片，羞耻感又涌了上来，但更多的是……一种奇异的安心感。

他属于铃音。每一寸身体，每一个表情，每一次高潮，都属于她。

这个认知，让他感到安全。

铃音收起手机，然后从纸袋里拿出最后一样东西——一个项圈。不是皮质的那种，而是更精致的，银色链条，中间挂着一个铃铛，和悠真耳垂上的是一对。

“戴上这个。”她说，“以后在学校，也要戴着。”

悠真摸了摸自己的脖子：“可是……会被看到……”

“衬衫领子可以遮住。”铃音说，“而且，这个铃铛很小，声音很轻，只有哥哥自己能听到。”

她帮悠真戴上项圈。冰凉的金属贴着皮肤，铃铛随着动作发出细微的叮当声，果然很轻，轻到几乎听不见，但悠真能感觉到它的存在。

“这样，哥哥在学校里，也会时刻记得自己是谁的所有物了。”铃音吻了吻他的锁骨。

悠真低头看着那个项圈，然后抬起手，抱住了铃音。

“铃音。”

“嗯？”

“我……”他犹豫了一下，还是说了出来，“我喜欢这样。”

喜欢被你控制，喜欢成为你的所有物，喜欢这种扭曲又深刻的关系。

铃音没有立刻回答。她只是抱紧了他，脸埋在他颈窝。

悠真感觉到，有温热的液体滴在自己的皮肤上。

铃音在哭。

“我也喜欢。”她小声说，声音带着鼻音，“喜欢哥哥，喜欢这样的哥哥。”

两人就这样在夕阳里拥抱着，直到天色渐暗。

离开旧校舍前，悠真最后回头看了一眼那间音乐准备室。钢琴安静地立在暮色里，琴键上他们的痕迹已经被清理干净，仿佛什么都没发生过。

但他知道，有些东西已经彻底改变了。

他的身体，他的心，他的人生。

都被刻上了铃音的印记，再也回不去了。

而他不打算回去。

走出旧校舍时，悠真摸了摸脖子上的项圈，耳垂上的铃铛随着动作轻轻晃动。他看向身边的铃音，妹妹也正看着他，眼睛在暮色里亮得像星星。

悠真伸出手，握住了铃音的手。

十指相扣。

他们一起走向校门，走向那个只有彼此的世界。

长发在晚风里轻轻飘动，项圈的铃铛发出细微的声响。

那是只属于他们的，秘密的旋律。`,vd=Object.freeze(Object.defineProperty({__proto__:null,default:hd},Symbol.toStringTag,{value:"Module"})),bd=`---
order: 5
---

# #5 黑丝、银锁与偏执的牙印


悠真把最后一本课本塞进书包时，铃音已经靠在教室后门等他了。

六月的放学时分，空气里浮动着暑气和青春特有的躁动。悠真拉上书包拉链，目光不由自主地飘向窗外——几个同班男生正围着手机低声议论什么，偶尔爆发出笑声，目光还时不时瞟向他这边。

他立刻低下头，假装整理并不凌乱的课桌。最近这种感觉越来越频繁：被注视，被议论，被放在某种他无法理解的视线焦点里。头发已经长到肩膀下五公分，发尾微卷，因为铃音坚持每晚给他编发睡觉。耳垂上的银铃耳钉在校规边缘游走，但因为尺寸小，老师睁只眼闭只眼。脖子上那条细银链倒是藏得很好，衬衫领子竖起就能遮住，只有他自己能感觉到那枚小铃铛贴着锁骨的细微重量。

但有些东西藏不住。

比如走路时不自知放轻的步子，比如思考时无意识卷着发尾的手指，比如被突然叫到时脸颊泛起的红晕——这些被铃音用三个月时间精心打磨出的“习惯”，像一层看不见的釉，把他烧制成与周围男生截然不同的瓷器。

“哥哥，还没好吗？”铃音的声音从门口飘来，带着一丝不易察觉的催促。

悠真应了一声，背上书包走过去。铃音今天心情似乎不太好，嘴角抿得有点紧。她伸手，很自然地帮悠真把滑到肩前的头发撩到耳后，指尖有意无意擦过那枚耳钉。

“头发又长长了。”铃音说，声音很低，“该剪了。”

悠真愣了一下：“……不是你说留长好看吗？”

“是好看。”铃音抬眼看他，眼神里有什么东西一闪而过，“但太好看，会引来苍蝇。”

她说完就转身往楼梯走，步子比平时快。悠真赶紧跟上，心里隐约升起不安。铃音很少这样直接表露情绪，尤其在学校这种公共场合。

走到一楼大厅时，那种被注视的感觉达到了顶峰。

好几个不同年级的学生聚在布告栏前，指着什么兴奋地议论。悠真本能地想绕开，但铃音却停下了脚步，直直朝那边走去。

布告栏上贴的不是通知，而是一张彩色照片的放大打印版。照片明显是偷拍的，角度有点歪，但画面清晰得刺眼——

是悠真。

照片里的他正弯腰在自动贩卖机前买饮料，侧对着镜头。身上穿着今天早上的衣服：黑色修身衬衫，深灰色工装裤，裤脚塞进一双黑色马丁靴里。靴筒不高，刚好到内踝上方三厘米，露出一小截被黑色丝袜包裹的脚踝。他微微歪着头，长发从肩头滑落，遮住半边脸颊，露出的那截脖颈线条纤细脆弱。

拍摄时机抓得刁钻。他正伸手去接滚落的罐装咖啡，指尖刚碰到金属罐，眼睛半眯着，嘴唇微微张开，像是要说什么。午后的阳光从走廊窗户斜射进来，在他发梢和肩头镀上一层毛茸茸的金边，黑丝包裹的脚踝在光影里泛着细腻的光泽。

照片下面用马克笔写着一行字：

「三年A班星野悠真——我们学校还有这种级别的美少年？！求联系方式！」

旁边已经贴了好几张便签纸。

「真的不是女孩子吗？这腿这腰这头发！」
「黑丝配马丁靴我死了！什么神仙搭配！」
「求社交账号！求推特！求Ins！」
「星野同学我是二年C班的佐藤，请和我交往！」
「今天在走廊偶遇了，本人比照片还好看，皮肤好白，身上有茉莉花香！」

悠真僵在原地，血液瞬间冲上头顶，又迅速褪去，留下冰凉的麻木。他感觉周围所有的目光都像针一样扎过来，那些窃窃私语变成放大一百倍的噪音，在耳膜上轰鸣。

有人认出他了。

“看！就是本人！”
“星野同学！星野同学看这边！”
“可以合影吗？”
“那个……我是二年B班的……”

几个胆子大的女生已经围了过来，眼睛亮晶晶地看着他，手里还握着手机。后面还有更多人在往这边挤，男女生都有，脸上带着好奇、兴奋、或者某种悠真不敢深究的炽热。

他下意识后退，后背撞上了一个温热的身体。

是铃音。

妹妹的手从后面伸过来，握住了他的手腕。力道很大，指甲几乎嵌进皮肤里。悠真能感觉到她身体的紧绷，像一张拉到极致的弓。

“让开。”铃音的声音不高，但冷得像冰。

围过来的几个人顿住了。铃音在学校里一直很低调，但此刻她脸上那种毫不掩饰的敌意和占有欲，让空气都凝滞了几秒。

“我们走。”铃音拉着悠真，几乎是拖着他穿过人群。那些目光黏在背上，像湿冷的蛛网。悠真低着头，盯着自己的靴尖机械地迈步，脑子里一片空白。

直到走出校门，拐进一条僻静的小巷，铃音才猛地停下脚步，把他按在墙上。

“什么时候拍的？”她的声音在颤抖，不是害怕，是压抑的怒火，“谁拍的？”

悠真摇头，嘴唇哆嗦着：“我不知道……我真的不知道……”

铃音盯着他看了几秒，然后突然伸手，用力扯开了他衬衫最上面的两颗扣子。扣子崩飞，掉在地上发出轻微的声响。领口敞开，露出底下的黑色丝袜——他今天在衬衫里穿了件黑色的丝质打底，高领，但材质半透明，能隐约看见锁骨和胸口。

还有那根银链。

铃音的手指勾住链子，把它从衣领里拉出来。小铃铛暴露在空气中，在昏暗的小巷里泛着冷光。

“戴着这个，”她一字一句地说，“我的项圈。我的耳钉。我留长的头发。我选的衣服。我教你的走路姿势。”她的手指收紧，链子勒进悠真的皮肤，“然后让别人拍？让别人看？让别人肖想？”

“我没有……”悠真眼泪涌了上来，“我没有想……”

“但你看起来很开心啊。”铃音凑近，鼻尖几乎碰到他的，“被那么多人围着，夸你好看，跟你要联系方式……哥哥心里，其实很得意吧？”

悠真拼命摇头，眼泪滑下来：“我没有……我只是……”

他只是什么？他不知道。那一刻的羞耻是真的，但羞耻底下，是不是真的有一丝……隐秘的欢喜？被关注，被赞美，被当作“美少年”而不是“那个有点娘的星野”？

这个念头让他感到更深的罪恶。

铃音看着他的眼泪，眼神暗了下去。她松开链子，改为捧住他的脸，拇指擦过他的眼角，把泪水抹开。

“哥哥哭起来的样子，”她低声说，声音里的怒火变成了某种更粘稠、更危险的东西，“也只能给我看。”

她吻了上来。

这个吻毫无温柔可言。是啃咬，是侵占，是标记。铃音的牙齿磕到他的嘴唇，舌头强行撬开牙关，扫过他口腔的每一寸。悠真尝到了血的味道——自己的，或者铃音的，分不清。他被动地承受着，手抓住铃音的校服外套，布料在掌心皱成一团。

吻了很久，久到悠真缺氧，眼前发黑，铃音才退开一点。两人的嘴唇都红肿着，银丝断裂，拉出淫靡的细线。

“回家。”铃音说，声音沙哑，“现在。”

回家的路，悠真走得浑浑噩噩。铃音一直牵着他的手，但力道大得像镣铐。每经过一个行人，悠真就下意识地缩脖子，想把脸藏起来。那些布告栏上的字，那些便签纸，那些目光……在脑海里反复播放。

他觉得自己像一件被意外摆上展柜的私藏品，暴露在所有人的视线下。而铃音，他的收藏者，此刻正握着他的手，要把他重新锁回暗无天日的保险箱。

一进门，铃音就甩掉了鞋子，然后转身，把悠真按在玄关的墙上。

“衣服，”她命令道，“脱掉。全部。”

悠真颤抖着手，开始解扣子。衬衫，工装裤，马丁靴——当他弯腰脱靴子时，铃音蹲了下来，握住了他的脚踝。

黑丝袜从靴筒里抽出时，发出细微的摩擦声。丝袜很薄，是铃音选的款式，脚踝处有精致的蕾丝边。因为穿了一天，脚心处微微潮湿，透出底下皮肤的淡粉色。

铃音的手指顺着脚踝往上摸，隔着丝袜，抚摸他小腿的线条。

“这双腿，”她低声说，“这双脚。今天有多少人看见了？嗯？”

悠真说不出话。铃音的手已经摸到了大腿根，然后，毫无预兆地，她用力一扯——

“撕拉——”

丝袜从大腿内侧被撕开一道口子，一直裂到膝盖。冰凉的空气接触皮肤，悠真惊叫一声，想并拢腿，却被铃音用膝盖顶开。

“别动。”铃音说着，继续撕。另一条腿的丝袜也被如法炮制，很快变成破布挂在腿上。然后，她握住悠真的脚踝，把他两只脚抬起来，放在自己肩上。

这个姿势让悠真完全暴露。下身只剩下一条黑色的三角内裤，已经被前液浸湿了一小块。而上身，那件黑色的丝质打底还穿着，但领口被扯得很开，一边肩膀滑下来，露出锁骨和一小片胸口。

铃音低下头，从脚背开始吻。

她的吻不像平时那样带着情欲的湿热，而是冷的，像冰片划过皮肤。从脚背到脚踝，从脚踝到小腿。隔着丝袜的破口，她的舌尖偶尔舔到赤裸的皮肤，引起一阵战栗。

悠真仰着头，靠在墙上，呼吸急促。羞耻感像潮水般涌来，但更强烈的是恐惧——铃音现在的状态太不正常了。她眼里的那种暗沉的光，像是某种野兽在确认自己的领地。

吻到膝盖时，铃音停了下来。她抬起眼，看着悠真。

“哥哥今天，”她说，“穿得很可爱呢。”

语气平静，但每个字都像带着倒刺。

“中性风。黑丝。马丁靴。”她一边说，手指一边顺着悠真大腿内侧往上滑，“是谁教哥哥这么穿的？”

“是你……”悠真小声说。

“是我。”铃音笑了，但笑意没到眼底，“所以哥哥现在这副样子，从头到脚，都是我的作品。对吧？”

悠真点头，眼泪又掉了下来。

“那为什么，”铃音的手停在了内裤边缘，指尖勾住布料，“要让别人看呢？”

她猛地一扯，内裤被撕开，悠真完全赤裸的下身暴露在空气中。早已半硬的性器因为惊吓和寒冷而颤了颤，顶端渗出一点清液。

铃音盯着那里看了几秒，然后，她做了一个让悠真完全没想到的动作——

她低下头，张嘴，含住了悠真的右脚大脚趾。

“啊……！”悠真倒抽一口气。

不是亲吻，不是舔舐，而是含。像含住棒棒糖一样，把整个大脚趾含进嘴里，舌头裹住，牙齿轻轻啃咬趾关节。

温热的、湿滑的口腔包裹住脚趾的触感，比直接刺激性器还要令人羞耻百倍。悠真浑身发抖，脚趾不自觉地蜷缩，却只能更深地陷进妹妹的口腔里。

铃音含得很用力，能听到细微的吮吸声。她的眼睛一直盯着悠真，看着他脸上混合着羞耻、快感和恐惧的表情，眼神越来越暗。

然后，她开始动。

不是用手，也不是用嘴去碰悠真的性器。而是含着那根脚趾，开始模仿口交的动作——前后吞吐，舌头缠绕，偶尔用牙齿轻轻刮擦。

“滋……啾……嗯……”

水声在安静的玄关里格外清晰。悠真抓着墙，指甲几乎要抠进墙漆里。太超过了，这个玩法太超过了。脚趾传来的快感并不直接，但那种心理上的冲击和羞辱，让他前端迅速完全勃起，铃口不断渗出液体，顺着柱身流下来。

铃音松开口，银丝从嘴角和脚趾间拉出。她喘着气，嘴角还沾着一点唾液。

“哥哥的脚，”她说，声音沙哑，“今天有多少人看到了？那些围着你的人，有没有人想象过，这双脚被我含在嘴里的样子？”

悠真拼命摇头，哭得说不出话。

铃音换了一只脚，含住了左脚的大脚趾。这次她更用力，吮吸的声音更响，甚至还用舌尖去钻趾缝。

悠真仰起头，发出破碎的呻吟。他的身体背叛了他——明明是被羞辱，被惩罚，但前端却硬得发痛，囊袋绷紧，后穴也传来熟悉的空虚感。

铃音显然察觉到了。她松开口，站起身，把悠真翻过去，让他趴在墙上。

“后面也湿了？”她的手摸到悠真臀缝间，指尖试探性地按了按那个小口。那里果然已经湿滑一片，肠液不受控制地渗出来。

“只是因为脚……就湿成这样？”铃音的声音里带着难以置信的怒意，“哥哥的身体，已经淫乱到这种程度了吗？”

她收回手，然后，在悠真还没反应过来的时候，扇了他的臀部一巴掌。

清脆的响声在玄关回荡。悠真痛叫一声，臀肉上立刻浮现出一个红色的掌印。

“这是惩罚。”铃音说，又扇了一下，对称的位置，“惩罚哥哥让别人看。”

“对不起……对不起……”悠真哭着道歉，身体却因为疼痛和快感而颤抖。每一下巴掌都带来火辣辣的痛，但痛感很快转化成奇怪的快感，让他前端又渗出更多液体。

铃音打了十几下才停手。悠真的臀部已经一片通红，微微肿起，在灯光下泛着湿润的光泽。

然后，铃音从玄关的抽屉里拿出了一样东西——悠真之前没见过。

是一副脚铐。但不是普通的脚铐，而是设计精致的银色金属环，内侧衬着柔软的黑色皮革。两个环之间连着一条同样材质的链子，不长，大概只能让双脚分开三十厘米。

“手背到后面。”铃音命令。

悠真照做。手腕被丝巾捆住，然后，铃音让他坐在地上，背靠着墙。她抬起他的双脚，把银色脚铐扣在了他的脚踝上。

“咔哒”两声轻响，锁扣合上。金属冰凉，皮革柔软，但禁锢感无比清晰。

铃音退后一步，欣赏着自己的作品。

悠真赤裸着坐在地上，手腕被缚在身后，双脚被脚铐锁住，只能勉强分开一点距离。身上那件黑色丝质打底被扯得凌乱不堪，一边肩膀完全露出来，胸口两点在薄薄的布料下清晰可见。脸上泪痕未干，嘴唇红肿，眼神涣散。

而最刺眼的，是臀部和腿上那些红痕，以及腿间那根硬挺的、不断滴水的性器。

“完美。”铃音低声说，拿出手机，对着悠真拍了几张照片。闪光灯刺得悠真闭上了眼睛。

拍完照，铃音蹲下身，与悠真平视。

“现在，”她说，“我们来玩一个游戏。”

她从口袋里拿出一个小巧的遥控器——是郊狼的。但她没把贴片贴在悠真身上，而是……

她撩起自己的校服裙，拉下内裤，把那两个贴片，贴在了自己的大腿内侧。

悠真瞪大了眼睛。

铃音按下开关。

“滋……”

轻微的电流声。铃音身体一颤，发出一声闷哼。她能感觉到电流窜过自己的大腿，刺激着附近的神经。但这不是重点。

重点是，她把遥控器塞进了悠真的后穴。

不是整个塞进去，而是用润滑剂涂满遥控器，然后把顶端——那个带着按钮的部分，塞了进去，卡在前列腺的位置。

“这个遥控器，”铃音喘息着说，额角渗出细汗，“控制的是我身上的电流。哥哥每按一次，我就会感觉到一次电击。”

她握住悠真的手，引导他的手指碰到后穴外露的遥控器尾部。

“但是呢，”她继续说，嘴角勾起一个恶劣的笑，“遥控器塞在哥哥里面。哥哥要按它，就必须……收缩后面。收缩得越用力，按得就越准。”

悠真听懂了。这个游戏的意思是——他要用后穴的收缩，来操控妹妹身上的电击。

“现在，”铃音退开一点，跪坐在他对面，校服裙摆铺开，“开始吧。让我看看，哥哥有多想要我。”

悠真看着她。铃音的脸泛着不正常的红，呼吸急促，眼神却依然牢牢锁着他。她能为了惩罚他，做到这种地步——把电击贴片用在自己身上，把控制权交给他，却又用这种羞辱的方式。

他闭上眼睛，开始尝试收缩后穴。

很难。那个位置本来就很敏感，现在塞着一个异物，要精准地控制肌肉去按压开关，简直像用脚趾夹起一根针。

他试了几次，后穴绞紧，放松，再绞紧。每一次收缩，都会带来内部的摩擦和快感，让他前端抖动着吐出更多液体。

终于，在一次用力的收缩后——

“滋！”

铃音猛地弓起背，发出一声短促的尖叫。电流显然不弱，她大腿内侧的肌肉都在抽搐。

“对……就是这样……”她喘着气，抬起头，眼睛湿漉漉地看着悠真，“继续……哥哥……继续按……”

悠真看着妹妹痛苦又兴奋的表情，心里某个地方被狠狠撞了一下。他不再犹豫，开始有节奏地收缩后穴。

“滋……滋……滋……”

电流声断断续续地响起。铃音的身体随着每一次电击而颤抖，她的手撑在地上，指节泛白，额头的汗滴下来，落在裙子上。校服衬衫的扣子不知什么时候解开了几颗，能看见里面黑色的内衣和剧烈起伏的胸口。

而悠真自己也不好受。每一次收缩，遥控器粗糙的表面都会摩擦前列腺，带来强烈的快感。他前端已经硬得发痛，铃口不断流出清液，在腿间积了一小滩。更可怕的是，脚铐限制了他的动作，他连蹭腿缓解都做不到，只能被动地承受快感的累积。

“啊……哥哥……好厉害……”铃音的声音已经带上了哭腔，“再……再用力一点……”

悠真咬紧牙关，用尽全身力气收缩后穴——

“滋滋滋——！！！”

连续三次强烈的电击。铃音尖叫着向后仰倒，身体剧烈痉挛，双腿乱蹬，裙子完全翻起来，露出底下湿透的内裤和那根完全勃起的阴茎。

而悠真也到了极限。在最后一次收缩的瞬间，强烈的快感冲垮了堤坝。他尖叫着射了出来，精液呈弧线喷射，落在自己的小腹、胸口、还有那件黑色的打底衫上。量很大，一波接一波，射得他眼前发白，身体像过电般颤抖。

高潮持续了十几秒才慢慢平息。悠真瘫在地上，大口喘气，眼泪流个不停。后穴还在不自觉地收缩，挤压着那个遥控器。

铃音慢慢坐起来，脸上还带着高潮后的红晕和泪痕。她爬过来，跨坐在悠真腿上，然后伸手，把那个湿漉漉的遥控器从他后穴里抽了出来。

“噗嗤”一声，带出不少润滑液和肠液。

铃音把遥控器扔到一边，然后俯身，吻住了悠真。

这个吻比刚才在巷子里更激烈，带着血、泪、汗和精液的味道。铃音的舌头像暴风雨一样扫过他的口腔，牙齿磕碰，呼吸交缠。悠真被动地承受着，手腕被缚，脚被铐住，只能仰着头，任由妹妹掠夺。

吻了很久，铃音才退开。她低头，看着悠真胸口那些白浊的精液，然后伸出舌头，开始舔。

从锁骨开始，到胸口，到小腹。她舔得很仔细，把每一滴精液都卷进嘴里，吞咽下去。舌头扫过乳头时，悠真敏感地抖了一下。

“哥哥的精液，”铃音舔着嘴角，眼神迷离，“也是我的。不准给别人看，不准让别人闻，更不准……让别人碰。”

她说完，突然低下头，张嘴含住了悠真还半硬的性器。

“啊……！”悠真惊叫一声。

铃音没有多做前戏，直接深深吞入，喉咙紧缩，带来强烈的压迫感。她开始快速吞吐，发出响亮的水声，一只手按着悠真的小腹，另一只手玩弄着他的囊袋。

悠真刚刚才射过，身体极度敏感，这样强烈的刺激几乎让他崩溃。他扭动着身体想躲，但脚铐限制了他的动作，只能无助地呻吟。

“不要……铃音……太敏感了……啊……”

铃音不理他，反而加快了速度。她甚至用牙齿轻轻刮过冠状沟，引起悠真一阵剧烈的颤抖。

很快，那股熟悉的快感又涌了上来。悠真哭着摇头：“不行了……真的不行了……射不出来了……”

铃音松开口，抬头看他，嘴角还挂着银丝：“射不出来？”

悠真点头，眼泪流进头发里。

铃音笑了。她站起身，脱掉了自己身上所有的衣服——校服，内衣，内裤。然后，她重新跨坐到悠真腿上，只不过这次，是面对面的。

她握住自己硬挺的阴茎，抵在悠真湿滑的后穴入口。

“那就用这里，”她喘息着说，“帮我射。”

然后，她沉下腰，整根没入。

“啊——！！！”两人同时尖叫。

太满了，太深了。刚刚高潮过的内壁格外敏感，每一次摩擦都带来过电般的快感。悠真仰起头，脖颈拉出脆弱的线条，嘴唇张开，却发不出完整的声音。

铃音开始动。一开始很慢，每一下都顶到最深处，碾过前列腺。然后越来越快，越来越用力。

“噗嗤！噗嗤！噗嗤！”

水声比任何时候都响亮。悠真被顶得前后摇晃，背摩擦着墙壁，手腕被丝巾勒出红痕。脚铐随着动作发出金属碰撞的轻响，混合着肉体撞击声和两人的喘息呻吟，在玄关里回荡。

铃音的手撑在悠真头侧的墙上，俯视着他。汗水从她的下巴滴落，落在悠真脸上。

“哥哥……”她喘息着说，腰部的动作不停，“叫我的名字。”

“铃……铃音……”

“说你是我的。”

“我……我是铃音的……”

“说永远不会给别人看。”

“永远不会……啊！……给别人看……”

“说就算被拍照片，被表白，被围着……你心里也只想着我。”

悠真哭出声：“只想着铃音……一直都是……啊……！”

铃音满意地笑了。她低下头，吻住悠真，同时腰部的动作更加狂暴。每一次进入都像要把他钉在墙上，每一次抽出都带出大量体液。

悠真感觉自己又要去了。后面被疯狂摩擦的快感，前面被挤压在小腹和铃音身体之间的刺激，还有心理上那种被彻底占有和征服的感觉……所有的一切叠加在一起。

他尖叫着达到了第二次高潮。这一次没有精液可射，是纯粹的前列腺高潮，快感强烈到让他眼前发黑，身体像被撕裂又重组。

几乎同时，铃音也到了。她狠狠撞入最深处，龟头嵌进那个敏感点，然后，炽热的精液猛烈喷射，灌满了悠真的肠道。

“嗯啊啊啊——！”

两人一起达到了顶峰。

铃音趴在他身上，剧烈喘息。悠真还保持着被钉在墙上的姿势，浑身都在颤抖，后穴不断有混合的体液涌出。

许久，铃音才慢慢退出。她解开悠真手腕上的丝巾和脚踝上的铐子，然后抱起他——这个动作让她踉跄了一下，但她还是稳住了，抱着他走向浴室。

温热的水流冲下来时，悠真才慢慢找回一点神智。他靠在铃音怀里，任由妹妹帮他清洗身体。

洗得很仔细，从头发到脚趾。铃音甚至把那个脚铐也洗干净了，放在洗手台上。

洗完后，铃音用浴巾包住他，把他抱回房间，放在床上。她自己也擦干身体，躺到他身边，从背后抱住他。

两人都没说话。房间里只有空调细微的运转声，和两人渐渐平复的呼吸。

悠真盯着天花板，脑子里一片空白。今天发生的一切像一场混乱的噩梦，但身体的酸痛和满足感又提醒他，这一切都是真的。

他转过头，看向铃音。

妹妹已经闭上了眼睛，睫毛在脸颊上投下小小的阴影。她睡得很沉，嘴角还带着一丝餍足的、近乎天真的笑意。

悠真看了她很久，然后，他也闭上了眼睛。

在陷入睡眠的前一刻，他感觉到铃音的手无意识地收紧，把他搂得更近了一点。

像是怕他会消失一样。

窗外，夜色渐深。

而玄关的墙上，那些抓痕和体液留下的痕迹，在月光下泛着暧昧的水光。

明天要早点起来打扫才行。

悠真迷迷糊糊地想。

然后，他睡着了。`,gd=Object.freeze(Object.defineProperty({__proto__:null,default:bd},Symbol.toStringTag,{value:"Module"})),$d=`---
order: 6
---

# #6 白丝、药丸与空教室的惩罚

清晨六点半，阳光还没能完全穿透窗帘，房间里弥漫着半明半暗的灰蓝色调。

悠真睁开眼睛的瞬间，就感觉到了一种不同寻常的紧绷感——不是来自情绪，而是来自身体。小腹深处有种微妙的温热感，像喝了一杯温酒，暖意缓慢地向四肢百骸扩散。后穴传来熟悉的空虚，但今天的渴求似乎比平时更早、更强烈地苏醒了。

他还没来得及思考这异常感觉的来源，房门就被推开了。

铃音走了进来，手里托着一个木制托盘，上面放着两杯牛奶，几片吐司，还有……一个深紫色天鹅绒小盒子。她穿着睡衣，长发随意披散着，脸上带着刚睡醒的慵懒，看起来无害得像一只餍足的猫。

但悠真太了解她了。铃音越是表现得温柔无害，底下藏着的风暴往往越猛烈。

“早安，哥哥。”铃音把托盘放在床头柜上，俯身在他额头落下一个轻吻，“睡得好吗？”

悠真点点头，想坐起来，却被铃音按住了肩膀。

“躺着就好。”她说，然后拿起那个深紫色盒子，打开。

里面是一颗药丸。小指甲盖大小，纯白色，表面光滑，没有任何标记。

“这是什么？”悠真问，声音里带着刚睡醒的沙哑。

“维生素。”铃音微笑，端起牛奶，“哥哥最近脸色不太好，需要补补。来，张嘴。”

她的语气太自然了，自然到悠真差点就顺从地张开嘴。但最后一刻，某种直觉让他犹豫了：“我……我可以自己吃。”

“不行哦。”铃音的笑容淡了些，“哥哥总是忘记吃药。今天我要看着你吃下去。”

她的手指已经捏起了那颗药丸。牛奶杯凑到悠真唇边，温热的奶香混合着药丸本身淡淡的、几乎闻不到的甜腥味。

悠真看着铃音的眼睛。那双漂亮的眼睛里有什么东西在闪——不是威胁，不是愤怒，而是一种近乎期待的兴奋。她在期待什么？期待他吃下这颗药？期待药效发作？

最终，悠真还是张开了嘴。药丸落入口腔，有点苦，他立刻喝了一口牛奶冲下去。吞咽时，能感觉到药丸滑过食道的细微轨迹。

“乖。”铃音满意地笑了，又吻了吻他的嘴角，“现在，该换衣服了。”

她从衣柜里拿出一套衣服，摊在床上。

悠真只看了一眼，血液就几乎要凝固了。

那是一套完整的水手服。白色衬衣，深蓝色领巾，同色百褶裙。裙子很短，目测绝对在膝盖以上十公分。配套的还有白色过膝袜，以及一双黑色的小皮鞋。

“铃音……”悠真的声音在颤抖，“这是……”

“哥哥今天的校服哦。”铃音语气轻快，仿佛在说今天的天气很好，“快点穿上，要迟到了。”

“可是……这是女生的……”

“所以才要让哥哥穿啊。”铃音歪着头看他，表情天真得近乎残忍，“昨天的事情，哥哥还没接受惩罚呢。让那么多人围着看，收到那么多情书……所以今天，哥哥要穿着这套衣服去学校。”

她顿了顿，补充道：“我要让所有人都以为哥哥是喜欢穿女装的变态。这样，就不会再有人围着你，不会再有人给你写情书了。他们会躲着你，会议论你，会……远离你。”

悠真明白了。这是惩罚，也是预防。铃音要用最直接的方式，在他和所有可能的“苍蝇”之间筑起一道墙。

“如果……如果我不穿呢？”他小声问。

铃音的笑容彻底消失了。她走到床边，俯身，双手撑在悠真身体两侧，把他困在床和自己之间。

“那就不要去学校了。”她低声说，眼睛里有暗流涌动，“我会把哥哥锁在家里，用郊狼，用震动棒，用所有能用的东西，玩一整天。玩到哥哥连站都站不起来，玩到哥哥哭着求我停。”

她的手指轻轻抚摸悠真的脸颊：“选哪个？穿女装去学校，还是留在家里被我玩坏？”

悠真闭上眼睛，眼泪从眼角滑下来。

他选择了前者。

穿上那套衣服的过程，像一场缓慢的凌迟。

白色衬衣很合身，简直像是为他量身定做的。领巾在铃音的巧手下系成一个漂亮的蝴蝶结。百褶裙的腰围也刚好，拉上拉链时发出轻微的“滋滋”声。裙子确实很短，坐下时大腿几乎完全暴露。

然后是袜子。白色过膝袜的材质很薄，带一点点微光。铃音跪在床边，托起悠真的脚，小心地将袜子一点点卷上去。从脚尖开始，包裹住脚背，脚踝，小腿，最后拉到大腿中部，袜口有蕾丝花边，勒在腿根。

悠真的脚很小，尤其是被白色丝袜包裹后，更显得纤细精致。脚踝的骨节清晰，足弓的弧度优美，十根脚趾在袜尖里微微蜷缩，透着淡粉色。铃音盯着看了很久，然后才帮他穿上那双黑色小皮鞋。

鞋子是圆头的，鞋带系成蝴蝶结，鞋跟只有两公分。悠真站起来时，因为不习惯这个高度踉跄了一下，铃音立刻扶住了他。

“站好。”她说，退后两步，上下打量着悠真。

晨光从窗户斜射进来，照亮了整个房间，也照亮了站在房间中央的悠真。

黑色短发已经长到肩膀下，发尾微卷。耳垂上的银铃耳钉在光线下闪了一下。水手服的白衬衣勾勒出他单薄但匀称的上半身，胸口处有微微的隆起——A罩杯，不大，但在紧身的衬衣下，能看出明显的弧度。深蓝色百褶裙下，是包裹着白色过膝袜的纤细双腿，袜口勒在大腿中部，留下一圈浅浅的勒痕。黑色小皮鞋擦得锃亮，鞋面上映出一点窗外的光。

铃音看了很久，久到悠真以为她会改变主意。

但她没有。

“完美。”她最终说，声音有点哑，“哥哥这样，可爱到让我想立刻把你按在床上。”

她从书包里拿出一个发卡，是深蓝色蝴蝶结的样式，别在了悠真的侧发上。

“走吧。”她说，牵起他的手，“去学校。”

从家到学校的路上，悠真一直低着头，恨不得把脸埋进地里。每一步都像踩在刀尖上，裙摆随着步伐轻轻晃动，大腿后侧的皮肤能感觉到微风的拂过。白色丝袜摩擦着发出细微的沙沙声，小皮鞋敲击地面的声音清脆而突兀。

他能感觉到路人的目光。好奇的，惊讶的，厌恶的，还有……兴味盎然的。

一个背着书包的小学生指着他问妈妈：“那个姐姐为什么穿着我们学校的男生校服外套？”

妈妈赶紧拉走了孩子：“别瞎说。”

悠真抓紧了铃音的手，指甲陷进她掌心。铃音没有甩开，反而握得更紧了些。

“挺直背。”她低声说，“哥哥越害怕，他们越会觉得你奇怪。”

悠真强迫自己抬起头。阳光很刺眼，他眯起眼睛，睫毛在脸颊上投下细小的阴影。这个动作让他看起来更像在强装镇定，反而增添了几分易碎的美感。

走进校门的那一刻，时间仿佛静止了。

校门口执勤的风纪委员张大了嘴，手里的记录板差点掉在地上。几个正在晨扫的学生停下了动作，扫帚从手里滑落。刚从自行车棚出来的男生一脚踩空，连人带车摔在地上，却忘了爬起来，只是呆呆地看着这边。

死寂持续了大约五秒。

然后，窃窃私语像瘟疫一样扩散开来。

“那是……星野？”
“星野悠真？那个三年A班的？”
“他为什么穿女装……”
“等等，那是女装吗？那是我们学校女生的制服啊！”
“他疯了？”
“不……你们不觉得……有点好看吗？”
最后那句话不知道是谁说的，但像一颗石子投进平静的湖面，激起了层层涟漪。

悠真能感觉到那些目光像有实质般粘在身上。他加快了脚步，几乎是拖着铃音往教学楼跑。白色丝袜包裹的小腿在晨光里快速交替，裙摆扬起危险的弧度。

冲进教学楼后，他没有去自己的教室，而是直接躲进了二楼的男厕所。反锁隔间门，背靠着冰凉的门板大口喘气。

外面传来脚步声和议论声。

“看到了吗？刚才跑过去那个……”
“看到了……我的天，星野那家伙……”
“他是受什么刺激了吗？”
“说不定本来就是变态……”
“可是……你们不觉得，他穿那样，腿还挺好看的？”
“喂喂，你什么取向啊？”
“不是！就……客观评价！”

悠真捂住耳朵，不想再听。他能感觉到小腹深处的温热感在扩散，后穴的空虚感越来越强烈。那颗药丸……到底是什么？为什么身体会这么不对劲？

隔间外突然安静了。

然后，是铃音的声音，温柔得近乎诡异。

“哥哥？你在里面吗？该去教室了哦。”

悠真咬住嘴唇，没有回应。

“哥哥，再不出来，就要迟到了。”铃音的声音里带上一丝警告，“如果迟到的话，老师会问原因哦。到时候，我要怎么解释呢？说哥哥因为穿女装害羞，躲在厕所里不敢出来？”

悠真猛地拉开门。

铃音站在门外，脸上带着恰到好处的担忧表情。几个围观的男生立刻散开了，但眼神还在往这边瞟。

“走吧。”铃音牵起他的手，声音提高了些，确保周围人都能听到，“别怕，哥哥。无论你穿成什么样，你都是我哥哥。”

这句话像一句咒语，定住了在场所有人的猜测。

原来是因为家庭问题？是哥哥有什么心理障碍？妹妹在包容他？

同情的目光取代了部分惊诧。铃音恰到好处地红了眼眶，握紧了悠真的手：“哥哥，我们走。”

他们离开后，厕所里炸开了锅。

“听到了吗？是心理问题？”
“怪不得……平时就觉得星野有点娘。”
“他妹妹真好，这种时候还陪着他。”
“可是穿女装来学校也太……”
“你没听到吗？心理问题！要包容！”

铃音的计划，从这一刻开始，出现了第一个意外。

她原本想让悠真被当成变态，被孤立，被排斥。但她的那句“无论你穿成什么样”，以及那个恰到好处的红眼眶，把叙事引向了另一个方向——一个需要被包容、被理解的，有心理问题的可怜哥哥，和一个深爱哥哥、不离不弃的好妹妹。

而悠真对此一无所知。他只是被铃音牵着，像个提线木偶一样走进三年A班的教室。

踏进门的瞬间，教室里死一般寂静。

所有早读的学生都抬起头，目光齐刷刷地射过来。有人倒吸冷气，有人捂住了嘴，有人瞪大了眼睛。

班主任正站在讲台上准备点名，手里的名册“啪嗒”一声掉在了地上。

悠真站在原地，感觉全身的血液都冲到了头顶，然后又迅速褪去，留下冰凉的麻木。他能感觉到那些目光像针一样扎遍全身——脸颊，胸口，大腿，脚踝。白色丝袜在教室的日光灯下泛着细腻的光泽，黑色小皮鞋的鞋尖紧张地蹭着地面。

铃音松开了他的手，走到自己的座位坐下，仿佛这一切都与她无关。

班主任捡起了名册，清了清嗓子：“星野同学，你……”

他没说下去。因为不知道该说什么。批评？可是万一是心理问题呢？包容？可这毕竟是学校。

最后，他只是挥了挥手：“回座位吧。”

悠真低着头，快步走到自己的座位。坐下时，裙摆向上缩了一截，大腿几乎完全暴露。他立刻把裙子往下拉，但这个动作反而引起了更多注意——那些平时根本不会注意他的男生，此刻都盯着他裙摆下那双包裹着白色丝袜的腿。

第一节课是国语。老师走进教室，看到悠真时明显愣了一下，但没说什么，开始讲课。

悠真试图集中注意力，但做不到。身体里的温热感越来越明显，后穴的空虚感变成了明确的渴求。他能感觉到内裤已经被前液浸湿了一小块，粘腻地贴在下身。胸口的两点也因为衬衣布料的摩擦而挺立起来，在白色的布料下形成两个明显的凸点。

更要命的是，他能感觉到周围的视线。

左边的男生在偷看他的腿。右边的女生在偷看他的侧脸。后面的……后面的视线更直接，几乎要烧穿他的后背。

课间休息的铃声一响，悠真立刻想冲出教室。但已经晚了。

几个女生围了过来。不是嘲笑，不是鄙夷，而是……好奇？

“星野同学，你这个发卡好可爱，哪里买的？”
“丝袜的质地好好，是什么牌子的？”
“鞋子也很配！整套搭配得好棒！”
“那个……星野同学，你平时也喜欢这么穿吗？”

悠真张了张嘴，发不出声音。他看向铃音，妹妹正坐在座位上，低头看书，但手里的笔快要把纸戳穿了。

“我……”悠真终于挤出一个字，“不是……”

“没关系的！”一个短发女生立刻说，“我们不会歧视的！每个人都有穿衣自由！”

“对对对！而且星野同学穿这样，真的很……好看。”

“像个精致的洋娃娃。”

“皮肤好白，腿好细……”

女生们叽叽喳喳地围着他，像在围观什么稀有动物。悠真被挤在中间，手足无措。他能闻到各种洗发水和香水的味道，能看到那些亮晶晶的眼睛，能感觉到她们若有若无的触碰——碰他的发卡，碰他的领巾，甚至有人偷偷摸了摸他丝袜包裹的小腿。

“你们在干什么？”

铃音的声音突然插进来，冷得像冰。

女生们吓了一跳，散开了一点。铃音走过来，脸上挂着笑容，但眼睛是冷的。

“我哥哥今天不太舒服，需要休息。”她说，语气礼貌但不容置疑，“请大家让他一个人待会儿，好吗？”

“可是铃音同学，”那个短发女生说，“我们只是想关心一下星野同学……”

“那就用保持距离的方式来关心。”铃音的笑容淡了些，“谢谢。”

女生们面面相觑，最后还是散开了。铃音看向悠真，眼神复杂——有愤怒，有嫉妒，还有一种更深沉的东西。

“哥哥，”她俯身，在他耳边低声说，“你真是……总给我惊喜。”

说完，她转身回到了自己的座位。

悠真趴在桌子上，把脸埋进臂弯里。他能感觉到身体里的热度在攀升，后穴的渴求几乎要变成实质的疼痛。他想去厕所，想自己解决，但铃音肯定在看着他。

接下来的几节课，情况不仅没有好转，反而愈演愈烈。

第二节课后，有别的班级的人专门跑来看“那个穿女装的星野”。悠真躲在厕所隔间里，听到外面的人议论：

“真的穿了女装？”
“嗯！水手服！白丝！小皮鞋！”
“疯了吧？”
“可是听说是因为心理问题……”
“心理问题穿女装就能好吗？”
“不过说真的……他穿那样，还挺好看的。”
“你什么意思？”
“就……客观评价嘛！”

第三节课，情况更糟。有人偷偷拍了照片，传到了班级群里。照片里，悠真正低着头写字，侧脸线条柔和，睫毛很长，发卡上的蝴蝶结歪了一点，有种懵懂的可爱。白色丝袜包裹的小腿并拢着，脚踝纤细，黑色小皮鞋的鞋尖微微向内，是个不自觉的、害羞的姿势。

这张照片引爆了更多讨论。

“这是星野？不可能吧？”
“真的是他！我作证！”
“我的天……这……”
“其实……有点可爱？”
“喂喂，你们够了啊！”
“可是真的很可爱啊！像那种清纯系学妹！”

第四节课，悠真发现自己的抽屉里多了东西。

不是课本，不是作业，而是……信。

粉色的信封，白色的信封，浅蓝色的信封。有的折成心形，有的贴着贴纸。他偷偷打开一封，上面用娟秀的字迹写着：

「星野同学：今天看到你穿女装的样子，我没有觉得奇怪，反而觉得很勇敢。每个人都有做自己的权利。如果你需要倾诉，我随时都在。 ——二年C班 山本」

另一封：

「悠真君：其实我从一年级就开始注意你了。你总是安安静静的，很温柔。今天的你很不一样，但也很美。可以和我交往吗？ ——三年B班 佐藤」

又一封：

「给穿女装也超可爱的星野学长：我是高一的新生，今天在走廊看到你了！学长好漂亮！可以告诉我你的社交账号吗？ ——一年D班 铃木」

悠真看着那些信，手在发抖。他想撕掉，想扔掉，但最终只是把它们胡乱塞回抽屉深处。他能感觉到铃音的视线，像两道激光，要把他的后背烧穿。

午饭时间，悠真没有去食堂。他躲在教学楼天台，背靠着冰冷的水塔，抱着膝盖，把脸埋进去。

脚步声传来。

不是铃音。是高跟鞋的声音，清脆，有节奏。

悠真抬起头，看到一个不认识的女生。高年级的，长得很漂亮，及腰的长发，妆容精致。她手里拿着一个便当盒，走到悠真面前，蹲下。

“星野悠真？”她问，声音温柔。

悠真点点头。

“我是三年D班的早川理纱。”女生说，把便当盒递过来，“看你没去吃饭，这个给你。”

悠真没接：“不用了……”

“拿着吧。”早川坚持，“是我自己做的，不嫌弃的话。”

悠真只好接过。便当盒是粉色的，上面印着小熊图案。打开，里面是精致的饭团、玉子烧和小番茄，还摆成了可爱的造型。

“谢谢……”他小声说。

早川没有立刻离开，而是在他身边坐下。风吹过来，带来她身上淡淡的香水味。

“今天的事情，”她轻声说，“我都听说了。你很勇敢。”

悠真摇头：“不是勇敢……”

“那就是你本来的样子？”早川侧过头看他，眼睛很亮，“喜欢穿女装，喜欢被打扮得漂漂亮亮，喜欢被人注意？”

悠真不知道该怎么回答。他喜欢吗？不，他羞耻，他恐惧，他想立刻换掉这身衣服。但与此同时，身体里的那股热流，那些信，那些目光……又带来一种扭曲的、黑暗的快感。

早川笑了：“没关系，不用回答。我只是想告诉你，你很美。不是帅气，是美。像瓷器一样，脆弱又精致。”

她伸出手，指尖轻轻碰了碰悠真耳垂上的铃铛耳钉：“这个，很适合你。”

悠真猛地向后缩，耳钉被扯了一下，有点疼。

早川收回手，笑容淡了些：“抱歉，我越界了。不过……”她站起身，居高临下地看着他，“如果你需要帮助，或者想找人聊天，随时可以来找我。我在三年D班，靠窗最后一排。”

她说完就走了，高跟鞋的声音渐行渐远。

悠真还抱着那个便当盒，坐在天台上，大脑一片空白。

他不知道的是，天台的入口处，铃音正站在那里，手紧紧抓着门框，指甲几乎要抠进金属里。

她看到了全程。

看到那个早川理纱——学校里出了名的美女，人气甚至比她更高的校花级人物——给她的哥哥送便当，碰他的耳钉，说他美。

铃音的呼吸变得急促，眼底有什么东西在翻涌。但她没有冲上去，没有质问，没有发作。

她转身，离开了。

下午的课，悠真几乎没听进去一个字。身体里的热流越来越明显，后穴的空虚感变成了明确的、有节奏的收缩。他能感觉到内裤已经完全湿透了，前液甚至渗透了丝袜，在大腿内侧留下冰凉的湿迹。胸口的两点又硬又胀，摩擦着衬衣布料，带来细密的刺痛和快感。

而抽屉里的信，还在增加。

课间时，又有几个女生偷偷塞了信进来。甚至还有男生——不是恶作剧，而是认真的告白信，字迹工整，语气恳切。

悠真觉得自己快要疯了。他想要铃音，想要妹妹的触碰，想要被填满，想要被送上高潮。但铃音整个下午都没有看他一眼，没有跟他说一句话，仿佛他是个陌生人。

放学铃响的那一刻，悠真几乎是弹起来的。他想立刻冲回家，冲进浴室，冲掉这身衣服，冲掉这一天的记忆。

但铃音拦住了他。

不是粗暴地，而是温柔地。她走到他桌边，脸上带着担心的表情：“哥哥，今天还好吗？我们回家吧。”

她的声音不大，但足够让周围的人都听到。几个还没离开的同学投来同情的目光——看看，多好的妹妹，哥哥都这样了还不离不弃。

悠真看着铃音的眼睛，想从里面找到一丝真实的情绪。但那双漂亮的眼睛里只有温柔的担忧，完美得像个面具。

“嗯……”他小声应道，收拾书包。

走出教室时，他能感觉到背后的目光。同情，好奇，还有……羡慕？羡慕他有这样一个妹妹？

走廊上，早川理纱正和几个女生说话。看到悠真和铃音，她微笑着点了点头。

铃音也回以微笑，但握着悠真手腕的手，力道大得像要把他的骨头捏碎。

走出教学楼，穿过操场，走到旧校舍附近时，铃音突然停下了脚步。

“哥哥，”她说，声音依然温柔，“我有东西忘在旧校舍的音乐教室了。陪我去拿一下，好吗？”

悠真想拒绝，但铃音的眼神里有某种他无法抗拒的东西——不是威胁，而是一种更深沉的、近乎绝望的期待。

“好……”他说。

旧校舍比上次来的时候更破败了。墙皮脱落得更厉害，窗户上的灰尘积了厚厚一层。他们走上三楼，音乐教室的门虚掩着。

铃音推开门，让悠真先进去，然后反手锁上了门。

锁扣合上的声音，在空旷的教室里格外清晰。

悠真转过身，看到铃音脸上的笑容消失了。取而代之的，是一种他从未见过的、混合着愤怒、嫉妒和欲望的表情。

“哥哥，”她说，声音很轻，但每个字都像刀子，“今天过得开心吗？”

悠真后退一步，背靠上了钢琴。琴键被压到，发出低沉的和弦。

“被那么多人围着，被夸可爱，被送便当，被写情书……”铃音一步步走近，校服裙摆随着步伐轻轻晃动，“连早川理纱那种级别的美女都来勾搭你。哥哥，你心里，是不是很得意？”

“我没有……”悠真摇头，眼泪涌了上来，“我没有得意……”

“那为什么？”铃音突然提高了音量，声音在教室里回荡，“为什么我让你穿女装，想让你被当成变态，被孤立，被排斥……结果却相反？你变得更受欢迎了？为什么？！”

她抓住悠真的领巾，用力一扯。蝴蝶结散开，领巾滑落在地。

“连穿女装都这么可爱，”铃音的手指抚上悠真的脸颊，力道大得像要捏碎他，“连当变态都当得这么招人喜欢。哥哥，你告诉我，我到底要怎么做，才能让你只属于我一个人？”

悠真说不出话，只是哭。

铃音盯着他看了很久，然后，她松开了手。

“脱掉。”她说，“全部。”

悠真颤抖着手，开始解衬衣扣子。一颗，两颗，三颗……衬衣敞开，露出里面白皙的皮肤和那对小巧的、A罩杯的胸部。乳头是淡粉色的，因为一天的摩擦和兴奋，已经完全挺立，乳晕微微肿胀。

然后是裙子。拉链拉下，百褶裙滑落在地，露出底下被白色丝袜包裹的臀部和双腿。丝袜的袜口勒在大腿根，留下一圈深红的勒痕。内裤已经被前液完全浸湿，深色的痕迹在浅色布料上格外刺眼。

最后是鞋子和丝袜。悠真坐在钢琴凳上，弯腰脱掉小皮鞋。脚从鞋子里抽出来时，白色丝袜的袜尖已经湿了一小块——那是脚汗和紧张的证明。他小心地将丝袜卷下来，从大腿开始，到膝盖，到脚踝，最后从脚尖褪下。

一双赤裸的脚暴露在空气中。

脚型很漂亮，瘦长但不骨感，脚背的皮肤薄得能看见底下淡青色的血管。足弓曲线优美，脚跟圆润。十根脚趾修长匀称，趾甲修剪得整齐干净，透着健康的淡粉色。因为紧张和寒冷，脚趾微微蜷缩着，脚掌心泛着运动后的潮红。

铃音盯着那双脚看了很久，然后，她抬起自己的脚，开始脱鞋袜。

她今天穿的是普通的黑色乐福鞋和白色短袜。脱掉后，她也赤着脚，走到悠真面前。

两人赤脚站在布满灰尘的地板上，脚掌接触冰凉的地面，都微微瑟缩了一下。

“躺下。”铃音说，指着教室中央那块相对干净的地板。

悠真照做。他躺下来，地板很硬，很凉。他仰望着天花板，上面有剥落的墙皮和水渍形成的奇怪图案。

铃音跪坐在他腿间，双手捧起他的脚，仔细端详。

“这么可爱的一双脚，”她低声说，“今天被多少人看到了？被多少人想象过摸上去的触感？”

悠真摇头，脚趾因为羞耻而蜷缩得更紧。

“不准蜷。”铃音命令，手指用力掰开他的脚趾，“伸开。”

悠真照做。十根脚趾被迫展开，露出趾缝间细腻的皮肤。

铃音看了很久，然后，她抬起自己的双脚，脚心相对，夹住了悠真硬挺的性器。

悠真倒抽一口气。

这个姿势太羞耻了。铃音的脚心温热，皮肤细腻，脚掌的弧度刚好能包裹住他的柱身。她调整了一下角度，让两只脚的脚面相对，像合十的手掌一样，把他的性器夹在中间。

然后，她开始动。

不是上下套弄，而是……挤压、摩擦。两只脚掌相对，夹着他的性器，像搓揉什么似的，来回摩擦。脚心的皮肤很软，但脚骨的硬度又能带来足够的压力。

“嗯……”悠真发出细微的呻吟。这种刺激很陌生，但很有效。脚掌的摩擦不像手那么直接，但那种包裹感和挤压感，带来另一种层次的快感。

尤其是当铃音用大脚趾的趾腹，刻意按压他龟头下方最敏感的系带时——

“啊！”悠真弓起背，前端又渗出更多液体，润滑了两人脚掌之间的摩擦。

“滋……啾……沙……”

水声和摩擦声混合在一起，在空旷的教室里回荡。铃音的脚很灵活，时而用力挤压，时而轻轻摩擦，时而用脚趾夹住冠状沟刮擦。她的眼睛一直盯着悠真的脸，看着他脸上的表情从羞耻变成迷离，从迷离变成渴求。

悠真的呼吸越来越急促。他能感觉到快感在迅速累积，小腹深处的热流随着摩擦而翻涌。后穴传来强烈的空虚感，肠液不受控制地渗出来，在臀缝间积了一小滩。

“要……要去了……”他哑着声音说。

“不准。”铃音立刻停下动作，脚掌依然夹着他的性器，但不再摩擦，“我说可以，哥哥才能射。”

悠真咬住嘴唇，眼泪流进头发里。高潮被生生打断的痛苦，比单纯的欲望更折磨人。

铃音松开脚，俯身，吻住了他。

这个吻比任何时候都激烈。铃音的舌头像暴风雨一样扫过他的口腔，牙齿磕碰，呼吸交缠。悠真被动地承受着，手无助地抓住地板上的灰尘。

吻了很久，铃音才退开。她的嘴唇红肿，眼睛里燃着暗火。

“现在，”她说，声音沙哑，“该做正事了。”

她站起身，脱掉了自己身上所有的衣服——校服，内衣，内裤。那根尺寸惊人的阴茎已经完全勃起，顶端渗出透明的液体，在昏暗的光线下泛着水光。

然后，她重新跪在悠真腿间，但没有立刻进入。

而是，她抬起悠真的双腿，架在自己肩上。

这个姿势让悠真完全暴露，后穴那个还在微微张合的小口正对着铃音。肠液不断渗出，在空气中拉出淫靡的细丝。

铃音盯着那里看了几秒，然后，她没有任何预警，没有任何扩张，直接挺腰，整根没入。

“啊——！！！”悠真尖叫起来，指甲抠进地板，留下几道白痕。

太粗暴了。没有润滑，没有适应，就像一根烧红的铁棍直接捅进身体里。撕裂般的痛感让他眼前发黑，但随之而来的是无与伦比的满胀感——那种他渴望了一整天的，被填满的感觉。

铃音没有给他适应的时间。她立刻开始抽插，每一下都又深又重，像是要把悠真钉在地板上。

“噗嗤！噗嗤！噗嗤！”

响亮的水声混合着肉体撞击声，在教室里回荡。灰尘被震得飞扬起来，在从破窗户透进来的夕阳光线里舞动。

悠真仰着头，大口喘息，眼泪流个不停。太痛了，但也太爽了。粗暴的进入和抽插带来了超越以往的刺激，每一次撞击都精准地碾过前列腺，每一次抽出都带出大量的体液。

铃音的手撑在他头两侧的地板上，俯视着他。汗水从她的下巴滴落，落在悠真脸上。

“今天，”她喘息着说，腰部的动作不停，“早川理纱碰你哪里了？”

悠真摇头，说不出完整的话。

“耳朵？”铃音狠狠撞入，“她碰了你的耳朵，对吧？碰了我的耳钉？”

“啊……！没……没有……”

“她给了你便当？”又一下重击，“好吃吗？比我做的好吃？”

“不……不是……”

“她夸你美？”铃音的眼睛红了，不知道是汗水还是泪水，“说你像瓷器？说我哥哥……是她的？”

“不是……啊……！是你的……一直是你的……”

“那为什么！”铃音突然吼了出来，腰部的动作变得更加狂暴，“为什么你要对她笑！为什么你要接她的便当！为什么你要让她碰你！”

她每问一句，就狠狠撞一下。悠真被顶得在地板上滑动，背摩擦着粗糙的地面，火辣辣地疼。

“对不起……对不起……”悠真哭着道歉，手抓住铃音的胳膊，指甲陷进她的皮肤里，“我错了……我不该接……不该让她碰……”

“那些信呢？”铃音的声音里带上了哭腔，“抽屉里那些情书，你都看了吧？是不是很开心？有那么多人喜欢你，想跟你交往？”

“没有……我没看……真的没看……”

“撒谎！”铃音低头，咬住了悠真的肩膀。牙齿陷进皮肤，留下深深的齿印。鲜血渗出来，混合着汗水，味道咸腥。

悠真痛叫一声，但身体却因为疼痛而更加兴奋。前端又硬了几分，随着铃音的抽插而不断晃动，吐出清液。

“哥哥是我的。”铃音松开口，舔掉伤口渗出的血，“从头发到脚趾，从皮肤到骨髓，每一寸都是我的。不准给别人看，不准让别人碰，不准……对别人笑。”

她说着，腰部的动作突然慢了下来。不是停止，而是变成了缓慢但极深的抽插。每一下都顶到最深处，龟头嵌进那个敏感点，然后缓缓抽出，再缓缓进入。

这种慢节奏的折磨比粗暴的撞击更致命。悠真感觉自己快要疯了，快感像温水煮青蛙一样缓慢累积，却找不到释放的出口。

“铃音……求你了……”他哭着哀求，“让我射……我想射……”

“求我什么？”铃音低头吻他，舌头扫过他的牙齿。

“求……求你让我射……”

“说完整。”

悠真羞耻得浑身发抖，但还是说了出来：“求……求妹妹用鸡巴操我……让我射精……”

铃音满意地笑了。她加快了速度，重新变回粗暴的节奏，同时手伸下去，握住了悠真湿漉漉的性器，开始套弄。

三重刺激——后面的撞击，前面的套弄，还有心理上的羞辱和征服——让悠真的理智迅速崩毁。

他尖叫着达到了高潮。这一次射得很多，精液呈弧线喷射，落在自己的小腹、胸口，甚至溅到了下巴上。后穴也同时剧烈收缩，绞紧了铃音的阴茎，带来强烈的快感。

铃音在他高潮的瞬间，也到了极限。她狠狠撞入最深处，龟头嵌进那个点，然后，炽热的精液猛烈喷射，灌满了悠真的肠道。

“嗯啊啊啊——！”

两人一起达到了顶峰。

铃音趴在他身上，剧烈喘息。悠真还躺在地板上，眼神涣散，浑身都在颤抖。后穴不断有混合的体液涌出，在地板上积了一小滩。

许久，铃音才慢慢退出。她坐起来，看着地板上的一片狼藉，以及躺在狼藉中央、浑身痕迹的悠真。

夕阳光从破窗户照进来，给一切镀上一层金红色的光。灰尘在光线里缓慢飞舞。

铃音伸手，轻轻抚摸悠真肩膀上的齿印。

“痛吗？”她问。

悠真摇头，又点头。

铃音俯身，舔了舔那个伤口，然后吻了吻悠真的额头。

“这是印记。”她低声说，“我的印记。以后看到这个，就要想起今天。想起你是谁的。”

悠真闭上眼睛，眼泪又流了出来。

铃音没有再说话。她站起身，开始穿衣服，然后帮悠真也穿好。那套水手服已经皱得不成样子，丝袜也破了几个洞，小皮鞋上沾了灰尘。

但她没有让悠真换掉。

“就这样回去。”她说，“让所有人都看到，哥哥被我玩成了什么样。”

悠真没有反对。他已经没有力气反对了。

两人走出旧校舍时，天已经快黑了。校园里空荡荡的，只有几个社团活动结束的学生在往校门走。

他们看到悠真时，都愣了一下。

衣服凌乱，丝袜破了，走路姿势怪异，脸上还带着泪痕和高潮后的红晕。肩膀上那个明显的齿印从敞开的领口露出来，在暮色里泛着深红色。

而铃音，牵着他的手，脸上带着温柔的微笑，仿佛刚才在旧校舍里发生的一切都不存在。

“哥哥不小心摔倒了。”她对一个好奇看过来的女生解释，“我扶他去医务室了。”

女生信了，还关心地问：“没事吧？看起来很严重。”

“没事的，休息一下就好。”铃音笑着说，握紧了悠真的手。

走出校门，走上回家的路。路灯一盏盏亮起来，把两人的影子拉长又缩短。

悠真走得很慢，每一步都牵动着身体各处的酸痛。后穴里还残留着精液，随着步伐微微晃动。胸口被咬的地方火辣辣地疼。而小腹深处那股温热感……不仅没有消退，反而似乎更明显了。

那颗药丸。

到底是什么？

他看向铃音，妹妹正看着前方，侧脸在路灯下显得柔和又美丽。她察觉到他的视线，转过头，对他笑了笑。

那个笑容，温柔得让人心颤。

但悠真知道，在那温柔底下，是深不见底的黑暗和偏执。

他握紧了铃音的手。

无论底下是什么，他都逃不掉了。

也不想逃。

路灯下，两个牵着手的身影渐行渐远。

而在悠真体内，那颗白色的药丸，正在慢慢溶解，释放出某种尚未可知的东西。

夜晚，还很长。`,kd=Object.freeze(Object.defineProperty({__proto__:null,default:$d},Symbol.toStringTag,{value:"Module"})),Pd=`---
order: 7
---

# #7 铃音的小穴与温柔的引导

药停的第一天，早晨醒来时，悠真最先感到的是一种空荡荡的轻盈感。

不是物理上的轻盈，而是身体深处某个持续了数日的、温热的充盈感消失了。就像一直有人在体内点燃一盏小小的灯，现在那盏灯突然熄灭了。他躺在床上，手不自觉地覆在小腹上，那里平坦柔软，皮肤细腻，A罩杯的胸部随着呼吸微微起伏——那对小巧的乳房经过几个月若有若无的揉捏，似乎真的比最初圆润了一些，乳晕的颜色也加深成了更诱人的淡樱色。

门被轻轻推开，铃音端着早餐托盘进来。她今天没有穿睡衣，而是换上了一件浅粉色的居家吊带裙，裙摆很短，刚过大腿中部，露出白皙修长的双腿。头发松松地扎成侧马尾，发尾垂在肩头，几缕碎发落在颊边。

“早安，哥哥。”她的声音比平时更软，眼睛弯成月牙，整个人散发着一种近乎甜腻的温柔。

悠真坐起身，有些困惑地看着她：“铃音……今天不用去学校吗？”

“请假了。”铃音把托盘放在床头柜上，自己也在床边坐下，距离近得能闻到她身上淡淡的、混合着沐浴露和体香的甜味，“我们好久没一起在家待一整天了，不是吗？”

她端起牛奶杯，递到悠真唇边：“来，先喝牛奶。”

悠真顺从地喝了一口。牛奶温热，加了蜂蜜，甜度刚好。铃音看着他吞咽时喉结滚动的样子，眼神暗了暗，但很快又恢复了那种软绵绵的笑意。

“哥哥今天感觉怎么样？”她问，手指自然地撩开悠真额前的碎发，“身体有没有哪里不舒服？”

悠真想了想，摇头：“没有……就是觉得，好像少了点什么。”

“少了药吗？”铃音歪着头，马尾滑到一侧，露出纤细的脖颈和锁骨。

“嗯……那种热热的感觉没有了。”

铃音笑了，凑近在他唇角亲了一下：“那不是很好吗？证明哥哥的身体已经恢复健康了。”

她的吻很轻，像羽毛拂过，却让悠真心跳漏了一拍。今天的铃音太反常了——不是愤怒，不是掌控，而是一种……黏稠的、甜美的亲近。像一块融化中的太妃糖，要把人包裹进去。

早餐后，铃音没有让悠真换衣服，而是拉着他去了客厅。窗帘半拉着，室内光线柔和。她把悠真按在沙发上，自己则跨坐在他腿上。

这个姿势让两人面对面，距离近得呼吸可闻。铃音的吊带裙很薄，悠真能透过布料感觉到她身体的温度和柔软的曲线。而他自己只穿着宽松的居家短裤和T恤，大腿皮肤直接贴着铃音裙下光裸的腿。

“铃音……”悠真有些不安地动了动。

“嘘。”铃音伸出食指，轻轻压在他唇上，“今天，我们玩一个新游戏。”

她的眼睛很亮，像含着一汪春水，但眼底深处有某种悠真看不懂的兴奋和紧张。

“什么……游戏？”悠真问，声音有点哑。

铃音没有立刻回答。她低头，开始解悠真T恤的扣子——他穿的是一件有纽扣的睡衣款T恤。她的动作很慢，指尖偶尔擦过他胸口的皮肤，带来细微的战栗。

扣子一颗颗解开，悠真白皙的胸膛逐渐暴露在空气中。那对小巧的乳房完全露出来，淡粉色的乳头在微凉的空气中立刻挺立起来，像两颗熟透的小樱桃。

铃音盯着看了很久，然后伸出手，用指尖轻轻拨弄左边的那颗。

“哥哥的奶子，”她低声说，声音里带着笑意，“真的变可爱了呢。虽然还是小小的，但形状很漂亮，颜色也好看。”

悠真脸红了，想并拢手臂遮挡，但铃音抓住了他的手腕。

“不准遮。”她说，然后俯身，含住了右边那颗乳头。

“嗯……”悠真发出一声短促的呻吟。

铃音含得很轻，不像以前那样用力吮吸，而是用舌尖细细地舔舐，绕着乳晕打圈，偶尔用牙齿轻轻刮擦乳尖。那种酥麻的痒感让悠真浑身发软，前端在宽松的短裤里悄悄抬头。

吻了一会儿胸部，铃音抬起头，嘴唇湿润，眼睛更亮了。她的手往下滑，隔着短裤，覆上了悠真已经半硬的性器。

“这里也变精神了呢。”她笑着说，手指隔着布料轻轻按压，“是因为我在舔哥哥的奶子吗？”

悠真咬住嘴唇，不敢回答。

铃音也不在意。她继续手上的动作，另一只手则开始脱自己的吊带裙。肩带滑下，浅粉色的布料缓缓褪去，露出底下白皙的皮肤和黑色的蕾丝内衣。

她今天穿的内衣很特别——不是平时那种运动款或者简约款，而是成套的、极其精致的蕾丝内衣。黑色的薄纱上缀着细小的珍珠，半透明的罩杯刚好托住她小巧但形状优美的胸部，中间的深沟若隐若现。配套的内裤也是同款，丁字裤的设计，后面只有一根细带子。

悠真看得愣住了。他知道铃音好看，但今天的好看……带着一种精心设计的、诱惑的美。

铃音注意到他的目光，嘴角勾起一个得意的弧度：“哥哥喜欢吗？”

悠真点头，喉咙发干。

“那……想要碰吗？”铃音拉起他的手，放在自己胸口，“想摸我吗？”

悠真的指尖触碰到蕾丝布料，触感细腻，底下是温热柔软的肌肤。他犹豫了一下，然后慢慢收紧手指，握住了那团柔软的乳肉。

手感很好，比他的大，但也不夸张，刚好能盈满一手。乳头隔着蕾丝挺立着，抵着他的掌心。

铃音发出一声满足的叹息，腰肢轻轻扭动，摩擦着悠真腿间越来越硬的部位。

“哥哥的手好温柔……”她低声说，然后开始解悠真的短裤。

短裤和内裤一起被褪下，悠真完全赤裸的下身暴露出来。性器已经完全勃起，颜色深红，顶端渗出清亮的液体，在晨光里泛着水光。

铃音盯着看了一会儿，然后做了一个让悠真意想不到的动作——

她握住悠真的手，引导着，让他握住自己的性器。

不是让他自慰，而是……让他握着，然后她把自己的手覆在他的手上，两人一起握住那根硬挺的柱身。

“我们一起。”铃音在他耳边说，温热的气息喷在耳廓，“哥哥感受一下，自己有多硬，多热。”

悠真的手被她引导着，上下套弄。他能清晰地感觉到自己性器的硬度，温度，还有顶端不断渗出的湿滑液体。这种被自己握着、又被铃音的手覆着的双重触感，格外刺激。

套弄了一会儿，铃音松开了手。但她没有让悠真停下，而是说：“继续，哥哥自己来。让我看看，哥哥是怎么让自己舒服的。”

悠真脸更红了，但还是照做了。他握着性器，开始缓慢地上下撸动。因为紧张和羞耻，动作有些僵硬，但快感还是忠实地传来。

铃音跪坐在他腿间，专注地看着他的动作。她的呼吸渐渐急促，手也不自觉地抚摸着自己的大腿，指尖偶尔划过内裤边缘。

“哥哥的手势……”她喘息着说，“好色情……看着就好舒服……”

悠真被她看得快要受不了了，动作加快了些。前端渗出的液体越来越多，润滑了手掌和柱身之间的摩擦，发出细微的水声。

“滋……啾……”

就在悠真觉得快要到边缘时，铃音突然按住了他的手。

“停。”她说，眼睛亮得惊人，“现在，轮到我了。”

她站起身，在悠真困惑的目光中，转身背对着他，然后缓缓弯下腰，双手撑在沙发靠背上。

这个姿势让她浑圆的臀部完全翘起，黑色的丁字裤细带深陷进臀缝，几乎看不见，只露出两瓣白皙饱满的臀肉。而前面……悠真能看到她双腿间，那个他从未真正注意过的地方。

在阴茎的下方，两腿交汇处，有一个小小的、粉嫩的入口。被黑色的蕾丝内裤边缘半遮着，能看到入口处湿润的水光，和微微张合的动作。

铃音侧过头，看着呆住的悠真，脸上泛起红晕——这次不是伪装，是真的害羞。

“哥哥看到了吗？”她的声音比平时更软，带着一丝颤抖，“这里……是我的小穴。从来没被用过的小穴。”

悠真的大脑一片空白。

他当然知道铃音是扶她，有男性的器官也有女性的器官。但之前，铃音只用过阴茎，从未提及过这个女性部分。他甚至……从未仔细看过。

而现在，那个粉嫩的小口正对着他，随着铃音的呼吸微微翕动，洞口处渗出透明的液体，在晨光里闪着晶莹的光。

“它……”悠真艰难地开口，“它在流水……”

“嗯。”铃音的声音更小了，“因为……想要哥哥。想被哥哥……进去。”

最后几个字几乎轻不可闻，但悠真还是听清了。他感觉全身的血液都在往头顶和下身冲，刚刚稍有软化的性器瞬间又硬得发痛。

“可是……”他不知所措，“我……我不知道怎么做……”

“很简单。”铃音保持着那个姿势，手往后伸，轻轻分开自己的臀瓣，让那个小口暴露得更清楚，“哥哥只要……把那个硬硬的东西，对准这里……然后慢慢地……推进来。”

她说得轻描淡写，但悠真能看到她撑在沙发上的手在微微发抖。

“铃音……”悠真跪起来，凑近那个粉嫩的入口，“你确定吗？会不会痛……”

“会痛的。”铃音打断他，侧过脸，眼睛湿漉漉地看着他，“因为是第一次，肯定会痛。但是……”

她咬住嘴唇，然后轻声说：“但是我想让哥哥痛。也想为哥哥痛。我们……一起痛，好不好？”

这句话像一把钥匙，打开了悠真心里某个一直上着锁的盒子。他不再犹豫，伸出手，颤抖着，轻轻碰了碰那个湿滑的入口。

指尖触到的瞬间，铃音浑身一颤，发出一声细微的呜咽。小穴又涌出一股液体，顺着腿根流下来。

“好热……”悠真低声说，手指试探性地往里探了一点。入口很紧，但很湿滑，内壁温热柔软，像有生命般轻轻吮吸着他的指尖。

“啊……”铃音仰起头，脖颈拉出优美的线条，“哥哥的手指……好舒服……”

悠真抽出手指，上面已经沾满了透明的爱液。他握住自己硬挺的性器，用顶端蹭了蹭那个湿滑的入口。

铃音的身体绷紧了。

“哥哥……”她喘息着说，“慢一点……轻轻地……”

悠真点头，尽管铃音看不到。他调整角度，让龟头抵住那个小小的洞口，然后，缓缓施加压力。

进入的过程，比想象中更艰难。

铃音的小穴太紧了，即使已经湿得一塌糊涂，入口还是紧紧箍着他。悠真只推进了一个龟头，就感觉像是被最温热最柔软的丝绸紧紧包裹，舒服得他头皮发麻。

而铃音……她发出一声短促的、带着痛楚的呻吟，撑在沙发上的手猛地收紧，指甲陷进布料里。

“疼吗？”悠真立刻停下，不敢再动。

“疼……”铃音的声音带着哭腔，但她的手却往后伸，抓住了悠真的手腕，“但是……继续……哥哥……全部进来……”

悠真咬咬牙，腰肢继续往前送。

一寸，两寸。他能感觉到铃音内部紧致湿润的包裹，内壁随着他的进入而微微颤抖，像是欢迎又像是抗拒。每推进一点，铃音就发出一声压抑的呜咽，身体抖得更厉害。

终于，整根没入。

两人都僵住了。

悠真完全进入了铃音体内，最深的地方。他能感觉到自己的性器被彻底包裹，温暖、紧致、湿润，每一次脉搏的跳动都清晰可感。而铃音……她趴在那里，大口喘息，身体因为疼痛和初次被填满的刺激而剧烈颤抖。

“全部……”她哑着声音说，“哥哥的……全部进来了……”

悠真俯身，抱住她的腰，脸埋在她汗湿的后颈：“铃音……你好紧……好热……”

“因为是第一次……”铃音转过头，眼角有泪水滑下，“只给哥哥的第一次……”

悠真心里的某处被狠狠触动。他吻去她眼角的泪，咸涩的味道在舌尖化开。

然后，他开始动。

一开始很慢，几乎是试探性的抽插。每次抽出到只剩龟头，再缓缓推入。每次进入，都能听到清晰的水声，和铃音压抑的呻吟。

“滋……啾……嗯啊……”

水声越来越响，因为铃音的爱液源源不断地涌出，润滑了交合处。悠真的动作也渐渐加快，从缓慢的试探变成有节奏的抽送。

“啊……哥哥……好深……”铃音的声音已经带上了哭腔和快感，之前的痛楚似乎渐渐被一种陌生的、强烈的刺激取代，“里面……好奇怪……啊……”

悠真也觉得很奇怪。和之前被进入的感觉完全不同，这次是他在进入。他能清晰地感觉到铃音内部每一寸的紧致和湿热，能感觉到自己性器摩擦过敏感点时的震颤，能感觉到铃音的收缩和吮吸。

那种掌控感和被包裹感交织在一起，带来前所未有的快感。

他的手从铃音腰间滑下，摸到她的小腹——那里微微凸起，能隐约感觉到自己性器的形状。这个认知让他更加兴奋，动作也变得更加用力。

“噗嗤！噗嗤！噗嗤！”

响亮的水声在客厅里回荡，混合着肉体撞击声和两人的喘息呻吟。铃音被撞得前后晃动，胸前的乳房随着节奏摇摆，黑色的蕾丝内衣已经湿透，紧贴在皮肤上。

“哥哥……再重点……”铃音哭着哀求，手往后伸，胡乱地抓着悠真的大腿，“操我……用力操我……”

悠真被这句话刺激得眼睛发红。他抓住铃音的腰，开始全力冲刺。每一次进入都又深又重，像是要把她钉在沙发上。龟头狠狠撞上最深处那个柔软的点，引起铃音一阵阵尖叫。

“啊！那里……啊！哥哥……撞到那里了……！”

悠真不知道“那里”是哪里，但他能感觉到每次撞到那个点时，铃音的整个身体都会剧烈颤抖，内壁会紧紧绞住他，像是要把他吸进去。于是他专门对准那个点，一次次撞击。

“啊！啊！不行了……哥哥……我要……我要去了……”

铃音的声音已经支离破碎。她的手胡乱地抓挠着沙发，腿软得几乎站不住，全靠悠真从后面抱着她才没滑下去。

悠真也快到极限了。铃音内部的紧致和湿热，加上那种掌控的快感，让他积累的速度比以往任何一次都快。

“铃音……我也要……”他喘息着说，动作更加狂暴。

“一起……”铃音哭着说，“哥哥……我们一起……”

最后的几下冲刺，两人几乎是用尽全力的。悠真狠狠撞入最深处，龟头抵着那个敏感点，然后，一股炽热的精液猛烈喷射，灌满了铃音的子宫。

几乎同时，铃音也达到了高潮。她尖叫着，身体剧烈痉挛，内壁疯狂收缩，挤压着悠真还在射精的性器。前面的阴茎也射了出来，精液喷射在沙发靠背上，发出“噗滋”的声音。

高潮持续了十几秒才慢慢平息。悠真还保持着进入的姿势，趴在铃音背上，大口喘气。铃音则完全瘫软在沙发上，浑身都在颤抖。

许久，悠真才慢慢退出。

“啵”的一声轻响，混合着精液和爱液的液体从铃音的小穴里涌出来，顺着大腿流下，滴在沙发上。

悠真看着那片狼藉，突然感到一阵强烈的不真实感。他……刚才真的进入了铃音？进入了那个从未被使用过的地方？

铃音翻过身，躺在沙发上，双腿大张，那个粉嫩的入口还在微微张合，不断有白浊的液体流出。她看着悠真，脸上带着高潮后的红晕和泪水，但眼睛很亮。

“哥哥……”她伸出手。

悠真握住她的手，在她身边躺下。沙发很窄，两人只能紧紧贴在一起。

铃音把头靠在他胸口，听着他剧烈的心跳。

“疼吗？”悠真问，手指轻轻抚摸她的小腹。

“疼。”铃音诚实地说，“但是……也很舒服。被哥哥填满的感觉……很好。”

悠真抱紧了她。

“以后……”铃音的声音很轻，“这里也只给哥哥用。好吗？”

“好。”悠真吻了吻她的额头，“我的这里……也只给铃音。”

两人在沙发上躺了很久，直到阳光从窗帘缝隙挪到了地板上。

铃音先起身，腿软得差点摔倒，悠真赶紧扶住她。两人互相搀扶着去了浴室，清洗身体。

洗澡时，铃音的小穴又流出了不少精液，混着血丝——那是处女膜破裂的痕迹。悠真看到了，心里涌起一种复杂的情绪：占有欲，怜惜，还有一丝罪恶感。

但铃音似乎毫不在意。她帮悠真洗头发，手指温柔地按摩他的头皮，然后在他耳边轻声说：“哥哥今天……很棒。”

悠真脸红了。

洗完澡，两人裹着浴巾回到房间。铃音从抽屉里拿出药膏——不是之前那种，而是更温和的修复膏。

“帮我涂。”她躺在床上，双腿分开，毫无羞耻地把那个还红肿的小穴暴露在悠真面前。

悠真跪在她腿间，手指沾了药膏，小心翼翼地涂在入口处。指尖碰到时，铃音轻轻颤了一下。

“疼吗？”悠真立刻停下。

“有点。”铃音说，但她的手却按住了悠真的手，让他继续，“但是……喜欢哥哥碰这里。”

悠真继续涂抹。药膏凉凉的，很快缓解了红肿。涂完后，他没有立刻抽回手，而是用手指轻轻按摩周围，动作温柔得像在对待易碎的瓷器。

铃音看着他专注的样子，突然笑了。

“哥哥。”她叫。

“嗯？”

“今天是我勾引你的。”

“我知道。”

“那你……喜欢吗？”

悠真抬起头，看着她。铃音的眼睛很清澈，没有平时的掌控和算计，只有单纯的、期待答案的紧张。

他俯身，吻了吻她的小腹。

“喜欢。”他轻声说，“最喜欢铃音了。”

铃音的眼睛瞬间亮了。她拉过悠真，让他躺在自己身边，然后钻进他怀里，像只餍足的猫。

“那以后……”她小声说，“我们经常这样玩，好不好？”

“好。”

“我还可以教哥哥更多……怎么让我舒服的方法。”

“好。”

“哥哥也要学……怎么让我更舒服。”

“好。”

铃音满意地笑了。她闭上眼睛，很快睡着了。

悠真抱着她，听着她均匀的呼吸，心里某个地方软得一塌糊涂。

今天的铃音……很不一样。不是妹妹，不是掌控者，而是一个……会把最脆弱的地方交给他的女孩子。

而他，想好好保护这个女孩子。

即使知道天亮后，她可能又会变回那个偏执的、掌控一切的妹妹。

但至少此刻，他们是平等的。

是互相交付的。

悠真闭上眼睛，也沉入了睡眠。

而在睡梦中，他的手无意识地覆在铃音的小腹上，像是在守护什么珍贵的宝物。

窗外，阳光正好。`,Td=Object.freeze(Object.defineProperty({__proto__:null,default:Pd},Symbol.toStringTag,{value:"Module"})),yd=`---
order: 8
---

# #8 雪白的蛹与新生之穴

醒来时，世界浸泡在一种不真实的柔软里。

悠真睁开眼睛，首先感觉到的是枕头的触感——不是熟悉的那种，而是更柔软、更贴合颈窝的弧度。他眨了眨眼，长长的睫毛扫过脸颊，痒痒的。窗外的晨光透过窗帘缝隙，在地板上切出一道金线，光里有细小的尘埃缓慢旋转。

他动了动手指，然后是手臂。抬起手时，袖子滑落，露出一截白皙到近乎透明的手腕。腕骨很纤细，皮肤下的青色血管清晰可见。指甲不知道什么时候变长了，修成了圆润的椭圆形，透着健康的淡粉色。

这不是他的手。

或者说，不完全是。

悠真猛地坐起来，被子滑落，清晨的凉意接触皮肤，让他打了个寒颤。他低头看向自己的身体——

胸口有两团明显的隆起。

不大，但确实存在。乳房的形状柔和，顶端是两颗淡粉色的乳头，乳晕比记忆中更大一些，颜色也更深。他颤抖着伸出手，指尖碰了碰左边的乳头。

“啊……”

细微的、甜腻的声音从喉咙里溢出来。不是他平时那种偏中性的声音，而是更柔软、更清亮的，带着女性特有的质感。

悠真捂住嘴，手指碰到嘴唇——嘴唇变厚了，更柔软，唇形也更精致。他跳下床，赤脚跑到穿衣镜前。

镜子里的人让他倒吸一口冷气。

还是那张脸，但……不一样了。轮廓更柔和，下颌线收得精巧，颧骨不再那么突出。皮肤白得发光，毛孔几乎看不见。眼睛变大了，睫毛又长又密，眼角微微下垂，有种无辜的、小动物般的神态。鼻子更小巧，鼻尖微翘。嘴唇饱满，唇色是自然的樱花粉。

而头发——黑色的长发已经垂到胸口，发质柔软顺滑，在晨光里泛着丝绸般的光泽。

但最可怕的变化，在下半身。

悠真颤抖着手，拉开睡裤的松紧带。

消失了。

那里原本存在的、作为男性象征的器官，完全消失了。取而代之的，是一片平坦的小腹，再往下，是……

是一条细缝。

粉色的、紧闭的细缝，隐藏在稀疏的、颜色很淡的毛发下。细缝上方有一粒小小的、珍珠般的凸起——阴蒂。再往下，是另一个开口，更小，更深，那是尿道口。而最下方，才是真正的、新生的女性器官入口——阴道口，此刻还紧紧闭合着，像一朵未绽放的花苞。

没有睾丸，没有阴茎。

什么都没有了。

悠真双腿一软，跪坐在地板上。他（还是她？）盯着镜子里的自己，大脑一片空白。那张陌生又熟悉的脸，那双变大的眼睛里蓄满了泪水，嘴唇颤抖着，却发不出任何声音。

就在这时，门开了。

铃音走进来，手里端着托盘。看到跪坐在地板上的悠真，她愣了一下，然后脸上慢慢绽开一个笑容——不是平时那种带着恶意的笑，而是一种纯粹的、近乎狂喜的满足。

“醒了？”她轻声说，把托盘放在床头柜上，然后走到悠真面前，蹲下，“哥哥……不对，现在该叫姐姐了。感觉怎么样？”

悠真抬起头，眼泪终于滑落：“我……我怎么了？”

“变成女孩子了。”铃音伸手，指尖轻轻擦过悠真的脸颊，“真正的女孩子。”

“药……那颗药……”

“嗯。”铃音点头，眼神温柔得令人心悸，“性转药。我从一个很特别的渠道买的。原本是打算……”她顿了顿，声音轻了些，“最初买它，是因为我想让哥哥变成‘正常人’。”

悠真怔住了。

“正常人？”她重复这个词，声音破碎。

“是啊。”铃音的手指抚过她新生的长发，动作轻柔得像在抚摸易碎的瓷器，“看着哥哥每天被欲望折磨，看着哥哥对着镜子里的自己哭泣，看着哥哥明明那么痛苦却还要对我笑……我想，如果哥哥变成女孩子，是不是就能摆脱那些了？是不是就能像普通女孩一样，正常地恋爱，正常地生活？”

她的眼神暗了暗：“可是后来我发现，我错了。”

铃音捧起悠真的脸，强迫她看着自己：“哥哥就算变成女孩子，也不会变成‘正常人’。因为哥哥从骨子里就是特别的。而且……”

她凑近，嘴唇几乎贴到悠真的耳朵：“而且我发现，这样的哥哥更适合。更适合被我爱，更适合被我占有，更适合……永远待在我身边。”

悠真闭上眼睛，眼泪流得更凶。她能感觉到铃音的体温，能感觉到自己身体的变化，能感觉到小腹深处那种奇异的、陌生的温热感——那是子宫的位置。

还有……那种熟悉的、但变得更强烈的渴望。

从醒来开始，她就感觉到了。不是后穴的空虚——那里已经不存在了——而是阴道深处的渴望。一种全新的、更复杂、更深层的渴望。像有什么东西在体内苏醒，在叫嚣，在渴求被填满。

“姐姐感觉到了吧？”铃音在她耳边低语，手慢慢往下，隔着睡裤，按在了那个新生的部位，“新的欲望。更强烈，更敏感，更……难以忍受。”

悠真咬住嘴唇，点头。她能感觉到铃音的指尖若有若无地按压着，隔着布料，带来细微的刺激。阴蒂的位置传来一阵酥麻，让她腿软。

“想试试吗？”铃音问，声音里带着诱惑，“新的身体，新的快感。”

悠真想拒绝，但身体已经先一步做出了反应——一股热流从子宫深处涌出，湿润了阴道口。她能清楚地感觉到那种湿意，那种陌生又熟悉的粘腻感。

铃音显然也感觉到了。她轻笑一声，拉着悠真回到床边，让她躺下。

“别怕，”她说，声音温柔得像在哄小孩，“我会很温柔的。”

她跪坐在悠真腿间，慢慢褪下她的睡裤和内裤。当那片新生的、完全女性化的部位完全暴露在空气中时，两人都沉默了。

晨光从窗户斜射进来，照亮了那一片隐秘的领域。

毛发很稀疏，颜色很淡，像初春草地上刚冒出的嫩芽。阴唇是粉色的，很薄，紧紧闭合着，像蝴蝶的翅膀。阴蒂小小的，藏在阴唇上方的包皮里，只露出一点珍珠般的光泽。尿道口很小，几乎看不见。而最下方，阴道口还紧紧闭合着，周围有一圈细小的褶皱，颜色比其他地方深一些，是更深的粉红色。

但最引人注目的，是那里已经湿了。

透明的、粘稠的液体从阴道口渗出来，在晨光里泛着水光。量不少，已经浸湿了周围的毛发和皮肤，拉出细细的银丝。

“已经湿成这样了……”铃音低声说，伸出手指，轻轻碰了碰阴道口。

悠真浑身剧烈一颤，发出一声短促的惊叫。那个部位的敏感度远超她的想象——只是轻轻一碰，快感就像电流一样窜遍全身。

铃音收回手指，指尖上沾满了透明的液体。她盯着那液体看了几秒，然后，做了一个让悠真完全没想到的动作——

她低下头，伸出舌头，舔了上去。

“啊——！！！”

悠真尖叫着弓起背，手指死死抓住床单。那不是舔，是……品尝。铃音的舌头宽而软，从阴道口开始，沿着湿滑的缝隙一路往上，扫过尿道口，最后停在阴蒂的位置，用舌尖轻轻拨弄那粒小小的凸起。

“嗯……唔……”

水声在安静的房间里格外清晰。铃音舔得很仔细，很慢，像在品尝什么珍馐美味。她的舌头时而轻轻扫过，时而用力按压，时而绕着阴蒂打圈。鼻尖偶尔蹭到周围的皮肤，带来冰凉的触感。

悠真已经彻底失神了。这种快感和以前完全不同——更细腻，更深入，更像从骨髓里渗出来的。她能清楚地感觉到铃音的舌头每一次移动的轨迹，感觉到湿热的触感，感觉到那个小小的阴蒂在舌头的拨弄下迅速充血、胀大，变得像一颗硬硬的小豆子。

“啊……铃音……不要……”她哭着说，手却抓住了妹妹的头发，不是推开，而是拉近。

铃音显然注意到了这个矛盾的动作。她低笑一声，舌头更用力地抵进阴蒂上方的包皮，开始快速地左右拨弄。

“滋……啾……嗯……”

淫靡的水声越来越大。悠真的体液分泌得越来越多，阴道口不断涌出透明的液体，顺着臀缝流下去，浸湿了床单。她能感觉到子宫在收缩，小腹深处传来一阵阵痉挛般的快感。

“要……要去了……”她哑着声音说，腰肢不受控制地向上挺动，想让那个部位更贴近铃音的舌头。

但铃音突然退开了。

快感骤然中断的痛苦让悠真发出哀鸣。她睁开湿漉漉的眼睛，看到铃音正跪坐在她腿间，嘴角还挂着透明的液体，眼神暗沉地看着她。

“现在还不行哦。”铃音说，声音沙哑，“哥哥要先学会，怎么用新的身体自慰。”

她用了“哥哥”这个称呼。

悠真愣住，眼泪停了一瞬。

铃音注意到了她的反应，嘴角勾起一个意味深长的笑：“怎么了？不喜欢我叫你哥哥？”

“不……只是……”

“只是什么？”铃音的手指再次碰了碰那个湿滑的入口，“就算身体变成了女孩子，哥哥也还是哥哥啊。是我最重要的哥哥。”

她顿了顿，补充道：“当然，也是我最可爱的姐姐。”

这种称呼的混用让悠真更加混乱。她分不清铃音到底把她当什么——是哥哥，还是姐姐？还是某种介于两者之间的、只属于铃音的存在？

铃音显然不打算解释。她站起身，走到梳妆台前，拿回了一面手持镜。然后，她重新跪坐下来，把镜子举在悠真腿间。

“看。”她说。

镜子里，那个新生的女性部位完全暴露。阴唇因为兴奋而微微张开，露出底下更深的粉色嫩肉。阴蒂已经完全充血勃起，有绿豆大小，在包皮下半露不露。阴道口湿滑一片，不断有透明的液体涌出，拉出细细的银丝。周围的毛发和皮肤都被打湿了，在晨光里泛着水光。

“这就是哥哥现在的样子。”铃音说，另一只手伸过来，食指的指尖轻轻按在阴蒂上。

悠真猛地一颤，镜子里，能看到那粒小东西在她的按压下凹陷又弹起。

“这里，”铃音说，指尖开始缓慢地画圈，“是阴蒂。相当于以前的龟头，但更敏感。上下左右，哪个方向最舒服，哥哥要自己试试。”

她引导着悠真的手，让她自己的食指按在了阴蒂上。

触感很奇妙。温热的，微微发硬，轻轻一碰就有强烈的快感窜上来。悠真的手指颤抖着，学着铃音的样子，开始缓慢地画圈。

“嗯……”细微的呻吟从喉咙里溢出来。她能清楚地看到镜子里，自己的手指在那个敏感点上移动，能看到阴蒂在指尖下颤抖，能看到周围的肌肉在收缩。

“然后是这里。”铃音的手移到了阴道口，指尖轻轻按压那个紧闭的小孔，“阴道。里面很敏感，尤其是前面一点——G点，对应以前的前列腺。哥哥要记住，快感和以前不一样了，不是集中在一点，而是……扩散的，像温水一样，会慢慢浸透全身。”

她的指尖稍稍用力，抵进了那个紧窄的入口。

“啊……”悠真仰起头，手指停在了阴蒂上。她能感觉到铃音的指尖进入了她的身体，那种被侵入的感觉很陌生，但很……满足。阴道内壁紧紧裹住那根手指，湿滑，温热，层层叠叠的褶皱包裹上来。

“自己试试。”铃音抽出手指，带出一小股液体。

悠真看着她沾满体液的手指，然后，慢慢地将自己的中指，抵在了阴道口。

进入的过程很缓慢。那里很紧，很窄，指尖一点一点挤进去时，能感觉到内壁的阻力。但很湿，很滑，进去并不困难。当整根手指没入时，悠真发出了一声满足的叹息。

太满了。

虽然只是一根手指，但那种被填满的感觉，比以往任何一次肛交都要……深刻。不是物理上的深度，而是心理上的。这里是她真正的性器官，是孕育生命的地方，是她作为女性的一部分。

她开始慢慢抽插手指。内壁的褶皱摩擦着指节，带来细密的快感。她尝试着弯曲手指，寻找铃音说的那个点——

“唔！”

找到了。

在阴道前壁，距离入口大约两指节深的地方，有一小块区域，摸上去比其他地方更粗糙，微微隆起。当她的指腹刮过那里时，强烈的快感像电流一样窜过脊椎，直接冲向大脑。

“那里……是那里……”她喘息着说，手指开始有节奏地按压那个点。

镜子里，能看到她的手指在阴道里进出，带出更多透明的液体。阴蒂在另一只手的拨弄下变得更加肿胀，阴唇也微微张开，露出底下湿润的粉色嫩肉。

“对……就是这样……”铃音低声说，呼吸变得急促。她显然也兴奋起来了，手放在自己腿间，隔着睡裤轻轻摩擦。

悠真闭上了眼睛，专注地感受身体的反应。每一次按压G点，都会带来一阵强烈的快感，那种快感会从小腹深处扩散开来，蔓延到四肢百骸。子宫在收缩，阴道在痉挛，阴蒂在跳动。

她能感觉到高潮在逼近。那种感觉和以前射精时完全不同——不是集中在一点然后爆发，而是像潮水一样，从深处涌上来，慢慢淹没全身。

“要去了……”她哑着声音说，手指加快了速度。

铃音突然按住了她的手：“等等。”

悠真睁开眼睛，用哀求的眼神看着她。

“用舌头。”铃音说，眼神暗沉，“哥哥的舌头，现在也很敏感吧？试试用舌头。”

她引导着悠真，让她弯起身体，头埋到自己腿间。

这个姿势很羞耻，但悠真已经顾不上那么多了。她伸出舌头，第一次，舔上了自己的阴部。

触感很奇妙。温热，湿滑，带着淡淡的咸腥味。她先是小心翼翼地舔了舔阴唇，然后，舌头探进缝隙，扫过尿道口，最后，停在了阴蒂上。

“嗯……”

当她用舌尖拨弄那颗小豆子时，强烈的快感让她浑身一颤。她能清楚地感觉到舌头的每一寸移动，感觉到阴蒂在舌尖下跳动，感觉到体液不断涌出，浸湿了嘴唇和下巴。

她开始模仿铃音刚才的动作——用舌尖快速拨弄阴蒂，时而画圈，时而上下扫动。口水混合着自己的体液，发出淫靡的水声。

“滋……啾……嗯……”

镜子就在旁边，她能清楚地看到自己此刻的样子：长发凌乱地铺在床上，脸埋在自己腿间，舌头在粉色的缝隙间快速移动。胸部因为姿势而垂下来，两颗乳头完全暴露，随着身体的颤抖而晃动。腰肢弓起，臀部翘着，阴道口还在不断渗出液体。

这个画面太淫乱了，也太美了。

悠真感觉到高潮更近了。她加快舌头的动作，同时手指重新进入阴道，快速按压G点。

双重刺激下，快感迅速累积。

“啊……啊……要……要去了……”

铃音突然爬过来，从后面抱住了她。妹妹的双手握住了她的胸部，开始用力揉捏。

“乳头也很敏感吧？”铃音在她耳边喘息，“试试看，同时刺激三个地方。”

悠真照做。舌头继续舔弄阴蒂，手指在阴道里快速抽插，而胸部的敏感点被铃音的手指捏住、拉扯。

三重刺激像三股洪水，冲垮了最后一道防线。

悠真尖叫着达到了高潮。

那不是射精，而是……潮吹。

大量的透明液体从阴道口喷射而出，不是一股，而是连续好几股，呈弧线喷射在空中，然后落在床单上、地板上、还有她自己的腿上。液体量多得惊人，像打开的水龙头，持续了足足五六秒。

与此同时，子宫剧烈收缩，阴道痉挛般收紧，阴蒂跳动得像要爆炸。快感不是爆发，而是蔓延——从下半身开始，像温暖的潮水，慢慢浸透全身每一寸皮肤，每一根神经。她感觉自己像漂浮在温水里，意识模糊，只有无边的快感。

高潮持续了很长时间。当她终于瘫软在床上时，身体还在微微颤抖，阴道还在不受控制地收缩，一股股液体缓缓流出。

铃音从后面抱着她，脸贴在她汗湿的后背，呼吸急促。

“看到了吗？”铃音低声说，声音里有压抑的兴奋，“这就是姐姐现在的身体。更敏感，更容易高潮，而且……可以潮吹。”

她又换回了“姐姐”这个称呼。

悠真说不出话，只是喘息。她能感觉到身下床单完全湿透了，冰凉地贴着皮肤。体液的味道在空气里弥漫，混合着汗水和她自己身上的茉莉花香。

铃音松开她，翻身下床，走到衣柜前，拿出了一套衣服——不是悠真平时穿的，而是一条白色的连衣裙，还有配套的内衣裤。

“穿上。”她说，把衣服扔到床上。

悠真慢慢坐起来，看着那套衣服。内衣是白色的，蕾丝边，罩杯很小，但对她现在的胸部来说刚好。内裤也是白色的，三角裤，前面有蝴蝶结装饰。连衣裙很简单，白色棉布，方领，短袖，长度大概到膝盖。

她颤抖着手，开始穿。

内衣扣在背后时有点困难，但铃音帮她扣上了。罩杯包裹住那对小小的乳房，刚好填满，顶端微微凸起。内裤穿上时，布料摩擦过还在敏感期的阴部，让她又轻颤了一下。

然后是连衣裙。布料很软，穿上后，裙摆刚好到膝盖上方。袖子有点短，露出纤细的手腕。领口开得不大，但能看见锁骨和一小片胸口。

铃音退后两步，上下打量着她。

晨光里，穿着白色连衣裙的悠真站在床边，长发凌乱地披散着，脸上还带着高潮后的红晕和泪痕。裙子很合身，勾勒出她纤细的腰身和微微隆起的胸部。裙摆下的小腿笔直白皙，脚踝纤细。赤脚站在地板上，脚趾因为紧张而微微蜷缩。

“转一圈。”铃音说。

悠真照做。裙摆扬起，露出膝盖上方一小截大腿。

“完美。”铃音低声说，眼睛里有什么东西在燃烧，“姐姐现在，完全是个女孩子了。漂亮，可爱，脆弱……让人想弄坏。”

她走近，手指轻轻抚过悠真的脸颊：“但是，还不够。”

她从梳妆台抽屉里拿出一个小盒子，打开，里面是各种化妆品。

“坐下。”她命令。

悠真在梳妆台前坐下。铃音站在她身后，开始给她化妆。

先是粉底，很薄的一层，均匀肤色。然后是腮红，浅浅的粉色，扫在脸颊上。眼影是大地色系，加深眼窝，让眼睛看起来更大。眼线细细一条，沿着睫毛根部画，眼尾微微上挑。睫毛膏刷了两层，睫毛变得更长更密。最后是口红，水红色的，涂在饱满的嘴唇上，让她看起来像刚吃过草莓。

化完妆，铃音又拿起梳子，把她的长发梳顺，然后在脑后松松地扎了一个低马尾，留下几缕碎发在脸侧。

“看看。”她说。

悠真看向镜子。

镜子里的人陌生得让她心惊。那张脸精致得像洋娃娃，皮肤白得发光，眼睛大而湿润，嘴唇红润饱满。妆容不浓，但恰到好处地突出了她五官的优点。白色连衣裙衬托出她纯净的气质，但眼角眉梢还残留着刚才高潮后的春情。

这是一个完美的、清纯又带着一丝诱惑的少女形象。

但这不是她。

或者说，不完全是。

“喜欢吗？”铃音问，双手搭在她肩上，脸凑过来，从镜子里看着她。

悠真看着镜子里那个陌生的自己，又看了看镜子里铃音的脸——妹妹长得本来就漂亮，此刻脸上带着满足和占有欲的笑容，美得近乎危险。

“我……”悠真开口，声音还是那样柔软清亮，“我不知道……”

“很快就会知道的。”铃音说，手指轻轻按在她嘴唇上，“哥哥会慢慢习惯的。习惯这个身体，习惯新的快感，习惯……作为我的所有物，活着的每一天。”

她又换回了“哥哥”。

悠真混乱极了。她不知道铃音到底想让她成为什么——是哥哥，还是姐姐？还是两者都是？

铃音似乎看穿了她的困惑，笑了：“别想太多。哥哥就是哥哥，姐姐就是姐姐。对我来说，都一样。都是我最重要的、最可爱的、只属于我的人。”

她顿了顿，补充道：“而且，药效还没完全结束。接下来的几天，身体还会继续变化。胸部可能会再大一点，皮肤会更细腻，声音会更柔……最重要的是，性欲会越来越强，敏感度会越来越高。”

悠真浑身一颤。更强的性欲？更高的敏感度？她现在就已经觉得难以忍受了。

铃音显然看穿了她的想法，笑了：“别担心，哥哥。有我在呢。我会帮你的。无论哥哥需要多少次，需要什么方式，我都会满足你。”

她的手指从嘴唇滑到下巴，再到脖颈，最后停在锁骨上：“因为哥哥现在，彻底属于我了。从里到外，从肉体到灵魂，都是我的。”

悠真闭上眼睛，眼泪又涌了上来。但这一次，眼泪不是出于恐惧或抗拒，而是……一种复杂的、连她自己都无法理解的情绪。

铃音吻去了她的眼泪。

“别哭。”她低声说，“今天是姐姐新生的第一天。该高兴才对。”

她又换成了“姐姐”。

悠真终于放弃了思考。她决定不再纠结称呼的问题。无论铃音叫她什么，她都是铃音的。这就够了。

她拉起悠真：“走吧，下楼吃早餐。然后……我们还有一整天的时间，来探索姐姐的新身体。”

早餐很简单，吐司，牛奶，水果。但悠真吃得很慢，每一口都要咀嚼很久。不是因为没胃口，而是因为……她需要适应。

舌头的触感变了。更敏感，能尝出食物更细腻的味道。吞咽时，能感觉到食道更纤细，喉结完全消失了。喝牛奶时，液体滑过喉咙的感觉很奇妙。

手也变得不一样了。手指更纤细，拿叉子时姿势不自觉变得秀气。手腕转动时，能感觉到关节更灵活。

而最明显的，是坐姿。她发现自己会不自觉地并拢双腿，膝盖微微向内，脚尖点地——一个非常女性化的坐姿。

铃音坐在对面，托着腮看她，眼神温柔又满足。

“哥哥连吃饭的样子都变可爱了。”她说。

悠真脸红了，低下头。这次她没有去纠结称呼，只是小声说：“……谢谢。”

吃完早餐，铃音收拾了餐具，然后拉着悠真回到房间。

“现在，”她说，关上门，“我们来玩个游戏。”

她从衣柜里拿出了另一样东西——一个跳蛋。不是普通的跳蛋，而是双头的，两头都可以震动，中间用一根细长的硅胶棒连接。

“这个，”铃音说，按下开关，跳蛋立刻开始震动，发出嗡嗡的轻响，“一头放进哥哥的小穴里，一头放进哥哥的后庭。”

悠真愣住了：“后庭？可是……那里不是……”

“还在哦。”铃音微笑，“前列腺还在。虽然哥哥现在没有阴茎了，但前列腺还在原来的位置，而且……因为激素变化，可能比以前更敏感了。”

她走过来，让悠真趴在床上，臀部翘起。

“我们试试看。”她说，挤了一大坨润滑剂，涂在跳蛋的两头和悠真的两个入口处。

先进入的是阴道。跳蛋的一头很小，很容易就滑了进去，一直进到深处。悠真能感觉到那个震动的小东西在体内嗡嗡作响，震波直接传到了子宫和G点。

然后，是后穴。

当跳蛋的另一头抵上那个熟悉的入口时，悠真浑身一颤。那里确实还在，而且因为很久没有被进入，格外紧致。跳蛋一点点挤进去，摩擦过肠壁，最后停在前列腺的位置。

两个跳蛋都进去后，铃音调整了一下位置，让连接它们的硅胶棒刚好卡在阴唇和臀缝之间。然后，她把遥控器递给悠真。

“哥哥自己控制。”她说，躺到悠真身边，“试试不同的模式，看看哪里最舒服。”

悠真颤抖着手，接过遥控器。上面有几个按钮，写着不同的模式：持续震动，波浪式，脉冲式，渐强式。

她先按了持续震动。

“嗡——”

两个跳蛋同时开始稳定地震动。阴道里的那个直接刺激着G点和子宫颈，后穴里的那个则精准地按摩着前列腺。双重震动从两个方向传来，在身体深处交汇，产生奇妙的共鸣。

“啊……”悠真发出一声呻吟，手抓紧了床单。这种快感和之前单纯刺激阴道完全不同——更复杂，更立体，像有两股电流在体内流动、碰撞。

她换到波浪式。

震动开始有节奏地强弱交替。像潮水一样，一波强，一波弱，永不停歇。当强波来临时，快感会达到一个小高峰；弱波时，快感稍退，但期待感更强。

“嗯……嗯……”悠真的腰肢开始不自觉地轻轻扭动，臀部向后翘，想让跳蛋进得更深。

铃音侧躺着，一手撑着头，静静地看着她。另一只手伸过来，轻轻抚摸她的长发。

“舒服吗？”铃音问，声音很轻。

悠真点头，眼泪又出来了——不是因为痛苦，而是因为快感太强烈，强烈到让她想哭。

她又换到脉冲式。

这一次，震动变成了短促的、强烈的脉冲，像心脏跳动一样，有规律地冲击着体内的敏感点。每一次脉冲都像一个小小的高潮，累积起来，推向更大的高峰。

“啊……啊……不行了……”悠真哭着说，手死死抓住遥控器，指节泛白，“要……要去了……”

“那就去啊。”铃音说，手指轻轻拨弄她的耳垂，“姐姐现在可以连续高潮，不会像以前那样射一次就结束。试试看，能去几次。”

她又换成了“姐姐”。

悠真咬住嘴唇，按下了渐强式。

震动开始很弱，然后慢慢变强，越来越强，像不断上涨的潮水。当震动达到最强时，她达到了第一次高潮。

不是潮吹，而是阴道和内壁的剧烈收缩。子宫痉挛，G点像过电一样发麻，后穴里的前列腺也同时被刺激到，带来双重快感。她尖叫着，身体弓起又落下，像一条被抛上岸的鱼。

高潮持续了十几秒，震动还在继续。

快感稍退，但身体还处在高度敏感的状态。跳蛋的震动没有停，继续刺激着那些刚刚经历高潮的部位。很快，第二波快感又涌了上来。

“啊……又……又要……”悠真喘息着，手指无意识地按着遥控器，把震动调到最大。

第二次高潮来得更快，更强烈。这次是潮吹，透明的液体从阴道口喷射出来，量比第一次少，但快感不减。她能清楚地感觉到液体涌出的过程，感觉到子宫的收缩，感觉到后穴也在同时痉挛。

震动还在继续。

第三次高潮几乎是紧接着第二次来的。这一次没有液体喷出，但身体的反应更剧烈——全身都在颤抖，肌肉紧绷，眼前发白，意识模糊。快感像海啸一样把她吞没，让她除了感受快感之外，什么都不能想。

第四次高潮时，她已经哭不出声音了，只是张着嘴，发出无声的尖叫。身体像被掏空，又像被填满，矛盾的感觉交织在一起。

第五次……

第六次……

当第七次高潮来临时，铃音终于按住了她的手，关掉了跳蛋。

震动停止的瞬间，悠真瘫软在床上，像一滩融化的水。她浑身都被汗水浸透，头发湿漉漉地贴在脸上和脖子上。连衣裙的背部完全湿透，贴在皮肤上。裙摆也湿了一大片——是潮吹的液体和汗水混合的结果。

她喘息着，眼神涣散，身体还在微微抽搐。阴道和后穴都因为过度使用而传来微微的酸痛，但更多的是满足——那种被彻底填满、彻底释放的满足。

铃音爬过来，把她抱进怀里，轻轻拍着她的背。

“七次。”铃音低声说，声音里有压抑的兴奋，“哥哥的新身体，很厉害呢。”

悠真说不出话，只是把脸埋进妹妹怀里，无声地哭泣。

铃音吻了吻她的头发，然后开始帮她清理。用湿毛巾擦身体，换掉湿透的连衣裙和内裤，换上干净的睡衣。动作很温柔，像对待易碎的瓷器。

清理完后，铃音抱着她，两人一起躺在床上。

午后的阳光从窗户照进来，房间里很安静，只有两人平稳的呼吸声。

悠真躺在铃音怀里，听着妹妹的心跳，感受着身体里残留的快感余韵。她能感觉到子宫还在微微收缩，阴道还在轻轻痉挛，后穴也还在发烫。

这一切都是真的。

她真的变成了女孩子。

“姐姐。”铃音突然开口。

“嗯？”

“喜欢现在的身体吗？”

悠真沉默了很久。她想起早上在镜子前看到的自己，想起化妆后的那张脸，想起高潮时的感觉，想起那种被彻底填满的满足。

最后，她小声说：“……喜欢。”

“喜欢被我这样对待吗？”

“……喜欢。”

“喜欢彻底属于我吗？”

悠真闭上眼睛，眼泪又流了出来。但这一次，她清楚地知道答案。

“喜欢。”她说，声音很轻，但很坚定，“喜欢属于铃音。”

铃音抱紧了她，脸埋在她颈窝。悠真感觉到，有温热的液体滴在自己的皮肤上。

妹妹在哭。

“我也喜欢哥哥。”铃音小声说，声音带着鼻音，“喜欢现在的哥哥，喜欢永远属于我的哥哥。”

两人就这样相拥着，在午后的阳光里睡着了。

悠真做了一个梦。

梦里，她是一只蛹，雪白的，半透明的，挂在树枝上。蛹里有东西在动，在挣扎，想要破茧而出。

她等了很久，终于，蛹裂开了一道缝。

一只蝴蝶挣扎着钻出来。翅膀是白色的，上面有淡粉色的花纹，在阳光下闪闪发光。

蝴蝶飞走了，飞向远处的天空。

而那只空蛹，还挂在树枝上，在风里轻轻摇晃。

悠真醒来时，天已经快黑了。铃音还在睡，手还紧紧抱着她。

她轻轻挪开铃音的手，下床，走到镜子前。

镜子里，那个穿着白色睡衣的少女还在。眼睛因为哭过而有点肿，但依然漂亮。嘴唇上的口红已经掉了，露出原本的粉色。长发凌乱，但有种慵懒的美。

她伸出手，指尖碰了碰镜子里的自己。

冰凉的触感。

然后，她笑了。

一个很轻的，几乎看不见的，但真实存在的微笑。

窗外，夜幕降临，星星一颗颗亮起来。

房间里，新生的少女站在镜子前，看着镜子里陌生的自己，慢慢接受，慢慢习惯。

而在床上，她的妹妹还在睡，嘴角带着满足的笑容，像拥有了全世界的孩子。

夜还很长。

新生，才刚刚开始。`,Sd=Object.freeze(Object.defineProperty({__proto__:null,default:yd},Symbol.toStringTag,{value:"Module"})),Ad=`---
order: 9
---

# #9 谎言的茉莉香与惩罚的荆棘

清晨六点半，悠真站在穿衣镜前，深深吸了一口气。

镜子里的人穿着白色衬衫——男式款，略宽松，刚好能掩盖胸部的轮廓。外面套着黑色针织开衫，下身是深灰色格子短裤，长度在膝盖上方两寸。腿上穿着黑色半透明丝袜，袜口有精致的蕾丝边，再往下是及踝的黑色马丁靴，鞋带系得一丝不苟。

这是她精心挑选的“中性风”穿搭。既不会太过女性化引起怀疑，又能满足内心深处对新身体的某种隐秘展示欲。

她转身，从衣柜里拿出一个小小的束胸——昨天铃音出门时，她偷偷网购的。虽然胸部还不大，但穿衬衫时已经能看到明显的突起。束胸很紧，勒得有些难受，但为了不暴露，这是必要的。

穿戴整齐后，悠真走到梳妆台前。没有化妆——那样太明显了。只是用发蜡把过长的刘海往后梳，露出额头。长发扎成低马尾，藏在衬衫领子里。镜子里的脸依然精致得过分，但至少没有妆容的修饰，看起来更像是“长相清秀的男生”。

最后，也是最重要的练习。

“早上好。”她对着镜子说，刻意压低声音，让声带振动的位置靠后，发出偏中性的音色。然后，她试着在句尾加上一点轻微的、几乎听不出来的上扬尾音——“早上好~”。

不对，太明显了。

“早上好。”这次更平了。

反复练习了十几分钟，直到喉咙有些发干，她才勉强找到那个平衡点——听起来自然，又不会太女性化。

下楼时，铃音已经坐在餐桌前了。她今天穿着睡衣，头发乱糟糟的，眼睛下面有淡淡的黑眼圈。

“哥哥早。”铃音的声音有些沙哑，整个人看起来没什么精神。

“早。”悠真用练习过的声音回应，在对面坐下，“你今天不去学校吗？”

铃音摇摇头，用勺子搅着碗里的麦片：“请假了。有点……不舒服。”

悠真注意到妹妹的手在微微发抖，脸色也有些苍白。“怎么了？发烧了吗？”

“不是。”铃音抬起头，看了她一眼，眼神有些复杂，“就是……不太想动。”

悠真没有追问。她大概能猜到原因——这几天，铃音一直在照顾她，陪她适应新身体，陪她探索新快感，几乎没有自己的时间。而且，作为扶她，铃音自己也有需求，但为了不吓到刚完成转变的她，铃音一直很克制。

想到这里，悠真心里涌起一阵愧疚。她伸手，轻轻摸了摸铃音的头：“那你好好休息。我放学早点回来。”

铃音愣了一下，然后像只被抚摸的猫一样，眯起眼睛，用脸颊蹭了蹭她的手心：“嗯。哥哥路上小心。”

这个亲昵的动作让悠真心跳加速。她能感觉到铃音的体温，能闻到妹妹身上淡淡的、混合着沐浴露和某种更私密的气味。她的手指微微颤抖，想要收回，却又舍不得。

最后，是铃音先退开了。

“快吃吧，要迟到了。”铃音说，低下头继续吃麦片。

悠真收回手，指尖还残留着妹妹发丝的触感。她拿起吐司，小口小口地吃着，同时努力控制着身体的反应——只是被铃音蹭了蹭手心，胸部就已经开始发胀，乳头在束胸和衬衫的包裹下挺立起来，摩擦着布料。而下身……她并紧双腿，试图压抑那股从子宫深处涌起的温热湿意。

不行。不能在学校里失态。

她深呼吸，强迫自己转移注意力。

出门前，悠真站在玄关穿鞋。铃音走过来，从后面抱住她，脸埋在她背上。

“哥哥。”妹妹的声音闷闷的，“今天……会想我吗？”

悠真僵住了。她能感觉到铃音的体温隔着布料传来，能感觉到妹妹的呼吸喷在她背上，能感觉到……自己身体的反应更强烈了。

“会。”她小声说，声音因为紧张而有些变调。

铃音抱得更紧了些，手在她小腹上轻轻按了按：“这里，也要想我哦。”

悠真脸红了。她知道铃音指的是哪里——子宫，那个新生的、只属于铃音的器官。

“嗯。”她点头。

铃音这才松开手，在她脸颊上亲了一下：“去吧。放学早点回来。”

“好。”

走出家门，清晨的空气带着凉意。悠真拉了拉开衫的领子，走向车站。每一步，马丁靴踩在地面上发出清脆的响声，黑丝包裹的小腿在晨光里泛着细腻的光泽。

她知道自己很显眼。

不是以前那种“清秀男生”的显眼，而是……更复杂的。路上有男生回头看，眼神里带着困惑和某种说不清的打量。有女生窃窃私语，然后红着脸移开视线。

悠真低下头，加快脚步。

到学校时，离上课还有二十分钟。她走进教室，尽量自然地走向自己的座位。

“哟，悠真！”同班的男生山田从后面拍了她肩膀一下，“今天这身……挺潮啊。”

悠真僵了一瞬，然后转过身，用练习过的中性声音回答：“早。”

山田盯着她看了几秒，表情有点古怪：“你……是不是剪头发了？不对，是留长了？怎么感觉……不太一样了。”

“没有吧。”悠真避开他的视线，在座位上坐下，“你看错了。”

“是吗……”山田挠挠头，又看了她几眼，才回到自己的座位。

悠真松了口气，从书包里拿出课本。她能感觉到周围若有若无的目光，能听到细微的议论声。她知道自己在变化——不仅仅是身体，还有气质，举止，甚至……气场。那种属于女性的、柔软又脆弱的气场，即使穿着中性服装也掩盖不住。

上课铃响了。

第一节课是数学。悠真努力集中注意力，但身体的不适感越来越明显。束胸勒得太紧，呼吸有些困难。黑丝包裹的腿因为久坐而开始出汗，丝袜黏在皮肤上，带来细微的痒感。最糟糕的是下身——从早上开始就湿漉漉的，内裤已经湿了一小块，黏腻地贴着阴唇。

她并紧双腿，轻轻摩擦。这个动作带来一丝快感，让她更加羞愧。

不行。不能在学校里……

她咬住嘴唇，强迫自己看向黑板。

下课铃响起时，悠真几乎要虚脱了。她趴在桌上，小口喘气。

“悠真，你没事吧？”前座的女生关切地问，“脸色好白。”

“没事……有点低血糖。”悠真用假声回答，声音因为虚弱而变得更细。

女生从包里拿出巧克力：“给，吃一点。”

“谢谢。”悠真接过，撕开包装，小口吃着。甜味在舌尖化开，让她稍微好受了一些。

但她知道，真正的问题不是低血糖。

而是欲望。那种被药物放大了数倍的、几乎要吞噬理智的欲望。

午休铃响时，悠真已经快撑不住了。她趴在桌上，手悄悄伸到桌下，隔着裙裤按在小腹上。只是轻轻一按，快感就像电流一样窜上来，让她差点呻吟出声。

“悠真。”

熟悉的声音从头顶传来。

悠真抬起头，看到早川理纱站在桌前，手里拎着便当袋。今天的早川穿着校服裙，头发扎成高马尾，脸上带着温柔的笑容。

“早川同学……”悠真坐直身体，努力让声音听起来正常。

“我给你带了便当。”早川把便当袋放在桌上，然后在她对面坐下，“今天是你喜欢的炸鸡和玉子烧哦。”

“谢谢……”悠真接过便当，指尖碰到早川的手，两人都愣了一下。

早川收回手，脸微微泛红：“快吃吧，凉了就不好吃了。”

悠真打开便当盒。炸鸡炸得金黄酥脆，玉子烧厚实松软，还有小番茄和西兰花做点缀。很用心的一份便当。

她拿起筷子，小口吃着。动作不自觉地变得秀气——手指捏筷子的姿势更柔，咀嚼时嘴唇抿得很紧，吞咽时喉结（虽然已经几乎看不见了）滚动的幅度很小。

早川静静地看着她吃，眼神越来越困惑。

“悠真，”她突然开口，“你最近……是不是在减肥？”

“诶？”悠真抬起头。

“感觉你瘦了。”早川伸手，指尖轻轻碰了碰悠真的手腕，“手腕好细。还有脸，轮廓变柔和了。”

悠真心跳漏了一拍。她放下筷子，用假声说：“可能是……长高了吧。”

“是吗。”早川没有追问，但眼神里的疑惑没有消散。

两人沉默地吃完便当。悠真收拾好饭盒，递给早川：“谢谢，很好吃。”

“不客气。”早川接过，手指又碰到了悠真的手。这次，她没有立刻收回，而是轻轻握住了悠真的指尖。

“悠真，”她的声音很轻，“你最近……好像有点不一样。”

悠真僵住了：“哪里……不一样？”

“说不清楚。”早川的手指轻轻摩挲着悠真的指尖，“就是感觉……更柔和了。声音也是，动作也是，连……气味都变了。”

气味。

悠真心里一紧。她这才想起，性转之后，她的体味也变了。以前是偏中性的、清爽的气味，现在则带上了淡淡的、女性特有的甜香，混合着茉莉花香的身体乳味道。

“可能是换了沐浴露……”她小声说，想要抽回手。

但早川握得更紧了。

“悠真，”早川抬起头，直视着她的眼睛，“我可以……要求报酬了吗？”

报酬。便当的报酬。

悠真想起早川之前说过的话——“下次，我要收报酬了。”

“是什么……”她问，声音有些发颤。

“抱抱。”早川说，脸更红了，“就……抱一下，可以吗？”

悠真愣住了。她看着早川期待又害羞的表情，心里涌起复杂的情绪。一方面，她不想和早川有太亲密的接触——那是对铃音的背叛。但另一方面，早川对她这么好，每天都送便当，她实在无法拒绝。

而且……内心深处，她也渴望拥抱。渴望被需要，被珍惜，被温柔对待。

“……好。”她听到自己这样说。

早川的眼睛亮了。她站起身，走到悠真面前，然后，轻轻抱住了她。

不是朋友间那种拍拍背的拥抱，而是更亲密的、身体紧贴的拥抱。早川的手臂环住悠真的腰，脸埋在她颈窝。悠真比早川高一点，这个姿势让她能闻到早川头发上的洗发水香味，能感觉到早川温热的呼吸喷在锁骨上。

而她自己的身体……

在早川抱住她的瞬间，悠真浑身剧烈一颤。

太近了。太亲密了。

早川的胸部贴着她的胸口——虽然隔着束胸和衬衫，但她能清楚地感觉到那柔软的触感。早川的手臂环在她腰上，手指刚好按在她小腹下方，离那个敏感的部位只有几层布料的距离。

最要命的是，早川似乎觉得还不够，手臂收紧，把她抱得更紧了些。

“唔……”

悠真发出一声压抑的呻吟。胸部被挤压，乳头在束胸和衬衫的包裹下摩擦着布料，带来强烈的刺激。而下身……她能感觉到一股热流涌出，内裤彻底湿透了，湿意甚至渗透了裙裤，在布料上晕开一小块深色。

“悠真？”早川察觉到她的颤抖，稍稍松开一些，低头看她，“怎么了？不舒服吗？”

“没……没有……”悠真摇头，脸烧得通红。她不敢看早川的眼睛，怕被看出异常。

但早川已经注意到了。

她的视线落在悠真胸口——那里，白色衬衫上，有两处明显的凸起。虽然不大，但形状清晰，顶端还有更深的颜色透出来。

早川愣住了。

她的手下意识地往下滑，按在悠真小腹上——然后，她感觉到了湿意。

不是汗水。是更粘稠的、带着体温的湿意。

“悠真，”早川的声音变得有些奇怪，“你……穿内衣了？”

悠真浑身僵硬。她想否认，但谎言卡在喉咙里，发不出声音。

早川的手指轻轻按了按她的小腹，那个动作带着试探的意味。隔着布料，悠真能感觉到指尖的温度，能感觉到按压带来的细微刺激——还有更多的液体涌出。

“我……”悠真开口，声音破碎，“我只是……”

“只是什么？”早川问，声音很轻，但眼神锐利。

悠真说不出话。她看着早川，看着那双总是温柔的眼睛里此刻盛满困惑和某种更深的情绪，她感到前所未有的恐慌。

但早川没有追问。

她只是重新抱紧了悠真，这次抱得更紧，几乎要把她揉进身体里。

“不想说就算了。”早川在她耳边低声说，“但是悠真……如果你有什么困难，可以告诉我。我会帮你的。”

悠真的眼泪涌了上来。她不知道早川猜到了多少，不知道早川会怎么想她。但她能感觉到早川怀抱里的温暖和包容，那让她想要坦白一切。

但她不能。

她只能紧紧回抱住早川，把脸埋在她肩头，无声地哭泣。

两人就这样抱着，在空无一人的教室里，抱了很久很久。

午休结束的铃声响起时，悠真才恍然惊醒。她松开手，后退一步，低着头不敢看早川。

“谢谢你的便当……”她小声说。

“不客气。”早川说，伸手擦了擦她脸上的泪痕，“明天……我还能给你带便当吗？”

悠真点头。

“那，报酬……”早川的脸又红了，“明天还能抱吗？”

悠真沉默了几秒，然后，轻轻点头。

早川笑了，那个笑容很温暖，很明亮。她凑近，在悠真脸颊上亲了一下——很轻很快的一个吻，像羽毛拂过。

“上课了，快回去吧。”她说，然后转身离开教室。

悠真站在原地，手抚上被亲过的脸颊，那里还残留着温热的触感。她能闻到自己身上早川的气味——洗发水的香味，还有属于早川特有的、干净清爽的体味。

而她自己身上的茉莉花香，和早川的气味混合在一起，形成一种奇异的、令人心悸的融合。

下午的课，悠真完全没听进去。

她坐在座位上，身体还在微微颤抖。早川的拥抱带来的刺激太强烈了，强烈到即使过去了几个小时，她还能感觉到那种被填满的、被需要的满足感。

还有……身体的反应。

内裤已经湿得一塌糊涂，黏腻地贴在阴唇上。每次稍微动一下，布料摩擦过敏感的部位，都会带来一阵战栗。胸部也因为长时间的束缚而胀痛，乳头硬得发疼。

她咬住嘴唇，手悄悄伸到桌下，隔着裙裤轻轻按压小腹。这个动作很危险——如果被人看到，一切就完了。但她控制不住。欲望像火焰一样在体内燃烧，几乎要把她烧成灰烬。

终于熬到放学铃响。

悠真几乎是逃也似的离开教室。她低着头快步走着，想要尽快回家，回到铃音身边，让妹妹用她熟悉的方式“帮”她。

但走到校门口时，她愣住了。

早川理纱站在那里，似乎在等人。

看到悠真，早川眼睛一亮，小跑过来：“悠真！”

“早川同学……”悠真停住脚步，心跳又开始加速。

“一起走吧？”早川说，很自然地挽住了她的手臂，“我家和你家顺路一段。”

悠真僵住了。手臂被早川挽着，两人的身体靠得很近。她能闻到早川身上的香味，能感觉到早川的温度，能感觉到……自己身体的反应又开始了。

“好……好啊。”她听到自己这样说。

两人并肩走着。夕阳把影子拉得很长，街道上行人不多，很安静。

“悠真，”早川突然开口，“你今天……穿的是丝袜吧？”

悠真心里一紧，低头看去——裙裤下，黑丝的袜口露出来一小截，蕾丝边若隐若现。

“嗯……”她小声承认。

“很适合你。”早川说，手指轻轻碰了碰她的手臂，“很漂亮。”

悠真脸红了。她不知道该怎么回应，只能沉默。

走了一段，到了该分岔的路口。早川停下脚步，转身面对悠真。

“那……明天见。”她说，然后，又抱了悠真一下。

这次拥抱很短，但很用力。早川的手臂环住她的腰，脸在她颈窝蹭了蹭，深深吸了一口气。

“悠真身上的味道……真好闻。”早川低声说，然后松开手，后退一步，“明天，我还会给你带便当的。”

说完，她挥挥手，转身离开。

悠真站在原地，看着早川的背影消失在街角，久久没有动。

她能感觉到早川留下的温度，能闻到早川留下的气味，能感觉到……自己身体里那股汹涌的、几乎要失控的欲望。

她转身，快步往家走去。

脚步越来越快，最后几乎是小跑。马丁靴敲击地面的声音在安静的街道上回响，黑丝包裹的小腿因为运动而渗出细密的汗珠。她喘息着，胸口因为奔跑而剧烈起伏，束胸勒得更紧，几乎要喘不过气。

但她顾不上这些。她只想快点回家，快点见到铃音，快点让妹妹用她熟悉的方式填满她，占有她，让她忘记一切——忘记早川的拥抱，忘记早川的气味，忘记那种背叛的罪恶感。

终于，家门出现在眼前。

悠真颤抖着手掏出钥匙，打开门。

“我回来了……”她用本音说，声音因为奔跑而有些喘。

没有回应。

她脱下鞋，走进客厅。还是没有人。

“铃音？”她叫了一声，往楼上走去。

卧室的门虚掩着。悠真推开门，然后，愣住了。

铃音坐在床上，背对着门。她穿着睡衣，头发乱糟糟的，肩膀微微颤抖。房间里弥漫着一股浓郁的、熟悉的气味——那是铃音发情时的气味，混合着体液和汗水的气味。

而在床上，散落着几件东西——悠真昨天换下的睡衣，还有她平时用的枕头。

铃音手里拿着那件睡衣，脸埋在里面，深深呼吸着。另一只手放在自己腿间，睡衣下摆被撩起，能看见她光裸的大腿和……那只已经完全勃起、尺寸惊人的男性器官。

悠真僵在门口，大脑一片空白。

铃音在……用她的衣服自慰。

这个认知让她浑身发热，下身涌出一股热流。她能感觉到内裤又湿了一小块，黏腻的液体顺着腿根流下。

而这时，铃音似乎察觉到了什么，动作停住了。

她慢慢转过身，看向门口。

看到悠真的瞬间，铃音的眼睛亮了。那种亮不是平时的温柔或占有，而是一种近乎疯狂的、被欲望灼烧的亮。

“哥哥……”铃音的声音沙哑得厉害，“你回来了。”

她放下手里的睡衣，站起身。睡衣下摆垂下来，遮住了下半身，但悠真能看到那处明显的隆起，还有顶端渗出的透明液体，在布料上晕开一小块深色。

铃音走过来，脚步有些虚浮。她的脸泛着不正常的红晕，眼睛湿漉漉的，呼吸急促。

“哥哥……”她走到悠真面前，伸手想要抱她。

但就在这时，铃音的动作停住了。

她的鼻子动了动，然后，脸上的红晕迅速褪去，取而代之的是一种冰冷的苍白。

“哥哥，”铃音的声音变得很轻，很平静，“你身上……是什么味道？”

悠真心里一紧：“什么……什么味道？”

“不是我的味道。”铃音伸手，抓住悠真的手腕，把她拉近，然后低头，在她颈窝深深吸了一口气，“也不是家里的味道。是……别人的味道。”

悠真浑身僵硬。她能感觉到铃音的呼吸喷在皮肤上，能感觉到妹妹的手指紧紧扣着她的手腕，能感觉到……那种冰冷的、令人窒息的压迫感。

“是……是同学……”她小声说，试图解释，“今天教室里人很多，可能……沾到了……”

“是吗。”铃音抬起头，直视着她的眼睛，“可是哥哥，这个味道很浓哦。浓到……像是抱了很久很久，才会染上的味道。”

悠真的心跳几乎停止。

铃音松开了她的手腕，但目光没有移开。她往后退了一步，上下打量着悠真。

“哥哥今天……穿得很漂亮呢。”铃音说，声音依然很轻，很平静，“黑丝，马丁靴，中性风……很可爱。”

她伸出手，指尖轻轻抚过悠真的衬衫领口：“但是哥哥，这里……为什么有褶皱？”

悠真低头看去——衬衫领口处确实有几处不自然的褶皱，那是早川抱她时，脸蹭到的地方。

“还有这里。”铃音的手指移到悠真胸口，隔着衬衫和束胸，轻轻按在那两处凸起上，“为什么……这么硬？”

悠真浑身一颤。乳头被按压的刺激让她差点呻吟出声，但她死死咬住嘴唇，不敢发出声音。

“哥哥，”铃音的手指开始缓慢地画圈，隔着布料按摩那两颗硬挺的乳头，“你在学校……是不是被人碰了？”

“没……没有……”悠真摇头，眼泪涌了上来。

“没有吗？”铃音笑了，那个笑容很温柔，但眼神冰冷，“那哥哥告诉我，这个味道是谁的？”

“是……是早川同学……”悠真终于承认了，声音带着哭腔，“她今天……给我送了便当……”

“然后呢？”铃音的手指没有停，继续按摩着她的胸部，“只是送了便当，就会染上这么浓的味道吗？”

悠真说不出话。她看着铃音，看着妹妹脸上那种温柔又残酷的笑容，感到前所未有的恐惧。

“哥哥，”铃音凑近，在她耳边低声说，“你答应过我的。你只属于我，从里到外，从头到脚，都是我的。”

她的另一只手滑到悠真背后，轻轻按在她腰上：“可是哥哥，你现在身上有别人的味道。这让我……很难过。”

悠真的眼泪流了下来：“对不起……对不起铃音……我只是……”

“只是什么？”铃音问，手指从胸部滑到小腹，隔着裙裤按在那个湿漉漉的部位，“只是忍不住？只是想要被抱？只是……对那个早川同学，也有好感？”

悠真浑身剧烈颤抖。她能感觉到铃音的指尖按压着那个敏感的部位，能感觉到自己身体的反应——更多的液体涌出，浸湿了内裤和裙裤。

“不是的……我最喜欢铃音……”她哭着说，“只是……只是早川同学对我很好……我……”

“所以哥哥就让她抱了？”铃音的声音依然很轻，但手上的力道加重了，“让她碰了这里？碰了这里？还是……碰了这里？”

每说一个“这里”，铃音的手指就按在不同的位置——胸口，小腹，最后停在大腿内侧，隔着黑丝轻轻摩挲。

悠真已经站不住了。她腿软得几乎要跪下，但铃音搂着她的腰，支撑着她。

“哥哥，”铃音说，另一只手开始解她的衬衫扣子，“我要检查一下。”

“不……不要……”悠真想要阻止，但声音微弱得几乎没有力气。

铃音没有理会。她一颗一颗解开衬衫扣子，露出里面的束胸。白色蕾丝的束胸紧紧包裹着那对小巧的乳房，顶端的两点凸起清晰可见。

“哥哥还穿了束胸呢。”铃音轻笑一声，手指勾住束胸的边缘，“是为了不让别人发现吗？真贴心。”

她用力一拉，束胸被扯开。那对乳房弹出来，暴露在空气中。乳头已经完全充血勃起，像两颗熟透的樱桃，在微凉的空气里微微颤抖。

铃音盯着看了很久，然后伸出手，捏住了左边那颗。

“唔……”悠真发出一声压抑的呻吟。

“疼吗？”铃音问，手指用力揉捏，“疼就对了。哥哥这里，只有我能碰。只有我能捏，能舔，能咬。”

她低下头，含住了右边那颗乳头。不是温柔的舔舐，而是用力地吮吸，用牙齿轻轻啃咬。

“啊……铃音……疼……”悠真哭着说，手抓住妹妹的头发，想要推开，又想要拉近。

铃音吮吸了很久，直到那颗乳头红肿发胀，才松开嘴。她抬起头，嘴唇湿润，眼睛里闪烁着某种危险的光。

“现在，下面。”她说，开始解悠真的裙裤。

“不要……不要在这里……”悠真哀求，“回房间……回房间好不好……”

“为什么？”铃音问，手上的动作没有停，“哥哥不是喜欢在客厅吗？上次，哥哥就是在这里，被我舔到潮吹的，记得吗？”

悠真脸红了。她当然记得——那次，她穿着白色的连衣裙，被铃音按在沙发上，用舌头送上了人生第一次女性高潮。

裙裤被褪下，露出里面的黑色内裤——已经湿透了，深色的水渍从裆部蔓延到大腿根部。黑丝还穿着，袜口有精致的蕾丝边，此刻也被体液浸湿了一小片。

铃音盯着那片湿痕，眼神暗了暗。

“湿成这样……”她低声说，手指隔着内裤按在阴唇上，“只是被我问问，就湿成这样了？哥哥的身体……还真是诚实呢。”

悠真咬住嘴唇，不敢说话。

铃音勾住内裤边缘，慢慢往下拉。当那片新生的、完全女性化的部位暴露在空气中时，两人都沉默了。

阴唇因为兴奋而微微张开，露出底下湿润的粉色嫩肉。阴蒂已经完全充血勃起，像一颗小小的珍珠。而最下方，阴道口正不断涌出透明的液体，顺着臀缝流下，滴在地板上。

“滴答。”

轻微的水声在安静的客厅里格外清晰。

铃音跪下来，脸凑近那个部位。她没有立刻舔，而是深深吸了一口气。

“哥哥这里的味道……”她低声说，“还是我的味道。但是……”

她的手指伸过去，轻轻拨开阴唇，露出底下更深的粉色嫩肉：“这里，有没有被别人碰过呢？”

“没有……真的没有……”悠真哭着摇头，“只有铃音……只有铃音碰过……”

“是吗。”铃音说，然后伸出舌头，舔了上去。

不是温柔的舔舐，而是粗暴的、带着惩罚意味的舔舐。她的舌头用力扫过阴唇，刮过阴蒂，最后抵进阴道口，在里面粗暴地搅动。

“啊——！！！”

悠真尖叫着弓起背，手指死死抓住沙发靠背。这种快感太强烈了，强烈到几乎带着痛楚。她能感觉到铃音的舌头在体内横冲直撞，能感觉到牙齿偶尔刮过敏感的部位，能感觉到……那种被彻底侵犯、彻底占有的屈辱和快感。

“滋……啾……嗯……”

水声越来越大。悠真的体液分泌得越来越多，阴道口像打开了的水龙头，源源不断地涌出透明的液体。铃音舔得很用力，很贪婪，像要把她整个吞下去。

“哥哥这里……”铃音抬起头，嘴角挂着透明的液体，眼神疯狂，“只能是我的。只有我能舔，能操，能灌满。”

她站起身，开始脱自己的睡衣。

当铃音完全赤裸地站在悠真面前时，悠真倒吸了一口冷气。

几天没见，铃音的男性器官似乎变得更大了。完全勃起的状态下，尺寸惊人，颜色深红，顶端不断渗出透明的液体。而下面，那个女性部位也湿透了，阴唇微微张开，露出底下湿润的嫩肉。

但最引人注目的，是铃音整个人的状态——她的眼睛红得吓人，呼吸急促得像跑了很久，全身的皮肤都泛着不正常的红晕，肌肉因为紧绷而微微颤抖。

“哥哥，”铃音说，声音沙哑得几乎听不清，“你知道我这几天，是怎么过的吗？”

悠真摇头，眼泪流得更凶。

“我每天闻着哥哥的味道，”铃音走近，抓住悠真的手，按在自己腿间那个巨大的器官上，“想着哥哥的样子，自己解决。可是不够……完全不够……”

悠真的手被强迫着握住那根滚烫的性器。她能感觉到那上面的脉搏跳动，能感觉到顶端渗出的粘稠液体，能感觉到……铃音的欲望有多么强烈。

“哥哥答应过我，只属于我。”铃音说，另一只手抓住悠真的头发，强迫她抬起头，“可是哥哥，你背叛了我。”

“对不起……对不起……”悠真哭着道歉。

“对不起有用吗？”铃音笑了，那个笑容很温柔，但眼神冰冷，“哥哥身上有别人的味道，这里……”她的手按在悠真胸口，“还有这里……”手滑到小腹，“都沾上了别人的气味。这让我……很生气。”

她松开悠真的头发，转而抓住她的腰，把她转过去，让她趴在沙发上。

“所以，”铃音说，声音很轻，但每个字都像冰锥一样刺进悠真心里，“我要惩罚哥哥。”

悠真趴在沙发上，脸埋在靠垫里。她能感觉到铃音的手分开她的臀瓣，能感觉到那个巨大的龟头抵在她阴道口。

“不要……铃音……那里还……”她哭着哀求。

“还什么？”铃音问，腰往前送了一点，“还紧？还窄？还是……还不适应？”

龟头挤进了那个紧窄的入口。悠真尖叫一声，手指死死抓住沙发布料。

“疼吗？”铃音问，又往前送了一点，“疼就对了。哥哥要记住这种疼。记住只有我能给哥哥这种疼。”

她继续推进。悠真的阴道很紧，很窄，即使已经湿得一塌糊涂，要容纳这么大的尺寸还是很困难。她能感觉到自己被一点点撑开，感觉到内壁被摩擦，感觉到子宫口被顶到。

当铃音整根没入时，悠真已经哭不出声音了。她张着嘴，发出无声的尖叫，身体因为疼痛和过度刺激而剧烈颤抖。

铃音俯身，趴在她背上，脸埋在她颈窝。

“哥哥这里……”她低声说，声音带着压抑的兴奋，“好紧，好热，好湿……全是我的味道。”

她开始动。

一开始很慢，像是故意折磨。每次只抽出一点点，再缓缓推入。每次进入，龟头都会重重撞在子宫口上，带来一阵阵痉挛般的快感和痛楚。

“啊……啊……铃音……慢点……”悠真哭着哀求。

“慢点？”铃音低笑一声，动作突然加快，“哥哥背叛我的时候，怎么不想想后果？”

她开始用力抽插。每一次进入都又深又重，像要把悠真钉在沙发上。肉体撞击的声音在客厅里回响，混合着水声和悠真的哭喊。

“啪！啪！啪！”

“啊！啊！不要了……铃音……不要了……”

铃音没有理会。她抓住悠真的腰，把她往后拉，让自己进得更深。这个姿势让悠真完全暴露，她能清楚地看到两人交合的部位——看到自己的小穴被撑开到极限，看到铃音的性器在里面进出，带出大量透明的液体。

“哥哥看到了吗？”铃音在她耳边喘息，“看到我是怎么操你的吗？看到你是怎么被我操到流水的吗？”

悠真点头，眼泪模糊了视线。她能看到的只有一片混乱的色块，能感觉到的只有无边的快感和痛楚。

铃音的动作越来越快，越来越用力。她像是要把这几天的压抑全部发泄出来，像是要把悠真身上早川的气味彻底覆盖掉，像是要把悠真彻底变成自己的所有物。

“啊……啊……铃音……我要……要去了……”悠真哭着说，腰肢不受控制地向上挺动。

“不准。”铃音说，动作突然停住，“哥哥不准高潮。在我允许之前，不准高潮。”

快感骤然中断的痛苦让悠真发出哀鸣。她扭动着身体，想要更多，但铃音死死按着她，不让她动。

“哥哥，”铃音说，声音沙哑，“说你爱我。”

“我爱你……铃音……我爱你……”悠真哭着说。

“说你只属于我。”

“我只属于铃音……只属于铃音……”

“说你永远不会背叛我。”

“我永远不会背叛铃音……永远不会……”

铃音满意了。她重新开始动，这次更快，更用力。

悠真很快就再次被推到了高潮边缘。她能感觉到子宫在收缩，阴道在痉挛，阴蒂跳动得像要爆炸。但铃音还没有说可以，她只能死死忍着，忍得全身都在发抖。

“铃音……求你了……让我去……”她哭着哀求。

“再等等。”铃音说，动作慢下来，变成缓慢而深沉的抽插，“哥哥要记住这种感觉。记住被填满的感觉，记住被占有的感觉，记住……属于我的感觉。”

悠真点头，眼泪浸湿了沙发靠垫。

铃音就这样操了她很久。从客厅到卧室，从沙发到床上，从地板到浴室。每一次高潮都被强行中断，每一次快感都被延长到几乎痛苦的程度。

当铃音终于允许她高潮时，悠真已经意识模糊了。

那是一次前所未有的潮吹。大量的液体从阴道口喷射出来，不是一股，而是连续好几股，喷射在空中，落在床上、地板上、还有两人身上。液体量多得惊人，像打开了闸门的水库。

与此同时，子宫剧烈收缩，阴道痉挛般收紧，阴蒂跳动得像要爆炸。快感不是爆发，而是蔓延——从下半身开始，像温暖的潮水，慢慢浸透全身每一寸皮肤，每一根神经。她感觉自己像漂浮在温水里，意识模糊，只有无边的快感。

高潮持续了很长时间。当她终于瘫软在床上时，身体还在微微颤抖，阴道还在不受控制地收缩，一股股液体缓缓流出。

铃音躺在她身边，同样在喘息。她的性器还半硬着，顶端挂着白浊的精液——那是她刚才在悠真体内射出的。

房间里弥漫着浓郁的体液气味，混合着汗水、精液和爱液的味道。床单完全湿透了，冰凉地贴着皮肤。

许久，铃音翻过身，把悠真抱进怀里。

“哥哥，”她小声说，声音里带着哭腔，“对不起……我太粗暴了……”

悠真摇头，脸埋在她胸口：“不……是我的错……我不该让早川同学抱我……”

“哥哥，”铃音捧起她的脸，直视着她的眼睛，“你爱我吗？”

“爱。”悠真毫不犹豫地回答，“最爱铃音了。”

“那……早川同学呢？”

悠真沉默了几秒，然后小声说：“早川同学……对我很好。但是……那不一样。对早川同学，是感激，是友情。对铃音……是爱。是想要永远在一起的爱。”

铃音盯着她看了很久，似乎在判断她话里的真假。然后，她笑了，那个笑容很疲惫，但很真实。

“我相信哥哥。”她说，吻了吻悠真的额头，“但是哥哥，答应我，以后不要再让别人抱你了。好吗？”

“嗯。”悠真点头，“以后……只有铃音可以抱我。”

“只有我可以碰你。”

“只有铃音可以碰我。”

“只有我可以爱你。”

“只有铃音可以爱我。”

铃音满意了。她抱紧悠真，脸埋在她颈窝。

“哥哥，”她小声说，“我……我真的很害怕。害怕哥哥会喜欢上别人，害怕哥哥会离开我，害怕……哥哥不再需要我了。”

悠真心疼极了。她回抱住铃音，轻轻拍着妹妹的背：“不会的。我永远不会离开铃音。我永远需要铃音。”

“真的吗？”

“真的。”

两人就这样相拥着，在潮湿凌乱的床上，慢慢睡着了。

悠真做了一个梦。

梦里，她站在一片茉莉花田里。花香浓郁，几乎要让人窒息。她往前走，想要走出花田，但花田没有尽头。

突然，她听到有人叫她。

“悠真。”

她转身，看到早川理纱站在花田边缘，朝她挥手。

“悠真，过来。”早川说，脸上带着温柔的笑容。

悠真想过去，但脚被花藤缠住了。她低头看去，发现那不是花藤，而是铃音的手。

“哥哥，”铃音从花丛中钻出来，脸上带着泪痕，“不要走。留在我身边。”

悠真看着早川，又看着铃音，陷入了两难。

而这时，茉莉花的香气越来越浓，浓到她几乎无法呼吸。

她醒来时，天已经黑了。

铃音还在睡，手还紧紧抱着她。悠真轻轻挪开妹妹的手，下床，走到窗边。

窗外，月亮很圆，星星很亮。

她看着夜空，心里涌起复杂的情绪。

对铃音的爱是真的。那种想要永远在一起，想要被占有，想要被需要的爱，是真的。

但对早川的好感也是真的。那种被温柔对待，被珍惜，被无条件包容的感觉，让她无法抗拒。

她不知道该怎么办。

不知道该怎么在铃音的独占欲和早川的温柔之间找到平衡。

不知道该怎么在“哥哥”和“姐姐”之间找到自己的位置。

不知道该怎么在这个新生的身体里，找到属于自己的答案。

她站了很久，直到腿有些发麻，才回到床上。

铃音在睡梦中动了动，本能地抱住了她，脸埋在她胸口。

悠真抱住妹妹，轻轻吻了吻她的头发。

“晚安，铃音。”她小声说。

然后，她闭上眼睛，强迫自己入睡。

明天，又是新的一天。

明天，她还要面对早川，面对铃音，面对这个越来越复杂的局面。

但她知道，无论发生什么，她都无法离开铃音。

因为铃音是她的一切。

是她的妹妹，是她的爱人，是她的……整个世界。

而这个世界，正在变得越来越小，越来越紧，越来越让她无法呼吸。

但她甘之如饴。

因为这就是爱。

扭曲的，偏执的，痛苦的，但真实的爱。

窗外，月亮被云层遮住，夜色更深了。

房间里，相拥而眠的两人，在彼此的体温里寻找着短暂的安宁。

而明天，还会有新的风暴。`,Nd=Object.freeze(Object.defineProperty({__proto__:null,default:Ad},Symbol.toStringTag,{value:"Module"})),Od=`---
order: 2
---

# TS哥哥和扶她妹妹

一个关于特殊兄妹关系的故事。

## 简介

就是骨科啦~



<ChapterList novel="tsandsis" />

---

⚠️ **警告**: 本作品包含成人内容，仅限18岁以上读者阅读。
`,Bd=Object.freeze(Object.defineProperty({__proto__:null,default:Od},Symbol.toStringTag,{value:"Module"})),Vd={key:0,class:"chapter-list"},xd=["href"],Ld=k({__name:"ChapterList",props:{novel:{},novelPath:{default:()=>""}},setup(p){const n=p;Bn();const e=N(()=>n.novelPath||n.novel),t=N(()=>{const a=Object.assign({"/articles/ark/index.md":xc,"/articles/tsandsis/chapter1.md":Cc,"/articles/tsandsis/chapter10.md":Ic,"/articles/tsandsis/chapter11.md":Dc,"/articles/tsandsis/chapter12.md":jc,"/articles/tsandsis/chapter13.md":Rc,"/articles/tsandsis/chapter14.md":Uc,"/articles/tsandsis/chapter15.md":Jc,"/articles/tsandsis/chapter16.md":Gc,"/articles/tsandsis/chapter17.md":Wc,"/articles/tsandsis/chapter18.md":Qc,"/articles/tsandsis/chapter19.md":Zc,"/articles/tsandsis/chapter2.md":pd,"/articles/tsandsis/chapter20.md":td,"/articles/tsandsis/chapter21.md":sd,"/articles/tsandsis/chapter22.md":rd,"/articles/tsandsis/chapter23.md":ld,"/articles/tsandsis/chapter24.md":dd,"/articles/tsandsis/chapter25.md":_d,"/articles/tsandsis/chapter3.md":md,"/articles/tsandsis/chapter4.md":vd,"/articles/tsandsis/chapter5.md":gd,"/articles/tsandsis/chapter6.md":kd,"/articles/tsandsis/chapter7.md":Td,"/articles/tsandsis/chapter8.md":Sd,"/articles/tsandsis/chapter9.md":Nd,"/articles/tsandsis/index.md":Bd}),o=u=>{if(typeof u=="string")return u;if(u&&typeof u=="object"){const f=u.__content;if(typeof f=="string")return f;const b=u.default;if(typeof b=="string")return b}return""},l=[],c=e.value;return Object.entries(a).forEach(([u,f])=>{const b=u.match(new RegExp(`/articles/${c}/(.+?)\\.md$`));if(!b)return;const v=b[1];if(v==="index")return;const $=o(f),P=$.match(/^---\s*\n([\s\S]*?)\n---/);let A=999,T=v;if(P){const M=P[1].match(/order:\s*(\d+)/);M&&(A=parseInt(M[1],10))}const B=$.match(/^#\s+(.+)$/m);B&&(T=B[1]),l.push({order:A,title:T,path:`/articles/${c}/${v}`})}),l.sort((u,f)=>u.order-f.order)});return(a,o)=>t.value.length>0?(s(),r("div",Vd,[o[0]||(o[0]=i("h2",null,"章节列表",-1)),i("ul",null,[(s(!0),r(w,null,z(t.value,l=>(s(),r("li",{key:l.path},[i("a",{href:l.path},L(l.title),9,xd)]))),128))])])):g("",!0)}}),Cd=h(Ld,[["__scopeId","data-v-2681bc47"]]),wd=`---
order: 2
---
# A.1 雪原与利刃的沉沦（拉普兰德1&德克萨斯0）

叙拉古的寒风卷着细雪，掠过矿场的断壁残垣，将铁锈、尘土与一丝未冷的血腥，调和成一种令人心悸的、带有死亡芬芳的催情剂。这气味像钩子，直直钩进大脑最原始的基底核，唤醒沉睡的兽性。德克萨斯收刀，刃归鞘的轻吟在死寂中格外清晰，仿佛斩断了最后一丝与理性的联系。她深蓝的瞳孔扫过终结的战场，指尖拂过黑色制服领口，微凉的触感却压不住皮肤下悄然苏醒的、如岩浆暗涌般的灼烫。生存是冰冷的刀锋，而此刻，另一种源自生命本源的、滚烫的生殖渴望，正撕裂她的冷静，如同雪原下奔突的熔岩。每一次呼吸，都吸入拉普兰德那浓烈得如同实质的、混合着血腥、汗意与纯粹发情期雌性费洛蒙的气息，这气息像无形的触手，缠绕着她的神经，粗暴地唤醒她卵巢深处沉睡的、渴望被填满、被播种的原始悸动。

“啧……” 一声喟叹自身后响起，带着砂砾摩擦般的沙哑，尾音慵入骨髓，像羽毛搔刮过最隐秘的神经末梢，更像利爪在刮擦交配的邀请板。“德克萨斯…你挥刀的样子，比这雪原上最烈的酒…更让人想把你按在身下，听着你的骨头在我撞击下呻吟…”

拉普兰德斜倚在阴影里，银白的长发流泻如月华，却又像束缚着风暴的丝缎。巨大的源石剑斜倚身侧，暗红的纹路如沉睡巨兽的脉络，与她熔金般的瞳孔交相辉映——那目光已不再是简单的火焰，而是粘稠的、带着实质重量的纯粹占有与生殖冲动的混合体。它缓慢地、一寸寸地舔舐过德克萨斯挺直的脊背、制服下起伏的腰线、包裹在布料中充满力量的长腿。每一寸凝视，都带着剥开衣物、用牙齿叼住肌肤留下烙印、用最原始的方式确认领地与配偶所有权的灼热想象。她独特的气息——浓烈得如同盛夏发情期母兽散发出的、裹挟着血腥、冰雪汗意与一种浓烈到近乎甜腻的、如同成熟浆果在烈日下爆裂般、纯粹为引诱雄性而存在的原始费洛蒙—— 不再是诱惑，而是一种强制性的生理信号，一种对配偶权的绝对宣告，霸道地钻进德克萨斯的鼻腔，渗入她的毛孔，粗暴地劫持了她的内分泌系统。她清晰地感觉到自己小腹深处那隐秘的子宫颈口因这强烈的召唤而悄然扩张、分泌出滑腻的爱液，违背着她冰冷的意志，只为迎接那幻想中强健、滚烫、带着源石粗粝感的入侵与播种。她的脚步未停，身体却绷紧如满弦之弓，细微的颤抖泄露了身体内部正上演的、被生殖本能彻底接管的风暴。

“急什么？” 拉普兰德的声音如同贴着耳骨滑入的低音，带着魔性的震颤和捕食者锁定猎物咽喉时的兴奋。她几步追上，狭窄的矿道瞬间被她的存在感塞满、挤压。那独特的气息更加浓郁，如同催情毒药，让德克萨斯几乎窒息。她的脚步钉在原地，身体却在本能地向热源倾斜。

“刚才那一步…” 滚烫的呼吸，带着湿意，精准地喷洒在德克萨斯最敏感的耳后——那里是信息素腺体的位置，是野兽标记伴侣的起点，是点燃原始性欲的开关。这触碰引发的不再是简单的战栗，而是一阵近乎痉挛的、源自脊髓深处的、直抵骨盆底肌的原始快感，让她双腿发软，膝盖几乎无法支撑身体的重量。一股温热粘稠的湿意失控地涌出，浸透了最内层的织物，散发出只为吸引眼前这个“雄性”而存在的、情动雌性独有的甜腥气味。

德克萨斯猝然驻足，侧首。昏暗的光线下，拉普兰德的脸近在咫尺。锐利的线条因情动而软化，饱满的唇瓣如同浸染了鲜血的玫瑰，微微张开，隐约可见湿润的舌尖，仿佛在无声地邀请撕咬与深入的交缠。那双熔金的眸子，此刻是翻涌着纯粹捕食与交配欲望的漩涡，贪婪地吞噬着德克萨斯的身影，传递着赤裸裸的、带着撕咬与融入骨血冲动的占有宣言：她渴望占有她，从灵魂到躯体，用最原始的方式进入她、填满她、在她身体最深处留下自己存在的烙印，直至生命的种子在灼热的甬道内找到归宿。

“……住口。” 德克萨斯的声音失去了冰封的铠甲，只剩下被原始情欲蒸腾的、沙哑的喘息和喉间压抑不住的、如同雌兽求偶般的细微呜咽。否认已毫无意义。拉普兰德的目光是淬毒的匕首，精准地剖开她所有冷漠的伪装，直刺她灵魂深处同样在疯狂嘶吼、渴求着融合、臣服与生殖释放的欲望核心。她清晰地感受到自己急促的脉搏在薄薄的皮肤下狂跳，感受到血液因极度情动而奔流带来的、如同发情期母兽般的灼热体温，更感受到双腿之间那隐秘的、因生殖腔道被彻底唤醒而汹涌流淌的、带着独特求偶气味的温热滑腻——那是她的身体对拉普兰德发出的、最古老、最无法抗拒的、要求即刻交配的生物信号。

“呵…” 拉普兰德低笑，那笑声带着情动的喘息，在矿洞中激起回响，如同发情期野兽的低吼。“你的身体…比你的嘴诚实多了，德克萨斯。它在向我求欢。” 她抬起手，这一次，指腹不再是试探，而是带着滚烫的、不容置疑的占有欲，极其缓慢地、带着狎昵的亵玩，抚上德克萨斯紧抿的、线条优美而诱人的下唇。那粗糙的、带着源石微粒的触感，如同点燃引信的火花，瞬间引爆了德克萨斯体内压抑到极致的洪峰。一阵强烈的、近乎灭顶的酥麻感从唇瓣蔓延至四肢百骸，让她抑制不住地发出一声极轻的、破碎的、充满情欲的哀鸣。

“感觉到了吗？” 拉普兰德的声音沙哑得如同梦呓，金眸紧锁着德克萨斯瞬间失焦、又燃起更猛烈情焰的深蓝眼瞳，“这里…在渴望我的亲吻。渴望被我啃咬、吸吮、直至红肿破皮，留下我的印记…渴望被我用舌头撬开，深入探索，掠夺你所有的呼吸和呜咽。” 她的指尖带着灼人的温度，顺着德克萨斯的下颌线滑落，如同丈量一件即将被彻底占有的战利品，带着狎昵的、宣告主权般的力道，最终停留在她急剧滚动、脆弱而性感的喉结上。那急促的搏动，是欲望最赤裸的献祭，是邀请被扼住、被征服的信号。

德克萨斯猛地攥住拉普兰德那只放肆的手腕，力道之大仿佛要捏碎她的骨头，将她融入自己的骨血，成为孕育后代的温床。她将她狠狠抵在冰冷粗粝的岩壁上，另一只手闪电般按上刀柄，身体却像一头被激怒又发情的雌兽，以最原始的侵略和献祭姿态严丝合缝地紧贴上去。压迫感与灼烧的生殖冲动在狭小的空间里激烈碰撞、爆炸、升腾。德克萨斯能清晰地感受到拉普兰德胸前饱满而富有弹性的柔软，隔着制服顶端的纽扣，摩擦着自己同样紧绷的曲线，引发一种想要撕开碍事布料、用牙齿叼住那敏感凸起的野蛮冲动，用唾液和齿痕标记这属于她的丰饶；能感受到她紧贴着自己的、充满力量与热度的腰胯，那处正散发着惊人的、如同雄性生殖器般滚烫坚硬的诱惑力；能闻到她身上那股更加浓郁的、混合着血腥、情动汗液与纯粹雌性诱惑的、如同催情毒药般的原始气息。这气息彻底麻痹了她的前额叶，让掌管生殖与快感的原始脑区完全接管了身体。血液轰鸣着涌向下腹，子宫因渴望而收缩、痉挛，分泌出更多滑腻的爱液，无声地呐喊着对侵入与填满的渴求。

“拉普兰德…你在自寻死路。” 德克萨斯的声音是从情欲深渊和生殖渴望的泥沼里挤出来的，带着浓重的喘息和一丝濒临高潮边缘的、无法自控的、雌性特有的泣音。她的眼神凶狠如被逼入绝境的母兽，但那凶狠之下，是同样被点燃的、想要被征服、被贯穿、在疼痛与极致快感中完成生命大和谐的、雌性最底层的生殖渴望。两人的身体紧密相贴，彼此都能感受到对方剧烈的心跳、灼热的体温、以及衣物下因情动而绷紧、湿润、甚至微微搏动着的、呼唤着彼此结合的隐秘核心。空气中弥漫着浓烈如实质的、混合着求偶信息素与生殖液气味的、令人窒息的本能芬芳。

拉普兰德非但没有退缩，反而像藤蔓般更紧地缠了上来。被攥住的手腕带来痛感，她却发出一声满足的喟叹，金色的瞳孔因情潮而放大，闪烁着纯粹的、掠夺与播种的光芒。她甚至微微仰起头，主动将脆弱的颈项暴露在德克萨斯的唇边，眼神迷离而充满诱惑，如同献祭的雌兽，又像致命的妖姬。“死路？” 她喘息着，声音因情欲而支离破碎，“德克萨斯…能在你的身体里释放，融化在你的最深处…是这冰冷世界…最美妙的归宿…” 她挺动腰肢，一个充满情色意味的、缓慢而磨人的顶胯动作，模拟着最原始的交媾节奏，隔着层层布料，清晰地、不容错辨地将自己同样高涨的、湿润的、渴望进入与释放的欲求，烙印在德克萨斯同样滚烫柔软的核心地带。那瞬间传递的、穿透衣物的湿热与渴望的坚硬轮廓，让德克萨斯脑中最后一丝理智的弦，铮然断裂！一股强烈的、源自子宫深处的收缩感席卷了她，几乎让她当场瘫软。

致命的沉默在情欲的熔炉中燃烧。水滴声被淹没在彼此粗重、交织的喘息和压抑不住的、如同野兽交配前奏般的低吟与呜咽里。

突然，拉普兰德蹙紧眉头，发出一声压抑的痛哼。德克萨斯敏锐的目光立刻锁住她手臂上那道在激烈厮磨中崩裂、渗出更多鲜血的伤口。鲜红的血珠如同红宝石般，顺着她结实而性感的小臂滑落，滴落在冰冷的岩石上，留下妖异的印记。这景象像一道闪电，劈开了情欲的浓雾——不是心疼，而是被血腥味彻底点燃的、更加狂暴的占有、标记与交配欲！那红色是最原始的刺激，是生命的颜色，是交配仪式中常见的催化剂！ 它激起了德克萨斯想要用舌头舔舐伤口、吸吮鲜血、用唾液混合血液涂抹在拉普兰德和自己身上、在这血腥的芬芳中完成最野蛮、最神圣的结合的、近乎兽性的冲动。

紧绷到极致的气氛出现了一丝带着血色的裂痕，但这裂痕中涌出的，是更炽热、更扭曲的欲望岩浆。

德克萨斯按在刀柄上的手，指节因用力而惨白，最终还是颤抖着松开。她眼中翻腾的情欲之火并未熄灭，反而被这抹鲜红浸染得更加妖异、深沉。她粗暴地拽过拉普兰德那只受伤的手臂，力道带着摧毁与占有的原始欲望。拉普兰德喘息着，金眸紧盯着她，里面的火焰因德克萨斯此刻展现出的、混合着暴戾与极致生殖关切的复杂情感而燃烧得更加疯狂。她甚至微微挺起受伤的手臂，像献上祭品，更像展示诱饵。

德克萨斯近乎撕扯般拿出消毒棉片，动作带着一种情欲未退的急躁和破坏性的占有欲。她低着头，深色刘海遮住了她眼中翻腾的、如同深渊般的生殖迷恋与渴求。冰凉的棉片狠狠按上翻卷的皮肉，拉普兰德身体剧烈一颤，喉咙里溢出一种介于痛苦与极致性快感之间的、悠长而媚惑的呻吟——那是疼痛刺激了内啡肽的分泌，与高涨到顶点的情欲混合成的致命毒药，是母兽在交配中承受撞击时发出的信号。这声音如同最精准的箭矢，射穿了德克萨斯紧绷的神经，让她包扎的手指无法控制地剧烈颤抖，指尖无意中深深陷入拉普兰德紧实而滚烫的臂肌，留下情欲的掐痕，如同交配中的抓挠。她近乎野蛮地缠绕着绷带，仿佛在进行一场原始的捆绑仪式，要将猎物（伴侣）永远禁锢在身边，成为她专属的生殖对象。她的动作毫无温柔，却充满了令人窒息的、带着毁灭与创造双重生殖意味的专注——一种只属于她们之间的、病态而纯粹的爱欲仪式。

“……疯狗。” 德克萨斯的声音沙哑得不成样子，带着情潮未褪的浓腻和一种近乎绝望的、对同类的生殖认同与归属感。她狠狠打了个死结，仿佛要将某种失控的、蚀骨的生殖渴望也一同封存。包扎完毕，她的手却像被磁石吸引，指尖带着滚烫的、近乎灼伤的温度，沿着绷带边缘，缓慢地、带着强烈生殖占有意味地，抚摸着拉普兰德裸露的、因情动而微微汗湿的、充满致命吸引力的肌肤纹理，一路滑向她结实紧绷的小臂内侧，那里跳动的脉搏，如同同步的、渴望生殖缠斗的生命鼓点。

拉普兰德的金眸瞬间暗沉如吞噬一切的黑洞，情欲在其中翻涌成灾。她猛地用未受伤的手抓住德克萨斯那只在肌肤上游走的、点火的手，滚烫的掌心带着源石的粗粝和情欲的粘腻，用力将她拉向自己，让两人再次陷入鼻息相融、生殖器几乎隔着布料顶撞在一起的距离。她的气息灼热地打在德克萨斯脸上，带着情动后特有的甜腻：“包扎好了？那现在…该轮到我…‘填满’你了…” 她的声音低哑魔魅，拇指极具挑逗性地、缓缓按压着德克萨斯手腕内侧最敏感的肌肤，感受着她脉搏的狂乱，眼神里是赤裸裸的、等待将彼此一同拖入生殖深渊的邀请。“告诉我…你哪里…最需要我…德克萨斯？是这里吗？” 她的指尖暗示性地滑向德克萨斯紧束制服的领口，目标是那剧烈起伏的、如同丰饶土地般召唤着生命播种的峰峦轮廓，更是下方那早已湿透、空虚地收缩着、渴望着被坚硬之物狠狠贯穿、直至子宫颈口的灼热甬道。

德克萨斯没有抽回手，也没有阻止那只放肆的手指。她猛地抬起头，深蓝的眼眸不再是冰冷的寒潭，也非单纯的怒焰。那里是一片被纯粹生殖本能点燃的、翻滚着渴望被彻底填满、被占据、被生命之力（或被对方）孕育的熔岩之海。她反手用力扣住拉普兰德的手，力道带着疼痛却也带着一种刻骨的生殖确认和归属感。她没有说话，只是用一个更深的、带着献祭般决绝的生殖姿态贴近，鼻尖几乎相触，唇瓣仅隔一线。她凝视着拉普兰德情欲翻涌的金眸，眼中燃烧的，是与她同等的、甚至更加强烈的、想要在彼此身体里刻下最深烙印、让灵魂与基因在生殖的熔炉中一同融合、在濒死般的极乐中完成生命延续的终极欲念之火。这无声的靠近，这交融的喘息，这眼中毫不掩饰的、如同雌兽向最强壮的配偶敞开一切的纯粹渴望，就是最直接、最致命的交配邀请。

拉普兰德嘴角咧开一个近乎癫狂的、美得惊心动魄的笑容，金眸中爆发出足以照亮整个矿洞的璀璨光芒。她不再犹豫，猛地低头，带着焚尽一切、完成生命大和谐的生殖决绝，目标直取那双让她魂牵梦萦、此刻只为她而湿润绽放的唇…… 她的另一只手，已本能地、带着不容抗拒的力量，探向德克萨斯制服下那早已泥泞不堪、收缩着等待征服的生命之门……

然而，就在双唇即将触碰、生殖器即将隔着薄薄布料进行第一次原始摩擦的刹那——

矿洞深处传来一声沉闷的、如同命运嘲弄般的巨响！巨大的石块轰然落下，激起的尘埃弥漫开来。

这冰冷的、粗暴的打断，像一盆带着冰碴的水，瞬间浇熄了几乎要吞噬一切的、即将喷薄的生殖烈焰。极致的眩晕感和下体强烈的、未被满足的空虚收缩感被强制拉回现实。

德克萨斯眼中翻腾的纯欲之火瞬间被冰冷的警觉取代，她近乎本能地用力将拉普兰德向安全地带一推，自己也踉跄着后退。拉普兰德发出一声野兽般的、充满暴戾、无尽遗憾与生殖冲动被强行中断的狂怒低吼，金色的瞳孔里是被强行掐灭的毁灭性欲求，但她同样握紧了巨剑，眼神凶狠地扫向崩塌处。她的身体因极度的情欲和生殖渴望未被释放而微微痉挛，双腿间一片湿冷粘腻，那是爱液与未得满足的空虚混合的证明。

冰冷的现实带着矿洞的尘土和死亡的阴影重新笼罩。

两人急促的喘息在死寂中如同雷鸣，空气中依旧弥漫着浓烈到令人面红耳赤的交配信息素与生殖液的气息，与尘土味混合成一种奇异而危险的芬芳。她们隔着弥漫的尘埃对视，那一眼里包含了太多：未燃尽的、足以焚毁灵魂的欲火；被强行剥离生殖融合的、噬骨的空虚与生理性的疼痛；以及一种更加深沉、更加刻骨的、在共赴生殖欲望深渊边缘确认了彼此是唯一归宿后的……永恒联结。那是一种比誓言更牢固的、以生殖本能和原始占有为名的灵魂烙印。

“……走！” 德克萨斯的声音破碎而沙哑，带着一丝情动高潮被强行中止后的虚软和生理性的失落，以及不容置疑的决绝。她率先转身，步伐急促，仿佛在逃离这个差点让她们彻底沉沦、万劫不复的生殖陷阱，又像是在奔向一个唯有她们知晓的、终将再次被点燃、被彼此彻底占有、填满直至孕育或毁灭的、隐秘的熔炉。她双腿间残留的湿滑和子宫深处那阵阵不甘的空虚收缩感，是拉普兰德刻下的、最原始的生殖契约。

拉普兰德伸出舌尖，缓慢地、带着无限回味地舔过自己依旧滚烫的唇瓣，仿佛上面还残留着德克萨斯气息的幻影。金眸如同锁定猎物的夜枭，紧紧攫住德克萨斯在尘雾中若隐若现的、充满力量与诱惑的背影，那背影中残留的一丝情动的虚软和行走间微微不自然的、因下体湿润粘腻而产生的摩擦，如同最烈的催化剂，将她未尽的征服欲、占有欲与生殖冲动推向新的巅峰。她扛起巨剑，大步流星地跟上，声音带着餍足前的极致饥饿、生殖渴望落空的暴戾和一种毁灭性的温柔：“当然，德克萨斯…我们‘离开’。但记住…” 她顿了顿，声音穿透尘埃，如同生殖魔咒，烙印在德克萨斯每一寸感官之上。“…你欠我的这个‘进入’，还有你身体里…为我流淌的蜜汁和渴望被填满的空洞…我会用最漫长、最彻底的方式…亲自来索取和浇灌。连本带利…在你的最深处释放我的所有…直至你我…一同在生殖的烈焰与生命的洪流中…化为一体，不分彼此。”

德克萨斯的身影在洞口刺眼的光亮中猛然顿住，没有回头。她紧握着腰间的刀柄，指关节因用力而泛白，身体却几不可察地剧烈颤抖了一下，一股新的暖流因这赤裸的生殖宣告而失控地涌出，浸湿了衣物。那并非抗拒，而是身体对那毁灭性生殖承诺最诚实的、带着战栗与极致渴望的回应。她体内那被强行压抑的熔岩，正因这宣告而更加汹涌地奔腾，渴望着下一次彻底的、毫无保留的侵入、爆发与生殖的交融。她的子宫仿佛已经感受到了那幻想中滚烫生命洪流的冲刷，发出一阵愉悦而贪婪的痉挛。

雪原的风裹挟着冰冷的雪花涌入洞口，试图冷却她们滚烫的肌肤和仍在分泌情动液体的隐秘地带，却徒劳无功。一前一后的身影，在苍茫雪地上投下扭曲纠缠、仿佛永生永世无法分离的影子。她们没有结合，没有亲吻，但空气中弥漫的、那混合着纯粹生殖渴望与原始情欲的、浓烈到令人窒息的张力，比任何身体的交合都更加惊心动魄，更加蚀骨销魂。这份在血与火、冰与欲、生与死的边缘淬炼出的生殖吸引，是灵魂与肉体的双重献祭，是征服与臣服的永恒悖论，是毁灭与重生的极致轮回。它如同一个未完成的、充满致命诱惑的生殖仪式，在寂静的雪原上、在她们每一次心跳的间隙里，无声地呼唤着下一次更加炽热、更加彻底的沉沦。直到她们在彼此的爱欲之火中，完成生命本能最原始、最澎湃的终极召唤——在极致的生殖结合中找到那唯一的、永恒的归宿，或在创造与毁灭的顶点化为灰烬。`,Id=Object.freeze(Object.defineProperty({__proto__:null,default:wd},Symbol.toStringTag,{value:"Module"})),Md=`---
order: 1
---

# 阿尔图罗的特别生日礼物~#1&#2

## #1 演奏与欲望的觉醒
罗德岛移动城邦的深处，远离了舰桥的喧嚣与工程部的轰鸣，在一处相对僻静的居住区内，一间被精心装点的小屋正散发着与平日截然不同的暖意与活力。这里是阿尔图罗的居所，今夜，它被赋予了新的意义——一场专为这位来自拉特兰的音乐天才少女举办的生日派对。

小屋的空间不算宽敞，却充满了用心。天花板被金银相间的彩带覆盖，它们并非随意悬挂，而是巧妙地编织出星辰的图案，在特意调暗的主灯光下，每一根彩带都仿佛吸收了星光，随着门缝偶尔溜进的微风或人走动带起的气流，轻轻摇曳、闪烁，如同将静谧夜空的一部分温柔地裁剪下来，悬置于这方温馨天地。墙角的几盆绿植——耐旱的仙人掌、叶片肥厚的多肉和一小簇攀援的常春藤——被细心地缠绕上暖黄色的微型灯串。灯泡细小如米粒，散发的光晕柔和而不刺眼，在叶片和枝蔓间投下斑驳的光影，为整个空间笼罩上一层朦胧而温暖的薄纱，仿佛童话森林边缘的精灵小屋。

长桌铺着洁白的亚麻桌布，上面俨然是一个微缩的甜品王国。造型精致的草莓慕斯蛋糕是当之无愧的主角，鲜红的草莓如同宝石镶嵌在雪白的奶油和浅粉的慕斯层上，散发着清甜诱人的果香。周围簇拥着马卡龙塔，缤纷的色彩像彩虹落入盘中；小巧的闪电泡芙淋着焦糖或巧克力酱，酥皮泛着诱人的光泽；还有堆叠如小山的松饼、点缀着蓝莓的芝士挞，以及晶莹剔透的水果布丁。空气中弥漫着复杂而和谐的香气：蛋糕的奶香、水果的酸甜、巧克力的醇厚、起泡酒开瓶瞬间溢出的果味气泡的清爽……它们交织在一起，形成一股令人愉悦微醺的暖流。高脚杯碰撞发出的清脆“叮当”声，伴随着朋友们压低的谈笑声，为这夜晚增添了几分恰到好处的暧昧与期待。五彩的气球慵懒地漂浮在离地面不远的半空中，彼此间轻微的碰撞发出“啪嗒、啪嗒”的轻响，像是派对心跳的余韵，又像是某种秘密在低语。

而房间的中心，毫无悬念地聚焦在今晚的寿星——阿尔图罗身上。这位拉特兰的少女，其存在本身就是一种令人屏息的艺术品。她静立在那里，如同一株在夜色中悄然绽放的墨色郁金香。一头如最上等黑丝绒般顺滑的长发，此刻并未像平日演奏时那样严谨地盘起，而是放任它们如瀑布般披散下来，流淌过她雪白圆润的肩头，几缕发丝调皮地滑落在精致的锁骨上。她的眼眸是独特的灰色，清冷、深邃，如同冬日清晨笼罩薄雾的湖面，平静之下仿佛蕴藏着未谱写的乐章与不为人知的思绪。一件质地轻透的白色薄纱披肩松松地搭在肩臂，半掩半露着内里那件剪裁合身的吊带内衬。内衬的丝绸面料紧贴着她纤细却富有生命力的腰肢，完美勾勒出少女柔美起伏的曲线。下身是一条包裹感极强的黑色短裙，恰到好处地托起她饱满挺翘的臀部弧线。裙摆的边缘，与延伸至大腿中部的黑色丝袜之间，是一道令人心颤的绝对领域——那抹暴露在温暖空气中的、白皙得晃眼的大腿肌肤，在黑色与白色的强烈视觉对比下，散发着无声而致命的诱惑。

那双玉腿的线条堪称造物主的杰作。黑丝袜紧裹着肉感匀称的小腿，一路向上，延伸至大腿中部，袜口边缘精致的蕾丝花边若隐若现。丝袜的材质在灯光下泛着高级绸缎般的柔滑光泽，细腻地勾勒出腿部每一寸肌肤的紧致与弹性。脚上是一双设计简约却极显气质的黑色高跟鞋，细长的鞋跟支撑起她优美的足弓，让小腿的线条愈发显得修长挺拔。足弓在鞋跟的托举下微微绷紧，脚趾在丝袜内若隐若现的轮廓，都流露出一种含蓄却撩人心弦的性感。她的双手被同样质感的黑色丝质长手套包裹，一直延伸至小臂。手套赋予她的指尖一种神秘的优雅感，仿佛那不是用来拨动琴弦的手，而是天生为了拨动人心最深处那根隐秘的弦而存在。

围绕在她身边的，是她最亲密的挚友，也是罗德岛上与她羁绊最深的人们：活力四射的能天使、慵懒锐利的德克萨斯、温柔神秘的莫斯提玛以及热情似火的菲亚梅塔。

能天使如同一簇永不熄灭的火焰。她标志性的红发在灯光下跳跃着炽热的光泽，几缕不羁的碎发贴在因兴奋而泛红的脸颊边。她斜倚在摆满甜点的长桌旁，手中端着一杯粉色的果酒，笑靥如花，那笑容仿佛能驱散任何阴霾。她明亮的金棕色眼眸闪烁着纯粹的快乐和一丝孩子气的俏皮，正毫不掩饰地欣赏着今晚的主角。

德克萨斯则像一头在暖阳下假寐的孤狼。她放松地倚靠在柔软的沙发里，灰色的短发带着些许慵懒的凌乱，几缕发丝垂落在光洁的额前。她深邃的紫罗兰色眼眸半眯着，目光穿过杯沿，落在阿尔图罗身上，那眼神深处藏着一丝不易察觉的戏谑和某种难以言喻的专注，仿佛在评估一件稀世珍宝，又或者在等待着什么有趣的事情发生。她的姿态放松，却自带一种不容忽视的气场。

莫斯提玛显得安静而充满期待。她坐在一张高脚凳上，纤细修长的手指无意识地轻轻敲打着桌面，发出几乎微不可闻的节奏。她湛蓝的眼眸如同静谧的深海，此刻却闪烁着期待的光芒，目光温柔地锁定在阿尔图罗身上，嘴角噙着一抹若有似无的笑意。她周身散发着一种神秘而包容的气息。

菲亚梅塔则像一团毫不掩饰的烈焰。她双臂环抱在胸前，这个动作无意间更凸显了她傲人的身材曲线。那头如燃烧晚霞般的橙红色长发肆意张扬，与她炽热的目光相得益彰。她的眼神大胆、直接，毫不避讳地在阿尔图罗身上逡巡，从精心打理的秀发到包裹着黑丝的足尖，那目光里充满了毫不掩饰的欣赏与……赤裸裸的渴望。她站在那里，就像一块磁石，吸引着周围的热度。

派对进行到某个微醺而放松的时刻，空气中弥漫着甜蜜与微醺的气息。能天使率先打破了这份带着暖意的宁静，她清脆的声音带着点撒娇的意味，像一颗投入平静湖面的石子：“阿尔图罗——”她拖长了尾音，眼睛亮晶晶地，像盛满了星星，“你可是我们罗德岛引以为傲的大音乐家诶！今天是你生日这么重要的日子，不为我们演奏一曲，可说不过去吧？”她歪着头，笑容灿烂得晃眼，仿佛提出的是一个再理所当然不过的要求。

德克萨斯发出一声低沉而富有磁性的轻笑，她放下手中的酒杯，身体微微前倾，目光带着一丝玩味投向阿尔图罗，接话道：“嗯哼。寿星，别让我们失望。”她的话语简洁，却带着一种不容置疑的份量，那深邃的眼神仿佛能穿透表象，看进对方的心底。

莫斯提玛停止了指尖的敲击，她转向阿尔图罗，轻轻地点了点头，蓝眸中温柔的期待如同月光般倾泻而出。虽然没有言语，但那无声的赞同比任何话语都更有力量。

菲亚梅塔则更为直接，她松开环抱的手臂，向前一步，声音带着火焰般的热情和一丝急不可耐的催促：“就是！快点，阿尔图罗，我都等不及要听你的新曲子了。生日演奏，这可是传统！”她的目光灼灼，仿佛已经听到了那美妙的琴音。

被朋友们如此热切地注视着、要求着，阿尔图罗那清冷的灰色眼眸深处，仿佛有涟漪轻轻荡开。她的唇角，极其缓慢地、如同初绽的花蕾般，向上弯起一抹浅淡却动人心魄的笑意。这笑容让她原本带着疏离感的美貌瞬间生动起来，如同冰封的湖面投入了阳光。她没有言语，只是优雅地、如同踩着无声乐章般，转身走向房间一角。

那里静静放置着她的伙伴——那架陪伴她无数日夜的竖琴。琴身线条流畅，木料温润，在昏黄的灯光下流淌着岁月沉淀的光泽。琴弦紧绷，如同等待被唤醒的月光，闪烁着冷冽而纯粹的银辉。阿尔图罗走到琴旁，姿态如同进行某种神圣的仪式。她缓缓坐下，动作轻盈而流畅。双腿自然地交叠在一起，那包裹着高级黑丝的玉腿线条在交叠的姿势下更显曼妙。随着坐下的动作，短裙的裙摆无可避免地微微上移了一寸，将那抹被黑色与白色夹击的、雪白柔嫩的大腿肌肤暴露得更多了些许，在灯光下泛着珍珠般的光泽。这无心的春光泄露，瞬间像磁石般吸引了在场所有朋友的目光，空气中仿佛响起无声的抽气声。

她挺直纤细的背脊，胸部在内衬柔滑丝绸的包裹下，随着呼吸微微起伏。娇小却形状完美的乳房轮廓清晰可见，顶端那两处小小的凸起，在薄薄的布料下若隐若现，随着她调整坐姿和气息而悄然变化着形态，散发着青涩又诱人的魅力。她抬起被黑色丝质手套包裹的双手，指尖悬停在冰冷的琴弦上方，如同即将指挥一场无形风暴的将领。

然后，她的指尖落下了。

第一个音符如同初春融化的第一滴雪水，从高山之巅轻盈坠落，带着清冽的凉意和纯净的生机，瞬间击穿了室内的喧嚣。紧接着，更多的音符流淌而出，汇聚成一条清澈见底、蜿蜒流淌的小溪。旋律柔美、空灵，带着拉特兰圣乐特有的纯净质感，却又奇妙地糅合了阿尔图罗个人独有的、难以言喻的魔力。这乐声仿佛拥有实体，温柔地填满了小屋的每一个角落，抚摸着墙壁，缠绕着灯串，渗透进每一个人的毛孔。

起初，朋友们只是静静地沉浸其中。能天使脸上的笑容变得柔和而沉醉，她微微闭着眼，身体随着旋律轻轻摇摆。德克萨斯放松地靠在沙发里，眼神中的锐利被一种朦胧的欣赏取代，手指无意识地摩挲着酒杯光滑的杯壁。莫斯提玛唇角含笑，蓝眸中倒映着演奏者的身影，仿佛在解读着旋律背后的故事。菲亚梅塔环抱的手臂不知何时已经放下，她专注地看着阿尔图罗灵动的指尖，眼中燃烧着纯粹的、对音乐之美的热爱。每个人脸上都带着温和、放松、享受的微笑，沉浸在寿星带来的美妙礼物中。

然而，阿尔图罗的演奏绝非凡响。她的音乐，是她灵魂的延伸，是她未被世人完全理解的源石技艺的载体。随着她指尖在琴弦上的力度与速度悄然变化，旋律开始升腾、转折。清澈的小溪渐渐汇聚成奔腾的河流，柔美的月光下悄然滋生出野性的藤蔓。那无形的魔力不再是温柔的抚慰，它仿佛化作了无数条由音符编织成的、半透明的触手，带着难以抗拒的魅惑力，悄无声息地缠绕上在场每一个人的心脏。

它们狡猾地撩拨着听者心底最深处那些被理智和日常压抑的、秘而不宣的欲望。渴望被触摸的肌肤、想要占有美好事物的冲动、对极致欢愉的隐秘幻想、深藏于心底的占有欲……这些平日里被牢牢锁住的野兽，在阿尔图罗那充满魔性魅力的琴音催化下，开始骚动，低吼，撞击着心灵的牢笼。

能天使脸上的沉醉渐渐被一种迷离所取代。她的金棕色眼眸失去了焦点，蒙上了一层水润的薄雾。红唇微微张开，原本轻快的呼吸变得急促而灼热，握着酒杯的手指不自觉地收紧，指节微微泛白。她感觉自己的身体内部像被点燃了一小簇火苗，并且正在不受控制地蔓延。

德克萨斯慵懒的姿态悄然绷紧。她深邃的紫眸变得更加幽暗，如同风暴来临前的深海。一丝原始的、极具侵略性的光芒在她眼底闪过。她原本随意搭在沙发扶手上的手，手指猛地攥紧了柔软的天鹅绒面料，指关节因为用力而凸起，仿佛在极力压制着什么即将破体而出的东西。她裙下的身体似乎也发生着微妙的变化，某个部位开始不受控制地充血、苏醒、坚硬，将原本顺滑的裙装布料顶起一个不容忽视的、紧绷的轮廓。

莫斯提玛那敲击桌面的指尖彻底停滞在半空。她湛蓝的眼眸瞬间睁大，瞳孔因惊讶和某种汹涌而来的感觉而微微扩张。那温柔如海的神情消失了，取而代之的是一种深沉的、带着漩涡般吸力的欲望。她的呼吸变得轻浅而短促，仿佛被那无形的音乐之手扼住了喉咙，又或者被拖入了情欲的深海。

菲亚梅塔的反应最为直接。她整个身体猛地向前倾，仿佛要扑向那乐音的源头。双臂早已不再环抱，而是垂在身侧，手指微微蜷曲着。她橙红色的眼眸中，那原本欣赏艺术的热忱彻底燃成了熊熊的欲火，炽热、滚烫、毫不掩饰地燃烧着，目光死死锁定在阿尔图罗因演奏而微微起伏的胸口和裙摆下若隐若现的绝对领域。她感到一股强烈的冲动在体内冲撞，几乎要破体而出。

阿尔图罗对此并非毫无察觉，但此刻，她自己也仿佛被自己的音乐所吞噬。她完全沉浸在这由她创造出的音律洪流中，灰色的眼眸半阖，长长的睫毛在眼下投下淡淡的阴影。她的指尖在琴弦上灵巧地跳跃、拨动、揉捻，每一个音符都饱含着情感，如泣如诉，如情人最缠绵悱恻的低语，在耳边厮磨，在心底撩拨。她修长的玉腿随着旋律的节奏无意识地轻轻晃动，黑丝包裹下的肌肤因为投入和房间内升腾的温度而渗出一层细密的汗珠，在灯光下折射出诱人的微光。纤细的足踝带动着高跟鞋，足弓时而因用力而绷紧，拉伸出极其性感的线条，时而又放松下来，那弧度优美的曲线依旧动人心魄。每一次腿部的晃动，都让裙摆的边缘与黑丝袜口之间那片雪白的肌肤暴露得更多一些，如同磁石般牢牢吸附着四道灼热的目光。

她胸部的起伏随着呼吸和演奏的投入变得更加明显。娇小的乳房在内衬的包裹下微微颤动，顶端的蓓蕾在薄薄的丝绸布料摩擦下，以及体内被自己音乐和周围氛围撩拨起的、无法言喻的悸动下，悄然变得坚硬、挺立，那两粒小小的凸点在布料下清晰地显现出来，随着她的动作和呼吸而起伏、颤抖，散发着一种纯真又淫靡的、致命的诱惑力。

“哇——！”

一声带着迷醉和惊叹的轻呼打破了旋律织就的魔网。能天使不知何时已经放下了酒杯，像一只被美妙乐声吸引的、无法自控的小动物，轻手轻脚地绕到了阿尔图罗的身后。她的红发在阿尔图罗的颈侧拂过，带来一丝微痒。她双手带着试探和难以抑制的渴望，轻轻搭在了阿尔图罗纤细而微微汗湿的肩头。

阿尔图罗的身体瞬间绷紧，如同受惊的琴弦，指尖在琴弦上猛地一顿，发出一声略显突兀的滑音。但她强大的专业素养让她迅速稳住了心神，指尖再次拨动，琴声只是微微一顿便恢复了流畅，只是那旋律中似乎注入了一丝不易察觉的颤抖。

能天使像是得到了某种默许的信号，立刻得寸进尺。她歪着头，将滚烫的脸颊凑近阿尔图罗敏感的耳廓，温热的、带着果酒甜香的气息如同羽毛般拂过那小巧的耳垂和颈侧细腻的肌肤。“阿尔图罗……”她的声音压得极低，带着一种甜腻的、近乎撒娇的语调，却又充满了某种危险的暗示，“你的音乐……真的好美……美得……让人心慌……我都听得心跳好快好快了呢……” 她一边说着，那搭在肩头的手，指尖开始不安分地轻轻滑动，感受着薄纱披肩下，阿尔图罗肩胛骨微妙的起伏和肌肤的温热。

阿尔图罗的脸颊无法抑制地飞起两朵红云，那红晕迅速蔓延至耳根，小巧精致的耳垂更是变得通红剔透，敏感地随着能天使的呼吸而微微颤动着。她努力集中精神，试图将全部注意力灌注在指尖的琴弦上，用音乐筑起一道脆弱的防线。

但这防线在能天使接下来的动作面前不堪一击。能天使那双不安分的手，开始从肩头缓缓向下滑落。掌心隔着薄薄的披肩和内衬，感受着阿尔图罗腰肢纤细而柔韧的曲线。然后，她双臂猛地收紧，从后方紧紧环抱住了阿尔图罗的腰肢。柔软而富有弹性的胸部毫无阻隔地贴上了阿尔图罗单薄的后背，那两团温热的、充满弹性的触感透过薄薄的衣料清晰地传递过来。

“嘻嘻……”能天使发出满足的轻笑，脸颊在阿尔图罗的颈窝处蹭了蹭，像一只终于找到心爱玩具的小猫，“你的腰好细哦……抱起来……真的超舒服的！” 她环抱着腰的手臂收紧，将两人的身体贴得更紧密。更过分的是，她的一只手开始在阿尔图罗的腰间轻轻抓挠，动作带着明显的挑逗意味，仿佛在逗弄一只害羞又敏感的猫咪，“别那么紧绷嘛，放轻松，今天可是你的生日哦！”

“啊……能天使……别……别闹……”阿尔图罗终于忍不住，小声地、带着一丝慌乱和喘息地抗议出来。琴声因她指尖的剧烈颤抖而再次走调，几个音符变得破碎而凌乱。她能清晰地感受到身后紧贴的、充满活力的身体曲线，以及腰间那带着魔力般不断撩拨她神经的手指。一种从未有过的、混合着羞耻和奇异快感的电流在体内乱窜。

“闹？我才没有闹呢！”能天使笑得更欢，嘴唇几乎要贴上阿尔图罗那红得滴血的耳垂，吐气如兰，“是你的音乐太迷人了……它钻进我的耳朵，流进我的心里，挠得我痒痒的……让我忍不住……想多亲近你一点……再多一点……” 她的声音如同浸了蜜糖的毒药。而她的手，那只原本在腰间作乱的手，此刻竟大胆地、缓慢地向上游移，越过了肋骨，最终隔着那层薄薄的丝绸内衬，覆盖在了阿尔图罗左侧娇小的乳房上！

掌心下，那柔软而富有弹性的触感，以及那顶端已然硬挺、清晰可辨的蓓蕾凸起，让能天使的呼吸也随之一窒。她下意识地、带着探索和顽皮的心态，用指尖轻轻戳了戳那处敏感的尖端。

“唔——！”

一声短促而甜腻的娇喘猛地从阿尔图罗紧咬的唇瓣间溢出，如同被强行挤出的呻吟。她的身体像被电流击中般剧烈地一颤，大脑瞬间一片空白。原本在琴弦上顽强坚持的指尖彻底失去了控制，胡乱地扫过琴弦，发出一阵刺耳混乱的噪音。

竖琴的余音在突然降临的寂静中嗡嗡作响。

阿尔图罗猛地转过头，灰色的眼眸不复清冷，而是蒙上了一层水汽氤氲的薄雾，如同被惊扰的湖面。她微微张着红唇，胸口剧烈地起伏着，急促的喘息声清晰可闻。她看向能天使，眼神中充满了惊愕、羞耻，以及一丝连她自己都未曾察觉的、被点燃的渴望。“能……能天使……你……” 她的声音带着明显的颤抖和情动的沙哑，几乎说不出完整的句子。

能天使眨了眨她那依旧明亮却明显染上情欲色彩的眼睛，笑容灿烂得像个做了坏事却理直气壮的小太阳：“怎么啦？阿尔图罗？是不是很开心？我看你脸都红透啦！像熟透的苹果呢！” 她非但没有收敛，反而像是被阿尔图罗的反应所鼓励，那只覆盖在少女胸前的手掌，变本加厉地轻轻捏了一下那挺立的蓓蕾。

“啊嗯……！” 阿尔图罗的身体再次剧烈地抖动了一下，腰肢在能天使的怀抱里不自觉地扭动了一下，试图摆脱那太过刺激的触碰，却更像是欲拒还迎的摩擦。

这声带着哭腔的呻吟和阿尔图罗此刻诱人的情态，如同投入滚油的火星。

德克萨斯猛地从沙发上站了起来。她的动作带着一种压抑许久的、充满爆发力的急切。原本慵懒的神情消失无踪，紫眸中燃烧着赤裸裸的欲望火焰。更引人注目的是，她紧身短裙的下摆处，那被顶起的轮廓变得更加坚硬、硕大，几乎要撑破布料的束缚，清晰地宣告着某种难以抑制的雄性渴望已然完全苏醒、昂扬。她的目光如同实质般扫过阿尔图罗被能天使揉弄得泛红的脸颊和被薄汗浸湿的颈项，喉咙里发出一声低沉而沙哑的轻哼。

莫斯提玛和菲亚梅塔也像是收到了无声的冲锋号角，同时从自己的位置快步围了上来。莫斯提玛的蓝眸中温柔不再，只剩下深不见底的、漩涡般的占有欲。菲亚梅塔更是如同扑火的飞蛾，橙红的眼眸中烈焰熊熊，目光如同舔舐般扫过阿尔图罗裸露在外的每一寸肌肤。

能天使看着围拢过来的伙伴们，脸上露出了一个混合着得意、兴奋和某种“共犯”意味的灿烂笑容。她依然紧紧抱着阿尔图罗的腰，脸颊亲密地贴着阿尔图罗滚烫的颈侧，对着她红透的耳朵，用一种宣告般的、带着无尽诱惑的语调低语道：“看吧，阿尔图罗，你的音乐……把我们所有人的心都点燃了呢……现在……” 她故意拖长了音调，感受着怀中身体因紧张和期待而微微的颤抖，“我们要一起……给你一个最最难忘、最最特别的生日惊喜哦！准备好了吗？”

空气中的温度仿佛在瞬间被点燃，攀升到令人窒息的程度。甜点的香气、酒精的微醺、汗水的味道、还有那名为情欲的、原始而浓烈的气息，交织融合，形成一种令人头晕目眩、血脉贲张的浓烈氛围。派对那原本温馨欢快的表象被彻底撕裂，露出了底下汹涌澎湃的、欲望狂欢的底色。
## #2 初绽的禁果与欲望的洪流
罗德岛那间曾弥漫着生日欢愉的小屋，此刻已彻底沦陷于情欲的漩涡。第一章精心装点的梦幻星辰——那些摇曳着星光的金银彩带，如今只在昏黄灯影下勾勒出肢体交缠的暧昧轮廓；墙角绿植间细小的暖黄灯泡，散发的柔和光晕笼罩的不再是笑语欢声，而是交织着灼热喘息与压抑低吟的淫靡氛围。桌上草莓慕斯的清甜与起泡酒的果香，顽强地试图证明这里曾有过一场派对，却终究被另一种更原始、更浓郁的气息所覆盖——那是阿尔图罗情动时分泌的、独特而诱人的蜜液芬芳，混合着细密汗珠的咸湿，以及空气中弥漫的、几乎令人窒息的欲望热度。漂浮的气球彼此碰撞，发出规律的“啪嗒”轻响，如同这场隐秘狂欢的节拍器。

小屋的中心，阿尔图罗·吉亚洛，这位来自拉特兰的音乐天使，正被她的挚友们紧密簇拥。她的理智，那层在第一章末尾被能天使的耳语挑逗、被朋友们炽热目光灼烧得摇摇欲坠的薄纱，此刻在欲望滔天的热浪中彻底消融、蒸发。无意识的、带着甜腻哭腔的呻吟，正不受控制地从她微张的唇瓣间断续溢出，每一次轻喘都像投入干柴的火星，让围猎者们眼中的火焰燃烧得更加炽烈。

她美丽得令人心颤。如墨的长发早已凌乱，几缕湿濡的发丝黏在光洁的额角和雪白泛红的肩颈上。灰色的眼眸不复往日的清冷深邃，此刻盛满了迷蒙的水雾，羞怯、茫然与一种被陌生快感驱使的无助在其中交织翻滚。第一章里那件优雅的白色薄纱披肩早已不知所踪，黑色的吊带内衬被粗暴地扯开，半挂在臂弯，暴露出她形状姣好却并不丰满的娇乳。粉嫩的乳头失去了布料的庇护，在微凉的空气和无数道灼热视线的聚焦下，已然硬挺如两颗熟透的、亟待采撷的樱桃，闪烁着湿润而脆弱的光泽。黑色短裙被高高撩起，堆叠在纤细的腰肢，露出其下大片晃眼的雪白肌肤——那是连接着被高级黑丝袜紧紧包裹的肉感玉腿的绝对领域。丝袜上缘精致的蕾丝花边若隐若现，袜口勒出的浅浅凹陷更衬得那裸露的大腿根部肌肤柔嫩得仿佛能掐出水，此刻正覆盖着一层细密的汗珠，在灯光下折射出淫靡的光泽。她的双腿被德克萨斯有力地分开着，腿心处，那件纯白的蕾丝内裤早已被大量涌出的蜜液浸透，紧紧贴合着微微贲张的花瓣，勾勒出诱人的轮廓，湿黏的布料下，粉嫩的缝隙隐约可见，晶莹的露珠正不断渗出、汇聚、顺着饱满的大腿内侧滑落，在透肉的黑丝上留下蜿蜒闪亮的水痕。那双曾优雅拨动琴弦的玉足，此刻一只黑色高跟鞋已被德克萨斯褪下，另一只仍虚虚挂在足尖，包裹在黑丝中的纤足因快感的冲击而足弓紧绷，脚趾在黑丝下无助地蜷缩、伸展，勾勒出令人心痒的曲线。她的双手，戴着那副标志性的黑色丝质长手套，此刻正无措地抓握着能天使环在她腰间的手臂，指尖的颤抖透露出主人内心的巨大波澜。

能天使——蕾缪乐，如同一只成功捕获了心爱猎物的红色小恶魔，紧密地贴在阿尔图罗光滑汗湿的后背上。她火红的发丝蹭着阿尔图罗敏感的颈窝，带来一阵阵细微的麻痒。双臂如藤蔓般牢牢环抱着阿尔图罗不盈一握的腰肢，一只手的指尖在她平坦紧绷的小腹上画着撩拨人心的圈，另一只手则如同最高明的琴师，正准备在她这具青涩的乐器上奏响更激烈的乐章。“阿尔图罗~”能天使将滚烫的唇凑近阿尔图罗那早已红透、敏感得微微颤抖的耳廓，用带着果酒甜香和压抑不住兴奋的气音低语，每一个字都像羽毛搔刮着阿尔图罗脆弱的神经，“听，你的声音多美妙……比刚才的琴声更能点燃人心呢。看看大家，都被你这副模样迷得神魂颠倒了哦……” 她的声音轻快又带着一丝得逞的坏笑，目光扫过围拢的同伴，如同炫耀自己最得意的作品。

阿尔图罗的喘息更加急促，灰色眼眸中的水雾几乎要凝结成珠滚落。德克萨斯就跪在她被分开的双腿之间，灰发下的紫眸炽热得如同熔岩，紧盯着那被湿透内裤包裹的秘密花园。她裙下那惊人的、属于FUTA的昂扬之物，早已将布料顶起一个无法忽视的、粗壮而紧绷的轮廓，浓烈的雄性气息扑面而来，让阿尔图罗心慌意乱。莫斯提玛和菲亚梅塔一左一右，如同最耐心的掠食者。莫斯提玛修长的手指正沿着阿尔图罗被黑丝包裹的大腿内侧，极其缓慢地、带着探索意味地向上游移，指尖划过丝袜的细微沙沙声，如同催情的魔咒；菲亚梅塔则已经解开了阿尔图罗内衬剩余的纽扣，橙红色的眼眸燃烧着赤裸的渴望，目光灼灼地流连在那对挺立的粉嫩乳尖上。

“求……求你们……别、别再……”阿尔图罗的声音细若蚊蚋，带着浓重的哭腔和无法抑制的颤抖。她试图扭动身体逃离这令人羞耻的境地，试图合拢被德克萨斯稳稳分开的双腿，但身体的深处，一股股陌生的、汹涌的热流正不受控制地涌向腿间，将那片纯白蕾丝浸染得更加深色，那浓郁的情动气息在空气中弥漫开来，引得周围的呼吸声都瞬间粗重了几分。她死死咬住下唇，试图堵住喉间那羞人的呻吟，却被能天使接下来的动作彻底击溃。

“嘻嘻，嘴上说着不要，可这里……”能天使的指尖如灵蛇般滑上阿尔图罗的胸膛，精准地捏住了她左侧那颗早已硬如红豆的乳头，带着一种顽皮的、不容拒绝的力道，轻轻揉捻起来。“……却在诚实地呼唤我呢。” 能天使坏笑着，感受着掌心下那小小的蓓蕾在自己指腹的碾压下变得更加坚硬、肿胀。

“啊——！” 如同被一道强烈的电流贯穿脊椎，阿尔图罗的身体猛地向上弹起，又重重落回能天使怀中。一声短促而高亢的惊喘冲破了她紧咬的唇关，灰眸瞬间睁大，瞳孔里满是难以置信的、被剧烈快感冲击的茫然。这突如其来的刺激太过强烈，乳头传来的混合着细微痛楚的极致酥麻感，像一颗火星直接引爆了她体内堆积的、无处宣泄的燥热。

“哇哦！反应好可爱！”能天使像是发现了最有趣的玩具，金棕色的眼眸闪闪发亮。她非但没有停手，反而变本加厉，指尖开始在那颗可怜的蓓蕾上打着圈摩挲，时而用指甲轻轻刮搔敏感的乳晕，时而又恶作剧般地用力掐一下那硬挺的尖端。

“唔嗯……不……能天使……那里……不行……”阿尔图罗的声音彻底破碎了，带着被快感逼出的哭腔和无法抑制的颤抖。每一次揉捏，每一次掐弄，都让她腰肢像濒死的鱼一样无助扭动，被德克萨斯握住的脚踝也不自觉地绷紧，足弓在黑丝下弯出诱人的弧度。从未被如此对待过的乳头传来一波强过一波的陌生快感，与她下体不断涌出的湿滑热流汇合，冲击着她摇摇欲坠的意识。她甚至能清晰地感觉到，随着能天使的玩弄，自己腿心那片湿黏的布料下，隐秘的花瓣似乎在不自觉地翕动、收缩，挤出更多温热的蜜液。

仿佛是接收到了某种信号，围猎者们开始了更默契的配合。德克萨斯俯下身，双手捧起阿尔图罗那只仍穿着高跟鞋的玉足。她的动作带着一种奇异的、不容置疑的温柔，指尖却蕴含着灼热的力量。她灵巧地解开细带，将那精致的黑色高跟鞋轻轻脱下，随意丢在一旁。现在，阿尔图罗的双足都赤裸地被包裹在黑丝之中。德克萨斯温热的掌心托住她的脚踝，拇指开始在那敏感的足弓处缓缓按压、画圈。“你的脚……真美，阿尔图罗。”德克萨斯低沉沙哑的声音带着一种磁性的蛊惑力，紫眸紧锁着阿尔图罗因刺激而微微抽搐的足尖。黑丝光滑的触感下，足弓的曲线被清晰地勾勒出来。每一次有力的按压，都让阿尔图罗感觉一股奇异的、混杂着痒意的酥麻感从脚心直窜上头顶，让她忍不住发出一声细弱的呜咽：“唔……别……那里……好痒……” 她的脚趾在黑丝下难耐地蜷缩又伸展，试图躲避这陌生又磨人的刺激，却只是让足部的线条更加魅惑。

与此同时，莫斯提玛的手指已经越过了大腿中段，正轻柔地、带着试探性地按压着阿尔图罗大腿根部那片最为丰腴柔嫩的软肉，指尖隔着薄薄的黑丝感受着肌肤惊人的弹性和温热。“这里……也让人无法移开视线呢，阿尔图罗。”莫斯提玛温柔的声音在耳边响起，却带着深海漩涡般的吸力。她的指尖仿佛带着魔力，在敏感的腿根内侧流连，时而用指腹打着圈按压，时而用指甲轻轻划过丝袜表面。阿尔图罗的大腿内侧肌肤异常敏感，每一次触碰都像有细微的电流窜过，让她浑身泛起细小的鸡皮疙瘩，身体不受控制地轻颤。她能清晰地感觉到，在莫斯提玛持续的、充满暗示性的抚摸下，腿心深处涌出的蜜液更加汹涌了，甚至能听到细微的、湿黏的水声从被内裤包裹的地方传来。她夹紧双腿的本能再次被唤起，却再次被德克萨斯稳稳压制住，只能从喉间溢出断续的、带着泣音的呻吟：“啊……停、停下……好奇怪……感觉……要坏掉了……” 那声音娇软无力，充满了被未知快感折磨的羞耻与无助。

而菲亚梅塔，则完全专注于那对暴露在空气中的、被能天使玩弄到饱胀挺立的娇乳。她粗糙一些的指腹直接抚上阿尔图罗右侧的乳晕，带着一种不容置疑的占有欲，绕着那可怜的、同样硬挺的乳尖打转。“皮肤滑得像最上等的丝绸……”菲亚梅塔的声音带着一丝压抑的粗喘，橙红的眼眸紧盯着在自己的揉捏下不断变化的乳尖形状。她不像能天使那样花样百出，动作却更加直接有力。她突然用拇指和食指捏住那粉嫩的尖端，带着一种欣赏又蹂躏的力道，不轻不重地掐了一下。

“啊啊啊——！疼……！” 阿尔图罗的身体如同被强弓拉满般猛地向上弹起，脖颈向后弯出一道优美的、脆弱的弧线，一声凄楚又掺杂着极致快感的尖叫撕裂了空气。剧烈的疼痛感从敏感的乳尖炸开，瞬间席卷全身，却奇异地与她体内奔腾的、被撩拨到顶点的欲火融合，形成一种灭顶般的、令人眩晕的感官风暴。眼泪终于无法抑制地涌出，顺着泛红的脸颊滚落。

“疼？”能天使在阿尔图罗耳边轻笑，气息灼热，“可是，看看这里……”她的目光意有所指地扫过阿尔图罗剧烈起伏的胸口和被泪水打湿的脸庞，“还有这里……”环在阿尔图罗腰间的左手，终于沿着平坦的小腹一路向下，滑过那片早已泥泞的绝对领域，隔着那湿透得近乎透明的白色蕾丝内裤，精准地按在了她腿心最敏感、最隐秘的核心之上——那颗微微凸起的、充血的小小珍珠。

当能天使带着薄茧的指尖隔着湿黏的布料，用力按压在那从未被触碰过的核心点时——

时间仿佛在阿尔图罗的感知中停滞了一瞬。

一股前所未有的、排山倒海般的、纯粹而剧烈的快感，如同积蓄了千年的火山，毫无征兆地在她身体最深处轰然爆发！那感觉太过猛烈，太过陌生，瞬间吞噬了乳尖的疼痛、足心的麻痒、大腿内侧的酥麻……吞噬了她所有的思考、羞耻、抗拒！

“噫呀啊啊啊啊啊——————！！！”

一声尖锐到变调、混合着极致痛苦与无边欢愉的哭喊，猛地从阿尔图罗的喉咙深处迸发出来，撕裂了小屋内淫靡的空气。她的身体像一张被拉到极限的弓，每一个关节都因巨大的冲击而僵硬、反张！灰眸骤然失焦，瞳孔放大，视线里的一切都变成了炫目的白光。纤细的脖颈青筋微微凸起，头无力地向后仰去，靠在能天使的肩头，张大的红唇只能发出破碎的、不成调的呜咽和抽气声。

她的双腿在德克萨斯的手中剧烈地痉挛、蹬踹，包裹着黑丝的玉足绷得笔直，足弓弯折到一个惊人的、几乎要断裂的弧度，脚趾在黑丝下死死蜷缩成一团。腰肢如同风中的柳条般疯狂地向上挺动、扭摆，仿佛要逃离那带来灭顶快感的源头，又像是绝望地迎合、索求更多。平坦的小腹剧烈地起伏、抽搐，每一次痉挛都伴随着腿心深处一股股温热粘稠的蜜液不受控制地猛烈喷涌而出，将本就湿透的内裤彻底浸透，甚至穿透薄薄的布料，淋漓地溅洒在她自己白皙的大腿内侧、德克萨斯的手上，以及下方的地板上。浓郁得化不开的、独属于她情动巅峰的芬芳气息，如同最浓烈的催情剂，瞬间在狭小的空间里爆炸般弥漫开来。

这失控的、剧烈的身体反应持续了仿佛一个世纪那么漫长。当那毁天灭地般的快感洪流终于稍稍退潮，阿尔图罗像被抽走了所有骨头，浑身瘫软如泥，彻底陷落在能天使的怀抱里。她的身体仍在无法控制地细微颤抖、痉挛，每一次轻颤都带出腿间又一股温热的蜜液。急促的喘息如同破旧的风箱，胸口剧烈起伏，两颗饱受蹂躏的乳尖在空气中可怜地颤动着。灰眸失神地望着天花板上摇曳的彩带光影，长长的睫毛上挂着晶莹的泪珠，眼神空洞而茫然，仿佛灵魂都被那陌生的巅峰快感撞飞了出去，只剩下一个被彻底开发、初尝情欲滋味的、敏感而脆弱的躯壳。大颗的汗珠顺着她潮红的肌肤滚落，与泪水和腿间淋漓的蜜液混合在一起。

房间里陷入了短暂的、诡异的寂静。只有阿尔图罗破碎的喘息声和蜜液滴落的细微声响。

能天使低头看着怀中如同一滩春水般失神的少女，脸上露出了一个混合着惊叹、得意和某种更深沉欲望的灿烂笑容。“哇哦……阿尔图罗……”她的声音带着一丝餍足的沙哑，手指依旧留恋地停留在那刚刚经历过风暴、仍在微微搏动的敏感核心上，感受着指尖下花唇的痉挛和源源不断涌出的温热湿滑，“你高潮的样子……真是美得让人心碎呢。”她俯身，用鼻尖亲昵地蹭了蹭阿尔图罗汗湿的鬓角，像在安抚，又像在宣告所有权。

这声赞叹如同解除封印的咒语。

德克萨斯握着阿尔图罗玉足的手猛地收紧，指关节因用力而泛白，紫眸中的火焰几乎要化为实质。她盯着那被黑丝包裹、因高潮而显得格外诱人的足弓，喉结剧烈地滚动了一下。

莫斯提玛停留在阿尔图罗腿根的手指微微陷入那柔软的肌肤，蓝眸深处的漩涡翻涌着，仿佛要将那还在微微抽搐的腿心吞没。

菲亚梅塔则直接俯身，滚烫的唇舌带着不容拒绝的力道，猛地含住了阿尔图罗右侧那颗依旧硬挺、沾着泪水和汗水的乳尖！湿热的包裹和有力的吸吮，让阿尔图罗失神的身体再次剧烈地弹跳了一下，发出一声微弱到几不可闻的抽泣。

空气中，那混合着少女初潮蜜液、汗水和情欲的气息，浓郁得令人窒息。派对的气氛，在这一刻被阿尔图罗失控的初次高潮彻底点燃至沸点。而这场由音乐唤醒、由能天使引导的欲望盛宴，才刚刚揭开它更疯狂、更深入的序幕。众人眼中燃烧的火焰，预示着阿尔图罗这具刚刚被打开情欲之门的身躯，即将迎来更为汹涌澎湃的探索与占有。
`,Dd=Object.freeze(Object.defineProperty({__proto__:null,default:Md},Symbol.toStringTag,{value:"Module"})),Ed=`---
order: 2
---

# B.A.3&4 阿尔图罗的生日“派对”~#3&#4

## #3 唇舌的初启与欲望的教习
罗德岛那间曾回响着圣洁琴音的小屋，此刻彻底沦为了原始欲望的熔炉。第一章精心编织的梦幻星辰——那些悬挂在屋顶、曾映照着少女羞涩笑颜的金银彩带，如今只在刻意调暗的昏黄光线下，扭曲地映照出肢体纠缠、汗水淋漓的剪影。墙角绿植间，细小的暖黄色灯泡依旧散发着柔和光晕，却再也无法照亮欢声笑语，只能无力地笼罩着此起彼伏的、压抑不住的粗重喘息、粘腻水声和破碎娇吟交织成的淫靡交响。桌上残留的草莓慕斯散发出最后一丝徒劳的甜香，与早已挥发殆尽的起泡酒果味，被一种更浓烈、更原始的气息彻底覆盖、吞噬——那是阿尔图罗情潮涌动时分泌的、馥郁而独特的蜜液芬芳，混合着三位FUTA干员昂扬之物渗出的、带着浓烈雄性荷尔蒙的腥咸前液，以及所有人皮肤上蒸腾出的、情热灼烧下的咸涩汗水。这几种气味在狭小温暖的空间里发酵、交融，形成一股令人头晕目眩、血脉贲张的催情浓雾。那些曾象征着生日欢庆的彩色气球，慵懒地漂浮在半空，彼此碰撞发出的“啪嗒、啪嗒”轻响，此刻听来，竟如同这场隐秘而狂野的肉体盛宴那单调又执着的节拍。

小屋的中心，柔软的地毯之上，阿尔图罗·吉亚洛如同被暴风雨摧折过的名贵花卉，瘫软在欲望的泥泞之中。仅仅片刻之前，在第二章的结尾，那场由能天使亲手引导、在她从未被触及的阴蒂核心引爆的、足以撕裂灵魂的初次高潮，几乎将她所有的力气与理智都抽空了。此刻，她墨色的长发被汗水浸湿，凌乱地黏在光洁却泛着情动红潮的额角、颈侧和雪白的肩背上。那双曾倒映着拉特兰星空的灰色眼眸，此刻盛满了迷蒙的水汽，失神地望着天花板上摇曳的彩带光影，瞳孔深处残留着高潮的余悸、巨大的茫然，以及对刚刚席卷全身的灭顶快感的、懵懂而脆弱的烙印。她的身体像一具被彻底打开的精美乐器，每一寸肌肤都透着惊人的敏感度，任何细微的触碰都可能引发一串失控的颤栗。

她身上的衣物早已不成样子。象征优雅的白色薄纱披肩早已不知所踪。黑色的吊带内衬被粗暴地完全解开，像两块无用的破布般滑落在臂弯和腰侧，将她形状姣好却并不丰满的娇乳彻底暴露在浑浊的空气中，也暴露在四道如同实质般舔舐着她的灼热目光之下。那对粉嫩的乳头，在经历了能天使的肆意揉捏掐弄后，此刻依旧硬挺如两颗饱受蹂躏却更加诱人的熟透樱桃，可怜兮兮地颤动着，顶端闪烁着被唾液、汗水和可能残留的泪滴浸润的脆弱光泽。黑色的短裙被高高卷起，堆叠在她纤细得不盈一握的腰肢，像一道黑色的束缚环，勒在雪白与肉感的交界线上。裙摆之下，是那片曾让所有人心驰神往的“绝对领域”——连接着被高级透肉黑丝袜紧紧包裹的、充满肉感弹性的玉腿的雪白肌肤。此刻，这片肌肤覆盖着一层细密晶亮的汗珠，在昏黄灯光下闪烁着淫靡的光泽。更引人注目的是腿心处：那件纯白的蕾丝内裤，被第二章高潮时汹涌喷发的蜜液彻底浸透，湿黏地紧贴在微微贲张的花瓣上，勾勒出饱满诱人的轮廓，布料几乎变成了透明，隐约可见其下粉嫩的花瓣缝隙和不断渗出、汇聚、流淌的晶莹露珠。大量的蜜液甚至穿透了薄薄的布料，淋漓地顺着饱满的大腿内侧滑落，在透肉的黑丝上留下蜿蜒闪亮的水痕，最终滴落在身下的地毯上，形成一小滩深色的、散发着浓郁甜腥气息的印记。她的双腿无力地微微分开着，一只包裹在黑丝中的纤足上还虚虚挂着那只精致的黑色高跟鞋，足弓因残余的快感而微微绷紧；另一只脚上的鞋则被德克萨斯褪下，裸露的黑丝玉足脚趾微微蜷缩，透着一种被亵玩后的脆弱美感。她的双手，戴着那副标志性的、赋予她神秘优雅感的黑色丝质长手套，此刻却只能无措地虚按在自己剧烈起伏的小腹或是地毯上，指尖细微的颤抖，是她内心巨大波澜的唯一证明。

能天使——蕾缪乐，如同这场欲望盛宴最热情也最狡黠的司仪与导师，此刻正蹲跪在阿尔图罗身前。她火红的发丝随着动作跳跃，如同永不熄灭的火焰，映衬着她脸上那混合着得意、宠溺和一丝顽劣坏笑的灿烂表情。她伸出食指，带着一种不容拒绝的温柔，轻轻挑起阿尔图罗小巧精致的下巴，迫使那双失神的灰眸对上自己亮晶晶的金棕色眼睛。

“阿尔图罗~”能天使将滚烫的唇凑近阿尔图罗那依旧红透、敏感得几乎透明的耳廓，用带着果酒微醺甜香和压抑不住兴奋的气音低语，湿热的气息如同羽毛搔刮着阿尔图罗最脆弱的神经，“看啊，你的身体……诚实得让人心醉呢。这里……”她的指尖，带着一丝凉意，极其轻柔地划过阿尔图罗剧烈起伏的胸口，掠过那挺立的乳尖，引得少女身体又是一阵敏感的轻颤和一声细弱的抽泣，最终停留在她腿间那片湿透黏腻的蕾丝布料上，隔着布料，精准地按压在下方那颗刚刚经历过风暴、仍在微微搏动的敏感核心上。“……还在源源不断地诉说着渴望。刚才你绽放的样子，美得像只被雨露打湿的小兔子，让人忍不住……想把你彻底弄坏哦。” 能天使的声音轻快得像唱歌，内容却充满了危险的诱惑，目光扫过围拢在阿尔图罗身边、如同等待分食猎物的猛兽般的三个同伴。

德克萨斯、莫斯提玛、菲亚梅塔——三人如同最稳固的三角，将阿尔图罗围在中心。她们的目光如同实质的火焰，灼烧着阿尔图罗裸露的每一寸肌肤。更不容忽视的是她们裙下的景象：紧绷的布料被底下完全勃发、昂扬挺立的炽热之物顶起三个异常粗壮、轮廓分明的凸起。那尺寸远超寻常，彰显着FUTA惊人的天赋，伴随着主人粗重的呼吸和忍耐的渴望，在布料下微微脉动、跳动，散发出浓烈到几乎化为实质的雄性腥咸气息，混合着淡淡的、独特的体味（德克萨斯的如同冷冽雪松下的暗火，莫斯提玛的如同幽深海沟的咸涩，菲亚梅塔的则像燃烧的硫磺矿），与阿尔图罗自身散发的甜腥蜜液芬芳激烈地冲撞、融合，构成了这间小屋最令人窒息的催情剂。

“呜……不……求求你们……真的……不行了……”阿尔图罗的声音细若游丝，带着浓重的哭腔和无法抑制的颤抖，如同被蛛网捕获的蝶翼。她本能地想要抬起虚软的手臂，掩住自己暴露在空气中的、被反复玩弄的胸乳，却被能天使带着不容置疑力道的双手轻轻按住手腕，压回身侧。“不要看……”她徒劳地祈求着，但那对挺立的、饱受蹂躏的乳尖，却仿佛在无数道灼热视线的聚焦下变得更加敏感、硬挺，甚至随着她急促的呼吸而微微颤动，诚实地诉说着身体的反应，引得围观的三人喉结滚动，呼吸更加粗重。

“不要看？”能天使咯咯笑起来，像听到了最有趣的笑话，金棕色的眼眸弯成了月牙，“可是，阿尔图罗，你的身体在发光啊！每一寸肌肤，每一次颤抖，都在无声地呐喊着‘看着我、触碰我、占有我’……”她一边说着，那只按压在阿尔图罗腿间的手，开始隔着湿透黏腻的蕾丝内裤，用指腹极其缓慢、却带着磨人力量地揉动起来。她的目标清晰无比——再次找到那颗让阿尔图罗彻底崩溃的、充血的小小珍珠。“尤其是这里……”她的指尖精准地施加压力，隔着布料碾磨着那颗敏感的核心。“……它跳动得如此急切，像一颗等待被唤醒的星星。” 能天使的声音如同恶魔的低语。

“噫——！啊……住……住手……” 如同被通了高压电，阿尔图罗的身体猛地向上弹起，纤细的腰肢在能天使的压制下绝望地扭动，试图逃离那致命的指尖，却只是让摩擦更加剧烈。一声短促而高亢的惊喘冲破了她紧咬的唇关，灰眸瞬间蒙上更浓的水雾，瞳孔因骤然席卷的快感而收缩。能天使的每一次揉压，都像有细小的电流直接击打在神经最密集之处，与她体内尚未平息的欲火余烬猛烈碰撞，瞬间复燃成燎原之势。蜜液不受控制地再次大量涌出，将那片可怜的蕾丝内裤浸染得更加深透，湿黏的布料紧紧吸附着花瓣，勾勒出更加清晰的轮廓。

“嘻嘻，看吧，它多诚实！”能天使得意地笑着，像炫耀自己最成功的实验。她的指尖非但没有停下，反而变本加厉，开始隔着那层湿透的屏障，用指腹快速地在阴蒂核心上打着圈摩挲，时而加重力道按压，时而又用指甲隔着布料轻轻刮搔敏感的缝隙边缘。每一次动作都精准地撩拨着阿尔图罗最脆弱的神经末梢。

“啊啊啊……能天使……求求你……别……那里……不行了……真的……”阿尔图罗的声音彻底破碎了，带着被剧烈快感逼出的、濒临崩溃的哭腔。她的双腿在黑丝的包裹下无助地蹬踹着，脚趾蜷缩，足弓绷紧。被德克萨斯握过的那只玉足，脚心似乎还残留着被按压的酥麻感，此刻混合着下体传来的灭顶刺激，让她整个人像暴风雨中的小船般剧烈颠簸。从未想过同一个地方被反复刺激，竟能带来如此连绵不绝、几乎要将意识冲散的可怕快感浪潮。她能清晰地感觉到腿心深处花径的痉挛和收缩，每一次收缩都挤出更多温热的蜜液，浸透内裤，甚至顺着大腿内侧滑落，与地毯上之前的痕迹汇合。

看着阿尔图罗在自己的指尖下再次濒临失控的边缘，能天使眼中闪烁着狡黠而兴奋的光芒。她似乎觉得光是玩弄阿尔图罗还不够，这场“生日惊喜”需要更精彩的节目。她猛地收回了在阿尔图罗腿间作恶的手指，在阿尔图罗如释重负又莫名空虚的抽泣声中，站起身，拍了拍手，清脆的掌声在小屋内显得格外突兀。

“好啦，小寿星，光是享受可不够哦~”能天使脸上洋溢着那种准备恶作剧的孩子般的灿烂笑容，目光转向如同一尊沉默燃烧的雕像般矗立在一旁的德克萨斯，“生日派对，要大家一起玩才开心！现在，让姐姐来教你，怎么让你的朋友们也‘开心’起来！”她的声音充满了蛊惑力，仿佛在邀请阿尔图罗参与一场最有趣的游戏。

在阿尔图罗茫然又带着一丝不祥预感的注视下，能天使如同最灵巧的舞者，几步就绕到了德克萨斯面前。德克萨斯灰发下的紫眸深不见底，如同酝酿着风暴的夜空，紧盯着能天使，也穿透能天使锁定在阿尔图罗身上。能天使毫不畏惧地迎上那极具压迫感的目光，嘴角勾起一抹坏笑。她伸出手，动作干脆利落，带着一种不容置疑的熟稔，“唰啦”一声，解开了德克萨斯紧身短裙侧边的隐藏拉链。

束缚解除的瞬间，德克萨斯裙下那早已忍耐到极限的昂扬之物，如同挣脱囚笼的凶兽，猛地弹跳出来，暴露在昏黄的灯光下！阿尔图罗的灰眸瞬间睁大，倒吸了一口凉气。

那绝对是一件令人震撼的、充满雄性侵略性的造物。尺寸惊人，长度和粗度都远超阿尔图罗贫瘠认知的想象，如同用最坚硬的大理石精心雕琢而成，却又蕴含着活物般的灼热生命力。深红的柱身上，虬结着鼓胀的青色血管，随着脉搏有力地搏动，彰显着内部奔涌的炽热岩浆。硕大的龟头如同饱满的紫红蘑菇，顶端因极度兴奋而不断渗出晶莹粘稠的前液，拉出细长的银丝，散发着最为浓烈、最为原始的雄性腥咸气息，混合着一丝冷冽如雪松般的独特体味，扑面而来，霸道地侵入阿尔图罗的感官。它骄傲地昂首挺立，直指阿尔图罗的方向，微微跳动着，仿佛在无声地宣示着主权和亟待释放的欲望。

能天使仿佛对眼前这极具视觉冲击力的景象习以为常。她毫不犹豫地在德克萨斯身前跪了下来，姿态虔诚又带着一丝亵渎的诱惑。她微微歪着头，火红的发丝垂落，像在欣赏一件艺术品。然后，她伸出嫣红的舌尖，如同品尝最珍贵的蜜糖，极其缓慢地、带着挑逗意味地，从德克萨斯肉棒最根部那饱满的囊袋开始，沿着那鼓胀的青筋和灼热的茎身，一路向上舔舐！

“嗯……”德克萨斯发出一声低沉而压抑的闷哼，身体瞬间绷紧，如同拉满的弓弦。紫眸中的风暴更加猛烈。能天使的舌尖灵活得像一条小蛇，带着微微的凉意和湿滑的触感，所过之处，点燃了德克萨斯每一寸敏感的肌肤。她清晰地感受到肉棒在能天使的舔弄下猛地一跳，变得更加坚硬滚烫，顶端渗出的前液也更多了。

能天使的舔舐最终抵达了那饱胀的龟头顶端。她没有急于含入，而是用舌尖如同描绘最精密的纹路般，绕着敏感的冠状沟一圈圈地打转，时而用舌尖轻轻挑逗顶端的铃口，刮去那里不断渗出的、带着浓烈腥咸和微苦味道的晶莹液体。

“啧…”能天使故意发出细微的吮吸声，将舌尖上沾染的前液卷入口中，金棕色的眼眸微微眯起，像在品味。随即，她抬起眼，目光越过德克萨斯紧绷的小腹，直直看向瘫坐在地、目瞪口呆的阿尔图罗，嘴角勾起一抹坏笑。

“看到了吗，阿尔图罗？”能天使的声音带着一丝喘息，却清晰地在粘腻的空气里响起，“这里…冠状沟，还有顶端这个小孔，是最最敏感的地方哦。”她一边说着，一边再次用舌尖快速地在冠状沟的凹陷处来回扫动，同时用指腹轻轻揉捏着德克萨斯的囊袋。德克萨斯喉间又溢出一声更重的闷哼，肉棒在她舌尖下剧烈地搏动着。

“要像这样…用舌尖去舔，去钻…像品尝最甜的蜂蜜…”能天使示范着，舌尖灵巧地在龟头表面快速点刺、打圈，“味道嘛…一开始会有点咸，有点苦…像浓缩的海水…但习惯了，就会尝到里面藏着的…让人兴奋的东西…”她的话语充满了赤裸裸的诱导，同时，她微微张开红唇，如同含住一颗滚烫的糖果，缓缓地将德克萨斯硕大的龟头整个纳入口中！

“嘶——”德克萨斯猛地吸了一口气，下腹肌肉瞬间绷紧。能天使的口腔温暖、湿润、紧致，如同最上等的丝绒包裹着他最敏感的部位。她能感觉到能天使灵活的舌头正紧紧贴着他的冠状沟下方，用力地向上顶弄、舔舐着那片最要命的区域。她开始有节奏地吞吐，头部前后运动，每一次深入，都努力让更多的茎身进入那温暖湿润的包裹。她的喉咙深处发出低沉的“咕啾…咕啾…”声，那是唾液与分泌液混合、空气被挤压的声音，淫靡得令人面红耳赤。

能天使一边卖力地吞吐着，一边还能分神看向阿尔图罗。她的眼神带着笑意和鼓励，虽然无法说话，但那眼神分明在说：“看，就是这样！学着点！”

阿尔图罗看着能天使的红唇被德克萨斯深色的肉棒撑开到极限，看着她白皙的脖颈因深喉的尝试而拉伸出优美的线条，听着那粘腻的水声和德克萨斯压抑的喘息，她的心脏狂跳得几乎要冲破胸膛。一股强烈的、混杂着羞耻、好奇和难以言喻的燥热感在她下腹炸开。她能清晰地感觉到自己的腿心再次变得一片泥泞，蜜液不受控制地涌出，甚至发出了细微的“咕唧”声。她的脸颊滚烫，灰眸迷蒙，嘴唇不自觉地微微张开，舌尖无意识地舔过自己干燥的下唇。

“呜……”她发出一声细微的、连自己都未察觉的呜咽，身体深处涌起一股强烈的空虚感，仿佛有什么东西在渴望着被填满。

似乎是觉得示范得差不多了，能天使缓缓吐出口中的巨物，带出一缕银亮的唾液丝线。德克萨斯的肉棒湿漉漉的，在灯光下闪着淫靡的水光，比之前更加怒张。能天使微微喘息着，唇瓣被摩擦得更加红艳。她看向阿尔图罗，眼中闪烁着狡黠的光芒：“怎么样？想试试吗？别怕，很简单的…就像吃一根特别大、特别热的棒棒糖！菲亚梅塔会很温柔的，对吧？”她说着，目光转向旁边早已按捺不住的菲亚梅塔。

菲亚梅塔橙红的眼眸如同燃烧的熔岩，她早已解开自己的束缚，那根同样尺寸惊人、颜色略浅但同样青筋暴突的昂扬之物正骄傲地挺立着，顶端不断渗出晶莹的液体，散发着如同燃烧硫磺矿般炽烈独特的雄性气息。她对着阿尔图罗露出一个充满侵略性却又带着鼓励的笑容：“来吧，阿尔图罗，让我也尝尝拉特兰音乐家的‘演奏’…”她的声音低沉沙哑，充满了迫不及待。

能天使站起身，走到阿尔图罗身边，不由分说地抓住她戴着黑丝手套的手腕。阿尔图罗的手下意识地瑟缩了一下，但能天使的力量不容抗拒。“先从手开始，感受一下。”能天使的声音带着诱哄，引导着阿尔图罗的手，缓缓伸向菲亚梅塔那根灼热跳动的昂扬之物。

当阿尔图罗戴着柔滑丝质手套的指尖，终于触碰到那滚烫的、如同烙铁般的柱身时——

“啊！” 阿尔图罗和菲亚梅塔同时发出一声低呼。

阿尔图罗是出于极度的震惊和陌生感。那温度高得惊人，透过薄薄的黑丝手套依然能清晰地感受到其内部奔涌的炽热生命力。硬度如同钢铁，却又带着活物的弹性和搏动。粗砺的筋络在掌心下起伏，每一次跳动都像撞击着她的心脏。一种难以言喻的、混合着恐惧和奇异吸引力的感觉攫住了她。

菲亚梅塔则是纯粹的、被那包裹着柔滑丝绸的冰凉小手触碰所带来的极致舒爽。她满足地喟叹一声：“哈啊…对…阿尔图罗…就是这样…”她的身体微微前倾，主动将自己的炽热更紧地送入阿尔图罗的掌心。

“握紧一点…对，用整个手掌包裹住它…”能天使站在阿尔图罗身后，双手覆在她的手背上，手把手地教导着。她的身体紧贴着阿尔图罗的后背，柔软的胸脯挤压着阿尔图罗单薄的脊背，嘴唇贴着阿尔图罗的耳廓，温热的气息不断喷吐着，“上下滑动…手腕用力…对…拇指可以绕着顶端打圈…照顾一下这里…它喜欢被这样抚摸…”能天使引导着阿尔图罗的手，在菲亚梅塔的肉棒上开始生涩地撸动起来。黑丝手套柔滑的触感与少女掌心微凉的体温，形成了奇妙的刺激。

“唔…嗯…阿尔图罗…你的手…好舒服…”菲亚梅塔毫不吝啬她的赞美，仰起头，喉间溢出满足的呻吟，腰肢不自觉地随着阿尔图罗的动作轻轻挺动。她能感觉到那生涩的动作带来的、别具一格的快感，看着阿尔图罗那副既害羞又认真的迷蒙表情，更是让她的欲望之火燃烧得更加旺盛。

就在阿尔图罗逐渐适应了手中的触感和节奏，指尖传来一丝微妙的、仿佛自己也获得某种掌控感的奇异快感时，能天使那只邪恶的手，再次悄无声息地滑到了她的腿间！这一次，没有任何布料的阻隔！能天使的手指灵巧地拨开那早已湿透黏腻的蕾丝内裤边缘，带着一丝凉意的指尖，直接触碰到了阿尔图罗暴露在外的、依旧敏感充血的花瓣和那颗可怜的小小珍珠！

“咿呀——！” 阿尔图罗的身体如同被高压电击中般猛地向上弹起，一声尖锐的惊叫撕裂了空气。手中的动作瞬间停止，她下意识地想夹紧双腿，却被能天使用膝盖顶住。能天使的指尖如同最高明的琴师，精准地按压、揉捻着那颗敏感的阴蒂核心，同时另一只手引导着阿尔图罗的手继续在菲亚梅塔的肉棒上撸动。

“别停啊，阿尔图罗…菲亚梅塔正舒服着呢…”能天使在她耳边恶魔般地低语，指尖揉动的力度和频率骤然加快！“你看，你的小豆豆又硬起来了…它也很喜欢这样，对不对？”

双重的、截然不同的强烈刺激如同两股汹涌的洪流，同时冲击着阿尔图罗脆弱的感官堤坝。下体传来的、源自自身敏感核心的、尖锐而熟悉的快感浪潮，与掌心握着的、属于菲亚梅塔的、滚烫跳动的、充满侵略性的雄性象征带来的陌生刺激感，在她混乱的大脑中激烈碰撞、融合。她的身体像狂风中的落叶般剧烈颤抖，灰眸彻底失焦，口中只能发出不成调的、断断续续的呜咽和呻吟。她握着菲亚梅塔肉棒的手，在能天使的强制引导和无意识的身体痉挛中，时而收紧时而放松，动作变得混乱而无章法，反而带来一种意外的、折磨人的快感，让菲亚梅塔也忍不住闷哼出声。

“啊…啊…能天使…不要…那里…我…我握不住…呜…”阿尔图罗的声音带着崩溃的哭腔，身体在能天使的怀抱里无助地扭动挣扎，试图摆脱那要命的指尖，却又无法抗拒那灭顶的快感，蜜液如同开了闸的洪水般汹涌而出，顺着大腿内侧肆意流淌。

看着阿尔图罗被自己玩弄到濒临崩溃、又在双重刺激下无力反抗的诱人模样，能天使眼中闪烁着兴奋和满意的光芒。她暂时放缓了揉弄阴蒂的动作，给了阿尔图罗一丝喘息之机，但手指依旧停留在那湿滑的花园入口。

“做得很好，阿尔图罗。”能天使的声音带着一丝慵懒的沙哑，像在夸奖一只完成指令的小宠物。“那么，现在…让我们进行下一步，真正的‘品尝’。”她的目光再次投向菲亚梅塔那根被阿尔图罗戴着手套的手撸动得更加胀大、顶端不断渗出晶莹液体的昂扬之物。

“来，张开嘴…”能天使轻轻捏住阿尔图罗的下巴，迫使她抬起头，看向菲亚梅塔灼热的橙红眼眸和那根近在咫尺的、散发着浓烈硫磺般雄性气息的炽热象征。阿尔图罗的灰眸中充满了巨大的恐惧、羞耻和一丝被撩拨到极点的、懵懂的渴望。她的嘴唇颤抖着，微微张开一条缝隙，露出里面一点粉嫩的舌尖。

“别怕，像刚才看我做的那样…”能天使的声音带着蛊惑，另一只手引导着阿尔图罗的手，暂时离开了菲亚梅塔的肉棒。菲亚梅塔主动向前一步，那饱胀的、湿漉漉的龟头几乎要碰到阿尔图罗的鼻尖，腥咸炽热的气息扑面而来。

在能天使的鼓励（或者说强制）下，阿尔图罗闭上眼睛，长长的睫毛如同受惊的蝶翼般剧烈颤抖。她仿佛下定了某种决心，又像是被体内的欲望和能天使的意志驱使，终于，慢慢地、试探性地，伸出了那小巧粉嫩的舌尖，如同初生的小动物般，带着极度的羞涩和不确定，轻轻地、快速地舔了一下菲亚梅塔龟头顶端那不断渗出的、晶莹粘稠的前液！

一股极其浓烈、霸道、带着明显苦味和咸涩、如同浓缩海水混合着燃烧矿物的味道，瞬间在她敏感的舌尖炸开！阿尔图罗的身体猛地一颤，喉咙里发出一声细小的、混合着不适和惊讶的呜咽：“嗯…！”她下意识地想缩回舌头，却被能天使按住了后脑。

“别躲…习惯一下…它的味道，就是菲亚梅塔的味道哦…”能天使在她耳边低语，带着不容置疑的意味，“现在…张开嘴，含住它…一点点就好…”

阿尔图罗的眼角渗出羞耻的泪珠，在能天使的引导和菲亚梅塔灼热期待的注视下，她终于微微张开了红唇，颤抖着，小心翼翼地将菲亚梅塔硕大滚烫的龟头前端，纳入了自己温暖湿润的口腔之中！

“嘶——哈啊！”菲亚梅塔发出一声满足的、悠长的叹息，身体瞬间绷紧。当阿尔图罗温热、柔软、带着微微颤抖的口腔包裹住她最敏感部位的那一刻，一股难以言喻的、极致的舒爽感如同电流般窜遍她的全身。她能清晰地感觉到阿尔图罗口腔内壁的细腻软肉和那生涩僵硬的舌尖。

口腔被完全陌生的、巨大的、滚烫的异物强行撑开填满的感觉，让阿尔图罗瞬间感到窒息和强烈的异物感！她的眼睛蓦地睁大，灰眸中充满了不知所措的惊恐。她本能地想干呕，想推开，但能天使的手牢牢按着她的后脑，另一只停留在她腿间的手又开始不轻不重地揉弄她的阴蒂！

“呜…！咕…嗯…”阿尔图罗的喉咙里发出痛苦的呜咽和抑制干呕的声音，泪水瞬间涌出。但与此同时，下体传来的熟悉快感又让她身体一阵阵发软、发烫。这种痛苦与快感交织的、冰火两重天的感觉，让她彻底迷失。

“放松…阿尔图罗…用舌头…舔它…”能天使的声音如同催眠，指尖在阴蒂上施加着稳定的压力。她引导着阿尔图罗的头部，开始极其缓慢地前后移动。

阿尔图罗在巨大的混乱和双重刺激的夹击下，只能被动地遵从。她强忍着不适和窒息感，努力放松紧绷的喉咙，生涩地尝试用僵硬的舌尖，去舔舐口腔中那滚烫巨物的表面。她的动作笨拙而迟疑，舌尖小心翼翼地扫过龟头顶端敏感的铃口，刮过冠状沟的边缘。每一次舔舐，都让菲亚梅塔的呼吸更加粗重，肉棒在她口中跳动得更加剧烈，渗出更多腥咸的液体，充斥着她的口腔。

那浓烈的味道依旧让阿尔图罗不适，但在能天使持续的、带有魔力的揉弄下，一种奇异的、扭曲的兴奋感开始在她体内滋生。口腔被填满的窒息感，与下体被玩弄带来的灭顶快感，形成了一种诡异的、令人沉沦的循环。她的呜咽声渐渐带上了一丝甜腻的鼻音，身体在能天使的怀抱里难耐地扭动，被撑开的嘴角无法控制地流下透明的唾液，混合着菲亚梅塔的前液，沿着下巴滴落，在她雪白的胸口和黑色的内衬上留下淫靡的水痕。

“对…就是这样…阿尔图罗…你学得真快…”能天使满意地低笑着，感受着怀中身体剧烈的颤抖和腿间越来越汹涌的湿意。她的目光扫过旁边，德克萨斯正沉默地看着，紫眸深暗，下颚线紧绷，显然在极力忍耐；莫斯提玛则微微眯着蓝眸，唇角勾起一抹神秘的弧度，似乎很享受眼前的景象。

能天使可没忘记另一位观众。她一边继续按着阿尔图罗的后脑，让她生涩地为菲亚梅塔服务，一边伸出自己空闲的左手，精准地握住了莫斯提玛同样昂扬挺立的肉棒！

莫斯提玛的身体微微一震，发出一声低沉而愉悦的轻哼。能天使的手法与教导阿尔图罗时完全不同，那是久经沙场的熟练。她的手指修长有力，包裹住莫斯提玛深色的柱身，开始快速而富有技巧地上下撸动！她的拇指精准地按压着顶端敏感的冠状沟，指腹不时揉捏着饱满的龟头，同时手腕灵巧地旋转，带来全方位的刺激。另一根手指还时不时地滑到下方，轻轻揉捏托起那沉甸甸的囊袋。

“嗯……”莫斯提玛的叹息如同深海涌动的暗流，带着一种餍足的慵懒。她的身体微微前倾，闭着眼睛，享受着能天使娴熟的服务。能天使的撸动速度极快，力道适中，每一次都从根部直撸到顶端，指腹刮过敏感的冠状沟时，总能引起莫斯提玛一阵细微的颤抖和更多前液的分泌。空气中又增添了一股如同深海藻类般幽深咸涩的气息。

小屋内的景象此刻达到了一个淫靡的顶峰：

阿尔图罗跪坐在菲亚梅塔腿间，红唇被那粗大的肉棒撑开到极限，生涩而艰难地吞吐着前端，灰眸含泪，眼神迷离失焦，唾液混合着前液顺着嘴角和下颚不断流淌，滴落在胸口和地毯上。她的身体在能天使的怀抱里剧烈地颤抖着，每一次细微的移动都伴随着一声压抑的呜咽或甜腻的鼻音。能天使的一只手按着她的后脑，控制着节奏（虽然极其缓慢），另一只手则在她腿间湿漉漉的花园里持续作恶，指尖精准地蹂躏着那颗饱受摧残的阴蒂。
菲亚梅塔低头看着为自己“服务”的阿尔图罗，橙红的眼眸燃烧着炽烈的火焰，双手时而按在自己的大腿上，时而无意识地抬起想要按住阿尔图罗的头（但被能天使的眼神制止），身体随着阿尔图罗生涩的动作而微微挺动，口中发出满足而鼓励的呻吟：“啊…对…阿尔图罗…舌头…再用点力…哈啊…”
能天使跪坐在阿尔图罗身后，如同一个掌控全局的提线木偶师。她一边“指导”着阿尔图罗的口交，一边用左手为莫斯提玛提供着高效而刺激的手部服务，动作快速而精准。她的脸上带着一种混合着兴奋、满足和恶作剧成功的红晕。
莫斯提玛微微仰头站着，享受着能天使的服务，蓝眸半阖，唇角带着神秘的微笑，喉咙里溢出低沉的、愉悦的哼声。
德克萨斯如同沉默的守护者（或者说掠食者）般矗立在一旁，双手抱臂，但紧握的拳头和手臂上绷起的肌肉线条暴露了她并不平静的内心。她的目光如同冰冷的火焰，紧紧锁住阿尔图罗被侵犯的口唇和被能天使玩弄的身体，裙下那根沉寂片刻的昂扬之物，似乎又有了蠢蠢欲动的迹象，散发出更加浓烈的冷冽气息。
空气中，阿尔图罗甜腥的蜜液、菲亚梅塔硫磺般炽烈的雄性气息、莫斯提玛深海般的咸涩体味、德克萨斯冷冽的雪松气息、能天使的果酒甜香、以及所有人蒸腾的汗味，还有精液前液特有的浓烈腥咸……这些气味激烈地混合、发酵，形成一股足以让人理智崩坏的催情浓雾。粘腻的水声（能天使为莫斯提玛手交的快速撸动声、阿尔图罗生涩吞吐的口水声）、粗重的喘息（菲亚梅塔和莫斯提玛）、压抑的呻吟（阿尔图罗）、低沉的哼声（德克萨斯）交织在一起，构成了这场堕落盛宴最原始的背景音。

阿尔图罗就在这感官的狂风暴雨中沉浮。口腔被菲亚梅塔滚烫的象征填满、撑开，每一次生涩的舔舐和浅尝辄止的吞吐都伴随着窒息感和浓烈的腥咸味道；而下体，能天使那仿佛永不停歇的指尖，持续不断地在她最敏感的阴蒂核心上施加着精准而残酷的快感刑罚，如同持续的电击，让她全身的神经都在尖叫；同时，她还能清晰地听到旁边能天使为莫斯提玛手交发出的、节奏飞快的黏腻撸动声，以及感受到德克萨斯那如同实质般刺穿她的冰冷目光……这一切混杂在一起，形成一股巨大的、摧毁性的洪流，冲击着她脆弱的意识堤防。

“唔…咕…嗯啊…不…”她的呻吟被口中的巨物堵得支离破碎，变成了模糊的呜咽。身体在极致的痛苦（口腔的不适）和极致的快感（阴蒂的刺激）之间疯狂摇摆，眼泪混合着唾液和前液不断流淌。她的腰肢在能天使的怀抱里难耐地、绝望地扭动着，仿佛在祈求解脱，又像是在索求更多。腿心深处，花径在持续的阴蒂高潮边缘疯狂痉挛、收缩，挤出大量温热的蜜液，将被能天使手指蹂躏的花瓣和股间彻底浸湿，甚至在地毯上又积累了一小滩新的水渍。她能感觉到自己的意识正在被这狂乱的感官风暴撕成碎片，沉向一个由纯粹肉体快感构成的、黑暗而甜美的深渊。

“对…阿尔图罗…就是这样…感受它…接纳它…”能天使的声音如同来自深渊的魔咒，在她耳边低语，带着无尽的诱惑和一丝即将达成目标的兴奋，“你正在成为…最棒的小宝贝…”能天使揉弄阴蒂的手指骤然加快了频率和力度！

与此同时，或许是感受到了阿尔图罗濒临极限的状态，或许是自身忍耐到了极点，菲亚梅塔的腰肢猛地向前一挺！试图将更多的炽热送入那温暖紧致的口腔深处！

“呜呕——！” 阿尔图罗的喉咙受到更深更猛的侵犯，强烈的异物感和窒息感让她瞬间爆发出一声痛苦而尖锐的干呕，身体剧烈地后缩挣扎！而就在这剧痛的顶点，能天使在她阴蒂上施加的、累积到顶峰的刺激，如同压垮骆驼的最后一根稻草——

一股前所未有的、混合着巨大痛苦与灭顶欢愉的、撕裂般的快感狂潮，从她被疯狂蹂躏的阴蒂核心猛地炸开，瞬间席卷了她的四肢百骸！

“咿呀啊啊啊啊啊——————！！！”

一声完全不似人声的、凄厉到变调的哭喊尖叫，猛地从阿尔图罗被堵住的口腔缝隙中强行挤出，响彻了整个小屋！她的身体像被无形的巨锤击中，在能天使的怀抱里剧烈地、失控地向上反弓、痉挛！灰眸翻白，瞳孔彻底失焦放大，大颗的泪珠和唾液混合着菲亚梅塔的前液从她大张的嘴角疯狂涌出！双腿在黑丝的包裹下剧烈地蹬踹着，脚趾死死蜷缩。腿心深处，一股股滚烫粘稠的蜜液如同失禁般猛烈地喷溅而出，将能天使的手指、她自己的大腿根、黑丝袜和身下的地毯彻底浇透！

这一次，不再是涓涓细流，而是汹涌的喷泉！浓郁到极致的甜腥气息如同炸弹般在空气中爆开！

阿尔图罗的意识，在这痛苦与快感交织的、毁天灭地的巅峰白光中，彻底沉沦、粉碎、归于一片混沌的空白。她瘫软在能天使怀里，如同被玩坏的人偶，只剩下剧烈而不受控制的生理性抽搐和断断续续的、如同濒死般的抽噎。口腔依旧无意识地包裹着菲亚梅塔的龟头，舌头软软地搭在上面。

能天使看着怀中彻底崩溃、再次被自己送上高潮巅峰的少女，脸上露出了一个混合着惊叹、满足和某种近乎残忍的成就感的灿烂笑容。她轻轻抚摸着阿尔图罗汗湿的头发，像在安抚一只受惊过度的宠物。

“看吧…”能天使抬起头，目光扫过被眼前景象刺激得呼吸更加粗重、眼中欲火几乎要化为实质的德克萨斯、莫斯提玛和菲亚梅塔，声音带着一丝慵懒的沙哑和宣告般的意味，“我们的音乐家…已经开始学会用新的方式‘演奏’了…那么，接下来…”她的目光最终定格在德克萨斯那如同蓄势待发的凶兽般的昂扬之物上，笑容变得意味深长，“…该轮到谁来享用这份…精心准备的‘生日礼物’了呢？”

小屋内的空气，在阿尔图罗高潮的余韵和能天使充满暗示的话语中，凝固了一瞬，随即被更加浓烈、更加危险的欲望火焰彻底点燃。德克萨斯向前踏出一步，紫眸中燃烧的冰冷火焰，锁定了能天使怀中那具失神颤抖、蜜液淋漓的娇躯。
## #4 幽谷初拓与欲望的共振
罗德岛那间曾萦绕着圣洁旋律的小屋，此刻已彻底化作了情欲沸腾的熔炉核心。第一章精心点缀的金银彩带，在刻意调至最低档的昏黄顶灯下，无力地垂挂着，偶尔折射出下方肢体交缠、汗水飞溅的扭曲光影，如同被亵渎的星辰。墙角绿植间，那些曾散发温馨暖意的小灯泡，此刻微弱的光晕只能勉强勾勒出地毯上肆意流淌的、混合着晶莹蜜液与浊白前液的深色水渍，以及空气中弥漫的、几乎凝成实质的催情浓雾——那是阿尔图罗高潮后泛滥的甜腥蜜液、德克萨斯冷冽如雪松的雄性气息、菲亚梅塔燃烧硫磺般的炽烈体味、莫斯提玛深海藻类的咸涩、能天使残留的果酒甜香，以及所有人情热蒸腾出的咸涩汗味……这些气息粗暴地绞碎了草莓慕斯最后一丝徒劳的甜香，宣告着生日派对的纯真早已被彻底碾碎。漂浮的气球在激烈动作带起的气流中不安地碰撞，发出单调而执拗的“啪嗒”声，像是为这场永无止境的堕落盛宴敲打着节拍。

地毯的中心，阿尔图罗·吉亚洛如同一具被彻底玩坏的精美人偶，瘫软在欲望的泥沼里。第三章末尾那场由口交和阴蒂高潮共同引发的、撕裂灵魂般的感官风暴，几乎将她的意识冲刷成了空白。墨色的长发湿漉漉地黏在潮红的脸颊、颈项和汗湿的肩背上，几缕发丝甚至贴在微张的、残留着唾液与菲亚梅塔前液的红唇边。那双曾倒映拉特兰星空的灰色眼眸，此刻空洞地大睁着，瞳孔涣散失焦，蒙着一层厚重的水雾，倒映着天花板上摇曳的、扭曲的彩带光影，却映不出任何神采，只剩下被过度开发后的茫然和脆弱。她的身体像是通了高压电的导体，即使瘫软着，依旧不受控制地间歇性轻颤、痉挛，每一次细微的抽搐都带出腿心一股温热的蜜液，无声地流淌。

她身上的遮蔽早已荡然无存。象征优雅的黑色内衬被完全撕开，像破布般丢弃在身侧，暴露出那对形状姣好却并不丰满的娇乳。粉嫩的乳尖因持续的刺激和暴露在浑浊空气中，此刻依旧硬挺如两颗饱受蹂躏的熟透樱桃，可怜地颤动着，顶端闪烁着唾液、汗水和可能残留泪滴混合的湿润光泽。黑色的短裙被粗暴地卷至腰间，勒在她纤细得不盈一握的腰肢上，像一道宣告占领的黑色束带。裙摆之下，是那片被高级透肉黑丝袜紧紧包裹的、充满肉感弹性的玉腿。此刻，这双曾令无数人遐想的黑丝美腿，正以极其羞耻的角度被大大分开。腿心处，那件可怜的白色蕾丝内裤早已不知所踪，将少女最隐秘的花园完全暴露在浑浊的空气和四道如同实质般舔舐着她的灼热目光之下。

粉嫩的花瓣因持续的刺激和刚刚的高潮，呈现出一种过度充血后的靡艳色泽，微微外翻、贲张，如同被暴风雨摧残后的娇嫩花朵。晶莹粘稠的蜜液如同永不枯竭的泉眼，正源源不断地从微微翕合的花径深处涌出，顺着饱满雪白的大腿内侧肆意流淌，在透肉的黑丝上冲刷出一道道蜿蜒闪亮、淫靡至极的水痕，最终汇聚到早已湿透深色的地毯上。她的双腿无力地微曲着，一只包裹在黑丝中的纤足上，那只精致的黑色高跟鞋奇迹般地还虚虚挂在足尖，随着身体的痉挛而微微晃动；另一只脚上的鞋则早已被踢飞，裸露的黑丝玉足无力地伸展着，足弓因残余的快感和身体的紧绷而呈现出一种脆弱而诱人的弧度，脚趾在黑丝下无意识地微微蜷缩，透露出主人承受的激烈风暴。

能天使——蕾缪乐，如同这场狂欢永不疲倦的指挥者，此刻正以一个极其放荡的姿势半跪在阿尔图罗身侧。她火红的发丝凌乱地披散，脸上带着混合着极度享受和狡黠兴奋的潮红。她的白色衬衫被推高至胸口下方，露出饱满的酥胸，下身的裙子更是被完全掀起堆在腰间。在她身后，莫斯提玛如同优雅的掠食者贴近。那双曾掌控源石技艺的、骨节分明的手，此刻正牢牢地箍在能天使纤细却充满力量的腰肢上。莫斯提玛深色的、尺寸惊人的肉棒，早已深深没入能天使湿润紧致的花穴深处！

“嗯…哈啊…莫斯提玛…再…再深一点…”能天使仰着头，红唇微张，吐出甜腻而破碎的呻吟。她的身体随着身后有力的撞击而剧烈地前后晃动，饱满的臀部撞击着莫斯提玛的小腹，发出沉闷而色情的“啪啪”声。每一次深入，都让她喉间溢出满足的叹息。莫斯提玛的肉棒在她湿热紧致的甬道内快速抽送，粗砺的茎身刮蹭着敏感的肉壁，带出大量晶莹的蜜液，混合着莫斯提玛渗出的前液，顺着两人交合处和被黑丝包裹的大腿内侧淋漓而下，在能天使脚下的地毯上溅开一小片湿痕。她的一只手向后反抓着莫斯提玛的大腿，寻求支撑，另一只手却依旧没闲着，带着一种近乎残忍的精准，探向了瘫软的阿尔图罗腿间那片泛滥的湿滑花园！

“呜…！”当能天使带着薄茧的指尖，毫无预兆地再次重重按上阿尔图罗那颗饱受蹂躏、依旧敏感充血的阴蒂核心时，阿尔图罗如同被电击般猛地从失神中弹起上半身！一声短促而凄楚的尖叫撕裂了喉咙，灰眸瞬间因剧痛与骤然复燃的快感而睁大，瞳孔紧缩。

“看啊，阿尔图罗，”能天使喘息着，手指非但没有离开，反而开始在那颗小小的、滚烫的珍珠上快速打着圈揉搓、按压！她的身体还在承受着莫斯提玛有力的撞击，声音因此断断续续，却充满了恶意的兴奋，“你的小豆豆…永远都这么精神…明明刚才才高潮过…真是个贪心的小色女…” 她的指尖施加着恰到好处的、令人崩溃的压力，每一次揉碾都让阿尔图罗的身体像濒死的鱼一样疯狂扭动，被大大分开的黑丝美腿内侧肌肉紧绷、颤抖，试图夹紧却无能为力，只能挤出更多温热的蜜液。

“不…能天使…求…那里…啊啊啊…！”阿尔图罗的哭喊带着彻底的崩溃，泪水汹涌而出。下体传来的尖锐快感如同持续的电流，与她身体的疲惫和刚刚平息的浪潮激烈冲突，将她抛入更深的地狱。就在这痛苦的顶点，一个冰冷而充满绝对存在感的阴影笼罩了她。

德克萨斯。

她如同沉默的死神，跨步来到了阿尔图罗被大大分开的双腿之间。灰发下的紫眸燃烧着冰冷而压抑到极致的火焰，紧锁着阿尔图罗腿心那片狼藉却无比诱人的景象。她的双手，带着不容置疑的力量，猛地握住了阿尔图罗穿着黑丝的小腿肚！

“！”阿尔图罗的身体瞬间僵直。德克萨斯的手掌宽大而灼热，透过薄薄的黑丝，那灼人的温度和强大的握力清晰地传递到她敏感的肌肤上，带来一种被掌控、被钉死的恐惧。德克萨斯的手指深陷进阿尔图罗黑丝包裹下的小腿肚，感受着那紧致而充满弹性的肌肉线条。她微微用力，将阿尔图罗的双腿分得更开，向上抬起，使得阿尔图罗的臀部微微悬空，整个湿润泥泞的花园入口毫无保留地暴露在她眼前，也暴露在空气中。

阿尔图罗被迫维持着这个极其羞耻的姿势，腰肢悬空，只有肩背和头部还靠着地毯。她的黑丝美腿被德克萨斯高高抬起，足弓因这突如其来的姿势改变和恐惧而瞬间绷得笔直，如同拉满的弓弦！那只还挂着高跟鞋的脚，鞋跟无助地晃动；另一只赤裸的黑丝玉足，脚趾在黑丝下死死地蜷缩起来，足心朝上，透着极致的脆弱。德克萨斯的目光如同冰冷的探针，扫过那微微颤抖、蜜液淋漓的花瓣，扫过那因恐惧和残留快感而不断收缩的穴口，最终定格在自己早已怒张到极致的昂扬之上。

那根属于德克萨斯的凶器，尺寸惊人，颜色深红，虬结的青色血管在柱身上狰狞地搏动，硕大的紫红色龟头饱胀发亮，顶端不断渗出粘稠晶莹的前液，散发着浓烈如暴风雪中燃烧雪松般的雄性气息，霸道而冰冷。它骄傲地挺立着，对准了阿尔图罗那从未被真正开拓过的、稚嫩紧窄的幽谷入口。

没有任何言语。德克萨斯只是用那双燃烧着冰冷欲火的紫眸，深深地看了阿尔图罗一眼——那眼神里没有询问，只有宣告。然后，她腰胯微微下沉，灼热硕大的龟头，带着滚烫的温度和湿滑的前液，精准地抵在了阿尔图罗那两片微微外翻、不断渗出蜜液的粉嫩花瓣中央！

“咿——！不…不要…德克萨斯…求…”阿尔图罗瞬间明白了即将发生什么，巨大的恐惧让她爆发出凄厉的哀鸣，身体在德克萨斯的钳制下疯狂挣扎扭动！被黑丝包裹的玉腿用力蹬踹，足弓绷紧到了极限，脚趾在黑丝下死命蜷缩，高跟鞋发出“咔哒”的轻响。然而德克萨斯的力量如同钢铁浇筑，她的挣扎如同蚍蜉撼树，双腿被牢牢固定在半空，门户大开的幽谷无助地迎接着侵略者的到来。

德克萨斯无视了那可怜的哀求。她腰胯沉稳而坚定地向前一送！

“呃啊——！！！” 一声不似人声的、混合着极致痛苦与恐惧的尖锐惨叫猛地从阿尔图罗喉咙里迸发出来！她纤细的脖颈猛地向后反弓，灰眸瞬间因剧痛而暴睁，瞳孔缩成针尖大小！

痛！撕裂般的、仿佛身体被硬生生劈开的剧痛，从她腿心最柔软、最稚嫩的核心处猛烈炸开！德克萨斯那远超常人想象的粗大龟头，如同烧红的烙铁，强行挤开了她从未被造访过的紧致门户，撑开了柔嫩的花瓣，蛮横地拓开了紧窄甬道入口的嫩肉！

阿尔图罗能清晰地感觉到自己身体内部最隐秘的褶皱被无情地碾平、撑开！那滚烫坚硬的异物感是如此陌生而恐怖，伴随着肌肉和粘膜被强行扩张的、令人牙酸的撕裂感！她的身体在德克萨斯的掌控下剧烈地痉挛、反弓，被高高抬起的黑丝美腿疯狂地颤抖、蹬踹，足弓绷得几乎要断裂，脚趾在黑丝下死死扣紧，如同溺毙者最后的挣扎。大颗的泪珠混合着冷汗和唾液，从她扭曲的脸庞上滚滚而下。

德克萨斯停顿了一瞬，紫眸紧盯着阿尔图罗因剧痛而扭曲的小脸，感受着包裹住自己龟头前端那难以想象的、令人发狂的紧致、湿热和剧烈的痉挛绞吸。那紧窄的压迫感和灼热的包裹，简直美妙得让她头皮发麻。她喉间发出一声低沉而满足的闷哼，下颚线绷紧。

但这仅仅是开始。她没有丝毫怜悯，腰胯再次发力，以一种缓慢却不容抗拒的、如同攻城锤般的坚定力量，继续向那紧致湿热的幽深之处推进！

“啊啊啊啊——！！！停…停下…好痛…裂开了…要裂开了啊！！！” 阿尔图罗的哭喊声嘶力竭，充满了绝望。她能清晰地感觉到那滚烫粗壮的异物，正一寸寸、极其缓慢地、带着毁灭性的力量，强行撑开她稚嫩的甬道，碾过每一寸从未被触碰的敏感内壁！火辣辣的摩擦感和饱胀欲裂的压迫感，混合着最初的撕裂痛楚，形成一股灭顶的感官洪流，冲击着她脆弱的神经。她的小穴内壁在剧痛和异物入侵下疯狂地痉挛、收缩，试图排斥这可怕的入侵者，却只是带来更强烈的摩擦和更深的痛楚，同时也让德克萨斯感受到更销魂的紧致包裹。

她的黑丝玉腿在德克萨斯铁钳般的手中徒劳地挣动，大腿内侧丰满的软肉在剧烈的颤抖中泛起诱人的涟漪。足弓因剧痛和用力而呈现出一种病态的紧绷弧度，脚趾在黑丝下死死蜷缩，那只高跟鞋终于不堪重负，“啪嗒”一声掉落在旁边的地毯上。

就在阿尔图罗以为自己要被这缓慢而坚定的入侵彻底撕裂时，德克萨斯的动作终于抵达了某个尽头。

“唔…”德克萨斯发出一声压抑的、如同野兽般的低吼。她的腰胯重重地向前一顶！

“噗嗤——”

一声极其淫靡的、湿滑的闷响。

阿尔图罗的身体如同被钉穿的蝴蝶般猛地向上挺起，又重重落下！一声被堵在喉咙深处的、近乎窒息的惨哼挤出她的唇缝。

全根没入！

德克萨斯那粗壮骇人的肉棒，终于齐根尽没，彻底贯穿了阿尔图罗紧窄稚嫩的处女花径！滚烫的龟头重重地撞上了她花径尽头那柔软而富有弹性的宫颈口！

“呃啊…！”阿尔图罗的瞳孔瞬间涣散，小嘴无意识地大张着，却发不出任何声音，只有破碎的抽气声。一股难以形容的、混合着剧痛、饱胀和某种奇异酸胀感的冲击，从身体最深处猛地炸开，直冲天灵盖！她的整个小腹仿佛都被那根滚烫的凶器填满、顶起！子宫口被重重撞击带来的酸麻和微微的胀痛，让她全身的肌肉都瞬间绷紧、僵硬！被高高抬起的黑丝美腿猛地蹬直，足弓反张到一个惊人的角度，脚趾在黑丝下痉挛般地张开又死死蜷缩！大量的蜜液如同失禁般从两人紧密交合的缝隙中汹涌喷溅而出！

德克萨斯停了下来，粗重地喘息着。她紫眸深处燃烧的火焰因这极致的征服感和包裹感而更加炽烈。她能清晰地感觉到阿尔图罗花径内壁那惊人的紧致、灼热和如同无数张小嘴般疯狂蠕动着、绞吸着她整根肉棒的律动！那感觉简直美妙得令人疯狂。她微微低头，看着阿尔图罗失神痛苦的小脸，感受着身下这具娇躯剧烈的颤抖和痉挛。

短暂的停顿，是暴风雨前最后的宁静。德克萨斯开始缓缓地、带着一种研磨般的力量，抽动起来。

粗壮的肉棒从那被撑开到极限的紧致花径中缓缓退出，布满凸起筋络的茎身刮蹭着敏感充血的内壁嫩肉，带出大量混合着蜜液和血丝的粘稠汁液，发出粘腻的“咕唧…咕唧…”声。当龟头退到穴口，那紧致的环状肌肉还恋恋不舍地挽留吸吮时，德克萨斯又猛地沉腰，再次凶狠地贯穿到底，滚烫的龟头重重地再次撞击在娇嫩的宫颈口上！

“呃啊——！”每一次退出都带来一种空虚的摩擦感和被撑开后的微妙不适，而每一次凶狠的贯穿和深顶，都让阿尔图罗的身体如同被重锤击中般向上弹跳，伴随着一声声被痛苦和逐渐滋生的奇异饱胀感扭曲的呻吟。最初的剧痛在反复的摩擦和撞击中，似乎开始混合、转化，一种陌生的、源自身体深处的、被强行开发的酸麻胀痛感，伴随着那巨大存在感带来的可怕充实感，开始在她混乱的感官中蔓延。

而就在阿尔图罗艰难地适应着下体这狂暴的入侵时，另一重侵犯降临了。

菲亚梅塔带着炽热笑容的脸庞凑近了阿尔图罗。橙红的眼眸燃烧着毫不掩饰的欲望，她身上那股如同燃烧硫磺矿般的雄性气息扑面而来。“别光顾着享受德克萨斯啊，小寿星…这里也需要好好‘照顾’一下呢…”她轻笑着，目光落在阿尔图罗微张的、残留着唾液和前液的红唇上。没有给阿尔图罗任何反应的时间，菲亚梅塔滚烫粗大的肉棒，带着浓烈的腥咸气息，不由分说地、粗暴地顶开了阿尔图罗的唇齿，再次深深插入了她温暖湿润的口腔！

“呜呕——！” 口腔被完全撑开填满的窒息感和浓烈的味道，让阿尔图罗瞬间瞪大了眼睛，强烈的呕吐反射让她喉咙剧烈收缩！然而菲亚梅塔的肉棒是如此粗大，死死地堵住了她的喉咙，让她只能发出痛苦的、被堵住的呜咽和干呕声！眼泪再次汹涌而出。

菲亚梅塔显然没有能天使的“教学耐心”。她双手按住了阿尔图罗的头，腰胯开始有力地前后挺动，粗大的肉棒在阿尔图罗温暖紧致的口腔内快速抽插起来！她的动作粗暴而直接，每一次深入都试图顶到阿尔图罗的喉咙深处，每一次退出又几乎完全抽出，只留下龟头在唇齿间摩擦。粘腻的“咕啾…噗嗤…”声在阿尔图罗的口腔中响起，混合着她痛苦的呜咽和菲亚梅塔满足的粗喘。

“唔…对…就这样…阿尔图罗…你的小嘴吸得真紧…”菲亚梅塔喘息着赞美，享受着口腔内壁的包裹和舌头的无意识抵抗带来的快感。阿尔图罗被迫承受着这双重侵犯——下体被德克萨斯巨大的肉棒凶狠地贯穿抽插，每一次撞击都仿佛要顶穿她的子宫；口腔被菲亚梅塔的凶器完全堵塞、侵犯，带来窒息和浓烈的腥咸味道。她的意识在上下两处被填满的剧痛、窒息和逐渐升腾的、被强迫的奇异快感中彻底沉沦。

这还没完！

能天使那只在阿尔图罗腿间作恶的手，从未停止！她精准地掌控着那颗敏感的阴蒂核心，在德克萨斯每一次凶狠插入、将阿尔图罗身体顶起的同时，她的指尖就重重地按压、揉碾下去！在德克萨斯缓缓退出时，她又改用指尖快速地在阴蒂上刮搔、打圈！

“啊啊啊——！！！” 三重刺激！下体被贯穿的饱胀与撞击、口腔被堵塞的窒息与侵犯、阴蒂被玩弄的尖锐快感——这三股截然不同却又同样强烈的感官洪流，如同三条狂暴的恶龙，在阿尔图罗脆弱的身躯内肆虐、冲撞、最终汇合成一股毁天灭地的、足以将她灵魂都撕碎的惊涛骇浪！阿尔图罗的惨叫声被口中的巨物堵得支离破碎，变成了绝望的、高亢的呜鸣！她的身体在德克萨斯的掌控下疯狂地反弓、痉挛，被高高抬起的黑丝美腿剧烈地颤抖、蹬踹，足弓在黑丝下绷紧、反张、痉挛，脚趾死命地蜷缩又张开！大量的蜜液如同高压水枪般从两人紧密交合的缝隙中猛烈喷溅而出，甚至溅到了德克萨斯的小腹和阿尔图罗自己的胸口！

“呃…夹得好紧…”德克萨斯发出一声压抑的低吼，阿尔图罗小穴在多重高潮边缘的疯狂痉挛和绞吸，带来无与伦比的紧致快感，几乎让她失控。她紫眸中的冰冷火焰燃烧得更加炽烈，原本缓慢而有力的抽插节奏骤然改变！

德克萨斯猛地加快了速度！她不再有丝毫的停顿和研磨，腰胯如同不知疲倦的打桩机，开始了狂暴而迅猛的冲刺！每一次插入都用尽全力，粗壮的肉棒凶狠地贯穿到底，龟头重重地撞击在敏感的宫颈口上，发出沉闷的肉体撞击声！每一次退出又迅猛无比，粗砺的茎身刮蹭着敏感充血的内壁，带出大量混合着蜜液和爱液的粘稠汁液！

“啪啪啪啪——！！！”
“咕唧！咕唧！咕唧——！！！”

肉体猛烈撞击的沉闷响声与湿滑粘腻的水声交织在一起，形成了最原始、最淫靡的交响乐！阿尔图罗的身体如同狂风暴雨中的小船，被德克萨斯狂暴的冲刺顶得剧烈地前后晃动！她的哭喊和呻吟完全被口中的巨物堵住，只能发出“呜呜…呃呃…嗬嗬…”的、如同濒死小动物般的破碎呜咽。眼泪、鼻涕、唾液和菲亚梅塔的前液混合在一起，糊满了她潮红痛苦的小脸。她的黑丝美腿在德克萨斯手中无助地晃动，足弓在每一次凶狠的撞击下都绷紧到极致，脚趾死死蜷缩，足心渗出细密的汗珠，将黑丝浸得颜色更深。

菲亚梅塔也因阿尔图罗口腔内剧烈的痉挛和吸吮而更加兴奋，她的挺动更加用力，试图将肉棒更深地插入那温暖紧致的喉咙深处。“唔…好棒…阿尔图罗…喉咙也在吸我…”她喘息着，享受着这双重夹击带来的极致快感。

能天使看着眼前这淫靡至极的景象，感受着阿尔图罗阴蒂在自己指尖下剧烈的搏动和身体的疯狂反应，脸上露出了极度兴奋和满足的潮红。她自己的身体也在莫斯提玛越来越快、越来越深的抽插下剧烈颠簸，花瓣被凶狠地操弄着，发出更加响亮的“啪啪”声和粘腻的水声。“啊啊…莫斯提玛…顶…顶到子宫了…好深…哈啊…”能天使忘情地呻吟着，红发随着身体的晃动而狂野地飞舞。她玩弄阿尔图罗阴蒂的手指更加用力、更加快速，如同在弹奏一首催命的狂想曲，誓要将阿尔图罗推向那毁灭性的多重高潮深渊！

阿尔图罗的意识彻底被这狂乱的感官风暴撕成了碎片。痛苦、窒息、饱胀、被侵犯的屈辱、阴蒂被玩弄的尖锐快感…所有这些感觉如同沸腾的岩浆在她体内奔涌、融合，最终冲垮了所有堤防！

“咿咿咿咿呀啊啊啊啊啊——————！！！”

一声完全不似人声的、凄厉到变调的、如同来自灵魂最深处的尖啸，强行冲破了菲亚梅塔肉棒的堵塞，响彻了整个小屋！阿尔图罗的身体在德克萨斯的掌控下，如同被高压电持续击打般，疯狂地、失控地向上反弓、痉挛、抽搐！灰眸翻白，瞳孔彻底散大失焦，大股混合着唾液和前液的液体从她被撑开的嘴角喷涌而出！她的黑丝美腿猛地蹬直，足弓反张到一个非人的角度，脚趾在黑丝下痉挛般地死死扣紧，如同溺毙者的最后姿态！

最惊人的是她的下体！伴随着这声非人的尖啸，一股前所未有的、滚烫粘稠的蜜液洪流，如同开闸的洪水，从她被德克萨斯肉棒死死堵住的花径深处，以惊人的力量和流量，猛烈地喷射而出！甚至强行冲开了两人紧密交合的缝隙，形成一道淫靡的喷泉，大量浇淋在德克萨斯的小腹、两人的腿根和身下的地毯上！浓郁到极致的甜腥气息如同炸弹般爆开！

与此同时，她的花径内部，经历了最疯狂、最剧烈的痉挛和收缩！内壁的嫩肉如同无数张小嘴，以前所未有的力量死死绞吸、吮咬着德克萨斯深埋其中的粗壮肉棒！那紧致、灼热、律动着的极致包裹感，如同最强烈的电流，瞬间击穿了德克萨斯苦苦维持的防线！

“呃啊——！！！” 德克萨斯发出一声如同野兽般的、再也无法压抑的低吼！她的腰胯如同失控般，死死抵住阿尔图罗的身体，将肉棒深深地、毫无保留地钉入那痉挛抽搐的花径最深处！紧接着，一股股滚烫浓稠的、如同熔岩般的精液，从她剧烈搏动的肉棒根部猛烈喷射而出，狠狠地灌入阿尔图罗被操弄得一塌糊涂的子宫深处！

“嗬…射…射进来了…”德克萨斯粗重地喘息着，感受着喷射时那灭顶的快感和肉棒被痉挛花径疯狂吮吸的极致舒爽。她的手指不自觉地更加用力地掐紧了阿尔图罗纤细的脖颈！

阿尔图罗在被内射的瞬间，身体如同被最后一根稻草压垮的骆驼，在德克萨斯怀中猛地一挺，随即如同断线木偶般彻底瘫软下去。所有的挣扎、痉挛、哭喊都在这一刻戛然而止。她大张着嘴，失神的灰眸空洞地望着天花板，只有身体还在不受控制地间歇性轻颤，腿间一片狼藉，混合着她自己的蜜液和德克萨斯浓稠的精液，缓缓流淌。被高高抬起的黑丝玉腿无力地垂下，足弓放松，脚趾微微松开，那只赤裸的黑丝玉足软软地搭在地毯上，沾满了混合的体液。

小屋陷入了短暂的、只有粗重喘息和粘液滴落声的死寂。德克萨斯缓缓拔出依旧半硬的肉棒，带出一大股混合着乳白精液和透明蜜液的粘稠液体。菲亚梅塔也满足地抽出了被阿尔图罗唾液浸湿的肉棒。能天使趴在莫斯提玛怀里，身体微微起伏，发出满足的叹息。

阿尔图罗静静地躺在那里，像一朵被彻底蹂躏、榨干了所有汁液的娇花。生日派对的主角，拉特兰的音乐天使，在这一刻，被欲望的洪流彻底吞噬、重塑。而这场狂欢，远未结束。德克萨斯冰冷的紫眸，菲亚梅塔炽热的橙瞳，能天使餍足的金棕色眼睛，以及莫斯提玛幽深的蓝眸，再次聚焦在那具失神瘫软、却散发着致命诱惑的娇躯上。空气再次被更加危险的欲望点燃。
`,jd=Object.freeze(Object.defineProperty({__proto__:null,default:Ed},Symbol.toStringTag,{value:"Module"})),zd=`---
order: 3
---

# B.A.5&6 在音乐中堕落的阿尔图罗~#5&#6

## #5 足尖的颤栗与交融的欢愉
罗德岛的小屋，已然成为一座被彻底榨干、只剩下纯粹肉欲回响的废墟。第四章那场由德克萨斯狂暴内射所划下的短暂休止符，留下的是一片更加狼藉的淫靡景象。昏黄的灯光疲惫地穿透浑浊的空气，在垂挂的金银彩带上投下扭曲的光斑，无力地映照着地毯上肆意横流的、混合着乳白精液、透明蜜液与汗水的粘稠沼泽。墙角绿植间的小灯泡，光芒微弱得如同垂死萤火，徒劳地试图照亮空气中那浓得化不开的催情浓雾——德克萨斯冷冽如暴风雪般的雄性气息、能天使残留的果酒甜香、阿尔图罗甜腥的蜜液芬芳、精液特有的浓烈腥膻，以及所有人情热蒸腾出的咸涩汗味……这些气息早已绞碎了任何派对残留的甜美幻影，宣告着这里只剩下最原始的交媾。漂浮的气球在激烈动作带起的余波中无力碰撞，发出单调而空洞的“啪嗒”声，像是为这场永不落幕的堕落盛宴敲打着残破的节拍。

地毯的中心，阿尔图罗·吉亚洛如同被暴风雨彻底摧折的百合，失神地靠坐在冰冷的墙壁上。墨色的长发湿漉漉地黏在苍白却残留高潮红晕的脸颊和颈项，几缕发丝贴在微张的、嘴角还挂着干涸唾液与精液混合痕迹的红唇边。那双曾倒映拉特兰星空的灰色眼眸，此刻空洞地望着虚空，瞳孔涣散，蒙着一层厚重的水雾，倒映不出任何光亮，只剩下被过度开发、彻底榨干后的茫然与脆弱。她的身体像是被抽走了所有骨头，软软地瘫靠着，只有胸口随着微弱的呼吸浅浅起伏。身上早已无寸缕遮掩，形状姣好的娇乳上，粉嫩的乳尖依旧可怜地硬挺着，沾着唾液和不知谁的汗水。纤细的腰肢下，双腿无力地微微分开着，腿心那片被德克萨斯刚刚蹂躏过的花园，此刻正呈现出一种靡艳的景象：粉嫩的花瓣微微外翻红肿，花径入口无力地微张着，一股股浓稠的、混合着她自身蜜液与德克萨斯精液的乳白色浊液，正缓缓地、持续地从那被操弄得一塌糊涂的幽谷深处溢出，顺着雪白饱满的大腿内侧淋漓而下，在早已湿透、颜色深沉的透肉黑丝袜上冲刷出新的、淫靡的水痕，最终滴落汇入地毯上那片更大的污秽之中。她的双足，一只黑色的高跟鞋奇迹般地还虚虚挂在足尖，随着身体的微颤而轻轻晃动；另一只脚则赤裸着，包裹在湿黏的黑丝中，足弓无力地放松，脚趾微微松开，软软地搭在冰冷的地毯上，足心朝上，沾满了混合的体液，透着一股被彻底亵玩后的、惊心动魄的脆弱美感。

就在这时，一团炽热的火焰覆盖了上来。

能天使——蕾缪乐，带着她永不熄灭的热情和一丝高潮后的慵懒余韵，如同灵巧的猫儿般，跨坐到了阿尔图罗无力张开的双腿之上！她火红的发丝蹭着阿尔图罗敏感的颈窝，带来一阵细微的麻痒。修长有力的、包裹在高级黑丝袜中的双腿，带着惊人的弹性和热度，如同最柔韧的藤蔓，紧紧地环住了阿尔图罗纤细的腰肢！她的膝盖抵在阿尔图罗身体两侧的地毯上，小腿肚则深陷进阿尔图罗大腿外侧的软肉里。更引人注目的是她的双足——那同样包裹在黑丝中的纤足，足踝灵巧地勾住了阿尔图罗的后腰，足弓微微绷紧，足尖带着一丝顽皮的力道，轻轻抵在阿尔图罗同样被黑丝包裹的、软软垂落的小腿肚上，脚趾甚至隔着薄薄的黑丝，无意识地轻轻刮搔着那片敏感的肌肤。

“阿尔图罗~”能天使的声音带着一丝微喘和压抑不住的兴奋，金棕色的眼眸亮晶晶地俯视着怀中失神的少女，像在欣赏自己最得意的作品，“别睡呀，派对…才刚刚进入最精彩的环节呢！”她一边说着，一边俯下身，滚烫的唇瓣带着果酒的微醺甜香和自身情动的气息，不容拒绝地覆盖上了阿尔图罗微张的红唇！

“唔…！”阿尔图罗发出一声细弱的呜咽，灰眸中闪过一丝迷茫。能天使的舌头如同最灵巧的侵略者，瞬间撬开了她无力的齿关，长驱直入，缠绕住她柔软而迟钝的香舌！湿滑、炽热、带着能天使独特气息的唾液，霸道地涌入阿尔图罗的口腔，与她口中残留的腥咸味道激烈地交融。能天使的吻热情而富有技巧，时而用力地吸吮着她的下唇，时而用舌尖快速扫过上颚敏感的软肉，时而又温柔地缠绕着她的舌头，带来一阵阵令人眩晕的酥麻快感。两人的鼻息炽热地交缠在一起。

阿尔图罗被动地承受着这热烈的侵犯，身体在能天使的怀抱里微微颤抖。能天使饱满的胸脯紧紧挤压着她裸露的娇乳，那富有弹性的柔软触感和顶端硬挺的乳尖摩擦带来的刺激，透过皮肤直抵她混乱的神经末梢。她能清晰地感觉到能天使环在她腰间的黑丝美腿那惊人的热度与力量，以及那双勾在她腰后的玉足，足尖正隔着黑丝，带着一种磨人的力道，在她的小腿肚上轻轻画着圈。

“嗯…阿尔图罗的嘴唇…果然像想象中一样甜呢…”能天使在换气的间隙，喘息着在阿尔图罗耳边低语，带着一丝得逞的坏笑。她的身体微微抬起，调整了一下姿势，这个动作使得她环在阿尔图罗腰间的双腿收得更紧，足弓也绷得更直，足尖更加用力地抵住阿尔图罗的小腿，仿佛要将自己更深地嵌入对方怀里。

就在阿尔图罗被这热情的吻弄得有些喘不过气、意识更加模糊之际，一个冰冷而充满力量的身影，如同沉默的阴影，笼罩在了能天使身后。

德克萨斯。

她灰发下的紫眸燃烧着冰冷而尚未餍足的火焰，紧盯着能天使那随着呼吸微微起伏的、被黑丝包裹的诱人腰臀曲线。没有任何言语，德克萨斯伸出双手，带着不容置疑的掌控力，猛地握住了能天使纤细却充满力量的腰胯两侧！她的手掌宽大而灼热，指尖甚至隔着黑丝陷进了能天使腰侧紧致的软肉里。

能天使的身体瞬间绷紧了一瞬，随即发出一声混合了期待和兴奋的轻哼：“哈啊…德克萨斯…你终于忍不住了？”她非但没有回头，反而更加热情地加深了与阿尔图罗的吻，臀部甚至微微向后挺翘，迎向德克萨斯灼热的存在感。

德克萨斯无视了能天使的调笑。她的目光锁定了能天使腿心那片同样泥泞、微微张合的花园——那里还残留着莫斯提玛留下的湿滑痕迹。德克萨斯那根依旧半硬、沾着阿尔图罗蜜液和精液的深红色凶器，带着滚烫的温度和浓烈的雄性气息，精准地抵在了能天使湿润微肿的花瓣入口！

“嗯…！”能天使的吻被打断，喉间溢出一声短促的闷哼。她感觉到那滚烫硕大的龟头正带着一种磨人的力道，挤开她敏感的花唇，研磨着入口处最要命的软肉。

德克萨斯腰胯沉稳而有力地向前一送！

“呃啊——！” 能天使仰起头，红发如火焰般向后甩动，一声压抑着极致舒爽的呻吟猛地从她喉咙深处迸发出来！德克萨斯那粗壮骇人的肉棒，如同烧红的攻城锥，再次蛮横地撑开了能天使湿润而富有弹性的花径入口，齐根尽没，深深贯入那温暖紧致的甬道深处！

“咕啾…”一声湿滑粘腻的闷响，宣告着彻底的占领。德克萨斯发出一声满足的低吼，紫眸中的火焰更炽。她能清晰地感觉到能天使花径内壁那惊人的紧致、灼热和瞬间如同无数张小嘴般疯狂蠕动着、绞吸着她整根肉棒的律动！那感觉比之阿尔图罗的稚嫩紧窄，更多了一份成熟火热的包容和主动的迎合。

短暂的停顿后，德克萨斯开始了有力的抽送。粗壮的肉棒从那湿热紧致的包裹中缓缓退出，布满凸起筋络的茎身刮蹭着敏感充血的内壁嫩肉，带出大量混合着能天使新鲜蜜液和之前残留体液的粘稠汁液，发出淫靡的“咕唧…咕唧…”声。当龟头退到穴口，那紧致的环状肌肉还恋恋不舍地挽留吸吮时，德克萨斯又猛地沉腰，再次凶狠地贯穿到底，滚烫的龟头重重地撞击在能天使花径尽头那柔软而富有弹性的宫颈口上！

“啊啊…德克萨斯…好深…顶到了…哈啊！” 能天使的身体在每一次凶狠的贯穿下都剧烈地向上弹跳，撞击在阿尔图罗的怀里。她的呻吟声高亢而甜腻，充满了毫不掩饰的享受和快感。她的双手向后反抓，紧紧扣住了德克萨斯箍在她腰侧的手臂，指甲甚至微微陷入德克萨斯的皮肤。更引人注目的是她的双腿——环在阿尔图罗腰间的黑丝美腿瞬间绷紧！大腿内侧丰满的软肉因用力而鼓起性感的弧度，深陷进阿尔图罗大腿外侧的软肉里，带来强烈的压迫感。小腿肚的肌肉线条在黑丝下清晰绷紧。而那双勾在阿尔图罗后腰的黑丝玉足，足弓猛地反张，如同拉满的弓弦，足背绷得笔直，黑丝下的脚趾死死蜷缩起来，足尖隔着黑丝，更加用力地、近乎痉挛般地抵进阿尔图罗的小腿肚软肉中！

阿尔图罗被夹在两人之间，能天使每一次被顶得向上弹跳，都重重地挤压着她的身体，尤其是胸乳。能天使灼热的呼吸喷在她的颈侧，甜腻的呻吟声直接灌入她的耳膜。她能清晰地感觉到能天使大腿肌肉的每一次绷紧和颤抖，感觉到那双玉足足尖在自己小腿上施加的、带着痛感的压力。下体被能天使的体重和动作摩擦着，传来一阵阵混合着残留痛楚和微妙刺激的感觉。这一切混乱的感官刺激，让阿尔图罗失神的灰眸中泛起一丝波澜，喉间发出无意识的、细碎的呜咽。

“看吧…阿尔图罗…”能天使喘息着，低头看向怀中失神的少女，脸上带着混合着极致快感和恶作剧般的红晕，“被…被这样填满…是不是…哈啊…很棒的感觉？”她的声音因德克萨斯有力的顶弄而断断续续。她再次俯身，滚烫的唇舌不由分说地再次攫取了阿尔图罗微张的唇瓣，将一声更加高亢的呻吟混合着炽热的吐息渡入阿尔图罗口中。“唔…嗯…！”

就在阿尔图罗被动地承受着能天使热情的吻和德克萨斯在她身后制造的身体撞击时，另一股炽热的气息靠近了。

菲亚梅塔带着侵略性的笑容，跪在了能天使的身侧。橙红的眼眸燃烧着毫不掩饰的欲望，她身上那股如同燃烧硫磺矿般的雄性气息霸道地侵入阿尔图罗的感官。“这么美妙的画面，怎么能少了我呢？”她轻笑着，目光如同实质般舔舐着能天使剧烈起伏的胸脯上，那对在紧身湿透的白衬衫下若隐若现的、饱胀挺立的乳尖。

菲亚梅塔没有任何犹豫，直接俯下身，隔着那层被汗水浸透、近乎透明的薄薄布料，张口含住了能天使左侧的乳峰！滚烫的唇舌带着湿热的力度，紧紧地包裹、吸吮着那饱满的软肉！

“噫呀——！” 能天使的身体如同被通了高压电般猛地向上弹起！一声尖锐的惊喘冲破了与阿尔图罗纠缠的唇舌。德克萨斯在她身后的凶狠贯穿，叠加胸前这突如其来的强烈刺激，让她瞬间达到了一个小高潮的边缘！她的灰眸瞬间失焦，身体在阿尔图罗怀里剧烈地痉挛、颤抖！环在阿尔图罗腰间的黑丝美腿猛地绞紧，足弓绷紧到了极限，足尖死死地抵着阿尔图罗的小腿，仿佛要将自己钉死在对方身上！花径内部传来一阵疯狂的痉挛绞吸，让身后的德克萨斯也忍不住闷哼一声。

菲亚梅塔显然不满足于隔靴搔痒。她灵巧地用牙齿咬住能天使湿透的衬衫边缘，向下一扯！

“嘶啦——”

轻微的布料撕裂声响起。能天使那对形状完美、饱满挺翘的酥胸瞬间弹跳出来，暴露在浑浊的空气中！粉嫩的乳尖早已硬如红豆，在灯光下闪烁着湿润而脆弱的光泽。菲亚梅塔眼中欲火更盛，她毫不犹豫地再次低头，这次是直接含住了那颗挺立的蓓蕾！

“唔…！菲亚…梅塔…你…啊！”能天使的呻吟彻底变了调，带着哭腔和极致的舒爽。菲亚梅塔的口腔滚烫而湿润，舌尖如同最灵巧的毒蛇，围绕着敏感的乳晕快速地打着圈，时而用力地吸吮拉扯着那颗可怜的乳尖，时而又用牙齿不轻不重地啃咬研磨。强烈的快感电流般窜遍能天使全身，让她在德克萨斯的抽插和胸前的刺激下疯狂地扭动腰肢，红发狂野地飞舞。

菲亚梅塔的一只手也没闲着，顺着能天使剧烈起伏的腰腹滑下，精准地覆盖在她被黑丝包裹的、丰腴而充满弹性的大腿根部。她的手指带着一种掌控的力度，深深陷入那片柔软的腿根软肉里，感受着惊人的弹性和温热。她甚至用拇指的指腹，在那片最敏感的大腿内侧肌肤上，带着挑逗的意味，用力地打着圈按压、揉捏！

“嗯啊…别…那里…好痒…好奇怪…”能天使的身体猛地一颤，大腿下意识地想夹紧，却被菲亚梅塔的手和环住阿尔图罗的姿势限制住，只能发出更加甜腻破碎的呻吟。每一次菲亚梅塔在大腿根部的揉捏，都让她腿心的蜜液分泌更加汹涌，身体扭动得更加剧烈，足部的反应也愈发强烈——足弓时而绷直如钢板，时而又难耐地弓起，脚趾在黑丝下疯狂地蜷缩、伸展，足尖在阿尔图罗小腿上留下细微的刮痕。

莫斯提玛如同优雅的旁观者，此刻也无声地靠近了阿尔图罗的另一侧。她的目光落在阿尔图罗那只赤裸的、软软搭在地毯上的黑丝玉足上。那只玉足沾满了混合的体液，足弓放松，脚趾微微分开，透着一种被彻底征服后的、毫无防备的脆弱美感。莫斯提玛的唇角勾起一抹神秘的弧度，她伸出修长的手指，带着一丝冰凉的触感，轻轻握住了那只玉足的脚踝。

“呜…”阿尔图罗的身体敏感地轻颤了一下，失神的灰眸微微转动，看向自己被触碰的脚。莫斯提玛的手指如同弹奏竖琴般，带着一种奇异的韵律，开始在那敏感的足弓上缓缓地按压、画圈。冰凉而带着掌控意味的触感，透过湿黏的黑丝传来，激起阿尔图罗皮肤上一阵细微的鸡皮疙瘩。她的脚趾下意识地想要蜷缩躲避，却显得那么无力。莫斯提玛的指尖继续向上，滑过足背，轻轻捏住了阿尔图罗纤巧的脚趾，带着一种把玩珍品的意味，揉捏着每一根包裹在黑丝下的、圆润可爱的脚趾。

三重刺激！德克萨斯在身后凶狠的、节奏越来越快的抽插冲撞，菲亚梅塔在胸前和腿根肆意的玩弄挑逗，以及能天使在怀中热情的吻和身体的剧烈反应——这三股汹涌的欲望洪流，在能天使体内激烈地冲撞、融合，将她推向那个毁灭性的巅峰！

德克萨斯的冲刺变得狂暴而迅猛！腰胯如同打桩机般高速运作，每一次插入都贯穿到底，龟头凶狠地撞击着能天使敏感的宫颈！“啪啪啪啪——！！”肉体猛烈撞击的沉闷响声如同战鼓！“咕唧！咕唧！咕唧——！！”湿滑粘腻的水声是欲望最原始的伴奏！菲亚梅塔更加用力地吸吮着能天使的乳尖，舌尖疯狂地挑逗着乳晕，手指在她大腿根部最敏感的软肉上近乎蹂躏般地揉捏、掐弄！

“啊啊啊啊啊——————！！！不行了…要…要去了…德克萨斯…菲亚…啊啊啊！！！”

能天使猛地仰起头，脖颈拉出一道优美而脆弱的弧线，发出了一声凄厉到变调、混合着极致痛苦与无边欢愉的哭喊尖啸！她的身体在阿尔图罗怀中、在德克萨斯的掌控下，如同被无形巨锤击中般剧烈地、失控地向上反弓、痉挛、抽搐！灰眸瞬间翻白，瞳孔彻底失焦放大，大颗的泪珠混合着汗水从她潮红扭曲的脸颊上滚落！

她的双腿反应最为惊人！环在阿尔图罗腰间的黑丝美腿猛地蹬直、绞紧！大腿肌肉剧烈地颤抖、绷紧，显露出清晰的线条，深陷进阿尔图罗的皮肉里！小腿肚的肌肉同样绷紧如铁！而那双黑丝玉足——足弓猛地向上反张到一个近乎非人的、惊心动魄的弧度，足背绷得如同拉满的弓弦，黑丝被撑得近乎透明，勾勒出下面绷紧的骨骼和肌腱！脚趾在黑丝下痉挛般地、死死地蜷缩扣紧，仿佛要将全身的力量都凝聚在足尖！足尖更是如同利刃般，深深地、近乎要刺破黑丝般，抵进了阿尔图罗小腿肚的软肉深处！

与此同时，她的花径深处爆发出最疯狂、最剧烈的痉挛和绞吸！内壁的嫩肉如同无数张饥渴的小嘴，以前所未有的力量死死吮咬、挤压着德克萨斯深埋其中的粗壮肉棒！一股滚烫粘稠的蜜液洪流，如同开闸的洪水，从两人紧密交合的缝隙中猛烈地喷射而出，浇淋在德克萨斯的小腹和两人的腿根！浓郁到极致的甜腥气息轰然炸开！

这剧烈的高潮持续了仿佛一个世纪之久。当那灭顶的快感洪流终于稍稍退潮，能天使如同被抽走了所有力气，浑身瘫软如泥，重重地砸落在阿尔图罗的怀里。她的身体仍在无法控制地剧烈颤抖、痉挛，每一次轻颤都带出腿心一股股温热的蜜液。急促的喘息如同破旧的风箱，胸口剧烈起伏，两颗饱受蹂躏的乳尖在空气中可怜地颤动着。红发凌乱地披散在阿尔图罗肩头，灰眸失神地望着天花板，长长的睫毛上挂着晶莹的泪珠，眼神迷离而空洞，仿佛灵魂都被那极致的巅峰快感撞飞了出去，只剩下一个被彻底满足、敏感而脆弱的躯壳。

阿尔图罗近距离地、清晰地目睹了能天使这毁灭性高潮的全过程。能天使仰头尖叫时拉长的雪白脖颈，那因极致快感而扭曲却又透着惊心动魄魅力的潮红脸庞，那失神翻白的灰眸中残留的迷离水光，那剧烈痉挛绷紧、展现出惊人力量与脆弱美感的黑丝美腿和反张的玉足……还有高潮后瘫软在自己怀中，红发披散、喘息急促、浑身散发着慵懒满足与致命诱惑的模样……这一切，如同烙印般深深印刻在阿尔图罗失神的脑海里。

一股前所未有的、奇异的悸动，如同投入心湖的石子，在阿尔图罗麻木的心底悄然荡开涟漪。那不是纯粹的欲望，更像是一种混杂着怜惜、被吸引、同感以及某种难以言喻的、近乎虔诚赞叹的复杂情愫。她失神的灰眸中，第一次清晰地映入了能天使的身影，不再是模糊的欲望对象，而是一个如此鲜活、如此强大又如此脆弱、在欲望巅峰绽放出惊心动魄美丽的个体。

“高…高潮后的能天使…”阿尔图罗在心底无声地呢喃，那麻木的意识深处，一个微弱的念头如同嫩芽般破土而出，“…真美…”

就在这时，一直在她身侧把玩着她玉足的莫斯提玛，手指的力道骤然加重！冰凉的指尖带着不容置疑的力道，狠狠地按压在她敏感的足心！

“唔——！” 阿尔图罗的身体猛地一颤，一声短促的惊喘冲破了喉咙。与此同时，一直伺机而动的菲亚梅塔（或是莫斯提玛，根据位置），那根早已怒张的、散发着硫磺般炽热气息的肉棒，毫无预兆地、粗暴地再次撑开了阿尔图罗腿心那刚刚被内射过、依旧湿润微张的花径入口，凶狠地贯穿到底！

“呃啊…！” 一股混合着残留痛楚、被填满的饱胀和骤然被激发的、源自身体深处被反复开发后的快感电流，瞬间席卷了阿尔图罗！她的身体在能天使瘫软的怀里猛地向上弹跳，灰眸再次睁大，瞳孔收缩，一声更加高亢、却不再仅仅是痛苦的呻吟，猛地撕裂了小屋短暂的沉寂！

“啊啊啊啊————！！！”

新一轮的欲望漩涡，再次将失神的音乐天使和刚刚从巅峰跌落的火焰精灵，一同卷入更加深邃的堕落深渊。小屋内，粘腻的水声、粗重的喘息、破碎的呻吟，以及那浓郁得令人窒息的体液气息，交织成永不落幕的狂欢乐章。

## #6 黑丝手套与臣服之渊
罗德岛的小屋弥漫着狂欢后的粘稠余韵。昏黄灯光艰难穿透浑浊的空气，在垂落的金银彩带上投下扭曲光影，无力映照着地毯上肆意横流的欲望沼泽——大片混合着乳白精液、透明蜜液与汗水的污渍反射着湿漉漉的光。墙角绿植间的小灯泡奄奄一息，微弱光芒甚至无法刺透那浓得化不开的催情浓雾：德克萨斯冷冽如暴风雪的气息、能天使慵懒的果酒甜香、阿尔图罗甜腥的芬芳、浓烈的精液腥膻与情欲蒸腾的咸涩汗味……它们彻底绞碎了最后一丝理智。漂浮的气球碰撞着，发出空洞麻木的“啪嗒”声，如同为永不落幕的堕落敲打节拍。

阿尔图罗·吉亚洛像被抽走灵魂的精美瓷偶，失神地靠着冰冷墙壁。墨色长发湿漉漉黏在苍白脸颊，微张的唇角挂着唾液与精液的浊痕。灰色眼眸空洞地望着虚空，瞳孔涣散，蒙着厚重水雾，只剩下被反复榨取后的极致麻木。她软若无骨，赤裸的娇躯上，粉嫩乳尖依旧可怜地硬挺着。双腿无力地大大分开，腿心那片被蹂躏过的花园凄艳绽放：花瓣红肿外翻，入口微张，股股混合着蜜液与精液的乳白浊液正持续从泥泞幽谷深处汩汩溢出，顺着雪白大腿内侧，在湿透的透肉黑丝袜上冲刷出新的淫靡沟壑。她的右足虚虚挂着黑色高跟鞋，随着微颤晃动；左足赤裸包裹在湿黏黑丝中，软软搭在粘腻地毯上，足心朝上，沾满混合体液，如同被献祭的祭品，透着惊心动魄的脆弱。

能天使——蕾缪乐，如同被暴风雨摧折的火焰精灵，彻底瘫软在阿尔图罗怀中。火红发丝凌乱披散在阿尔图罗肩头，滚烫脸颊紧贴着她的颈窝。高潮余韵让能天使浑身间歇性轻颤，每一次细微抽搐都带出腿心一股温热蜜液。她身体滚烫柔软，带着惊人的重量和奇异的依赖感，沉甸甸压在阿尔图罗麻木的躯壳上。急促喘息灼热地喷吐在阿尔图罗锁骨。那双黑丝美腿无力垂落，大腿内侧丰腴软肉紧贴阿尔图罗腿侧，传递着惊人热度和滑腻触感。那双经历过极致高潮反张的玉足，足弓微微放松却带着痉挛后的紧绷，脚趾在黑丝下无意识蜷缩，足尖轻轻抵着阿尔图罗小腿肚，仿佛是她仅存的支点。她灰眸失神半阖，长睫挂着细小泪珠，红唇微张溢出沙哑甜腻的轻哼，整个人散发着被彻底满足后慵懒脆弱又致命诱惑的气息。

阿尔图罗失神的灰眸被动凝视着怀中能天使这副被征服的模样。那凌乱红发、潮红脸颊、迷离眼神、微张喘息的红唇，以及紧贴自己传来的惊人热度与柔软……昨夜在她麻木心湖投下的那颗名为“触动”的石子，此刻被这具毫无防备的躯体搅动，涟漪悄然扩大成混杂着怜惜、被吸引、同感与幽暗渴望的复杂涡流。一种奇异的躁动在她空洞躯壳深处蠢蠢欲动。

冰凉触感忽然落在她赤裸的左足脚踝。莫斯提玛如同深海幽影跪坐下来，唇角勾起难以捉摸的弧度，手指带着近乎虔诚的亵渎感，握住了那只沾满体液的玉足。阿尔图罗身体敏感一颤，灰眸转动。

莫斯提玛的指尖如同精密的乐器师，在敏感的足弓上缓缓按压、画圈。冰凉与她掌心渐升的温度形成奇异对比。力道适中却精准刺激着足底每处神经末梢。阿尔图罗脚趾下意识想蜷缩，却那么无力，任由冰凉指尖在足弓凹陷处打着圈，带来阵阵细微酥麻。

莫斯提玛的目光缓缓上移，落在阿尔图罗戴着标志性黑色丝质长手套的双手上。那双手无力垂落，指尖微蜷，沾染污浊体液。莫斯提玛深蓝眼眸闪过一丝幽暗，伸出另一只手，轻轻捻起阿尔图罗左手手套的腕部边缘。动作很轻，却带着不容置疑的引导。阿尔图罗茫然的顺从驱使她动了动手指。

“唔…”一声微弱鼻音。她能感觉到莫斯提玛冰凉手指引导着她自己的手，一点点缓慢地将紧贴手腕的湿黏黑丝手套边缘向下褪开一点。

细腻、苍白脆弱的腕部肌肤暴露在浑浊空气中，与上方黑丝、下方污浊形成强烈视觉冲击。莫斯提玛唇角弧度加深，不再引导，而是用自己修长微凉的手指握住阿尔图罗褪下些许手套的左手手腕，牵引着这只带着部分黑丝束缚的手，缓缓移向自己早已怒张挺立的昂扬！

阿尔图罗的指尖，隔着柔滑微凉的黑丝手套，触碰到那根散发深海藻类幽咸气息的炽热肉棒。滚烫温度与惊人硬度透过薄薄黑丝，如同烙铁灼烫指尖！

“啊…”阿尔图罗身体猛颤，灰眸微睁。陌生强烈的触感电流般窜上手臂。

莫斯提玛握着她手腕的手微微用力，引导那只被黑丝包裹的手完全贴合地握住滚烫柱身！

触感！
混乱意识中唯一清晰的信号。掌心被柔滑如第二层肌肤的黑丝覆盖，却清晰感受着掌下肉棒的惊人脉动！滚烫如熔岩浇筑，坚硬如磐石，却又带着活物般强劲弹跳感。虬结凸起的青筋在掌心下起伏搏动，每一次跳动都撞击心脏。黑丝柔滑质感与肉棒粗砺坚韧表面形成强烈反差——丝绒包裹下是灼热、坚硬、充满侵略性的生命脉动！这种矛盾触感带来前所未有、奇异强烈的感官冲击。

莫斯提玛发出低沉悠长的叹息，如同深海暗流。“嗯…”身体微微前倾，极其享受这包裹柔滑黑丝的生涩握持感。她松开引导的手，任由阿尔图罗那只被黑丝包裹的手本能地、带着一丝探索好奇和微微恐惧，停留在滚烫昂扬之上。

阿尔图罗手指在黑丝下无意识微微收拢。掌心感受惊人热量与搏动，指尖隔着丝绒试探性地描摹肉棒上凸起的青筋纹路。每一次细微触碰都让莫斯提玛呼吸一窒，肉棒在掌心猛跳，渗出更多粘稠晶莹前液，浓烈腥咸弥漫。

“对…就这样…”莫斯提玛声音慵懒沙哑，重新玩弄阿尔图罗足弓的指尖力道悄然加重。足底刺激与掌心掌控的灼热在阿尔图罗麻木感官中形成奇异回路。她感到掌心传来奇异麻痒灼热感，仿佛那根滚烫肉棒正透过黑丝手套，将某种躁动能量传递到手上，顺手臂向下蔓延，与腿心深处被反复蹂躏过的、麻木中隐隐泛起空虚酸胀的花径产生诡异共鸣。

手指开始不自觉地、生涩地动了起来。掌心包裹滚烫柱身，笨拙地上下滑动。黑丝柔滑减少摩擦阻力，动作虽生疏却异常顺畅。掌心感受肉棒筋络起伏，感受它在手中愈发坚硬、灼热、剧烈搏动。这触感带来微妙掌控错觉，尽管她知道被彻底掌控的是自己。

“呃…阿尔图罗…”莫斯提玛叹息带上明显愉悦，微微挺腰迎合生涩套弄。阿尔图罗掌心的黑丝如同上等丝绒包裹炽热，生涩犹豫的撸动节奏带来别样磨人快感。每一次滑动都像细小电流窜上脊髓，下腹肌肉微微绷紧，肉棒跳动更剧，顶端前液更多，将包裹它的黑丝手套尖端浸染更深、更湿滑粘腻。

阿尔图罗呼吸也不知不觉急促。掌心灼热脉动粘腻触感，与腿心深处被莫斯提玛玩弄足弓撩拨起的、越来越清晰的空虚酸胀感交织。她能感觉下体又涌出温热蜜液。一种渴望，源于身体深处、被奇异手交触感和足底刺激共同点燃的、对更强烈填充感的渴望，如同野火在麻木躯壳里蔓延。灰眸中空洞被火焰灼烧褪去一些，取而代之是迷茫被欲望驱使的微光。套弄动作在不知不觉中加快，力度加重，掌心更紧密包裹挤压那根滚烫脉动之源。

“唔…很好…”莫斯提玛低沉声音带着鼓励，手指在阿尔图罗足心用力一按！同时腰胯向前一顶！

“嗯啊！”阿尔图罗身体猛颤，短促呻吟脱口而出。足底尖锐刺激与掌心肉棒凶狠顶入感如同两道电流在体内交汇！体内悄然蔓延的野火瞬间引爆！

欲望洪流冲垮麻木堤坝，也冲垮了“阿尔图罗·吉亚洛”的自我意识残骸。巨大空虚和渴望如同深渊巨口吞噬了她。她不再满足于手心烙印和足底刺激，她渴望被彻底填满！被更粗壮灼热的存在贯穿撕裂！被窒息掌控感推向灭顶巅峰！

她猛地抬头，失神灰眸燃烧赤裸疯狂渴求，视线越过怀中瘫软的能天使，死死锁定站在一旁喘息、紫眸燃烧冰冷欲火的德克萨斯。那眼神，不再是恐惧或麻木，是最纯粹被欲望扭曲的祈求。

一个破碎的、带着哭腔极致媚态的称谓，从她干涩喉咙里，以近乎卑微的姿态颤抖挤出：
“…主…主人…”

这个词如同惊雷在粘腻空气炸开。能天使在她怀里微动，菲亚梅塔和莫斯提玛动作顿住。

阿尔图罗对周围置若罔闻，她的世界只剩填满自己的渴望。泪水混合欲望汗水滑落，声音更急促卑微，带着泣音：
“求…求求您…主人…用…用您那里…填满我…填满阿尔图罗的…小穴…”她甚至主动羞耻地分开无力双腿，将腿心泥泞狼藉、微微张合的花园更清晰暴露在德克萨斯冰冷视线下。“…好…好空…好难受…求您…插进来…狠狠地…插烂阿尔图罗吧…”

目光急转向莫斯提玛，那只依旧握着莫斯提玛肉棒的手无意识收紧，黑丝手套深陷滚烫柱身。“还…还有…莫斯提玛主人…阿尔图罗的嘴…也好空…求您…塞满它…用您的…肉棒…堵住阿尔图罗…让她不能呼吸…”她微微张嘴，粉嫩舌尖无意识舔过干涩下唇，灰眸满是迷离乞求。

最后，视线扫过菲亚梅塔，声音带着献祭般颤抖：“菲亚梅塔主人…阿尔图罗的脚…请您…享用…请您…用阿尔图罗的脚…让您舒服…”那只被莫斯提玛玩弄的玉足，配合地轻微向上勾了勾脚趾，足弓在黑丝下绷紧一丝微弱弧度，无声邀请。

这卑微到尘埃里的、主动献上所有孔窍的祈求，如同最猛烈催情剂。

德克萨斯紫眸中冰冷火焰瞬间爆燃！一步上前，粗暴抓住阿尔图罗无力垂落的脚踝，将她整个人从靠墙位置猛地向外拖拽，臀部几乎悬空。那根早已怒张到极致的、沾满阿尔图罗蜜液精液的深红凶器，带着雷霆万钧之势，对准微张流淌浊液的穴口，毫无前戏怜悯，狠狠齐根贯穿到底！

“呃啊啊啊啊——！！！” 阿尔图罗头颅猛撞墙壁，发出混合巨大痛苦与极致满足的尖锐哭喊！被彻底撑开贯穿的饱胀撕裂感让她瞬间窒息，身体疯狂反弓！粗壮肉棒如烧红铁桩楔入湿滑紧窄甬道，滚烫龟头重重撞上脆弱宫颈！

几乎同时，莫斯提玛抽出被黑丝手套套弄的肉棒，俯身一手捏住阿尔图罗下巴强迫张嘴，另一手握散发浓烈幽咸气息的肉棒毫不留情狠狠捅进温暖湿润口腔深处，直抵喉咙！

“呜呕——！！！” 口腔完全堵塞的窒息呕吐感让阿尔图罗双眼暴突，喉咙剧烈收缩却被粗大肉棒死死堵住，只能发出绝望闷住的呜咽干呕！大量唾液不受控制涌出，顺被撑开的嘴角疯狂流淌。

菲亚梅塔橙红眼眸燃烧兴奋火焰，立刻绕到德克萨斯身后！目标正是阿尔图罗那只还挂高跟鞋的、包裹黑丝中的右足！单膝跪地，双手带着欣赏亵玩并存的热情，猛地抓住玉足脚踝足弓！

“啊…！”阿尔图罗身体因足部侵犯剧烈一颤。菲亚梅塔手指深陷足踝足弓软肉，毫不犹豫将阿尔图罗右足抬起，引导包裹黑丝曲线优美的足底直接贴上自己早已昂扬挺立、散发硫磺般炽烈气息的滚烫肉棒柱身！

“嘶——哈啊！”菲亚梅塔满足喟叹。被黑丝包裹的足底带着微凉和惊人柔软细腻，紧贴灼热肉棒，摩擦感被黑丝柔滑放大数倍！她双手固定阿尔图罗脚踝，主动挺腰让粗大肉棒在柔软黑丝足底上快速摩擦滑动！龟头顶端粘稠前液瞬间浸湿足底黑丝，留下深色淫靡印记，发出轻微“噗叽”声。

能天使被剧烈动静惊醒。迷蒙金棕色眼眸看着眼前疯狂景象：阿尔图罗被德克萨斯凶狠贯穿下体撞击墙壁；被莫斯提玛肉棒深喉堵住口腔痛苦呜咽；右足被菲亚梅塔抬起用黑丝玉足摩擦昂扬；而自己瘫软在阿尔图罗怀里……混合兴奋恶趣味同感的情绪升起。

她舔舔干涩嘴唇，眼中闪过狡黠光芒。撑起身体俯首凑近阿尔图罗剧烈起伏胸口，看着那颗随身体撞击可怜颤动的粉嫩乳头。嫣红唇瓣张开带着坏笑，毫不犹豫含住阿尔图罗左侧挺立蓓蕾！

“噫——！”阿尔图罗身体如通高压电般猛向上弹跳！口腔被堵的尖叫变更高亢破碎呜鸣！胸前传来湿润滚烫包裹感和能天使灵巧舌尖在乳晕乳尖快速打转吸吮带来的尖锐快感，如同最后一根稻草压垮紧绷神经！能天使另一只手伸出食指中指带着戏谑精准，捏住阿尔图罗右侧同样硬挺乳头揉捏拉扯弹拨！

四重刺激！如同四道来自不同方向的狂暴雷霆在阿尔图罗脆弱身躯内同时炸裂！

下体： 德克萨斯得到“主人”祈求后抽插如狂暴野兽！每次插入用尽全力，粗壮肉棒凶狠贯穿到底，龟头如重锤疯狂撞击敏感宫颈！每次退出迅猛无比，粗砺茎身刮蹭早已充血肿痛肉壁，带出大量混合新鲜蜜液残留精液的粘稠汁液！小穴内部撕裂饱胀痛楚与强烈摩擦快感，内壁嫩肉剧痛灭顶刺激下疯狂痉挛绞吸！肉体撞击“啪啪”声与湿滑“咕唧咕唧”声如狂野打击乐！
口腔： 莫斯提玛肉棒在阿尔图罗喉咙深处快速抽送！每次深入试图顶穿喉咙带来窒息呕吐感！每次退出几乎完全抽出，只留龟头唇齿间摩擦，腥咸前液混合唾液不断涌出！粘腻“咕啾…噗嗤…”声在被堵口腔闷响。喉咙紧致包裹和舌头无意识抵抗带给莫斯提玛极致快感，呼吸愈发粗重，挺动力度越来越大！
足部： 菲亚梅塔腰胯如活塞快速挺动！粗大滚烫肉棒在阿尔图罗包裹黑丝的足底疯狂摩擦碾压！时而用龟头顶端重重研磨敏感足心，时而用整根肉棒快速在足弓上来回滑动！黑丝摩擦发热被前液浸透湿滑粘腻，发出“噗叽…噗叽…”淫靡声响。足心传来滚烫坚硬滑腻摩擦感和被掌控压迫感，形成奇异直冲大脑皮层的刺激！
胸部： 能天使口腔如温暖沼泽紧裹吸吮阿尔图罗左侧乳头，舌尖如灵巧毒蛇围绕乳晕快速打转用力拉扯乳尖！手指在右侧乳头肆意玩弄揉捏掐弄弹拨带来阵阵尖锐持续快感电流！双乳刺激如两把烧红匕首深刺感官核心！
“呜呜呜——！！！呃呃呃…嗬嗬…！！！” 阿尔图罗喉咙被莫斯提玛肉棒死死堵住，所有哭喊尖叫呻吟被强行扭曲成不成调的濒死野兽般破碎呜咽！身体在德克萨斯狂暴冲击下疯狂前后晃动撞击墙壁！灰眸彻底翻白瞳孔散大到极限，大股泪水鼻涕唾液混合莫斯提玛前液糊满潮红扭曲小脸！身体剧烈失控痉挛抽搐如扔进滚油中的活鱼！

最惊人的是她的小腹！在德克萨斯每次凶狠贯穿深顶下，体内深处粗壮肉棒猛烈冲撞，平坦小腹竟被顶得微微向上凸起！隐约可见深色圆头轮廓！那是德克萨斯的龟头隔着薄薄肚皮凶狠撞击内脏！每次撞击带来内脏移位钝痛和无法形容深入骨髓刺激！

“射…射进来…主人…求您…都射给阿尔图罗…”极致混乱中阿尔图罗被堵住的口腔竟还能发出模糊带着泣音的祈求，仿佛被内射填满是唯一能抓住的救赎。

德克萨斯紫眸火焰燃烧到顶点！阿尔图罗小穴内部疯狂死死绞吸吮咬的痉挛混合卑微祈求彻底摧毁最后自制力！“呃啊——！！！”德克萨斯发出受伤野兽般咆哮，腰胯死死抵住阿尔图罗身体将肉棒深钉入痉挛抽搐花径最深处！一股股滚烫浓稠如熔岩的精液从剧烈搏动肉棒根部猛烈喷射，狠狠毫无保留灌入被操弄得一塌糊涂的子宫深处！强劲冲击力让阿尔图罗小腹凸起更明显！

连锁反应！阿尔图罗小穴被滚烫精液猛烈浇灌产生的剧烈痉挛瞬间传递喉咙！喉咙疯狂收缩绞吸如同致命榨取！

“唔…！”莫斯提玛闷哼腰肢猛向前挺肉棒死死顶入阿尔图罗喉咙深处！一股股浓稠腥咸精液猛烈喷射灌满口腔冲入食道！

“哈啊…！”菲亚梅塔在双重内射刺激画面和足底极致摩擦下到达巅峰！死死按住阿尔图罗黑丝玉足腰胯剧烈向前挺动研磨！浓稠白浊精液如箭矢喷射大量浇淋在阿尔图罗黑丝足底足背甚至溅射小腿菲亚梅塔自己小腹！

“唔嗯…”能天使同时用力吸吮阿尔图罗乳尖指尖狠狠一掐！

“嗬——————！！！”

阿尔图罗身体在这一瞬间达到前所未有超越极限巅峰！一声被精液堵在喉咙深处完全不成调如同灵魂被撕裂的嘶鸣强行挤出！身体如被无形巨手抓住疯狂向上反弓痉挛抽搐！灰眸彻底翻白瞳孔完全失焦放大，舌头无法控制从被精液堵住的嘴角伸出无力耷拉挂满粘稠白浊！大量涎水泪水鼻涕混合精液脸上汹涌而下！四肢尤其是被菲亚梅塔掌控的右足在黑丝包裹下剧烈蹬踹抽搐！小腹被德克萨斯持续喷射精液顶得高高凸起形成淫靡恐怖弧度！一股滚烫蜜液混合之前灌入部分精液从紧密交合缝隙猛烈喷溅！

毁灭性多重高潮如持续地震疯狂撕扯阿尔图罗每根神经每块肌肉！意识在无边白光灭顶感官风暴中彻底粉碎飘散。身体持续剧烈痉挛如坏掉玩偶抽搐。当高潮余波缓缓退去，她整个人如被彻底抽干所有生气软软瘫倒在墙壁和德克萨斯之间，只有身体还在不受控制剧烈颤抖间歇抽搐。大张嘴里满是浓稠精液舌头无力伸在外面，灰眸空洞大睁眼神彻底涣散失去所有神采只剩最纯粹被欲望彻底洗刷后的空洞呆滞。小腹依旧微微鼓起里面灌满德克萨斯滚烫馈赠。浑身上下从头发丝到脚趾尖被各种体液——自己蜜液、德克萨斯、莫斯提玛、菲亚梅塔精液、汗水、唾液——彻底浸透打湿散发浓郁到令人作呕混合腥膻气息。

当意识如同沉入深海的碎片缓慢重新拼凑，阿尔图罗首先感受到的不是疼痛疲惫，而是体内深处令人心悸的空虚感。德克萨斯肉棒抽离，但被反复撑开填满内射的饱胀记忆如烙印刻在身体最深处。小腹微凸感消失，但子宫仿佛残留滚烫精液冲刷灼热微妙充实余韵。口腔弥漫浓烈腥咸提醒莫斯提玛“馈赠”。足底残留菲亚梅塔肉棒摩擦滚烫触感。胸前被能天使吸吮玩弄过的乳头带着敏感刺痛奇异麻痒。

空虚。
令人发狂的空虚。

这空虚感瞬间点燃沉寂四肢百骸更汹涌欲望之火。她不再是拉特兰音乐天使阿尔图罗·吉亚洛。优雅、克制、纯粹音乐追求都在那声“主人”和毁灭性高潮中灰飞烟灭。占据躯壳的只剩被欲望彻底重塑名为“阿尔图罗”的空洞容器。容器里盛满的只有对下一次填满、下一次窒息、下一次巅峰的极致渴望。

罗德岛走廊里，阿尔图罗依旧抱着琴匣，对干员们报以羞涩礼貌微笑。只有她自己知道，长裙之下紧贴湿滑泥泞花瓣的，是两只调到最高档疯狂震动的跳蛋。它们不知疲倦在最敏感核心地带嗡鸣旋转顶弄，持续撩拨体内永不熄灭欲火。

“嗯…”一声细微带着媚意的呻吟不受控制从紧咬唇瓣溢出。她立刻低头脸颊飞红脚步加快。并非羞耻，而是跳蛋刺激恰好顶到要命点，一股温热蜜液不受控制涌出浸湿内裤带来更强烈空虚渴望。必须尽快回房间或找无人角落。

工作时坐在谱架前手指无意识绞紧裙摆。琴弦震动仿佛与体内跳蛋嗡鸣产生诡异共鸣，每次拨弦都像撩拨早已绷紧到极限神经。根本无法集中精神，脑海翻腾的全是昨夜德克萨斯冰冷狂暴贯穿、莫斯提玛深喉窒息、菲亚梅塔足底滚烫、能天使乳尖刺痛…以及灭顶高潮中彻底失神的极乐。

“阿尔图罗小姐？您…身体不舒服吗？脸色好红…”医疗部干员关切问道。

阿尔图罗猛地回神慌乱摇头勉强挤出虚弱笑容：“没…没什么只是…有点累。”努力压抑喉咙即将溢出的又一声呻吟——体内跳蛋似乎同时达到共振频率，一股尖锐快感电流猛窜脊椎！双腿在黑丝包裹下猛夹紧，足弓在精致高跟鞋里瞬间绷直脚趾死死蜷缩！又一股温热蜜液汹涌而出。

她逃也似离开工作区域。走廊拐角无人储物间成了短暂喘息压抑呻吟地方。背靠冰冷墙壁手指颤抖隔着裙子按压腿心试图缓解被跳蛋撩拨极致空虚渴望身体因强忍快感微微发抖。脑海只有一个念头疯狂叫嚣：夜晚！快点到来！快点被填满！被撕裂！被推向忘却一切深渊！

医疗部干员私下议论音乐家阿尔图罗似乎病了。脸色总带异样潮红脚步虚浮眼神时而空洞迷离还经常发出奇怪压抑轻哼。建议她做全面检查。

只有小屋“主人们”和能天使知道真相。羞涩优雅音乐家没病。她只是被彻底心甘情愿重塑成只为欲望存在沉迷轮奸快感时刻需要填满的——性奴。堕落的乐章已然奏响永不停歇。每个白天是在跳蛋嗡鸣中煎熬等待夜晚降临前奏。每个夜晚小屋都成为她彻底沉沦献祭自我的祭坛。直到虚脱直到意识只剩色欲直到美丽躯壳被彻底开发使用殆尽。（完）`,Rd=Object.freeze(Object.defineProperty({__proto__:null,default:zd},Symbol.toStringTag,{value:"Module"})),Hd=`---
order: 2
title: 阿尔图罗的派对(?)
---

# 阿尔图罗的派对(?)

这是A系列的简介。
`,Ud=Object.freeze(Object.defineProperty({__proto__:null,default:Hd},Symbol.toStringTag,{value:"Module"})),Fd=`---
order: 1
---
# B.N.1 冰镇苹果汁💗~（能天使0&菲亚梅塔1）

>菲亚梅塔早已对活力四射的能天使怀有不可告人的渴望。她耐心等待时机，终于在一次高强度协同训练后，看到能天使像只疲惫又满足的小猫，瘫在休息区的沙发上，习惯性地抓起她那罐冰镇苹果汁。菲亚梅塔不动声色地靠近，借着递毛巾的掩护，指间夹着的无色无味晶体粉末如同细沙般滑入刚被能天使打开的饮料罐口，瞬间溶解无踪。她的动作流畅自然，带着一种猎人般的精准和冷酷。 
 

“辛苦了，补充点水分。”菲亚梅塔的声音一如既往的平稳，将饮料罐又往能天使手边推了推。 
“谢啦！”能天使毫无防备，脸上还带着运动后的红晕，金色的眼眸亮晶晶的，仰头就“咕咚咕咚”灌下了大半罐冰凉的果汁。那特制的烈性催情药如同潜伏的毒蛇，在她毫无察觉的情况下，悄然钻入她的身体，等待着爆发的时机。 

 

冰冷的金属墙面贴着能天使滚烫的额头，试图汲取一丝凉意。罗德岛舰船公共休息区的空气似乎都带着粘稠的焦灼感，每一次呼吸都像吸入滚烫的蒸汽。她死死咬着下唇，原本鲜艳如火的红色短发被汗水黏在光洁的额头和泛红的耳廓上，平日里总是洋溢着灿烂笑容的脸蛋此刻一片不正常的酡红，如同熟透的苹果，那双总是闪烁着狡黠光芒的金色眼眸此刻迷离失焦，蒙上一层水润的雾气，长长的睫毛不安地颤动着。一股陌生而凶猛的热流在她小腹深处横冲直撞，如同被困的熔岩，灼烧着她的理智——那杯果汁！菲亚梅塔！这个迟来的认知带着恐慌和强烈的羞耻感冲击着她，但身体深处那股陌生的、湿热的悸动却如潮水般汹涌澎湃，让她双腿发软，核心处传来难以启齿的空虚和渴望。 

“蕾缪乐？你看起来不太对劲。”菲亚梅塔那带着恰到好处关切的声音在耳边响起，高大的身躯带来一片阴影。能天使能感觉到对方微凉的指尖，隔着薄薄的背心，轻轻搭在她剧烈起伏的肩胛骨上。那点凉意如同沙漠中的一滴水，瞬间被体内燎原的火焰蒸发殆尽，却勾起了更深、更羞耻的渴望，让她不由自主地从喉咙深处溢出一声甜腻的嘤咛。 

“唔…热…好热…你…那果汁…”能天使的声音破碎不堪，带着她自己都厌恶的软糯和被药物扭曲的急迫。她想推开那带来异样触感的手，身体却背叛意志地向那微凉的源头靠去，小巧的鼻尖甚至无意识地蹭了蹭菲亚梅塔结实的手臂。纤细的腰肢难耐地扭动着，试图缓解体内那磨人的空虚和灼烧感。两腿之间，那层薄薄的短裤布料早已被失控分泌出的、滚烫粘稠的蜜液彻底浸透，紧贴在皮肤上，清晰地勾勒出下方令人羞耻的湿痕轮廓，甚至能隐约看到下方那同样开始充血肿胀的小巧肉芽的形状。一股浓郁的、混合着少女体香与情欲气息的甜腻湿意，不受控制地从双腿之间弥漫开来。 

“看来训练负荷太大了，体温异常升高。需要立刻回房进行物理降温处理。”菲亚梅塔的声音平稳得像在宣读医嘱，完美的伪装。但她搭在能天使肩上的手却带着不容抗拒的力道下滑，有力的手臂穿过能天使的腋下，另一只手则稳稳地托住了她因为情动而软得几乎没有力气的腰肢，几乎是半抱着将人提了起来。能天使挺翘的臀峰不可避免地紧贴在菲亚梅塔坚实的小腹上，隔着两层衣物，她能清晰地感觉到对方腰腹之下某个部位正硬邦邦地顶着自己，灼热的温度和惊人的硬度让她浑身一颤，大脑一片空白——菲亚梅塔显然也并非普通女性。更让她羞耻的是，菲亚梅塔托着她腰的手，拇指指腹正若有若无地按压在她腰侧最敏感的一处肌肤上，每一次迈步，都带来一阵让她腿软、几乎要呻吟出来的酥麻刺激。 

“不…放开…你…卑鄙…下药…”能天使徒劳地挣扎了一下，声音细若蚊吟，脸蛋红得几乎滴血，金色的眼眸里水汽氤氲，混合着愤怒、恐慌和无法抑制的情欲。体内那催情的火焰如同被浇了油，在她每一个细胞里爆裂燃烧。她的双腿绵软得如同面条，每一步都像是踩在云端，身体的大部分重量都不得不倚靠在菲亚梅塔身上。两腿间湿滑的粘腻感越来越重，每一次摩擦都让她敏感的身体发出难以抑制的、带着泣音的细小呜咽。菲亚梅塔身上那股冷冽的、带着淡淡硝烟味的独特体息，此刻却成了点燃她最后理智的火星。她无意识地用滚烫的脸颊蹭着菲亚梅塔的颈窝，像一只寻求慰藉又充满矛盾的小兽，急促滚烫的呼吸喷洒在对方敏感的皮肤上。 

“别乱动，你需要帮助。”菲亚梅塔的声音低沉地响在她耳边，带着一丝不容置疑的强硬，温热的气息拂过她敏感的耳廓，激起一阵细微的战栗。那只托着她腰的手，悄然下移了几分，指尖甚至若有若无地划过她湿透了的、挺翘臀瓣的边缘布料。能天使猛地一颤，一股更汹涌的热流从身体最深处喷涌而出，让她双腿内侧一片滑腻滚烫，腿间那根粉嫩可爱、已经完全勃起的小巧肉棒在湿透的布料下不安分地跳动起来，顶端渗出更多粘腻的清液。 

终于抵达房间，菲亚梅塔利落地用权限卡刷开门，将几乎瘫软在她怀里的能天使轻柔地放在了柔软的床铺上。 

“呃啊…”接触到柔软床铺的能天使发出一声短促的、带着解脱和更多空虚的叹息。她难耐地在床单上扭动着纤细的腰肢，包裹着纯白丝袜、线条优美的小腿和玉足无意识地磨蹭着身下的织物，发出细微的摩擦声，可爱的脚趾隔着被汗水微微浸湿的丝袜蜷缩着，足弓绷紧，透出无声的诱惑。迷蒙的视野里，只看到菲亚梅塔高大的身影笼罩下来，那双总是冷静的眸子里，此刻翻涌着她从未见过的、令人心悸的深沉欲念，如同盯上猎物的猛兽。 

“别担心，我会帮你‘降温’。”菲亚梅塔的声音带着一种奇异的安抚力量，但动作却不容置疑。她单膝跪在床边，俯下身，没有急于撕扯衣物，而是伸出带着薄茧的手指，极其缓慢地、带着某种仪式感地，一颗颗解开了能天使背心的纽扣。当那片白皙、细腻、因情动而泛着粉红色泽的肌肤和那对形状姣好、顶端蓓蕾早已硬挺翘立的柔软双乳暴露在微凉的空气中时，能天使发出一声羞耻的呜咽，试图用手臂遮挡。 

“别遮，很美。”菲亚梅塔低沉地说着，轻而易举地拨开了能天使无力的手臂。她的目光如同实质般扫过那诱人的曲线，随即俯首，带着灼热气息的唇舌直接含住了其中一颗硬挺的蓓蕾！ 

“呀啊——！”能天使猛地弓起了背，从未体验过的强烈刺激让她失声尖叫。菲亚梅塔灵巧的舌头如同带着电流，时而用力吮吸，时而用舌尖快速拨弄那颗敏感的乳尖，牙齿也时不时地轻轻啃噬。强烈的快感如同电流般窜遍全身，让她脚趾隔着丝袜都蜷缩得更紧，可爱的足尖绷直。同时，菲亚梅塔的一只手也覆上了另一边的柔软，带着技巧性地揉捏、按压，拇指指腹精准地研磨着那颗同样硬立的乳尖。 

“唔…不…不要…那里…好奇怪…”能天使破碎地呻吟着，身体却诚实地追逐着这陌生的快感，红发凌乱地铺散在枕头上，小嘴微张，吐露出甜腻的气息。 

但这仅仅是开始。菲亚梅塔的另一只手，如同灵蛇般滑下，轻易地解开了能天使短裤的纽扣和拉链。湿透的布料被褪下，露出了能天使腿间那片令人血脉贲张的景色。 

修剪整齐的火红绒毛覆盖着神秘三角区，下方那朵早已濡湿绽放的粉色花蕊，正如同饥渴的花朵般急速翕张着，吐露着晶莹粘稠的蜜露。而在那湿漉漉的蜜穴上方，一颗小巧玲珑、如同珍珠般的粉嫩阴蒂已经完全充血勃起，在湿润的光泽中剧烈颤抖，诱人采撷。更引人注目的是，那根同样粉嫩可爱、尺寸不大但完全挺立的小巧肉棒，顶端的小孔正不断渗出透明的清液，将下方的毛发和肌肤都弄得湿漉漉一片。 

菲亚梅塔的眼神瞬间变得更加幽深。她没有去碰那根诱人的小肉棒，而是将目标直接锁定在那不断开合、汁水淋漓的粉嫩蜜穴上。 

“唔…你…你想做什么…”能天使预感到什么，声音带着恐惧和一丝连她自己都没察觉的期待。 

菲亚梅塔没有回答，只是用行动表明。她低下头，灼热的呼吸喷洒在那最敏感的花园地带。然后，在能天使惊恐又羞耻的注视下，她伸出舌头，带着一种近乎虔诚又充满侵略性的姿态，精准地、用力地舔上了那颗剧烈颤抖的粉嫩阴蒂！ 

“噫呀啊啊啊——！！！”能天使的身体如同触电般猛地弹跳起来，又被菲亚梅塔的手牢牢按回床上。那瞬间爆开的、尖锐到极致的快感让她大脑一片空白！菲亚梅塔的舌头灵活得不可思议，时而如同羽毛般快速扫过阴蒂顶端最敏感的神经末梢，时而又用舌面整个覆盖住它，用力地吮吸、碾压，甚至用牙齿轻轻地、危险地刮蹭。强烈的刺激如同高压电流，瞬间击溃了能天使的防线！ 

“啊！啊！停…停下…那里…不行…要…要疯了…哈啊~！”能天使的哭喊变成了不成调的淫叫，腰肢疯狂地扭动，试图逃离这灭顶的快感，却又本能地将花穴更深地送向那施虐的唇舌。她的双手无意识地抓紧了床单，指节泛白。白丝包裹的双腿大大张开，足尖绷紧指向天花板，脚趾在丝袜内死命地蜷缩着，如同承受着巨大刺激的幼猫。 

就在这时，菲亚梅塔那只原本在揉捏她胸部的手，终于滑了下去，带着不容抗拒的力道，一把握住了能天使腿间那根同样饱受刺激、颤抖不已的小巧肉棒！ 

“呜哇——！！！”双重夹击下的能天使发出了濒死般的哀鸣！菲亚梅塔的手指带着薄茧，却异常灵巧地套弄着那根粉嫩滚烫的小肉棒，拇指指腹精准地摩擦着顶端渗液的小孔和冠状沟。那快感与蜜穴被口舌伺候带来的刺激截然不同，却同样凶猛致命！两种截然不同又相互叠加的快感如同海啸般将她彻底淹没！ 

菲亚梅塔的唇舌和手指如同最高明的演奏家，在她最敏感的两处同时奏响了欲望的狂想曲。口舌侍奉着不断溢出蜜液的粉穴，每一次舔舐、吮吸都带出更多粘稠的爱液，发出淫靡的水声；手指则灵巧地撸动着那根可爱的小肉棒，感受着它在掌心剧烈地搏动。 

“啊…不行了…要…要去了…啊啊啊…菲亚梅塔…求你…停下…我要…要射了…”能天使的理智彻底被快感烧毁，话语只剩下赤裸裸的淫荡哀求，金色的眼眸翻白，口水顺着嘴角滑落，与泪水混合，沾湿了艳红的鬓角。 

终于，在菲亚梅塔用牙齿轻轻啃噬了一下那颗肿胀的阴蒂，同时拇指用力刮过小肉棒顶端凹陷的瞬间—— 

“咿咿咿呀啊啊啊啊——！！！射…射出来了…呜哇——！！！” 

能天使的身体如同被拉满后骤然松开的弓弦，剧烈地向上反弓！一股稀薄但滚烫的透明液体，从她腿间那根小巧肉棒的顶端猛烈地喷射而出，溅落在她平坦的小腹和白丝袜覆盖的大腿根上，留下点点湿痕。同时，她的花穴深处也传来一阵剧烈的痉挛，一股温热的爱液猛地涌出，浇灌在菲亚梅塔的唇舌上。她整个人如同脱水的鱼般剧烈颤抖着，小嘴大张，发出无声的喘息，艳红的短发被汗水彻底浸透，黏在脸上，白丝玉足在空中无助地蹬踹了几下，最终软软地垂落在床上，陷入了短暂的高潮余韵和失神状态。 

菲亚梅塔抬起头，唇边还沾染着能天使的蜜液。她看着身下彻底被快感征服、如同被玩坏娃娃般的能天使，眼底的欲火燃烧得更加炽烈。她舔了舔唇角，声音带着情事后的沙哑和一丝不易察觉的诱哄： 

“看，这样‘降温’是不是舒服多了？”她俯身，在能天使失神的脸颊上落下一个吻，手指却悄然滑入那仍在微微抽搐、湿滑无比的花穴入口，轻轻搅动了一下，“但是…里面还是好热呢…似乎…还没完全‘冷却’下来哦…” 

能天使被那手指的侵入刺激得发出一声细小的呜咽，身体本能地瑟缩了一下，但高潮后的极度敏感和体内残余的催情药效，让她的身体依然渴望着被填满。她迷蒙地睁开水汽氤氲的金色眼眸，看向菲亚梅塔，眼神脆弱又带着一丝被开发后的懵懂情欲。 

“需要…更深入的治疗才行…”菲亚梅塔的声音如同恶魔的低语，带着蛊惑人心的力量。她直起身，当着能天使的面，解开了自己的腰带。那根尺寸惊人、覆盖着健康肤色、青筋虬结的粗壮肉棒猛地弹跳而出，顶端饱满的龟头呈现出深红色，马眼处正不断渗出粘稠的液体，散发出浓烈的雄性气息。 

能天使的目光不由自主地被那狰狞的凶器吸引，瞳孔微微收缩，残留着高潮红晕的脸上掠过一丝恐惧，但身体深处却传来一阵更强烈的、空虚的悸动。她下意识地并拢了穿着白丝的双腿，这个动作却更加凸显了腿间的湿滑狼藉。 

“不…不要…太大了…”能天使的声音带着哭腔和颤抖，小手无意识地抓紧了身下的床单，身体微微向后缩。 

菲亚梅塔俯身，双手撑在能天使身体两侧，将她困在自己身下。她没有急于进入，而是用那根滚烫的肉棒顶端，极其缓慢地、带着强烈暗示地，摩擦着能天使腿间那湿漉漉、仍在微微开合的粉嫩入口，沾满了她自己的爱液。硕大的龟头每一次擦过敏感的阴蒂和穴口边缘，都引起能天使一阵剧烈的颤抖和细小的呻吟。 

“乖，蕾缪乐…”菲亚梅塔的声音低沉而充满磁性，如同情人间的呢喃，“你里面那么热…那么湿…它需要被填满…告诉我，你想要它进去，嗯？”她的腰胯微微向前顶了顶，龟头强硬地挤开两片柔软的花唇，卡在湿滑的入口处，带来一阵饱胀的压迫感，却没有立刻深入。 

“呜…我…我不知道…”能天使被这磨人的前戏和体内翻腾的药效折磨得快要疯了，理智告诉她应该拒绝，但身体却诚实地分泌出更多蜜液去迎合那巨大的威胁。她羞耻地别过脸，不敢看菲亚梅塔的眼睛，小巧的鼻翼翕动着，呼吸急促。 

“说‘想要’…”菲亚梅塔极具耐心地引导着，粗糙的手指再次抚上能天使胸前那敏感的乳尖，用力一捏。 

“呀啊！”强烈的刺激让能天使猛地一颤，压抑的呻吟脱口而出。入口处那巨大的存在感和身体内部的空虚感在药效的催化下达到了顶峰。残存的理智彻底崩溃，被欲望和羞耻感淹没。 

“…想…想要…”细若蚊吟、带着浓重哭腔和极致羞耻的声音，终于从能天使微张的、沾着口水的唇瓣间溢出。说完这句话，她仿佛用尽了所有力气，紧紧地闭上了眼睛，长长的睫毛上挂着泪珠，艳红的发丝黏在汗湿的额角，如同献祭的羔羊。 

菲亚梅塔的嘴角勾起一抹得逞的、充满掠夺性的笑容。 

“如你所愿。” 

话音落下的瞬间，她腰胯猛地发力，那根蓄势待发的粗壮肉棒带着雷霆万钧之势，凶狠地贯穿了那早已湿滑泥泞、毫无防备的紧窄通道！ 

“呃啊——！！！” 

菲亚梅塔俯身，双手轻而易举地固定住能天使纤细的、包裹着纯白丝袜的脚踝。那白丝早已被汗水浸透，紧贴着肌肤，勾勒出优美足弓的曲线和圆润可爱的脚趾形状，此刻正随着主人的情动而微微蜷缩、颤抖，足尖绷紧，透出无言的诱惑。她将能天使整个人拖向床沿。能天使的臀部悬在床边，双腿被大大分开，那片湿滑狼藉、不断开合翕张的粉嫩蜜穴完全暴露在冰冷的空气中，也暴露在菲亚梅塔蓄势待发的凶器之下。那湿热的入口仿佛感知到了巨大的威胁和诱惑，急速地开合着，涌出更多晶亮的液体，上方的阴蒂更是颤巍巍地挺立。 

“别怕，很快就不难受了。”菲亚梅塔的声音带着一丝沙哑的磁性。她不再犹豫，腰胯沉稳而凶狠地向前一顶！ 

“呃——！！！” 

能天使的惨叫被一种撕裂般的剧痛和随之而来的、灭顶的胀满感瞬间扼杀在喉咙深处！那滚烫的、粗壮惊人的肉刃，带着不容置疑的蛮力，如同烧红的烙铁，瞬间撑开了她柔嫩紧窄的入口，强硬无比地贯穿了所有试图抵抗的褶皱，狠狠凿入了她身体的最深处！坚硬的龟头重重地顶撞在她花心深处那个最敏感、如同子宫颈口般的娇嫩软肉上！ 

剧烈的刺激如同高压电流，从被贯穿的深处瞬间传遍四肢百骸！能天使的身体像被拉满的弓弦般猛地向上反弓，喉咙里发出“嗬嗬”的抽气声，大量粘稠、滚烫、散发着浓郁甜香的蜜液，如同失控的泉水，从两人身体紧密嵌合的缝隙中猛地喷溅而出！ 

菲亚梅塔发出一声低沉、满足的喟叹。那被包裹在极致高温、湿滑紧窒中的粗长肉棒，被能天使体内痉挛的媚肉疯狂地绞紧、吮吸。这致命的包裹感让她瞬间失去了冷静。她猛地抽出大半截，然后更加凶狠地贯入！ 

“啊！啊——！慢…慢点…呃啊！好…好深！”能天使破碎的哭喊被一下下猛烈的撞击顶撞得支离破碎。菲亚梅塔的腰胯如同不知疲倦的打桩机，每一次都大开大合，用那粗壮凶器凶残地刮擦、碾压着她内里最娇嫩敏感的每一寸褶皱，每一次都精准地凿击在那致命的宫颈口上。硕大的龟头在滚烫的肉壁上疯狂地研磨、顶撞，每一次接触都带来一阵强烈的、几乎让她晕厥的快感电流。 

“不…不行了…要…要坏掉了…啊嗯~！那里…顶得太深了…呜…子宫…要顶到了…哈啊~！” 能天使的呻吟变得愈发淫靡，被药物彻底烧毁的理智让她的话语失去了平日的活力，只剩下赤裸裸的情欲和羞耻的哀求。她的声音带着哭腔，却又甜腻得发颤，“好…好酸…里面…好胀…被…被撑满了…菲亚梅塔…求你…轻一点…啊——！！！” 每一次深顶都让她的话语变成不成调的尖叫，白丝包裹的玉足在空中无助地踢蹬，脚趾隔着湿透的丝袜紧紧蜷缩起来，足弓绷出诱人的曲线，如同受惊的幼鹿般惹人怜爱。 

房间里只剩下肉体猛烈撞击的“啪啪”闷响，混合着粘稠液体被搅动、挤压发出的“咕啾”淫靡水声。能天使的腿间早已狼藉一片，晶莹的爱液混合着菲亚梅塔腥甜的前导液，被那凶悍进出的粗棒带出，飞溅得到处都是，在床单上留下大滩粘腻湿滑的痕迹，散发出浓烈的情欲气息。她腿间那根同样被刺激得完全勃起、粉嫩可爱的小巧肉棒也随着撞击而微微颤抖，顶端渗出透明的清液。 

菲亚梅塔的喘息也变得粗重，汗水沿着她冷硬的下颌线滑落。她能清晰地感觉到身下这具娇小身体的极限。少女的深处，那绞紧的媚肉如同濒死的藤蔓，疯狂地缠绕吸吮着她的粗长。每一次贯穿，那花心深处的软肉都在剧烈震颤，每一次抽出，都带出更多混合着爱液的粘稠蜜汁。她不再追求速度，而是每一次都缓慢而沉重地抽出，再如同攻城巨锤般狠狠凿入，用最原始的力量，碾压着对方最后的防线，感受着那深处模拟的宫腔被强行撑开、填满时每一丝绝望的痉挛和屈服。 

终于，在又一次深入骨髓的贯穿，那滚烫的龟头狠狠碾过敏感的宫颈口时，能天使的身体绷紧到了极致，如同被拉断的弦。一声高亢、尖锐、如同濒死天鹅般的泣鸣从她喉咙里迸发出来。 

“噫呀啊啊啊啊——！！要…要出来了…不行了…停…停下…呜呜呜…忍不住了——！！好…好丢人…要…要潮吹了啊啊啊！！！” 

她的身体剧烈地向上反弓，小腹剧烈抽搐，白丝包裹的双腿绷得笔直，脚趾死死勾紧，足尖指向天花板。一股前所未有的、滚烫粘稠的、散发着强烈甜腥味的透明洪流，如同开闸的洪水，从她最深处的花心，从那个被反复蹂躏的宫颈口猛烈地喷涌而出！这强烈的潮吹带着惊人的冲击力，猛烈地冲刷、浇灌在菲亚梅塔深深埋入的粗长肉棒上！同时，她腿间那根小巧可爱的肉棒也剧烈地跳动起来，一股股稀薄但同样滚烫的透明液体随之喷射而出，溅落在她自己的小腹和白丝袜覆盖的大腿根上。她整个人在灭顶的快感中剧烈颤抖，失神的双眼翻白，口水不受控制地从嘴角滑落，滴在汗湿的颈间和床单上，艳红的短发凌乱地黏在汗湿的额角和脸颊，小嘴微张，发出无声的喘息，模样淫靡又可怜到极致。 

这滚烫的、带着强烈刺激性的潮吹冲击，瞬间点燃了菲亚梅塔压抑的临界点！ 

“呃——！”一声低沉的、饱含欲望的嘶吼从菲亚梅塔喉间滚出。她死死扣住能天使纤细的腰肢，腰胯如同焊死一般向前猛顶，将整根粗壮得惊人的凶器完全楔入那抽搐痉挛、仍在喷涌的深处，直至两人耻骨紧密相贴。深埋在那滚烫炼狱中的粗棒开始剧烈地、无法抑制地搏动！一股股灼热、浓稠、量多得惊人的乳白色浆液，如同高压喷射般猛烈地激射而出，狠狠灌注入能天使身体的最深处，灌满那被撑开的宫腔，与那仍在喷薄的潮吹洪流疯狂地冲撞、搅拌、融合！ 

“呜…好…好烫…里面…被…被灌满了…啊啊啊…子宫…好涨…要…要溢出来了…” 能天使在双重冲击下发出无意识的、饱含极致羞耻与极致快感的哀鸣，身体如同风中落叶般剧烈抽搐。混合着透明潮吹与浓白精液的粘稠液体如同决堤的洪水，从两人身体紧密嵌合的缝隙中不可抑制地狂涌而出，淋漓地喷射在床单上，迅速积起一大滩散发着浓烈腥甜气息的狼藉。她白丝覆盖的小腿和足尖，也沾染上了自己喷溅出的潮吹液体和溅落的混合浊液，湿透的丝袜紧贴着肌肤，勾勒出完美的足型，更显淫靡不堪。 

菲亚梅塔沉重的身躯压在能天使娇小的身体上，急促的喘息在寂静的房间里回荡。她能清晰地感受到肉棒在那片湿滑温暖的废墟中最后一次满足的搏动，以及深处宫腔被自己滚烫浓精填满、撑胀的绝妙触感。她缓缓地、带着一种事后的审视感和餍足，将自己那沾满了粘稠混合液（透明潮吹与浓白精液）的粗壮肉棒从能天使那一片狼藉、仍在微微开合抽搐、如同被彻底玩坏的花穴中退出。粘稠的混合液体拉出长长的、淫靡的银丝，滴落在床单上，更多的白浊混合着透明液体从她无法闭合的入口缓缓溢出，顺着沾满精液和白丝的腿根滑落。 

她低头看着身下彻底失去意识、如同被玩坏的人偶般的能天使。艳红的短发被汗水泪水彻底浸透，黏在惨白却仍残留高潮红晕的脸颊上。那双曾经充满活力的眼睛紧闭着，长长的睫毛挂着泪珠。纯白的丝袜凌乱不堪，大腿根部和小腿沾满了混合的体液，紧贴着肌肤，玉足无力地垂着，足尖还微微颤抖。菲亚梅塔伸出手，指尖拂过能天使滚烫的、泪痕未干的脸颊，感受着那脆弱肌肤下的余温和她微微颤抖的睫毛。 

“应激反应已解除，好好休息吧，蕾缪乐。”她的声音恢复了平日的冷静，仿佛刚才那场狂野的侵略、征服和灌满对方子宫的行为从未发生，只有空气中浓得化不开的淫靡气息和床上的一片狼藉，无声地诉说着发生的一切。 

舱门轻轻合拢的电子音，如同一个休止符，落在了死寂的房间里。浓烈的、混合着精液、爱液与汗水的独特腥膻气息，如同粘稠的网，将瘫软在床上的能天使紧紧包裹。 

过了不知多久，那紧闭的、挂着泪珠的长睫毛微微颤动了一下。能天使缓缓睁开眼，金色的眸子里还残留着高潮后的迷蒙水汽和未散的失神。身体的每一寸都像是被拆解重组过，酸软得抬不起手指，特别是双腿之间和那被填满过的深处，传来阵阵饱胀的余韵和火辣辣的钝痛。 

“呜…” 一声细弱蚊吟的呜咽从她微张的、还带着咬痕的红唇中溢出。她试图动一下，包裹着湿透纯白丝袜的玉足只是无力地蹭了蹭沾满浊液的床单，足尖蜷缩了一下，带起一片滑腻的触感。 

身体的疲惫如同潮水，但小腹深处，那被药物和激烈情事强行点燃、却未能完全熄灭的火苗，又开始不安分地跳动起来。空虚感，伴随着刚才被强行开拓、被彻底填满的恐怖快感记忆，如同毒藤般缠绕上来。特别是腿间那根粉嫩小巧的肉棒，在残余药效和高潮余韵的刺激下，竟然又微微抬起了头，顶端渗出一点透明的清液，混在腿根一片狼藉的粘稠中。 

羞耻感如同冰冷的潮水瞬间淹没了她。她想起了菲亚梅塔的冷酷，想起了自己被下药，想起了自己是如何在对方高超的技巧和药物的双重作用下失声哀求，甚至亲口说出“想要”… 滚烫的红晕瞬间从脖颈蔓延到耳根，让她原本就残留高潮余韵的脸蛋更像熟透的苹果。她猛地拉起被弄脏的薄被，试图将自己埋起来，艳红的短发凌乱地翘着，像只受惊后试图藏起来的小动物。 

然而，被褥上浓烈的、属于菲亚梅塔的雄性气息混合着她自己甜腻的体液味道，却更加清晰地钻入鼻腔。这味道像是一把钥匙，瞬间打开了身体深处某个隐秘的开关。空虚感变得尖锐，腿间的小巧肉棒和仍在微微开合、溢出白浊的花穴同时传来一阵难以忍耐的悸动和瘙痒。 

“嗯…哈啊…” 能天使发出一声带着泣音的、甜腻的呻吟。理智在尖叫着抗拒，但身体却诚实地背叛了她。一只沾着干涸精液和汗水的、微微颤抖的小手，如同有自己的意志般，怯生生地、缓慢地探入了被褥之下，滑过自己平坦的小腹，最终，迟疑地覆上了腿间那片滚烫的泥泞。 

指尖首先触碰到的，是自己那根再次完全勃起、微微跳动的粉嫩肉棒。仅仅是轻轻一握，那熟悉的、尖锐的快感电流就让她浑身一颤，腰肢无意识地向上拱起。“呜…不要…自己碰…好羞耻…” 她咬着唇瓣喃喃自语，金色的眼眸里水光潋滟，充满了自我厌恶和无法抑制的渴望。但手指却违背了话语，开始生涩地、带着试探性地上下套弄起来。薄茧摩擦过敏感的冠状沟和顶端小孔，带来一阵让她脚趾都蜷缩起来的酥麻。 

同时，她的另一根手指，也颤抖着、沾满了自己腿间的混合液体，摸索着探向了那仍在微微抽搐、不断溢出浓稠白浊的花穴入口。当指尖触碰到那红肿敏感的花唇和入口处粘腻的混合物时，能天使猛地倒抽一口冷气，身体剧烈地抖了一下。她想起菲亚梅塔那根粗壮凶器是如何凶狠地贯穿这里，又是如何将滚烫的种子深深灌入她的最深处… 

“啊…里面…好满…都是…那个人的…” 她羞耻地低语着，指尖却带着一种近乎自虐的探索欲，轻轻刺入了那湿滑紧窒、仍在不断渗出混合液体的穴口。内里滚烫的媚肉立刻像有记忆般缠绕上来，吮吸着她的手指。仅仅是模仿着被进入的姿势浅浅抽插了几下，强烈的快感就让她套弄小肉棒的手猛地加快了速度。 

“呃啊…不行…又要…又要去了…” 能天使仰起头，露出纤细脆弱的脖颈，红发黏在汗湿的皮肤上。她一边用两根手指笨拙地伺候着自己身体的两处敏感点，一边难耐地扭动着腰肢，白丝包裹的双腿大大分开又蜷缩，足尖隔着湿透的丝袜死死勾着床单，发出细微的摩擦声。快感如同失控的潮水，迅速将她推向顶峰。 

“梅…菲亚梅塔…啊——！” 在濒临绝顶的瞬间，她无意识地喊出了那个令她羞耻的名字。小巧的肉棒在她手中剧烈跳动，再次喷涌出一股稀薄的透明液体，溅落在她自己的小腹上。而花穴深处也传来一阵剧烈的痉挛，又一股温热的、混合着之前残留精液的液体涌出，将她的手指彻底打湿。 

短暂的高潮后，是更深的空虚和一种难以言喻的失落。她喘着气，小手无力地从腿间滑落，指尖和掌心都沾满了各种粘稠的液体——她自己的爱液、高潮喷出的稀薄精水、以及菲亚梅塔留在她体内、此刻正缓缓溢出的浓白精液。 

她茫然地抬起手，看着指尖那混合着透明与乳白的、散发着浓烈情欲气息的粘稠液体。刚才的羞耻和快感仿佛还残留在指尖，而空气中、床单上那无处不在的气味更像是一种烙印。 

就在这时，她的目光落在了床单上那片最大的、混合着她潮吹液体和菲亚梅塔浓精的狼藉污渍上。那粘稠的、半透明的白色浆液在灯光下泛着淫靡的光泽，散发出更加浓郁的、独属于征服者的雄性气息。 

一种诡异的、混合着自我惩罚、臣服、以及被那气味蛊惑的冲动，瞬间攫住了她。 

像被无形的线牵引着，能天使慢慢地、如同初生的小兽般，挪动着酸软的身体，爬到了那片污渍旁边。她低下头，艳红的发丝垂落，几乎要碰到那滩粘稠。她犹豫了几秒，小巧的鼻翼翕动着，似乎在确认那令她羞耻又心跳加速的气味。 

然后，她伸出了粉嫩的舌尖。 

带着一种近乎虔诚又充满自我堕落的羞耻感，她小心翼翼地、试探性地舔了一下那滩混合着两人体液的白浊。 

咸腥的、带着独特麝香和一丝甜腻的味道瞬间在舌尖蔓延开。这味道如此陌生，如此“肮脏”，却又奇异地与她身体深处残留的快感记忆相连。一股难以言喻的、背德的刺激感让她浑身一颤。 

“呜…好奇怪…的味道…” 她含糊地咕哝着，金色的眼眸里蒙上一层更深的雾气，小脸皱成一团，却像着了魔般，再次低下头。 

这一次，她不再犹豫。小巧的舌头如同最灵巧的清洁工具，认真地、仔细地舔舐起那片狼藉的床单。她舔过粘稠的精斑，卷走半干的爱液，将那些混合着自己潮吹和菲亚梅塔浓精的污渍，一点一点地、努力地卷入口中。喉咙滚动着，发出细微的吞咽声。 

“唔…嗯…” 她一边舔着，一边无意识地发出小猫般的哼唧声。动作笨拙又认真，像在完成一项极其重要的任务，又像在品尝某种禁忌的祭品。白丝包裹的膝盖跪在床单上，身体微微前倾，圆润的臀瓣因姿势而翘起，上面还残留着被大力揉捏留下的淡淡红痕。 

她舔得极其仔细，不放过任何一点痕迹。遇到特别粘稠结块的地方，她甚至会伸出沾满口水、亮晶晶的手指，先将那些块状物小心地刮起来，再送入口中。混合着织物纤维和体液的味道并不好，咸涩腥膻，但她却仿佛沉浸其中，长长的睫毛低垂着，遮掩住眼底复杂的情绪，只有微微泛红的耳尖和急促的呼吸暴露了她的羞耻与兴奋。 

每当咽下一口那混合的液体，身体深处似乎就传来一阵微弱的悸动，像是在呼应，又像是在烙印。她甚至舔到了自己之前高潮时溅落在床单上的稀薄精水，那微弱的、属于她自己的味道混在其中，更添一份混乱的背德感。 

直到那片最明显的污渍几乎被她舔舐干净，露出下方床单原本的浅色，只留下一片深色的、被唾液濡湿的水痕。能天使才像是耗尽了所有力气，动作停了下来。 

她呆呆地跪坐在床上，粉嫩的唇瓣和下巴都沾满了亮晶晶的唾液和未舔净的粘液丝线，小嘴微微张着，小舌头无意识地舔了舔嘴角，将最后一缕银丝卷入口中。原本灵动的金色眼眸此刻一片空洞，只有残留的水光和一丝未散的情欲。身体深处那残余的火苗似乎终于被这诡异的“清理”行为暂时压制了下去，只留下无尽的疲惫和一种被彻底掏空、又彻底玷污的奇异满足感。 

她低头看着被自己“清理”过的地方，又看了看自己沾满各种体液、在灯光下闪闪发亮的手指和小腹。最终，她像只终于找到窝的、精疲力尽的小兽，慢慢蜷缩起身体，侧躺在尚且干净的一小块床单上。沾着浊液的白丝玉足蜷缩在身前，双手无意识地环抱着自己。艳红的短发贴在汗湿的额角，她闭上眼睛，长长的睫毛如同蝶翼般颤抖了几下，很快便在浓郁的情欲气息和极度的疲惫中，沉入了不安的、带着泪痕的睡眠。房间里，只剩下她细微的、带着鼻音的呼吸声，以及那无论如何“清理”，也依旧弥漫不散的、宣告着征服完成的浓烈气味。 `,Jd=Object.freeze(Object.defineProperty({__proto__:null,default:Fd},Symbol.toStringTag,{value:"Module"})),Kd=`---
order: 2
---
# B.N.2 坏姐姐！💗~（安乐）


距离那个被强行烙印上菲亚梅塔气息的夜晚，已经过去了一周。身体的酸痛早已消退，但某些东西，却如同顽固的幽灵，盘踞在蕾缪乐的体内，挥之不去。
是药效残留吗？不，博士的全面检查报告显示一切生理指标正常。是心理创伤吗？似乎也不全是。每当夜深人静，当罗德岛舰船的引擎声化作低沉的背景音，一种难以言喻的空虚和灼热就会准时从小腹深处升起，伴随着脑海里无法控制地闪回的画面——菲亚梅塔冷酷的眼神、那根狰狞肉棒贯穿身体的剧痛与灭顶的胀满、还有…那无法否认的、被强行开发出的、毁灭性的高潮快感。

羞耻感如同冰冷的藤蔓缠绕心脏，但身体深处燃起的火焰却更加炽热。理智在尖叫着抗拒，但指尖却自有主张地滑向腿间。今晚也是如此。

能天使将自己反锁在狭小的宿舍舱室内，背靠着冰冷的舱门滑坐在地。房间里只开着一盏昏暗的壁灯，将她蜷缩的身影拉长。她急促地喘息着，艳红的短发凌乱地贴在汗湿的额角和潮红的脸颊上，金色的眼眸失焦地望向虚空，蒙着一层水润的雾气。一只手紧紧捂着自己的嘴，试图压抑那即将溢出的呻吟，另一只手则深深探入松垮的睡裤边缘。

指尖下，那根粉嫩小巧的肉棒早已在她的抚弄下完全挺立，顶端的小孔不断渗出滑腻的透明清液。更让她羞耻的是，花穴深处也传来阵阵空虚的悸动，内壁不自觉地收缩着，仿佛在渴望着被什么粗硬的东西再次狠狠填满。她生涩地、带着一种自我厌弃的急切，套弄着自己的小肉棒，指尖偶尔划过下方湿漉漉、微微开合的入口，引起一阵让她腰肢酥软的电流。

“唔…哈啊…不行…不能想…那个人…” 她破碎地低语着，试图驱散菲亚梅塔的身影，但身体却诚实地模拟着被侵犯时的感觉。手指模仿着抽插的节奏，浅浅地探入自己湿滑的花穴，内壁立刻贪婪地缠绕上来。快感如同细小的火花，在身体里噼啪作响，迅速累积。
就在她即将攀上那熟悉的、自我满足的顶点，身体绷紧，包裹着纯白短袜的玉足无意识地蹬直，足尖死死抵住地面时——

“叩叩叩。”

清晰而随意的敲门声，如同冰水浇头，瞬间将她从情欲的云端拽回现实！

能天使如同受惊的兔子般猛地一颤，套弄的手指瞬间僵住，体内累积的快感如同被掐断的弦，不上不下地卡在那里，带来一阵难耐的空虚和恐慌。她手忙脚乱地想拉上裤子，心脏狂跳得几乎要冲破胸腔。

“小乐？在里面吗？姐姐进来咯？” 一个慵懒而带着笑意的熟悉声音隔着门板传来，正是她的姐姐——雷缪安。没等能天使做出任何反应，舱门“滴”的一声轻响，权限卡刷开了门锁。
门被推开，走廊的光线涌入昏暗的室内。雷缪安高大的身影斜倚在门框上，她穿着一身随意的罗德岛制服外套，里面是低领的黑色背心，勾勒出丰满的曲线。她脸上带着似笑非笑的神情，那双与能天使相似却更显成熟魅惑的金色眼眸，精准地捕捉到了坐在地上、衣衫不整、满脸潮红、手指还僵在腿间的妹妹。

空气仿佛凝固了。

能天使的脸瞬间红得如同滴血，金色的瞳孔因极度羞耻而剧烈收缩。她猛地低下头，试图用凌乱的红发遮住脸，手忙脚乱地想把手抽出来拉好裤子，动作笨拙又狼狈。“姐…姐姐？！你…你怎么…不敲门就…” 她的声音抖得不成样子。

雷缪安的目光慢悠悠地扫过妹妹泛红的耳尖、剧烈起伏的胸口、以及睡裤边缘露出的、沾着可疑水光的指尖。她非但没有退出去，反而缓步走了进来，舱门在她身后自动关闭。高跟鞋踩在金属地板上发出清脆的声响，每一步都像踩在能天使紧绷的神经上。

“敲门了呀，你没应嘛。” 雷缪安的声音带着一种慵懒的磁性，她走到能天使面前，居高临下地看着她，嘴角勾起一抹意味深长的弧度。“而且…看来我们的小乐，正在忙着解决一些…‘个人需求’？” 她的目光意有所指地扫过能天使腿间，语气带着毫不掩饰的戏谑和一丝…兴奋？
“没…没有！我只是…在找东西！” 能天使慌乱地辩解，声音细若蚊吟，恨不得找个地缝钻进去。她试图站起来，但腿软得厉害，加上体内那股被打断的、不上不下的欲火，让她动作更加笨拙。

“哦？找东西找到裤子里面去了？” 雷缪安轻笑出声，那笑声如同羽毛般搔刮着能天使的神经。她忽然蹲下身，与能天使平视。成熟女性特有的、混合着淡淡香水与荷尔蒙的气息瞬间笼罩了能天使。“小脸红成这样，身体抖成这样…还有这里…” 她的指尖，带着微凉的温度，猝不及防地点在能天使睡裤中央，那明显被撑起一个小帐篷、并且湿了一小块的位置上！

“唔——！” 能天使如遭电击，身体猛地一弹，发出一声短促的惊喘。那被触碰的地方，正是她勃起的小巧肉棒顶端所在！强烈的刺激和羞耻感让她几乎晕厥。

“看来，我们的小乐，这里‘火气’很大呢。” 雷缪安的金眸里闪烁着危险又兴奋的光芒，那是一种大姐姐发现妹妹秘密后，带着掌控欲和玩味的眼神。“是…上次那个‘意外’的后遗症吗？” 她凑得更近，红唇几乎贴着能天使滚烫的耳朵，温热的气息喷洒在敏感的耳廓上，“那个叫菲亚梅塔的…把你‘打开’了？让你尝到了…忘不掉的滋味？”

能天使浑身一颤，姐姐的话语像一把钥匙，瞬间打开了那些被她强行压抑的记忆闸门。菲亚梅塔的脸、那根粗壮的肉棒、被贯穿的剧痛和灭顶的快感…以及之后自己沉溺于自慰的羞耻画面，如同潮水般冲击着她。她猛地摇头，泪水在眼眶里打转：“不…不是的…姐姐你别说了…”

“嘘…” 雷缪安的食指轻轻按在了能天使颤抖的唇上，阻止了她无力的辩解。“没关系，姐姐都懂。” 她的声音忽然变得异常温柔，带着一种蛊惑人心的力量，“那种感觉…确实很难熬，对吧？身体变得不像自己的，总想着被填满，被弄坏…” 她的手指，顺着能天使的唇瓣下滑，划过她纤细的脖颈，最后隔着薄薄的背心，精准地按在了她胸前一颗早已硬挺的蓓蕾上，用力一捻！

“呀啊——！” 强烈的刺激让能天使瞬间弓起背，压抑的呻吟脱口而出。理智在疯狂报警，但身体却在姐姐熟练的挑逗和那无法熄灭的欲火双重夹击下，迅速背叛了她。腿间的小巧肉棒在睡裤下跳动着，花穴深处更是传来一阵剧烈的空虚收缩。

“看，你的身体…多诚实。” 雷缪安满意地看着妹妹的反应，她的眼神变得幽深而充满掠夺性。“一个人偷偷解决多没意思？让姐姐来…帮你‘好好’处理一下，嗯？” 她不再给能天使任何思考或拒绝的机会。

雷缪安猛地伸手，一把扯掉了能天使那碍事的睡裤和内裤！能天使粉嫩可爱、完全勃起的小巧肉棒和下方那片湿漉漉、微微开合翕张的粉嫩花穴瞬间暴露在微凉的空气中，一览无余。顶端渗出的清液在灯光下闪着淫靡的光泽。

“不…姐姐…别…” 能天使徒劳地扭动着身体，双手试图遮挡，却被雷缪安轻易地单手扣住手腕，按在了头顶的舱门上。这个姿势让她彻底门户大开，所有的羞耻部位都暴露在姐姐审视的目光下。

“真可爱…” 雷缪安的目光如同扫描仪般扫过妹妹稚嫩又情动的身体，最终落在那根颤抖的粉嫩肉棒上。“这么精神的小东西，不好好‘招待’一下怎么行？” 她低笑着，毫不犹豫地俯下了头。

在能天使惊恐又带着一丝隐秘期待的目光中，雷缪安张开红唇，带着一种近乎贪婪的姿态，将那根小巧玲珑、散发着少女清甜气息的粉嫩肉棒，整个含入了温热湿润的口腔之中！

“呜哇啊啊啊——！！！” 能天使的身体如同被高压电击中，猛地向上反弓，喉咙里爆发出不成调的尖叫！从未体验过的、比手指强烈千百倍的包裹感和吸吮感，瞬间从最敏感的地方炸开！雷缪安的口技显然极其老练，灵巧的舌头如同活物般缠绕着柱身，舌尖精准地舔舐着敏感的冠状沟和顶端的小孔，时而用力吮吸，时而用舌面快速扫过。强烈的快感如同海啸般瞬间将能天使淹没！

“啊！啊！姐…姐姐…停…停下…太…太刺激了…要…要去了…” 能天使的哭喊变成了破碎的淫叫，腰肢疯狂地扭动，被按在头顶的手腕徒劳地挣扎着。白丝包裹的脚趾在冰冷的地板上死命地蜷缩、蹬踏，足弓绷紧，却无法逃离这灭顶的快感。

然而，雷缪安的“帮助”远不止于此。她的另一只手，不知何时已经拿起了一个闪烁着金属冷光的、尺寸中等但造型逼真的假阳具，顶端甚至还模拟了龟头的形状。她看都没看，只是凭着感觉，将那冰冷的、涂抹了润滑剂的假阳具顶端，抵在了能天使那不断开合、汁水淋漓的花穴入口。

“唔…！什…什么…” 能天使感觉到异物的冰冷触感，惊恐地想要并拢双腿，却被雷缪安的身体死死压住。

“别怕，小乐，” 雷缪安从她腿间抬起头，唇边还带着一丝银亮的唾液，连接着她的小肉棒。她金色的眼眸里燃烧着赤裸裸的欲火和掌控欲，嘴角勾起一抹邪魅的笑容，“小穴也饿了吧？姐姐也帮你‘喂饱’它…”

话音未落，她握着假阳具的手猛地向前一送！

“呃啊——！” 冰冷的异物感瞬间被强行撑开的饱胀感取代！那根假阳具毫不留情地贯穿了能天使湿滑紧窒的花穴，直直地顶入深处！虽然尺寸远不如菲亚梅塔的凶器，但这种被异物强行侵入、填满的感觉，瞬间勾起了她身体深处的记忆和渴望。

更致命的是，雷缪安再次低下头，更加卖力地吮吸吞吐起她的小肉棒，同时握着假阳具的手开始快速地、有节奏地在她花穴里抽插起来！口交与假阳具的双重刺激，如同两股狂暴的电流，在能天使的身体里疯狂交汇、炸裂！

“啊啊啊啊——！！！不行了…两个…两个地方…同时…哈啊~！姐姐…饶了我…要…要坏掉了…呃嗯~！” 能天使彻底崩溃了，理智被彻底烧毁，只剩下最原始的感官刺激。她像一条离水的鱼般剧烈地扭动、颤抖，口水顺着嘴角失控地流淌，泪水混合着汗水浸湿了红发。被口交的小肉棒在姐姐温热的口腔里剧烈搏动，花穴里的假阳具每一次抽插都带出更多粘稠的爱液，发出“咕啾咕啾”的淫靡水声。

雷缪安欣赏着妹妹在自己身下彻底沉沦的淫态，眼中闪过一丝得逞的光芒。她暂时停下了口交，让能天使那根濒临爆发的小肉棒暴露在空气中，顶端不断渗出清液。然后，她像变戏法一样，从制服口袋里掏出了一样东西——一根毛茸茸的、粉白色相间、根部连接着一个粗大震动肛塞的仿真猫尾巴！

“这么可爱的时刻，怎么能不留个纪念呢？” 雷缪安的声音带着一种令人毛骨悚然的愉悦。她不顾能天使的微弱挣扎，强行将她翻了个身，让她跪趴在地上，沾满体液的白丝玉足和小巧的臀瓣高高翘起。她熟练地将那根粗大的肛塞，涂抹了大量润滑剂后，对准能天使那从未被开发过的、紧致小巧的菊蕾，毫不留情地、缓慢而坚定地旋了进去！

“呜噫——！！！” 后庭被强行开拓的异样胀痛和羞耻感让能天使发出凄厉的悲鸣，身体剧烈地挣扎，却被雷缪安死死按住腰肢。当那粗大的肛塞完全没入，只留下毛茸茸的猫尾巴垂在臀缝间时，雷缪安按下了尾巴根部的开关。

“嗡……” 强烈的震动瞬间从体内深处传来！那震动不仅刺激着脆弱的肠壁，更通过连接的组织，清晰地传递到前方的花穴和肉棒！三重刺激叠加，让能天使瞬间达到了前所未有的高潮临界点！

“啊啊啊——！！！” 她仰起头，发出濒死般的尖啸。

就在这一刻，雷缪安掏出了她的个人终端，开启了高清录像模式。镜头精准地对准了能天使此刻淫靡到极致的姿态：被迫跪趴，臀瓣高高翘起，粉白的猫尾巴因为震动而微微颤抖；前方，那根粉嫩的小肉棒在空气中剧烈跳动，顶端不断喷射出稀薄的透明精液，如同失禁般溅落在地板和她的白丝袜上；后方的假阳具还在她不断痉挛收缩的花穴里快速抽插，带出大量混合着爱液的泡沫；而她布满泪痕和潮红的脸蛋上，是彻底失神、沉溺于快感的痴态。

“对，就是这样，小乐…高潮的样子…真美…” 雷缪安一边用假阳具疯狂地抽插着妹妹痉挛的花穴，确保她的高潮持续得更猛烈、更失态，一边调整着终端的角度，将每一个细节都清晰地记录下来——特别是那根喷射的小肉棒和不断溢出混合液体的花穴特写，以及那条因高潮而剧烈抖动的猫尾巴。

“咿呀呀呀——！！！” 能天使在灭顶的快感和强烈的羞耻感中彻底崩溃，身体如同坏掉的玩偶般剧烈抽搐，小肉棒持续地喷射着，花穴和菊蕾同时剧烈收缩，整个人瘫软在地板上，只剩下无意识的痉挛和细微的呜咽。猫尾巴还在她臀缝间不知疲倦地震动着，提醒着她刚才发生的一切。

雷缪安终于停下了动作，假阳具从一片狼藉的花穴中缓缓抽出，带出一股混合液体。她满意地看着终端里录下的、长达数分钟的、妹妹被玩弄到极致高潮的淫靡视频，特别是最后那失神喷射和瘫软的镜头。她关闭了猫尾巴的震动，但那粗大的肛塞依然留在能天使体内。
她走到瘫软如泥的妹妹身边，蹲下身，用指尖沾了一点能天使溅落在白丝袜上的稀薄精液，然后当着她的面，慢条斯理地舔掉。

“味道不错呢，小乐。” 雷缪安的声音带着餍足和掌控一切的愉悦。她晃了晃手中的终端，屏幕还停留在能天使高潮失神的那一幕。“这段‘姐妹情深’的珍贵影像，姐姐就替你保管了。以后…如果觉得‘难受’了，随时可以来找姐姐‘帮忙’哦？姐姐一定会让你…比今天更‘舒服’。”
她将终端收起，站起身，居高临下地看着眼神空洞、身体还在微微抽搐的能天使，如同欣赏自己最得意的杰作。

“好好休息吧，我‘可爱’的妹妹。” 留下这句话和满室的淫靡狼藉，雷缪安如同胜利的女王，踩着高跟鞋，心情愉悦地打算离开舱室。

雷缪安将终端收起，带着餍足的笑容转身，高跟鞋清脆地敲击着地板，准备离开这片由她亲手制造的淫靡战场。然而，就在她迈出第一步的瞬间——

一股意料之外的、带着颤抖却异常坚定的力量，猛地攥住了她的脚踝！

雷缪安惊愕地回头。

地上，那个前一秒还眼神空洞、瘫软如泥的身影，此刻正抬起头。能天使（蕾缪乐）的脸上依然布满泪痕和未褪尽的潮红，金色的眼眸里却不再是空洞，而是燃烧着一种极其复杂的火焰——混杂着未散的高潮余韵、被玩弄到极致的羞耻、一种被逼到绝境的委屈，以及…一种连她自己都无法理解的、源于身体深处那被多重刺激彻底点燃的、想要“反击”的本能冲动！
她的身体还在微微抽搐，臀后那条粉白的猫尾巴随着她的动作轻轻晃动，肛塞的震动虽然停止了，但被强行开拓的饱胀异样感依然清晰。更让她羞耻万分的是，那根冰冷的假阳具还深深地插在她湿滑的花穴里，每一次微小的动作都带来令人头皮发麻的摩擦感和更深处的空虚——它填满了，却又远远不够！

“姐…姐姐…” 能天使的声音破碎沙哑，带着浓重的哭腔和一种奇异的执拗，“…别走…”

雷缪安挑眉，金眸中闪过一丝意外，随即被更深的好奇和玩味取代。“哦？我们的小乐，还没满足吗？” 她试图抽回脚，却发现妹妹的手攥得出奇的紧，指尖甚至微微发白。

能天使没有回答，或者说，她的身体替她做出了回答。她挣扎着，用尽全身力气，以一种极其笨拙又惹人怜爱的姿势，从地上爬了起来。她双腿发软，几乎站立不稳，全靠抓着雷缪安脚踝的手支撑着。白丝袜早已污浊不堪，沾满了她自己喷溅的稀薄精液和地板上的灰尘，包裹着的玉足微微颤抖。那条粉白的猫尾巴在她臀后无助地垂着，随着她的动作轻轻摇摆，提醒着她此刻的姿态有多么羞耻。花穴里的假阳具随着她的起身，更深地嵌入，让她闷哼一声，腰肢本能地塌陷了一下。

“你…你对我做了那些…” 能天使的声音带着控诉，泪水再次涌出，顺着脸颊滑落，“…还拍了…拍了那种东西…” 羞耻感几乎要将她淹没，但身体深处那股被多重刺激（口交、假阳具、肛塞震动）强行催生、又被强行中断、不上不下的欲火，此刻却如同被堵住的熔岩，急需一个爆发的出口。而眼前这个“始作俑者”的姐姐，似乎成了唯一的目标。

她踉跄着，几乎是扑到了雷缪安身上，双手胡乱地抓住姐姐的衣襟。她的动作毫无章法，带着孩子气的笨拙和一种被情欲驱使的急切，完全不像梅塔菲亚那种冷酷的侵略，更像是一只被欺负狠了、终于鼓起勇气想要“报复”却不知如何下口的小兽。

“小乐，你想做什么？” 雷缪安的声音依然带着一丝调笑，但眼神却认真了几分。她并未真正反抗，反而顺势被能天使推着，后背靠在了冰冷的舱壁上。她饶有兴致地看着妹妹羞愤交加、情欲难耐的脸，看着她腿间那根虽然尺寸不大、但此刻因为多重刺激和愤怒（或者说委屈）而再次倔强挺立起来的粉嫩肉棒，顶端还在可怜兮兮地渗出清液。

能天使的脸红得几乎滴血，金色的眼眸躲闪着，不敢看姐姐的眼睛。她想“报复”，想像姐姐对她那样…但她根本不知道怎么做！她只是凭着本能，身体紧紧贴着雷缪安，隔着衣物笨拙地磨蹭着，勃起的小肉棒顶在雷缪安的小腹下方，带来一阵阵让她自己都颤抖的摩擦快感。花穴里的假阳具随着她的磨蹭，更深地顶入敏感点，让她发出细碎的呜咽。

“呜…姐姐…坏…欺负人…” 能天使一边无意识地蹭着，一边委屈地控诉，声音又软又糯，毫无威慑力，反而像是在撒娇。她的动作与其说是攻击，不如说是一种混乱的、寻求发泄和某种“连接”的扭动。那条猫尾巴在她身后可怜地晃动着，像她此刻心情的写照。

雷缪安看着妹妹这副又羞又急、想要“反击”却只会笨拙磨蹭的可爱模样，心中那点掌控欲得到了奇异的满足，同时身体也被这生涩的挑逗点燃。她低笑一声，带着一种大姐姐引导般的纵容和一丝隐秘的期待。

“小乐是…想对姐姐做点什么吗？” 她故意用暧昧的语气问，一只手悄然滑下，隔着制服裤，精准地按在了能天使顶在自己小腹的勃起肉棒上，轻轻揉捏了一下。

“唔——！” 强烈的刺激让能天使浑身一颤，发出一声甜腻的惊喘，身体瞬间软了半边，几乎要滑下去。她羞得恨不得把自己埋起来，但身体却诚实地追逐着那快感，腰肢无意识地向前顶了顶。

“看来是这里…想要‘欺负’姐姐呢？” 雷缪安的声音带着诱哄，另一只手则滑到了自己的腰间，利落地解开了制服裤的纽扣和拉链。她没有完全脱下，只是将裤腰褪下少许，露出了下方同样早已湿透的、黑色的蕾丝内裤边缘，以及那神秘的三角地带。

能天使的目光不由自主地被吸引过去，看到姐姐内裤中央那一片深色的濡湿痕迹，嗅到一股比她自己更浓郁成熟的雌性气息混合着情欲的味道。她的大脑一片空白，只感觉口干舌燥，身体里的火烧得更旺了。

“来，小乐，” 雷缪安的声音如同恶魔的低语，带着鼓励和引导。她主动地、微微分开了双腿，然后抓住了能天使那只覆在她小腹上、因为紧张而微微颤抖的手，牵引着它，覆盖在了自己内裤那湿热的隆起上。“姐姐这里…也‘饿’了呢…都是被你蹭的。” 她的指尖隔着湿透的蕾丝，引导着能天使的手指，轻轻按压在自己最敏感的核心上。

能天使的手指触电般缩了一下，但又被雷缪安按了回去。隔着薄薄的布料，她能清晰地感觉到姐姐那里的滚烫、柔软和…惊人的湿润。一种前所未有的、背德的刺激感和强烈的探索欲瞬间攫住了她。

“想…想进去…” 能天使无意识地喃喃出声，声音小得几乎听不见，金色的眼眸水汪汪的，充满了迷茫、渴望和极致的羞耻。她腿间的小肉棒跳动得更厉害了。

“那就…进来吧。” 雷缪安的声音带着一丝沙哑的磁性。她不再犹豫，主动地、用另一只手将自己的黑色蕾丝内裤拨开到一边，瞬间，那片早已湿滑泥泞、色泽深红、如同成熟蜜桃般诱人的花唇完全暴露在能天使眼前。花瓣间，那幽深的入口正随着主人的呼吸微微翕张，溢出晶亮的蜜露，散发出更加浓郁的、成熟的雌性芬芳。

然后，在能天使呆滞的目光中，雷缪安抓住了她那只覆在自己花户上的手，引导着她的指尖，沾满了她自己分泌的、粘稠滚烫的爱液。接着，雷缪安握住了能天使那根颤抖不已的粉嫩肉棒！

“！？” 能天使浑身剧震。

雷缪安没有像梅塔菲亚那样粗暴，也没有像她自己之前那样带着玩弄。她的动作带着一种奇异的、引导式的温柔。她握着那根小巧可爱的肉棒，用顶端饱胀的龟头，沾满了从她自己花穴里带出的、滑腻温热的蜜液。然后，她牵引着它，让它那圆润的顶端，轻轻地、缓缓地抵在了自己那湿滑无比、微微开合的成熟入口上。

“唔…” 两人同时发出一声满足的喟叹。能天使是感觉到那难以想象的、温热湿滑的包裹触感，而雷缪安则是感觉到那小巧却硬挺的异物带来的、恰到好处的撑开感。

“乖，小乐…” 雷缪安的声音带着喘息，金色的眼眸蒙上情欲的雾气，她看着妹妹羞红到极致、不知所措的脸蛋，主动地、缓慢地沉下了腰肢。“…自己动动看？让姐姐也…尝尝我们小乐的‘厉害’…嗯？”

随着她腰肢的下沉，能天使那根粉嫩小巧的肉棒，在姐姐温柔的引导和自身润滑的帮助下，缓慢却坚定地、一寸寸地滑入了那片温暖、紧窒、湿滑得不可思议的成熟蜜径之中！

“啊…！” 能天使发出一声短促的、带着极致满足和不可思议的惊喘。那感觉…和冰冷坚硬的假阳具完全不同！是活生生的、温热的、柔软又带着惊人吸力的包裹！每一寸褶皱都仿佛在吮吸、欢迎着她的小巧入侵者。虽然尺寸不大，但被这样完全接纳、包裹的感觉，以及想到自己正在进入的是姐姐的身体…一股强烈的、背德的、掌控般的快感混合着巨大的羞耻，如同电流般瞬间窜遍她的四肢百骸！她臀后那条粉白的猫尾巴，因为这突如其来的、完全不同的强烈刺激，猛地翘起，又剧烈地颤抖了一下。

花穴里还插着的假阳具，此刻仿佛成了多余的累赘，随着她身体的前倾，更深地顶入她自己的敏感点，带来一阵酸胀的刺激，提醒着她自己此刻有多么淫靡不堪——前穴插着冰冷的假阳具，后穴塞着猫尾巴的肛塞，而自己的肉棒，却正插在亲生姐姐温暖的小穴里！ 这混乱而羞耻的现实，让她几乎要晕过去，但身体却诚实地被快感俘获。

“对…就是这样…小乐…动一动…” 雷缪安鼓励着，双手扶住了能天使纤细的腰肢，引导着她生涩地、小幅度地前后摆动腰臀。

能天使如同提线木偶般，在姐姐的引导下，开始了极其笨拙、缓慢的抽插。每一次进入那温软紧窒的深处，都带来一阵让她脚趾蜷缩的极致快感；每一次退出，那湿滑媚肉的挽留又让她心尖发颤。她的动作小心翼翼，带着一种孩子气的温柔和试探，生怕弄疼了姐姐（或者说，是潜意识里对这种行为的恐惧和不确定）。

“啊…嗯…小乐…好乖…” 雷缪安感受着体内那根小巧却异常硬挺的肉棒生涩而温柔的进出，虽然尺寸和技巧都无法带来梅塔菲亚那种毁灭性的冲击，但这种被妹妹“占有”的背德感、掌控妹妹动作的支配感，以及看着妹妹那羞耻又沉迷的可爱表情，却带来了一种别样的、蚀骨销魂的快感。她主动地扭动腰肢，迎合着能天使的进出，让那小巧的肉棒能更深地研磨到她内壁的敏感点。

“唔…姐姐…里面…好热…好舒服…” 能天使无意识地呢喃着，金色的眼眸半闭，长长的睫毛上还挂着泪珠。她的动作逐渐从生涩变得稍微顺畅了一些，腰肢开始本能地追寻着那深入骨髓的快感源泉。每一次顶入，她都能感觉到姐姐小穴深处那惊人的吸吮力和包裹感，让她的小肉棒舒服得直打颤。后穴的肛塞和花穴里的假阳具带来的异物感依然存在，但在姐姐小穴那温软湿滑的包裹对比下，反而成了一种奇异的、加剧快感的背景刺激。

她的抽插渐渐加快，虽然依旧带着一种温柔的克制，但喘息却越来越急促。她俯下身，滚烫的脸颊无意识地贴在姐姐丰满的胸口，像寻求安慰的孩子。艳红的短发蹭着雷缪安的颈窝，带来一阵痒意。
“啊…小乐…再…再用力一点…对…顶那里…” 雷缪安喘息着，引导着妹妹的动作，双手用力揉捏着能天使挺翘的臀瓣，指尖甚至恶作剧般地拨弄了一下她臀缝间垂下的猫尾巴根部。能天使臀后那条粉白的猫尾巴，随着她腰肢的摆动和姐姐的拨弄，开始更加明显地、有节奏地晃动起来，像一只真正陷入情欲的小猫。

能天使在姐姐的鼓励和体内累积的快感驱使下，终于抛开了最后一丝犹豫（或者说，被快感彻底淹没）。她抱紧了雷缪安，腰肢开始用力地、一下下地顶撞！虽然力量远不如梅塔菲亚，但那根粉嫩肉棒每一次都深深地、认真地顶入姐姐温暖的深处，带着一种近乎虔诚的、想要给予（或者说，是想要证明什么）的温柔力道。

“唔…姐姐…我…我要…” 能天使的呻吟带着哭腔，身体绷紧，白丝玉足死死蹬着地板，足尖绷直。她能感觉到临界点的到来，那感觉比自慰时强烈百倍！花穴里的假阳具和后穴的肛塞似乎也感受到了她的高潮前兆，带来一阵阵附加的刺激。

雷缪安也感觉到了体内那根小肉棒剧烈的搏动和深处传来的痉挛吸力。“射进来…小乐…” 她喘息着命令道，同时用力将妹妹的腰肢按向自己，让那小巧的龟头死死抵住自己最深处柔软的宫腔口！

这命令如同最后的开关！

“咿呀啊啊啊——！！姐姐——！” 能天使发出一声高亢的、混合着极致羞耻和极致快感的尖叫！她死死抱住雷缪安，腰肢剧烈地向前猛顶了几下，然后彻底僵住！一股股滚烫的、量不算多但异常浓稠的乳白色精液，从她小巧肉棒的顶端猛烈地激射而出，毫无保留地、深深地灌注入姐姐温暖的花心深处！与此同时，她花穴里的假阳具和后穴的肛塞，似乎也刺激得她前方花穴再次涌出一股温热的潮吹液体，混合着之前残留的润滑液，从两人身体嵌合的缝隙中涌出。

高潮的余韵中，能天使如同脱力般软倒在雷缪安怀里，小脸埋在姐姐胸口，身体还在剧烈地颤抖、抽搐，发出小动物般的呜咽。臀后那条粉白的猫尾巴，也随着高潮的余波，无力地垂落下来，轻轻晃动着。花穴里的假阳具似乎被高潮的痉挛挤得向外滑出了一点，但依然卡在入口处。

雷缪安抱着怀里彻底瘫软的妹妹，感受着体内那被温柔灌入的、属于妹妹的微暖精液，以及妹妹那根尚未完全软化的肉棒依然浅浅地埋在自己体内带来的微妙触感。她低头看着能天使汗湿的、艳红的发顶，看着她臀后那条象征着被掌控的猫尾巴，嘴角勾起一抹复杂而餍足的笑容。

这场由她主导的“游戏”，最终以这样一种意想不到的、充满背德与温柔的方式“结束”。而那个被玩弄到崩溃又最终“反击”的妹妹，此刻在她怀中，更像是一个终于发泄完所有委屈和欲望后，精疲力尽的孩子。空气中，情欲的气息混合着一种奇异的、名为“姐妹”的羁绊，变得更加粘稠而复杂。

`,Gd=Object.freeze(Object.defineProperty({__proto__:null,default:Kd},Symbol.toStringTag,{value:"Module"})),qd=`---
order: 3
---
# B.N.3 泰拉的超市、可爱的能天使还有企鹅物流的各位💗~

巨大的穹顶下，泰拉购物广场人声鼎沸。各色种族、穿着各异的人们推着购物车穿梭在琳琅满目的货架间，空气中混合着烘焙坊的甜香、生鲜区的冷气以及各种源石技艺驱动的广告牌发出的微光。企鹅物流的一行人——德克萨斯、可颂、空，以及被夹在中间的能天使，正推着几辆堆满零食、日用品和奇怪“企鹅物流特供”商品的购物车，在人群中缓慢移动。

能天使努力想表现得像平时一样活泼，但她的笑容有些僵硬，金色的眼眸时不时会闪过一丝不易察觉的慌乱，视线总是不由自主地瞟向走在队伍稍后方的那个身影——菲亚梅塔。萨科塔天使今天穿着修身的黑色风衣，金色的长发束成利落的马尾，脸上带着一贯的、仿佛洞悉一切的淡漠表情，但偶尔扫过能天使的目光，却带着冰冷的玩味。

“小乐，你怎么了？今天好安静哦。” 可颂大大咧咧地搂住能天使的肩膀，好奇地凑近，“脸也有点红，不舒服吗？”

“啊？没…没有啦！” 能天使像受惊的兔子般猛地一缩，艳红的短发都差点炸起来，她赶紧摆手，努力挤出笑容，“就是…人有点多，有点热！对，太热了！” 她用手扇着风，试图掩饰自己加速的心跳和身体深处那…难以启齿的异样感。

就在刚才，趁着德克萨斯和空在讨论哪种猫粮更适合大帝，可颂被新上架的限量版泡面吸引的短暂空档，菲亚梅塔如同鬼魅般靠近了她。

“跟我来。” 菲亚梅塔的声音低沉，带着不容置疑的命令口吻。在能天使反应过来之前，她的手腕已经被冰冷的手指扣住，不容抗拒地被拉离了队伍，拐进了旁边一个相对僻静的、通往洗手间的走廊。

“菲亚…菲亚梅塔！你要做什么？大家都在…” 能天使惊慌地挣扎，但菲亚梅塔的力量远超她的想象。

“安静。” 菲亚梅塔将她推进了宽敞但空无一人的女洗手间隔间，反手锁上了门。狭小的空间里，只剩下她们两人，以及能天使急促的呼吸声。

菲亚梅塔居高临下地看着她，金色的眼眸里没有丝毫温度，只有冰冷的掌控欲。她拿出一个闪烁着金属冷光、只有小指节大小的椭圆形物体——一个微型强力跳蛋。

“自己撩起裙子，脱掉内裤。” 菲亚梅塔的命令简洁而残酷。

“不…我不要…” 能天使惊恐地后退，背脊抵在冰冷的隔间板上。

菲亚梅塔嘴角勾起一抹冷笑，拿出个人终端，屏幕亮起，赫然是上次在宿舍里，雷缪安录下的、能天使戴着猫尾巴肛塞、被假阳具和口交玩弄到失神高潮的淫靡视频！能天使金色的瞳孔瞬间收缩，脸色变得惨白。

“选吧。是现在乖乖听话，还是让这段‘精彩表演’立刻出现在企鹅物流的公共频道，或者…直接发给博士？” 菲亚梅塔的声音如同毒蛇吐信。

巨大的羞耻和恐惧瞬间淹没了能天使。她颤抖着，泪水在眼眶里打转，最终屈辱地、一点点撩起了自己那身企鹅物流标志性的、红黑相间的短裙，褪下了那早已被冷汗浸湿的纯白棉质内裤。白皙修长的双腿暴露在微凉的空气中，微微颤抖着，腿间那粉嫩的花穴因为紧张和恐惧而微微收缩。

菲亚梅塔没有任何怜惜，她蹲下身，将那冰冷的跳蛋前端涂抹上透明的润滑剂，然后精准地、不容抗拒地，将它深深地、完全地塞进了能天使那未经人事、紧窒湿滑的花穴深处！

“呜——！” 异物强行侵入的饱胀感和冰冷感让能天使发出一声压抑的呜咽，身体猛地绷紧。跳蛋被推到了最深处，紧贴着最敏感的软肉，带来一阵阵让她头皮发麻的异样感。

菲亚梅塔站起身，拿出一个粉色的、带有可爱猫耳装饰的皮质口球，以及一个同款的、印着卡通猫爪印的黑色口罩。

“张嘴。” 菲亚梅塔命令道。

能天使屈辱地张开嘴，那带着皮革和橡胶味道的口球被粗暴地塞了进去，带子勒过她的脸颊和后脑，将她的呜咽彻底堵住，只能发出含糊的“唔唔”声。口水不受控制地开始分泌，顺着嘴角溢出。接着，那个印着猫爪印的口罩被戴在了她的脸上，完美地遮住了口球的存在，只露出一双盈满泪水、写满惊恐和羞耻的金色眼眸，以及那标志性的艳红短发。口罩的设计很巧妙，边缘贴合，从外面看，就像是一个普通的、有点可爱的防护口罩。

菲亚梅塔满意地看着自己的“作品”，然后拿出了那个小巧的跳蛋遥控器。她并没有立刻开启，而是当着能天使的面，按下了通讯器。

“缪安，来女洗手间，B区最里面隔间。有好玩的‘小猫’需要你照顾一下。” 她的语气带着一丝戏谑。

能天使的心沉到了谷底。姐姐…也要来？

很快，隔间门被敲响，菲亚梅塔打开门，雷缪安那高挑的身影闪了进来。看到被口罩遮住下半张脸、泪眼汪汪、裙子还撩在腰间的妹妹，以及她腿间那微微开合、隐约可见跳蛋拉线的粉嫩花穴，雷缪安的金眸瞬间亮了起来，嘴角勾起一抹大姐姐般“温柔”却充满恶趣味的笑容。

“哎呀呀，我们的小乐，又被菲亚梅塔‘照顾’了呢？” 雷缪安的声音带着慵懒的磁性，她走近，指尖轻轻拂过能天使滚烫的脸颊，感受到她身体的颤抖。“这副样子…真是可爱得让人想欺负呢。” 她的目光扫过能天使被迫暴露的下体，眼神暗了暗。

菲亚梅塔将跳蛋遥控器抛给雷缪安。“交给你了，别玩坏了。让她‘好好’体验一下购物的乐趣。” 说完，她像完成一件任务般，转身离开了隔间，留下能天使和雷缪安独处。

雷缪安把玩着手中的遥控器，看着妹妹那双充满哀求的金色眼眸，笑容越发甜美，却也越发危险。“放心，姐姐会很‘温柔’的。” 她说着，拇指轻轻按下了遥控器上的一个按钮。

嗡——！

隔间里瞬间响起一阵极其细微、但在能天使听来却如同惊雷般的震动声！被深埋在花穴最敏感处的跳蛋，骤然开始了低频但持续不断的震动！那感觉，就像有无数细小的电流从身体最深处炸开，沿着脊椎直冲大脑！

“唔嗯——！！！” 能天使猛地仰起头，身体剧烈地一颤，双手死死抓住隔间的门板，指甲几乎要嵌进去。巨大的快感混合着强烈的羞耻感如同海啸般冲击着她！她想要尖叫，却被口球死死堵住，只能发出沉闷的、带着哭腔的“呜呜”声，口水不受控制地从口罩边缘渗出，形成一小片深色的湿痕。金色的眼眸瞬间失焦，蒙上浓重的水雾。

“嘘…小点声哦，外面可是有很多人呢。” 雷缪安“好心”地提醒，手指却恶作剧般地将震动强度调高了一档！

嗡——嗡嗡——！

震动变得更加剧烈和密集！能天使双腿一软，几乎要跪倒在地，全靠抓着门板的手支撑着。花穴深处传来一阵阵无法抑制的痉挛，内壁疯狂地绞紧那作恶的跳蛋，试图抵抗却又像是在贪婪地索取更多刺激。快感如同潮水般一波波涌来，冲刷着她的理智。她拼命摇头，泪水大颗大颗地滚落，浸湿了口罩的边缘。

“好了，我们该出去了，不然大家该找我们了。” 雷缪安欣赏着妹妹濒临崩溃的淫态，终于“大发慈悲”地将震动调回了最低档，但那持续的、恼人的酥麻感依然存在。她帮能天使拉下裙子，整理了一下凌乱的衣襟，又用纸巾擦了擦她口罩边缘的口水痕迹，让外表看起来尽量正常——除了那双水润迷离、红得像兔子一样的眼睛，以及微微颤抖的身体。

“记住，要‘乖’哦。” 雷缪安晃了晃手中的遥控器，然后亲昵地挽住了能天使僵硬的手臂，半强迫地将她带出了洗手间隔间。

重新回到喧嚣的购物广场，能天使感觉每一步都像踩在棉花上。体内那持续不断的、恼人的震动感无时无刻不在提醒着她自己的处境。周围是熙熙攘攘的人群，孩子们的笑闹声，促销员的叫卖声，购物车的轮子滚动声…一切都那么正常，只有她知道，自己裙子下面藏着多么羞耻的秘密，嘴里塞着口球，而遥控器就在身边最亲近的姐姐手中。

“小乐，你没事吧？去了好久。” 德克萨斯推着购物车，敏锐地察觉到能天使的异常。她的脸色异常红润（被口罩遮住下半张脸，但露出的皮肤和耳朵都泛着不正常的红晕），眼神躲闪，身体似乎有些发软，紧紧靠着雷缪安。

“唔…嗯…” 能天使想说话，但口球的存在让她只能发出含糊的鼻音。她惊恐地看向雷缪安。

“哎呀，我们小乐刚才在洗手间有点不舒服，可能是着凉了，喉咙突然好痛，都说不出话了呢。” 雷缪安立刻接话，语气充满了“姐姐”的关切，她甚至还伸手探了探能天使的额头（触手一片滚烫），“看，还有点低烧呢。所以给她戴了个口罩，免得传染大家。” 她完美地解释了口罩和“失声”。

“喉咙痛？” 可颂凑过来，一脸担忧，“要不要去买点药？”

“唔唔！” 能天使赶紧摇头，动作幅度很大，生怕她们真去买药然后要求她摘下口罩。她指了指自己的喉咙，又摆了摆手，示意不用。

就在这时，雷缪安藏在口袋里的手指，悄悄按下了遥控器上的强力脉冲模式！

嗡——！嗡——！嗡——！

一阵强烈而短促的、如同电击般的脉冲震动猛地从花穴深处炸开！这突如其来的、远超之前的剧烈刺激，让能天使完全措手不及！

“咿呀——！！！” 一声短促、尖锐、完全变调的惊叫，硬生生冲破了口球的阻碍，从口罩下闷闷地、却异常清晰地泄露出来！能天使的身体如同被高压电击中般猛地向上弹跳了一下，双腿瞬间夹紧，整个人几乎要瘫软下去，全靠雷缪安“及时”地用力搂住她的腰才没摔倒。包裹着黑色过膝袜的玉足在地上无意识地摩擦着，金色的眼眸瞬间翻白，又迅速恢复，充满了极致的羞耻和崩溃。她能感觉到一股温热的液体似乎不受控制地从花穴深处涌出，浸湿了内裤（如果她还穿着的话）和跳蛋。

“小乐？！” “能天使？！” 德克萨斯、可颂和空都被这声怪叫吓了一跳，纷纷围了过来。

“啊，没事没事！” 雷缪安反应极快，一边“支撑”着浑身发软、剧烈颤抖的妹妹，一边用略带责备的语气说，“你看你，喉咙痛还非要叫！吓到大家了吧？” 她轻轻拍着能天使的背，仿佛在安抚一个任性的孩子，但只有能天使能感觉到她手指传来的、带着警告意味的力道。

“唔…唔唔…” 能天使把脸深深埋在雷缪安的肩窝，发出委屈又羞耻至极的呜咽，身体还在因为刚才那阵强烈的脉冲而微微抽搐。她能感觉到周围人投来的好奇目光，甚至旁边一个推着婴儿车的丰蹄族少妇，在听到她那声怪叫后，脸上露出了然又带着一丝暧昧的笑容，目光扫过她紧夹的双腿，丰蹄族少妇自己宽松的裙摆下，似乎也微妙地并拢了一下。

更让她无地自容的是，不远处一个正在挑选饮料的、身材高大的瓦伊凡男性，在听到声音后也看了过来。他的目光在能天使被口罩遮住的脸和被雷缪安紧搂的腰肢上停留了片刻，瓦伊凡男性那身结实的工装裤前方，似乎也隐约可见一点不自然的隆起轮廓。他有些不自在地移开了目光，拿起一瓶冰水贴在了自己发烫的脸上。

“真的…只是喉咙痛？” 德克萨斯微微皱眉，冰蓝色的眼眸锐利地扫过能天使异常的反应和雷缪安过于“自然”的表演。她总觉得哪里不对劲。

“当然啦！” 雷缪安笑容灿烂，带着不容置疑的肯定，“我们小乐就是容易一惊一乍的，对吧？” 她低头，在能天使耳边用只有两人能听到的声音低语，同时手指在口袋里再次轻轻拨动遥控器，这次是持续的中档震动，“再发出奇怪的声音，姐姐就让你在这里…彻底‘舒服’到站不起来哦。”

“唔…！” 能天使的身体又是一颤，体内的跳蛋再次开始规律地嗡鸣，持续的酥麻感让她双腿发软，只能更紧地依靠着雷缪安，拼命点头，表示自己会“安静”。她甚至不敢看德克萨斯的眼睛，金色的眼眸里充满了哀求，希望她们不要再追问。

“好了好了，我们继续逛吧，小乐不舒服就靠着我。” 雷缪安成功地将话题带过，半搂半抱着能天使，继续推着购物车前进。

能天使如同一个精致的提线木偶，被雷缪安“温柔”地掌控着，行走在喧嚣的人群中。体内的跳蛋在姐姐的操控下，时而低频持续，带来恼人的空虚瘙痒；时而突然一个强力脉冲，让她浑身剧颤，几乎要尖叫出声，又只能死死咬住口球，将呻吟和呜咽憋回喉咙深处，化作口罩下压抑的闷哼和身体无法控制的细微痉挛。每一次异样的反应，都引来周围或好奇或暧昧的目光，让她羞耻得恨不得原地消失。

经过生鲜区的巨大冰柜时，冰冷的寒气扑面而来。能天使裸露在短裙下的双腿感到一阵寒意，但体内的跳蛋却在雷缪安恶意的操控下，骤然开启了最高频率的疯狂震动！

“嗯嗯嗯——！！！” 极致的冰冷与体内爆炸般的高热快感形成了地狱般的反差！能天使猛地蜷缩起身体，双腿死死夹紧，脚趾在靴子里用力蜷缩，包裹着黑色过膝袜的小腿肚绷紧颤抖。她整个人如同被煮熟的虾子般弓起，额头抵在冰冷的冰柜玻璃上，发出濒死般的、沉闷的呜咽。一股更加强烈的暖流从花穴深处涌出，她能感觉到跳蛋似乎都被这股热流冲击得微微滑动。

“小乐？很冷吗？” 空关切地问。

雷缪安“体贴”地将她搂得更紧，用自己的风衣裹住她，同时手指在口袋里，终于将震动调回了最低档。“是啊，这孩子怕冷又怕热，真难伺候。” 她无奈地笑着，仿佛在抱怨一个不懂事的妹妹。

能天使瘫软在雷缪安怀里，大口喘着气，隔着口罩贪婪地呼吸着冰冷的空气，试图冷却体内几乎要将她焚烧殆尽的火焰和羞耻。金色的眼眸失神地望着冰柜里排列整齐的、冰冷的三文鱼，泪水无声地滑落，在口罩上晕开更深的水痕。

公共场合的喧嚣成了她羞耻的放大器，每一次震动都像在聚光灯下被公开处刑。而身边“温柔”的姐姐，和远处那个可能随时会出现的菲亚梅塔，则是将她牢牢钉在这欲望与羞耻十字架上的行刑者。这场“购物”，对她而言，已然变成了一场漫长而残酷的公开调教。而企鹅物流同伴们关切的目光，此刻却成了最让她心碎的负担。德克萨斯那冰蓝色眼眸中一闪而过的疑虑，可颂大大咧咧却真诚的担忧，空温柔递过来的询问眼神…这些平日里让她感到温暖和归属的注视，此刻却像烧红的烙铁，烫得她灵魂都在颤抖。她们越是关心，那份被欺骗、被玩弄、被最亲近的姐姐和菲亚梅塔联手推入如此淫靡深渊的羞耻感就越是浓烈，几乎要将她吞噬。

“唔…” 她只能发出含糊的鼻音，将脸更深地埋进雷缪安的肩窝，仿佛这样就能隔绝那些让她无地自容的目光。雷缪安身上那熟悉的、带着淡淡香水味的温暖气息，此刻却像一张无形的网，将她牢牢困住。她能感觉到姐姐胸腔里传来的、带着一丝恶趣味满足感的轻微震动——那是无声的嘲笑。

“好了，我们去看看日用品区吧？小乐可能需要点润喉糖。” 雷缪安“体贴”地提议，巧妙地引导着队伍的方向，同时，她藏在口袋里的手指，再次拨动了遥控器。

嗡——嗡嗡嗡——

跳蛋的震动模式切换成了不规则的、如同小爪子在心尖上挠痒般的间歇性高频震动！每一次突如其来的、短促而剧烈的嗡鸣，都让能天使的身体不受控制地产生一阵细微的痉挛。她必须用尽全力咬住口球，才能将那几乎要冲口而出的惊喘和呻吟死死堵在喉咙里。每一次震动袭来，她的腰肢都会猛地一僵，包裹在黑色过膝袜中的小腿肚绷紧，白丝玉足在靴子里用力蜷缩，脚趾死死抠着鞋底。口罩下，口水因为持续的紧张和口球的刺激而不断分泌，沿着下巴的弧度滑落，在雷缪安的风衣肩头留下深色的、羞耻的印记。

“小乐，你…真的没事吗？抖得好厉害。” 可颂忍不住再次问道，她总觉得能天使的状态很奇怪，像一只受惊过度的小动物。

“唔唔！” 能天使拼命摇头，动作因为体内的震动而显得格外僵硬。她抬起泪眼朦胧的金色眼眸，看向可颂，里面充满了无法言说的哀求——求你别问了…求你们…别看我…

就在这时，队伍经过了一个摆满各种毛绒玩具的促销展台。一个扎着羊角辫的札拉克族小女孩，正踮着脚想要够到最上面一层货架上一个巨大的、毛茸茸的粉色兔子玩偶。小女孩的母亲似乎正在旁边挑选其他东西，没有注意到。

“啊，小心！” 空轻呼一声。

小女孩努力踮起的脚尖一滑，身体向后倒去！就在她即将摔倒的瞬间，一道红黑相间的身影如同条件反射般冲了出去！

是能天使！

即使身体被情欲和羞耻折磨得几乎散架，即使双腿因为持续的震动而发软，但那份刻在骨子里的、属于企鹅物流信使的敏捷和善良，让她在千钧一发之际，本能地挣脱了雷缪安的手臂，扑过去稳稳地扶住了那个小女孩！

“哇！谢谢姐姐！” 小女孩惊魂未定，紧紧抱住了能天使的腿，仰起小脸，大眼睛里满是感激。

然而，这瞬间的爆发和剧烈的动作，对能天使而言却是灾难性的！

她体内的跳蛋，因为身体剧烈的运动，被挤压、摩擦到了最深处最敏感的那一点！而雷缪安在她冲出去的瞬间，眼神一冷，毫不犹豫地按下了遥控器上那个代表最高强度、持续震动的按钮！

嗡——————————！！！！

前所未有的、如同高压电流般的疯狂震动，毫无缓冲地、狠狠地在她花穴最娇嫩的核心炸开！那感觉已经不是快感，而是近乎痛苦的、摧毁理智的极致刺激！

“呃啊啊——！！！” 一声完全无法压抑的、带着极致痛苦和崩溃的、被口球扭曲变调的尖叫，硬生生从口罩下爆发出来！能天使的身体如同被无形的巨锤击中，猛地向后弓起，双腿瞬间失去了所有力气，抱着小女孩一起，重重地跌坐在冰冷光滑的地板上！

“小乐！” “能天使！” 企鹅物流的同伴们惊呼着围了上来。

能天使瘫坐在地，浑身剧烈地颤抖着，如同秋风中的落叶。她紧紧抱着怀里懵懂的小女孩，仿佛那是唯一的浮木。金色的眼眸彻底失神，瞳孔涣散，大颗大颗的泪水如同断线的珍珠，疯狂地从眼眶中滚落，迅速浸透了口罩的上半部分，形成一片深色的、绝望的水渍。 她的身体内部，那疯狂的震动还在持续，花穴深处传来一阵阵无法控制的、剧烈的痉挛和抽搐，一股股温热的液体不受控制地汹涌而出，浸湿了她的裙摆，甚至在地板上洇开一小片深色的、带着暧昧气息的水痕。她能感觉到那失控的潮吹，羞耻感如同冰冷的潮水将她彻底淹没。

“姐姐！姐姐你怎么了？” 小女孩被能天使剧烈的反应吓到了，带着哭腔摇晃着她。

“小乐！摔到哪里了？哪里疼？” 可颂和空焦急地蹲下身查看。

德克萨斯冰蓝色的眼眸锐利如刀，她先是扫了一眼能天使身下那片可疑的水痕，然后目光猛地射向站在一旁、脸上带着“担忧”却眼神冰冷的雷缪安，最后落在了雷缪安那只一直插在风衣口袋里的手上。

“她…她好像…失禁了？” 旁边一个路过的黎博利族中年妇女，捂着嘴，小声地对同伴说道，眼神中带着毫不掩饰的鄙夷和猎奇。

“这么大人了…在公共场合…啧啧…” 同伴附和着，目光在能天使湿透的裙摆和失魂落魄的脸上来回扫视。

这些窃窃私语如同针扎般刺入能天使的耳中。她恨不得立刻死去！身体还在高潮的余韵和持续的震动中剧烈颤抖、抽搐，花穴深处那疯狂的嗡鸣如同恶魔的低语，提醒着她此刻有多么不堪。她死死咬住口球，喉咙里发出绝望的、如同小兽濒死般的呜咽，艳红的短发凌乱地贴在汗湿的额角和脸颊，整个人狼狈到了极点。

雷缪安终于“反应”过来，她快步上前，脸上带着恰到好处的焦急和心疼。“哎呀！小乐！是不是刚才跑太急，又着凉了肚子不舒服？” 她一边说着，一边用力将能天使从地上半抱半拽地拉起来，用自己的身体巧妙地挡住了她身下那片湿痕，同时迅速从旁边的货架上扯下一条厚厚的、印着卡通图案的浴巾，盖在了能天使的腰臀间。

“对不起对不起！我家妹妹身体不太舒服，给大家添麻烦了！” 雷缪安对着周围投来异样目光的人群连连道歉，语气充满了“姐姐”的无奈和歉意。她紧紧搂着几乎完全瘫软、全靠她支撑才能站立的能天使，感觉到妹妹的身体还在因为体内持续的震动和巨大的羞耻而剧烈颤抖。

“唔…唔唔…” 能天使把脸深深埋在雷缪安胸前，发出破碎的呜咽。她能感觉到姐姐的手，在浴巾的遮掩下，正用力地、带着警告意味地掐着她腰侧的软肉。而另一只手，在口袋里，终于…终于将那个该死的跳蛋关掉了！

体内那疯狂的嗡鸣骤然停止，但花穴深处被过度刺激后的酸胀、麻木和依然残留的、令人心悸的余韵，以及那无法忽视的湿滑粘腻感，依然清晰地存在着。更让她绝望的是，那失控的潮吹和身下湿透的感觉，在众目睽睽之下，被姐姐用“肚子不舒服”这种拙劣却有效的借口掩盖了过去。


“看来小乐真的很难受，我们先带她回去吧？” 德克萨斯的声音带着不容置疑的决断，目光锐利地扫过雷缪安和几乎虚脱的能天使。

“好…好的！麻烦你们了！” 雷缪安立刻点头，脸上堆满“感激”，“我扶着她，我们赶紧去停车场。不过在那之前…” 她顿了顿，看向德克萨斯，“能麻烦你们先去把购物车推到服务台寄存一下吗？小乐现在这样子，可能…需要再去趟洗手间稍微清理一下。” 她意有所指地瞥了一眼盖在能天使腰臀间、已经有些洇湿的浴巾。

德克萨斯沉默地看了雷缪安几秒，冰蓝色的眼眸深处闪过一丝疑虑，但最终还是点了点头。“可颂，空，跟我来。” 她利落地转身，推着购物车离开。

人群的注意力随着企鹅物流其他人的离开而稍稍分散。雷缪安立刻半抱半拖着浑身瘫软、仍在微微抽搐的能天使，快步走向最近的、相对僻静的洗手间方向。这一次，她没有去之前那个B区，而是拐进了更靠近出口的A区洗手间。

刚进入洗手间走廊，一个冰冷的身影就从阴影中走了出来——正是菲亚梅塔。她似乎早已等候在此。

“啧，玩得有点过火了，缪安。” 菲亚梅塔看着能天使狼狈不堪、泪痕交错、眼神涣散的样子，语气淡漠，听不出是责备还是陈述。

“哎呀，这不是效果很好嘛？” 雷缪安不以为意地笑了笑，将几乎站不稳的能天使推向菲亚梅塔，“交给你善后了，我去外面看看情况。” 她将那条湿漉漉的浴巾塞给菲亚梅塔，自己则转身走出了洗手间，守在走廊入口处。

菲亚梅塔面无表情地接住能天使，像拎着一件没有生命的物品，将她拖进了最里面的一个无障碍隔间，反锁上门。狭小的空间里，只剩下她们两人，以及能天使压抑的、破碎的抽泣声。

“安静。” 菲亚梅塔命令道，声音不高，却带着冻结灵魂的寒意。能天使的呜咽瞬间被掐断，只剩下身体因为恐惧和残余快感而无法控制的细微颤抖。

菲亚梅塔将能天使按坐在冰冷的马桶盖上，然后蹲下身，动作没有丝毫温柔，直接掀开了那条已经湿透、散发着暧昧气息的浴巾，露出了能天使同样湿透、紧贴在腿间的红黑短裙。

“自己撩起来。” 菲亚梅塔冷冷道。

能天使屈辱地颤抖着，用尽最后一丝力气，颤抖的手指抓住自己湿冷的裙摆，一点点向上撩起，露出了白皙却布满细密汗珠的大腿，以及那完全被爱液和潮吹液体浸透、变成深色、紧贴在腿根和私处的纯白棉质内裤。内裤中央，那粉嫩饱满的阴阜轮廓清晰可见，布料被浸得半透明，隐约能看到深埋其中的跳蛋拉线，以及湿滑黏腻的爱液正顺着大腿内侧缓缓滑落的痕迹。

菲亚梅塔戴上一次性医用手套，动作精准而冷酷。她伸出两根手指，毫不怜惜地勾住能天使内裤的边缘，用力向下一扯！

“唔…！” 能天使发出一声痛楚的闷哼。湿透的内裤被粗暴地褪到膝盖处，将她最羞耻的秘密彻底暴露在冰冷的空气和菲亚梅塔审视的目光下。

粉嫩的花穴此刻一片狼藉。因为长时间的剧烈震动和刺激，娇嫩的阴唇呈现出不正常的充血肿胀，如同被狠狠蹂躏过的花瓣，微微外翻着，穴口更是红肿不堪，正不受控制地微微开合，一股股混合着爱液和潮吹液体的、半透明的粘稠液体，正从红肿的穴口和跳蛋拉线的缝隙间，如同失禁般汩汩地向外溢出，顺着光洁无毛的耻丘和颤抖的大腿内侧不断流淌，在冰冷的瓷砖地面上汇聚成一小滩晶莹而淫靡的水洼。空气中弥漫开一股浓郁的、属于雌性动情和体液特有的、甜腻又带着一丝腥膻的气息。

菲亚梅塔的目光毫无波澜，仿佛在检查一件物品。她伸出带着手套的手指，精准地捏住了那根从红肿穴口探出的、同样沾满滑腻液体的跳蛋拉线。

“放松。” 她的命令毫无感情。

能天使怎么可能放松？巨大的羞耻和异物即将被取出的恐惧让她花穴内壁条件反射般地剧烈绞紧！

“呃啊——！” 菲亚梅塔却毫不理会她的反应，手指猛地用力向外一拽！

噗嗤…

伴随着一声清晰的、粘稠液体被挤压排出的淫靡水声，那枚被爱液浸透、闪烁着湿滑冷光的银灰色跳蛋，被菲亚梅塔硬生生地从能天使那紧窒红肿、仍在痉挛收缩的花穴深处拔了出来！

“呜——！！！” 能天使的身体猛地向上弹起，如同离水的鱼，发出一声被口球扭曲的、极致痛苦的悲鸣。花穴内部被强行撑开又瞬间空虚的剧痛和强烈的异物剥离感，让她眼前发黑，几乎晕厥。跳蛋被拔出后，红肿的穴口如同失去塞子的小口，一股更加汹涌的、混合着半透明爱液和些许乳白色浊液的温热液体，如同开闸般猛地喷涌而出，溅落在菲亚梅塔的手套和地面上，发出“啪嗒”的轻响。

菲亚梅塔面无表情地将那枚沾满滑腻体液、还在微微震动的跳蛋扔进旁边的垃圾桶。然后，她的手指移向了能天使脸上那个印着猫爪印的口罩。

她解开口罩的带子，将它摘下。口罩的内侧已经完全被能天使的口水和泪水浸透，湿漉漉、沉甸甸的。接着，她解开了能天使脑后口球的皮带扣。

“张嘴。” 菲亚梅塔命令。

能天使麻木地张开嘴。长时间的扩张和口水浸泡，让她的口腔内部一片狼藉。粉色的口球被唾液浸得湿滑发亮，上面布满了能天使绝望咬合留下的齿痕。柔软的舌尖被挤压在口球下方，嘴角和下巴上全是干涸和新鲜的口水痕迹，亮晶晶的一片，喉咙深处因为持续的呜咽和干呕感而微微发红。

菲亚梅塔捏住口球中央的圆球部分，用力向外一拉！

“呕…咳咳咳…” 口球被粗暴取出，带出一大股无法控制的清亮唾液，顺着能天使的嘴角流淌下来。能天使立刻剧烈地咳嗽起来，小巧的喉咙痛苦地收缩着，长时间被异物撑开的口腔肌肉传来阵阵酸麻和不适感，粉嫩的舌头下意识地伸出来，舔舐着干涩疼痛的嘴唇和嘴角。

菲亚梅塔将口球也扔进垃圾桶，然后拿出湿巾，像擦拭一件脏污的物品般，粗暴地擦掉能天使下巴、嘴角、大腿内侧的体液痕迹，又用那条湿浴巾胡乱地擦了擦她腿间和身下。整个过程没有任何温情，只有冰冷的效率和一种令人窒息的、如同处理垃圾般的漠然。

“穿上。” 菲亚梅塔将能天使湿透的内裤和裙子拉回原位，然后将一件菲亚梅塔自己带来的、宽大的黑色风衣裹在能天使身上，遮住了她湿透的裙摆和狼狈。

“记住今天的教训。” 菲亚梅塔站起身，居高临下地看着瘫坐在马桶盖上、眼神空洞、如同被玩坏的人偶般的能天使，金色的眼眸里没有丝毫怜悯，“下次，会更‘有趣’。”

说完，她打开隔间门，像拎起一件行李般，将能天使拽了起来。

走出购物广场大门，傍晚微凉的风吹在能天使滚烫的脸上，却带不来丝毫清凉。她看到菲亚梅塔那辆黑色的高级轿车，如同蛰伏的猛兽般，静静地停在路边。车窗降下，菲亚梅塔那张淡漠精致的脸露了出来，金色的眼眸扫过能天使被宽大风衣包裹、却依然掩饰不住虚弱和狼狈的样子，嘴角勾起一抹几不可察的、冰冷的弧度。

能天使的心沉入了无底的冰窟。这场“购物”结束了，但她的噩梦，似乎才刚刚开始……


`,Wd=Object.freeze(Object.defineProperty({__proto__:null,default:qd},Symbol.toStringTag,{value:"Module"})),Yd=`---
order: 4
---
# B.N.4 坏掉的小苹果~（乐徳）


距离那场噩梦般的“购物”已经过去了一周。能天使将自己关在房间里，企鹅物流的工作也请了假。她试图用游戏、音乐、甚至蒙头大睡来淹没记忆，但身体深处残留的异样感，皮肤上仿佛还烙印着雷缪安“温柔”的触碰和菲亚梅塔冰冷的擦拭，以及那份被公开处刑般的羞耻，如同跗骨之蛆，啃噬着她的神经。更深的恐惧来自菲亚梅塔持续的掌控。那个冷酷的萨科塔天使，通过一个加密的通讯器，如同幽灵般下达着命令。深夜对镜自渎的录像要求，特定暴露衣物的穿着指令……而最让她身心都备受煎熬的，是那个被重新植入的“玩具”——一枚更小、更隐蔽，却被菲亚梅塔宣称能“直达子宫深处”的微型跳蛋，以及配套的、同样深入的小巧口球。它们成了无形的枷锁，随时提醒她，她的身体不再属于自己。

傍晚，德克萨斯敲响了能天使的房门。里面一片死寂。
“能天使？” 德克萨斯的声音透过门板传来，比平时低沉柔和许多，带着一丝不易察觉的担忧，“我知道你在里面。出来透透气，或者…至少让我看看你。” 冰蓝色的眼眸里压抑着关心。购物中心事件后，能天使的状态让她极度不安。雷缪安含糊的解释和菲亚梅塔的突然介入都透着诡异。德克萨斯敏锐地嗅到了危险的气息，对象是她重要的同伴。

门内依旧没有回应。德克萨斯叹了口气，转身离开，但担忧并未消散，反而像藤蔓般缠绕收紧。她决定换种方式。她知道能天使心烦意乱时，偶尔会去龙门近郊一处废弃的铁路高架桥下，那里视野开阔，人迹罕至，只有风声和野草的低语。

夜幕低垂，弦月如钩。德克萨斯驱车来到那片荒芜之地。晚风带着野草的青涩和泥土的气息，吹拂着她银灰色的短发。她熄了火，放轻脚步，沿着生锈的铁轨路基向前走去。果然，在不远处一个可以俯瞰下方荒原的缓坡上，她看到了那个蜷缩成一团的红色身影。

能天使抱着膝盖坐在那里，艳红的短发被风吹得有些凌乱，身上只穿着简单的白色T恤和牛仔短裤，露出白皙纤细的手臂和匀称修长的双腿。月光勾勒出她单薄的背影，透着一股令人心疼的脆弱。她没有回头，似乎沉浸在自己的世界里，又或许，是体内那个无声的“玩具”在折磨着她。

德克萨斯的心揪了一下。她放慢脚步，走到能天使身后几步远的地方停下。
“能天使。” 她的声音很轻，像怕惊扰了月光下的小兽。
能天使的身体明显一僵。
德克萨斯脱下自己常穿的黑色皮质外套，带着她的体温，轻轻披在了能天使微微颤抖的肩膀上。“这里风大。” 她低语，然后在能天使身边坐下，保持着一点距离。

沉默在两人之间蔓延，只有风声和远处隐约的虫鸣。能天使将脸埋在膝盖里，肩膀微微耸动。
“告诉我，那天到底发生了什么？” 德克萨斯终于开口，声音带着前所未有的温柔，不再是命令，而是请求，“雷缪安…还有菲亚梅塔…她们对你做了什么？” 她冰蓝色的眼眸在月色下显得格外深邃，专注地看着能天使的侧脸。

能天使的身体颤抖得更厉害了。德克萨斯的温柔像一把钥匙，瞬间撬开了她强行筑起的心防。委屈、恐惧、被背叛的痛苦、无法言说的羞耻……所有压抑的情绪汹涌而出。
“德克萨斯…呜…” 她猛地抬起头，金色的眼眸里蓄满了泪水，在月光下闪烁着破碎的光。嘴唇颤抖着，想要倾诉，想要扑进德克萨斯怀里。然而，就在她张嘴的瞬间——

嗡——！
一声极其细微，却如同惊雷般在她身体深处炸开的震动，让能天使所有的动作和话语都凝固了！瞳孔骤然收缩，脸上血色尽褪，只剩下极致的惊恐！

菲亚梅塔的命令，通过那个植入耳蜗的微型通讯器，冰冷地响起：“闭嘴，小狗。在‘主人’允许你说话之前，一个字都不准说。现在，感受它。”

是体内的跳蛋！而且…不是普通的震动！那震动并非来自花穴，而是更深、更核心的地方！仿佛有一枚烧红的小烙铁，在她最娇嫩、最神圣的子宫内壁上粗暴地翻滚、碾压！每一次滚动都带着灼烧般的剧痛和一种难以言喻的、直击灵魂深处的酸胀感！

“呃啊…！” 能天使发出一声短促的、被痛苦扭曲的呜咽，身体猛地弓起，双手死死按住了自己的小腹！纤细的手指因为用力而指节发白。冷汗瞬间浸湿了她的额发和后背，白皙的肌肤在月光下泛起一层冰冷的湿意。她大口喘息着，每一次呼吸都牵扯着下腹那可怕的、被侵犯般的痛楚。

“能天使！” 德克萨斯被她的剧烈反应吓了一跳，立刻靠近，冰蓝色的眼眸里满是惊疑和关切，“你怎么了？肚子疼？是那天着凉还没好吗？” 她下意识地伸出手。
“别…别碰我！” 能天使如同受惊的兔子般猛地向后缩去，声音带着哭腔和极度的恐惧。她死死咬着下唇，几乎要咬出血来，粉嫩的唇瓣被牙齿蹂躏得失去了血色。

嗡——嗡嗡嗡——！
震动陡然加剧！模式切换了！高频的、无规则的震颤！仿佛无数根细小的钢针，在她最脆弱的子宫腔壁上疯狂地穿刺、搅动！超越纯粹的疼痛，夹杂着一种被强行唤醒的、令人作呕的生理快感！花穴深处不受控制地开始痉挛、收缩，带来更强烈的空虚和更尖锐的刺激！

“啊…啊…哈啊…” 能天使再也无法抑制，破碎的呻吟从齿缝间溢出。她蜷缩着身体，在草地上痛苦地翻滚，修长的双腿紧紧并拢、摩擦。泪水疯狂地滚落。
“能天使！看着我！” 德克萨斯的心彻底乱了。这绝不是普通的腹痛！她不顾能天使的抗拒，强硬地抓住她的手腕，冰凉的触感让能天使浑身一颤。
“告诉我！到底怎么回事！” 德克萨斯的声音带着急切和命令，但更多的是无措。

能天使绝望地摇头，金色的眼眸里满是哀求。体内的震动越来越狂乱，子宫仿佛要被撕裂！一股强烈的、无法抗拒的尿意和失控感，如同海啸般席卷而来！
“不…不行…德克萨斯…走…快走…” 能天使用尽最后的力气，挤出破碎的哀求。

然而——
嗡——————————！！！！！！ 最高强度的、持续不断的恐怖震动，毫无预兆地在她子宫最深处轰然爆发！

“啊啊啊啊啊啊——————！！！！！！” 一声凄厉到变调的尖叫划破夜空！能天使的身体如同被高压电击中，猛地向上反弓！紧接着——
噗嗤——哗啦——！
一股滚烫的、汹涌的、完全失控的清亮尿液，混合着大量因极致高潮而喷涌出的粘稠滑腻的爱液，如同开闸的洪水般，从她剧烈痉挛、无法闭合的花穴口猛烈喷射而出！尿液呈抛物线，在月光下划出晶莹的水线，大部分浇在了她自己的大腿内侧和牛仔短裤上，瞬间将浅色布料染成深黑，温热的液体顺着光滑的肌肤流淌下来。还有一部分，溅落在了离她极近的德克萨斯的手背和小臂上！

温热的、带着一丝奇异气息的液体触感，让德克萨斯如同被烫到般猛地缩回了手，冰蓝色的眼眸里充满了极致的震惊和难以置信！她看着能天使身下迅速蔓延开的大片深色痕迹，闻着空气中骤然弥漫开的复杂气息，大脑一片空白。

眼前的景象极具冲击力：平日里活力四射的能天使，此刻像一具被玩坏的人偶瘫软在月光下，艳红的短发凌乱，金色的眼眸空洞失神，粉嫩的嘴唇无力微张。白皙的肌肤泛着情动的潮红。被尿液和爱液彻底浸透的牛仔短裤紧贴着她饱满的耻丘和大腿根，勾勒出湿漉漉、泥泞不堪的诱人轮廓。修长匀称的双腿微微分开，还在细微抽搐，腿间狼藉的湿痕在清冷的月光下散发出一种惊心动魄的、堕落而脆弱的淫靡美感。

一股从未有过的、极其陌生的热流，猛地冲上了德克萨斯的脊背，直冲大脑！那不仅仅是震惊或怜悯，而是一种原始的、燥热的、极具侵略性的欲望！能天使此刻脆弱不堪又无比诱人的模样，空气中弥漫的情欲气息，手背上残留的温热湿滑触感……所有的一切，都像火星溅入了干柴，瞬间点燃了德克萨斯内心深处从未被如此唤醒过的炽热熔岩！

她冰蓝色的眼眸，如同极地冰川下燃烧的火焰，瞬间变得幽深而危险。
“能…天使…” 德克萨斯的声音沙哑得不像她自己，带着被欲望灼烧的颗粒感。她没有再后退，反而缓缓地、带着一种捕猎者般的压迫感，再次靠近了瘫软在地的能天使。

能天使似乎恢复了一丝意识，感受到德克萨斯的靠近和眼神中那令人心悸的灼热，身体恐惧地瑟缩了一下：“呜…德克萨斯…别…别看…脏…” 她试图并拢双腿，但身体酸软无力，只能徒劳地扭动了一下腰肢，反而让腿间湿透的布料摩擦过敏感红肿的花蒂，带来一阵让她浑身颤栗的微弱电流。

这个无意识的动作，彻底摧毁了德克萨斯最后一丝理智的防线。
“不脏…” 德克萨斯低语，声音低沉而充满磁性。她不再犹豫，猛地俯下身！

没有预兆，没有询问。德克萨斯一手撑在能天使耳侧的草地上，另一只手带着不容抗拒的力道，扣住了能天使的下巴。然后，她低下头，冰凉的、带着一丝薄荷气息的唇，带着一种近乎掠夺的强势，狠狠地印上了能天使因惊愕而微张的、湿润柔软的唇瓣！

“唔…？！” 能天使的呜咽被彻底堵了回去，金色的眼眸瞬间瞪大。德克萨斯的吻，带着滚烫的、近乎蛮横的占有欲，像一团烈火，瞬间点燃了能天使本就敏感至极的神经！

德克萨斯的舌尖轻易地撬开了能天使毫无防备的牙关，长驱直入！带着灼人的温度，强势地扫过温热的口腔上颚，带来一阵让能天使头皮发麻的痒意和战栗。接着，那灵活而有力的舌开始细致地描绘整齐的贝齿内壁。很快，它找到了能天使因惊惶而有些僵硬的、小巧粉嫩的舌尖，立刻霸道地缠绕上去！紧密的、湿滑的、带着黏腻水声的纠缠。德克萨斯的舌如同藤蔓，吮吸着，舔舐着，时而轻柔地摩擦，时而用力地卷吸。

啧啧…啾…细微而淫靡的水声在寂静的月夜下格外清晰，伴随着两人逐渐粗重滚烫的呼吸。能天使起初僵硬的身体，在德克萨斯这充满侵略性却又带着奇异安抚力量的深吻下，竟不可思议地渐渐软了下来。她无意识地开始生涩地回应，小巧的舌尖怯生生地触碰着德克萨斯强势的舌。这微弱的回应让德克萨斯喉咙深处发出一声满足的、低沉的喟叹。

德克萨斯扣着能天使下巴的手缓缓松开，转而插入了她汗湿的、艳红的短发中，指尖温柔又带着占有欲地摩挲着她的头皮，将她更紧地压向自己。另一只撑在地上的手，不知何时已经移到了能天使的腰侧，隔着湿透的T恤，滚烫的掌心紧紧贴着她纤细而敏感的腰线。

这个吻漫长而深入。直到两人都因为缺氧而不得不分开。
“哈…哈啊…” 能天使大口喘息着，金色的眼眸水光潋滟，蒙着一层浓重的情欲迷雾，粉嫩的嘴唇被吻得红肿湿润。她看着上方德克萨斯那张同样染上情欲红晕的脸庞，那双冰蓝色的眼眸里燃烧的火焰几乎要将她吞噬。一股强烈的渴望在她身体深处炸开。

德克萨斯也同样喘息着，她的目光炽热地扫过能天使红肿的唇、迷离的眼，最终落在那片被液体浸透的牛仔短裤上。
“想要你…” 德克萨斯的声音沙哑得如同砂纸摩擦。

能天使没有回答，只是用那双湿漉漉的、盛满渴望的金色眼眸望着她，然后，如同献祭般，主动抬起了纤细的手臂，白皙的手指颤抖着，却无比坚定地勾住了德克萨斯的脖子，将她再次拉向自己。

这一次，是能天使主动吻了上去！

得到了无声的许可，德克萨斯眼中最后一丝克制彻底消失。
德克萨斯那只原本按在能天使腰侧的手，灵活而急切地滑进了湿透的T恤下摆！滚烫的指尖直接触碰到汗湿滚烫、细腻光滑的腰腹肌肤！能天使的身体猛地一颤，发出一声甜腻的呻吟。德克萨斯的手掌带着薄茧，急切地向上探索，很快便握住了隔着薄薄运动内衣、依旧能感受到其饱满弹软的浑圆酥胸！

“嗯啊…” 能天使的呻吟陡然拔高，身体像虾米一样向上弓起。德克萨斯隔着布料用力地揉捏着那团绵软而富有弹性的乳肉，感受着它在自己掌中变换着诱人的形状，乳尖早已硬挺，隔着布料也能清晰地感觉到那小小的、倔强的凸起。

与此同时，德克萨斯原本插在能天使发间的手也缓缓下移，带着一种不容置疑的坚定，探向了那片早已泥泞不堪的欲望沼泽——能天使的腿间！指尖若有似无地划过敏感的大腿内侧肌肤，引起她一阵阵剧烈的颤抖。然后，那只带着薄茧、却异常灵活的手指，坚定地覆盖上了牛仔短裤上那片最深的、最湿热的濡湿区域！

“啊！德克萨斯！” 能天使尖叫出声，身体剧烈地扭动起来。她能清晰地感觉到滚烫的掌心隔着湿透的布料，用力地按压在她高高隆起的、肿胀不堪的阴阜上！粗糙的布料摩擦着极度敏感的嫩肉，带来强烈的快感！更让她崩溃的是，德克萨斯的手指开始隔着布料，精准地找到那颗早已硬如小石子的、充血勃起的花蒂，用指腹开始画圈按压！

“呃啊啊啊——！那里…不行…太…太刺激了…哈啊…” 能天使的理智瞬间被抛到了九霄云外。她修长的双腿下意识地想要夹紧，却被德克萨斯强硬地用手肘顶开。

“湿透了…” 德克萨斯在她耳边低语，灼热的气息喷洒在敏感的耳廓上。她的手指开始用力地揉按那块湿透的布料，让粗糙的牛仔布更加紧密、更加用力地摩擦着肿胀的花唇和硬挺的花蒂！噗叽…噗叽…布料摩擦挤压着丰沛的爱液，发出清晰而淫靡的水声。

“给我…德克萨斯…求你…” 能天使彻底沦陷了，她扭动着腰肢，粉臀在草地上摩擦，主动地将自己的耻丘更用力地撞向德克萨斯按压的手掌，发出带着哭腔的哀求。

德克萨斯得到了最明确的信号。她的眼神幽暗如深潭。那只在能天使胸前揉捏的手，灵巧而迅速地解开了能天使运动内衣背后的搭扣！束缚解除，那对饱满挺翘、形状完美的玉乳瞬间弹跳出来，粉嫩的乳尖如同两颗熟透的樱桃，在月光下傲然挺立，微微颤抖着。

“唔…” 能天使发出一声满足又羞赧的轻吟。

德克萨斯的眼眸瞬间暗沉下去。她毫不犹豫地低下头，温热的唇精准地捕获了其中一颗挺翘的蓓蕾！
“呀啊——！” 能天使如同触电般，身体猛地向上弹起！德克萨斯灵活的舌尖快速地舔舐、拨弄那敏感至极的乳尖！时而用舌尖绕着乳晕打转，时而将整个乳尖含入口中，用口腔的吸力用力吮吸！牙齿偶尔轻轻啃咬那硬挺的小豆！

“哈啊…德克萨斯…好舒服…那边…那边也要…” 能天使金色的眼眸迷离失神，白皙的双臂紧紧抱住德克萨斯的头，粉嫩的脚趾在草地上用力地蜷缩着。

胸前传来阵阵强烈的快感，而下身那只作乱的手，更是变本加厉！德克萨斯不再满足于隔靴搔痒。她的手指粗暴地勾住了能天使湿透的牛仔短裤边缘，连同里面那同样泥泞不堪的棉质内裤，一起用力地向下褪去！

“啊！” 下身骤然接触到微凉的空气，让能天使惊叫一声。下一秒，更强烈的刺激接踵而至！

德克萨斯的手指，终于毫无阻碍地触碰到了那片早已泛滥成灾、泥泞不堪的秘境！

指尖首先触碰到的是光洁无毛、却因情动而微微鼓起、滚烫无比的耻丘。指腹带着薄茧，略显粗糙。她先用整个手掌覆盖在那片湿滑温热的隆起上，感受着饱满阴阜的柔软和弹性，掌心清晰地感受到花穴口正不受控制地微微开合、翕动，吐出更多粘稠滑腻的爱液。接着，她的中指如同最精准的探针，缓缓地、坚定地沿着湿滑泥泞的肉缝向下滑动。指尖清晰地感受到两片肿胀充血、如同花瓣般娇嫩的阴唇的轮廓，它们正热情地包裹、吮吸着她的手指。当指尖滑到尽头，那颗早已硬挺肿胀、如同红豆般凸起的花蒂，便毫无保留地、滚烫地抵在了她的指腹上！

“呃啊——！” 能天使发出一声近乎崩溃的尖叫！德克萨斯的手指没有停留，指腹开始用力地、快速地在能天使那极度敏感的花蒂上揉按、打圈！

“啊啊啊！不行！那里…太…太快了！德克萨斯！慢一点…哈啊…要…要坏了…” 能天使的身体疯狂地扭动起来，纤细的腰肢如同风中杨柳，修长的双腿死死夹住了德克萨斯在她下身活动的手臂。花穴深处传来一阵阵剧烈的痉挛，粘稠的爱液如同泉水般汩汩涌出。

德克萨斯抬起头，看着能天使在自己身下失神尖叫、扭动求饶的诱人模样。强烈的满足感和更深的占有欲让她口干舌燥。她停止了在花蒂上的肆虐，指尖带着满手湿滑粘腻的爱液，缓缓地、带着试探的意味，抵住了能天使那因极度渴望而不断收缩、微微开启的粉嫩穴口。

能天使立刻感受到了那滚烫指尖的威胁和诱惑，花穴口如同小嘴般贪婪地吮吸了一下德克萨斯的指尖。“进…进来…德克萨斯…求你了…” 她带着哭腔哀求。

德克萨斯不再犹豫，沾满爱液的中指，坚定而缓慢地刺入了那片温暖、紧窒、湿滑无比的蜜壶！

“啊——！” 能天使发出一声长长的、满足又带着一丝痛楚的叹息。花穴内壁瞬间如同无数张小嘴般热情地包裹、绞紧了入侵的手指！那紧致湿热的包裹感，内壁嫩肉细腻柔滑的触感，以及能天使身体随之而来的剧烈颤抖和满足的呜咽，让德克萨斯倒吸一口凉气。

她开始抽动手指。起初是缓慢的，感受着内壁嫩肉的层层叠叠的褶皱刮擦过指节带来的极致快感。每一次抽出，都带出大量晶莹粘稠的蜜液；每一次插入，都更深地探入那温暖紧窒的秘境，指腹摸索着、按压着内壁上那些敏感的小凸起。

“嗯…嗯啊…德克萨斯…好深…好舒服…” 能天使无意识地呻吟着，纤细的腰肢随着德克萨斯手指的抽插而款款摆动，主动地迎合着。花穴如同有生命般，贪婪地吮吸、绞紧着德克萨斯的手指，粘稠的爱液随着噗叽…噗叽…的淫靡水声不断被挤压出来。

德克萨斯被能天使的热情回应彻底点燃。她加快了手指抽插的速度和力度！咕啾…咕啾…更加响亮的水声在荒野回荡。她的指节有力地刮蹭着能天使敏感的内壁，指尖弯曲起来，精准地寻找并按压那个让能天使瞬间尖叫失神的G点！

“啊啊啊啊——！那里！就是那里！德克萨斯！用力…再用力一点！啊啊啊！” 能天使的尖叫陡然拔高，身体像离水的鱼般疯狂地向上弹起，金色的眼眸翻白，粉嫩的脚趾死死蜷缩！花穴以惊人的频率剧烈痉挛、抽搐，一股股滚烫粘稠的蜜液如同小股喷泉般，从被手指撑开的穴口猛烈地喷射而出！这是被德克萨斯亲手引爆的、纯粹的高潮！

德克萨斯感受着手指被滚烫的潮吹液体冲刷的触感，看着能天使在自己身下彻底崩溃、失神浪叫的绝顶模样，一股强烈的、想要被同样抚慰的渴望爆发！她停下了手指的动作，俯下身，再次狠狠吻住能天使红肿湿润的唇，将她的呻吟尽数吞没。同时，她滚烫的手抓住了能天使那只原本勾着自己脖子、此刻却无力垂落的手腕，强硬地牵引着能天使纤细的手指，探向了自己同样早已湿透、紧绷的黑色紧身裤下！

“摸我…” 德克萨斯在激烈的吻中断续地命令，声音带着喘息和情欲。

能天使的意识还沉沦在高潮的余韵中，身体却本能地听从。指尖触碰到紧身裤下那片同样滚烫、明显濡湿的区域。德克萨斯发出一声满足的闷哼，引导着能天使的手指，隔着布料，按压在自己同样肿胀不堪的阴阜上。
“里面…” 德克萨斯的声音带着压抑的颤抖。

能天使的手指，在德克萨斯的牵引下，略显笨拙却充满热情地钻进了紧身裤的腰际，探入了那早已被爱液浸透的丛林！指尖滑入了那片同样泥泞、滚烫、微微开启的缝隙！

“呃啊…” 德克萨斯身体一僵。能天使的手指带着她自己的爱液，生涩却大胆地刺入了德克萨斯那同样紧窒、温热、却带着不同触感的蜜径！

狭小的空间里，情欲的火焰燃烧到了顶点。德克萨斯的手指依旧停留在能天使湿滑紧致的花穴内，感受着它高潮后的余韵和收缩，同时开始了缓慢而深沉的抽送，指腹不忘研磨那敏感的内壁。而能天使的手指，也在德克萨斯的身体里略显慌乱却无比真诚地探索着，模仿着德克萨斯的动作，抽插着，指腹小心翼翼地摸索着德克萨斯内壁的褶皱和敏感的凸起。

“嗯…哈啊…能天使…对…就是那里…用力一点…” 德克萨斯喘息着，冰蓝色的眼眸半眯着，银灰色的短发被汗水浸湿，贴在泛着情欲红晕的颊边。她低下头，再次含住能天使胸前一颗挺立的乳尖，用力地吮吸舔弄，用牙齿轻轻啃咬。

“啊！德克萨斯…好舒服…你也…好紧…好热…” 能天使呻吟着，身体被前后夹击的快感推上更高的云端。德克萨斯在她体内的手指技巧娴熟地按压着她的G点，而自己埋在德克萨斯体内的手指，也感受到了对方内壁猛烈的收缩和汹涌而出的温热爱液！

德克萨斯加快了在能天使体内抽插和按压的速度和力度！同时，她引导着能天使的手指，在自己体内更深、更快地探索！两人身体的节奏逐渐同步，呻吟声、喘息声、肉体拍打声、还有那咕啾咕啾的淫靡水声交织在一起。

能天使的身体率先承受不住这双重的、极致的刺激！
“要…要去了！德克萨斯！一起…啊啊啊啊啊——————！！！” 伴随着能天使一声拉长的、近乎崩溃的浪叫，她的身体再次剧烈地反弓！花穴以惊人的力量死死绞紧了德克萨斯的手指，一股股滚烫的、粘稠的、量多得惊人的潮吹液如同失控般猛烈地喷射而出！她浑身剧烈地抽搐着，眼神彻底涣散。

几乎就在同时，能天使那在德克萨斯体内笨拙探索的手指，指关节重重地蹭过了德克萨斯体内某个极度敏感的凸起！
“呃啊——！” 德克萨斯发出一声短促而性感的低吼！冰蓝色的眼眸瞬间失神！一股强烈到让她眼前发黑的电流从下腹直冲头顶！她的身体猛地绷紧，花穴同样疯狂地痉挛、收缩，滚烫的爱液如同开闸般汹涌地浇灌在能天使的手指上！她紧紧抱着能天使，下巴搁在她汗湿的颈窝，身体随着剧烈的高潮余韵而无法控制地颤抖着。

月光如水，静静地流淌在荒野上，笼罩着草地上两具紧紧相拥、汗湿淋漓、散发着情欲气息的娇躯。

风暴过后是无边的宁静和慵懒。能天使像一只餍足的小猫，浑身酸软无力地蜷缩在德克萨斯怀里，艳红的短发凌乱地贴在德克萨斯汗湿的颈窝。德克萨斯有力的手臂紧紧环抱着她纤细的腰肢，另一只手无意识地、带着极度占有欲地抚摸着能天使光滑汗湿的脊背。

能天使金色的眼眸半阖着，长长的睫毛上还挂着未干的泪珠，但脸上却带着一种前所未有的、慵懒而满足的潮红。身体的疲惫感如同潮水般涌来，但内心深处，那被菲亚梅塔强行植入的恐惧和冰冷，似乎被德克萨斯这近乎霸道的温柔和情欲的火焰暂时驱散了。她感到一种奇异的、久违的安心。

德克萨斯冰蓝色的眼眸也褪去了情欲的灼热，恢复了往日的沉静，但那份沉静之下，却多了一层难以言喻的温柔和一丝困惑。她低头，看着怀中能天使恬静（虽然狼狈）的睡颜，看着她红肿的唇瓣和胸前自己留下的点点红痕，心中五味杂陈。刚才的失控…是她从未预料到的。但看着能天使此刻安稳的睡容，那份因失控而生的懊恼又被一种满足感取代。

然而，这份安宁并未持续太久。德克萨斯敏锐的目光扫过能天使依旧平坦却微微起伏的小腹。一个冰冷的念头如同毒蛇般窜入脑海：菲亚梅塔…那个跳蛋…还在里面！刚才能天使那突如其来的剧痛和失控的失禁潮吹，绝非偶然！

德克萨斯的眼神瞬间变得锐利如刀，环抱着能天使的手臂也下意识地收紧。无论如何，她必须弄清楚真相。她必须保护能天使。

月光下，德克萨斯抱着熟睡的能天使，冰蓝色的眼眸望向深邃的夜空，里面燃烧着守护的决心和一丝冰冷的怒火。这场意外交织着情欲的月下邂逅，只是一个开始。真正的风暴，还在后面。




`,Qd=Object.freeze(Object.defineProperty({__proto__:null,default:Yd},Symbol.toStringTag,{value:"Module"})),Xd=`---
order: 5
---
# B.N.5.1苹果派装不下再多了呜呜呜~！


意识如同沉船，挣扎着从漆黑冰冷的海底上浮。能天使首先感受到的不是光线，而是声音——或者说，是声音的绝对真空。一片死寂，沉重得压在她的鼓膜上，仿佛整个世界都被按下了静音键。紧接着，是视觉的剥夺。眼皮沉重，无论她如何努力，眼前只有一片浓稠得化不开的、天鹅绒般的黑暗。没有轮廓，没有光影，只有纯粹的、令人窒息的虚无。

恐慌如同冰冷的潮水，瞬间淹没了她残存的清醒。她试图尖叫，却只发出被厚实布料堵住的、沉闷的“唔唔”声。一个坚固的、带着皮革和金属冰冷触感的球体，牢牢地塞满了她的口腔，撑开她的颌骨，迫使她的舌头只能无力地抵着那光滑的表面，唾液不受控制地分泌、积聚，却找不到出口，只能沿着食道艰难地倒流，带来阵阵反胃的恶心。口球皮带勒过嘴角，紧紧扣在脑后，带来不容置疑的禁锢感。

她想抬手去摸索，去撕扯这剥夺她声音的刑具，却惊恐地发现自己的手腕被冰冷的金属环牢牢锁住！沉重的链条摩擦声在绝对的寂静中显得格外刺耳，提醒着她双手被分别铐在身体两侧，动弹不得。她奋力蹬腿，同样的金属禁锢感立刻从脚踝传来，沉重的镣铐将她的双脚也固定在了某种冰冷的金属床架上，呈一个屈辱的、门户大开的“M”字形。

绝对的黑暗。绝对的寂静。口不能言。身不能动。

彻底的感官剥夺，将她抛入了一个无边无际的、由自身恐惧和未知构成的牢笼。

就在这时，那折磨了她一周的、来自身体最深处的“玩具”，苏醒了。

嗡……

不是子宫深处那枚微型跳蛋的剧痛翻滚。这一次，震动源更直接，更……贴近。它就在她的花穴深处。一根粗壮、冰冷却带着强劲动能的柱状物，正无情地占据着她最私密的甬道。震动并非持续，而是以一种缓慢、规律、却带着不容忽视力度的频率启动。每一次震动，都像一只无形的手，用粗糙的指腹，精准地碾过她花穴内壁每一寸敏感的褶皱。

“唔…！” 能天使的身体猛地一僵，被口球压抑的呜咽变成了破碎的、带着惊恐的颤音。她试图夹紧双腿，但脚踝的镣铐只允许极其微小的移动，反而让那根粗粝的震动棒更深地楔入她紧窒的花径，粗糙的表面摩擦着娇嫩的黏膜，带来一阵混合着轻微痛楚和诡异酥麻的刺激。

恐惧如同藤蔓般缠绕着她的心脏。菲亚梅塔！一定是她！她把自己变成了一个只能被动承受、连尖叫都发不出的玩物！这个认知让她浑身发冷，屈辱的泪水瞬间浸湿了蒙眼的布条。

然而，身体却在背叛她的意志。

那根震动棒似乎被设定好了程序。它并不急于将她送上巅峰，而是极其缓慢、极其耐心地折磨着她。低频的震动如同最狡猾的蛇，在她花穴深处蜿蜒游走，挑逗着那些沉睡的敏感点。每一次嗡鸣，都像在花蕊上轻轻弹拨，激起一阵细密的、难以言喻的酸痒。这酸痒如同火星，在她饱经蹂躏、早已变得异常敏感的神经末梢上跳跃、累积。

“嗯唔…” 能天使无意识地扭动着腰肢，试图摆脱这磨人的挑逗，却只是让震动棒在湿滑的甬道内滑动得更加顺畅，粗糙的凸起刮蹭过G点的位置，带来一阵让她头皮发麻的强烈电流！

快感！尽管带着恐惧和羞耻，但纯粹而强烈的生理快感，如同毒药般，开始在她被剥夺了其他感官的身体里蔓延、渗透。黑暗和寂静放大了每一丝触觉。她能无比清晰地感受到那根异物的形状、温度、震动频率，感受到它每一次搅动带起的粘稠爱液在甬道内汩汩流动的湿滑触感。她的花穴内壁在恐惧和这诡异的快感双重刺激下，开始不受控制地收缩、痉挛，贪婪地吮吸、包裹着那根带来折磨也带来慰藉的刑具。

“呜…呜…” 她的呜咽声变了调，不再是纯粹的恐惧，而是掺杂了迷茫、抗拒，以及一丝连她自己都未曾察觉的渴望。身体深处那枚属于菲亚梅塔的微型跳蛋似乎也感应到了什么，开始若有若无地、极其轻微地在她子宫口附近震颤，像魔鬼的低语，提醒着她身体的所有权。

时间失去了意义。在绝对的黑暗和寂静中，只有那根震动棒是存在的坐标。它时快时慢，时而轻柔如羽毛拂过，时而猛烈如攻城槌撞击。快感如同潮汐，一波波冲刷着她脆弱的意志堤坝。汗水浸透了她的身体，从光洁的额头滑落，流过敏感的颈侧，汇集在深深的锁骨窝里。白皙的肌肤在黑暗中泛起情动的潮红，尤其是胸前那对饱满的玉乳，乳尖早已在反复的刺激和空虚感中硬挺如石，骄傲地凸起，摩擦着身下冰冷的床单，带来阵阵额外的、令人发疯的酥痒。

她一次次被那震动棒推向高潮的边缘，花穴剧烈地痉挛、收缩，粘稠的爱液如同失禁般汹涌而出，将身下的床单浸透，发出噗叽…噗叽…的淫靡水声（在她听不到的寂静世界里）。但就在即将攀上顶峰、灵魂都要被抛射出去的瞬间，震动棒又会骤然停止，或者降低到最微弱的频率，让她悬在那令人崩溃的高潮临界点，不上不下，空虚得如同被掏空。

“唔唔唔——！！！” 被剥夺了视觉和听觉，这种被强行中断、悬在半空的感觉被无限放大！她像一条被抛上岸的鱼，身体疯狂地扭动、挣扎，被镣铐磨破的纤细手腕和脚踝传来阵阵刺痛，却丝毫无法缓解下体那蚀骨的渴望和空虚。泪水、汗水、唾液、还有不断涌出的爱液，将她彻底变成了一个泥泞不堪、被欲望煎熬的囚徒。恐惧依旧存在，但更多的是一种被身体本能支配的、绝望的饥渴。她想要…想要那根震动棒动起来！想要它狠狠地、彻底地填满她！想要被那强烈的快感彻底淹没，哪怕是毁灭！

在这种反复的、近乎残忍的“放置”中，她的意志被一点点消磨、瓦解。反抗的念头越来越微弱，取而代之的是一种自暴自弃的沉溺，一种扭曲的依赖。那根震动棒，这黑暗寂静的牢笼，甚至那镣铐和口球带来的束缚感……都成了她此刻唯一能感知到的“真实”。她在恐惧中颤抖，却在快感的诱惑下主动挺起纤细的腰肢，粉嫩的臀瓣无意识地磨蹭着床单，试图从冰冷的束缚中汲取一丝摩擦的快慰，花穴饥渴地蠕动、吮吸着那根冰冷的柱体，渴望它能再次启动。

她彻底迷失在这感官的囚笼里，变成了欲望本身驱动的、等待被彻底打开的玩偶。

不知过了多久，也许是一个小时，也许是永恒。

突然——

啪嗒！

一声极其轻微的、如同开关被按下的声音，在死寂中响起！对能天使而言，这无异于惊雷！

紧接着，覆盖在她耳朵上的、隔绝一切声音的耳塞，被轻柔但不容抗拒地取了出来。外界的声音如同潮水般瞬间涌入她敏感的耳道——自己粗重滚烫的喘息声，镣铐链条细微的晃动声，还有……一个平稳、冰冷、带着金属质感的呼吸声，就在极近的地方！

几乎是同时，蒙眼的布条也被解开。突如其来的光线刺得她眼睛生疼，泪水瞬间涌出。模糊的视野逐渐清晰，首先映入眼帘的是天花板——冰冷、光滑、带着工业感的金属材质。然后是……

菲亚梅塔。

她就站在床边，居高临下地俯视着她。依旧是那身标志性的、剪裁考究的黑色制服，金色的长发一丝不苟地束在脑后，如同冰冷的黄金瀑布。那张精致到近乎无瑕的脸上没有任何表情，金色的眼眸如同两颗凝固的琥珀，里面燃烧着一种能天使无法完全理解的、深沉而极具侵略性的欲望，比纯粹的冰冷更让她心悸。

菲亚梅塔的目光，如同实质般，缓慢而极具压迫感地扫过能天使被镣铐禁锢的赤裸胴体——那被汗水、泪水和爱液浸透、泛着诱人情欲光泽的白皙肌肤；那因挣扎和情动而剧烈起伏、乳尖硬挺如红宝石的饱满酥胸；那被震动棒撑开、泥泞不堪、爱液正顺着大腿内侧缓缓流淌的腿间秘境。

“看来，小狗玩得很开心？” 菲亚梅塔的声音响起，低沉、磁性，却带着冰锥般的穿透力，每一个字都敲打在能天使最脆弱的神经上。

能天使想摇头，想尖叫否认，但口球的存在只让她发出含糊的“唔唔”声，更多的唾液从嘴角不受控制地溢出，沿着下巴滑落。屈辱和恐惧让她浑身颤抖，但更让她绝望的是，当菲亚梅塔的目光落在她腿间时，那根沉寂了片刻的震动棒，仿佛受到感应般，再次启动了！

嗡——！

这一次，是中等频率的震动！不再是最初的缓慢折磨，也不再是临界点的中断，而是稳定、持续、带着明确目的性的刺激！瞬间席卷的快感让能天使的身体猛地向上弹起，又被镣铐无情地拉回！花穴条件反射般地剧烈收缩，绞紧了那根粗粝的异物，粘稠的爱液被挤压得**噗嗤…噗嗤…**作响。

菲亚梅塔的唇角，勾起一抹极其细微、却冰冷到骨髓的弧度。她欣赏着能天使在她目光下这无法自控的反应，如同欣赏一件精心雕琢的艺术品正在按照她的意志绽放。

“想要说话？” 菲亚梅塔缓缓俯身，冰冷的指尖如同毒蛇的信子，轻轻划过能天使汗湿滚烫的脸颊，最终停留在勒着她嘴角的口球皮带上。她的指尖带着一种掌控一切的从容，轻轻摩挲着那被唾液浸湿的皮革。

能天使疯狂地点头，金色的眼眸里充满了泪水、恐惧，还有一丝连她自己都未曾察觉的、被快感逼出来的哀求。

“求我。” 菲亚梅塔的声音带着不容置疑的命令，金色的眼眸锁住能天使的双眼，仿佛要直接看进她的灵魂深处。

震动棒的频率似乎又提高了一档！嗡——嗡嗡嗡！ 更强烈的快感如同电流般窜遍能天使的四肢百骸！她的大脑一片空白，只剩下身体最原始的渴求和菲亚梅塔那冰冷的命令！

“唔…唔唔…！” 能天使拼命地点头，泪水汹涌而出，身体在快感和恐惧的双重夹击下剧烈地颤抖、扭动，粉臀在冰冷的金属床架上无助地磨蹭，花穴深处传来一阵阵失控的痉挛和吮吸。她屈服了。在绝对的掌控和身体本能的驱使下，她彻底屈服了。

菲亚梅塔眼中闪过一丝满意的暗芒。她解开了口球后方的皮带扣，动作优雅而缓慢。当那个湿漉漉、沾满亮晶晶唾液的粉红色口球被从能天使口中取出时，带出了一大股无法抑制的、清亮的涎液，顺着能天使红肿的嘴角和下巴流淌下来，滴落在她剧烈起伏的胸脯上。

“哈啊…哈啊…” 能天使立刻如同离水的鱼般大口喘息，长时间被撑开的口腔传来阵阵酸麻，粉嫩的舌头下意识地伸出来，舔舐着干涩疼痛的嘴唇和嘴角的唾液。她终于能发声了，但看着菲亚梅塔那双近在咫尺的、燃烧着欲望的金色眼眸，她却一个字也说不出来，只剩下粗重的喘息和身体无法控制的颤抖。那根震动棒还在她体内不知疲倦地嗡鸣、搅动，持续地点燃着她的欲火。

“小狗想要什么？” 菲亚梅塔的声音带着一丝残忍的戏谑，冰冷的指尖顺着能天使汗湿的脖颈向下滑去，掠过精致的锁骨，最终停留在她剧烈起伏、乳尖硬挺的左侧玉乳上。她的指尖用力地掐住了那敏感充血的小小蓓蕾！

“啊——！” 乳尖传来的尖锐痛楚混合着强烈的快感，让能天使发出一声短促的尖叫！身体猛地向上弹起！震动棒的刺激、乳尖的蹂躏、还有菲亚梅塔那如同实质般的目光带来的压迫感……所有的刺激叠加在一起，将她推向了崩溃的边缘！

“想要…想要主人…” 能天使的声音带着哭腔，破碎而沙哑，却清晰地吐出了让菲亚梅塔等待已久的答案。说出这句话的瞬间，一种巨大的羞耻和一种奇异的解脱感同时攫住了她。她彻底放弃了抵抗，金色的眼眸迷离失神，只剩下最原始的、被欲望支配的渴求。“想要主人…操我…求您…菲亚梅塔主人…” 她甚至无意识地用了更卑下的称谓，身体如同最虔诚的信徒般，主动地、淫荡地向菲亚梅塔的方向挺起纤细的腰肢，将饱受蹂躏的乳尖更深地送入对方的指尖，湿漉漉的花穴也饥渴地翕动、收缩着，仿佛在邀请那根震动棒的主人，给予她更直接的“恩赐”。

菲亚梅塔的呼吸，第一次出现了明显的紊乱。能天使这彻底臣服、主动献祭般的姿态，这淫荡到极致却又脆弱到极点的哀求，如同一把烈火，彻底点燃了她压抑已久的、狂暴的占有欲。那冰冷的金色眼眸深处，终于燃起了赤裸裸的、足以焚毁一切的情欲烈焰！

“很好。” 菲亚梅塔的声音低沉沙哑，带着一种金属摩擦般的磁性，充满了危险的气息。她终于不再满足于旁观和间接的折磨。她需要彻底占有、彻底征服、彻底品尝这具已经为她完全敞开的甜美躯体。

她站直身体，开始解自己那身笔挺的黑色制服。动作依旧从容，却带着一种不容错认的急切。纽扣被一颗颗解开，露出里面黑色的紧身衬衣，勾勒出她同样高挑而充满力量感的身体轮廓。能天使被镣铐禁锢着，只能被动地看着，身体因为恐惧和期待而剧烈地颤抖，那根震动棒还在她体内持续不断地嗡鸣，提醒着她即将到来的命运。

当菲亚梅塔脱下衬衣，能天使的瞳孔猛地收缩——她看到了菲亚梅塔作为Futa的惊人躯体。

上半身，是饱满挺翘、形状完美的双峰，虽然被黑色的运动内衣包裹着，但依旧能感受到其惊人的弹性和分量，深陷的乳沟散发着致命的诱惑。皮肤是健康的小麦色，肌肉线条流畅而蕴含着爆发力。

而下身……能天使的呼吸几乎停滞。在平坦紧实的小腹下方，在女性最隐秘的三角地带，并非寻常的花园，而是同时存在着两种性征！那浓密、修剪整齐的金色毛发之下，一道粉嫩湿润、微微开启的诱人缝隙清晰可见——那是属于女性的花穴，此刻似乎也因主人的情动而微微湿润，穴口如同羞涩的花瓣般轻轻翕动。

然而，更引人注目的，是从那花穴上方耻骨处勃然挺立而出的、属于男性的雄伟器官！一根尺寸惊人、通体呈现出健康粉红色、青筋虬结的粗壮肉棒，此刻正骄傲地昂首挺立，硕大的龟头如同熟透的蘑菇，铃口处正缓缓渗出一滴晶莹剔透的前列腺液，散发着浓郁的、雄性荷尔蒙的气息。它粗壮、狰狞，充满了原始的力量感和侵略性，与菲亚梅塔冰冷禁欲的上半身形成了极其强烈的、令人窒息的视觉冲击！

菲亚梅塔的肉棒仿佛有生命般，在空气中微微跳动着，彰显着其主人此刻汹涌的情欲。她甚至没有完全脱下裤子，只是解开了束缚，让这象征着征服与占有的凶器完全暴露在空气中，也暴露在能天使惊恐又迷离的视线里。

“害怕吗？” 菲亚梅塔看着能天使瞬间煞白的脸色和瞪大的金色眼眸，声音带着一丝残忍的愉悦。她向前一步，那根滚烫、跳动的肉棒几乎要碰到能天使被镣铐分开、无力抵抗的大腿内侧。

能天使的身体抖得像风中的落叶。恐惧再次攫住了她。那尺寸…太可怕了！她无法想象那样狰狞的巨物进入自己身体会是怎样的感觉！绝对会被撕裂的！她想摇头，想退缩，但身体深处那根震动棒还在不知疲倦地嗡鸣、搅动，持续地撩拨着她的欲火，而菲亚梅塔身上散发出的、那混合着冰冷气息和浓郁雄性荷尔蒙的味道，又像最烈的春药，刺激着她早已敏感不堪的神经。

“唔…主人…太大了…会…会坏掉的…” 能天使的声音带着哭腔和真切的恐惧，泪水再次滑落。但她的身体反应却截然相反！她的花穴在那根震动棒的刺激和眼前这极具冲击力的景象双重作用下，竟然剧烈地收缩、蠕动起来，粘稠的爱液如同开了闸般汹涌地分泌，顺着被撑开的穴口和震动棒的边缘汩汩流出，将身下已经湿透的床单弄得更加狼藉不堪。她的腰肢甚至无意识地、淫荡地向上挺了挺，仿佛在渴望着那即将到来的贯穿。

这矛盾的反应——恐惧的眼泪和身体主动的迎合——彻底取悦了菲亚梅塔。她低笑一声，那笑声带着金属的冰冷和情欲的沙哑。

“坏掉？” 菲亚梅塔俯下身，滚烫的呼吸喷洒在能天使的耳廓，冰冷的指尖再次抚上她剧烈起伏的酥胸，用力地揉捏着那饱满的乳肉，指甲若有似无地刮蹭着硬挺的乳尖。“小狗的身体，不就是用来被主人玩坏的吗？” 她的声音如同恶魔的低语，充满了占有和破坏的欲望。

话音未落，菲亚梅塔那只一直按在能天使胸前的手猛地用力下压！同时，她的身体强硬地挤进了能天使被镣铐分开的双腿之间！那根滚烫、硕大、青筋虬结的肉棒，粗粝的龟头带着灼人的热度和粘稠的前液，毫无预警地、狠狠地抵在了能天使那早已泥泞不堪、微微开合的粉嫩穴口上！

“不——！！” 能天使发出一声凄厉的尖叫！巨大的恐惧和那坚硬滚烫的触感让她全身的肌肉瞬间绷紧！她拼命地想合拢双腿，却被镣铐和菲亚梅塔的身体死死卡住！

菲亚梅塔没有给她任何适应的时间。她的腰肢猛地发力！

噗嗤——！

伴随着一声极其清晰、粘稠而淫靡的破开声，那根尺寸惊人的肉棒，如同烧红的烙铁，强硬地、毫不留情地挤开了能天使那紧窒娇嫩的花唇，撕裂开湿滑粘腻的粘膜，蛮横地捅入了她花穴的最深处！

“啊啊啊啊啊——————！！！！！！”

能天使的惨叫瞬间变调，变成了被彻底贯穿、撕裂般的、非人的尖啸！她的身体如同被钉在砧板上的鱼，猛地向上反弓到极限，脖颈拉出绝望的弧度，金色的瞳孔骤然放大，充满了极致的痛苦和难以置信！花穴被强行扩张到极限，娇嫩的粘膜被无情地撑开、摩擦，传来火辣辣的剧痛！那根震动棒被这更粗壮、更坚硬的入侵者粗暴地顶到了最深处，龟头甚至重重地撞在了她脆弱的子宫颈口上！

“呃啊！” 剧烈的撞击让能天使眼前发黑，差点晕厥过去。花穴内部传来一阵撕裂般的剧痛，但紧随其后的，却是那根震动棒被挤压到极致后带来的、扭曲而强烈的震动快感，以及菲亚梅塔肉棒那滚烫、坚硬、充满生命力的脉动感！剧痛与快感如同两条毒蛇，瞬间缠绕住她的神经，将她拖入了痛苦与极乐交织的深渊！

菲亚梅塔发出一声满足的、如同野兽般的低吼。她能清晰地感受到能天使花穴那令人发狂的紧致和湿热！那层层叠叠的嫩肉如同无数张小嘴，在剧痛和快感的刺激下，正疯狂地痉挛、绞紧着她的茎身，带来一种销魂蚀骨的包裹感和被吮吸的极致快慰！这紧窒的包裹，比她想象中还要美妙百倍！

她没有丝毫怜惜。腰肢如同最有力的攻城锤，开始了狂暴而凶猛的抽插！

啪！啪！啪！啪！

沉重而淫靡的肉体撞击声在冰冷的房间里回荡，混合着能天使被顶撞得支离破碎的哭喊和呻吟。菲亚梅塔的每一次插入，都用尽全力，粗壮的肉棒如同烧红的铁棍，凶狠地贯穿能天使湿滑紧窒的花径，硕大的龟头一次次重重地夯击在她敏感的子宫颈上，带来让她灵魂都为之颤抖的撞击感！每一次抽出，都带出大量被捣烂的晶莹爱液和粉嫩的穴肉，发出噗嗤…咕啾…的粘稠水声。

“呃啊！哈啊！主人…太深了…啊啊啊！要…要裂开了…呜…” 能天使的哭喊声断断续续，充满了痛苦，但她的身体却在菲亚梅塔这狂暴的征伐下，产生了可怕的、违背意志的反应！那根被顶到最深处的震动棒，在菲亚梅塔肉棒的挤压和撞击下，仿佛被激活了最强的模式，疯狂地震颤起来！双重刺激——外部肉棒的凶狠冲撞和内部震动棒的高频震颤——如同两股毁灭性的洪流，在她花穴最深处交汇、爆炸！

剧痛在持续，但快感却如同海啸般，以更凶猛、更无法抗拒的姿态席卷而来！她的花穴内壁在剧痛和极乐的双重刺激下，痉挛收缩得更加疯狂，如同无数张小嘴贪婪地吮吸、绞紧着菲亚梅塔粗壮的肉棒，粘稠的爱液如同失禁般汹涌地分泌，将两人的交合处弄得一片泥泞湿滑。

菲亚梅塔感受着茎身传来的极致紧窒和吮吸感，看着身下能天使那痛苦扭曲却又夹杂着极致快感的淫靡表情——泪水和唾液糊满了她精致的小脸，金色的眼眸翻白失神，粉嫩的嘴唇无意识地张开，发出破碎的浪叫——这景象极大地刺激了她的征服欲和施虐欲！

“小狗的里面…真是淫荡得让人发狂…” 菲亚梅塔喘息着，声音沙哑而充满情欲。她俯下身，滚烫的唇狠狠吻住了能天使微张的、发出呻吟的小嘴，灵巧的舌如同侵略者般长驱直入，霸道地纠缠、吮吸着能天使无力抵抗的软舌，将她所有的哭喊和呜咽都堵了回去。同时，她空闲的一只手，用力地揉捏、掐拧着能天使剧烈晃动的另一侧玉乳，指甲甚至恶意地刮蹭着那早已红肿不堪的乳尖！

三重刺激！下体被狂暴贯穿，口腔被霸道侵占，胸前被残忍蹂躏！能天使的意识彻底被抛上了云霄，又在下一秒被狠狠掼入地狱！她的身体如同狂风巨浪中的小船，只能随着菲亚梅塔的节奏疯狂地颠簸、起伏。花穴深处积累的快感如同即将喷发的火山，而那根疯狂震动的跳蛋就是最后的引信！

“唔唔唔——！！！” 被堵住嘴的能天使发出沉闷到极致的悲鸣！她的身体猛地绷紧到极限，如同拉满的弓弦！花穴以前所未有的力量死死绞紧了菲亚梅塔深深埋入的肉棒和那根疯狂震动的玩具！一股滚烫、粘稠、量多得惊人的潮吹液，混合着之前残留的尿液和爱液，如同高压水枪般，从她被撑开到极限的穴口猛烈地喷射而出！噗嗤——哗啦——！ 温热的液体甚至溅射到了菲亚梅塔的小腹和大腿上！

这是毁灭性的高潮！能天使的金色眼眸彻底失去了焦距，翻白向上，身体在菲亚梅塔身下剧烈地、失控地抽搐着，粉嫩的脚趾死死蜷缩，纤细的腰肢疯狂地向上反弓，仿佛要将自己折断！口鼻间发出无意识的、濒死般的嗬嗬声。她被这极致的高潮彻底摧毁了意识，陷入了短暂的失神状态。

菲亚梅塔被能天使这剧烈的绞紧和滚烫的潮吹冲击得闷哼一声，那紧窒湿热的包裹和痉挛吮吸带来的极致快感，如同电流般窜上她的脊椎！她的肉棒在能天使高潮的花穴深处剧烈地搏动、膨胀！她知道自己也濒临极限！

看着身下能天使那彻底崩溃、失神浪叫、如同被玩坏人偶般的淫荡模样，菲亚梅塔眼中最后一丝克制也燃烧殆尽！她猛地加快了抽插的速度和力度，如同最疯狂的野兽！

“呃啊——！给我…全部…接好了…小狗！” 菲亚梅塔发出一声低沉的、如同野兽般的咆哮！她的腰肢如同打桩机般凶狠地向前一顶！粗壮的肉棒深深埋入能天使高潮后依旧痉挛不止的花穴最深处，硕大的龟头死死抵住了那敏感脆弱的子宫颈口！

紧接着——

噗嗤！噗嗤！噗嗤！

一股股滚烫、浓稠、如同岩浆般灼热的白浊精液，从菲亚梅塔怒张的马眼中强劲地喷射而出！带着惊人的冲击力，狠狠地灌入了能天使痉挛收缩的花穴深处！精液的量多得惊人，一波接着一波，滚烫的激流冲刷着能天使敏感的内壁，填满了每一寸褶皱，甚至强行挤入了那微微开启的子宫颈口！

“呜——！！！” 即使在高潮的余韵中，能天使依旧被这滚烫的灌注刺激得浑身剧烈地哆嗦，发出绵长而满足的呜咽。她能清晰地感受到那灼热的生命精华在她体内奔流、激荡、灌注的惊人触感，花穴本能地贪婪吮吸着，仿佛要将这来自征服者的烙印彻底融入身体。

菲亚梅塔的身体也随着这剧烈的喷射而绷紧、颤抖。她饱满的胸脯在紧身内衣下剧烈起伏，小麦色的肌肤上布满了细密的汗珠。她粉嫩的花穴口也在这极致的高潮中，不受控制地开合、翕动着，晶莹的爱液混合着能天使之前喷溅的潮吹液体，顺着她结实的大腿内侧缓缓流下。

持续了十几秒的猛烈射精终于结束。菲亚梅塔粗重的喘息着，身体依旧压在能天使身上，深深埋入的肉棒并未立刻抽出，而是享受着高潮后花穴那余韵未消的、温柔的痉挛和吮吸。滚烫的精液正从两人紧密交合的穴口边缘，缓缓地、粘稠地溢出，在能天使泥泞不堪的腿间汇聚成一小滩淫靡的白浊水洼。

房间里弥漫着浓烈的、混合着精液腥膻、爱液甜腻、汗水和情欲的复杂气息。

菲亚梅塔缓缓抬起头，金色的眼眸看着身下依旧失神、身体还在细微抽搐的能天使。那张布满泪痕和唾液的小脸上，之前的恐惧和抗拒已经消失不见，取而代之的是一种被彻底征服、被彻底填满后的、近乎痴态的满足和茫然。她的嘴角甚至无意识地微微勾起，露出一抹淫荡而甜蜜的弧度。

菲亚梅塔伸出手，冰冷的手指带着一丝事后的慵懒，轻轻拂去能天使眼角未干的泪痕。这个细微的动作，却带着一种奇异的、近乎温柔的占有。

能天使似乎感受到了这触碰，长长的睫毛颤动了一下，迷离的金色眼眸缓缓聚焦，对上了菲亚梅塔那双依旧燃烧着余烬般欲望的金瞳。没有恐惧，没有怨恨。她的眼中只有深深的依赖和一种被彻底开发后的、餍足的慵懒。

“主人…” 能天使的声音沙哑而甜腻，带着高潮后的绵软无力，主动地用汗湿的脸颊蹭了蹭菲亚梅塔停留在她脸上的手指，像一只终于找到归宿的小猫。“还要…” 她甚至发出了更进一步的、贪婪的渴求，纤细的腰肢无意识地向上挺动了一下，让那根依旧半硬、埋在她体内的肉棒感受到她花穴的吮吸和挽留。

菲亚梅塔的唇角，终于勾起了一抹真实的、带着占有欲的满意笑容。她的小狗，终于彻底属于她了。从身体，到灵魂。恶堕的果实，甜美得令人沉醉。她俯下身，在能天使红肿的唇瓣上印下了一个带着精液和情欲气息的、宣告所有权的吻。

“贪吃的小狗…” 菲亚梅塔的声音低沉而充满磁性，“主人的‘奖励’…还多着呢。”

精液的腥膻味在口腔弥漫，能天使却如同品尝琼浆玉液般，主动地伸出小巧的舌尖，生涩而热情地回应着这个吻。她的恶堕，她的沉沦，才刚刚开始。而菲亚梅塔的欲望，也远未被满足。这感官的囚笼，已然成为了她心甘情愿沉沦的、欲望的渊薮。






`,Zd=Object.freeze(Object.defineProperty({__proto__:null,default:Xd},Symbol.toStringTag,{value:"Module"})),nu=`---
order: 6
---
# B.N.5.2 苹果派装不下再多了呜呜呜~！2

希望你们看得开心！爱能TV说是


菲亚梅塔的吻，带着精液的腥膻、情欲的灼热和她自身冰冷的气息，如同烙印般落在能天使红肿的唇上。能天使非但没有抗拒，反而如同久旱逢甘霖的旅人，生涩却无比热情地回应着。小巧的舌尖怯生生地探出，主动缠绕上菲亚梅塔强势的舌，贪婪地汲取着那混合着征服与占有的复杂滋味，仿佛这污秽的吻液是她此刻唯一的甘泉。

这个主动而淫靡的回应，彻底点燃了菲亚梅塔眼中尚未熄灭的火焰。她低哼一声，原本停留在能天使脸颊的手猛地滑下，带着不容抗拒的力道，一把扣住了能天使纤细的脖颈！力道控制得恰到好处，既能带来窒息般的压迫感，又不至于真正伤害。能天使的呼吸骤然一窒，金色的眼眸瞬间蒙上一层水雾，发出“唔…”的呜咽，身体却如同被电流击中般剧烈地颤抖了一下，花穴深处那根尚未软化的肉棒清晰地感受到一阵更加强烈的、痉挛般的吮吸！

“小狗的嘴…学得很快。”菲亚梅塔的声音低沉沙哑，带着情欲的颗粒感，金色的眼眸如同锁定了猎物的猛兽，紧紧盯着能天使因窒息和快感而泛红的小脸。“看来，光是里面的‘奖励’，还不够满足你这贪婪的小东西？”

能天使无法说话，只能透过菲亚梅塔指缝艰难地喘息，金色的眼眸里充满了被掌控的恐惧，却又燃烧着更炽烈的、近乎痴迷的渴望。她微微地点着头，幅度小得几乎看不见，但菲亚梅塔清晰地感受到了她喉间肌肉的讨好般的蠕动。

菲亚梅塔的唇角勾起一抹冰冷而满意的弧度。她松开了钳制能天使脖颈的手，能天使立刻如同搁浅的鱼般大口喘息，胸口剧烈起伏。然而，菲亚梅塔并没有给她喘息的机会。
她的身体微微后撤，那根依旧半硬、沾满两人混合体液、在能天使花穴深处微微搏动的粗壮肉棒，缓慢而坚定地开始向外抽出。

“呜…” 能天使发出一声不舍的呜咽，空虚感瞬间席卷而来。花穴内壁依依不舍地蠕动、挽留着那根带来极致痛苦与极乐的凶器，粘稠的、混合着精液和爱液的白浊液体随着肉棒的退出，发出咕唧…咕唧…的淫靡声响，从被撑开的粉嫩穴口汩汩涌出，在她泥泞不堪的腿间汇聚成更大的一滩狼藉。

当肉棒完全退出时，能天使的身体不由自主地剧烈痉挛了一下，花穴口如同失去塞子的泉眼，大量浓稠的精液混合着晶莹的爱液失控般喷涌而出，在冰冷的空气和床单上拉出一道粘稠的、淫秽的丝线。她的身体瞬间软了下去，像一滩融化的春水，只有微微开合、翕动的穴口和剧烈起伏的胸脯证明她还活着。

菲亚梅塔居高临下地欣赏着这幅由她亲手造就的、极致堕落的景象。能天使白皙的胴体上布满了情欲的红痕、掐拧的淤青和干涸的泪痕唾液，金色的短发汗湿地贴在潮红的脸颊和光洁的额角，饱满的酥胸上乳尖依旧红肿挺立，而最引人注目的，是那彻底敞开、一片狼藉的腿间——粉嫩的花唇被蹂躏得微微外翻、红肿不堪，穴口正无法控制地开合着，粘稠的白浊精液如同决堤般，持续不断地从被撑开到极限的腔道深处缓缓流淌、滴落，在身下形成一滩不断扩大的、散发着浓郁情欲气息的泥沼。

这景象，比任何言语都更能证明她的彻底征服。

“小狗刚才说…还要？”菲亚梅塔的声音响起，带着一丝残忍的戏谑。她并没有立刻解开能天使手腕和脚踝的镣铐，反而俯下身，冰冷的指尖顺着能天使汗湿的腰侧缓缓下滑，掠过她敏感的小腹，最终，带着粘稠的精液，精准地按在了能天使那因高潮余韵依旧微微抽搐、暴露在外的、红肿敏感的阴蒂上！

“啊——！” 尖锐到变调的尖叫瞬间撕裂了房间的寂静！能天使的身体如同被高压电击中，猛地向上弹起，又被镣铐无情地拉回！花穴再次失控地剧烈收缩，挤出更多粘稠的液体！菲亚梅塔的指尖带着精液的滑腻和冰冷，却用极其残忍的力道，用力地揉按、捻弄着那颗极度充血、脆弱不堪的小小肉粒！

“呜…主人…不要…那里…太…太敏感了…啊啊啊！”能天使哭喊着求饶，身体疯狂地扭动，试图摆脱这酷刑般的刺激，但镣铐将她牢牢固定，菲亚梅塔的手指如同最精准的刑具，纹丝不动地碾压着她的致命弱点。剧痛和一种扭曲到极致的快感如同海啸般将她淹没！刚刚经历过高潮的身体根本无法承受这种直接的、粗暴的刺激！

“不要？”菲亚梅塔的指尖变本加厉地用力，甚至用指甲恶意地刮蹭了一下！“小狗的身体，什么时候轮到你说‘不要’了？”她的声音冰冷如刀，“刚才不是还很贪心地索求吗？现在，就用你身体最真实的反应来回答我——想要什么？”

极致的痛苦和无法抗拒的快感在能天使脆弱的神经上激烈碰撞！理智早已被碾得粉碎！她只想逃离这地狱般的折磨，或者…彻底沉沦其中，换取解脱！

“要！要主人！要主人的手指！要主人…操我！狠狠地操我！呜…”能天使发出崩溃般的哭喊，语无伦次，充满了最卑微的乞求。她的花穴在菲亚梅塔残酷的蹂躏下，竟然违背意志地剧烈蠕动、分泌出更多滑腻的爱液，仿佛在迎合着这份施虐！她的腰肢甚至主动地、淫荡地向上挺送，将饱受摧残的阴蒂更深地送入菲亚梅塔的指尖！

这彻底的、自暴自弃的臣服，让菲亚梅塔眼中闪过一丝扭曲的满足。她终于松开了折磨阴蒂的手指。能天使如同虚脱般瘫软下去，大口喘息，身体还在无法控制地细微抽搐，花穴口如同失禁般持续地溢出精液和爱液。

菲亚梅塔站直身体，目光扫过能天使彻底敞开的、泥泞不堪的腿间，又看了看自己依旧沾满精液、微微昂首的肉棒，以及下方那同样因情动而湿润、微微开合的粉嫩花穴。一个更邪恶、更彻底的占有念头在她心中成型。她要的，不仅仅是能天使的花穴，而是她身体的每一个孔窍，都彻底烙上她的印记。

“既然小狗这么贪心…”菲亚梅塔的声音带着一种掌控一切的慵懒，她走到床头，在能天使茫然又恐惧的目光中，拿起了一个之前被忽略的、造型奇特的金属器具——一个连接着软管和球囊的肛塞，以及配套的灌肠用具。“主人的‘奖励’，自然要深入…每一个角落。”

能天使看着那冰冷的器具，瞬间明白了菲亚梅塔的意图！巨大的恐惧让她浑身冰凉！“不…主人…那里…不要…求您…”她拼命地摇头，泪水汹涌而出。后庭的侵犯，对她而言是更深的禁忌和恐惧！

但菲亚梅塔对她的哀求置若罔闻。她动作优雅而冷酷地将灌肠器的软管连接好，调试着温度适宜的液体。冰冷的润滑剂被挤在能天使因恐惧而紧紧闭合的菊蕾周围，带来一阵刺骨的凉意。

“放松，小狗。”菲亚梅塔的声音如同催眠，“或者…你想更痛一点？”她的指尖带着粘稠的精液，强硬地按压在能天使紧绷的菊蕾上，用力地向内戳刺！

“啊！”能天使痛得尖叫，身体本能地想要蜷缩，却被镣铐死死固定。屈辱和恐惧让她浑身颤抖，但在菲亚梅塔绝对的力量和意志面前，她的抵抗如同螳臂当车。在菲亚梅塔持续的、不容抗拒的按压和扩张下，她紧窒的菊蕾终于屈辱地、一点点地松弛开来。

冰冷的、前端圆润的肛塞，沾满了润滑剂和菲亚梅塔指尖的精液，缓慢而坚定地挤开了能天使刚刚被强行打开的羞涩菊穴！

“呃啊——！”能天使发出一声被贯穿般的痛呼，身体绷紧！异物入侵后庭的饱胀感和撕裂般的痛楚让她眼前发黑。肛塞被一点点推入深处，直到基座紧密地贴合在她小巧的臀瓣上。

紧接着，更可怕的来了。灌肠器的细长喷嘴，毫无怜悯地抵住了肛塞中央预留的细小通道口。

“不…不要灌…主人…求您…”能天使的哀求带着绝望的哭腔。

菲亚梅塔只是冷漠地按下了球囊。一股温热的水流，带着不容抗拒的压力，瞬间涌入了能天使毫无防备的肠道深处！

“呜——！”能天使的身体猛地痉挛！肠道被强行注入液体的饱胀感和强烈的便意让她痛苦地蜷起脚趾！水流持续涌入，冲刷着她敏感的肠壁，带来一种诡异而强烈的刺激！她的小腹以肉眼可见的速度微微鼓起！

灌肠持续了相当长的时间。能天使在饱胀、便意、屈辱和一种扭曲的、被彻底填满的怪异快感中挣扎、呜咽。当菲亚梅塔终于停止注入，拔出喷嘴时，能天使已经浑身瘫软，意识模糊，只剩下小腹的鼓胀和后庭被异物塞满的强烈存在感在提醒着她正在经历的一切。

然而，菲亚梅塔的“奖励”远未结束。她再次跨跪在能天使被镣铐分开的双腿之间。这一次，她没有用肉棒对准花穴，而是将沾满精液、依旧怒挺的粗壮肉棒，滚烫的龟头带着粘稠的前液，狠狠地抵在了能天使刚刚被灌肠、此刻正被肛塞撑开的、湿润敏感的菊蕾入口处！

“不——！！”能天使发出了前所未有的、撕裂灵魂般的凄厉尖叫！她终于明白了菲亚梅塔的全部意图！双重侵犯！彻底的占有！巨大的恐惧如同黑洞般吞噬了她！她拼尽全身力气挣扎，镣铐在手腕脚踝上勒出深深的红痕！

“这里…也要印上主人的标记。”菲亚梅塔的声音冰冷而狂热，带着一种亵渎神圣般的施虐快感。她的腰肢猛地发力！

噗嗤——！！

一声比之前更加沉闷、更加粘稠、更加令人毛骨悚然的破开声响起！那根尺寸惊人的肉棒，蛮横地挤开了被肛塞扩张过却依旧紧窄的菊穴入口，撕裂开娇嫩脆弱的括约肌，毫不留情地捅入了能天使从未被开拓过的、紧窒火热的直肠深处！

“啊啊啊啊啊啊啊——————！！！！！！！”

能天使的惨叫瞬间变成了非人的、濒死的哀嚎！身体如同被从中劈开般剧烈地反弓、抽搐！后庭传来的撕裂般的剧痛远超花穴被破开时的感受！仿佛整个身体都被那滚烫粗硬的巨物从内部贯穿、撕裂！她的眼球因剧痛而暴突，金色的瞳孔彻底涣散失焦，口鼻间只能发出嗬嗬”的、窒息般的抽气声！花穴在极致的痛苦刺激下，也失控地剧烈痉挛、收缩，粘稠的爱液和残留的精液再次被挤压喷射而出！

菲亚梅塔也被这极致的紧窒和火热的包裹刺激得倒吸一口凉气！后庭的紧窄与花穴截然不同，是另一种令人窒息的、仿佛要将入侵者碾碎的压迫感！她发出一声野兽般的低吼，腰肢如同最疯狂的活塞，开始了狂暴而凶残的肛交！

啪！啪！啪！啪！

沉重而闷响的肉体撞击声，混合着肠道被强行摩擦、挤压的粘稠水声，以及能天使那已经不成人声的、破碎断续的哀鸣，构成了地狱般的交响乐。菲亚梅塔的每一次插入都用尽全力，粗壮的肉棒在能天使紧窄火热的直肠内凶暴地冲撞、碾压，硕大的龟头一次次凶狠地顶撞在她脆弱的肠道内壁上，带来内脏移位般的剧痛！每一次抽出，都带出混合着润滑液、肠液和丝丝血迹的粘稠浊液！

剧痛如同海啸般持续冲击着能天使的神经，几乎要将她彻底摧毁。然而，在这极致的痛苦中，身体深处那枚属于菲亚梅塔的、一直沉寂的微型跳蛋，仿佛被这狂暴的后庭侵犯所激活，开始在她子宫深处发出微弱却极其高频的震颤！同时，那根依旧塞在她花穴深处的震动棒，也仿佛感应到了主人的征服，再次启动了！低频却深沉的震动，从她花穴内部传来！

三重地狱！

后庭被粗壮肉棒狂暴贯穿的撕裂剧痛！

花穴被震动棒持续搅动带来的空虚快感！

子宫被高频跳蛋震颤引发的酸胀酥麻！

剧痛与快感，两种截然相反、却都强烈到极致的感官刺激，如同最狂暴的电流，在她脆弱的身体里疯狂对冲、爆炸！她的意识被彻底撕碎！身体在菲亚梅塔身下疯狂地、不受控制地抽搐、痉挛，如同坏掉的玩偶！金色的眼眸彻底翻白，口水混合着泪水和鼻涕不受控制地流淌，粉嫩的脚趾死死蜷缩，纤细的腰肢以一种诡异的角度反弓着，仿佛下一秒就要折断！

“呃啊…主人…杀了我…求您…杀了我…”能天使发出破碎的、如同梦呓般的哀求，声音里充满了极致的痛苦和一种扭曲的、渴望解脱的欲望。

菲亚梅塔却在这极致的征服和施虐中，感受到了前所未有的快意巅峰！能天使这彻底崩溃、被痛苦和快感双重折磨到失神的堕落姿态，比她任何一次高潮都更能满足她内心深处的黑暗欲望！她俯下身，滚烫的唇狠狠咬住了能天使纤细的脖颈，留下一个深深的、带着血丝的齿痕！同时，她饱胀的胸脯隔着紧身内衣，用力地挤压、摩擦着能天使同样剧烈起伏的酥胸，硬挺的乳尖相互摩擦、碾压，带来阵阵额外的、令人发狂的刺激！

“想死？”菲亚梅塔在她耳边喘息，声音带着高潮边缘的沙哑和残忍的愉悦，“没那么容易…小狗的身体和灵魂…都是主人的…在主人玩腻之前…你连死的资格…都没有！” 她的抽插变得更加狂暴、迅猛！每一次撞击都仿佛要将能天使钉穿在冰冷的床架上！

在能天使体内肆虐的肉棒剧烈地搏动、膨胀！菲亚梅塔知道自己的极限也到了！她发出一声如同野兽般的咆哮，腰肢用尽全力向前一顶！粗壮的肉棒深深埋入能天使饱受蹂躏的直肠最深处！

噗嗤！噗嗤！噗嗤！

一股股滚烫、浓稠、量多得惊人的白浊精液，如同开闸的洪流，强劲地喷射而出！带着惊人的冲击力，狠狠地灌满了能天使紧窄火热的肠道！滚烫的精液冲刷着敏感的肠壁，填满了每一个褶皱，带来一种被彻底烫伤、彻底玷污的极致触感！

“呜————！！！” 能天使的身体如同被高压电持续击中般剧烈地、高频地抽搐！后庭被滚烫精液灌注的灼烧感和饱胀感，花穴内震动棒持续搅动的空虚快感，子宫深处高频跳蛋震颤引发的酸麻，以及菲亚梅塔咬在脖颈上的剧痛和挤压胸部的摩擦……所有的感官刺激在这一刻达到了毁灭性的顶峰！她的意识彻底被抛入一片空白的、纯粹感官的深渊！没有思想，没有恐惧，没有自我，只剩下被彻底填满、彻底征服、彻底毁灭的极致体验！

菲亚梅塔也随着这剧烈的喷射而绷紧、颤抖。她饱满的胸脯剧烈起伏，小麦色的肌肤上汗如雨下。她自身的花穴口也在这极致的高潮中，不受控制地开合、翕动着，晶莹的爱液如同小溪般汩汩流淌，顺着她结实的大腿内侧滑落，滴落在能天使同样泥泞不堪的腿间。

持续了十几秒的猛烈射精终于结束。菲亚梅塔粗重地喘息着，身体依旧压在能天使身上，深深埋入后庭的肉棒享受着高潮后肠道那痉挛般的紧握。滚烫的精液正从两人紧密交合的菊穴入口边缘，缓缓地、粘稠地溢出。

房间里弥漫的气息更加浓郁、复杂、淫靡，混合着精液的腥膻、肠液的特殊气味、爱液的甜腻、汗水和血腥味。

菲亚梅塔缓缓抬起头，看着身下彻底失去意识、如同破败人偶般的能天使。那张布满泪痕、唾液、鼻涕甚至一丝血迹的小脸上，之前的痛苦挣扎已经完全消失，只剩下一种被彻底玩坏、被彻底掏空的、空洞的平静。她的嘴角甚至无意识地微微张开，一缕混合着唾液和精液的粘稠丝线从嘴角垂落。

菲亚梅塔伸出手，冰冷的指尖带着一种近乎虔诚的占有欲，轻轻拂过能天使汗湿的额发，停留在她脖颈上那个带着血丝的、属于自己的齿痕上。

能天使的身体在无意识中细微地颤动了一下，仿佛对这触碰产生了本能的反应。

菲亚梅塔的唇角，勾起一抹深沉而满足的笑容。她的恶堕天使，终于被她拖入了欲望的最深渊薮，从里到外，每一寸都被彻底打上了她的烙印。这沉沦的果实，比她想象的更加甜美，也更加…令人上瘾。

她俯下身，在能天使失去血色的唇瓣上，印下了一个冰冷而充满占有欲的吻。

“睡吧，我的小狗…”菲亚梅塔的声音低沉如夜风，“等你醒来…主人的‘游戏’…还会继续。”

深渊之下，唯有沉溺。能天使的意识在无边的黑暗中漂浮，身体的每一个细胞都在诉说着被彻底征服的烙印，等待着下一次被主人唤醒，投入更深的、永无止境的欲望漩涡。



`,pu=Object.freeze(Object.defineProperty({__proto__:null,default:nu},Symbol.toStringTag,{value:"Module"})),eu=`---
order: 7
---
# B.N.6 触手服以及能天使~

>被触手服调教的白丝天使


>莫斯提马拿出那套纯白连衣裙时，能天使还以为是普通新衣。
直到穿上才发现裙摆下的白丝袜里藏着无数细小触手，每走一步都在舔舐她的脚趾缝。
“小乐穿这身真可爱。”莫斯提马笑着牵起她的手走向市中心。
胸罩里的触手突然缠住乳尖，能天使腿一软差点跪倒。
“呜…莫斯提马…里面在动…”
“是蕾缪安特意为你定制的触感增强服哦。”
湿滑触须钻进内裤缝隙，同时刺激着前后穴和小肉棒。
白丝玉足在路面反复摩挲，脚趾在袜中蜷缩舒展。
当触手突然顶进子宫模拟点时，能天使的尿道再也锁不住了。
温热液体顺着大腿流淌，在白丝袜上晕开深色水痕。
“呀啊...漏出来了...”


---
P1·触手服
蕾缪乐，代号能天使，此刻正盯着莫斯提马手里那套衣服，琥珀色的眼瞳里满是单纯的好奇。那是一条看起来再普通不过的连衣裙，纯白的底色，简洁的剪裁，裙摆刚好过膝。配套的纯白丝袜叠得整整齐齐放在上面，像两片初冬的新雪。

“喏，试试？”莫斯提马的声音总是带着那种慵懒又神秘的调子，像羽毛搔过耳廓。她晃了晃手里的衣物，嘴角弯起一个好看的弧度，那双仿佛盛着星海的眼眸里，笑意盈盈，看不出半点异样。“新到的款式，感觉特别配你。”

“给我的？”蕾缪乐有些惊喜地接过来，指尖触碰到柔软顺滑的布料，心里的警惕在莫斯提马温和无害的笑容里一点点融化。毕竟，这可是莫斯提马啊。她没多想，抱着衣服就进了更衣室。

门一关，隔绝了外面的视线。蕾缪乐褪下自己的衣物，光洁的肌肤暴露在微凉的空气中。她拿起那条看似无害的连衣裙，套过头顶。布料轻柔地贴合下来，包裹住她纤细的腰肢和挺翘的臀部，触感意外的舒适。接着，是那双白丝袜。

她抬起一只脚，足弓绷出流畅优美的曲线，小巧圆润的脚趾微微蜷缩着，像含苞的花蕾。丝袜的袜口轻轻套上足尖，然后沿着光洁的小腿肌肤，一点点向上延展、包裹。丝滑的材质带来微妙的摩擦感，温顺地服帖着她腿部的每一寸线条，一直到大腿中部才停下。纯白无瑕的丝袜，衬得她本就白皙如玉的肌肤更是莹润生光，那双玉足和小腿被勾勒得无比诱人，足踝纤细，足弓玲珑。

“嗯…还挺舒服的嘛。”蕾缪乐对着镜子转了转，裙摆飞扬，白丝包裹的双腿在镜中划过晃眼的白光。她满意地推开了更衣室的门。

莫斯提马就倚在门框边，看到她出来，眼底的笑意更深了，还带着一丝难以察觉的、欣赏猎物踏入陷阱的玩味。“果然，”她轻轻拍了两下手，“小乐穿白色最好看了，像个小天使。”

这句夸赞让蕾缪乐脸颊微红，心头那点被菲亚梅塔和蕾缪安联手“训练”出的、对他人意图的警惕性，在莫斯提马温柔的目光下几乎消失殆尽。她甚至有点小小的得意，忽略了当丝袜完全包裹住足尖时，袜尖内部似乎有某种极其细微的、如同活物呼吸般的搏动感，稍纵即逝。

“走吧，”莫斯提马极其自然地伸出手，握住了蕾缪乐有些微凉的手腕，“市中心新开了一家甜品店，听说苹果派做得特别地道。”

手腕被莫斯提马温热的掌心包裹，蕾缪乐心头一暖，顺从地被她牵着往外走。初秋午后的阳光暖洋洋的，透过行道树的枝叶洒下斑驳的光点。龙门市区的街道永远喧嚣而充满活力，人流如织，各种店铺的霓虹招牌闪烁着，食物的香气混杂在微尘里飘荡。蕾缪乐努力想让自己看起来正常一点，像任何一个出来逛街的普通女孩。

然而，第一步踏出公寓楼的大门，异变陡生！

脚底心！一股难以言喻的、湿滑又带着奇异吸力的触感，毫无征兆地从丝袜的底部猛地传来！仿佛有无数条细小、冰凉、带着吸盘的小舌头，密密麻麻地贴上了她敏感的足心，并且开始蠕动、舔舐！那感觉无比清晰，正正挠在她最怕痒也最敏感的区域之一！

“噫呀——！”蕾缪乐几乎是触电般地尖叫出声，身体猛地一颤，整个人像被踩了尾巴的猫一样差点原地跳起来。她下意识地就想弯腰去抓自己的脚踝，想把那该死的丝袜扯掉。

“怎么了，小乐？”莫斯提马及时地扶住了她摇摇欲坠的身体，手臂稳稳地托住了她的胳膊，力道温和却不容抗拒。她的声音依旧带着那种让人安心的关切，仿佛对蕾缪乐剧烈的反应感到十分不解。“扭到脚了？”

蕾缪乐的脸瞬间红得像熟透的番茄，一半是羞耻，一半是被那突如其来的、强烈的痒意和更深处某种被撩拨起的奇异酥麻感冲击的。她能感觉到那些细小的“舌头”并没有停止，反而变本加厉，灵活地钻进她的脚趾缝里，带着粘滑的凉意，在趾根柔软敏感的嫩肉上反复刮蹭、吮吸。每一次舔舐都像带着微弱的电流，顺着她的脚心、脚踝、小腿，一路噼里啪啦地往上窜，激得她腿肚子一阵阵发软。

“没、没事！”她几乎是咬着牙挤出这句话，声音带着无法控制的颤抖，努力把重心压在莫斯提马身上，才勉强站稳。金色的眼眸里瞬间蒙上了一层惊慌失措的水雾，长长的睫毛慌乱地扑闪着。“就…就是…袜子里面…好像有东西在动…”她声音越说越小，自己都觉得荒谬。

“动？”莫斯提马微微歪头，表情纯真又带着恰到好处的疑惑。她甚至低下头，认真地看了看蕾缪乐那双包裹在纯白丝袜里的、正因为内部的“骚动”而微微蜷缩扭动的可爱玉足。阳光下，白丝泛着柔和的光泽，脚踝纤细，足弓的线条流畅优美，圆润的脚趾在丝袜下不安地勾动着，透出无声的诱惑和煎熬。“是不是新袜子有点不习惯？摩擦感？或者…静电？”她煞有介事地猜测着，手指却轻轻用力，带着蕾缪乐继续往前走，“走走就好了，适应一下。”

蕾缪乐欲哭无泪。这哪里是什么静电！那湿滑、粘腻、带着明确吮吸和舔舐感的蠕动，怎么可能是死物！可她看着莫斯提马那副“我什么都不知道”的坦然模样，反驳的话堵在喉咙口，一个字也说不出来。她只能被半强迫地拖着迈开脚步。

每一步，都如同踩在滚烫的针尖上，又像是踏进一片由无数细小触手组成的、湿冷的沼泽。足底的“小舌头”们随着她脚掌的抬起、落下，更加卖力地工作起来。当脚掌离地，它们会贪婪地吸吮她的脚心，带来一阵阵钻心的痒；当脚掌落地承受体重，它们又会狡猾地钻进更深的脚趾缝和足弓凹陷处，用带着粘液的冰凉身体挤压摩擦那些最敏感的嫩肉。每一次迈步，都伴随着一股股难以言喻的、混合着强烈痒意和被撩拨起情欲的酸软感，顺着她的神经末梢疯狂上涌。

她努力地夹紧大腿，试图控制住身体内部因为这诡异的足底刺激而开始悄然萌动的热潮。被菲亚梅塔和蕾缪安联手“开发”过的身体，早已变得异常敏感和容易点燃。仅仅是脚底的玩弄，就让她清晰地感觉到腿间那小小的、粉嫩的肉芽，在湿透的内裤布料下，不受控制地悄悄抬起了头，顶端渗出一点羞人的湿意。更深处，那隐秘的、被蕾缪安细致调教过的花径，也似乎有了自己的记忆，开始微微地收缩、悸动，分泌出温热的蜜液。

“呜…”一声细弱蚊吟的呜咽被她死死压在喉咙里。她只能更紧地抓住莫斯提马的手臂，像是抓住唯一的浮木，指尖因为用力而微微泛白。额角渗出细密的汗珠，沿着她泛着不正常红晕的脸颊滑落。金色的眼眸水光潋滟，目光躲闪，不敢去看周围任何可能投来的视线，生怕被人看穿她裙摆和丝袜下正在上演的淫靡戏码。

就在她全部的注意力都被脚下那要命的折磨吸引，苦苦支撑时，胸前毫无预兆地袭来第二波攻击！

仿佛有两根突然活过来的、湿滑冰冷的绳索，猛地从胸罩内侧弹射而出！它们精准无比地缠绕住了她早已挺立充血、变得极其敏感的乳尖蓓蕾！先是猛地一勒！带来一阵尖锐的、几乎让她窒息的刺激感！

“啊嗯——！”蕾缪乐双腿一软，膝盖猛地向前一弯，整个人如同被抽掉了骨头，如果不是莫斯提马眼疾手快地用力揽住她的腰，她绝对会当场瘫软在地！

“小心！”莫斯提马的声音带着一丝“担忧”，手臂稳稳地托住了蕾缪乐几乎要跪倒的身体，将她半抱在怀里。在外人看来，这完全是一个亲密朋友间体贴的搀扶。

只有蕾缪乐自己知道发生了什么。那缠绕在乳尖上的“绳索”并没有因为她的失态而松开，反而开始了更残酷的玩弄！它们不再是简单的束缚，而是像两条最灵巧、最邪恶的小蛇，开始用带着细小凸起和吸盘的冰凉身体，反复地、用力地碾压、摩擦、刮蹭那两颗已经硬得发痛的乳尖！更过分的是，它们的顶端，如同有生命般，开始模仿着吮吸的动作，一下下嘬弄着那敏感的顶点！

“唔…莫斯提马…里面…里面真的有东西…在动…好…好奇怪…”蕾缪乐的声音带着浓重的哭腔和无法抑制的喘息，身体在莫斯提马怀里剧烈地颤抖。她羞耻得几乎要把脸埋进对方的胸口，却又被胸前那强烈的、一波强过一波的快感冲击得头晕目眩。白丝包裹的双腿内侧肌肉紧绷，无意识地互相摩擦着，试图缓解腿间那越来越汹涌的空虚感和灼热。她能清晰地感觉到自己的乳头在胸罩下被那两根“触手”玩弄得肿胀不堪，每一次摩擦都带起强烈的电流，直冲小腹和大脑。

“奇怪？”莫斯提马低下头，温热的呼吸喷洒在蕾缪乐敏感的耳廓，声音压得低低的，带着一丝了然的、恶作剧般的笑意。“哦，你说这个啊？”她轻轻拍了拍蕾缪乐的后背，动作轻柔得像在安抚一只受惊的小动物，吐出的字句却让蕾缪乐如坠冰窟：“这是蕾缪安姐特意为你定制的‘触感增强训练服’哦。菲亚梅塔也觉得很适合你呢。”她故意顿了顿，欣赏着蕾缪乐瞬间瞪大的、盈满震惊和羞愤的金色眼眸，“说是…要帮你更好地‘感受’这个世界呢。”

蕾缪安！菲亚梅塔！这两个名字像两把重锤砸在蕾缪乐的心上。被蕾缪安在昏暗的超市货架间用跳蛋和遥控器公开调教的记忆，被菲亚梅塔下药后无助承欢、甚至被放置play苦苦煎熬的记忆，还有与德克萨斯互相探索时那种隐秘的刺激与背德感…所有的记忆碎片伴随着身体被反复调教出的敏感和渴求，在这一刻轰然爆发！羞耻、愤怒、还有一丝被她们掌控玩弄的、扭曲的熟悉感，如同海啸般将她淹没。

而就在她心神巨震、羞愤欲绝的瞬间，第三波，也是最致命的一击，降临了！

仿佛得到了某种指令，又或者是感应到了她身体深处剧烈翻腾的情潮和湿意，裙摆之下，那早已蠢蠢欲动的“触手”们，终于不再满足于浅尝辄止。几条更加粗壮、更加湿滑、带着粘稠冰凉液体的触须，如同嗅到血腥味的鲨鱼，猛地突破了内裤边缘那脆弱的防线！

一条带着吸盘、顶端膨大的粗壮触手，带着不容抗拒的力道，狠狠挤开了早已泥泞不堪、微微开合的粉嫩花唇，直接闯入了那湿热紧窒的蜜裂深处！它一进入，就开始了高速的、螺旋状的搅动，粗糙的表面刮擦着内壁每一寸敏感的褶皱，每一次抽插都带出大股粘稠的爱液，发出令人面红耳赤的“咕啾”水声。更可怕的是，它的顶端精准地顶住了花心深处那个模拟的、通往宫腔的敏感点，开始施加压力，反复研磨！

“呃啊——！”蕾缪乐的身体如同被高压电击中，猛地向上弹起，又被莫斯提马死死按在怀里。她仰起头，脖颈拉出脆弱的弧线，喉咙里发出濒死般的呜咽，金色的眼眸瞬间失焦，瞳孔涣散。白丝包裹的玉足脚尖死死地蹬着地面，足弓绷紧到了极致，脚趾在丝袜里死命地蜷缩、抓挠，仿佛想抓住什么虚无的依靠。腿间那根早已被忽略的、粉嫩小巧的肉棒，在这突如其来的强烈刺激下，猛地一跳，完全勃起，硬邦邦地顶在内裤前端，顶端的小孔瞬间涌出一大股透明的清液，将内裤染湿了一大片。

但这仅仅是个开始！

另一条同样粗壮、表面布满细密颗粒的触手，带着粘滑的液体，绕到了后方，目标明确地抵住了那从未被如此粗暴对待过的、紧闭的菊蕾！冰冷粘腻的触感让蕾缪乐惊恐地想要夹紧臀瓣，却为时已晚！那触手如同最熟练的攻城锥，借着粘液的润滑，带着一种蛮横的、不容分说的力量，强硬地撑开了那紧致的入口，一寸寸地、坚定地钻了进去！

“不…不要…后面…呜哇——！”撕裂般的胀痛感和一种前所未有的、被强行开拓的羞耻感瞬间击垮了蕾缪乐！她浑身剧烈地痉挛，眼泪如同断线的珠子滚滚而落。后穴被强行进入的痛苦与前方花径被疯狂抽插带来的灭顶快感交织在一起，形成一种撕裂灵魂般的、极致扭曲的刺激！那条后入的触手在进入后，也开始了缓慢而有力的抽送，每一次进出都带出粘腻的声响，粗粝的颗粒摩擦着柔嫩的肠壁。

与此同时，还有几条稍细的触手，如同最殷勤也最恶毒的情人，缠绕上了她腿间那根可怜兮兮、已经完全挺立的小巧肉棒！它们用冰凉滑腻的身体缠绕着柱身，用带着吸盘的顶端嘬弄着敏感的冠状沟和顶端的小孔，甚至模仿着口舌，开始上下套弄！多重刺激如同狂风暴雨，从她身体所有最隐秘、最敏感的入口同时爆发！

“呀啊！停…停下…不行…要…要疯了…莫斯提马…求求你…让它…它们停下…呜呜…”蕾缪乐彻底崩溃了，她像一只被抛上岸的鱼，在莫斯提马怀里剧烈地扭动、挣扎、抽搐，却又被对方的手臂牢牢禁锢。她语无伦次地哀求着，声音破碎不堪，带着浓重的哭腔和无法抑制的、甜腻到骨子里的呻吟。汗水浸透了她的额发，一缕缕艳红的发丝黏在潮红的脸颊和汗湿的颈间。白丝包裹的双腿抖得像风中落叶，玉足徒劳地蹬踹着地面，足尖隔着湿滑的丝袜无助地蜷缩又张开，每一次与地面的摩擦都像是在火上浇油。

身体内部早已乱成一锅滚烫的粥。前方的花径被粗大的触手疯狂地抽插、搅动，每一次都重重地顶撞在那个模拟的宫颈点上，带来一阵阵让她眼前发白的酸胀快感。后穴被强行撑开、填充、摩擦，那粗粝的触感和被侵犯的羞耻感让她浑身战栗。小巧的肉棒被数条冰凉滑腻的触手缠绕、撸动、吮吸，快感尖锐而直接。胸前，那两根玩弄乳尖的触手更是变本加厉，时而用力拉扯，时而快速拨弄，时而用吸盘死死嘬住顶端吮吸！

更可怕的是，这些触手的表面，似乎都在分泌着一种冰凉粘滑的液体。这些液体沾染在她敏感的粘膜和内壁上，带来一种诡异的、火烧火燎般的灼热感，像是某种强效的催情剂，将她身体里每一丝残存的理智都烧成了灰烬，只剩下无边无际的欲望和快感在咆哮、奔涌！

她的身体背叛了她的意志，在多重极致的刺激下，被反复调教得异常敏感的神经如同过载的电路，疯狂地向着那个失控的顶点冲刺！小腹深处，一股滚烫的热流在急剧地汇聚、翻腾、寻找着宣泄的出口！那是来自膀胱的警报，更是身体在极限快感压迫下即将彻底崩溃的征兆！

“呜…呜嗯…不行了…真的…要…要憋不住了…”蕾缪乐绝望地呜咽着，小脸惨白，嘴唇被她自己咬得泛白。她使出全身最后一点力气，拼命地夹紧双腿，试图锁住那汹涌的尿意。白丝包裹的玉足死死地并拢，脚趾在袜子里蜷缩成一团，足弓绷得像一张拉满的弓。身体在莫斯提马怀里抖得如同秋风中的落叶，每一次颤抖都伴随着一阵剧烈的、无法控制的内部痉挛。前方的触手还在不知疲倦地高速抽插，后方的入侵者依旧缓慢而坚定地开拓，胸前的玩弄和腿间的撸动更是片刻不停！粘腻的水声、她破碎的呻吟、粗重的喘息交织在一起，构成一曲淫靡的绝唱。

莫斯提马揽着她，步伐依旧平稳，甚至带着一丝闲庭信步的悠然。她低下头，看着蕾缪乐那张布满泪痕、痛苦与快感交织、濒临崩溃的小脸，看着她那双因极致的刺激而失神涣散、只剩下水光的金色眼眸，看着她艳红凌乱的发丝和被汗水、泪水浸透的狼狈模样。莫斯提马的唇角，勾起了一抹近乎愉悦的弧度。她什么也没说，只是抱着蕾缪乐，站在熙熙攘攘的人行道中央，仿佛在欣赏一件由自己亲手打造、濒临破碎的绝美艺术品。

就在这时！

前方花径深处那条最粗壮的触手，在又一次凶狠的贯穿后，顶端那膨大的部分，带着一种精确到冷酷的计算，如同攻城锤般，狠狠地、结结实实地撞击并短暂地撑开了那个模拟的宫颈口！

“咿咿呀啊啊啊啊——！！！”

蕾缪乐的身体瞬间绷紧到了极限！如同被拉满到极致的弓弦，下一秒就要彻底崩断！一声凄厉到变调、高亢到刺破云霄的尖叫，猛地从她喉咙深处迸发出来！那声音里充满了被推上顶峰的极致快感、被当众玩弄的极致羞耻，以及…彻底失控的绝望！

伴随着这声尖叫，苦苦支撑的最后一道闸门，轰然洞开！

一股温热的、汹涌的、完全不受控制的激流，如同冲破堤坝的洪水，猛地从她痉挛的尿道口喷射而出！滚烫的尿液带着她身体内部灼烧的温度，决堤般倾泻而下！

“噗嗤——哗啦啦…”

清晰的水流冲击声，在喧嚣的街道背景音中，显得如此突兀，又如此刺耳！

温热的液体瞬间浸透了薄薄的内裤布料，然后毫无阻碍地冲破了丝袜袜口的束缚，沿着她白丝包裹的、剧烈颤抖的大腿内侧肌肤，迅猛无比地向下奔流！纯白的丝袜以肉眼可见的速度被染成深色，湿淋淋地紧贴在皮肤上，勾勒出腿根饱满的曲线，一路蔓延到小腿肚，甚至有几股水流顺着她绷直的足踝，滴落在地面，形成一小滩不断扩大的、冒着热气的水渍！

“呜哇——！漏…漏出来了…停…停不下来…啊啊啊…”蕾缪乐彻底崩溃了，大脑一片空白，只剩下灭顶的羞耻感将她吞噬。她像一只被烫伤的小猫，在莫斯提马怀里剧烈地挣扎、抽搐，双腿徒劳地夹紧又松开，反而让失禁更加汹涌。滚烫的尿液混合着花径里被触手疯狂抽插带出的粘稠爱液，将她的下半身彻底浸透，纯白的裙摆下摆和白丝袜一片狼藉，散发着浓烈的、混合着情欲和失禁的腥臊气息。

然而，身体的崩溃并未结束！失禁带来的巨大羞耻感和失控感，如同最后一根稻草，彻底压垮了她早已在快感巅峰摇摇欲坠的神经！

就在尿液还在奔流的同时，前方花径深处，那根死死顶住模拟宫颈口的粗大触手，感受到了她身体内部剧烈的、崩溃式的痉挛，骤然加大了研磨和吮吸的力度！后方那根开拓的触手也猛地一个深入！胸前缠绕乳尖的触手用力拉扯！腿间缠绕小肉棒的触手加快了套弄！

多重叠加的、足以摧毁一切意志的极限刺激，在失禁的顶点，轰然引爆！

“噫噫噫——！！去…去了…要死了啊啊啊——！！！”

蕾缪乐的身体猛地向上反弓，如同被无形的巨锤砸中！喉咙里发出不似人声的、混合着极乐与痛苦的尖锐悲鸣！眼前瞬间被一片刺眼的白光占据！

前方，被触手狂暴蹂躏的花心深处，一股滚烫粘稠的、量多得惊人的透明潮吹液，如同高压水枪般，混合着尿液，猛烈地喷射而出！浇灌在深埋的触手上，又顺着触手和身体的缝隙，混合着尿液，更加汹涌地流淌下来，将白丝袜彻底染成深灰色！

“噗嗤！噗嗤！”同时，她那根被触手紧紧缠绕、套弄的小巧肉棒，也剧烈地搏动起来，一股股稀薄但同样滚烫的透明精水，无法控制地激射而出！尽数喷洒在早已湿透的裙摆内衬和紧贴大腿的白丝上！

后方，被强行进入的菊穴也在高潮的痉挛中死死绞紧，几乎要将那根粗粝的触手绞断！

胸前，乳尖被拉扯到极限，带来撕裂般的快感！

她整个人如同坏掉的玩偶，在莫斯提马怀里剧烈地、无意识地抽搐着，翻着白眼，小嘴大张着，口水混合着泪水顺着下巴不断滴落，滴在她自己湿透的胸口和莫斯提马的衣服上。艳红的短发凌乱地贴在汗湿的额角和脸颊。那双包裹在湿透、深色、一片狼藉的白丝里的玉足，脚尖绷得笔直，足弓弯折出惊心动魄的弧度，脚趾在湿滑粘腻的丝袜里死命地蜷缩着，微微颤抖，仿佛在无声地诉说着这具身体所承受的、超越极限的欢愉与痛苦。

失禁的尿液和喷涌的潮吹混合着少量的精水，在她脚下汇聚成更大的一滩，在午后阳光的照射下，反射着刺眼而淫靡的光泽。

莫斯提马稳稳地抱着这具彻底崩溃、失神、散发着浓烈气味的娇小身体，脸上那抹愉悦的笑意更深了。她甚至微微低下头，凑到蕾缪乐汗湿的、失神的耳边，用只有两人能听到的气音，如同恶魔的低语，轻轻说道：

“看来，‘训练效果’…拔群呢，我们的小猫咪。”
P2·小猫咪~
莫斯提马的低语如同冰锥，狠狠凿穿了蕾缪乐混沌的意识，带来一阵尖锐的刺痛和更深的羞耻。她猛地一颤，原本因高潮余韵而失神涣散的金色眼眸里，骤然凝聚起惊惶的水光。她想挣扎，想逃离这具散发着浓烈腥臊气味、被当众玩弄到失禁崩溃的躯体，想撕碎身上这件邪恶的“衣服”，但身体却像被抽干了所有力气，软绵绵地瘫在莫斯提马怀里，连抬起一根手指都做不到。每一次细微的呼吸都牵动着胸前被触手缠绕、蹂躏的乳尖，带来一阵阵羞耻的刺痛和更深的酸麻。腿间那根小巧的肉棒在短暂的喷射后依旧硬挺着，被冰凉滑腻的触手缠绕、吮吸，残留的快感如同细小的电流，在疲惫的神经上反复跳跃，提醒着她刚才那场当众的、彻底的崩溃。

“呜…” 微弱的呜咽从她咬破的唇瓣间溢出，泪水如同断线的珠子，混着汗水，沿着她潮红未褪、布满泪痕的脸颊滚落，滴在莫斯提马深色的衣袖上，洇开深色的水渍。她徒劳地试图夹紧双腿，却只换来湿透、冰凉的白丝袜互相摩擦的粘腻触感，以及下方花径和后穴里那两条粗壮触手更深的搅动和研磨。失禁的尿液混合着潮吹的液体，依旧在缓慢地从她无法闭合的入口和尿道渗出，沿着湿透的白丝袜内侧，滑落到她因紧绷而微微颤抖的足踝，带来一片持续的、冰凉又灼心的湿意。纯白的丝袜早已面目全非，深灰一片，紧紧贴在肌肤上，勾勒出大腿饱满的线条和小腿纤细的轮廓，足尖在湿滑的袜子里无助地蜷缩着，像受冻的小鸟。

“别哭啊，小乐，”莫斯提马的声音带着一种奇异的温柔，仿佛刚才那场残酷的调教与她无关。她甚至腾出一只手，用指腹轻轻擦去蕾缪乐脸颊上的泪水，动作轻柔得像对待易碎的瓷器。“你看，这不是‘适应’得很好吗？蕾缪安姐和菲亚梅塔知道了一定会很欣慰的。” 她的话语如同淬毒的蜜糖，每一个字都精准地戳在蕾缪乐最敏感的羞耻点上。

蕾缪乐猛地摇头，艳红的发丝甩动，沾着汗水泪水贴在皮肤上，狼狈不堪。“骗…骗人…放…放开我…” 她声音嘶哑，带着浓重的哭腔和绝望的哀求，金色的眼眸里充满了被背叛的痛苦和无处宣泄的愤怒。

“放开？” 莫斯提马挑了挑眉，那双盛着星海的眼眸里掠过一丝玩味的光。她非但没有松手，反而将蕾缪乐搂得更紧了些，几乎是将她半抱半拖地往前移动。“我们可是要去吃苹果派的，小天使。” 她的脚步依旧从容，仿佛怀里抱着的不是一个刚刚当众失禁高潮、浑身狼藉的女孩，而只是一个玩累了需要休息的妹妹。

每一步的移动，对于蕾缪乐而言都是新一轮的酷刑。足底的细小触手们再次活跃起来，它们贪婪地吮吸着她敏感的足心，舔舐着脚趾缝里残留的湿滑液体（失禁的尿液、潮吹、触手粘液），每一次蠕动都带来钻心的痒意和更深处被勾起的、无法熄灭的酥麻。胸前缠绕乳尖的触手仿佛被重新注入了活力，开始用带着凸起的冰凉身体，更加用力地碾压、刮蹭那两颗早已红肿不堪、极度敏感的蓓蕾，顶端的吸盘嘬弄着，带来一阵阵让她眼前发黑的尖锐快感。

更要命的是，下方！那两条深埋在她身体里的粗壮触手，在短暂的“休憩”后，开始了新一轮的、更加狂暴的征伐！

花径深处的那一根，猛地加大了抽插的力度和速度！粗粝的表面高速刮擦着内壁敏感的褶皱，每一次贯穿都带着蛮横的力量，重重地撞击在那个模拟的宫颈点上，带来一种灵魂都要被顶穿的酸胀感和灭顶的快意！顶端膨大的部分，甚至开始模拟着射精般的搏动，每一次搏动都向内喷射出一股冰凉粘滑的液体！这液体如同强效的催情剂，沾染在被反复蹂躏的内壁上，瞬间点燃更猛烈的火焰，带来一种火烧火燎般的灼热空虚感，让她渴望着更粗暴、更彻底的填满！

“呃啊——！慢…慢点…里面…里面好胀…呜…子宫…要…要被顶穿了…哈啊~！”蕾缪乐破碎的呻吟再次失控地溢出，身体在莫斯提马怀里剧烈地颤抖、抽搐。她的小腹深处传来一阵阵剧烈的痉挛，刚刚才经历过高潮的花径，在这狂暴的侵犯下，竟然又开始不受控制地分泌出大量温热的蜜液，混合着触手注入的冰凉粘液和被反复撞击宫颈点带来的奇异酸胀感，形成一种难以言喻的、几乎要将她逼疯的混合刺激。

而后方！那条开拓着菊穴的触手，也开始了更加深入的探索！它不再满足于浅层的抽送，而是带着一种冷酷的耐心，缓慢而坚定地向着更深、更紧致的肠腔深处钻去！粗粝的颗粒状表面刮擦着柔嫩的肠壁，带来一种混合着撕裂痛楚和奇异酥麻的刺激感。更可怕的是，它似乎在旋转！以一种缓慢却不容抗拒的力道，在紧窒的甬道内螺旋推进！每一次旋转深入，都伴随着肠壁被强行扩张、摩擦的可怕感觉，带来一种被从内部彻底翻搅、侵占的极致羞耻！

“不…后面…不行…好痛…呜…要被…被撑开了…莫斯提马…求求你…让它…停下来…”蕾缪乐哭喊着，身体因为后方剧烈的侵入而本能地向前弓起，却又被前方凶悍的抽插顶得向后仰倒，整个人如同暴风雨中的小船，在莫斯提马的臂弯里无助地颠簸。白丝包裹的玉足脚尖死死地蹬着地面，足弓绷得像拉满的弓弦，脚趾在湿透粘腻的丝袜里死命地抓挠，徒劳地想寻找一丝支撑。腿间那根小巧的肉棒，在前后的夹击和缠绕触手的持续套弄下，可怜地颤抖着，顶端的小孔不断渗出透明的清液，混入下方早已一片狼藉的混合液体中。

就在这时，莫斯提马停下了脚步。她们站在了一家装潢精致、弥漫着甜美香气的甜品店门口。巨大的落地玻璃窗清晰地映照出两人的身影：莫斯提马优雅从容，而她怀里的蕾缪乐，红发凌乱，泪痕交错，眼神涣散迷离，脸颊潮红未退，纯白的连衣裙下摆和白丝袜湿透深染，紧贴着肌肤，勾勒出狼狈不堪的轮廓，双腿还在无法控制地微微颤抖。

玻璃窗后，是几桌正在享受午后甜点的客人。隔着透明的玻璃，他们的目光好奇地投了过来。

巨大的羞耻感如同海啸，瞬间将蕾缪乐淹没！她像一只受惊的兔子，猛地将脸死死埋进莫斯提马的胸口，身体僵硬得像一块石头，连颤抖都停止了。她能感觉到那些目光，如同实质的针，扎在她湿透的裙摆和白丝袜上，扎在她剧烈起伏的胸口，扎在她被触手反复蹂躏的、最羞耻的部位！她甚至能想象出那些人看到她这副模样时脸上的表情——好奇、疑惑，或许还有一丝不易察觉的鄙夷。

“不…不要看…让我…进去…”她带着浓重鼻音的哀求闷闷地从莫斯提马胸前传来，声音抖得不成样子。

“进去？”莫斯提马的声音带着一丝笑意，她甚至伸出手，安抚般轻轻拍了拍蕾缪乐剧烈起伏的后背。这个动作在外人看来无比体贴，只有蕾缪乐知道，莫斯提马的手掌落下时，似乎不经意地压在了她后背某个位置。

嗡——！

一股细微但清晰的震动感，瞬间传遍了蕾缪乐的全身！不是来自外部，而是来自她身体内部！那根深埋在她花径深处的粗大触手，毫无预兆地开始了高频的震动！震动的幅度并不大，却带着一种极其刁钻的频率，精准地作用在被反复撞击的宫颈模拟点和内壁敏感的G点上！

“嗯啊——！” 一声短促的、拔高的甜腻呻吟猛地从蕾缪乐喉咙里冲出！她身体剧烈地一弹，如同被电击，埋在莫斯提马胸前的脸瞬间变得滚烫。那震动带来的快感太过尖锐、太过直接，如同无数细小的羽毛同时搔刮着她神经最末梢的痒处，让她瞬间头皮发麻，腰肢酸软得几乎融化。前方的花穴在震动下疯狂地痉挛、收缩，死死绞紧那根作恶的触手，试图将它挤出，却又带来更强烈的摩擦快感。后方的入侵者也仿佛被激活，旋转的速度微微加快，粗粝的颗粒刮擦着肠壁，带来一阵阵让她脚趾蜷缩的、混合着痛楚的奇异酥麻。

更要命的是，胸前那两根缠绕乳尖的触手，也同步开始了高频的震动！冰凉的、带着凸起和吸盘的触手表面，以同样的频率疯狂摩擦、碾压着极度敏感的乳尖！尖锐的快感如同电流，瞬间穿透她的胸腔，直冲天灵盖！

“呜…不…停下…里面…在震…好…好痒…哈啊…不行…”蕾缪乐死死咬住下唇，试图阻止那羞耻的呻吟溢出，身体却在莫斯提马怀里筛糠般抖动。她的额角渗出大颗大颗的汗珠，沿着鬓角滑落。白丝包裹的双腿内侧肌肉紧绷到了极致，互相摩擦着，试图缓解那灭顶的酥麻，却只让腿间的湿滑触感更加清晰。她能感觉到自己腿间那根小巧的肉棒在震动和多重刺激下，硬得发痛，顶端的小孔如同失控的水龙头，源源不断地渗出清液，将内裤前端彻底濡湿。

莫斯提马仿佛没听见她的哀求，反而抱着她，抬步走向甜品店那扇光洁明亮的玻璃门！门上的铃铛发出清脆悦耳的“叮铃”声。

这声音在蕾缪乐听来如同丧钟！她惊恐地瞪大眼睛，金色的瞳孔因为极致的恐惧而收缩。不要进去！绝对不能进去！她这副样子，这身湿透散发着异味的衣服，还有身体里那些疯狂震动的触手…一旦进去，就全完了！她会被所有人看光！会被当成变态！

“不要——！”她用尽全身残存的力气，发出一声凄厉的尖叫，双手死死抓住莫斯提马胸前的衣襟，指甲几乎要嵌进去。她拼命地摇头，艳红的发丝甩动，泪水再次汹涌而出。“求求你…莫斯提马…别…别进去…我…我会死的…真的会死的…”她的声音充满了崩溃的绝望，身体因为极度的恐惧和体内触手持续不断的震动刺激而剧烈痉挛。

莫斯提马终于停下了脚步，就在距离玻璃门只有一步之遥的地方。她低下头，看着怀里彻底崩溃、如同惊弓之鸟般的蕾缪乐。那张布满泪痕的小脸上写满了恐惧和哀求，金色的眼眸水光盈盈，脆弱得仿佛一碰即碎。湿透的白丝袜紧贴着她颤抖的玉腿，勾勒出诱人又狼狈的线条，足尖在袜子里无助地蜷缩着。莫斯提马眼底那丝玩味更深了，她微微勾起唇角。

“这么害怕？”她的声音轻柔得像情人的低语，手指却悄然滑向蕾缪乐纤细的腰侧，那里似乎有一个极其微小的、与连衣裙布料融为一体的凸起。

蕾缪乐的心脏瞬间提到了嗓子眼！她预感到即将发生更可怕的事情！

莫斯提马的手指，在那个凸起上，轻轻按了下去。

咔哒。

一声极其细微的、仿佛开关被拨动的轻响。

下一秒，蕾缪乐身体里所有的触手，骤然停止了震动！

那灭顶的、如同跗骨之蛆的酥麻快感瞬间消失，只剩下被过度玩弄后的酸胀、麻木和一种诡异的、巨大的空虚感。花径和后穴里粗壮的触手依旧深埋着，却如同蛰伏的凶兽，暂时停止了狂暴的动作。胸前缠绕乳尖的触手也放松了力道，只是依旧冰冷地贴伏着。足底的“小舌头”们也安静了下来。

突如其来的平静，反而让蕾缪乐有些茫然失措。她剧烈地喘息着，身体因为之前的挣扎和恐惧依旧在微微颤抖，泪水无声地滑落。劫后余生的庆幸感只持续了不到一秒，就被更深的恐惧取代——莫斯提马想做什么？

“看，小乐，”莫斯提马的声音带着一丝哄劝，她微微侧身，让蕾缪乐能透过巨大的玻璃窗，清晰地看到甜品店内部温馨的场景。温暖的灯光，精致的甜点，悠闲的客人，空气中仿佛都飘荡着奶油的甜香。“很诱人，对吧？尤其是橱窗里那个淋满了焦糖的苹果派。”

蕾缪乐的目光不由自主地被吸引过去。那金黄色的派皮，饱满的苹果馅料，晶莹剔透的焦糖…确实是她平时最无法抗拒的诱惑。如果是平时，她早就欢呼着冲进去了。但现在…

她的视线扫过那些坐在桌边的客人。一对年轻的情侣在分享一块蛋糕，女孩脸上带着甜蜜的笑容；几个穿着制服的学生在叽叽喳喳地聊天；一位穿着得体的女士正优雅地用叉子切下一小块慕斯…

然后，她的目光，对上了玻璃窗后，一个靠窗位置的小女孩好奇的视线。

那小女孩大约七八岁，梳着可爱的羊角辫，正一边舔着冰淇淋勺，一边睁着圆溜溜的大眼睛，一眨不眨地看着玻璃窗外——看着被莫斯提马半抱在怀里，头发凌乱、满脸泪痕、衣衫不整（湿透的裙摆紧贴大腿，白丝袜深染污渍）的她！

轰——！

巨大的羞耻感如同岩浆般瞬间冲上头顶，烧得蕾缪乐眼前发黑！她感觉自己像是被剥光了衣服扔在聚光灯下，所有的狼狈、所有的污秽都被那个天真无邪的目光看了个一清二楚！她猛地低下头，再次将滚烫的脸死死埋进莫斯提马的怀里，身体抖得如同风中的落叶，喉咙里发出压抑的、小动物般的呜咽。

“啧，真是可惜。”莫斯提马遗憾地叹了口气，仿佛真的在为错过苹果派而惋惜。她抱着蕾缪乐，转身离开了那扇如同审判之门的玻璃窗，走向旁边一条相对僻静、种满行道树的小巷。“看来小乐还没准备好享受甜点呢。”

巷子里光线稍暗，行人稀少。微凉的风吹过，带来一丝清爽，却吹不散蕾缪乐身上的粘腻和那浓烈的、混合着情欲与失禁的腥臊气息。离开了那些可能的目光，蕾缪乐紧绷的神经稍微放松了一丝丝，但身体内部的空虚感和被触手填满的异样感依旧清晰无比。胸前、腿间、足底，那些冰凉的触手依旧存在，如同无数条毒蛇，安静地盘踞着，随时可能再次苏醒。

莫斯提马抱着她，走到巷子深处一个相对隐蔽的角落，背靠着爬满藤蔓的砖墙。她并没有将蕾缪乐放下，而是依旧让她靠在自己怀里，只是稍微调整了一下姿势，让她背对着自己，面朝着墙壁。

这个姿势让蕾缪乐更加不安。她看不到莫斯提马的表情，只能感觉到对方温热的呼吸喷洒在自己的后颈，带来一阵细微的战栗。她能感觉到莫斯提马的一只手依旧环在她的腰间，而另一只手…似乎正在她身后摆弄着什么。

“既然吃不到苹果派，”莫斯提马的声音贴着蕾缪乐的耳廓响起，带着一种令人心悸的、慢条斯理的恶意，“那就先来点…餐前开胃小菜吧？” 她的尾音微微上扬，带着一丝危险的愉悦。

蕾缪乐的心猛地一沉！她还没来得及反应，就感觉到莫斯提马那只在她身后的手，似乎按下了某个东西。

嗡——！

比刚才在店门口强烈数倍的高频震动，如同汹涌的电流，瞬间从她身体的最深处、从那些蛰伏的触手内部爆发出来！这一次，不再是单一的部位！是所有的触手同时启动了最高强度的震动模式！

“呃啊——！！！”

蕾缪乐的身体如同被高压电贯穿，猛地向上弹起，脑袋重重撞在莫斯提马的下颌上，但她已经感觉不到疼痛！极致的、毁灭性的快感如同海啸，瞬间将她吞没！

花径深处，那根粗壮的触手疯狂地震动着！粗粝的表面以惊人的频率刮擦、碾压着内壁每一寸敏感的褶皱，每一次震动都带着狂暴的力量，狠狠撞击着那个模拟的宫颈点！顶端膨大的部分如同一个高速运转的震动棒，死死抵住那一点，疯狂地研磨、旋转！冰凉的粘液被震成细密的泡沫，伴随着每一次凶悍的撞击，狠狠灌入深处！

后方！那条深埋菊穴的触手同样开启了最高频的震动模式！粗粝的颗粒状表面在紧窒的肠腔内疯狂摩擦、旋转，如同一个高速的砂轮，带来一种混合着剧烈痛楚和被强行开拓到极致的、扭曲的酥麻快感！肠壁被强行扩张、摩擦，仿佛要被这狂暴的震动从内部撕裂！

胸前！缠绕乳尖的触手以同样的高频疯狂碾压、摩擦、吮吸着那两颗早已不堪蹂躏的蓓蕾！尖锐的快感穿透胸腔，让她几乎窒息！

足底！无数的细小触手也加入了这场狂欢，用带着吸盘的冰凉身体，高频地舔舐、吮吸着她敏感的足心、脚趾缝、足弓！剧烈的痒意混合着酥麻，如同无数蚂蚁在啃噬！

腿间！缠绕着小巧肉棒的触手们更是变本加厉，疯狂地套弄、嘬吸着顶端的小孔！快感如同烧红的钢针，狠狠刺入她的大脑！

多重叠加的、狂暴到极致的震动刺激，如同无数把高速电钻，同时在她身体所有最敏感、最脆弱、最羞耻的部位疯狂开凿！快感不再是浪潮，而是毁灭性的核爆！瞬间摧毁了她所有的感知、所有的理智、所有的羞耻心！

“咿呀啊啊啊啊啊——！！！！不——！！！停…停下…会…会坏掉的…真的…要坏掉了啊啊啊——！！！”

蕾缪乐的尖叫凄厉到破音，完全失去了人类的音调，变成一种濒死的、野兽般的哀嚎！她的身体在莫斯提马怀里疯狂地反弓、扭动、痉挛，如同一条被扔上岸的、垂死挣扎的鱼！四肢剧烈地抽搐，白丝包裹的玉足在空中死命地蹬踹、踢打着空气，足尖绷直指向天空，脚趾在湿透粘腻的丝袜里蜷缩到极限，足弓弯折出惊心动魄的弧度！金色的眼眸彻底翻白，瞳孔涣散，口水混合着泪水如同小溪般从她大张的嘴角汹涌流出，沿着下巴、脖颈，一直流淌到被汗水浸透的胸口。艳红的短发被汗水彻底打湿，凌乱地黏在额头、脸颊和脖颈上。

身体内部早已是一片被彻底蹂躏的废墟。花径在狂暴的震动抽插下疯狂痉挛，如同濒死的藤蔓死死绞紧那根凶器，却只带来更强烈的摩擦快感。模拟的宫颈口被那高速震动的顶端死死顶住、研磨，带来一种仿佛子宫都要被震碎、被吸出来的恐怖快感和酸胀！后方的菊穴被粗粝的震动触手强行撑开到极限，肠壁在剧烈的摩擦下火辣辣地疼，却又被那扭曲的快感折磨得欲仙欲死！

膀胱早已失控过一次，此刻在如此狂暴的刺激下，竟然再次传来了剧烈的尿意！但这一次，还没等尿液涌出，一股更加强大、更加滚烫、更加汹涌的洪流，从她身体的最深处，从那个被疯狂震动的龟头死死顶住的模拟宫颈口，如同被压抑了万年的火山，猛烈地、高压喷射般爆发出来！

“噗嗤——哗啦啦啦——！！！”

滚烫粘稠的、散发着浓郁甜腥味的透明潮吹液，混合着之前残留的尿液和触手粘液，如同决堤的洪水，从两人身体紧密嵌合的缝隙中，从她无法闭合的花穴入口，猛烈地、呈喷射状激射而出！

这一次的量，远超之前当众失禁的数倍！滚烫的液体如同高压水枪，猛烈地冲刷在莫斯提马深色的裤腿上，发出清晰的撞击声！更多的液体则顺着蕾缪乐剧烈颤抖的白丝大腿内侧，如同瀑布般奔流直下！纯白的丝袜瞬间被彻底浸透、染成深灰色，紧紧贴在肌肤上，勾勒出腿根饱满的曲线和湿淋淋的轮廓。粘稠的液体甚至飞溅到巷子的砖墙上，留下点点湿痕！

与此同时，她腿间那根被触手疯狂套弄的小巧肉棒，也在这灭顶的刺激下，达到了前所未有的顶峰！它剧烈地搏动着，一股股稀薄但滚烫的透明精水，如同失控的小型喷泉，“噗嗤！噗嗤！”地有力喷射而出！尽数喷洒在她早已湿透的裙摆内衬和紧贴大腿的白丝上，留下点点晶莹的湿痕！

后方，菊穴死死绞紧，几乎要将那根震动的凶器绞断！

胸前，乳尖传来被拉扯到极限的、撕裂般的快感！

蕾缪乐的身体绷紧到了人类所能承受的极限！如同被拉满到极致的弓弦，下一秒就要彻底崩断！所有的声音都卡在了喉咙深处，只剩下无声的、剧烈的抽搐和痉挛！翻白的眼眸里失去了所有神采，只剩下空洞和极致的快感风暴席卷后的残骸。口水如同小溪般从她微张的嘴角不断流淌。湿透的白丝玉足在空中最后无力地蹬踹了几下，足尖绷直，脚趾蜷缩，最终软软地垂落下来，微微颤抖着。

潮吹的洪流依旧在喷射，如同她生命最后力量的宣泄，量多得惊人，持续了足足十几秒，才渐渐变成断断续续的流淌。混合着尿液、潮吹液、少量精水和触手粘液的粘稠液体，在她脚下汇聚成一大滩散发着浓烈腥甜气息的污浊水洼。

莫斯提马稳稳地抱着这具彻底崩溃、失神、如同被彻底玩坏人偶般的娇小身体，感受着她剧烈的抽搐渐渐平息，只剩下细微的、无意识的颤抖。她低下头，看着蕾缪乐那张布满泪痕口水、双目空洞失焦、艳红发丝凌乱黏在脸上的小脸，看着她湿透深染、一片狼藉的白丝袜和裙摆，看着她身下那滩宣告着彻底征服的污浊液体。莫斯提马那双盛着星海的眼眸深处，终于掠过一丝纯粹的、冰冷的满足。

她俯身，凑到蕾缪乐汗湿的、毫无反应的耳边，用气音，如同恶魔最后的烙印，轻轻说道：

“看来，开胃小菜…也很合小猫咪的胃口呢。”

巷子里，只剩下微风拂过树叶的沙沙声，以及怀中少女那微弱到几乎听不见的、破碎的喘息。
P3·终焉的甘甜
巷子深处，藤蔓斑驳的阴影覆盖着相拥的两人。蕾缪乐的身体依旧在莫斯提马怀中剧烈地、无意识地抽搐着，如同被高压电流反复蹂躏后的残骸。灭顶的高潮如同陨石撞击，将她所有的意识都撞成了碎片，只剩下身体本能的、剧烈的痉挛反应。白丝包裹的玉足脚尖死死绷直，足弓弯折出惊心动魄的弧度，湿透深染的袜尖在昏暗的光线下微微颤抖。大量的、混合着失禁尿液、喷涌潮吹、少量精水和触手冰凉粘液的污浊液体，依旧在断断续续地从她无法闭合的花穴入口和尿道渗出，沿着她湿淋淋、紧贴肌肤的白丝大腿内侧，粘稠地向下滑落，在她虚软垂落的足尖下方，汇聚成更大一滩散发着浓烈腥甜气息的水洼。每一次微弱的抽搐，都会带出更多粘腻的液体，滴落在那滩水洼里，发出细微的、令人面红耳赤的“滴答”声。

她的头无力地后仰，靠在莫斯提马的肩窝。金色的眼眸空洞地大睁着，瞳孔涣散失焦，倒映着巷子上方狭窄的、灰蓝色的天空，却没有任何神采。泪水混合着失控流出的涎水，在她布满潮红、泪痕交错的小脸上肆意流淌，沿着下巴、脖颈，一路蜿蜒到她被汗水浸透、微微起伏的胸口，将衣料染成深色。艳红的短发凌乱地黏在汗湿的额角、脸颊和莫斯提马的肩头，如同被暴雨打湿的火焰。微张的唇瓣间，发出破碎的、不成调的细微呜咽，伴随着急促而虚弱的喘息，每一次呼吸都牵动着胸前被触手缠绕、依旧微微搏动的敏感乳尖，带来一阵阵残余的、深入骨髓的酥麻和酸胀。

莫斯提马稳稳地抱着这具彻底崩溃的娇躯，那双盛着星海的眼眸低垂着，静静地审视着蕾缪乐此刻狼狈不堪却又透着极致脆弱和淫靡的模样。她脸上那抹掌控全局的、冰冷的满足感并未褪去，但眼底深处，似乎有什么更深沉、更粘稠的东西在翻涌——一种近乎怜惜的、却又混合着更强烈占有欲的复杂情绪，如同看着一件被自己亲手打碎、却又无比珍爱的艺术品。

“真是…被玩坏了呢。”莫斯提马的声音很轻，带着一丝慵懒的沙哑，如同叹息。她抬起一只手，没有去触碰蕾缪乐依旧被触手占据的身体，而是缓缓地、带着一种近乎虔诚的温柔，拂开了黏在她汗湿额角的几缕艳红发丝。指尖带着薄茧，轻轻擦过她滚烫的、布满泪痕的脸颊，感受着那脆弱肌肤下细微的颤抖。

这个轻柔的触碰，却像是一道微弱的电流，刺穿了蕾缪乐混沌的感知。她那涣散的瞳孔极其细微地收缩了一下，空洞的金色眼眸里，似乎有了一丝微弱的聚焦。她极其缓慢地、艰难地转动了一下眼珠，视线模糊地对上了莫斯提马低垂的目光。

那目光里，没有了之前的戏谑和冷酷，反而沉淀着一种她从未见过的、深不见底的幽暗情绪。像是暴风雨后平静却暗流汹涌的海面，带着一种令人心悸的专注和…某种难以言喻的吸引力。

“呜…莫…莫斯提…马…”蕾缪乐破碎地、含糊不清地吐出这个名字，声音嘶哑得如同砂纸摩擦。更多的泪水不受控制地涌出，顺着眼角滑落。她的身体还在本能地抗拒着体内那些蛰伏却依旧存在的触手带来的异物感和残余的刺激，微微瑟缩着，却又因为极度的脱力和快感余韵而无法逃离这个怀抱。

莫斯提马没有回应她的呼唤。她的视线，落在了蕾缪乐那微微张开的、沾满了晶莹涎水和泪水的唇瓣上。那唇瓣因为之前的尖叫和撕咬而有些红肿，此刻微微颤抖着，吐露着灼热而甜腻的气息，如同邀请。

一种强烈的、几乎无法抑制的冲动，瞬间攫住了莫斯提马。那是一种想要品尝、想要占有、想要将这只被自己彻底摧毁又重塑的小猫身上最后一丝气息都吞噬殆尽的欲望。

她不再犹豫。

揽在蕾缪乐腰后的手臂猛地收紧，将她娇小颤抖的身体更加紧密地贴向自己。同时，她低下头，没有任何预兆地、带着一种不容抗拒的强势，精准地捕获了那双微张的、诱人的唇瓣！

“唔——？！”

蕾缪乐涣散的意识被这突如其来的、炙热而霸道的吻瞬间冲击！她猛地睁大了眼睛，金色的瞳孔因为震惊而收缩！莫斯提马的唇瓣带着灼热的温度，带着一丝淡淡的、属于她自己的独特冷冽气息，狠狠地压了下来！那力道带着一种近乎掠夺的凶狠，瞬间封堵了她所有破碎的呜咽和喘息！

这不是温柔的安抚，而是更深的、带着情欲烙印的侵略！

蕾缪乐的大脑一片空白。身体内部的空虚感和被填满的异样感还在持续，唇齿间突然被强行侵入的灼热触感，让她本就混乱的感官瞬间过载！她下意识地想要挣扎，想要偏头躲开，但莫斯提马扣在她后脑勺的手掌带着不容置疑的力道，将她牢牢固定住！

莫斯提马的吻技高超得近乎残酷。她的唇舌没有给她任何适应的时间，便强硬地撬开了她因为震惊而微松的齿关，带着一种攻城略地的气势，长驱直入！

“呜…嗯…” 蕾缪乐所有的反抗都被堵在了喉咙深处，化作一声模糊的、带着哭腔的鼻音。莫斯提马滚烫的舌头如同灵巧而霸道的征服者，瞬间席卷了她整个口腔！它贪婪地舔舐过她敏感的上颚，带来一阵强烈的、让她头皮发麻的痒意；它用力地摩擦、吮吸着她柔软的舌面，带着一种不容抗拒的吸力；它甚至狡猾地探入更深，模仿着某种交媾的节奏，挑逗着她脆弱的喉头软肉！

唾液在两人紧密交缠的唇舌间疯狂交换、滋生。莫斯提马的津液带着一种奇异的、微凉又灼热的味道，混合着她自己口中残留的甜腥气息（失禁的尿液、潮吹液、触手粘液混合的味道），形成一种极其淫靡的、令人作呕又令人沉沦的滋味。蕾缪乐被吻得几乎窒息，鼻腔里发出急促的、带着水音的哼唧。大量的涎水不受控制地从她被强行撬开的嘴角溢出，沿着下巴滑落，与脸上的泪水汗水混合，滴落在两人紧贴的胸口。

而就在这深吻进行的同时，莫斯提马那只原本揽在蕾缪乐腰间的手，开始了更加邪恶的举动！

她没有直接去触碰蕾缪乐被触手服覆盖的身体，而是隔着那层早已被各种体液浸透、变得半透明的纯白连衣裙布料，开始用力地、带着明确目的性地按压！

她的手掌先是重重地按在了蕾缪乐平坦的小腹下方，那正是她花穴深处被触手占据的位置！

“嗯呜——！！！” 蕾缪乐被深吻的身体猛地一僵，喉咙里发出被堵住的、痛苦又甜腻的呜咽！莫斯提马手掌的按压，如同一个精准的开关！隔着湿透的布料施加的压力，瞬间传递到了她身体内部！那根深埋在她花径深处、刚刚才平静下来的粗壮触手，仿佛被这股外力猛地激活了！

嗡——！

比之前任何一次都要更加狂暴、更加凶悍的高频震动，毫无预兆地从花穴深处猛烈爆发！粗粝的触手表面如同无数高速旋转的砂轮，疯狂地刮擦、碾压着内壁早已红肿不堪的敏感褶皱！坚硬的顶端带着毁天灭地的力量，死死顶住那个模拟的宫颈点，开始了丧心病狂的旋转研磨和冲击！每一次撞击都带着要将她灵魂都撞碎的力道！冰凉粘滑的催情液体被剧烈地震成泡沫，狠狠灌入她身体的最深处！

紧接着，莫斯提马的手掌顺着蕾缪乐湿透的、紧贴肌肤的裙摆曲线，猛地向上滑动，用力地、隔着布料按压在了她剧烈起伏的胸口！

“呃啊——！！！” 蕾缪乐的身体如同被无形的巨锤砸中，猛地向上反弓！胸前那两根缠绕在乳尖上的触手，在莫斯提马手掌的按压下，如同被注入了狂暴的能量！它们猛地收紧，勒得乳尖几乎要断裂！同时开启了最高频的震动模式！带着凸起和吸盘的冰凉表面，如同电锯般疯狂地摩擦、碾压、吮吸着那两颗早已饱受蹂躏、肿胀到极致的蓓蕾！尖锐的快感如同烧红的烙铁，狠狠烫穿她的胸腔！

这还没完！莫斯提马的手掌并未停留，它带着一种冷酷的节奏感，继续向下滑动，隔着湿透粘腻的白丝袜，用力地按压在了蕾缪乐大腿内侧最敏感、最靠近腿根的位置！那里，正是她小巧肉棒被触手缠绕的地方，也是花穴和后穴入口最接近的区域！

“咿咿呀啊啊啊——！！！不——！！！”

蕾缪乐彻底疯了！莫斯提马手掌隔着丝袜的按压，如同点燃了最后的炸药桶！缠绕在她小巧肉棒上的触手瞬间疯狂套弄！后穴深处那条蛰伏的、粗粝的触手也开始了最高频的震动和旋转深入！足底的细小触手更是变本加厉地吮吸舔舐！多重叠加的、狂暴到极致的快感，如同无数颗在她体内同时引爆的炸弹！瞬间将她残存的所有意识彻底炸成了齑粉！

她的身体在莫斯提马怀里疯狂地弹跳、痉挛、抽搐！如同被扔进滚油里的活虾！白丝包裹的双腿在空中死命地蹬踹、踢打，湿透深染的袜尖划出凌乱的弧线，足弓绷紧到了极限，脚趾在粘腻的丝袜里蜷缩到几乎要抽筋！她的头被莫斯提马死死扣住，承受着那掠夺般的深吻，喉咙里只能发出被堵住的、濒死般的、不成调的尖细呜咽和破碎的呻吟。大量的涎水混合着泪水，如同决堤般从她被强行撬开的嘴角汹涌溢出，沿着脖颈流下，将两人紧贴的胸口彻底濡湿。翻白的金色眼眸里只剩下纯粹的、被快感彻底支配的空洞。

而莫斯提马，一边用唇舌霸道地掠夺着蕾缪乐口中所有的气息和津液，感受着她小舌无力的抵抗和颤抖，一边用那只作恶的手，隔着湿透的布料和白丝，精准而冷酷地按压着她身体各处敏感的开关，操控着那些致命的触手，将这具娇小的身体推向一个又一个更加疯狂、更加毁灭性的快感巅峰！

她的吻带着一种奇异的怜惜与暴虐交织的复杂情感。时而用力地吮吸，仿佛要将蕾缪乐的灵魂都吸出来；时而又会放缓节奏，用舌尖温柔地舔舐她被咬破的唇角和口腔内壁，带来一阵阵细微的、带着安抚意味的痒意。但每一次短暂的温柔之后，必定是更加凶狠的掠夺和按压，引发蕾缪乐更剧烈的颤抖和崩溃！

蕾缪乐的意识在极致的快感和窒息的深吻中彻底沉沦、湮灭。她早已分不清痛苦与欢愉的界限，身体完全沦为了欲望和触手操控的傀儡。在莫斯提马又一次隔着湿透的白丝袜、用力按压她大腿内侧敏感的开关时——

“噗嗤——哗啦啦啦——！！！”

比之前任何一次都要更加汹涌、更加滚烫、更加粘稠的透明潮吹液，如同开闸的熔岩，混合着失禁的尿液和触手粘液，从她剧烈痉挛、无法闭合的花穴入口猛烈地、高压喷射而出！滚烫的液体带着惊人的冲击力，瞬间浸透了莫斯提马按压在她腿间的手掌和深色的裤腿，发出清晰的撞击声！更多的液体则如同瀑布般奔流直下，将她早已湿透深染的白丝袜彻底泡在粘稠的液体里！

同时，她腿间那根被疯狂套弄的小巧肉棒，也达到了前所未有的喷射顶峰！一股股稀薄但滚烫的透明精水，如同失控的小型喷泉，“噗嗤！噗嗤！”地有力激射而出！尽数喷洒在她湿透的裙摆和紧贴大腿的白丝上！

后穴死死绞紧，传来撕裂般的快感！

胸前乳尖被拉扯到极限！

蕾缪乐的身体绷紧到了极致，如同被拉满到极致的弓弦，在莫斯提马霸道深吻的禁锢下，无声地、剧烈地抽搐着，达到了一个超越生理极限的、纯粹由快感构成的毁灭性顶峰！她的瞳孔彻底涣散，所有意识都化为虚无，只剩下身体在灭顶刺激下本能的、剧烈的痉挛反应。

莫斯提马终于结束了那个漫长而掠夺的深吻。她微微抬起头，银色的发丝垂落，沾染着蕾缪乐的口水和泪水。她看着怀中彻底失去意识、如同被彻底玩坏的人偶般软倒的少女。那双盛着星海的眼眸里，翻涌着深沉而复杂的餍足。她伸出舌尖，舔去自己唇边沾染的、混合着两人唾液和蕾缪乐泪水的湿痕，动作带着一种事后的慵懒和回味。

然后，她微微俯身，将唇凑到蕾缪乐汗湿的、毫无反应的耳边，用气音，如同烙印下最后的契约，轻轻呢喃：

“乖，睡吧，我可怜又可爱的小猫咪。下次…带你去吃苹果派。”

巷子深处，藤蔓的阴影温柔地覆盖下来，将两人相拥的身影，连同地上那滩散发着浓烈情欲气息的狼藉水洼，一同吞没。只剩下微风拂过树叶的沙沙声，以及怀中少女那微弱到几乎消失的、破碎的呼吸。纯白的丝袜湿透深染，紧贴着微微颤抖的玉腿，在昏暗中泛着淫靡的光泽。




`,tu=Object.freeze(Object.defineProperty({__proto__:null,default:eu},Symbol.toStringTag,{value:"Module"})),au=`---
order: 1
title: 变成泡芙的能天使~
---

# 变成泡芙的能天使~

这是N系列的简介。
`,su=Object.freeze(Object.defineProperty({__proto__:null,default:au},Symbol.toStringTag,{value:"Module"})),ou={class:"ark-chapter-list"},ru={key:0,class:"section-a"},iu=["href"],lu={key:1,class:"section-b"},cu={key:0},du=["href"],uu=k({__name:"ARKChapterList",setup(p){const n=N(()=>{const e=u=>typeof u=="string"?u:u&&typeof u.default=="string"?u.default:u&&typeof u.__content=="string"?u.__content:"",t=Object.assign({"/articles/ark/A/A.1.md":Id}),a=[];Object.entries(t).forEach(([u,f])=>{const b=u.match(/\/articles\/ark\/A\/(.+?)\.md$/);if(!b)return;const v=b[1],$=e(f),P=$.match(/^---\s*\n([\s\S]*?)\n---/);let A=999,T=v;if(P){const M=P[1].match(/order:\s*(\d+)/);M&&(A=parseInt(M[1],10))}const B=$.match(/^#\s+(.+)$/m);B&&(T=B[1]),a.push({order:A,title:T,path:`/articles/ark/A/${v}`})}),a.sort((u,f)=>u.order-f.order);const o=Object.assign({"/articles/ark/B/A/B.A.1and2.md":Dd,"/articles/ark/B/A/B.A.3and4.md":jd,"/articles/ark/B/A/B.A.5and6.md":Rd,"/articles/ark/B/A/index.md":Ud,"/articles/ark/B/N/B.N.1.md":Jd,"/articles/ark/B/N/B.N.2.md":Gd,"/articles/ark/B/N/B.N.3.md":Wd,"/articles/ark/B/N/B.N.4.md":Qd,"/articles/ark/B/N/B.N.5.1.md":Zd,"/articles/ark/B/N/B.N.5.2.md":pu,"/articles/ark/B/N/B.N.6.md":tu,"/articles/ark/B/N/index.md":su}),l=new Map;Object.entries(o).forEach(([u,f])=>{const b=u.match(/\/articles\/ark\/B\/(\w+)\/(.+?)\.md$/);if(!b)return;const[,v,$]=b,P=e(f);if($==="index"){const A=P.match(/^---\s*\n([\s\S]*?)\n---/);let T=999,B=v;if(A){const I=A[1].match(/order:\s*(\d+)/);I&&(T=parseInt(I[1],10))}const M=P.match(/^#\s+(.+)$/m);if(M)B=M[1];else if(A){const I=A[1].match(/title:\s*(.+)/);I&&(B=I[1].trim())}if(!l.has(v))l.set(v,{name:v,order:T,title:B,chapters:[]});else{const I=l.get(v);I.order=T,I.title=B}}else{const A=P.match(/^---\s*\n([\s\S]*?)\n---/);let T=999,B=$;if(A){const I=A[1].match(/order:\s*(\d+)/);I&&(T=parseInt(I[1],10))}const M=P.match(/^#\s+(.+)$/m);M&&(B=M[1]),l.has(v)||l.set(v,{name:v,order:999,title:v,chapters:[]}),l.get(v).chapters.push({order:T,title:B,path:`/articles/ark/B/${v}/${$}`})}});const c=Array.from(l.values());return c.forEach(u=>{u.chapters.sort((f,b)=>f.order-b.order)}),c.sort((u,f)=>u.order-f.order),{aChapters:a,series:c}});return(e,t)=>(s(),r("div",ou,[n.value.aChapters.length>0?(s(),r("section",ru,[t[0]||(t[0]=i("h3",null,"A 系列（短篇）",-1)),i("ul",null,[(s(!0),r(w,null,z(n.value.aChapters,a=>(s(),r("li",{key:a.path},[i("a",{href:a.path},L(a.title),9,iu)]))),128))])])):g("",!0),n.value.series.length>0?(s(),r("section",lu,[t[1]||(t[1]=i("h3",null,"B 系列（系列连载）",-1)),(s(!0),r(w,null,z(n.value.series,a=>(s(),r("div",{key:a.name,class:"series"},[i("h4",null,L(a.title),1),a.chapters.length>0?(s(),r("ul",cu,[(s(!0),r(w,null,z(a.chapters,o=>(s(),r("li",{key:o.path},[i("a",{href:o.path},L(o.title),9,du)]))),128))])):g("",!0)]))),128))])):g("",!0)]))}}),_u=h(uu,[["__scopeId","data-v-e236f069"]]),fu={class:"settings-page"},mu="reading_prompt_enabled",hu="last_read",Rn="reader_font",Hn="reader_font_size",Un="latest_update_banner",vu=k({__name:"SettingsPanel",setup(p){const n=($,P,A=-1)=>{const T=new Date;T.setTime(T.getTime()+A*24*60*60*1e3),document.cookie=`${$}=${encodeURIComponent(P)}; path=/; expires=${T.toUTCString()}`},e=$=>{const P=document.cookie.match(new RegExp("(?:^|; )"+$.replace(/([.$?*|{}()\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return P?decodeURIComponent(P[1]):null},t=()=>document.cookie.split(";").map($=>$.trim().split("=")[0]),a=$=>{document.documentElement.dataset.font=$,n(Rn,$,365)},o=$=>{document.documentElement.dataset.fontSize=$,n(Hn,$,365)},l=()=>{const $=e(Rn)||"sans",P=e(Hn)||"medium";document.documentElement.dataset.font=$,document.documentElement.dataset.fontSize=P;const A=document.getElementById("font-select"),T=document.getElementById("font-size-select");A&&(A.value=$),T&&(T.value=P)},c=$=>{localStorage.setItem(mu,String($)),alert($?"已开启提示":"已关闭提示")},u=$=>{const P=new Date;P.setTime(P.getTime()+31536e6),$?(document.cookie=`${Un}=0; path=/; expires=${P.toUTCString()}`,alert("已显示最新更新横幅")):(document.cookie=`${Un}=1; path=/; expires=${P.toUTCString()}`,alert("已隐藏最新更新横幅（刷新页面生效）"))},f=()=>{n(hu,"",-1),alert("已清除上次阅读记录")},b=()=>{t().forEach(P=>{n(P,"",-1)}),alert("已清除所有 Cookie")};return typeof window<"u"&&setTimeout(()=>{const $=document.getElementById("enable-prompt"),P=document.getElementById("disable-prompt"),A=document.getElementById("clear-history"),T=document.getElementById("enable-banner"),B=document.getElementById("disable-banner"),M=document.getElementById("clear-all-cookies"),I=document.getElementById("font-select"),D=document.getElementById("font-size-select");$?.addEventListener("click",()=>c(!0)),P?.addEventListener("click",()=>c(!1)),A?.addEventListener("click",()=>f()),T?.addEventListener("click",()=>u(!0)),B?.addEventListener("click",()=>u(!1)),M?.addEventListener("click",()=>b()),I?.addEventListener("change",()=>{const E=I.value;a(E)}),D?.addEventListener("change",()=>{const E=D.value;o(E)}),l()},0),($,P)=>(s(),r("div",fu,[...P[0]||(P[0]=[x("",4)])]))}}),bu=h(vu,[["__scopeId","data-v-22dea74c"]]),ku={extends:tp,Layout:Sc,NotFound:Bc,enhanceApp({app:p}){p.component("ChapterList",Cd),p.component("ARKChapterList",_u),p.component("SettingsPanel",bu)}};export{Gi as $,Rr as A,Co as B,Fr as C,Kr as D,Wr as E,Qr as F,ni as G,ei as H,si as I,ri as J,ci as K,ui as L,mi as M,vi as N,$i as O,Pi as P,Si as Q,ku as R,Ni as S,Vi as T,Li as U,Ii as V,Di as W,zi as X,Hi as Y,Ji as Z,Vo as _,So as __pageData,Io as a,Yi as a0,Xi as a1,pl as a2,tl as a3,ol as a4,il as a5,dl as a6,_l as a7,hl as a8,bl as a9,kl as aa,Tl as ab,Al as ac,Ol as ad,xl as ae,Cl as af,Ml as ag,El as ah,Rl as ai,Ul as aj,Kl as ak,ql as al,Ql as am,Zl as an,ec as ao,ac as ap,rc as aq,lc as ar,uc as as,Eo as b,Ea as c,zo as d,Oo as default,Uo as e,Jo as f,Yo as g,Zo as h,qo as i,pr as j,ar as k,or as l,lr as m,dr as n,fr as o,hr as p,gr as q,kr as r,yr as s,Ar as t,V as u,Br as v,xr as w,wr as x,Mr as y,jr as z};
