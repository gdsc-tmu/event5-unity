import{g as M,a as F,r as g,u as N,j as t,s as A,c as b,b as D,i as U,R as y,P as T,S,T as p,d as B,I as L,L as G,B as I,D as W,e as q,f as H,h as z,k as V,l as O,m as Y,C as _,n as k,o as J,p as R,q as K,t as Q}from"./index-BoePbyY9.js";import{F as X,S as Z,u as $,p as tt,T as st}from"./useFav-BCWlSczo.js";function et(s){return M("MuiImageList",s)}F("MuiImageList",["root","masonry","quilted","standard","woven"]);const P=g.createContext({}),at=s=>{const{classes:e,variant:a}=s;return D({root:["root",a]},et,e)},ot=A("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[e.root,e[a.variant]]}})({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch",variants:[{props:{variant:"masonry"},style:{display:"block"}}]}),nt=g.forwardRef(function(e,a){const m=N({props:e,name:"MuiImageList"}),{children:l,className:x,cols:d=2,component:h="ul",rowHeight:n="auto",gap:o=4,style:u,variant:c="standard",...i}=m,r=g.useMemo(()=>({rowHeight:n,gap:o,variant:c}),[n,o,c]),j=c==="masonry"?{columnCount:d,columnGap:o,...u}:{gridTemplateColumns:`repeat(${d}, 1fr)`,gap:o,...u},w={...m,component:h,gap:o,rowHeight:n,variant:c},v=at(w);return t.jsx(ot,{as:h,className:b(v.root,v[c],x),ref:a,style:j,ownerState:w,...i,children:t.jsx(P.Provider,{value:r,children:l})})});function it(s){return M("MuiImageListItem",s)}const C=F("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),rt=s=>{const{classes:e,variant:a}=s;return D({root:["root",a],img:["img"]},it,e)},lt=A("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[{[`& .${C.img}`]:e.img},e.root,e[a.variant]]}})({display:"block",position:"relative",[`& .${C.img}`]:{objectFit:"cover",width:"100%",height:"100%",display:"block"},variants:[{props:{variant:"standard"},style:{display:"flex",flexDirection:"column"}},{props:{variant:"woven"},style:{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}}},{props:{variant:"standard"},style:{[`& .${C.img}`]:{height:"auto",flexGrow:1}}}]}),E=g.forwardRef(function(e,a){const m=N({props:e,name:"MuiImageListItem"}),{children:l,className:x,cols:d=1,component:h="li",rows:n=1,style:o,...u}=m,{rowHeight:c="auto",gap:i,variant:r}=g.useContext(P);let j="auto";r==="woven"?j=void 0:c!=="auto"&&(j=c*n+i*(n-1));const w={...m,cols:d,component:h,gap:i,rowHeight:c,rows:n,variant:r},v=rt(w);return t.jsx(lt,{as:h,className:b(v.root,v[r],x),ref:a,style:{height:j,gridColumnEnd:r!=="masonry"?`span ${d}`:void 0,gridRowEnd:r!=="masonry"?`span ${n}`:void 0,marginBottom:r==="masonry"?i:void 0,breakInside:r==="masonry"?"avoid":void 0,...o},ownerState:w,...u,children:g.Children.map(l,f=>g.isValidElement(f)?f.type==="img"||U(f,["Image"])?g.cloneElement(f,{className:b(v.img,f.props.className)}):f:null)})}),ct=({artwork:s,favs:e,isfav:a})=>{const[m,l]=y.useState(e),[x,d]=y.useState(a),[h,n]=y.useState(!1),o=`https://x.com/intent/tweet?text=${s.title}%0ACreated by ${s.creator}%0Awith GDGoC TMU&hashtags=unitychrome&url=https://gdsc-tmu.github.io/event5-unity/artworks/${s.id}`;async function u(){h||(n(!0),x?(l(i=>i-1),d(!1),await $(s.id,"decrement")):(l(i=>i+1),d(!0),await $(s.id,"increment")),n(!1))}const c=()=>x?tt[500]:"gray";return t.jsxs(T,{sx:{width:"100%",p:5},children:[s.thumbnail.length>0&&t.jsxs(nt,{sx:{width:"100%",height:"500px"},rowHeight:200,children:[t.jsx(E,{cols:2,rows:2,children:t.jsx("iframe",{style:{pointerEvents:"none",cursor:"default"},width:"100%",height:"100%",src:s.thumbnail[0]})}),s.thumbnail.slice(1).map((i,r)=>t.jsx(E,{cols:1,rows:1,children:t.jsx("iframe",{style:{pointerEvents:"none",cursor:"default"},width:"100%",height:"100%",src:i})},r))]}),t.jsxs(S,{direction:"row",gap:1,mt:3,mb:1,ml:1,mr:2,children:[t.jsx(p,{color:"textSecondary",children:B(s.time_stamp)}),s.tags.map((i,r)=>t.jsx(p,{color:"primary",variant:"body1",children:i},r))]}),t.jsxs(S,{direction:"row",alignItems:"center",mt:1,children:[t.jsx(L,{"aria-label":"add to favorites",onClick:u,children:t.jsx(X,{sx:{color:c()}})}),t.jsx(p,{sx:{color:c(),mr:1},children:m}),t.jsx(L,{"aria-label":"share",sx:{mr:1},component:G,to:o,children:t.jsx(Z,{})})]}),t.jsxs(I,{sx:{mb:3,pt:3},children:[t.jsx(p,{variant:"h6",children:"ゲームの詳細"}),t.jsx(W,{sx:{my:2}}),t.jsx(p,{sx:{whiteSpace:"pre-wrap"},children:s.detail})]})]})},ut=()=>{const s=q(),e=H(),a=e.state.artwork,m=z(),[l,x]=y.useState(a),[d,h]=y.useState(!!a),n=V("getartworkbyid",s.id);return y.useEffect(()=>{a||(async()=>{const u=await Q(n);x(u),h(!0)})()},[]),t.jsxs("div",{className:"flex-grow overflow-hidden relative flex",children:[O.map((o,u)=>t.jsx("div",{className:"circle "+Y[o.color],style:{top:`${o.top}%`,left:`${o.left}%`}},u)),t.jsx("div",{className:"glass w-full pb-10 grow",children:t.jsxs(_,{children:[t.jsxs(I,{sx:{my:3},children:[t.jsx(k,{variant:"outlined",size:"small",sx:{my:3},onClick:()=>m("/artworks"),children:"作品一覧へ"}),t.jsx(I,{sx:{ml:1},children:d?t.jsxs(t.Fragment,{children:[t.jsx(p,{variant:"h5",sx:{mb:1,fontWeight:600},children:l.title}),t.jsx(p,{variant:"body1",sx:{mb:3},children:l.creator}),t.jsx(st,{title:l.link,children:t.jsx(k,{variant:"contained",size:"large",onClick:()=>J(l.link),children:"遊びに行く"})})]}):t.jsxs(t.Fragment,{children:[t.jsx(R,{height:"4em",sx:{mb:.5,maxWidth:600}}),t.jsx(R,{height:"2em",sx:{maxWidth:150}})]})})]}),t.jsx(S,{children:d?t.jsx(ct,{artwork:l,favs:e.state.fav,isfav:e.state.favClicked}):t.jsx(I,{sx:{display:"flex",width:"100%",justifyContent:"center"},children:t.jsx(K,{})})})]})})]})};export{ut as default};
