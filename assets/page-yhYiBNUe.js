import{g as B,a as q,r as T,u as K,v as ge,w as ve,x as ye,y as Ce,z as Se,j as o,s as y,c as Z,b as _,A as oe,E as ie,F as ee,G as N,T as j,H as se,R as I,J as be,K as re,S as Q,M as we,I as X,L as je,n as Me,o as Re,B as le,D as Ee,h as Pe,l as Te,m as Ae,C as Ie,q as ze,N as ae,t as He,k as Ne}from"./index-BoePbyY9.js";import{F as ke,S as De,T as $e,u as ne,p as Fe}from"./useFav-BCWlSczo.js";function Ue(e){return B("MuiCollapse",e)}q("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ge=e=>{const{orientation:t,classes:s}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return _(n,Ue,s)},Le=y("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.orientation],s.state==="entered"&&t.entered,s.state==="exited"&&!s.in&&s.collapsedSize==="0px"&&t.hidden]}})(ie(({theme:e})=>({height:0,overflow:"hidden",transition:e.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:e.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:t})=>t.state==="exited"&&!t.in&&t.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),We=y("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),Oe=y("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),Y=T.forwardRef(function(t,s){const n=K({props:t,name:"MuiCollapse"}),{addEndListener:l,children:c,className:i,collapsedSize:r="0px",component:R,easing:h,in:x,onEnter:f,onEntered:g,onEntering:m,onExit:M,onExited:d,onExiting:p,orientation:u="vertical",style:C,timeout:v=ge.standard,TransitionComponent:k=ve,...S}=n,A={...n,orientation:u,collapsedSize:r},E=Ge(A),L=ye(),J=Ce(),P=T.useRef(null),U=T.useRef(),D=typeof r=="number"?`${r}px`:r,z=u==="horizontal",H=z?"width":"height",$=T.useRef(null),ce=Se(s,$),F=a=>b=>{if(a){const w=$.current;b===void 0?a(w):a(w,b)}},V=()=>P.current?P.current[z?"clientWidth":"clientHeight"]:0,de=F((a,b)=>{P.current&&z&&(P.current.style.position="absolute"),a.style[H]=D,f&&f(a,b)}),pe=F((a,b)=>{const w=V();P.current&&z&&(P.current.style.position="");const{duration:G,easing:W}=oe({style:C,timeout:v,easing:h},{mode:"enter"});if(v==="auto"){const te=L.transitions.getAutoHeightDuration(w);a.style.transitionDuration=`${te}ms`,U.current=te}else a.style.transitionDuration=typeof G=="string"?G:`${G}ms`;a.style[H]=`${w}px`,a.style.transitionTimingFunction=W,m&&m(a,b)}),ue=F((a,b)=>{a.style[H]="auto",g&&g(a,b)}),he=F(a=>{a.style[H]=`${V()}px`,M&&M(a)}),me=F(d),fe=F(a=>{const b=V(),{duration:w,easing:G}=oe({style:C,timeout:v,easing:h},{mode:"exit"});if(v==="auto"){const W=L.transitions.getAutoHeightDuration(b);a.style.transitionDuration=`${W}ms`,U.current=W}else a.style.transitionDuration=typeof w=="string"?w:`${w}ms`;a.style[H]=D,a.style.transitionTimingFunction=G,p&&p(a)}),xe=a=>{v==="auto"&&J.start(U.current||0,a),l&&l($.current,a)};return o.jsx(k,{in:x,onEnter:de,onEntered:ue,onEntering:pe,onExit:he,onExited:me,onExiting:fe,addEndListener:xe,nodeRef:$,timeout:v==="auto"?null:v,...S,children:(a,{ownerState:b,...w})=>o.jsx(Le,{as:R,className:Z(E.root,i,{entered:E.entered,exited:!x&&D==="0px"&&E.hidden}[a]),style:{[z?"minWidth":"minHeight"]:D,...C},ref:ce,ownerState:{...A,state:a},...w,children:o.jsx(We,{ownerState:{...A,state:a},className:E.wrapper,ref:P,children:o.jsx(Oe,{ownerState:{...A,state:a},className:E.wrapperInner,children:c})})})})});Y&&(Y.muiSupportAuto=!0);const Be=ee(o.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function qe(e){return B("MuiAvatar",e)}q("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Ke=e=>{const{classes:t,variant:s,colorDefault:n}=e;return _({root:["root",s,n&&"colorDefault"],img:["img"],fallback:["fallback"]},qe,t)},_e=y("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.colorDefault&&t.colorDefault]}})(ie(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),Je=y("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Ve=y(Be,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Qe({crossOrigin:e,referrerPolicy:t,src:s,srcSet:n}){const[l,c]=T.useState(!1);return T.useEffect(()=>{if(!s&&!n)return;c(!1);let i=!0;const r=new Image;return r.onload=()=>{i&&c("loaded")},r.onerror=()=>{i&&c("error")},r.crossOrigin=e,r.referrerPolicy=t,r.src=s,n&&(r.srcset=n),()=>{i=!1}},[e,t,s,n]),l}const Xe=T.forwardRef(function(t,s){const n=K({props:t,name:"MuiAvatar"}),{alt:l,children:c,className:i,component:r="div",slots:R={},slotProps:h={},imgProps:x,sizes:f,src:g,srcSet:m,variant:M="circular",...d}=n;let p=null;const u={...n,component:r,variant:M},C=Qe({...x,...typeof h.img=="function"?h.img(u):h.img,src:g,srcSet:m}),v=g||m,k=v&&C!=="error";u.colorDefault=!k,delete u.ownerState;const S=Ke(u),[A,E]=N("img",{className:S.img,elementType:Je,externalForwardedProps:{slots:R,slotProps:{img:{...x,...h.img}}},additionalProps:{alt:l,src:g,srcSet:m,sizes:f},ownerState:u});return k?p=o.jsx(A,{...E}):c||c===0?p=c:v&&l?p=l[0]:p=o.jsx(Ve,{ownerState:u,className:S.fallback}),o.jsx(_e,{as:r,className:Z(S.root,i),ref:s,...d,ownerState:u,children:p})});function Ye(e){return B("MuiCardHeader",e)}const O=q("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Ze=e=>{const{classes:t}=e;return _({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Ye,t)},et=y("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>[{[`& .${O.title}`]:t.title},{[`& .${O.subheader}`]:t.subheader},t.root]})({display:"flex",alignItems:"center",padding:16}),tt=y("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),ot=y("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),st=y("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto",[`.${se.root}:where(& .${O.title})`]:{display:"block"},[`.${se.root}:where(& .${O.subheader})`]:{display:"block"}}),rt=T.forwardRef(function(t,s){const n=K({props:t,name:"MuiCardHeader"}),{action:l,avatar:c,component:i="div",disableTypography:r=!1,subheader:R,subheaderTypographyProps:h,title:x,titleTypographyProps:f,slots:g={},slotProps:m={},...M}=n,d={...n,component:i,disableTypography:r},p=Ze(d),u={slots:g,slotProps:{title:f,subheader:h,...m}};let C=x;const[v,k]=N("title",{className:p.title,elementType:j,externalForwardedProps:u,ownerState:d,additionalProps:{variant:c?"body2":"h5",component:"span"}});C!=null&&C.type!==j&&!r&&(C=o.jsx(v,{...k,children:C}));let S=R;const[A,E]=N("subheader",{className:p.subheader,elementType:j,externalForwardedProps:u,ownerState:d,additionalProps:{variant:c?"body2":"body1",color:"textSecondary",component:"span"}});S!=null&&S.type!==j&&!r&&(S=o.jsx(A,{...E,children:S}));const[L,J]=N("root",{ref:s,className:p.root,elementType:et,externalForwardedProps:{...u,...M,component:i},ownerState:d}),[P,U]=N("avatar",{className:p.avatar,elementType:tt,externalForwardedProps:u,ownerState:d}),[D,z]=N("content",{className:p.content,elementType:st,externalForwardedProps:u,ownerState:d}),[H,$]=N("action",{className:p.action,elementType:ot,externalForwardedProps:u,ownerState:d});return o.jsxs(L,{...J,children:[c&&o.jsx(P,{...U,children:c}),o.jsxs(D,{...z,children:[C,S]}),l&&o.jsx(H,{...$,children:l})]})});function at(e){return B("MuiCardMedia",e)}q("MuiCardMedia",["root","media","img"]);const nt=e=>{const{classes:t,isMediaComponent:s,isImageComponent:n}=e;return _({root:["root",s&&"media",n&&"img"]},at,t)},it=y("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{isMediaComponent:n,isImageComponent:l}=s;return[t.root,n&&t.media,l&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),lt=["video","audio","picture","iframe","img"],ct=["picture","img"],dt=T.forwardRef(function(t,s){const n=K({props:t,name:"MuiCardMedia"}),{children:l,className:c,component:i="div",image:r,src:R,style:h,...x}=n,f=lt.includes(i),g=!f&&r?{backgroundImage:`url("${r}")`,...h}:h,m={...n,component:i,isMediaComponent:f,isImageComponent:ct.includes(i)},M=nt(m);return o.jsx(it,{className:Z(M.root,c),as:i,role:!f&&r?"img":void 0,ref:s,style:g,ownerState:m,src:f?r||R:void 0,...x,children:l})}),pt=ee(o.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),ut=ee(o.jsx("path",{d:"m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91M11 11H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"SportsEsports"),ht=y(e=>{const{expand:t,...s}=e;return o.jsx(X,{...s})})(({theme:e})=>({marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),variants:[{props:({expand:t})=>!t,style:{transform:"rotate(0deg)"}},{props:({expand:t})=>!!t,style:{transform:"rotate(180deg)"}}]}));function mt({artwork:e,nav:t}){const[s,n]=I.useState(!1),[l,c]=I.useState(e.fav),[i,r]=I.useState(!1),[R,h]=I.useState(!1);function x(){t("/artworks/"+e.id,{state:{artwork:e,fav:l,favClicked:i}})}async function f(){R||(h(!0),i?(c(d=>d-1),r(!1),await ne(e.id,"decrement")):(c(d=>d+1),r(!0),await ne(e.id,"increment")),h(!1))}const g=()=>{n(!s)},m=()=>i?Fe[500]:"gray",M=`https://x.com/intent/tweet?text=${e.title}%0ACreated by ${e.creator}%0Awith GDGoC TMU&hashtags=unitychrome&url=https://gdsc-tmu.github.io/event5-unity/artworks/${e.id}`;return o.jsxs(be,{sx:{flexGrow:1,"&:hover":{boxShadow:7}},children:[o.jsx(rt,{avatar:o.jsx(Xe,{children:o.jsx(ut,{})}),slotProps:{title:{variant:"h6"}},title:e.title,subheader:e.creator,onClick:x,sx:{cursor:"pointer"}}),o.jsx(dt,{component:"iframe",height:"250",image:e.thumbnail.length>0?e.thumbnail[0]:"https://drive.google.com/file/d/15KmEPtofPUHvhSv8beM72it2FE92xg7n/preview?embedded=true",alt:""}),o.jsxs(re,{onClick:x,sx:{cursor:"pointer"},children:[o.jsx(Q,{direction:"row",gap:1,mb:1,children:e.tags.map((d,p)=>o.jsx(j,{color:"primary",variant:"body2",children:d},p))}),o.jsx(j,{variant:"body2",sx:{color:"text.secondary",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:e.detail})]}),o.jsxs(we,{disableSpacing:!0,children:[o.jsx(X,{"aria-label":"add to favorites",onClick:f,children:o.jsx(ke,{sx:{color:m()}})}),o.jsx(j,{sx:{color:m(),mr:1},children:l}),o.jsx(X,{"aria-label":"share",sx:{mr:1},component:je,to:M,children:o.jsx(De,{})}),o.jsx($e,{title:e.link,children:o.jsx(Me,{variant:"text",onClick:()=>Re(e.link),children:"遊びに行く"})}),o.jsx(ht,{expand:s,onClick:g,"aria-expanded":s,"aria-label":"show more",children:o.jsx(pt,{})})]}),o.jsx(Y,{in:s,timeout:"auto",unmountOnExit:!0,children:o.jsx(re,{children:o.jsxs(le,{sx:{mb:3,px:1},children:[o.jsx(j,{variant:"h6",children:"ゲームの詳細"}),o.jsx(Ee,{sx:{my:1}}),o.jsx(j,{sx:{whiteSpace:"pre-wrap"},children:e.detail})]})})})]})}async function ft(){}const vt=()=>{const e=Ne("getallartworks"),[t,s]=I.useState(),[n,l]=I.useState(!1),c=Pe();return I.useEffect(()=>()=>{ft()},[]),I.useEffect(()=>{console.log("Welcome to GDGoC TMU. Now loading..."),(async()=>{const r=await He(e);l(!0),s(r)})()},[]),o.jsxs("div",{className:"flex-grow overflow-hidden relative flex",children:[Te.map((i,r)=>o.jsx("div",{className:"circle "+Ae[i.color],style:{top:`${i.top}%`,left:`${i.left}%`}},r)),o.jsx("div",{className:"glass w-full pb-10 grow",children:o.jsxs(Ie,{sx:{py:3},children:[o.jsxs(le,{sx:{my:3},children:[o.jsx(j,{variant:"h5",sx:{mb:1,fontWeight:600},children:"「Unity勉強会」みんなの作品"}),o.jsx(j,{variant:"body2",color:"textSecondary",children:"Powered by GDGoC TMU"})]}),o.jsx(Q,{gap:1,pt:3,sx:{},children:n?o.jsx(ae,{container:!0,spacing:2,children:t.map((i,r)=>o.jsx(ae,{size:{xs:12,md:6},children:o.jsx(mt,{artwork:i,nav:c})},r))}):o.jsx(Q,{sx:{alignItems:"center",mb:3},children:o.jsx(ze,{})})})]})})]})};export{vt as default};
