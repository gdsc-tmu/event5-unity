import{j as e,C as m,u as i,S as o,a as g,b as l,P as j,T as a,c as p,B as v,R as c,d as f,e as C,f as y,g as w,h as b,G as x}from"./index-BGmU9SRJ.js";function k(t){const s=new Date(t);return`${s.getMonth()+1}/${s.getDate()} ${s.getHours()}:${("0"+s.getMinutes()).slice(-2)}`}const S=({doc:t,isLoaded:s})=>(t.thumbnail===""&&(t.thumbnail="https://drive.google.com/file/d/10QvHYUCughbPHZdtcUk1Cqee6v_GOIaC/preview"),e.jsxs(m,{sx:{width:"100%","&:hover":{boxShadow:7},cursor:"pointer"},elevation:3,onClick:()=>i(t.link),children:[s?e.jsx("iframe",{src:t.thumbnail,className:"w-full h-[250px]",style:{pointerEvents:"none"}}):e.jsx(o,{variant:"rectangular",sx:{height:200}}),e.jsx(g,{children:s?e.jsxs(e.Fragment,{children:[e.jsxs(l,{direction:"row",alignItems:"center",gap:1,children:[t.pinned&&e.jsx(j,{color:"disabled",fontSize:"small"}),e.jsx(a,{variant:"overline",color:"textSecondary",sx:{verticalAlign:"top"},children:k(t.time_stamp)})]}),e.jsx(a,{gutterBottom:!0,variant:"h5",component:"div",sx:{cursor:"pointer"},onClick:()=>i(t.link),children:t.title}),e.jsx(a,{variant:"body2",sx:{color:"text.secondary",cursor:"pointer"},onClick:()=>i(t.link),children:t.summary})]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"text",sx:{fontSize:"2rem"}}),e.jsx(o,{variant:"rounded",width:210,height:60})]})}),e.jsx(p,{onClick:()=>i(t.link),children:s&&e.jsx(v,{variant:"text",onClick:()=>i(t.link),children:"もっと見る"})})]})),G=()=>{const t=useGAS("getalldoc"),[s,d]=c.useState([1,2,3]),[h,u]=c.useState(!1);return c.useEffect(()=>{console.log("Welcome to GDGoC TMU. Now loading..."),(async()=>{const r=await useFetch(t);u(!0),d(r),console.log("Fetching successfully completed.")})()},[]),e.jsxs("div",{className:"w-full overflow-hidden relative",children:[f.map((n,r)=>e.jsx("div",{className:"circle "+C[n.color],style:{top:`${n.top}%`,left:`${n.left}%`}},r)),e.jsx("div",{className:"glass w-full pb-10",children:e.jsxs(y,{sx:{py:3},children:[e.jsxs(w,{sx:{my:3},children:[e.jsx(a,{variant:"h5",sx:{mb:1,fontWeight:600},children:"「Unity勉強会 – クロームくんを動かそう！ –」サポートページ"}),e.jsx(a,{variant:"body2",color:"textSecondary",children:"Powered by GDGoC TMU"})]}),e.jsxs(l,{gap:1,pt:3,children:[!h&&e.jsx(l,{sx:{alignItems:"center",mb:3},children:e.jsx(b,{})}),e.jsx(x,{container:!0,spacing:2,children:s.length>0?s.map((n,r)=>e.jsx(x,{size:{xs:12,sm:6,md:4},children:e.jsx(S,{doc:n,isLoaded:h})},r)):e.jsx(l,{sx:{width:"100%",height:300,alignItems:"center",pt:10},children:e.jsx(a,{variant:"h6",children:"見つかりませんでした"})})})]})]})})]})};export{G as default};
