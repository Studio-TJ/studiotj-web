var _=Object.defineProperty;var p=(e,t,s)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var o=(e,t,s)=>(p(e,typeof t!="symbol"?t+"":t,s),s);import{_ as l,E as g,G as c,I as m,J as h,K as f,U as u,Z as v,L as j,r as x,o as S,$ as w,a0 as N,S as y,T as B,O as P,N as I}from"./index.d31ab49f.js";import{Q as k}from"./QImg.8172d54d.js";import{u as F,P as A}from"./states.26ff9e96.js";import"./QSpinner.cf4dfba6.js";class d{constructor(t,s,r,i,a){o(this,"name");o(this,"urlName");o(this,"imgSrcBase");o(this,"imgFileName");o(this,"imgAlt");this.name=t,this.urlName=s,this.imgSrcBase=r,this.imgFileName=i,this.imgAlt=a}get demoImgFullUrl(){return this.imgSrcBase+this.imgFileName}}const C={class:"container-box"},b={class:"absolute-bottom text-center font-serif text-weight-bold"},G=g({__name:"ProjectBlock",props:{project:{type:d,required:!0}},setup(e){const t=e;return(s,r)=>(c(),m("div",C,[h(j(k),{loading:"lazy",class:"img row text-white",fit:"scale-down",width:"95%",height:"72%",src:t.project.demoImgFullUrl,alt:t.project.imgAlt},{default:f(()=>[u("div",b,v(e.project.name),1)]),_:1},8,["src","alt"])]))}});var $=l(G,[["__scopeId","data-v-2305f75c"]]),E=[{name:"Smart Greenhouse",urlName:"smartgreenhouse",imgSrcBase:"https://cdn.studiotj.cc/projects/smartgreenhouse/",imgFileName:"IMG_3350_s.jpg",imgAlt:"Smart Greenhouse"},{name:"PiggySaving",urlName:"piggysaving",imgSrcBase:"https://cdn.studiotj.cc/projects/piggysaving/",imgFileName:"IMG_0001_s.jpg",imgAlt:"PiggySaving"}];const H=e=>(y("data-v-2d4c3e86"),e=e(),B(),e),M={class:"row justify-center projects-home-container"},T=H(()=>u("div",{class:"col-12 text-white text-center font-serif"},null,-1)),U=g({__name:"ProjectsHome",setup(e){const t=F(),s=x([]),r=P();S(()=>{t.setCurrentPage(A.PROJECTS),E.forEach(a=>{s.value.push(new d(a.name,a.urlName,a.imgSrcBase,a.imgFileName,a.imgAlt))})});function i(a){r.push("/projects/"+a)}return(a,z)=>(c(),m("div",M,[T,(c(!0),m(w,null,N(s.value,n=>(c(),I($,{id:"genreBlock",key:n.name,project:n,onClick:J=>i(n.urlName),class:"text-white col-xs-12 col-sm-6 col-md-4 col-lg-3"},null,8,["project","onClick"]))),128))]))}});var q=l(U,[["__scopeId","data-v-2d4c3e86"]]);export{q as default};
