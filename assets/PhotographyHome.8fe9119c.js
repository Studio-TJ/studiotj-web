var _=Object.defineProperty;var h=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>(h(e,typeof t!="symbol"?t+"":t,a),a);import{_ as l,E as g,G as s,I as m,J as p,K as f,U as u,Z as v,L as S,r as N,o as x,$ as B,a0 as y,S as w,T as A,O as C,N as F}from"./index.d31ab49f.js";import{Q as k}from"./QImg.8172d54d.js";import{u as P,P as j}from"./states.26ff9e96.js";import"./QSpinner.cf4dfba6.js";class d{constructor(t,a,o,c,i){r(this,"name");r(this,"urlName");r(this,"imgSrcBase");r(this,"imgFileName");r(this,"imgAlt");this.name=t,this.urlName=a,this.imgSrcBase=o,this.imgFileName=c,this.imgAlt=i}get demoImgFullUrl(){return this.imgSrcBase+this.imgFileName}}const I={id:"containerBox"},G={class:"absolute-bottom text-center font-serif text-weight-bold"},H=g({__name:"GenreBlock",props:{genre:{type:d,required:!0}},setup(e){const t=e;return(a,o)=>(s(),m("div",I,[p(S(k),{id:"img",loading:"lazy",class:"row text-white",fit:"scale-down",width:"95%",height:"72%",src:t.genre.demoImgFullUrl,alt:t.genre.imgAlt},{default:f(()=>[u("div",G,v(e.genre.name),1)]),_:1},8,["src","alt"])]))}});var D=l(H,[["__scopeId","data-v-e848805c"]]),$=[{name:"Still Life and Product",urlName:"still-life-and-product",imgSrcBase:"https://cdn.studiotj.cc/img/genre/still-life-and-product/",imgFileName:"DSC03764_s.jpg",imgAlt:"Still Life and Product"},{name:"Architecture",urlName:"architecture",imgSrcBase:"https://cdn.studiotj.cc/img/genre/architecture/",imgFileName:"DSC01932_s.jpg",imgAlt:"Architecture"},{name:"Aviation",urlName:"aviation",imgSrcBase:"https://cdn.studiotj.cc/img/genre/aviation/",imgFileName:"_DSC2151_s.jpg",imgAlt:"Aviation"},{name:"Cuisine",urlName:"cuisine",imgSrcBase:"https://cdn.studiotj.cc/img/genre/cuisine/",imgFileName:"_DSC1834_s.jpg",imgAlt:"Cuisine"}];const b=e=>(w("data-v-aa60366c"),e=e(),A(),e),L={id:"photographyHomeContainer",class:"row justify-center"},E=b(()=>u("div",{class:"col-12 text-white text-center font-serif"},null,-1)),O=g({__name:"PhotographyHome",setup(e){const t=P(),a=N([]),o=C();x(()=>{t.setCurrentPage(j.PHOTOGRAPHY),$.forEach(i=>{a.value.push(new d(i.name,i.urlName,i.imgSrcBase,i.imgFileName,i.imgAlt))})});function c(i){o.push("/photography/"+i)}return(i,T)=>(s(),m("div",L,[E,(s(!0),m(B,null,y(a.value,n=>(s(),F(D,{id:"genreBlock",key:n.name,genre:n,onClick:U=>c(n.urlName),class:"text-white col-xs-12 col-sm-6 col-md-4 col-lg-3"},null,8,["genre","onClick"]))),128))]))}});var J=l(O,[["__scopeId","data-v-aa60366c"]]);export{J as default};
